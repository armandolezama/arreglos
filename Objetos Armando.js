/*Joel tiene que informar a sus alumnos quienes tienen que repetir curso, el tiene una lista de alumnos, 
cada alumno tiene un nombre y una lista de calificaciones que se tienen que promediar para saber si el alumno
 está aprobado, el promedio mínimo para aprobar es 6. Haz un algoritmo que escriba el nombre de los alumnos 
 que no aprobaron.*/
/*<button onclick="function()">name of button</button>*/ 


function alumnos(){
    let alumnos = []
   
    let cantidadDeAlumnos = parseInt(prompt("¿Cuántos alumnos tienes?"));

    let reprobados = [];

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
    
    for(let i = 0; i < alumnos.length; i++){
        if(alumnos[i].estatus == "Reprobado"){
            reprobados.push(alumnos[i].nombre)
        }
    }

    if (reprobados.length>0){
        console.log("Los alumnos que reprobaron fueron " + reprobados)
    } else {
        console.log("Ningún alumno reprobado")
    }
    console.log(alumnos);

}

function joelCalif() {
    
    let alumnos = []
   
    let cantidadDeAlumnos = parseInt(prompt("¿Cuántos alumnos tienes?"));
 
    while(isNaN(cantidadDeAlumnos)){
        cantidadDeAlumnos = parseInt(prompt("Lo siento, necesitas insertar un número para indicar la cantidad de alumnos"));
    }

    let cantidadMaterias = parseInt(prompt("¿Cuántas materias impartes?"));

    while(isNaN(cantidadMaterias)){
        cantidadMaterias = parseInt(prompt("Número inválido, por favor, indica tu cantidad de materias usando números."));
    }

    let todasLasMaterias = [];

    for(let i = 0; i < cantidadMaterias; i++){
        todasLasMaterias.push(prompt(`¿Cómo se llama la materia número ${i + 1}`));
    }

    for(let i = 0; i < cantidadDeAlumnos; i++){
 
        let estudiante = {};
        let nombre =  prompt(`¿Cómo se llama tu alumno número ${i+1}`);
        let evaluaciones = califDeMaterias(nombre, todasLasMaterias);
        let esCalif = [];

        for(let cont = 0;cont < todasLasMaterias.length; cont++ ){
            esCalif.push(todasLasMaterias[cont], [evaluaciones[cont]])
        }

        estudiante.nombre = nombre;
        estudiante.calificaciones = esCalif;

       alumnos.push(estudiante)
   }


   console.log(alumnos)

}