
import { filterHouse } from './data.js';
import dataPotter from './data/potter/potter.js';

console.log(filterHouse(dataPotter, 'Gryffindor'));






const filterData = (data, filter) => {
  let filteredData = data;

  if (filter) {
    filteredData = data.filter(filter);
  }
  return filteredData;
}


console.log('data', filterData(dataPotter));



// main = div principal)

// const main = document.createElement('main');
// main.id = 'paginaPrincipal';
// main.classList = 'paginaPrincipal'
// document.getElementById('root').appendChild(main);



function showData(data, filter) {
  filterData(data).map((item) => {
    const container = document.createElement('div');
    const img = document.createElement('img');
    const details = document.createElement('div');

    container.id = item.name;
    container.classList = 'card';


    img.src = item.image;
    img.classList = 'portrait';

    details.classList = 'details';
    details.innerHTML = item.name;




    container.appendChild(img);
    container.appendChild(details);

    return document.getElementById('results').appendChild(container)
  })
}

const renderedResults = showData(dataPotter);















// //funcion pasar pantalla)
// const ocultarYMostrar = (ocultarID, mostrarID) => {
//   document.getElementById(ocultarID).classList.add("oculto");
//   document.getElementById(mostrarID).classList.remove("oculto");
// }

// //entrar)
// const selectEnter = () => {
//   ocultarYMostrar("welcome", "paginaPrincipal");
// }









// const buttonSelect = document.getElementById("selectEnter");
// document.addEventListener("click",selectEnter);






// // //volver)
// const selectBack = () => {
//   ocultarYMostrar("paginaPrincipal","welcome");
//  }

//  const buttonBack = document.getElementById("selectBack");
//  document.addEventListener("click",selectBack);





// const backButton = document.createElement('button')
// enterButton.id = "back"
// enterButton.classList = "backButton"
// document.getElementById("main").appendChild(backButton);




// let button = document.createElement("button");
// button.id = "volver"
// button.innerHTML = "Volver";

// button.appendChild(button);





// Buscador por nombre//

// let buscador = document.createElement ("buscador")
// buscador.id ="buscar"
// buscador.innerHTML = "buscar"

// buscador.appendChild(buscador)
// getElementById(row)

