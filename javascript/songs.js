 var musicContainer = document.getElementById("music-info");
var musicString = "";
var music = [];

// var deleteBtn = document.getElementsByClassName("deleteBtn");
// 	deleteBtn.addEventListener("click", function(){

function eventCreatesNewArray(){
var deleteBtn = document.getElementsByClassName("deleteBtn");
	 for(var j = 0; j < deleteBtn.length; j++){
		deleteBtn[j].addEventListener("click", function (e){
	 	console.log("something", music);
			var newMusic = music.splice(event.target.id,1);
			makeDom(music);
		})
	}
};

function makeDom(musicArray){
	var counter = 0;
	musicString = "";
	for(var i=0; i<musicArray.length; i++){
		counter = counter+1;
		musicString +=`<div id="txt` + counter + `"><h3>${musicArray[i].song}</h3>`;
		musicString +=`<p>${musicArray[i].artist} | ${musicArray[i].album} | ${musicArray[i].genre}`;
		musicString +=`<button class="deleteBtn" id="${i}">Delete</button>`;
		musicString +=`</p></div>`;

	}
		musicContainer.innerHTML = musicString;	
		eventCreatesNewArray();
};

function makeArray(xhrData){
	music = xhrData.music;
	makeDom(music);
};
	
function loadFile(){
	var data = JSON.parse(this.responseText);
	makeArray(data);
};

function failLoading(){
	alert("There's been a mistake. Abort. Or try again later. Whatever.")
};

var myRequest = new XMLHttpRequest(); //~new~ is a constructor
myRequest.addEventListener("load", loadFile);
myRequest.addEventListener("error", failLoading);
myRequest.open("GET", "artists.json");
myRequest.send();