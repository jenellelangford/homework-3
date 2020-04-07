// Password variables
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', ':', '"', '<', '>', '?', '"'];
var userPassword = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Create function and prompts for password critera  
function getPasswordOptions() {
  var passwordLength = parseInt(prompt("How many characters would you like your password to be?"));
  while (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters. Try again.");
    var passwordLength = parseInt(prompt("How many characters would you like your password to be?"));
  }
  var getSpecialCharacters = confirm("Would you like to use special characters?");
  var getNumbers = confirm("Would you like to use numbers?");
  var getLowerLetters = confirm("Would you like to use lowercase letters?");
  var getUpperLetters = confirm("Would you like to use uppercase letters?");

  userChoice();

  // Create 'if/else' statements for true/false choices
  function userChoice() {
    if (getSpecialCharacters == true) {
      (userPassword == userPassword.concat(specialCharacters));
    }
      else {
        (getSpecialCharacters == false);
      }
    if (getNumbers == true) {
      (userPassword == userPassword.concat(numbers));
    }
      else {
        (getNumbers == false);
      }
    if (getLowerLetters == true) {
      (userPassword = userPassword.concat(lowerCase));
    }
      else {
        (getLowerLetters == false);
      }
    if (getUpperLetters == true) {
      (userPassword = userPassword.concat(upperCase));
    }
      else {
        (getUpperLetters == false);
      }
  };
};

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  for (i = 0; i <= userPassword.length; i++) {
    password += userPassword[Math.floor(Math.random() * (userPassword.length - 1))];
  }
    passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Call out password functions
writePassword();
getPasswordOptions();
userPassword = [];

