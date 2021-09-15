require('colors');




    const mostrarMenu = () => { // PAra mostrar el menu en consola


        return new Promise ( resolve => { //Manejaremos el resultado de la funcion en general como promesa

                
            //Titulo
            console.clear();
            console.log('==========================='.green);
            console.log('  Seleccione una opcion'.green);
            console.log('===========================\n'.green);

            //Opciones
            console.log(`${`1.`.green } Crear tarea`);
            console.log(`${`2.`.green } Listar tareaa`);
            console.log(`${`3.`.green } Listar tareas completadas`);
            console.log(`${`4.`.green } Listar tareas pendientes`);
            console.log(`${`5.`.green } Completar tarea(s)`);
            console.log(`${`6.`.green } Borrar tarea`);
            console.log(`${`0.`.green } Salir\n`)


            //Se inicializan las opciones de enviar y recibir opciones a la consola
            const readline = require('readline').createInterface ({
                input: process.stdin,
                output: process.stdout
            })

            //Pregunta
            readline.question('Seleccione una opcion: ', (opt) => { // se dispara con un callback: opt  ---  Es algo asi como un evento
                resolve( opt );
                readline.close();
            }) 


        });



    }

    const pausa = () => {

        return new Promise ( resolve => {

            const readline = require('readline').createInterface ({
                input: process.stdin,
                output: process.stdout
            });
    
            readline.question(`\nPresione ${ 'ENTER'.green } para continuar\n`, (opt) => { // se dispara con un callback: opt  ---  Es algo asi como un evento
                resolve( opt );
                readline.close();
            }) 

        } )
            
        
    
    }


module.exports = {
    mostrarMenu,
    pausa
}