
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


// Creamos funcion filterSearch para buscar, const 'filterBy' para buscar por name y finalmente la const termLowerCase,
// que llevara la funcion de mostrar la data aunque no empiece con mayuscula (distinta a la data original) desde la posición -1 que abarcará desde la 0 en adelante
//.indexOf es el que devuelve el indice dentro del string
//Luego se crea la const showCharacter que es como characterHouse
//'object.keys' devuelve la matriz ('name') de las claves de un objeto, propiedades enumerables que se encuentran directamente en el objeto
//'.some' comprueba si al menos un elemento cumple las condiciones dadas por la funcion implementada
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


 // Creamos funcion a-z (que estara por defecto declarada en main.js)
 //con parámetros a y b
 //Si el primer parámetro 'a' es menor que el segundo 'b', devuelve desde la posición -1 en adelante (A-Z)
 //Si el primer parámetro es mayor que el segundo, devuelve desde la posición 1 en adelante (Z-A)
 //Devuelve valor 0 si son iguales
export function compare( a, b ) {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
}

// El propósito de la función de comparación es definir un orden de clasificación alternativo.
// Cuando la función sort () compara dos valores, envía los valores a la función de comparación y clasifica los valores
//  de acuerdo con el valor devuelto (negativo, cero, positivo). Si el resultado es negativo, a se ordena antes que b.

// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos

// El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada
// Un nuevo array con los elementos que cumplen la condición. Si ningún elemento cumple la condición, se devolverá un array vacío

// El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor



// Una expresión es cualquier unidad de código que se resuelve en un valor.
// Los dos ejemplos más comunes de expresiones que nos vamos a encontrar son los siguientes:
// Expresiones aritméticas: Una expresión que evalúa un número. El código  1 + 2  es una expresión que se resuelve con el valor 3
// Expresiones lógicas o booleanas: Una expresión que evalúa si algo es verdadero o falso. Por ejemplo  1 > 2  se resuelve con el valor false
// if (n > 3) {
//   n = 0;
// }
// o
// for (var i=0; i<5; i++) {
  // Ejecuta este bloque de código


// Una declaración o sentencia es una instrucción que define una acción.
// Las declaraciones  if  y  else  , o los bucle  for  o  while  evalúan la expresión que se encuentra entre paréntesis y, si esta es verdadera, se ejecuta el código que contienen. La declaración en sí misma no retorna ningún valor.
// Cuando se declara una función, JavaScript evalúa la función y la guarda en memoria, pero no ejecuta la función hasta que se invoca.
// En JavaScript existen dos formas de crear una función:  como la que hemos visto anteriormente, declarando la función, o mediante una expresión:



// función en forma de declaración

// function sumarNumeros(num1, num2) {
//   return num1 + num2;
// }
// En este caso, JavaScript toma esta función y la guarda en memoria. De momento no realiza ninguna otra acción con ella. La función  sumarNumeros  realiza una acción, crea una función que puede ser invocada más adelante, pero no se resuelve en un valor concreto.


// función en forma de expresión

// var sumar = function(num1, num2) {
//   return num1 + num2;
// }
// En cambio, a la variable  sumar  se le asigna como valor una función, del mismo modo que podríamos haberle asignado un número o una cadena de caracteres. Hemos dicho anteriormente, que una expresión se resuelve siempre en un valor: en este caso  el valor es la función en sí misma.

// Estamos creando una función "al vuelo" o "sobre la marcha". que se evalúa y se asigna a la variable  sumar , sin tener que declararla primero.




// Objetos
// En la ciencia de la computación un objeto es un valor en memoria al cual es posible referirse mediante un  identificador.

// Propiedades
// En JavaScript los objetos pueden ser vistos como una colección de propiedades. Con la sintáxis literal de objetos, un limitado grupo de propiedades son inicializadas;
// luego pueden ser agregadas o eliminadas otras propiedades. Los valores de las propiedades pueden ser de cualquier tipo, incluyendo otros objetos lo cual permite construir estructuras de datos complejas.
//  Las propiedades se identifican usando claves. Una clave es un valor String o Symbol.
// Existen dos tipos de propiedades de objetos las cuales tienen ciertos atributos: La propiedad de datos y la propiedad de acceso.

// Parámetros
// callback Función que producirá un elemento del nuevo array, recibe tres argumentos:
// currentValue El elemento actual del array que se está procesando.
// index El índice del elemento actual dentro del array.
// array El array sobre el que se llama map.
// thisArg Opcional. Valor a usar como this al ejecutar callback.
