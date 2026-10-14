  const meses = [
    "Enero","Febrero","Marzo","Abril","Mayo","Junio",
    "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
  ];
  document.getElementById("currentmonth").textContent = meses[new Date().getMonth()];
  document.getElementById("lastModified").textContent = "Última modificación: " + document.lastModified;