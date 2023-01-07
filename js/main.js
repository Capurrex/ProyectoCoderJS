function convertir (conversor, unidadIngresada, unidadDeseada)
{
   do {
      let valorAConvertir = parseInt(prompt(`Ingrese la cantidad de ${unidadIngresada} que desea convertir a ${unidadDeseada}`))
   while(isNaN(valorAConvertir)){
      let valorAConvertir = parseInt(prompt(`Atencion, ingrese un numero para  la cantidad de ${unidadIngresada} que desea convertir a ${unidadDeseada}`))
   }
   let valorConvertido= (conversor * valorAConvertir)
   alert (`${valorAConvertir} ${unidadIngresada} son ${valorConvertido} ${unidadDeseada}`)
}
convertir(10, "metros", "decimetros")


