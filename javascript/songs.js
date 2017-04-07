var musicContainer = document.getElementById("music-info");

function makeDom(xhrData){
	var musicString = "";
	var music;
	for(var i=0; i<xhrData.music.length; i++){
		music = xhrData.music[i];

		musicString +=`<div><h3>${music.song}</h3>`;
		musicString +=`<p>${music.artist} | ${music.album} | ${music.genre}</p>`;
		musicString +=`</div>`;

	}
console.log(musicString);
		musicContainer.innerHTML = musicString;
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