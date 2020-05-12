import dataPotter from "./data/potter/potter.js";
import {
  filterHouse,
  filterhogwartsStaff,
  filterhogwartsStudent,
} from "./data.js";
// Definimos los Bloques
const welcome = document.createElement("div");
welcome.id = "paginaInicio";
welcome.classList = "paginaInicio";
welcome.innerHTML = `
  <section id="welcome" class="welcome">
      <div class="inicio" id="inicio">
        <h1 class="titulo1">HARRY POTTER <br> Beginners </h1>
        <img src="./lentes.png" class="logo" alt="logo" height="100px" weight="50px">
        <p class="textoInicio"><i>Una mágica guía para principiantes y conocedores</i></p>
        <p class="textoJuro">¡Juro solemnemente que mis intenciones no son buenas!</p>
        <button class='enterBtn' id='selectEnter'>Entrar</button>
      </div>
    </section>
`;
const categorias = document.createElement("div");
categorias.id = "main";
categorias.classList = "main";
categorias.innerHTML = `
<section id="filterSection" class="categorias">
   <div class="headerDos">
   <h1 class="titulo2">HARRY POTTER <br> Beginners </h1>
   <img src="./lentes.png" class="logo2" alt="logo" height="100px" weight="50px">
   </div>
<div class="dropdown">
<button class="dropbtn" id="casas">Casas</button>
<div class="dropdown-content">
<a id="Gryffindor">Gryffindor </a>
<a id="Hufflepuff">Hufflepuff </a>
<a id="Ravenclaw">Ravenclaw </a>
<a id="Slytherin">Slytherin </a>
</div>
</div>
<div class="dropdown">
<button class="dropbtn">Personajes</button>
<div class="dropdown-content">
  <a href="female">Femeninos</a>
  <a href="male">Masculinos</a>
</div>
</div>
<div class="dropdown">
<button class="dropbtn">Hogwarts</button>
<div class="dropdown-content">
<a id="hogwartsStudent">Estudiantes</a>
<a id="hogwartsStaff">Staff</a>
</div>
</div>
<div class="dropdown">
<button class="btnP">Patronus</button>
</div>
</div>
<div class="row actions" id="row">
<div class="action">
  <input type="search" id="search" placeholder="Buscar por personaje"/>
  <button class="icon"><i class="fa fa-search"></i></button>
</div>
<div id="back">
<div id="backBtn" class="backBtn" role="link" onclick="window.location='index.html'">Volver</div>
</div>
</div>
</div>
`;
const resultsContainer = document.createElement("div");
resultsContainer.id = "results";
resultsContainer.classList = "row results";
document.getElementById("root").appendChild(resultsContainer);
let results;
results = document.querySelector("#results");
// Renderiza sección welcome al cargar el sitio
document.getElementById("root").appendChild(welcome);
// Funcion para limpiar un contenedor y no se acumulen los personajes
function clearContent(id) {
  document.querySelector(id).innerHTML = "";
}
//Función para cargar segunda pantalla que tiene las funciones principales
const enterBtn = document.querySelector("#selectEnter");
enterBtn.addEventListener("click", () => {
  clearContent("#root");
  const root = document.querySelector("#root");
  root.appendChild(categorias);
  root.appendChild(categorias);
  root.appendChild(resultsContainer);
  showData(dataPotter);
  const Gryffindor = document.querySelector("#Gryffindor");
  Gryffindor.addEventListener("click", () => {
    clearContent("#results");
    let gryffindorMembers = filterHouse(dataPotter, "Gryffindor");
    return showData(gryffindorMembers);
  });
  const Hufflepuff = document.querySelector("#Hufflepuff");
  Hufflepuff.addEventListener("click", () => {
    clearContent("#results");
    let HufflepuffMembers = filterHouse(dataPotter, "Hufflepuff");
    return showData(HufflepuffMembers);
  });
  const Ravenclaw = document.querySelector("#Ravenclaw");
  Ravenclaw.addEventListener("click", () => {
    clearContent("#results");
    let RavenclawMembers = filterHouse(dataPotter, "Ravenclaw");
    return showData(RavenclawMembers);
  });
  const Slytherin = document.querySelector("#Slytherin");
  Slytherin.addEventListener("click", () => {
    clearContent("#results");
    let SlytherinMembers = filterHouse(dataPotter, "Slytherin");
    return showData(SlytherinMembers);
  });
  const hogwartsStaff = document.querySelector("#hogwartsStaff");
  hogwartsStaff.addEventListener("click", () => {
    clearContent("#results");
    let hogwartsStaff = filterhogwartsStaff(dataPotter);
    return showData(hogwartsStaff);
  });
  const hogwartsStudent = document.querySelector("#hogwartsStudent");
  hogwartsStudent.addEventListener("click", () => {
    clearContent("#results");
    let hogwartsStudent = filterhogwartsStudent(dataPotter);
    return showData(hogwartsStudent);
  });
});
// Creacion de funcion showData
// Se va creando uno a uno la tarjeta de personajes recorriendo la dataPotter, creando los div, imagen, detalles
function showData(data) {
  data.forEach((character) => {
    const container = document.createElement("div");
    const img = document.createElement("img");
    const name = document.createElement("div");
    const details = document.createElement("div");
    container.id = character.name;
    container.classList = "card";
    img.src = character.image;
    img.classList = "portrait";
    name.classList = "characterName";
    name.innerHTML = `${character.name}`;
    details.classList= "characterDetails"
    details.innerHTML = `
      <ul class="characterDetailsList">
      <li>Especie: ${character.species}</li>
      <li>Género: ${character.gender}</li>
      <li>Fecha de nacimiento: ${character.dateOfBirth}</li>
      <li>Año de nacimiento: ${character.yearOfBirth}</li>
      <li>Ascendencia: ${character.ancestry}</li>
      <li>Color de ojos: ${character.eyeColour}</li>
      <li>Color de cabello: ${character.hairColour}</li>
      <li>Actor/Actriz: ${character.actor}</li>
      <li>Estado: ${character.alive ? 'Vivo' : 'Muerto'}</li><br>
      <h4>Varita mágica</h4>
      <li>Madera: ${character.wand.wood}</li>
      <li>Núcleo: ${character.wand.core}</li>
      <li>Longitud: ${character.wand.length}</li>
      <li>Patronus: ${character.patronus}</li>
      </ul>
    `;
    container.appendChild(img);
    container.appendChild(name);
    container.appendChild(details);
    // Muestro los resultados de cada personaje por nombre con innerHTML en HTML
    results.appendChild(container);
    // aca pego la tarjeta de cada personaje en results
  });
}





