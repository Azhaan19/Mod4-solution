// Wrap in an IIFE to avoid polluting the global scope
(function (window) {
  var speakWord = "Hello";

  var helloSpeaker = {};
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // Expose to the global scope
  window.helloSpeaker = helloSpeaker;
})(window);
