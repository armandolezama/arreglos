/* 
Ejercicio - Promedio
A Daniel le acaban de mandar una lista con sus calificaciones, quiere saber si su promedio es 
suficiente para tener una beca este año, el promedio mínimo que necesita es 8, 
el programa recibirá un arreglo de calificaciones para poder calcular el resultado

Ejercicio - Asistencia
Joel quiere ver el porcentaje de veces que falto a clases, el programa recibirá un arreglo de 
asistencias para poder calcular el resultado, cada elemento esta representado por un valor booleano

Ejercicio - Examenes aprobados
Paco no estudió mucho para sus últimos exámenes, quiere saber cuántos exámenes tendrá que 
realizar de nuevo, el programa recibirá un arreglo de calificaciones para poder calcular el resultado
*/

function promedioCalificaciones() {
    let calificaciones = [6, 8, 7, 8, 9, 10];
    let sumaCalificaciones = 0;

    for (i = 0; i < calificaciones.length; i++) {

        sumaCalificaciones = sumaCalificaciones + calificaciones[i];

        document.write("Tus Calificaciones " + calificaciones[i] + "</br>");

        var promedio = sumaCalificaciones / calificaciones.length;
    };

    if (promedio >= 8) {

        document.write("Felicidades aprobaste con promedio de: " + promedio);
    } else {
        document.write("Que mal no aprobaste por tener promedio de " + promedio);
    }
}

function ejercicioAsistencia() {
    let asistencias = [true, false, true, false, true, true, true, true, false, false, false, false];
    let asistenciasMas = 0;
    let asistenciasMenos = 0;

    for (i = 0; i < asistencias.length; i++) {

        if (asistencias[i] == true) {
            asistenciasMas = asistenciasMas + 1;

        } else {
            asistenciasMenos = asistenciasMenos + 1;

        }

        var porcentajeAsistencia = (asistenciasMas * asistencias.length) / 100;
    }
    document.write("Estas son tus asistencias totales " + asistenciasMas + " Faltaste " + asistenciasMenos + "</br>");

    document.write("Porcentaje de asistencia " + porcentajeAsistencia)
}

function ejercicioExamenes(){
    let examenes = [5, 5, 7, 8, 6, 7, 8, 9];
    let examenesReprobados = 0;

        for(i=0; i < examenes.length; i++){

            if(examenes[i] <= 5){

                examenesReprobados = examenesReprobados +1;
            }


        }
        document.write("Tendras que hacer "+examenesReprobados+" examenes nuevamente");
}