var musicContainer = document.getElementById("music-info");
var musicString = "";
var music;

function makeDom(xhrData){
	for(var i=0; i<xhrData.music.length; i++){
		music = xhrData.music[i];

		musicString +=`<div id="txt"><h3>${music.song}</h3>`;
		musicString +=`<p>${music.artist} | ${music.album} | ${music.genre}`;
		musicString +=`<button class="deleteBtn">Delete</button>`;
		musicString +=`</p></div>`;

	}
		musicContainer.innerHTML = musicString;

	var deleteBtn = document.getElementsByClassName("deleteBtn");
// console.log("deleteBtn", deleteBtn.length);
		for(var j = 0; j < deleteBtn.length; j++){
			deleteBtn[j].addEventListener("click", function (){musicString.value("");});
		}
	
}


function loadFile(){
	var data = JSON.parse(this.responseText);
	makeDom(data);

}

function failLoading(){
	alert("There's been a mistake. Abort. Or try again later. Whatever.")
}

var myRequest = new XMLHttpRequest(); //~new~ is a constructor
myRequest.addEventListener("load", loadFile);
myRequest.addEventListener("error", failLoading);
myRequest.open("GET", "artists.json");
myRequest.send();