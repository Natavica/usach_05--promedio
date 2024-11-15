// Crear las funciones en JS que sean necesarias para:

// Obtener el promedio de notas de un alumno considerando que la suma de notas debe ser el retorno de una función y el promedio el retorno de otra función. Las notas son: 6,8,9,2,5,10.

//Para obtener el promedio debo saber cuantas son las notas, sumarlas y dividir por la cantidad de calificaciones.



function CalcularPromedio(){
    const v1 = document.getElementById("n1").value;
    const v2 = document.getElementById("n2").value;
    const v3 = document.getElementById("n3").value;
    const v4 = document.getElementById("n4").value;
    const v5 = document.getElementById("n5").value;
    const v6 = document.getElementById("n6").value;
    const pro = (parseFloat(v1)+parseFloat(v2)+parseFloat(v3)+parseFloat(v4)+parseFloat(v5)+parseFloat(v6))/3;
    document.getElementById("promedio").innerHTML = pro;
}