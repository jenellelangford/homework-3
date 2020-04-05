// Password variables
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', ':', '"', '<', '>', '?', '"'];








// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Create functions & loops for password critera

function getPasswordOptions() {
  var passwordLength = parseInt(prompt("How many characters would you like your password to be?"));
    while (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters. Try again.");
    var passwordLength = parseInt(prompt("How many characters would you like your password to be?"));
  } 

  var passwordCharacters = prompt("What special characters would you like to use?");
    while (passwordCharacters !== specialCharacters.length) {
      alert("Invalid answer. Plese try again.");
      prompt("What special characters would you like to use?");
    }

  var lowerCaseLetters = prompt("What lowercase letters would you like to use?");
    while (lowerCaseLetters !== lowerCase.length) {
      alert("Invalid answer. Plese try again.");
      prompt("What lowercase letters would you like to use?");
    }

  var upperCaseLetters = prompt("What uppercase letters would you like to use?");
    while ( upperCaseLetters !== upperCase.length) {
      alert("Invalid answer. Plese try again.");
      prompt("What uppercase letters would you like to use?");
    }

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Call out password functions
getPasswordOptions();

