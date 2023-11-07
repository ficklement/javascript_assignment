// Assignment code here
/*
name: michael cosand
title: web developer
company: MC INDUSTRIES
11-4-23: fixed function generatepassword syntax
11-6-23: added notes
*/

// creates button for event listener
var generatebutton = document.getElementById('generate');
generatebutton.addEventListener('click', writePassword);

// the following lines set variable criteria for password generated
var lowcase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbs = "0123456789";
var specialguys = "#@!%*()_+~'|}{[]:;?><,./-=";

// here is the function to generate the pw
function generatePassword() {
  var passwordLength = prompt("How long do you want your password? (pw should be 8-128 characters)");
  passwordLength = parseInt(passwordLength);
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be a number between 8 and 128 characters.");
    return"";
  }

  /*
line 23-31 sets requirements of password length and confirmation of upper/lower/special characters/numbers
*/
  var includelowcase = confirm("Include lowercase characters?");
  var includeuppercase = confirm("Include uppercase characters?");
  var includenumbs = confirm("Include numeric characters?");
  var includespecialguys = confirm("Include special characters?");

// the if statement SHOULD let user know that criteria must be met otherwise user cancels function
  if (!includelowcase && !includeuppercase && !includenumbs && !includespecialguys) { 
    alert("At least one character type must be selected.");
    return; 
    // the function will be exited if they hit cancel before criteria is met
  }

  // these are the variables which provide the allowed characters for the password
  var allowedguys = "";
  var password = "";

  // these if statements will mix the allowed criteria together like a blended smoothie
  if (includelowcase) allowedguys += lowcase;
  if (includeuppercase) allowedguys += uppercase;
  if (includenumbs) allowedguys += numbs;
  if (includespecialguys) specialguys += specialguys;

// The for statement generates the password finally, i think, using the floor/random to provide a index at random set to the length requested
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allowedguys.length);
    password += allowedguys[randomIndex];
  }
  return password;
}

// the following function should display the password in the lil box
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

