var musicContainer = document.getElementById("music-info");
console.log("hello");

function makeDom(xhrData){
	var musicString = "";
	var music;
	for(var i=0; i<xhrData.music.length; i++){
		music = xhrData.music[i];

		musicString +=
	}
}

function loadFile(){
	var data = JSON.parse(this.responseText);
	makeDom(data);

}

function failLoading(){
	alert("There's been a mistake. Abort.")
}

var myRequest = new XMLHttpRequest(); //~new~ is a constructor
myRequest.addEventListener("load", loadFile);
myRequest.addEventListener("error", failLoading);
myRequest.open("GET", "artists.json");
myRequest.send();