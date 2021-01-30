// Increment & Decrement Ticket function
function ticketCost(isIncrease, ticketClass) {
  const ticketInput = document.getElementById(ticketClass + "Count");
  const ticketCount = parseInt(ticketInput.value);

  let ticketNewCount = ticketCount;
  if (isIncrease == true) {
    ticketNewCount = ticketCount + 1;
  } else if (isIncrease == false && ticketCount > 0) {
    ticketNewCount = ticketCount - 1;
  }

  document.getElementById(ticketClass + "Count").value = ticketNewCount;
  calculateTicketCost(ticketClass);
}
// Calculate the total of the ticktes.
function calculateTicketCost() {
  const firstClassCount = getInputValue("firstClass");
  const economyCount = getInputValue("economy");

  const subTotal = firstClassCount * 150 + economyCount * 100;
  document.getElementById("subTotal").innerText = "$" + subTotal;

  const taxCost = subTotal * 0.1;
  document.getElementById("taxCost").innerText = "$" + taxCost;

  const total = subTotal + taxCost;
  document.getElementById("totalCost").innerText = "$" + total;
}
// Find the input by this function.
function getInputValue(ticketClass) {
  const Input = document.getElementById(ticketClass + "Count");
  const Count = parseInt(Input.value);
  return Count;
}

// Modal Activation

let modalBtn = document.querySelector(".booking-btn");
let modalBg = document.querySelector(".modal-bg");
let modalClose = document.querySelector(".modal-close");

modalBtn.addEventListener("click", function () {
  modalBg.classList.add("modal-bg-active");

  // Get and set value for modal message
  setValueForInput("setFromPlace", "fromPlace");
  setValueForInput("setToPlace", "toPlace");
  setValueForInput("setFirstClass", "firstClassCount");
  setValueForInput("setEconomyClass", "economyCount");

  document.getElementById("setTotal").innerText = document.getElementById(
    "totalCost"
  ).innerText;
});

modalClose.addEventListener("click", function () {
  modalBg.classList.remove("modal-bg-active");
});

function setValueForInput(setId, getId) {
  document.getElementById(setId).innerText = document.getElementById(
    getId
  ).value;
}
