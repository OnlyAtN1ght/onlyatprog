window.addEventListener('load', function() {


	setupDivCliquables()
})




function setupDivCliquables() {
	var divCliquables = document.getElementsByClassName("divCliquable");
	//console.log(divCliquables)
	for (var i = 0; i < divCliquables.length; i++) {
		divCliquables[i].addEventListener('click', onClickDivCliquable, false);
		divCliquables[i].myParam = divCliquables[i].id
	}
}


function onClickDivCliquable(evt){

	id = evt.currentTarget.myParam;
	console.log("CLICKED ON "+ id);

	if (id == "div1"){
		window.location.href = "/quizz";
	}
}