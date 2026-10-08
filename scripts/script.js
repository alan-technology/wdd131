// Mostrar año dinámico en el footer
document.getElementById("year").textContent = new Date().getFullYear();

// Lista de rutas
const rides = [
  { fecha: "10 Octubre", lugar: "Parque Central", distancia: "15 km" },
  { fecha: "20 Octubre", lugar: "Río Verde", distancia: "25 km" }
];

const ridesList = document.getElementById("rides-list");
if (ridesList) {
  rides.forEach(ride => {
    const li = document.createElement("li");
    li.textContent = `${ride.fecha} - ${ride.lugar} (${ride.distancia})`;
    ridesList.appendChild(li);
  });
}

// Guardar inscripción en localStorage
const form = document.getElementById("signup-form");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    localStorage.setItem("inscrito", name);
    alert(`¡Gracias por inscribirte, ${name}!`);
  });
}
