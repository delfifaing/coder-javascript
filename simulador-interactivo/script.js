const preciosActividades = {
  'escalada': 200,
  "esquí": 150,
  'kayak': 100,
  'trekking': 50,
  'montañismo': 250,
  'cabalgata': 50
};

// Función para crear un array inicializado con el rango.
function range(start, end) {
  var out = [];
  for(let i=start; i<=end; i++) {
      out.push(i.toString()); 
  }
  return out;
}

const opcionesActividades = Object.keys(preciosActividades);
const opcionesDias = range(1, 10);
const opcionesPersonas = range(1,5);
const opcionesBooleanas = ['si', 'no'];
const opcionesEstrellas = range(3, 5);

// Clase para guardar todos los datos de una reserva
class Reserva {
    constructor(nombre, actividad, dias, personas, aeropuerto, transporte, hotel, estrellas) {
        this.nombre  = nombre;
        this.actividad  = actividad;
        this.dias = parseInt(dias);
        this.personas = parseInt(personas);
        this.aeropuerto = aeropuerto;
        this.transporte = transporte;
        this.hotel = hotel;
        this.estrellas = parseInt(estrellas);
        this.valorAeropuert = 0;
        this.valorTransporte = 0;
        this.precioTotal = 0;
        this.mail = null;
    }
    calcularPrecio(preciosActividades) {
        if(this.aeropuerto == 'si'){
            this.valorAeropuerto = 1;
            }
        if(this.transporte == 'si'){
            this.valorTransporte = 1;
            }
        return preciosActividades[this.actividad]*this.dias*this.personas + this.valorAeropuerto*50*this.personas + this.valorTransporte*50*this.dias*this.personas + 50*this.estrellas*this.dias*this.personas;
    }
}
// 

// Función para validar si la opción ingresada es correcta
let validar = function(opciones, opcion){
    var continuar = Boolean(false);
    while(continuar==false){
        // Incluir el caso de que sea string, pasar a lower, para que no sea sensitivo a la mayúscula 
        if(!opciones.includes(opcion)){
            opcion = prompt('No ofrecemos esa opción. Por favor ingrese una de las siguientes: ' + opciones.join(', '))
        } else {
            continuar = true;
        }
    } 
    return opcion;
}


// Intro
let nombre = prompt('Patagonicus ofrece experiencias únicas en la montaña, con profesionales capacitados para garantizar aventura y segurida. Por favor ingrese su nombre?')
while(nombre===""){
    nombre = prompt('Por favor ingrese un nombre válido.')
}
nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
alert(nombre + ' estás lista/o para una aventura? Respondé las siguientes preguntas y calcularemos el costo de su viaje.')


// Preguntas
let actividad = prompt('Elija entre una de las siguientes actividades: ' + opcionesActividades.join(', '))
actividad = validar(opcionesActividades, actividad)
console.log(actividad);
let dias = prompt('Cuántos días desea vivir en la montaña? Ingrese un número entre ' + opcionesDias[0] + ' y ' + opcionesDias[opcionesDias.length - 1])
dias = validar(opcionesDias, dias)
let personas = prompt('Cuántas personas serán? Ingrese un número entre ' + opcionesPersonas[0] + ' y ' + opcionesPersonas[opcionesPersonas.length - 1])
personas = validar(opcionesPersonas, personas)
let aeropuerto = prompt('Desea transporte desde el aeropuerto? si o no?')
aeropuerto = validar(opcionesBooleanas, aeropuerto)
let transporte = prompt('Desea transporte durante su estadía? si o no?')
transporte = validar(opcionesBooleanas, transporte)
let hotel = prompt('Desea que nosotros gestionemos la reserva de su hotel? si o no?')
hotel = validar(opcionesBooleanas, hotel)

let estrellas;
if(hotel == 'si'){
    estrellas = prompt('En qué categoría de hotel se desea hospedar. Elija la cantidad de estrellas: entre ' + opcionesEstrellas[0] + ' y ' + opcionesEstrellas[opcionesEstrellas.length - 1])
    estrellas = validar(opcionesEstrellas, estrellas)
}else{
    estrellas = '0';
}

reserva = new Reserva(nombre, actividad, dias, personas, aeropuerto, transporte, hotel, estrellas);
let precio = reserva.calcularPrecio(preciosActividades);
let mail = prompt(nombre + ' el precio estimado del servicio seleccionado es de ' + precio + 'usd. Por favor ingrese su mail para proseguir con su reserva.')

while(mail==="" || mail.indexOf('@') === -1 ){
    mail = prompt('Por favor ingrese un mail válido.')
}

reserva.mail = mail;
alert(reserva.nombre + ' los datos de su reserva son: \n Actividad: ' + reserva.actividad + '\n Duración: ' +
reserva.dias + '\n Nro de integrantes: ' + reserva.personas + '\n Translado aeropuerto: ' +
reserva.aeropuerto + '\n Transporte durante estadía: ' + reserva.transporte + 
'\n Reserva de hotel: ' + reserva.hotel + '\n Le hemos enviado un mail a '
 + reserva.mail + '. \n Gracias por elegirnos!')