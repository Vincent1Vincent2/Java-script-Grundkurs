const worldTxt = document.getElementById("worldTxt");

worldTxt.addEventListener("click", function () {
  heroTitle.innerText = "Vincents World";
});

function colorChange() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById("colorBoxOne").style.backgroundColor =
    "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}

//Darkmode
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

function updateButton({ buttonEl, isDark }) {
  const newCta = isDark ? "LIGHT MODE" : "DARK MODE";

  buttonEl.setAttribute("aria-label", newCta);
  buttonEl.innerText = newCta;
}

function updateThemeOnHtmlEl({ theme }) {
  document.querySelector("html").setAttribute("data-theme", theme);
}

const button = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

let currentThemeSetting = calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
});

updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
updateThemeOnHtmlEl({ theme: currentThemeSetting });

button.addEventListener("click", (event) => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  updateButton({ buttonEl: button, isDark: newTheme === "dark" });
  updateThemeOnHtmlEl({ theme: newTheme });

  currentThemeSetting = newTheme;
});

//Hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");
const body = document.querySelector("body");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  body.classList.toggle("active");
});

const btn = document.getElementById("btn");

// btn.addEventListener("click", function () {
//   const addBrand = prompt(
//     "Write a car brand name but not VOLVO, SAAB, PORSCHE, BUGGATI"
//   );
//   carBrands.pop();
//   carBrands.push(addBrand);
//   console.log(carBrands);
// });
