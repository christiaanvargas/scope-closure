// definici´pon de variables

var a;  // declaradación
var b = 'b';  // declaración / asiganción
 b = 'bb' // reasignación
 var a = 'aa'  // redeclaración


 // global Scope
 var fruit = 'apple'; // global
 console.log(fruit)

 function bestFruit() {
    console.log(fruit);
 }

 bestFruit();


 function countries() {
    country = 'Colombia'; // al ser asignada una variable dentro de una función sin  ser declarada; esta se convierte en global.
    console.log(country);
 }

 countries();
 console.log(country);