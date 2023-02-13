//constructora
class velas {
  constructor(id,nombre, precio, imagen, imgAlt, descripcion) {
    this.id = id,
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.imgAlt = imgAlt;
    this.descripcion=descripcion;
  }
}

//capturas nodos 
let verCatalogo = document.getElementById("verCatalogo")
let match = document.getElementById("match")
let chartModal = document.getElementById("chartModal")

//funciones

const Catalogo = async ()=> {
  const response = await fetch("velas.json")
  const data =await response.json()
  for(let candle of data){
    let newCandle = new velas (candle.id,candle.nombre,candle.precio,candle.imagen,candle.imagenAlt,candle.descripcion )
     grupoVelas.push(newCandle)
}}

function mostrarCatalogo(arrVela){
  Catalogo()
  verCatalogo.innerHTML = "" 
  console.log(arrVela)
  console.log(arrVela.length)
  for(let vela of arrVela){
      let nuevaVela = document.createElement("div")
      nuevaVela.classList.add ("col-xl-2","col-md-3", "col-6","row")
      nuevaVela.innerHTML = ` <div id="${vela.id}" class="card row">
        <img src="${vela.imagen}" class="card-img-top" alt="${vela.imgAlt}" />
        <div class="card-body">
          <h5 class="card-title">${vela.nombre}</h5>
          <p class="card-text">
            ${vela.descripcion}. Precio: $ ${vela.precio}
          </p>
          <a  id ="carritov${vela.id}" class="btn">Agregar al carrito</a>
          <div class="row">
            <ul class="mitad">
              <select
                id="selectAroma"
                class="form-select form-select-sm"
                aria-label=".form-select-sm example">
                  <option selected>Elije el aroma</option>
                  <option value="li">Limón</option>
                  <option value="la">Lavanda</option>
                  <option value="ma">Mango</option>
                  <option value="va">Vainilla</option>
                  <option value="fl">Floral</option>
                  <option value="ja">Jazmin</option>
                  <option value="na">Naranja</option>
                  <option value="ca">Canela</option>
              </select>
            </ul>
            <ul class="mitad">
              <select
                id="selectColor"
                class="form-select form-select-sm"
                aria-label=".form-select-sm example">
                  <option selected>Elije el color</option>
                  <option value="roc">Rosa</option>
                  <option value="vec">Verde</option>
                  <option value="azc">Azul</option>
                  <option value="amc">Amarillo</option>
                  <option value="grc">Gris</option>
                  <option value="bec">Beige</option>
                  <option value="nac">Naranja</option>
                  <option value="blc">Blanco</option>
                  <option value="vic">Violeta</option>
              </select>
            </ul>
          </div>
        </div>
    </div>`

     verCatalogo.appendChild(nuevaVela)

     let botonCarrito = document.getElementById(`carritov${vela.id}`)
         
        botonCarrito.addEventListener("click", ()=>{addChart(vela)})


  }}


function addChart (vela) {
  chartItems.push(vela)
  localStorage.setItem("chart", JSON.stringify(chartItems))
}

function showChart(array){

  for(let item of array){
      let newItem = document.createElement("div")

      newItem.innerHTML = `<div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${item.imagen}" class="img-fluid rounded-start imgSizeAdjust" alt="${item.imgAlt}">
        </div>
        <div class="col-md-8 text-center hstack">
          <div class="card-body align-evenly">
            <h5 class="card-title">${item.nombre}</h5>
            <p class="card-text">${item.descripcion} <br> Color:$colo{}  Aroma:$aroma{}  Precio: $ ${item.precio  } </p>
            <a id="removeCh${item.id}" class="btn btn-danger">Eliminar</a>
          </div>
        </div>
      </div>
    </div>`
     chartModal.appendChild(newItem)
    }}



//instanciacion

let grupoVelas =[]

let chartItems = JSON.parse(localStorage.getItem("chart")) || []

// eventos



mostrarCatalogo(grupoVelas)

showChart(chartItems)

//console.log(grupoVelas)