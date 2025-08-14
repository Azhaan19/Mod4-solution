// Protect the global scope with an IIFE
(function () {
  var names = [
    "Yaakov", "John", "Jen", "Jason",
    "Paul", "Frank", "Larry", "Paula",
    "Laura", "Jim"
  ];

  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var firstLetter = name.charAt(0).toLowerCase();

    if (firstLetter === 'j') {
      // Starts with J/j ➜ say goodbye
      byeSpeaker.speak(name);
    } else {
      // Otherwise ➜ say hello
      helloSpeaker.speak(name);
    }
  }
})();
