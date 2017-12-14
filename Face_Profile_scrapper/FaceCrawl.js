/*
* Set some global variables
*/
var base_url = "https://m.facebook.com/";
var targeted_url = "";
var list_users = new Array();


/* 
* function to get Gender & location 
* based on the username
*/
function getGenderAndLocation(username) {
	if (username.toString().substring(0,11) === "profile.php") {
		var id_user = username.toString().substring(username.lastIndexOf("=")+1, username.length)
		targeted_url = base_url+"profile.php?v=info&id="+id_user
	} else {
		targeted_url = base_url+username+"/about"
	}
	/*
	* once we get the username we concatenate
	* it with the base_url to get the source code
	*/
	$.ajax({
		url : targeted_url,
		type : "GET",
		success : function(result){
			var htmlDoc = parseHTML(result);
			var gender = htmlDoc.getElementById("basic-info");
			if (gender == null) {
				gender = "N/A";
			}else{
				gender = gender.querySelector('[title="Gender"]');
				if (gender == null) {
					gender = "N/A";
				}else{
					gender = gender.getElementsByClassName("_5cdv r")[0].innerText;
				}			
			}
			var location = htmlDoc.getElementById("living");
			if (location == null) {
				location = "N/A";
			} else {
				location = location.getElementsByClassName("_4g34 _5b6q _5b6p _5i2i _52we")[0].getElementsByTagName("h4")[0].innerText;
			}
			console.log("username is "+username+" gender is "+gender+" and location is "+location);
			list_users.push({"username" : username, "gender" : gender, "location" : location});
		},
		error : function(){
			alert("error")
		}
	})
}



/* 
* function to parse text to DOM element
* @return {DOM} object 
*/
function parseHTML(html) {
    var t = document.createElement('template');
    t.innerHTML = html;
    return t.content.cloneNode(true);
}

function saveJSON(data, filename){

    if(!data) {
        console.error('No data')
        return;
    }

    if(!filename) filename = 'console.json'

    if(typeof data === "object"){
        data = JSON.stringify(data, undefined, 4)
    }

    var blob = new Blob([data], {type: 'text/json'}),
        e    = document.createEvent('MouseEvents'),
        a    = document.createElement('a')

    a.download = filename
    a.href = window.URL.createObjectURL(blob)
    a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    a.dispatchEvent(e)
}

/*
* function to fetch every user gender & location
* @return {list_user} == JSON object
* Main function
*/

function main(jsonObj) {
	setTimeout(function(){
    	for (var i = 0; i < data.length; i++) {
			getGenderAndLocation(data[i].username);
		}
	}, 3000);
}



