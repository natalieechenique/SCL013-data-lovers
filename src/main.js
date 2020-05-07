import { filterHouse } from './data.js';
import dataPotter from './data/potter/potter.js';
const filterData = (data, filter) => {
  let filteredData = data;
  if (filter) {
    filteredData = data.filter(filter);
  }
  return filteredData;
}
const enterButton = document.querySelector("#selectEnter");
enterButton.addEventListener("click", () => secondPage());
let rowResults;
function secondPage() {
    /*function showData(data, filter) {
      filterData(data).map((item) => {
        */
    document.getElementById('root').innerHTML = `<section id="categorias" class="categorias">
   <div class="headerDos">
     <div class="title" id="tittleTwo"> Harry Potter Beginners</div>
     <div class="logo rayo" id="logoR"></div>
     <div class="logo lentes" id="lentes"></div>
     <div class="logo container hamburguesa" id="logoCont"></div>
   </div>
   <div class="row cat" id="row">
     <div class="drop-down">
       <span>Casas</span>
       <span>Griffindor</span>
       <span>Hafflepuff</span>
       <span>Ravenclaw</span>
       <span>Slytherin</span>
     </div>
     <div class="drop-down">
       <span>Personajes</span>
       <spanp>Protagonistas</span>
         <span>Antagonistas</span>
     </div>
     <div class="drop-down">
       <span>Hogwarts</span>
       <span>Estudiantes</span>
       <span>Staff</span>
     </div>
     <div class="drop-down">
       <span>Patronus</span>
     </div>
   </div>
   <div class="row actions" id="row">
     <div class="action">Buscador de personajes</div>
     <div class="action">Ordenar por
       <span>A-Z</span>
       <span>Z-A</span>
     </div>
     <div class="action">
       <span>Filtrar por</span>
       <span>Género</span>
       <span>Femenino</span>
       <span>Masculino</span>
       <span>Especie</span>
       <span>Humano</span>
       <span>Criatura</span>
     </div>
   </div>
   <div class='row results'id='results'>
   </div>
  </section>
  `;
    const rowResults = document.getElementById('results');
    dataPotter.forEach((character) => {
      const container = document.createElement('div');
      const img = document.createElement('img');
      const details = document.createElement('div');
      container.id = character.name;
      container.classList = 'card';
      img.src = character.image;
      img.classList = 'portrait';
      details.classList = 'details';
      details.innerHTML = character.name;
      container.append(img);
      container.append(details); 
      rowResults.append(container); 
    });
  }