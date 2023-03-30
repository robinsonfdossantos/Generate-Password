// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var passwordLength = 0;
var lowerCases = 'abcdefghijklmnopqrstuwxyz';
var upperCases = 'ABCDEFGHIJKLMNOPQRSTUWXYZ';
var numbers = '0123456789';
var special = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

let allSelection = [];

function generatePassword() {

  passwordLength = prompt("How long must be your password? PS: Not less than 8 and more than 128");
  console.log(passwordLength);

  if (passwordLength === null || passwordLength < 8 || passwordLength > 128) {
    confirm("Try again! The password must have at least 8 characteres and less than 128 characteres");
    return;
  }

  let password = "";

  if (confirm("Do you want to add lowercases?") === true) {
    var shuffleLowerCases = [...lowerCases].sort(() => Math.random() - 0.5);
    console.log(shuffleLowerCases);
    password += shuffleLowerCases[1];
    allSelection.push(...shuffleLowerCases);
  }

  if (confirm("Do you want to add uppercases?") === true) {
    var shuffleUpperCases = [...upperCases].sort(() => Math.random() - 0.5);
    console.log(shuffleUpperCases);
    password += shuffleUpperCases[3];
    allSelection.push(...shuffleUpperCases);
  }

  if (confirm("Do you want to add numbers?") === true) {
    var shuffleNumbers = [...numbers].sort(() => Math.random() - 0.5);
    console.log(shuffleNumbers);
    password += shuffleNumbers [2];
    allSelection.push(...shuffleNumbers);
  }

  if (confirm("Do you want Do you want to add special caracteres?") === true) {
    var shuffleSpecial = [...special].sort(() => Math.random() - 0.5);
    console.log(shuffleSpecial);
    password += shuffleSpecial [2];
    allSelection.push(...shuffleSpecial);
  }


  
  while(password.length < passwordLength) {
    let randomIndex = Math.floor(Math.random() * allSelection.length);
    let randomChar = allSelection[randomIndex];
    password += randomChar;
  }

  return password;


}



