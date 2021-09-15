// Importacion Packetes
require('colors');

// Importaciones locales
const { guardarDB, leerDB } = require('./helpers-new/interaccionDB-new');

const { 
        inquirerMenu, 
        pausa, 
        leerInput, 
        listadoBorrarTareas ,
        confirmar,
        mostrarListadoChecklist
} = require('./helpers-new/inquirer-new'); 

const Tareas = require('./models-new/tareas-new');






    console.clear();

    
//Archivo que INICIA EL PROGRAMA
    const main = async() => {

      
    
        let opt = '';
        const tareas = new Tareas(); // Instancea Tareas            IMPORTANT:
        const tareasDB = leerDB(); // Ejecuta metodo leerDB         -Ventaja de meterlo a una variable:
//                                                                    se puede utilizar en un if con la info que extrae un metodo

        if( tareasDB ) {
            //Establecer las tareas

            //Cargar tareas del archivo
            tareas.cargarTareasFromArray( tareasDB );
        }

        


        do {

            opt = await inquirerMenu(); // SE CREA LA INTERFAZ
                                            //  trae las opciones a elegir... 
                                            //  Y por ultimo, con el fin que se no haga un ciclo infinito y poder usar el await(para que espere) transformamos la funcion mostrarMenu() en una promesa en mensaje.js
        

            // Aqui se trabaja cada opción
            switch (opt) {

                // 1.- Crear Tarea  
                case '1':
  
                    const desc = await leerInput('Descripcion: '); //Lee la descripicion que escribio el usuario para mandarlo a creartarea
                    tareas.crearTarea( desc );
                    
                break;
                

                // 2.- Listar Tarea
                case '2':

                    tareas.listadoCompleto2();
                    //console.log(tareas.listaArr);

                break;

                
                // 3.- Guardar Tareas en BD
                case '3':

                    guardarDB( tareas.listaArr );

                break;


                // 4.- Listar tareas completadas
                case '4':

                    tareas.listarTareasCompletadas(true);

                break;


                
                // 5.- completado | pendiente
                case '5':

                    const ids = await mostrarListadoChecklist( tareas.listaArr );
                    tareas.cambiarEstadoTareas( ids );

                break;


                // 6.- Borrar tarea
                case '6':

                    const id = await listadoBorrarTareas( tareas.listaArr );
                    if( id !== '0' ){
                        const ok = await confirmar('¿Estas seguro?');
                        if ( ok ) {
                            tareas.borrarTarea( id );
                            console.log('Tarea borrada');
                        }
                    }

                break;
                
            }

            
            await pausa();  

        } while (opt !== '0');
        
    }

    main();