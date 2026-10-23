(function () {
  "use strict";

  var elements = document.querySelectorAll("div");
  var target = null;
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].childElementCount === 0 && elements[i].textContent.trim() === "Prazo de entrega a confirmar") {
      target = elements[i];
      break;
    }
  }
  if (!target) return;

  var parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(new Date());
  var year, month, day;
  for (var j = 0; j < parts.length; j++) {
    if (parts[j].type === "year") year = Number(parts[j].value);
    if (parts[j].type === "month") month = Number(parts[j].value);
    if (parts[j].type === "day") day = Number(parts[j].value);
  }

  var start = new Date(Date.UTC(year, month - 1, day + 3));
  var end = new Date(Date.UTC(year, month - 1, day + 5));
  var months = ["jan.", "fev.", "mar.", "abr.", "mai.", "jun.", "jul.", "ago.", "set.", "out.", "nov.", "dez."];
  var range = start.getUTCMonth() === end.getUTCMonth()
    ? start.getUTCDate() + " – " + end.getUTCDate() + " de " + months[end.getUTCMonth()]
    : start.getUTCDate() + " de " + months[start.getUTCMonth()] + " – " + end.getUTCDate() + " de " + months[end.getUTCMonth()];
  target.textContent = "Receba até " + range;
})();
