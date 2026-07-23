let habitaciones = []

async function menu() {
    let opcion = prompt(
      "************** Hotel Santa Ana **************\n" +
        "1. Registrar una nueva habitación\n" +
        "2. Listar Habitaciones\n" +
        "3. Buscar habitación por número\n" +
        "4. Cambiar estado de habitación\n" +
        "5. Eliminar habitación\n" +
        "6. Salir",
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
    let numero = prompt("Número de habitacion:");
    let tipo = prompt("Tipo de habitacion (sencilla, doble, suite):");
    let precioNoche = prompt("Precio por noche:");
    let estado = prompt("Estado de la habitación:(ocupada, libre, limpieza)");
    let huesped = prompt("Nombre del huesped:");

    let habitacion = {
        Numero: "",
        Tipo: ["sencilla", "doble", "suite"],
        precioNoche : "",
        estado: ["libre", "ocupada", "limpieza"],
        Huesped: "",
    };
      console.log("Validando información de la habitación...");

      await tiempoDeEspera(2000);
    
      habitaciones.push(habitacion);
      console.log("Habitacion " + numero +" registrada correctamente ");
    }

