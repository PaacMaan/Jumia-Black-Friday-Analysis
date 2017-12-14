/* function to remove HTML tags from a code
* @param {Object} code -- text 
*/
function removeHTML(code)
{
   var tmp = document.createElement("DIV");
   tmp.innerHTML = code;
   return tmp.textContent || tmp.innerText || "";
}

/* function to save JSON to file from browser
* adapted from http://bgrins.github.io/devtools-snippets/#console-save
* @param {Object} data -- json object to save
* @param {String} file -- file name to save to 
*/
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
* function to check if reaction is undefined or not
* @param {Object} reaction -- DOM element
*/
function cleanObject(obj) {
	if (obj) {
		return obj
	}
	return "na"
}



/* 
* function to get users username or id so
* that we can fetch them to extract gender & location
* @param {Object} url -- DOM element
* @return {String} username -- user id or user name
*/
function getUserName(url){
	var username = "";
	username = url.substring(25, url.lastIndexOf("?"));
	if (username === "profile.php") {
		username = url.substring(25, url.indexOf("&"));
	}
	//console.log(username)
	return username;
}

/* 
* The main function that 
* will get the desired data
*/

var scroll = setInterval(function(){ window.scrollBy(0,10000); }, 1000);
var list = new Array();
var waitScroll = setInterval(function(){
	var L = 10000
	for (i=0 ; i<L; i++){
		var basic_component = document.getElementsByClassName("_4-u2 mbm _4mrt _5jmm _5pat _5v3q _4-u8")[i];
		var review = basic_component.getElementsByClassName("_5pbx userContent _3576")[0].innerText;
		var date = basic_component.getElementsByClassName("_5pcq")[0];
		date = date.getElementsByTagName('abbr')[0].title;
		var rating = removeHTML(basic_component.getElementsByClassName("_51mq")[0].innerHTML);
		var username = getUserName(basic_component.getElementsByClassName("profileLink")[0].getAttribute("href"));
		/* Get reactions components for our review*/
		var reactionsComponent = basic_component.getElementsByClassName("_1vaq")[0];
		var reactions = new Array();
		if (reactionsComponent) {
			var sizeOfReacts = reactionsComponent.getElementsByClassName("_3emk").length;
			for (var j = 0; j < sizeOfReacts; j++) {
				reactions.push(cleanObject(reactionsComponent.getElementsByClassName("_3emk")[j].getAttribute("aria-label")))
			}
		}else{
			reactions.push(null)
		}
		list.push({"review" : review, "date" : date, "rating" : rating, "username" : username, "reactions" : reactions});
	}

	/*for (i=0 ; i<L; i++){
		console.log(list[i]);
	}*/
}, 2000);