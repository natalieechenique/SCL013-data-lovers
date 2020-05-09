
// En este lugar estamos exportando desde potter.js, las funciones que vamos creando acá, tomando desde la data general enviada por Laboratoria,
// para ser utilizadas en main.js donde éste trabajara con DOM para ver en HTML toda nuestra página con las funciones
//<------- La data general ya está creada por Laboratoria y ya la llamamos en js, con el nombre dataPotter.


//<---Funcion filtrar por casas para enviar (exportar) a main.js
// Dentro de la func filterHouse, creamos la variable let characterHouse con su función dentro,
//que mostrara los personajes de cada casa ya filtrados
export function filterHouse(dataPotter, condition){
  let characterHouse = dataPotter.filter(character => character.house === condition);
  return characterHouse;
}





// export const orderData = (dataArray, condition) => {
//   let filterOrder = dataArray; //Arreglo nuevo donde guardaremos persojes ordenados
//   if(condition==0){
//     return filterOrder;
//   }
//   if(condition == 1){
//     filterOrder.sort((a, b) => a.name.localeCompare(b.name));
//     return filterOrder;
//   }
//   if(condition==2){
//     filterOrder.sort((a, b) => a.name.localeCompare(b.name));
//     const filterOrderReverse=filterOrder.reverse();
//     return filterOrderReverse;
//   }

// }
// export default orderData;




// export function filterHogwarts(dataPotter, condition){
//   let filterHogwarts = dataPotter.filter(character => character.filterHogwarts === condition);
//   return filterHogwarts;
// }
