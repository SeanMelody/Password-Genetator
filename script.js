// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


function promptBtn() {
  let buttonPress = alert("Let's make a Password!");


  //  UpperCaseLetters

  // Create and Empty String to have Uppercase Password Options
  var upperPassword = ""
  // Confirm for an alert asking if you want Uppercase Letters
  let passUpper = confirm("Would you like your password to contain uppercase letters?");
  // If Statement for if they Want Uppercase Letters, and then Randomize Those Letters
  if (passUpper === true) {
    var upperCharOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Randomize the Order of the Uppercase Alphabet
    for (let i = 0; i <= 26; i++) {
      let upperChar = upperCharOptions.charAt(Math.floor(Math.random() * 26));
      upperPassword = (upperPassword + upperChar);
    }
  } else {
    // Else Statement for if NO Uppercase letter is Wanted
    alert("Your password will not have any uppercase letters");
  }


  console.log(upperPassword);


  // LowerCase Letters

  // Create and Empty String to have Lowercase Password Options
  var lowerPassword = ""
  // Confirm for an alert asking if you want Lowercase Letters
  let passLower = confirm("Would you like your password to contain lowercase letters?");
  // If Statement for if they Want Lowercase Letters, and then Randomize Those Letters
  if (passLower === true) {
    var lowerCharOptions = "abcdefghijklmnopqrstuvwxyz";
    // Randomize the Order of the Lowercase Alphabet
    for (let i = 0; i <= 26; i++) {
      let lowerChar = lowerCharOptions.charAt(Math.floor(Math.random() * 26));
      lowerPassword = (lowerChar + lowerPassword);
    }
    // Else Statement for if NO Lowercase letter is Wanted
  } else {
    alert("Your password will not have any lower case letters");
  }

  console.log(lowerPassword);


  return (buttonPress)
}