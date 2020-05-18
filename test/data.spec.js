import {
  filterHouse,
  filterhogwartsStaff,
  filterGender,
  filterSearch,
  compare,
} from '../src/data.js';

/*test filtrar por casa */
const dataHouse=[{
  'name': 'Harry Potter',
  'house': 'Gryffindor',
}]
describe('filterHouse', () => {
  test('is a function', () => {
    expect(typeof filterHouse).toBe('function');
  });
test('should return "Gryffindor" for filter "house"',() => {
  expect(filterHouse(dataHouse,'Gryffindor')).toEqual([{
    'name': 'Harry Potter',
    'house': 'Gryffindor',
  }
  ]);
});
});
/* test filtrar por género*/
const dataGender=[{
  'name': 'Hermione Granger',
  'gender': 'Femenino',
}]
describe('filterGender', () => {
  test('is a function', () => {
    expect(typeof filterGender).toBe('function');
  });
test('should return "Femenino" for filter "gender"',() => {
  expect(filterGender(dataGender,'Femenino')).toEqual([{
    'name': 'Hermione Granger',
    'gender': 'Femenino',
  }
  ]);
});
});
/* TEST PARA EL FILTRO BUSCAR*/
const dataSearch=[{
  'name': 'Ron Weasley',
}]
describe('filterSearch', () => {
  test('is a function', () => {
    expect(typeof filterSearch).toBe('function');
  });
test('should return "Ron Weasley" for filter "name"',() => {
  expect(filterSearch(dataSearch,'Ron Weasley')).toEqual([{
    'name': 'Ron Weasley',
  }
  ]);
});
});
/* test para ordenar de A_Z y Z_A*/

describe("Sort by name function", () => {
  test("Should return sorted array by name", () => {
    let sortingData = [
      {name: "Harry Potter"},
      {name: "Cedric Diggory"},
      {name: "Neville Longbottom"},
      {name: "Luna Lovegood"}
    ];
    expect(sortingData.sort(compare)).toEqual([
      {name: "Cedric Diggory"},
      {name: "Harry Potter"},
      {name: "Luna Lovegood"},
      {name: "Neville Longbottom"}
  ]);
});
});
/*test filtrar por hogwarts*/
const dataHogwarts=[{
  hogwartsStudent: true,
  hogwartsStaff: false,
  name: 'Hermione Granger'
},{name: 'Minerva McGonagall',
  hogwartsStudent: false,
  hogwartsStaff: true}]
describe('filterhogwartsStaff', () => {
  test('is a function', () => {
    expect(typeof filterhogwartsStaff).toBe('function');
  });
test('should return "true" for filter "hogwartsStaff"', () => {
  expect(filterhogwartsStaff(dataHogwarts)).toEqual([{
    name: 'Minerva McGonagall',
    hogwartsStudent: false ,
    hogwartsStaff: true
  }]
);
  });
});



