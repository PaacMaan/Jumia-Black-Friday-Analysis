var list = new Array();

function removeHTML(code)
{
   var tmp = document.createElement("DIV");
   tmp.innerHTML = code;
   return tmp.textContent || tmp.innerText || "";
}

var scroll = setInterval(function(){ window.scrollBy(0,10000); }, 1000);

var waitScroll = setTimeout(function(){ 


var L = parseInt(document.getElementsByClassName("_5pbx userContent _3576").length);
for (i=0 ; i<5; i++){
list.push(removeHTML(document.getElementsByClassName("_5pbx userContent _3576")[i].innerHTML));
}

for (i=0 ; i<5; i++){

	console.log(list[i]);

}


 }, 10000);



localStorage.setItem("list", JSON.stringify(list));
//alert('hello world')

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

saveJSON(list, "saved_data.json");


/*var reactions = {
			"like" : getReaction(reactionsComponent.getElementsByClassName("_3emk")[0].getAttribute("aria-label")),
			"love" : getReaction(reactionsComponent.getElementsByClassName("_3emk")[1].getAttribute("aria-label")),
			"haha" : getReaction(reactionsComponent.getElementsByClassName("_3emk")[2].getAttribute("aria-label")),
			"wow" : getReaction(reactionsComponent.getElementsByClassName("_3emk")[3].getAttribute("aria-label")),
			"sad" : getReaction(reactionsComponent.getElementsByClassName("_3emk")[4].getAttribute("aria-label")),
			"angry" : getReaction(reactionsComponent.getElementsByClassName("_3emk")[5].getAttribute("aria-label")),
			}*/



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
function getReaction(reaction) {
	if (reaction) {
		return reaction
	}
	return "0"
}


/* 
* The main function that 
* will get the desired data
*/

//var scroll = setInterval(function(){ window.scrollBy(0,10000); }, 1000);
var list = new Array();
var waitScroll = setTimeout(function(){
	var L = parseInt(document.getElementsByClassName("_5pbx userContent _3576").length);
	for (i=0 ; i<10; i++){
		var _id = i;
		var review = removeHTML(document.getElementsByClassName("_5pbx userContent _3576")[i].innerHTML);
		var date = removeHTML(document.getElementsByClassName("timestampContent")[i].innerHTML);
		var stars = removeHTML(document.getElementsByClassName("_51mq img sp_P4dHPMLAVud sx_40e17c")[i].innerHTML);
		var publisher_link = document.getElementsByClassName("profileLink")[i].getAttribute("href")
		/* Get the reacts components */
		/*var reactionsComponent = document.getElementsByClassName("_1vaq")[i];
		var sizeOfReacts = reactionsComponent.getElementsByClassName("_3emk").length;
		var reactions = new Array();
		for (var j = 0; j < sizeOfReacts; j++) {
			reactions.push(getReaction(reactionsComponent.getElementsByClassName("_3emk")[j].getAttribute("aria-label")))
		}*/
		list.push({"_id" : _id, "review" : review, "date" : date, "stars" : stars, "publisher_link" : publisher_link/*, "reactions" : reactions*/});
	}

	for (i=0 ; i<10; i++){
		console.log(list[i]);
	}
}, 10000);






for (i=0 ; i<10; i++){
	var basic_component = document.getElementsByClassName("_4-u2 mbm _4mrt _5jmm _5pat _5v3q _4-u8")[i];
	console.log(basic_component)
	var review = basic_component.getElementsByClassName("_5pbx userContent _3576")[0].innerText;
	var date = basic_component.getElementsByClassName("timestampContent")[0].innerHTML;
	var stars = removeHTML(basic_component.getElementsByClassName("_51mq")[0].innerHTML);
	var publisher_link = basic_component.getElementsByClassName("profileLink")[0].getAttribute("href")
	console.log(review + "\n"+ date + "\n" + stars + "\n" + publisher_link)
}