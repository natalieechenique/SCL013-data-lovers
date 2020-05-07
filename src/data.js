export function filterHouse(dataPotter, condition){
    let characterHouse = dataPotter.filter(character => character.house === condition);
    return characterHouse;
  }