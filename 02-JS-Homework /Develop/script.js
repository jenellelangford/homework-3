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

function getPasswordOptions() {
  var passwordLength = parseInt(prompt("How many characters would you like your password to be?"));
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters")

  } 
}

function getPasswordCharacters(){
var passwordCharacters = prompt("What special characters would you like to use?");
  if (passwordCharacters === specialCharacters) {

    }
}

function getLowerLetters() {
  var lowerCaseLetters = prompt("What lowercase letters would you like to use?");
    if (lowerCaseLetters === lowerCase) {
     
    }
}

function getUpperLetters(){
  var upperCaseLetters = prompt("What uppercase letters would you like to use?");
  if ( upperCaseLetters === upperCase) {

  }
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


getPasswordOptions();
getPasswordCharacters();
getLowerLetters();
getUpperLetters();
