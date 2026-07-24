let habitaciones = [];

function tiempoDeEspera(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function menu() {
  let opcion = prompt(
    "************** Hotel Santa Ana **************\n" +
      "1. Registrar una nueva habitación\n" +
      "2. Listar Habitaciones\n" +
      "3. Buscar habitación por número\n" +
      "4. Cambiar estado de habitación\n" +
      "5. Eliminar habitación\n" +
      "6. Salir"
  );

  switch (opcion) {
    case "1":
      await registrar();
      break;
    case "2":
      listar();
      break;
    case "3":
      await buscar();
      break;
    case "4":
      await actualizar();
      break;
    case "5":
      eliminar();
      break;
    case "6":
      console.log("Saliendo del sistema");
      return;
    default:
      console.log("Opción no válida!");
  }

  menu();
}

async function registrar() {
  let numero = parseInt(prompt("Número de habitación:"));
  let tipo = prompt("Tipo de habitación (sencilla, doble, suite):");
  let precioNoche = parseFloat(prompt("Precio por noche:"));
  let estado = prompt("Estado de la habitación (ocupada, libre, limpieza):");
  let huesped = prompt("Nombre del huésped:");

  let habitacion = {
    numero: numero,
    tipo: tipo,
    precioNoche: precioNoche,
    estado: estado,
    huesped: huesped,
  };

  console.log("Validando información de la habitación...");

  await tiempoDeEspera(2000);

  habitaciones.push(habitacion);
  console.log("Habitación " + numero + " registrada correctamente.");
}

function listar() {
  console.log("************** Registro de habitaciones **************");

  habitaciones.forEach((habitacion) => {
    console.log(
      `Número: ${habitacion.numero} | Tipo: ${habitacion.tipo} | Precio por noche: ${habitacion.precioNoche} | Estado: ${habitacion.estado} | Huésped: ${habitacion.huesped}`
    );
  });
}

async function buscar() {
  let numero = prompt("Número de la habitación a buscar:");

  console.log("Consultando base de datos del Hotel Santa Ana ......");

  await tiempoDeEspera(3000);

  let habitacionBuscada = habitaciones.find((habitacion) => {
    return habitacion.numero == numero;
  });

  if (habitacionBuscada) {
    console.log("************* Habitación encontrada *************");
    console.log(
      `Número: ${habitacionBuscada.numero} | Tipo: ${habitacionBuscada.tipo} | Precio por noche: ${habitacionBuscada.precioNoche} | Estado: ${habitacionBuscada.estado} | Huésped: ${habitacionBuscada.huesped}`
    );
  } else {
    console.log("Habitación no encontrada...");
  }
}

async function actualizar() {
  let numero = parseInt(prompt("Ingresa el número de la habitación a actualizar:"));
  console.log("Buscando en base de datos...");

  await tiempoDeEspera(3000);

  let habitacionBuscada = habitaciones.find((habitacion) => {
    return habitacion.numero === numero;
  });

  if (habitacionBuscada) {
    console.log("************* Habitación encontrada *************");
    let nuevoEstado = (prompt("Ingrese el nuevo estado:"));

    if (nuevoEstado.toLowerCase != "ocupado"){
      habitacionBuscada.huesped = "";
    } else { nuevoEstado.toLowerCase === "ocupado"
      habitacionBuscada.huesped = prompt("Ingrese el nombre del huesped");
    }
    
    habitacionBuscada.estado = nuevoEstado;
    console.log("Estado actualizado: " + habitacionBuscada.numero);
  } else {
    console.log("Él número de la habitación que ingresaste no existe....");
  }
}

function eliminar() {
  let numero = prompt("Número de la habitación que deseas eliminar:");

  let indice = habitaciones.findIndex((habitacion) => {
    return habitacion.numero() === numero();
  });

  if (indice !== -1) {
    habitaciones.splice(indice, 1);
    console.log("Habitacion " +numero + " eliminada.");
  } else {
    console.log("Habitacion no encontrada...");
  }
}

menu();