var displayPassword = document.querySelector("#display-pw");

// Possible characters
var charLow = "abcdefghijklmnopqrstuvwxyz";
var charUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var sym = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

var randomFunction = {
	lower: getLower,
	upper: getUpper,
	num: getNum,
	sym: getSym
};

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

console.log(getLower(), getUpper(), getNum(), getSym());

// Add
// document.getElementById("display-pw").value = password;

function getThing() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// console.log(getThing());
