function convertir (numero, conversor, unidadIngresada, unidadPedida){
    let numero = prompt( `Ingrese cuantos $[unidadIngresada] desea transformar a $[unidadPedida]`)
    let resultado= ("numero*conversor")
    alert=(`$[numero] $[unidadIngresada] son $[resultado] [unidadPedida]`)
}
convertir(numero, 28.35, Onzas, gramos)