//console.log("¡funciona!");
//comentario de una línea
/*comentario para
varias líneas
 */

const varTitulo = document.getElementById("titulo");
console.log(varTitulo);
const varTexto = document.getElementById("texto");

// [] esos corchetes son una lista, en las listas se leen los elementos desdde cero
const textos = ["Había una vez una chica de largo cabello llamada Rapunkzel", 
                "que vivía en una torre con su malvada madre.", 
                "Su madre era una persona complicada.",
                "Le gustaba tener control absoluto de su hija.",
                "Rapunkzel quería ir a un evento punk porque estaba muy aburrida.", 
                "Le dijo mentiras a su madre, pero ni por esas la dejó salir.",
                "¡Su madre se lo impedía todo siempre!", 
                "La encerró en su cuarto mientras estaba distraída :0",
                "Rapunkzel tenía tanta ira que se rapó la cabeza",
                "dejando en el piso su cabello de 20 metros.",
                "se dió cuenta de que tenía las puntas abiertas.",
                "Tiró por la ventana su cabello, pero se le olvidó amarrarlo.",
                "Tras quedarse pensando en la pendejada que acababa de hacer,",
                "tiró por la ventana un montón de sábanas amarradas,",
                "saltó por la ventana y comenzó a bajar por la pared.",
                "Cuando llegó al piso comenzó a correr hacia el pueblo.",
                "Se cansó muy rápido porque era mediodía y el sol estaba ardiendo.",
                "Rapunkzel olvidó ponerse bloqueador en la calva y se quemó.",
                "Cuando llegó al evento de punk, parecía un tomate.",
                "Rapunkzel aprendió que los calvos no la tienen tan fácil como pensaba,",
                "y que los eventos de punk no eran lo suyo.",
                "FIN"];
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
//    if(iTxt >= 5){
//       iTxt = 0
    if(iTxt >= textos.length){ //devuelve al inicio sin importar el número de elementos en la lista
        iTxt = 0
    }

});