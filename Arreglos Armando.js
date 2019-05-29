/*A Daniel le acaban de mandar una lista con sus calificaciones, quiere saber si su promedio es suficiente 
para tener una beca este año, el promedio mínimo que necesita es 8, el programa recibirá un arreglo de 
calificaciones para poder calcular el resultado*/

function promedio(){
    let calificaciones = [8,8,8,8,8,8,8,8];
    let promedio = 0;

    for(let i = 0; i < calificaciones.length; i++){
        promedio += calificaciones[i];
    }

    promedio = promedio/calificaciones.length
    if(promedio >= 8){
        console.log(`Felicidades! tu promedio es ${promedio}, tienes tu beca`);
    } else {
        console.log(`Lo siento, tu promedio es ${promedio}, no tendrás tu beca`);
    }

}



//Promedio obtenido


/*Joel quiere ver el porcentaje de veces que falto a clases, el programa recibirá un arreglo de 
asistencias para poder calcular el resultado, cada elemento esta representado por un valor booleano*/

function listaDeAsistencias(){

    let cantidadDeAsistencias = parseInt(prompt("¿Cuántos días fuiste a la escuela?"))
    while(isNaN(cantidadDeAsistencias)){
        cantidadDeAsistencias = parseInt(prompt("Indica con números la cantidad de días que fuiste a la escuela"))
    }
    let asistencias = [];

    for(i = 0; i < cantidadDeAsistencias; i++){
        let asistEval = prompt(`El día número ${(i + 1)} ¿fuiste a la escuela? escribe "Sí" o "No"`).toLowerCase;
        while(asistEval != "si" && asistEval != "sí" && asistEval != "no"){
            asistEval = parseInt(prompt("Lo siento, por ahora sólo entiendo el si o el no"))
        }
        if(asistEval == "si" || asistEval == "Sí"){
            asistencias.push(true)
        } else if(asistEval == "no"){
            asistencias.push(false)
        } else {
            alert("Algo salió mal reconociendo el texto")
        }

    }

    let asististe = 0;
    let faltas = 0;

    for(i = 0; i < asistencias.length; i++){
        if(asistencias[i] == true){
            asististe += 1;
        } else {
            faltas += 1;
        };
    };
    console.log(`Tu porcentaje de asistencias es ${(asististe/asistencias.length)*100}, 
    y tu porcentaje de faltas es ${(faltas/asistencias.length)*100}`)

}

/*Paco no estudió mucho para sus últimos exámenes, quiere saber cuántos exámenes tendrá que realizar de nuevo,
el programa recibirá un arreglo de calificaciones para poder calcular el resultado*/

function examenes(){
    
    let cantidadDeExamenes = parseInt(prompt("¿Cuántos exámenes hiciste?"));
    
    while(isNaN(cantidadDeExamenes)){
        cantidadDeExamenes = parseInt(prompt("Tienes que ingresar un número para indicar una cantidad de exámenes"));
    }    
    let examenes = [];
    let reprobados  = 0;
    let aprobados = 0;
    for(i = 0; i < cantidadDeExamenes; i++){
        let califEval = parseInt(prompt(`¿Cuánto sacaste en tu examen número ${(i + 1)}`))
        while(isNaN(califEval) || califEval < 0 || califEval > 10){
            califEval = parseInt(prompt("Lo siento, tienes que ingresar un número (no letras) entre el 0 y el 10 para continuar"))
        }
        examenes.push(califEval)
    }
    
    for(i = 0; i < examenes.length; i++){
        if(examenes[i] < 6){
            reprobados += 1;
        } else {
            aprobados += 1;
        }
    }
    
    console.log(`Los exámenes que aprobaste son ${aprobados} y los que reprobaste son ${reprobados}`)
}



