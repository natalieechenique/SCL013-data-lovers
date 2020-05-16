import dataPotter from "./data/potter/potter.js";
import {
  filterHouse,
  filterhogwartsStaff,
  filterhogwartsStudent,
  filterGender,
  filterSearch,
  compare,
} from "./data.js";


// Definimos los Bloques

let filteredData = dataPotter.sort(compare);

const welcome = document.createElement("div");
welcome.id = "paginaInicio";
welcome.classList = "paginaInicio";
welcome.innerHTML = `
  <section id="welcome" class="welcome">
      <div class="inicio" id="inicio">
      <img src="./rayo.png" class="rayo" alt="Rayo" height="100px" weight="50px">
        <h1 class="titulo">HARRY POTTER <br> Beginners </h1>
        <img src="./lentes.png" class="lentes" alt="lentes" height="100px" weight="50px">

        <p class="textoInicio">Una mágica guía para principiantes y conocedores</p>
        <i class="textoJuro">¡Juro solemnemente que mis intenciones no son buenas!</i>
        <button class='enterBtn' id='selectEnter'>Entrar</button>
      </div>
    </section>
`;


const paginaPrincipal = document.createElement("div");
paginaPrincipal.id = "main";
paginaPrincipal.classList = "main row";
paginaPrincipal.innerHTML = `
<div class="header">
  <img src="./rayo.png" class="rayo2" alt="rayo">
  <h1 class="title2">HARRY POTTER <br> Beginners </h1>
  <img src="./lentes.png" class="lentes2" alt="lentes" height="100px" weight=50px">
</div>

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

  </section>


   <section id="actionsSection" class= "row actions">


   <div id="back">
<div id="backBtn" class="backButton" role="link" onclick="window.location='index.html'">Volver</div>
</div>
</div>

<div class="search actions">
    <input class="searchInput" type="search" id="search" placeholder="Buscar por personaje"/>
    <button class="icon" id="icon">Buscar</button>
    </div>
  
    <div id= "alphabOrder" class= "actions">
    <div class="filterOptionBody">
      <select id="order" class="orderBtn" name="Ordenar">
        <option id="alph" value="All" disabled selected>Ordenar</option>
        <option id="az" value="A-Z">A-Z</option>
        <option id="za" value="Z-A">Z-A</option>
      </select>
      </div>

      </section>

<div class="varitaBox">
<img src="./varita.png" class="varita" alt="varita" height="50px" weight=40px">
</div>

</div>

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
  showData(filteredData);



  const Gryffindor = document.querySelector("#Gryffindor");
  Gryffindor.addEventListener("click", () => {
    clearContent("#results");
    filteredData = filterHouse(dataPotter, "Gryffindor");
    return showData(filteredData);
  });

  const Hufflepuff = document.querySelector("#Hufflepuff");
  Hufflepuff.addEventListener("click", () => {
    clearContent("#results");
    filteredData = filterHouse(dataPotter, "Hufflepuff");
    return showData(filteredData);
  });

  const Ravenclaw = document.querySelector("#Ravenclaw");
  Ravenclaw.addEventListener("click", () => {
    clearContent("#results");
    filteredData = filterHouse(dataPotter, "Ravenclaw");
    return showData(filteredData);
  });

  const Slytherin = document.querySelector("#Slytherin");
  Slytherin.addEventListener("click", () => {
    clearContent("#results");
    filteredData = filterHouse(dataPotter, "Slytherin");
    return showData(filteredData);
  });

  const hogwartsStaff = document.querySelector("#hogwartsStaff");
  hogwartsStaff.addEventListener("click", () => {
    clearContent("#results");
    filteredData = filterhogwartsStaff(dataPotter);
    return showData(filteredData);
  });

  const hogwartsStudent = document.querySelector("#hogwartsStudent");
  hogwartsStudent.addEventListener("click", () => {
    clearContent("#results");
    filteredData = filterhogwartsStudent(dataPotter);
    return showData(filteredData);
  });

  const femaleGender = document.querySelector("#femaleGender");
  femaleGender.addEventListener("click", () => {
    clearContent("#results");
    filteredData = filterGender(dataPotter, "female");
    return showData(filteredData);
  });

  const maleGender = document.querySelector("#maleGender");
  maleGender.addEventListener("click", () => {
    clearContent("#results");
    filteredData = filterGender(dataPotter, "male");
    return showData(filteredData);
  });


  const searchInput = document.querySelector("#icon");
  searchInput.addEventListener("click", () => {
    clearContent("#results");
    // Toma el value del input #search y lo usa como condicion para filtrar en f
    let inputValue = document.querySelector('#search').value;
    filteredData = filterSearch(dataPotter, inputValue);
    return showData(filteredData);
  });


  const sortData = document.querySelector('#order');
  sortData.addEventListener('change', (event) => {
    clearContent("#results");
    if(event.target.value === 'A-Z') {
      filteredData = filteredData.sort(compare);
      return showData(filteredData);
    } 
    if(event.target.value === 'Z-A') {
      filteredData = filteredData.reverse(compare);
      return showData(filteredData);
    }
  })
});




// Creacion de funcion showData
// Se va creando uno a uno la tarjeta de personajes recorriendo la dataPotter, creando los div, imagen, detalles
function showData(data) {
  // Muestro los resultados de cada personaje por nombre con innerHTML en HTML
  const results = document.querySelector('#results');
  const noMatch = document.createElement('div');
  noMatch.classList = "noMatch";
  noMatch.innerHTML = "No se han encontrado resultados."
  if (data.length > 0) {
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

      results.appendChild(container);
      // aca pego la tarjeta de cada personaje en results
    });
  } else {
    results.appendChild(noMatch);
  }
}


