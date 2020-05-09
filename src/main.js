
// Importamos desde data.js ,donde se creò una funcion llamada por nosotras "dataPotter"
// que es la data COMPLETA general del proyecto. Con su console log para revisarlo
import dataPotter from './data/potter/potter.js'; // <----
// console.log(filterHogwarts(dataPotter, 'data'));

// Acá importamos una segunda funcion que creamos en dataPotter.js, que será
// el primer filtro que realizaremos. Por CASAS. Llamada "filterHouse"
// Creamos el console.log para revisar ya escribiendo nombres de cada casa
import { filterHouse } from './data.js'; // <----
// console.log(filterHogwarts(dataPotter, 'Slytherin'));


//Creamos la variable const main, que es nuestro div principal con toas las funciones de la pag 2 (funciones principales)
// Por lo general se crea acá en main.js con la función createElement
// Agregamos id unico para casa elemento y class que puede ser usada varias veces, para agregar estilos en CSS
// Finalmente desde ahi se crea un div "hijo" dentro deste div "padre" main, tomamos el documento desde su id "root"(raiz)
const main = document.createElement('main');
main.id = 'paginaPrincipal';
main.classList = 'paginaPrincipal'
document.getElementById('root').appendChild(main);



// Pagina 1 Ingreso, welcome
//Ahora declaramos una variable const selectIngreso, con la funcion que toma el documento desde un document.querySelector
// que toma id y clases (mas global que el getElementByid) tomara el id del boton selectEnter
//Luego creamos la funcion con la const seklectIngreso que al presionar el boton es tomado por addEventListener
// para pasar a página 2 creada en la función mainCreate
const selectIngreso = document.querySelector("#selectEnter");
selectIngreso.addEventListener("click", () => {
  mainCreate();
})

// Creamos la variable const welcome, con id páginaInicio en main y su classList paginaInicio
// Después tomamos por el id "root" y creamos el hijo "welcome"con nuestro inicio que tendrá tambien el boton entrar boton
const welcome =  document.createElement('welcome');
main.id = 'paginaInicio';
main.classList = 'paginaInicio'
document.getElementById('root').appendChild(welcome);


//_----------------------------------
// Declaramos aca la variable const mainRoot y tomamos el contenido de todo "root" con querySelector
const mainRoot = document.querySelector("#root");

// Aca declararemos una funcion vacia, por que le voy a pasar el id de un elemento, para dar las tarjetas filtradas (ahora estan generales)
// que creare dentro de funcion mainCreate que esta abajo, solo dentro de esa funcion puede modificarlo
 let results;



//Aca estamos armando una funcion para crear todo lo que esta en main o pagina principal (Que esta vez se armo primero por html),
//donde van las funciones principales, filtros, personajes, etc, el DIV principal de esa pag//
// Aca lass comillas francesas `` pueden englobar varias cosas y funciones
function mainCreate () {
  mainRoot.innerHTML = `<section id="categorias" class="categorias">
  <div class="headerDos">
    <div class="title" id="tittleTwo"> Harry Potter Beginners</div>
    <div class="logo" id="logo"></div>
  </div>

  <div class="row cat" id="row">

<div class="dropdown">
<button class="dropbtn" id="casas">Casas</button>
 <div class="dropdown-content">
  <a href="#">Gryffindor </a>
  <a href="#">Hafflepuff </a>
  <a href="#">Ravenclaw </a>
  <a href="#">Slytherin </a>
  </div>
</div>

<div class="dropdown">
  <button class="dropbtn">Personajes</button>
  <div class="dropdown-content">
    <a href="#">Protagonistas </a>
    <a href="#">Antagonistas </a>
</div>
</div>

<div class="dropdown">
<button class="dropbtn">Hogwarts</button>
<div class="dropdown-content">
  <a href="#">Estudiantes</a>
  <a href="#">Staff</a>
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

    <div class="action">
        <button class="orderbtn">Ordenar por</button>
        <!-- <div class="actionorder-content">
          <a href="#">Femenino</a>
          <a href="#">Masculino</a> -->
      </div>

    <div class="action">
      <button class="filterbtn">Filtrar por</button>
      <!-- <div class="filter-content">
        <a href="#">Protagonistas </a>
        <a href="#">Antagonistas </a> -->
    </div>
  </div>

  <div class="row results" id="results"></div>

<div id="back">
<div id="backButton" class="backButton" role="link" onclick="window.location='index.html'">Volver</div>

</div>
`;

// Los resultados de las funciones de filtro, seran tomadas con querySelector desde #results
// y seran impresas o mostradas con la funcion showData, que se declara mas abajo, aca solo la llamamos para no repetir todo
results = document.querySelector("#results");
showData();
}


// Creacion de funcion showData
// Se va creando uno a uno la tarjeta de personajes recorriendo la dataPotter, creando los div, imagen, detalles
function showData() {
  dataPotter.forEach(character => {
    const container = document.createElement('div');
    const img = document.createElement('img');
    const details = document.createElement('div');


// container para nombre del personaje en classList "card"
// container para la imagen del personaje classList "card"
// Imagen del personaje classList "portrait"
// Detalles del personaje (al reverso) classList "details"
    container.id = character.name;
    container.classList = 'card';

    img.src = character.image;
    img.classList = 'portrait';

    details.classList = 'details';
    details.innerHTML = character.name;


    container.appendChild(img);
    container.appendChild(details);

    // Muestro los resultados de cada personajepor nombre con innerHTML en HTML
    results.appendChild(container);
  // aca pego la tarjeta de cada mono en results
});
}


// Buscador por nombre//
let buscador = document.createElement ("buscador")
buscador.id ="buscar"
buscador.innerHTML = "buscar"
buscador.appendChild(buscador)
getElementById(row)



// let dataArray
// let dataOrder=data

// const select=document.getElementById("alphabeticalSearch");
// select.addEventListener("change",() =>{
//   characters.innerHTML = "";
//   dataArray=Object.values(dataOrder);
//   let condition=select.options[select.selectIndex].index;
//   let orderResult= orderData(dataArray,condition);

//   for(let i=0;<orderResults.length;i++){
// characters.innerHTML += `
// <div id="btn" class="row cat"
// <img src= "${orderResult"[i].name}" alt"" class=dropBtn">
// <h3>${orderResult[i].name}</h3>
//              <p>${orderResult[i].house}</p>
//          </div>`;
//          showData();
//     }
// })
















// -------------------------------------------------

// // const filter
// const characters

// const filter = () =>{
//   const search = document.querySelector("#search").value;
//   characters.innerHTML = "";
//   const informationSearch = search.toLowerCase();

//   for (let i=0; i<dataArray.length; i++){
//       let characterName = dataArray[i].name.toLowerCase();

//       if(characterName.indexOf(informationSearch) !== -1){
//           characters.innerHTML += `
//           <div  class="root">
//               <img src="${dataArray[i].image}" alt="" class="imgButton">
//               <h3>${dataArray[i].name}</h3>
//               <p>${dataArray[i].house}</p>
//           </div>`;
//           createMod();
//       }
//   }

//   if (characters.innerHTML === ""){
//       characters.innerHTML += `
//       <div  class="root">
//           <p>Personaje no encontrado...</p>
//       </div>`;
//   }
// }
// search.addEventListener('keyup', filter)



// // // Modal para cada personaje-detalles
// function createMod (){
//   let mod=document.getElementById("modContent");
//   let modContainer = document.getElementById("modContent")
// let imgBtn=document.getElementsByClassName("imgBtn");
// mod.style.display = "none;
// for (length(let i=0; i<imgBt[i].length; i++){
//   img=imgBtn[i];
//   img.addEventListener ('click',()=> {
//     mod.style.display = "block";

// //     modContainer.innerHTML+=`
//     <div class="frame">
//     <div class "cerrar">
//     <span class="close">&times;</span>
//     </div>

//     <div class= "modDetails">
//     <div class="details">
//     <img src= "${dataPotterArr[i].image} alt"Detalles" class="imgBtn">
//     <h3>$dataPotterArr[i].house</h3>
//     <p>$dataPotterArr[i].actor</p>
//     </div>

//     <div class="details">
//     <P>Especie: ${dataPotterArr[i].species}</p>
//     <p>Género: ${dataPotterArr[i].gender}</p></p>
//     <p>Fecha de nacimiento: ${dataPotterArr[i].dateOfBirth}</p>
//     <p>Ascendencia: ${dataPotterArr[i].yearOfBirth}</p></p>
//     <p>Color de ojos: ${dataPotterArr[i].eyeColour}</p></p>
//     <p>Color de cabello: ${dataPotterArr[i].hairColour}</p></p>
//     <p>Actor/actriz: ${dataPotterArr[i].actor}</p></p>
//     <p>Estado: ${dataPotterArr[i].alive}</p></p>
//     <h4>Varita/h4>
//     <p>Madera: ${dataPotterArr[i].wand.wood}</p></p>
//     <p>Núcleo: ${dataPotterArr[i].wand.core}</p></p>
//     <p>Longitud: ${dataPotterArr[i].wand.length}</p></p>
//     <p>Patronus: ${dataPotterArr[i].patronus}</p></p>
//     </div>
//     </div>
//     `;
//   }




















//----------------------------------------------------------------//
// POR ACA HAY PURA CHALLA O PRUEBAS AUN



// import data from './data/potter/potter.js'
// import orderData from './data.js';

// //Esconde y trae la página de bienvenida y la página de información
// document.getElementById("homePage").style.display = "none";
// let enterButton = document.getElementById("enterButton");
// enterButton.addEventListener('click', ()=>{
//     document.getElementById("welcome").style.display = "none";
//     document.getElementById("homePage").style.display = "block";
// });


// //Traemos todos los personajes al inicio de la página
// const dataPotter=data;
// let dataPotterArr=Object.values(dataPotter);
// const characters = document.getElementById("characters");
// for(let i=0;i<dataPotterArr.length;i++){
//    characters.innerHTML += `
//    <div  class="root">
//         <img src="${dataPotterArr[i].image}" alt="" class="imgButton">
//         <h3>${dataPotterArr[i].name}</h3>
//         <p>${dataPotterArr[i].house}</p>
//     </div>`;
//     createModal();
// // }




//Creamos el modal de cada personaje con su correspondiente información
// function createMod () {
//     let createMod=document.getElementById("myModal"); //Modal general html
//     let createModContainer = document.getElementById("modalContent"); //Modal cuadrito blanco html
//     let imgButton=document.getElementsByClassName("imgButton"); //imagen que actua como boton. Ingresada en el js
//     modal.style.display = "none"; //Para esconder el modal general al cargar la página

//     for(let i=0; i<imgButton.length; i++){ //recorremos el for de las imagenes que creamos
//         let img=imgBtn[i]; //guardamos cada imagen en una variable con posición i

//         img.addEventListener ('click', ()=>{ //agregamos el evento a la imagen
//             modal.style.display = "block"; //al hacer click traemos el modal general

            //creamos el modal html en el js. /modal cuadrito blanco
            // modContainer.innerHTML += `
            // <div class="frame">
            //     <div class="x">
            //         <span class="close">&times;</span>
            //     </div>
            //     <div  class="modCharacters">
            //         <div class="characterInformation">
            //             <img src="${dataPotterArr[i].image}" alt="" class="imgButton">
            //             <h3>${dataPotterArr[i].name}</h3>
            //             <p>${dataPotterArr[i].house}</p>
            //         </div>
            //         <div class="characterInformation2">
            //             <p>Especie: ${dataPotterArr[i].species}</p>
            //             <p>Género: ${dataPotterArr[i].gender}</p>
            //             <p>Fecha de nacimiento: ${dataPotterArr[i].dateOfBirth}</p>
            //             <p>Año de nacimiento: ${dataPotterArr[i].yearOfBirth}</p>
            //             <p>Ascendencia: ${dataPotterArr[i].ancestry}</p>
            //             <p>Color de ojos: ${dataPotterArr[i].eyeColour}</p>
            //             <p>Color de cabello: ${dataPotterArr[i].hairColour}</p>
            //             <p>Actor/Actriz: ${dataPotterArr[i].actor}</p>
            //             <p>Estado: ${dataPotterArr[i].alive}</p><br>
            //             <h4>Varita mágica</h4>
            //             <p>Madera: ${dataPotterArr[i].wand.wood}</p>
            //             <p>Núcleo: ${dataPotterArr[i].wand.core}</p>
            //             <p>Longitud: ${dataPotterArr[i].wand.length}</p>
            //             <p>Patronus: ${dataPotterArr[i].patronus}</p>
            //         </div>
            //     </div>
            // </div>`;

        //     let span = document.getElementsByClassName("close")[0]; // al momento de cerrar, hace este evento/
        //     span.addEventListener('click', ()=>{ //evento del click en la x
        //         mod.style.display = "none"; //Escondemos el modal general
        //         modContainer.innerHTML="";  //Limpiamos el modal con la informacion (cuadrito blanco)
        //     });
        // });

//         window.onclick = function(event) { //evento para que al hacer click fuera del modal se cierre
//             if (event.target == mod) {
//               mod.style.display = "none";
//               modContainer.innerHTML="";
//             }
//         }
//     }
// }
//Ordenamos todos los personajes en orden alfabético
// const select = document.getElementById("alphSearch");
// select.addEventListener("change", () =>{
//     characters.innerHTML = "";
//     dataArray=Object.values(dataPotter);
//     let condition = select.options[select.selectedIndex].index;
//     let orderResult = orderData(dataArray, condition);

//     for(let i=0;i<orderResult.length;i++){
//         details.innerHTML += `
//         <div id="boton" class="root">
//              <img src="${orderResult[i].image}" alt="" class="imgBtn">
//              <h3>${orderResult[i].name}</h3>
//              <p>${orderResult[i].house}</p>
//          </div>`;
//          createMod();
//     }
// })


// filtro de búsqueda
// const filter = () =>{
//     const search = document.querySelector("#search").value;
//     characters.innerHTML = "";
//     const informationSearch = search.toLowerCase();

//     for (let i=0; i<dataArray.length; i++){
//         let characterName = dataArray[i].name.toLowerCase();

//         if(characterName.indexOf(informationSearch) !== -1){
//             characters.innerHTML += `
//             <div  class="root">
//                 <img src="${dataArray[i].image}" alt="" class="imgButton">
//                 <h3>${dataArray[i].name}</h3>
//                 <p>${dataArray[i].house}</p>
//             </div>`;
//             createMod();
//         }
//     }
//     if (characters.innerHTML === ""){
//         characters.innerHTML += `
//         <div  class="root">
//             <p>Personaje no encontrado...</p>
//         </div>`;
//     }
// }
// search.addEventListener('keyup', filter)








// buscador.addEventListener('keyup', () => {
//   port.classList.add('hide');
//   subLogoContainer.classList.remove('hide');
//   searchContainer.classList.remove('hide');
//   potterStudents.classList.add('hide');
//   potterStaff.classList.add('hide');
//   potterGryffindor.classList.add('hide');
//   potterSlytherin.classList.add('hide');
//   potterHufflepuff.classList.add('hide');
//   potterRavenclaw.classList.add('hide');
//   potterSpells.classList.add('hide');
//   wandsContainer.classList.add('hide');

//   const arrSearchCharacter = searchCharacters(POTTER, text.value);
//   if (arrSearchCharacter.length > 0) {
//     searchResults.innerHTML = showPotterCharacters(arrSearchCharacter);
//   } else {
//     searchResults.innerHTML = 'No se encontraron resultados';
//   }
// });

// // Función que muestra personajes de Gryffindor
// Gryffindor.addEventListener('click', () => {
//   principalContainer.classList.add('hide');
//   subLogoContainer.classList.remove('hide');
//   searchContainer.classList.add('hide');
//   potterStudents.classList.add('hide');
//   potterStaff.classList.add('hide');
//   potterGryffindor.classList.remove('hide');
//   potterSlytherin.classList.add('hide');
//   potterHufflepuff.classList.add('hide');
//   potterRavenclaw.classList.add('hide');
//   wandsContainer.classList.add('hide');
//   potterSpells.classList.add('hide');
//   text.value = '';

//   const filterByGryffindor = filterPotterHouse(POTTER, valuePotterGryffindor);
//   document.querySelector('#insertPotterGryffindor').innerHTML = showPotterCharacters(filterByGryffindor);
//   fourthFilter.addEventListener('change', () => {
//     const arrProfByNameGender = orderByNameAndGender(filterByGryffindor, fourthFilter.value);
//     document.querySelector('#insertPotterGryffindor').innerHTML = showPotterCharacters(arrProfByNameGender);
//   });
// });


// let backBtn = document.createElement ("button")
// backBtn.id ="back"
// backBtn.classList="backBtn"
// backBtn.innerHTML = "back"

// backBtn.body.appendChild(backBtn)
// getElementById(main)

// <a href="javascript:history.go(-1)">Atrás</a>


// const characterHouse = document.getElementById("Gryffindor");
// console.log(Gryffyndor);

// Gryffindor.addEventListener("click", (event) => {

//   let GryffindorMembers = filterByHouse(charactersData, "Gryffindor");
//   event.preventDefault();
//   return showHouseMembers(gryffindorMembers);
// });

// let button = document.createElement("button");
// button.id = "volver"
// button.innerHTML = "Volver";

// const Slytherin = document.getElementById("Slytherin");
// Slytherin.addEventListener("click", () => {
//   let slytherinMembers = filterByHouse(charactersData, "Slytherin");
//   return showHouseMembers(slytherinMembers);
// });
// const Hufflepuff = document.getElementById("Hufflepuff");
// Hufflepuff.addEventListener("click", () => {
//   let hufflepuffMembers = filterByHouse(charactersData, "Hufflepuff");
//   return showHouseMembers(hufflepuffMembers);
// });

// const Ravenclaw = document.getElementById("Ravenclaw");
// Ravenclaw.addEventListener("click", () => {
//   let ravenclawMembers = filterByHouse(charactersData, "Ravenclaw");
//   return showHouseMembers(ravenclawMembers);
// });


// const EscudoGry = document.getElementById("EscudoGry");
//   EscudoGry.addEventListener("click", (event) => {
//     let gryffindorMembers = filterByHouse(charactersData, "Gryffindor");
//     event.preventDefault();
//     return showHouseMembers(gryffindorMembers);
//   });

//   const EscudoRaven = document.getElementById("EscudoRaven");
//   EscudoRaven.addEventListener("click", (event) => {
//     event.preventDefault();
//     let ravenclawMembers = filterByHouse(charactersData, "Ravenclaw");
//     return showHouseMembers(ravenclawMembers);
//   });

//   const EscudoHuffle = document.getElementById("EscudoHuffle");
//   EscudoHuffle.addEventListener("click", (event) => {
//     event.preventDefault();
//     let hufflepuffwMembers = filterByHouse(charactersData, "Hufflepuff");
//     return showHouseMembers(hufflepuffwMembers);
//   });

//   const EscudoSly = document.getElementById("EscudoSly");
//   EscudoSly.addEventListener("click", (event) => {
//     event.preventDefault();
//     let slytherinMembers = filterByHouse(charactersData, "Slytherin");
//     return showHouseMembers(slytherinMembers);
//   });


// //1. FUNCIÓN PARA MOSTRAR LA PANTALLA DE CADA CASA (la única con createElement XD)
// function showHouseMembers(houseMembers) {
//   clearInnerContent(); //se borra el contenido anterior que está en .inner-content
//   //MenuPrincipal(); //3. crea estructura del menú (provisorio)
//   const innerContentSection = document.querySelector(".inner-content");
//   const sectionTitle = document.querySelector(".section-title");
