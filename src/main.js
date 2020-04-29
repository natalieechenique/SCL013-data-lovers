


//import { example } from './data.js';//


// import data from './data/lol/lol.js';

import dataPotter from './data/potter/potter.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(dataPotter);








const ocultarYMostrar = (ocultarID, mostrarID) => {
    document.getElementById(ocultarID).classList.add("oculto");
    document.getElementById(mostrarID).classList.remove("oculto");
}


const selectIngresar = () => {
   ocultarYMostrar("inicio","clasificaciones");
}

const buttonSelection = document.getElementById("selectIngresar");
  document.addEventListener("click",selectIngresar);



  const selectVolver=()=> {
    ocultarYMostrar("clasificaciones","inicio");
   }
  
  const buttonCancel=document.getElementById("selectVolver");
  buttonCancel.addEventListener("click",selectVolver);

//  const selectVolver = () => {
 //   ocultarYMostrar("clasificaciones","inicio");
 //}
 
 //const buttonVolver = document.getElementById("selectVolver");
 //  document.addEventListener("click",selectVolver);//
 



