import dataPotter from "./data/potter/potter.js";
import {
  filterHouse,
  filterhogwartsStaff,
  filterhogwartsStudent,
  filterGender,
} from "./data.js";

// console.log(dataPotter);

// Definimos los Bloques

const welcome = document.createElement("div");
welcome.id = "paginaInicio";
welcome.classList = "paginaInicio";
welcome.innerHTML = `
  <section id="welcome" class="welcome">
      <div class="inicio" id="inicio">
      <img src="./rayo.png" class="logo" alt="rayo" height="100px" weight="50px">
        <h1 class="titulo">Harry Potter <br> Beginners </h1>
        <img src="./lentes.png" class="logo" alt="logo" height="100px" weight="50px">

        <p class="textoInicio"><i>Una mágica guía para principiantes y conocedores</i></p>
        <p class="textoJuro">¡Juro solemnemente que mis intenciones no son buenas!</p>
        <button class='enterBtn' id='selectEnter'>Entrar</button>
      </div>
    </section>
`;

const paginaPrincipal = document.createElement("div");
paginaPrincipal.id = "main";
paginaPrincipal.classList = "main row";
paginaPrincipal.innerHTML = `
<div class="header">
  <img src="./rayo.png" class="logo" alt="rayo" height="60px" weight="30px">
  <h2 class="titleTwo">Harry Potter <br> Beginners </h2>
  <img src="./lentes.png" class="logo2" alt="logo2" height="70px" weight="40px">
<div>
<section id= "filtersSection" class="row filters">
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
      <a id="femaleGender">Femeninos</a>
      <a id="maleGender">Masculinos</a>
    </div>
  </div>

  <div class="dropdown">
    <button class="dropbtn">Hogwarts</button>
    <div class="dropdown-content">
      <a id="hogwartsStudent">Estudiantes</a>
      <a id="hogwartsStaff">Staff</a>
    </div>
  </div>



  <div id="az">
    <select id="alphabeticalSearch" class="select">
      <option value="order">Ordenar</option>
      <option value="a-z">A-Z</option>
      <option value="z-a">Z-A</option>
    </select>
  </div>
</div>
<div class="row">
  <div class="search">
    <input class="searchInput" type="search" id="search" placeholder="Buscar por personaje"/>
    <button class="icon">Buscar</button>
  </div>



<div id="back">
<div id="backBtn" class="backButton" role="link" onclick="window.location='index.html'">Volver</div>
</div>

</section>
`;

// Renderiza sección welcome al cargar el sitio
document.getElementById("root").appendChild(welcome);

// Funcion para limpiar un contenedor
function clearContent(id) {
  document.querySelector(id).innerHTML = "";
}

//Función para cargar segunda pantalla

const enterBtn = document.querySelector("#selectEnter");
enterBtn.addEventListener("click", () => {
  clearContent("#root");

  const body = document.querySelector('body');
  body.classList = 'filtersBackground';

  const resultsContainer = document.createElement("div");
  resultsContainer.id = "results";
  resultsContainer.classList = "row results";
  document.getElementById("root").appendChild(resultsContainer);

  const root = document.querySelector("#root");
  root.appendChild(paginaPrincipal);
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

  const femaleGender = document.querySelector("#femaleGender");
  femaleGender.addEventListener("click", () => {
    clearContent("#results");
    let femaleGender = filterGender(dataPotter, "female");
    return showData(femaleGender);
  });

  const maleGender = document.querySelector("#maleGender");
  maleGender.addEventListener("click", () => {
    clearContent("#results");
    let maleGender = filterGender(dataPotter, "male");
    return showData(maleGender);
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

    details.classList = "characterDetails";
    details.innerHTML = `
      <ul class="characterDetailsList">
      <li>Especie: ${character.species}</li>
      <li>Género: ${character.gender}</li>
      <li>Fecha de nacimiento: ${character.dateOfBirth}</li>
      <li>Año de nacimiento: ${character.yearOfBirth}</li>
      <li>Ascendencia: ${character.ancestry}</li>
      <li>Actor/Actriz: ${character.actor}</li>
      <li>Estado: ${character.alive ? "Vivo" : "Muerto"}</li><br>
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
    const results = document.querySelector('#results');
    results.appendChild(container);
    // aca pego la tarjeta de cada personaje en results
  });
}
