function lasCalificaciones(nombre){

    let cantidadDeCalificaciones = parseInt(prompt(`¿Cuántas calificaciones tiene ${nombre}`));

    while(isNaN(cantidadDeCalificaciones)){
        cantidadDeCalificaciones = parseInt(prompt("Eso no es un número, por favor, introduce uno válido"));
    }
    let calificaciones = [];
    //Terminar bucle for
    for(i = 0; i < cantidadDeCalificaciones; i++){
        let califEval = parseFloat(prompt(`¿Cuánto sacó ${nombre} en su examen número ${i+1}`));
        while(isNaN(califEval) || califEval < 0 || califEval > 10){
            califEval = parseFloat(prompt("Lo siento, tienes que ingresar un número (no letras) entre el 0 y el 10 para continuar"));
        }
    calificaciones.push(califEval);

    }

    return calificaciones;

}

function elPromedio(calificaciones){
    let promedio = 0;
    
    for(let i = 0; i < calificaciones.length; i++){
        promedio += calificaciones[i];
    }

    promedio = promedio/calificaciones.length;
    return promedio;

}

function apruebaONo(promedio){
    let pruebaDeFuego = "";
    if(promedio >= 6){
        pruebaDeFuego = "Aprobado";
    } else if(promedio < 6){
        pruebaDeFuego = "Reprobado";
    } else{
        alert("Error en la decisión de aprobar");
    }
    return pruebaDeFuego;
}


function califDeMaterias(alumno, materias){

    let caDeMat = [];
    for(let i = 0; i < materias.length; i++){
        califn = parseFloat(prompt(`¿Cuánto sacó ${alumno} en ${materias[i]}`));
        while(isNaN(califn) || califn < 0 || califn > 10){
            califn = parseFloat(prompt("Lo siento, tienes que ingresar un número (no letras) entre el 0 y el 10 para continuar"));
        }
        caDeMat.push(califn)
    }

    return caDeMat;

}