//En este lugar estamos exportando desde potter.js, las funciones que vamos creando acá, tomando desde la data general enviada por Laboratoria,
// para ser utilizadas en main.js donde éste trabajara con DOM para ver en HTML toda nuestra página con las funciones
//<------- La data general ya está creada por Laboratoria y ya la llamamos en js, con el nombre dataPotter.
//<---Funcion filtrar por casas para enviar (exportar) a main.js
// Dentro de la func filterHouse, creamos la variable let characterHouse con su función dentro,
//que mostrara los personajes de cada casa ya filtrados
export function filterHouse(dataPotter, condition) {
  let characterHouse = dataPotter.filter(character => character.house === condition);
  return characterHouse;
}
export function filterhogwartsStaff(dataPotter) {
  let characterHouse = dataPotter.filter(character => character.hogwartsStaff === true);
  return characterHouse;
}
export function filterhogwartsStudent(dataPotter) {
  let characterHouse = dataPotter.filter(character => character.hogwartsStudent === true);
  return characterHouse;
}
// export function filterData(data, attribute, condition) {
//   let results = data;
//   if (attribute && condition) {
//     results = data.filter(item => item[attribute] === condition);
//   }
//   return results;
// }