const colores = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#FFFF33"];
let indice = 0;

function cambiarFondo() {
   document.body.style.backgroundColor = colores[indice];
   indice = (indice + 1) % colores.length; //formula recursiva indice mas 1 modulo del tamaño del vector colores
   setTimeout(cambiarFondo, 1500);
} 

cambiarFondo();