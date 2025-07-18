// ✅ GLOBAL function
function toggleDropdown() {
  const menu = document.getElementById("dropdown-menu");
  menu.classList.toggle("hidden");
}

window.onload = function () {
  // ✅ Attach event listener instead of using inline onclick
  document.getElementById("profile-icon").addEventListener("click", toggleDropdown);

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    const icon = document.getElementById("profile-icon");
    const menu = document.getElementById("dropdown-menu");
    if (!icon.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.add("hidden");
    }
  });
  const hamIcon = document.getElementById("navbar-ham");
  const modeToggle = document.getElementById("mode-toggle");
  const body = document.getElementById("body");
  const profileIcon = document.getElementById("profile-icon");
  const shapeIcon = document.getElementById("shape-icon");

  // Set mode on load
  const savedMode = localStorage.getItem("mode");
  if (savedMode === "dark") {
    setDarkMode();
  } else {
    setLightMode();
  }

  modeToggle.addEventListener("click", () => {
    const isDark = body.classList.contains("bg-gray-800");
    if (isDark) {
      setLightMode();
      localStorage.setItem("mode", "light");
    } else {
      setDarkMode();
      localStorage.setItem("mode", "dark");
    }
  });

  function setDarkMode() {
    body.classList.add("bg-gray-800", "text-white");
    body.classList.remove("bg-white", "text-gray-800");
    modeToggle.src = "/light-mode.svg";
    profileIcon.src = "/profile-dark.svg";
    shapeIcon.src = "/shape-dark-mode.png";
     hamIcon.src = "/ham-dark-mode.svg";
  }

  function setLightMode() {
    body.classList.add("bg-white", "text-gray-800");
    body.classList.remove("bg-gray-800", "text-white");
    modeToggle.src = "/dark-mode.svg";
    profileIcon.src = "/profile.svg";
    shapeIcon.src = "/shape.png";
     hamIcon.src = "/ham.svg"; 
  }

  // Toggle mobile nav
const ham = document.getElementById("navbar-ham");
const mobileMenu = document.getElementById("mobile-menu");

ham.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Optional: Close if clicked outside
document.addEventListener("click", (e) => {
  if (!ham.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.add("hidden");
  }
});
shapeIcon.addEventListener("click", () => {
  shapeIcon.classList.add("rotate-animation");

  // Remove the class after animation completes (e.g., 500ms)
  setTimeout(() => {
    shapeIcon.classList.remove("rotate-animation");
  }, 500); // Duration should match your CSS animation
});
document.documentElement.classList.add("no-transition");
setTimeout(() => {
  document.documentElement.classList.remove("no-transition");
}, 100);

};
