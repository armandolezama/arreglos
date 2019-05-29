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
        console.log(`Felicidades! tu promedio es ${promedio}, tienes tu beca`)
    } else {
        console.log(`Lo siento, tu promedio es ${promedio}, no tendrás tu beca`)
    }

}



//Promedio obtenido


/*Joel quiere ver el porcentaje de veces que falto a clases, el programa recibirá un arreglo de 
asistencias para poder calcular el resultado, cada elemento esta representado por un valor booleano*/

function listaDeAsistencias(){

    let asistencias = [false,true,true,true,false]
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




