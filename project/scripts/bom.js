// Suppose 'item' contains the chapter title string
const li = document.createElement('li');

// Add the chapter title
li.textContent = item;

// Create the delete button
const deleteButton = document.createElement('button');
deleteButton.textContent = '❌'; // or "Delete"

// Append the button to the li
li.appendChild(deleteButton);

// Finally, append the li to your list (example: ul with id="list")
document.querySelector('#list').appendChild(li);
// Create the button element
const deleteButton = document.createElement('button');

// Add text or icon to the button
deleteButton.textContent = '❌'; // or "Delete"

// Optional: add a CSS class for styling
deleteButton.classList.add('delete-btn');

// Add functionality (remove parent element when clicked)
deleteButton.addEventListener('click', () => {
  deleteButton.parentElement.remove();
});

// Selecciona el input y la lista
const input = document.querySelector('#favchap');
const list = document.querySelector('#list');

// Crea un nuevo li
const li = document.createElement('li');

// Usa el valor del input como contenido del li
li.textContent = input.value; 
// Alternativa: li.innerHTML = input.value;

// Agrega el li a la lista
list.appendChild(li);
// Crear el botón
const deleteButton = document.createElement('button');

// Asignar el texto ❌
deleteButton.textContent = '❌';

// (Opcional) añadir funcionalidad para borrar el elemento padre
deleteButton.addEventListener('click', () => {
  deleteButton.parentElement.remove();
});

// Crear el li
const li = document.createElement('li');
li.textContent = input.value; // el título del capítulo

// Crear el botón de eliminar
const deleteButton = document.createElement('button');
deleteButton.textContent = '❌';

// Agregar el botón al li
li.appendChild(deleteButton);

// Finalmente, agregar el li a la lista
document.querySelector('#list').appendChild(li);

// Opcional: funcionalidad para borrar el li cuando se haga clic en el botón
deleteButton.addEventListener('click', () => {
  li.remove();
});
// Selecciona el input y la lista
const input = document.querySelector('#favchap');
const list = document.querySelector('#list');

// Crea el li
const li = document.createElement('li');
li.textContent = input.value; // título del capítulo

// Crea el botón de eliminar
const deleteButton = document.createElement('button');
deleteButton.textContent = '❌';

// Agrega el botón al li
li.appendChild(deleteButton);

// Finalmente, agrega el li a la lista <ul>
list.appendChild(li);

// Opcional: funcionalidad para borrar el li al hacer clic en el botón
deleteButton.addEventListener('click', () => {
  li.remove();
});
// Crear el botón
const deleteButton = document.createElement('button');
deleteButton.textContent = '❌';

// Agregar el evento click
deleteButton.addEventListener('click', () => {
  alert('Botón presionado');
  deleteButton.parentElement.remove(); // elimina el <li> completo
});
const input = document.querySelector('#favchap');

input.addEventListener('keyup', () => {
  console.log("Valor actual:", input.value);
});
document.addEventListener('DOMContentLoaded', () => {
  console.log("El DOM está listo");
  
  // Aquí puedes inicializar tu aplicación
  const button = document.querySelector('#delete-btn');
  button.addEventListener('click', () => {
    alert("Botón clickeado");
  });
});
Open your JavaScript file that is supporting the bom.html application, if needed.
Create a click event listener for the Add Chapter button with addEventListener.
Check Your Understanding
Within the Add Chapter button click event function block (between the opening and closing braces of the callback function { ... }), complete the following tasks:





