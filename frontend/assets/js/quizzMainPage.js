window.addEventListener('load', function() {
	setupButtonCreateServer()
})




function setupButtonCreateServer(){
	var button = document.getElementById("buttonCreateServer")
	button.addEventListener("click",createServer,false)
}


function createServer() {
	console.log("CREATING SERVER")
}