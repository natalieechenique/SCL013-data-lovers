import dataPotter from "./data/potter/potter.js";
import {
  filterHouse,
  filterhogwartsStaff,
  filterhogwartsStudent,
  filterGender,
  filterSearch
} from "./data.js";

// console.log(dataPotter);

// Definimos los Bloques

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
  <img src="./rayo.png" class="rayo2" alt="rayo" height="30px" weight="15px">
  <h1 class="title2">HARRY POTTER <br> Beginners </h1>
  <img src="./lentes.png" class="lentes2" alt="lentes" height="80px" weight=540px">
<div>
<section id= "filtersSection" class="row actions">
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



  <nav id="nav">
   <div id="alphabeticalOrder" class="actions">
    <select id="alphabeticalSearch" class="select">
      <option value="order">Ordenar</option>
      <option value="a-z">A-Z</option>
      <option value="z-a">Z-A</option>
    </select>
  </div>
  </nav>

</div>
<div class="actions">
    <input class="searchInput" type="search" id="search" placeholder="Buscar por personaje"/><br>
    <button class="icon" id="icon">Buscar</button>
  </div>
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


    const searchInput = document.querySelector("#icon");
    searchInput.addEventListener("click", () => {
      clearContent("#results");
      // Toma el value del input #search y lo usa como condicion para filtrar en f
      let inputValue = document.querySelector('#search').value;
      let showCharacter = filterSearch(dataPotter, inputValue);
      return showData(showCharacter);
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

    // Muestro los resultados de cada personaje por nombre con innerHTML en HTML
    const results = document.querySelector('#results');
    results.appendChild(container);
    // aca pego la tarjeta de cada personaje en results
  });
}


// if(document.getElementById("btnModal")){
//   var modal = document.getElementById("tvesModal");
//   var btn = document.getElementById("btnModal");
//   var span = document.getElementsByClassName("close")[0];
//   var body = document.getElementsByTagName("body")[0];

//   btn.onclick = function() {
//     modal.style.display = "block";

//     body.style.position = "static";
//     body.style.height = "100%";
//     body.style.overflow = "hidden";
//   }

//   span.onclick = function() {
//     modal.style.display = "none";

//     body.style.position = "inherit";
//     body.style.height = "auto";
//     body.style.overflow = "visible";
//   }

//   window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";

//       body.style.position = "inherit";
//       body.style.height = "auto";
//       body.style.overflow = "visible";
//     }
//   }
// }



// const modalCreate = document.createElement("div");
// modalCreate.id="mod"
// modalCreate.classList="mod"
// modalCreate.innerHTML= `
// <button id="btnModal">Abrir modal</button>
// <div id="tvesModal" class="modalContainer">
//   <div class="modal-content">
//     <span class="close">×</span>
//     <h2>Modal</h2>
//     <p>Se ha desplegado el modal y bloqueado el scroll del body!</p>
//   </div>
// </div>
// `;
