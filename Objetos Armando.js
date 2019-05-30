/*Joel tiene que informar a sus alumnos quienes tienen que repetir curso, el tiene una lista de alumnos, 
cada alumno tiene un nombre y una lista de calificaciones que se tienen que promediar para saber si el alumno
 está aprobado, el promedio mínimo para aprobar es 6. Haz un algoritmo que escriba el nombre de los alumnos 
 que no aprobaron.*/
/*<button onclick="function()">name of button</button>*/ 

/*
function alumnos() {
    let alumnos = [{
        nombre: prompt("¿Cómo se llama tu alumno"),
        calificaciones: lasCalificaciones(this.nombre),
       // promedio: elPromedio(this.calificaciones)
    }]

    console.log(alumnos);}*/
function alumnos(){
    let alumnos = []
   
    let cantidadDeAlumnos = parseInt(prompt("¿Cuántos alumnos tienes?"));
 
    while(isNaN(cantidadDeAlumnos)){
        cantidadDeAlumnos = parseInt(prompt("Lo siento, necesitas insertar un número para indicar la cantidad de alumnos"))
    }
    
    for(let i = 0; i < cantidadDeAlumnos; i++){
 
         let estudiante = {};
         let nombre =  prompt(`¿Cómo se llama tu alumno número ${i+1}`);
         let evaluaciones = lasCalificaciones(nombre);
         let mean = elPromedio(evaluaciones);
         let info = apruebaONo(mean);
 
         estudiante.nombre = nombre;
         estudiante.calificaciones = evaluaciones;
         estudiante.promedio = mean;
         estudiante.estatus = info;
 
        alumnos.push(estudiante)
    }
    
    let reprobados = [];

    for(let i = 0; i < alumnos.length; i++){
        if(alumnos[i].estatus == "Reprobado"){
            reprobados.push(alumnos[i].nombre)
        }
    }

    if (reprobados.length>0){
        console.log(reprobados)
    } else {
        console.log("Ningún alumno reprobado")
    }
    console.log(alumnos);

}
