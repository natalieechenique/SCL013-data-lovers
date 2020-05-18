
// En este lugar estamos exportando desde potter.js, las funciones que vamos creando acá, tomando desde la data general enviada por Laboratoria,
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


export function filterGender(dataPotter, condition) {
let characterHouse = dataPotter.filter(character => character.gender === condition);
return characterHouse;
}


export function filterSearch(dataPotter, condition) {

  const filterBy = (condition) => {
    const termLowerCase = condition.toLowerCase();
    return (character) =>
      Object.keys(character)
        .some(() => character.name.toLowerCase().indexOf(termLowerCase) !== -1)
  }

  let showCharacter = dataPotter.filter(filterBy(condition));
  return showCharacter;
  }

export function compare( a, b ) {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
}

