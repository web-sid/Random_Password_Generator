const passwordBox = document.getElementById("password");
const text = document.getElementById("text");
const p = document.getElementById("copy");
const length = 14;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = "!@#$%^&*()_+{}~";
const allChars = upperCase + lowerCase + numbers + symbols;

const createPassword = function () {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
};

const copyPassword = function () {
  passwordBox.select();
  document.execCommand("copy");

  passwordBox.value = "";
  p.style.display = "block";
};
