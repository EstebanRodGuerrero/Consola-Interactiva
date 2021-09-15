require('colors');
const Tarea = require('./tarea-new');



//Clase Tareas ----------- Se trabaja el objeto Tarea, es decir aqui desarrollamos todo lo que se puede hacer con el objeto Tarea
    class Tareas {
        
        _listado = {}   // Creando objeto recipiente todas las Tareas

        constructor() {
            this._listado = {};
        }



        // Crear una nueva Tarea
        crearTarea ( desc = '' ) {

            const tarea = new Tarea ( desc ); // Instancia para crear un nuevo objeto del tipo Tarea, enviandole a dicho objeto, un dato.

            this._listado[tarea.desc] = tarea; // Ingresa el nuevo objeto tarea, al ._listado           
        }


        borrarTarea ( id ) {
            if ( this._listado[id] ) {
                delete this._listado[id];
            }
        }


        // Carga info de un array
        cargarTareasFromArray ( tareas = [] ) { //parametro tipo array 

            tareas.forEach( tarea => {
                this._listado[tarea.id] = tarea;
            })

            
        }


        // Listar cada una las tareas por separado que se hayan almacenado en ._listado
        get listaArr() { 

            const listado = []; // nuevo listado vacio

            Object.keys(this._listado).forEach( key => { // Recorre cada una de las filas del objeto ._listado
                const tarea = this._listado[key]; // Por cada una de las filas crea un objeto llamado tarea (reciente de CADA tarea por separado)
                listado.push(tarea); // PUSH: Metodo que sirve para insertar un Objeto a un Arreglo
            });

            return listado;
        }


        get mostrarCantidadTareas() { // podemos usar GET por que es una accion que no requiere ningun parametro, es solo mostrar 

            let cantidad = 0;

            Object.keys(this._listado).forEach( key => { // Recorre cada una de las filas del objeto listado
                if(key !== null){
                    return 'No existen datos';
                } else {
                    cantidad ++;
                    return cantidad;
                }
                
                
            });

            return cantidad;
        }

        listadoCompleto () { // Forma tbs

            let num = 1;

            Object.keys(this._listado).forEach( key => {
                const tarea = this._listado[key];
                num = num++;
                
                if( tarea.completadoEn == null ) {
                    console.log( `${ num.green }. ${ tarea.desc } :: ${ tarea.completadoEn.green }` )
                } 
                
            });
        }

        listadoCompleto2 () {  // Forma profe Fernando Herrera

            this.listaArr.forEach( ( tarea, indice ) => {


/* Forma 1 !
                const idx = indice + 1;
                const desc = tarea.desc;
                const comp = tarea.completadoEn;
   --------
*/

// Forma 2 !
                const idx = `${ indice + 1 }`.green
                const { desc, completadoEn } = tarea; // Podemos desestructurar el objeto tarea sacando desc y copletadoEn que son los que vamos a utiizar
                const estado = ( completadoEn )  // Preguntamos por la existencia completadoEn
                                    ? 'Completada'.green 
                                    : 'Pendiente'.red;      
// -----
                console.log( `${ idx }. ${ desc } :: ${ estado }` );

            });
            
        }



        listarTareasCompletadas () { // Forma tbs

            this.listaArr.forEach( ( tarea, indice ) => {

                const idx = `${ indice + 1 }`.green
                const { desc, completadoEn } = tarea;
                const estado = ( completadoEn )  // Preguntamos por la existencia completadoEn
                                    ? 'Completada'.green 
                                    : 'Pendiente'.red;  
                
                if( tarea.completadoEn !== null) {
                    console.log( `${ idx }. ${ desc } :: ${ estado }` );
                } else {
                    console.log('NO hay tareqas completadas');
                }

                

            } )

        }


        listarTareasCompletadas2 ( completadas = true ) { // Forma profe Fernando Herrera

            
            console.log();
            let contador = 0;

            this.listaArr.forEach( ( tarea => {

                const { desc, completadoEn } = tarea;
                const estado = ( completadoEn )  // Preguntamos por la existencia completadoEn
                                    ? 'Completada'.green 
                                    : 'Pendiente'.red;  
                
                if ( completadas ) {

                    if( completadoEn ) {
                        contador += 1;
                        console.log( `${ contador.green }. ${ desc } :: ${ estado }` );
                    }

                } else {

                    if( !completadoEn ) {
                        contador += 1;
                        console.log( `${ contador.green }. ${ desc } :: ${ estado }` );
                    }

                }

                

            } ))

        }

        cambiarEstadoTareas ( ids = [] )  {

            //Validacion de estado
            ids.forEach ( id => {
                
                const tarea = this._listado[id]; //Le pasamos el id de la tarea al _listado
                if( tarea.completadoEn ) {
                    tarea.completadoEn = new Date().toISOString()
                }
            });

            // Para DESMARCAR una tarea que esta completada
            this.listaArr.forEach( tarea => {
                if ( !ids.includes( tarea.id ) ){
                    this._listado[tarea.id].completadoEn = null;
                }
            });

        }


        

    }

    module.exports = Tareas;