const argv = require('./config/yargs').argv;
const porHacer = require('./logica/por-hacer-logica');
const colors = require('colors');



let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;



    case 'listar':

        let listado = porHacer.getListado();

        for (let tarea of listado) {

            console.log('====== Por Hacer ======'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.descripcion);
            console.log('====== Por Hacer ======');

        }

        break;


    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;


    case 'actualizar':

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;



    default:
        console.log('Comando no reconocido');
}