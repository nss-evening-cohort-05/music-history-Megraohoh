var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

function loadFile(){
	var data = JSON.parse(this.responseText);
	makeDom(data);

}

function failLoading(){
	alert("There's been a mistake. Abort.")
}
console.log("hello");
var myRequest = new XMLHttpRequest(); //~new~ is a constructor
myRequest.addEventListener("load", loadFile);
myRequest.addEventListener("error", failLoading);
myRequest.open("GET", "artists.json");
myRequest.send();

