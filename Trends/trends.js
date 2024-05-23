document.getElementById("NIFTYWidget").style.display = "block";

function showWidget(widgetId) {
  var widgets = document.getElementsByClassName("tradingview-widget-container");
  for (var i = 0; i < widgets.length; i++) {
    widgets[i].style.display = "none";
  }

  var selectedWidget = document.getElementById(widgetId + "Widget");
  if (selectedWidget) {
    selectedWidget.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".select-links li a");
  const animation = document.querySelector(".animation");

  function moveAnimation(element) {
    const width = element.offsetWidth;
    const left = element.offsetLeft;
    animation.style.width = `${width}px`;
    animation.style.transform = `translateX(${left}px)`;
  }

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      links.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");
      moveAnimation(this);
    });
  });
});
