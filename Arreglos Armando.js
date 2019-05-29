/*A Daniel le acaban de mandar una lista con sus calificaciones, quiere saber si su promedio es suficiente 
para tener una beca este año, el promedio mínimo que necesita es 8, el programa recibirá un arreglo de 
calificaciones para poder calcular el resultado*/

let calificaciones = [8,8,8,8,8,8,8,8];
let promedio = 0;

for(let i = 0; i < calificaciones.length; i++){
    promedio += calificaciones[i];
}

promedio = promedio/calificaciones.length

//Promedio obtenido


