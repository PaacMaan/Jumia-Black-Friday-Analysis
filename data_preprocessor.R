####################################################
### this script will do the data preprocessing for 
### our data set in order to get it ready to explore
####################################################

#load needed library
library(tidyr)
library(dplyr)
library(tm)

# first of all we read our data set into a data frame
data_set <- read.csv("/home/pacman/Jumia_Black_Friday_Analysis/data_set/result.csv", header = TRUE, sep = ",")
# let's visualise the head of data_set
head(data_set, 20)

# extract the reactions as a new data frame
df_react <- data_set[,2:4]

# processing reactions dataframe
df_react$id = 1:nrow(df_react)
xxlong = gather(df_react, key = "key", value = "value", -id)
xxlong = separate(xxlong, value, into = c("num", "attr"))
xxlong %>% na.omit %>% select(-key) %>%
  spread(key = attr, value = num, fill = 0) -> res

# now we can bind the two data frames 
result <- cbind(data_set,res)
# filter our data set from unwanted columns
result <- result[, c("review","username","rating","date","Angry","Haha","Like","Love","Sad","Wow")]


# Extract only the rating number from the rating values
for (i in 1:nrow(test)) {
  data_set$rating <- sapply(data_set$rating,function(x) gsub(" star","",x))
}

# Transform the date to a clear format like : dd/mm/YYYY hh:mm
data_set$date <- mdy_hm(data_set$date)

# Clean non alphabetical characters
data_set$review <- str_replace_all(data_set$review, "[^[:alnum:]]", " ")

# Save our data set in a csv file
write.table(data_set, file = "/home/pacman/Jumia_Black_Friday_Analysis/data_set/result_1.csv",sep = ",", row.names = FALSE, col.names = T)




# 
# data_mehdi <- read.csv("/home/pacman/Downloads/STASOLD3[CD_W_MINITAB16]/Data_Sets/CSV Files/fl_crime.csv", header = TRUE, sep = ",")
# data_1 <- data_mehdi[, 1:6]
# data_2 <- data_mehdi[, 7:10]
# data_2 <- cbind(data_2,data_mehdi[,1])
# 
# write.table(data_1, file = "/home/pacman/data_1.csv",sep = ",", row.names = FALSE, col.names = T)
# write.table(data_2, file = "/home/pacman/data_2.csv",sep = ",", row.names = FALSE, col.names = T)
