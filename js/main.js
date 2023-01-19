//funciones

function convertir(conversor, unidadIngresada, unidadDeseada) {
  let valorAConvertir;
  do {
    valorAConvertir = parseInt(
      prompt(
        `Ingrese la cantidad de ${unidadIngresada} que desea convertir a ${unidadDeseada}, solo puede ingresar numeros`
      )
    );
  } while (isNaN(valorAConvertir));
  let valorConvertido = conversor * valorAConvertir;
  alert(
    `${valorAConvertir} ${unidadIngresada} son ${valorConvertido} ${unidadDeseada}`
  );
}

class velas {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

//declaracion objetos y arrays

const vela1 = new velas ("Woolen ball", 150);
const vela2 = new velas ("Bubble", 350);
const vela3 = new velas ("Mini bubble", 100);
const vela4 = new velas ("Onion", 180);
const vela5 = new velas ("Luna llena", 550);
const vela6 = new velas ("Luna nueva", 450);
const vela7 = new velas ("Cuarto creciente", 350);
const vela8 = new velas ("Cuarto menguante", 300);
const vela9 = new velas ("Yue", 200);
const vela10 = new velas ("Lúa", 200);
const vela11 = new velas ("Bombones de cera X 5", 100);
const vela12 = new velas ("Hornito + bombones", 350);
console.log (vela1)
/*for( let i=0 ; i<=12; i++) {
  const grupoVelas = [vela(i)]
}*/

const grupoVelas = [vela1, vela2, vela3, vela4, vela5, vela6, vela7, vela8, vela9, vela10, vela11, vela12]

const aromas = ["Limon", "Lavanda", "Mango", "Vainilla", "Floral", "Jazmin", "Naranja", "Canela"]

//menu de conversion

let opcion = parseInt(
  prompt(`Ingrese el numero de la opcion deseada de las unidades que desea convertir:
      1. De gramos a onzas
      2. De onzas a gramos
      3. De millas a kilometros
      4. De kilometros a millas
      0. Salir `)
);

switch (opcion) {
  case 1:
    convertir(0.035, "gramos", "onzas");
    break;
  case 2:
    convertir(28.3, "onzas", "gramos");
    break;
  case 3:
    convertir(1.61, "millas", "kilometros");
    break;
  case 4:
    convertir(0.62, "kilometros", "millas");
    break;
  case 0:
    alert(`gracias por preferirnos`);
    break;
  default:
    alert(`Usted no a ingresado una opcion correcta`);
    break;
}

for (let pagoDescuento of grupoVelas.precio){
  console.log (`El precio seria $ ${pagoDescuento}`);
  pagoDescuento= pagoDescuento*0.8;
  console.log (`Pero con tu descuento te queda solo $ ${pagoDescuento} !!`);
}
