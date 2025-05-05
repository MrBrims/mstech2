/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// Функция для обновления маски
function updateMask() {
  var mask = document.querySelector('mask.erectio');
  var text = document.querySelector('text.text');
  if (window.innerWidth <= 520) {
    mask.innerHTML = "\n      <rect x=\"0\" y=\"0\" width=\"160\" height=\"200\" fill=\"white\" />\n      <rect x=\"106\" y=\"6\" width=\"52\" fill=\"black\"></rect>\n      <rect x=\"22\" y=\"26\" width=\"82\" fill=\"black\"></rect>\n      <rect x=\"2\" y=\"46\" width=\"33\" fill=\"black\"></rect>\n      <rect x=\"40\" y=\"86\" width=\"20\" fill=\"black\"></rect>\n      <rect x=\"115\" y=\"106\" width=\"42\" fill=\"black\"></rect>\n    ";
    text.innerHTML = "\n\t\t\t<tspan x=\"2\" y=\"18\">We're here</tspan>\n\t\t\t<tspan x=\"2\" y=\"38\">to</tspan>\n\t\t\t<tspan x=\"107\" y=\"38\">make</tspan>\n\t\t\t<tspan x=\"38\" y=\"58\">healthy living</tspan>\n\t\t\t<tspan x=\"2\" y=\"78\">effortless, so you</tspan>\n\t\t\t<tspan x=\"2\" y=\"98\">can</tspan>\n\t\t\t<tspan x=\"62\" y=\"98\">live longer</tspan>\n\t\t\t<tspan x=\"2\" y=\"118\">and happier</tspan>\n\t\t";
  } else {
    // Возвращаем исходное состояние для больших экранов
    mask.innerHTML = "\n      <rect x=\"0\" y=\"0\" width=\"160\" height=\"90\" fill=\"white\" />\n      <rect x=\"63\" y=\"9\" width=\"49\" fill=\"black\"></rect>\n      <rect x=\"44\" y=\"25\" width=\"29\" fill=\"black\"></rect>\n      <rect x=\"63\" y=\"41\" width=\"36\" fill=\"black\"></rect>\n      <rect x=\"69\" y=\"57\" width=\"88\" fill=\"black\"></rect>\n    ";
    text.innerHTML = "\n\t\t\t<tspan x=\"2\" y=\"16\">We're here</tspan>\n\t\t\t<tspan x=\"115\" y=\"16\">to make</tspan>\n\t\t\t<tspan x=\"2\" y=\"32\">healthy</tspan>\n\t\t\t<tspan x=\"76\" y=\"32\">living effortless,</tspan>\n\t\t\t<tspan x=\"2\" y=\"48\">so you can</tspan>\n\t\t\t<tspan x=\"102\" y=\"48\">live longer</tspan>\n\t\t\t<tspan x=\"2\" y=\"64\">and happier</tspan>\n\t\t";
  }
}

// Инициализация при загрузке и на ресайз
window.addEventListener('load', updateMask);
window.addEventListener('resize', updateMask);
/******/ })()
;