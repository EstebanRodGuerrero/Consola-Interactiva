const fs = require('fs');
const { resolve } = require('path');

let listadoPorHacer = []

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {

        if (err) {
            throw new Error('No se puo', err);
        }

        console.log(`El archivo ${data} se guardo correctamente`);
    });

}

const cargarDB = () => {


    try {

        listadoPorHacer = require('../db/data.json');

    } catch (error) {

        listadoPorHacer = [];

    }

    console.log(listadoPorHacer);
}


const crear = (descripcion) => {


    cargarDB();


    let porHacer = {
        descripcion: descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;

}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}


const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {

        return tarea.descripcion === descripcion;

    })

    if (index >= 0) {

        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;

    } else {

        return false;

    }

}


const borrar = (descripcion) => {

    cargarDB();

    //filtro un array
    let nuevoListado = listadoPorHacer.filter(tarea => {

        return tarea.descripcion !== descripcion // devuelvo un nuevo array con todos los elementos que NO COINCIDEN con la descripcion dada. 
            // De esta manera creamos un NUEVO ARRAY con todos los elementos MENOS el que nosotros queremos. Dando asi el efecto de eliminar

    });


    if (nuevoListado === listadoPorHacer) {

        return false;

    } else {

        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;

    }


}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}