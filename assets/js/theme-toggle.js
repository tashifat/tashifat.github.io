(function () {
  "use strict";

  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");

  if (!toggle) {
    return;
  }

  function applyTheme(theme, persist) {
    var isDark = theme === "dark";
    var label = isDark ? "Switch to light theme" : "Switch to dark theme";

    root.setAttribute("data-theme", theme);
    root.style.colorScheme = theme;
    toggle.setAttribute("aria-label", label);
    toggle.setAttribute("title", label);

    if (persist) {
      try {
        localStorage.setItem("site-theme", theme);
      } catch (error) {}
    }
  }

  toggle.addEventListener("click", function () {
    var nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(nextTheme, true);
  });

  applyTheme(root.getAttribute("data-theme") === "light" ? "light" : "dark", false);
})();
