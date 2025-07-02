// script.js

function calculateQuote() {
  const rooms = parseInt(document.getElementById("rooms").value) || 0;
  const size = parseInt(document.getElementById("size").value) || 0;
  const bathrooms = parseInt(document.getElementById("bathrooms").value) || 0;
  const frequency = document.getElementById("frequency").value;
  const deepClean = document.getElementById("deep-cleaning").checked;
  const windowClean = document.getElementById("window-cleaning").checked;

  let baseRate = 0;

  if (size <= 500) baseRate = 100;
  else if (size <= 1000) baseRate = 150;
  else if (size <= 1500) baseRate = 200;
  else baseRate = 250;

  baseRate += rooms * 10;
  baseRate += bathrooms * 15;

  let freqDiscount = 1;
  if (frequency === "weekly") freqDiscount = 0.85;
  else if (frequency === "biweekly") freqDiscount = 0.9;

  let total = baseRate * freqDiscount;

  if (deepClean) total += 50;
  if (windowClean) total += 30;

  const resultDiv = document.getElementById("quote-result");
  resultDiv.innerHTML = `Estimated Total Cost: <strong>$${total.toFixed(2)}</strong>`;
}
