//funciones

function convertir (conversor, unidadIngresada, unidadDeseada)
{ let valorAConvertir
   do {
      valorAConvertir = parseInt(prompt(`Ingrese la cantidad de ${unidadIngresada} que desea convertir a ${unidadDeseada}, solo puede ingresar numeros`))}
      while(isNaN(valorAConvertir));
   let valorConvertido= (conversor * valorAConvertir)
   alert (`${valorAConvertir} ${unidadIngresada} son ${valorConvertido} ${unidadDeseada}`)}

   //menu de conversion

let opcion = parseInt(prompt(`Ingrese que unidades desea convertir:
      1. De gramos a onzas
      2. De onzas a gramos
      3. De millas a kilometros
      4. De kilometros a millas
      0. Salir `))

switch(opcion){
    case 1:
      convertir(0.035, "gramos", "onzas")   
    break
    case 2:
      convertir(28.3, "onzas", "gramos")
    break
    case 3:
      convertir(1.61, "millas", "kilometros")   
    break
    case 4:
      convertir(0.62, "kilometros", "millas")     
    break    
    case 0:
      alert(`gracias por preferirnos`)
    break
    default:
      alert(`Usted no a ingresado una opcion correcta`)
    break
}