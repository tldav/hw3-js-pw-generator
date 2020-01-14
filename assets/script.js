// DOM elements
var passwordEl = document.querySelector(".display-pw");
var generateBtn = document.querySelector(".btn1");
var copyBtn = document.querySelector(".btn2");

// Possible characters
var charLow = "abcdefghijklmnopqrstuvwxyz";
var charUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var sym = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Object containing each of the random character generator functions
var randomFunction = {
	lower: getLower,
	upper: getUpper,
	num: getNum,
	sym: getSym
};
// "Generate Password" button provides instructions and starts the user selection process
generateBtn.addEventListener("click", function() {
	alert(
		"Please select character types and number of characters to generate a random password."
	);
	var selLower = confirm(
		'Press "OK" to include lowercase letters. Press "Cancel" to exclude them.'
	);
	var selUpper = confirm(
		'Press "OK" to include uppercase letters. Press "Cancel" to exclude them.'
	);
	var selNum = confirm(
		'Press "OK" to include numbers. Press "Cancel" to exclude them.'
	);
	var selSym = confirm(
		'Press "OK" to include symbols. Press "Cancel" to exclude them.'
	);
	var selLength = +prompt(
		"Enter a number between 8 and 128 to determine the number of characters in the password."
	);

	// Changes the text in the password box to the randomly generated password
	passwordEl.innerHTML = generatePassword(
		selLower,
		selUpper,
		selNum,
		selSym,
		selLength
	);
});

function generatePassword(lower, upper, number, symbol, length) {
	// Random password is stored here
	var randomPassword = "";
	// Counts the number of character types
	var typesCount = lower + upper + number + symbol;
	// Array of objects filters out character types not chosen (false)
	var typesArray = [{ lower }, { upper }, { num }, { sym }].filter(
		item => Object.values(item)[0]
	);
	// Alerts the user when a password cannot be generated.
	if (typesCount === 0 || length < 8 || length > 128) {
		alert(
			"You must select at least one character type. Number of characters must be between 8 and 128. You can't get ye flask!"
		);
		return "Your Secure Password";
	}

	for (var i = 0; i < length; i += typesCount) {
		typesArray.forEach(type => {
			var functionName = Object.keys(type)[0];

			randomPassword += randomFunction[functionName]();
		});
	}

	return randomPassword;
}

// Generates random lowercase letter
function getLower() {
	return charLow[Math.floor(Math.random() * charLow.length)];
}
// Generates random uppercase letter
function getUpper() {
	return charUp[Math.floor(Math.random() * charUp.length)];
}
// Generates random number
function getNum() {
	return num[Math.floor(Math.random() * num.length)];
}
// Generates random symbol
function getSym() {
	return sym[Math.floor(Math.random() * sym.length)];
}
