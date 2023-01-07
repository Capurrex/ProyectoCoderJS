function convertir (conversor, unidadIngresada, unidadDeseada)
{
   let valorAConvertir = parseInt(prompt(`ingrese la cantidad de ${unidadIngresada} que desea convertir a ${unidadDeseada}`))
   let valorConvertido= (conversor * valorAConvertir)
   alert (`${valorAConvertir} ${unidadIngresada} son ${valorConvertido} ${unidadDeseada}`)
}
convertir(10, "metros", "decimetros")


