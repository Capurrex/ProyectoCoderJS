do{
    let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
       1 - Agregar libro
       2 - Borrar libro
       3 - Consultar catálogo
       4 - Ingresar notas alumnos
       0 - Salir del menu`))

    switch(opcionIngresada){
        case 1:
            console.log("Agregar libro")
        break
        case 2:
            console.log("Borrar libro")
        break
        case 3:
            console.log("Ver catalogo")
        break
        case 4:
            let respuesta
            do{
                let nombreIngresado = prompt("Ingrese el nombre del alumno/a")
                let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas que desea ingresar para " + nombreIngresado))
                //validar cantidad Notas isNaN
                //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/isNaN
                while(isNaN(cantidadNotas)){
                    cantidadNotas = parseInt(prompt("ATENCIÓN TIPO DE DATO INCORRECTO, Ingrese la cantidad de notas que desea ingresar para " + nombreIngresado))
                }
                let total = 0
                for(let i = 1; i <=cantidadNotas; i++){
                    //repetir mientras la condición del hasta se cumpla
                    let nota = parseInt(prompt(`Ingrese nota n° ${i}`))
                    //validar que sea dato number
                    while(isNaN(nota)){
                        nota = parseInt(prompt(`Atención tipo de dato incorrecto, ingrese un number. Ingrese nota n° ${i}`))
                    }
                    //validar que sea entre 0 y 10
                    if(nota >=0 && nota <=10){
                        total = total + nota
                        console.log(`El total parcial es ${total}`)
                    }else{
                        while(nota < 0 || nota > 10){
                            nota = parseInt(prompt(`Atención ingrese un valor entre 0 y 10 para la nota n°${i}`))
                        }
                        //nota vale entre 0 y 10
                        total = total + nota
                        console.log(`El total parcial es ${total}`)
                    }
                }
                let promedio = total / cantidadNotas
                //utilizar método que controle la cant de decimales a mostrar -- es para mostrar (no para calcular)
                console.log(`El promedio de ${nombreIngresado} es ${promedio.toFixed(2)}`)
                //a partir del promedio decirnos si está desaprobado (menor a 4); aprobado (igual o mayor a 4 y menor 7); promocionado (mayor a 7 y menor a 10) y nota de honor (10)
                //este condicional puede ser de varias 
                
                if(promedio == 10){
                    //instrucciones que se ejecutan cuando TRUE
                    console.log(`${nombreIngresado} usted tiene una nota de honor!`)
                }else if(promedio >= 7){
                    console.log(`${nombreIngresado} usted ha promocionado`)
                }else if(promedio >=4){
                    console.log(`${nombreIngresado} usted ha aprobado`)   
                }else{
                    console.log(`${nombreIngresado} usted ha desaprobado`)
                }
                respuesta = prompt("Responda si desea seguir ingresando alumnos. ESC para salir")

            }while(respuesta.toUpperCase() != "ESC")
        break
        case 0:
            console.log("gracias por utilizar nuestra app")
            salirMenu = true
        break
        default:
            console.log("Ingrese una opción correcta")
        break
    }
}while(!salirMenu)

//ejemplo con if -- else if -- else
 let precio = 35;
//Importante de IF anidados

if (precio < 20) {
     alert("El precio es menor que 20");
}
 else if (precio < 50) {
     alert("El precio es menor que 50");
 }
 else if (precio < 100) {
     alert("El precio es menor que 100");
 }
 else {
     alert("El precio es mayor que 100");
 }

 function pedirNumeros(){
    let num1 = parseInt(prompt("Ingrese el primer num"))
    let num2 = parseInt(prompt("Ingrese el segundo num"))
    // suma(num1,num2)
    let resultado = suma(num1,num2)
    let resultadoResta = resta(num1, num2)
    mostrarResultado(resultado)
    mostrarResultado(resultadoResta)
}
