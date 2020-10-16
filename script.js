function promptBtn() {
  let buttonPress = alert("Let's make a Password!");

  // Choose Password Length
  var passLength = prompt("How long would you like your password to be (must be between 8 and 128 characters?");
  if (passLength >= 8 && passLength <= 128) {
    alert(`Your password is going to be ${passLength} characters long`);
    // Else Statement at End of Function IF they did not pick the right number of Characters

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
      // Else Statement for if NO Uppercase letter are Wanted
      alert("Your password will not have any uppercase letters");
    }

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
      // Else Statement for if NO Lowercase letter are Wanted
    } else {
      alert("Your password will not have any lowercase letters");
    }

    // Symbols

    // Create and Empty String to have Special Character Options
    var symbolPassword = ""
    // Confirm for an alert asking if you want Special Character Options
    let symbolChar = confirm("Would you like your password to contain special characters?");
    // If Statement for if they Want Special Character Options, and then Randomize Those Letters
    if (symbolChar === true) {
      let symbolPassOptions = "!/#$%&'()*+,-./:;<=>?@[\]^_`{|}~) {}";
      // Randomize the Order of the Special Characters
      for (let i = 0; i < 36; i++) {
        let symbolChar = symbolPassOptions.charAt(Math.floor(Math.random() * 36));
        symbolPassword = (symbolChar + symbolPassword);
      }
      // Else Statement for if NO Special Characters are Wanted
    } else {
      alert("Your password will not have a special character");
    }

    // Numbers

    // Create and Empty String to have Numbers
    var numberPassword = ""
    // Confirm for an alert asking if you want Numbers
    let numberChar = confirm("Would you like your password to contain numbers?");
    // If Statement for if they Want Numbers, and then Randomize Those Letters
    if (numberChar === true) {
      let numberPassOptions = "01234567890123456789";
      // Randomize the Order of the Special Characters
      for (let i = 0; i < 20; i++) {
        let numberChar = numberPassOptions.charAt(Math.floor(Math.random() * 20));
        numberPassword = (numberChar + numberPassword);
      }
      // Else Statement for if NO Numbers are Wanted
    } else {
      alert("Your password will not have any numbers");
    }

    // Combine the Passwords to Make One Long Password with Selected Criteria
    var combined = (upperPassword + lowerPassword + symbolPassword + numberPassword);
    var combinedLength = (combined.length);

    // If statement for if characters ARE picked gets us to the next step
    if (combined !== "") {

      // Declaring the password Variable and Printing it to the Page!

      var password = ""
      for (let i = 0; i < passLength; i++) {
        let randomized = combined.charAt(Math.floor(Math.random() * combinedLength));
        password = (password + randomized)
      }

      // Printing Password to the page and changing color and text size of box
      document.getElementById("password").textContent = password;
      document.getElementById("password").style.fontSize = "20px";
      document.getElementById("password").style.color = "white";
      document.getElementById("password").style.backgroundColor = "darkred"

      // Else Statement for if NO Characters are selected
    } else {
      let noPassword = "No password criteria selected.  Please try again"
      document.getElementById("password").textContent = noPassword
      document.getElementById("password").style.fontSize = "20px";
      document.getElementById("password").style.color = "black";
    }
    // Else Statement for if wrong number of password Characters is picked
  } else {
    alert("Must choose a length between 8 and 128 characters");
  }
  // Return the Function
  return (buttonPress)
}