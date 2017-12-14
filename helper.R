# this function return a vector containing the longitude and lattitude of a location
# params : adress
# return : c(lon,lat)
geocodeAdddress <- function(address) {
  require(RJSONIO)
  url <- "http://maps.google.com/maps/api/geocode/json?address="
  url <- URLencode(paste(url, address, "&sensor=false", sep = ""))
  url
  x <- fromJSON(url, simplify = FALSE)
  if (x$status == "OK") {
    out <- c(x$results[[1]]$geometry$location$lng,
             x$results[[1]]$geometry$location$lat)
  } else {
    out <- NA
  }
  return(out)
}


# this function check if the comment is in arabic or not
# params : text
# return : boolean True if is arabic & false if it's not
is_arabic <- function(text) {
  grepl("[\u0600-\u06ff]|[\u0750-\u077f]|[\ufb50-\ufc3f]|[\ufe70-\ufefc]", text, perl=FALSE)
}