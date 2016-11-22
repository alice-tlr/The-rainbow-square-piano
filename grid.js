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


function chooseAudioSound(){
  for (var i = 0; i < hoverOver; i++){
   if ('grid-1' == true) {
     var audioSounds1
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
 4:"316901__jaz-the-man-2__do-octave.wav"
 5:"316912__jaz-the-man-2__sol.wav"
 6:"363161__sirkoto51__toy-piano-key-g.wav"

}

;
var audioSounds2 = ("");
var audioSounds3 = ("");
var audioSounds4 = ("");
var audioSounds5 = ("");
var audioSounds6 = ("");
}
