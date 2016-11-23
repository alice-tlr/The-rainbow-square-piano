
document.addEventListener('DOMContentLoaded', setEventListeners);

function setEventListeners() {
  //1. get all of the elements with class grid
  var gridElements = document.getElementsByClassName('grid');
  //2. for each element add a mouseover handler
  for(var i = 0; i < gridElements.length; i++){
     gridElements[i].addEventListener('mouseover', playSound);
     //gridElements[i].addEventListener('mouseleave', pauseSound)
  }

  function playSound(event){
     console.log(event);
     //event.target is the element where the event was triggered from (e.g. the div that was clicked)
     var sourceDiv = event.target;
     //children returns an array of child elements from the sourceDiv
     sourceDiv.children[0].play();
  }

  function pauseSound(event){
     console.log(event);
     //event.target is the element where the event was triggered from (e.g. the div that was clicked)
     var sourceDiv = event.target;
     //children returns an array of child elements from the sourceDiv
     sourceDiv.children[0].pause();
  }

}


/*
document.addEventListener('DOMContentLoaded', playSound)


var audioSounds = ["audioSounds1", "audioSounds2", "audioSounds3", "audioSounds4", "audioSounds5", "audioSounds6"];
var gridNum = ["grid-1", "grid-2", "grid-3", "grid-4", "grid-5", "grid-6"];
var hoverOver = gridNum.length;


 function playSound(){
  for (i = 0; i < gridNum.length; i++){

  if (gridNum = "grid-1") {
    document.addEventListener('mouseover',chooseAudioSound);
    //play this audio
  }
    else if (gridNum = "grid-2") {
      document.addEventListener('mouseover',chooseAudioSound);
    //play this audio
  }
    else if (gridNum = "grid-3") {
      document.addEventListener('mouseover',chooseAudioSound);
    //play this audio
  }
    else if (gridNum = "grid-4") {
    document.addEventListener('mouseover',chooseAudioSound);
    //play this audio
  }
    else if (gridNum = "grid-5") {
    document.addEventListener('mouseover',chooseAudioSound);
    //play this audio
  }
    else if (gridNum = "grid-6") {
    document.addEventListener('mouseover',chooseAudioSound);
    //play this audio
  }
};


function chooseAudioSound(){///here is where it is established which audio sound to request, depending on what grid is being hovered over...
  for (var i = 0; i < hoverOver; i++){
   if ('grid-1' == true) { //if it is grid-1
     var audioSounds1 //then play this sound bite
   }
     else if ('grid-2' == true) {
     audioSounds2("2")
   }
     else if ('grid-3' == true) {
     audioSounds3("3")
   }
     else if ('grid-4' == true) {
     audioSounds4("4")
    }
    else if ('grid-5' == true) {
    audioSounds5("5")
    }
    else if ('grid-6' == true) {
    audioSounds6("6")
    }
  }
};

function mp3 () {
var audioSounds = {
 1:"127788__149203__key-01-16bit.wav",
 2:"316901__jaz-the-man-2__do-octave.wav",
 3:"363161__sirkoto51__toy-piano-key-g.wav",
 4:"316901__jaz-the-man-2__do-octave.wav",
 5:"316912__jaz-the-man-2__sol.wav",
 6:"363161__sirkoto51__toy-piano-key-g.wav"
}
}
*/
