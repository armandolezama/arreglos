function lasCalificaciones(){

    let cantidadDeCalificaciones = parseInt(prompt("¿Cuántas calificaciones tienes?"))

    while(isNaN(cantidadDeCalificaciones)){
        cantidadDeCalificaciones = parseInt(prompt("Eso no es un número, por favor, introduce uno válido"))
    }
    let calificaciones = [];
    //Terminar bucle for
    for(i = 0; i < cantidadDeCalificaciones; i++){
        let califEval = parseFloat(prompt(`¿Cuánto sacaste en tu examen número ${i+1}`))
        while(isNaN(califEval) || califEval < 0 || califEval > 10){
            califEval = parseFloat(prompt("Lo siento, tienes que ingresar un número (no letras) entre el 0 y el 10 para continuar"))
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

    promedio = promedio/calificaciones.length
    if(promedio >= 8){
        console.log(`Felicidades! tu promedio es ${promedio}, tienes tu beca`);
    } else {
        console.log(`Lo siento, tu promedio es ${promedio}, no tendrás tu beca`);
    }

}

