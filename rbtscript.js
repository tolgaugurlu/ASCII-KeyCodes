const insert = document.getElementById("insert");
const toggleThemeText = document.getElementById("toggleTheme");
const toggleThemeCheckbox = document.getElementById("checkbox");

let isNightMode = true;

toggleThemeCheckbox.addEventListener("change", () => {
  isNightMode = !isNightMode;
  updateTheme();
});

function updateTheme() {
  if (isNightMode) {
    document.body.classList.remove("day-mode");
    document.body.classList.add("night-mode");
    toggleThemeText.textContent = "Gece Modu";
  } else {
    document.body.classList.remove("night-mode");
    document.body.classList.add("day-mode");
    toggleThemeText.textContent = "Gündüz Modu";
  }
}

updateTheme();

window.addEventListener("keydown", (event) => {
  insert.innerHTML = `
    <div class="key">
      ${event.key === " " ? "Space" : event.key}
      <small>Girilen Değer</small>
    </div>
    <div class="key">
      ${event.keyCode}
      <small>ASCII Kodu</small>
    </div>
    <div class="key">
      ${event.code}
      <small>event.code</small>
    </div>
  `;
});
function toggleTutorial() {
  const tutorial = document.getElementById("tutorial");
  const insert = document.getElementById("insert");
  const tutorialButton = document.getElementById("tutorialButton");
  if (tutorial.style.display === "none") {
    tutorial.style.display = "block";
    insert.style.display = "none";
    tutorialButton.innerHTML =
      language === "en" ? "Exit Tutorial" : "Eğitimden Çık";
    startTutorial();
  } else {
    tutorial.style.display = "none";
    insert.style.display = "block";
    tutorialButton.innerHTML =
      language === "en" ? "Start Tutorial" : "Eğitim Modu";
  }
}

function startTutorial() {
  const tutorial = document.getElementById("tutorial");
  let content = "";
  if (language === "en") {
    content +=
      "<h2>Basic Information</h2><p>ASCII is a character encoding standard...</p>";
    // Add more content in English...
  } else {
    content +=
      "<h2>Temel Bilgiler</h2><p>ASCII, karakter kodlama standardıdır...</p>";
    // Daha fazla Türkçe içerik ekle...
  }
  tutorial.innerHTML = content;
}

let language = "en"; // default language

function setLanguage(lang) {
  language = lang;
  updateContent();
}

function updateContent() {
  const toggleTheme = document.getElementById("toggleTheme");
  const tutorialButton = document.getElementById("tutorialButton");
  if (language === "en") {
    toggleTheme.innerHTML = "Night Mode";
    tutorialButton.innerHTML = "Start Tutorial";
  } else {
    toggleTheme.innerHTML = "Gece Modu";
    tutorialButton.innerHTML = "Eğitim Modu";
  }
}
