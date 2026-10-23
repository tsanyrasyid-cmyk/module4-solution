// STEP 6: Wrap the entire contents inside of an IIFE
(function (window) {

  // STEP 7: Create an object called 'byeSpeaker'
  var byeSpeaker = {};

  // DO NOT attach the speakWord variable to the 'byeSpeaker' object.
  var speakWord = "Goodbye"; // (Saya ubah jadi "Goodbye" agar sesuai output yang diminta tugas)

  // STEP 8: Rewrite the 'speak' function such that it is attached to the byeSpeaker object
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 9: Expose the 'byeSpeaker' object to the global scope
  window.byeSpeaker = byeSpeaker;

})(window);
