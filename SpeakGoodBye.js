(function (window) {
  var byeSpeaker = {};
  
  // Gunakan "Good Bye" (pakai spasi) sesuai contoh output di script.js
  var speakWord = "Good Bye"; 

  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  window.byeSpeaker = byeSpeaker;

})(window);
