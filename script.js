// Get references to elements. We use const because these variables do not change.
const form = document.getElementById("form"); // form element
const nounInput = document.getElementById("noun"); // noun input
const verbInput = document.getElementById("verb"); // verb input
const adjectiveInput = document.getElementById("adjective"); // adjective input
const result = document.getElementById("result"); // result paragraph

// Add event listener to the form
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Stop the form from submitting

  // Get the values from the inputs
  var noun = nounInput.value;
  var verb = verbInput.value;
  var adjective = adjectiveInput.value;

  // Create the sentence using string concatenation
  var sentence = "The " + adjective + " " + noun + " had one goal: to " + verb + ". What happened next was unexpected.";

  // Show the sentence in the result paragraph
  result.textContent = sentence;
});
