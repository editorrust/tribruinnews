function screenWidthSensor(x) {
   if (x.matches) {
      document.querySelector(".navigation-parent").replaceChildren();
      document.querySelector(".navigation-parent").setAttribute("include-html", "Partials/navigation-mobile.html");
      includeHTML();
   } else {
      document.querySelector(".navigation-parent").replaceChildren();
      document.querySelector(".navigation-parent").setAttribute("include-html", "Partials/navigation-desktop.html");
      includeHTML();
   }
}

var screenWidth = window.matchMedia("(max-width: 768px)");
screenWidthSensor(screenWidth);
screenWidth.addListener(screenWidthSensor);
