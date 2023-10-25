// console.log("Vincent Ahlin");

// let awnser = prompt("Vad är ditt favorit djur?");
// console.log(awnser);
// alert(awnser);

// let numberTestOne = prompt("Skriv in en siffra");
// console.log(numberTestOne);
// let numberTestTwo = prompt("Skriv in en till siffra");
// console.log(numberTestTwo);

// let awnser = Number(numberTestOne) + Number(numberTestTwo);

// alert(awnser);

// const favColor = prompt("Vad är din favoritfärg?");

// function favColorButton() {
//   onclick = console.log(favColor);
// }

// const firstName = prompt("Förnamn");
// const lastName = prompt("Efternamn");

// function fullName() {
//   alert(firstName + " " + lastName);
// }

// fullName();

// function changetxt() {
//   document.getElementById("heroTitle").innerText = "This is Vincents World";
// }

// function colorChange() {
//   const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//   document.getElementById("colorBoxOne").style.backgroundColor =
//     "#" + randomColor;
//   color = "#" + randomColor;
// }

// function colorChangeTwo() {
//   const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//   document.getElementById("colorBoxTwo").style.backgroundColor =
//     "#" + randomColor;
//   color = "#" + randomColor;
// }

// const user = {
//   username: "",
//   password: "jibos",
//   age: 69,
//   isAdmin: true,
// };

// console.log(user);

// const userInfo = [
//   prompt("Enter username"),
//   prompt("Where do you live?"),
//   prompt("Where were you born?"),
//   prompt("How old are you?"),
//   prompt("Whats your favorite food?"),
// ];

// function displayUserInfo() {
//   console.log(userInfo.reverse());
// }

// const mathNumber = prompt("Write a number");
// const mathOperator = prompt("Enter a operator (+ - / *)");
// const mathNumberTwo = prompt("Write another number");

// function mathNumberCombiner(mathNumber, mathNumberTwo, mathNumberCombiner) {
//   return eval(`${Number(mathNumber)} ${mathOperator} ${Number(mathNumberTwo)}`);
// }

// const result = mathNumberCombiner(mathNumber, mathNumberTwo, mathOperator);
// alert(`The result is ${result}`);

/**
 * Utility function to calculate the current theme setting.
 * Look for a local storage value.
 * Fall back to system setting.
 * Fall back to light mode.
 */
function calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
}) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
}

/**
 * Utility function to update the button text and aria-label.
 */
function updateButton({ buttonEl, isDark }) {
  const newCta = isDark ? "Change to light theme" : "Change to dark theme";
  // use an aria-label if you are omitting text on the button
  // and using a sun/moon icon, for example
  buttonEl.setAttribute("aria-label", newCta);
  buttonEl.innerText = newCta;
}

/**
 * Utility function to update the theme setting on the html tag
 */
function updateThemeOnHtmlEl({ theme }) {
  document.querySelector("html").setAttribute("data-theme", theme);
}

/**
 * On page load:
 */

/**
 * 1. Grab what we need from the DOM and system settings on page load
 */
const button = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

/**
 * 2. Work out the current site settings
 */
let currentThemeSetting = calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
});

/**
 * 3. Update the theme setting and button text accoridng to current settings
 */
updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
updateThemeOnHtmlEl({ theme: currentThemeSetting });

// 4. Add an event listener to toggle the theme

button.addEventListener("click", (event) => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  updateButton({ buttonEl: button, isDark: newTheme === "dark" });
  updateThemeOnHtmlEl({ theme: newTheme });

  currentThemeSetting = newTheme;
});

// function boxSize() {
//   document.querySelector(".box").style.height = "200px";
//   document.querySelector(".box").style.width = "200px";
// }

// function boxSizeChange() {
//   const boxSize = document.querySelector(".box");
//   if (boxSize.style.height == "") boxSize.style.height = "200px";
//   else boxSize.style.height = "";

//   if (boxSize.style.width == "") boxSize.style.width = "200px";
//   else boxSize.style.width = "";
// }

// function dropShadowHover() {
//   const dropShadow = document.querySelector(".box");
//   dropShadow.style.boxShadow = "10px 20px 30px black";
// }

// function dropShadowLeave() {
//   const dropShadow = document.querySelector(".box");
//   dropShadow.style.boxShadow = "";
// }

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");
const body = document.querySelector("body");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  body.classList.toggle("active");
});
