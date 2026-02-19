//console.log("¡funciona!");
//comentario de una línea
/*comentario para
varias líneas
 */

const varTitulo = document.getElementById("titulo");
console.log(titulo);
const varTexto = document.getElementById("texto");

// [] esos corchetes son una lista, en las listas se leen los elementos desdde cero
const textos = ["uno", "dos", "tres", "cuatro", "cinco"];
console.log(textos[0]);
let textoInicial = true; // variable de tipo booleano: true or false
let iTxt = 0;

varTitulo.addEventListener("click", ()=> {
    //el punto es algo que le pertenece a esa variable
   
    //console.log("hiciste click");
    //alert("hiciste click")
    if(textoInicial === true){
        varTitulo.innerText = "y quemada";
       // textoInicial = false;
    } else {
        varTitulo.innerText = "Rapunkzel calva";
      //  textoInicial = true
    }
    textoInicial = !textoInicial;
});

varTexto.addEventListener("click", ()=> {
    varTexto.innerText = textos[iTxt]
    iTxt += 1; // iTxt = iTxt + 1

});