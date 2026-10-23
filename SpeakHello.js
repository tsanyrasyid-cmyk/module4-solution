// Wrap the entire thing in an IIFE (Immediately Invoked Function Expression)
(function (window) {
  var helloSpeaker = {};
  
  // DO NOT attach the speakWord variable to the 'helloSpeaker' object (sesuai instruksi)
  var speakWord = "Hello";

  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // Expose the helloSpeaker object to the global scope (window)
  window.helloSpeaker = helloSpeaker;

})(window);
