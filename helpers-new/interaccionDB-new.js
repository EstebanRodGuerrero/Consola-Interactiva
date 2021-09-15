
const fs = require('fs');




    const archivo = './db-new/data-new.json'; // PATH del archivo


    // ------------ GUARDAR en la DB ---------------------------------------------------
    const guardarDB = ( data ) => {

        // Creamos el archivo primero
            fs.writeFileSync( archivo, JSON.stringify( data ) )   // 1er Paramentro (archivo): ruta
                                            // 2do Parametro (data): Datos para guardar
    }



    // ---------- LEER la DB --------------------------------------
    const leerDB = () => {

        if( !fs.existsSync ) { // NO existe?
            return null;
        }

        const info = fs.readFileSync( archivo, {encoding: 'utf-8'} ); // lee archivo..
        const data = JSON.parse( info ); // (PARSEO) Convierte el objeto a JSON antes de retornar 

        return data;
    }


    module.exports = {
        guardarDB,
        leerDB 
    }