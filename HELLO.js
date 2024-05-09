
var list = [
    {Song:new Audio("Assets/The Subway.mp3")},
    {Song:new Audio("Assets/hunger games.wav")},
    {Song:new Audio("Assets/The deep dark.wav")},
    {Song:new Audio("Assets/weird1.mp3")},
    {Song:new Audio("Assets/HeavenOnAnMP3.mp3")},
]
var listnames = [
    "The Subway",
    "hunger games",
    "The deep dark",
    "weird1",
    "Heaven on an MP3",
]
var currentsong= 0;
var audio = 0;   
var audiotitle = 0;

Songlist()
RewindSkip()
VolumeSlider()
PlayPause()

function PlayPause(){
//Get current Song
audiotitle = listnames[currentsong];
audio = list[currentsong].Song;     
//Play Pause
if(audio.paused){
    audio.play();
}
else{
    audio.pause();
}
document.getElementById("CurrentSong").innerHTML = audiotitle;
}


function RewindSkip(){

var skip = document.getElementById("Skip");
skip.addEventListener("click", function skipsong(){
    
    audio.load();
    if(currentsong <list.length){
    currentsong += 1;}
})

var rewind = document.getElementById("Rewind");
rewind.addEventListener("click", function rewindsong()
 {  audio.load();
    
    if(currentsong >=0){
    currentsong -= 1;
    }
    
})
}


function Songlist(){
document.getElementById("Songlist").innerHTML = listnames;
   
}


function VolumeSlider(){
   
//Volume Slider
let volume= document.getElementById("volume-slider")
volume.addEventListener("input",function(e){
    audio.volume= e.currentTarget.value /100;
})
}




   



   




