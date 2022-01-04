// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let arr=[];
  for(key in objeto){
    arr.push([key,objeto[key]]);
  }
  return arr;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set
  //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  let unique=[...new Set(string)].sort(); //order list of unique values on the string
  function countTimes(letter,str){
    let count=0;
    for(let i=0;i<str.length;i++){
      if(str[i]==letter) count++;
    }
    return count;
  }
  let countarr= unique.map(letter=>{
    return countTimes(letter,string);
  });

  let obj={};
  for(let j=0;j<unique.length;j++){
    obj[unique[j]]=countarr[j];
  }
  return obj;

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let minus='';
  let mayus='';
  for(let i=0;i<s.length;i++){
    if(s[i]==s[i].toUpperCase()) mayus+=s[i];
    else{minus+=s[i]};
  }
  return mayus+minus
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let arr=str.split(' ');
  for(let i=0;i<arr.length;i++){
    let invStr='';
    for(let j=arr[i].length-1;j>=0;j--){
      invStr+=arr[i].charAt(j);
    }
    arr[i]=invStr;
  }
  return arr.join(' ');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let normal=numero.toString();
  let invert=numero.toString().split('').reverse().join('');
  return normal==invert ? "Es capicua" : "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let arr=cadena.split('');
  let str=[];
  for(let i=0;i<arr.length;i++){
    if(arr[i]!=='a' && arr[i]!=='b' && arr[i]!=='c') str.push(arr[i]);
  }
  return str.join('');
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  function compare(a,b){
    if(a.length<b.length) return -1;
    if(a.length>b.length) return 1;
    return 0;
  }
  return arr.sort(compare);
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  let arr=[];
  for(let i=0;i<arreglo1.length;i++){
    for(let j=0;j<arreglo2.length;j++){
      if(arreglo1[i]==arreglo2[j]) arr.push(arreglo1[i]);
    }
  }
  return arr; 
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

