const preciosActividades = {
  'escalada': 200,
  "esquí": 150,
  'kayak': 100,
  'trekking': 50,
  'montañismo': 250,
  'cabalgata': 50
};
const opcionesActividades = Object.keys(preciosActividades);
const opcionesDias = range(1, 10);
const opcionesPersonas = range(1,5);
const opcionesBooleanas = ['si', 'no'];
const opcionesEstrellas = range(3, 5);

// Función para crear un array inicializado con el rango.
function range(start, end) {
  var out = [];
  for(let i=start; i<=end; i++) {
      out.push(i.toString()); 
  }
  return out;
}

// Función para validar si la opción ingresada es correcta
let validar = function(opciones, opcion){
    var continuar = Boolean(false);
    console.log(continuar);
    while(continuar==false){
        if(!opciones.includes(opcion)){
            opcion = prompt('No ofrecemos esa opción. Por favor ingrese una de las siguientes: ' + opciones)
        } else {
            continuar = true;
        }
    } 
    return opcion;
}

// Fórmula para calcular el precio 

function calcularPrecio(actividad, dias, personas, aeropuerto, transporte, estrellas){
    let valorAeropuerto;
    let valorTransporte;
    if(aeropuerto == 'si'){
        valorAeropuerto = 1;
    }else{
        valorAeropuerto = 0;
    }
    if(transporte == 'si'){
        valorTransporte = 1;
    }else{
        valorTransporte = 0;
    }
    let precioTotal = preciosActividades[actividad]*parseInt(dias)*parseInt(personas) + valorAeropuerto*50*parseInt(personas) + valorTransporte*50*parseInt(dias)*parseInt(personas) + 50*parseInt(estrellas)*parseInt(dias)*parseInt(personas);
    return precioTotal;
}

// Intro
let nombre = prompt('Patagonicus ofrece experiencias únicas en la montaña, con profesionales capacitados para garantizar aventura y segurida. Por favor ingrese su nombre?')
while(nombre===""){
    nombre = prompt('Por favor ingrese un nombre válido.')
}
alert(nombre + ' estás lista/o para una aventura? Respondé las siguientes preguntas y calcularemos el costo de su viaje.')

// Preguntas
let actividad = prompt('Elija entre una de las siguientes actividades: ' + opcionesActividades)
actividad = validar(opcionesActividades, actividad)
let dias = prompt('Cuántos días desea vivir en la montaña? Ingrese un número entre ' + opcionesDias[0] + 'y' + opcionesDias[opcionesDias.length - 1])
dias = validar(opcionesDias, dias)
let personas = prompt('Cuántas personas serán? Ingrese un número entre ' + opcionesPersonas[0] + 'y' + opcionesPersonas[opcionesPersonas.length - 1])
personas = validar(opcionesPersonas, personas)
let aeropuerto = prompt('Desea transporte desde el aeropuerto? si o no?')
aeropuerto = validar(opcionesBooleanas, aeropuerto)
let transporte = prompt('Desea transporte durante su estadía? si o no?')
transporte = validar(opcionesBooleanas, transporte)
let hotel = prompt('Desea que nosotros gestionemos la reserva de su hotel? si o no?')
hotel = validar(opcionesBooleanas, hotel)

let estrellas;
if(hotel == 'si'){
    estrellas = prompt('En qué categoría de hotel se desea hospedar. Elija la cantidad de estrellas: entre ' + opcionesEstrellas[0] + 'y' + opcionesEstrellas[opcionesEstrellas.length - 1])
    estrellas = validar(opcionesEstrellas, estrellas)
}else{
    estrellas = '0';
}

let precio = calcularPrecio(actividad, dias, personas, aeropuerto, transporte, estrellas);
let mail = prompt(nombre + ' el precio estimado del servicio seleccionado es de ' + precio + 'usd. Por favor ingrese su mail para proseguir con su reserva.')

while(mail===""){
    mail = prompt('Por favor ingrese un mail válido.')
}
alert('Le hemos enviado un mail a ' + mail + '.Gracias por elegirnos!')