let reservasTemp = JSON.parse(localStorage.getItem('reservasTemp'))
let reservas = JSON.parse(localStorage.getItem('reservas'))


function pagar() {
  // Find the element to move
  var elementToMove = reservasTemp[reservasTemp.length - 1]; // Assuming you want to move the first element
  console.log(elementToMove)

  // Move the element to reservas
  if (! reservas.includes(elementToMove)) {
    reservas.push(elementToMove)
  }
  

  // Remove the element from reservasTemp
  localStorage.removeItem('reservasTemp');
  localStorage.setItem('reservas', JSON.stringify(reservas));
  window.location.href = "perfil.html";

  console.log("Element moved successfully.");
}

// Attach the function to the button click event
let pagarButton = document.getElementById("pagarBtn");
pagarButton.addEventListener("click", pagar);

