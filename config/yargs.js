const argv = require('yargs')

.command('crear', 'Crea una tarea por hacer', {
    descripcion: {
        demand: true,
        desc: "Descripcion de la tarea por hacer",
        alias: '-d'
    }
})

.command('actualizar', 'Actualiza una tarea or hacer', {

    descripcion: {
        desc: "Esto actualiza una tara por hacer",
        alias: '-d'
    },

    completado: {
        default: true,
        alias: 'c',
        desc: 'Mara como copletado o pendiente la tarea'
    }
})

.command('borrar', 'Elimina una tarea por hacer', {

    descripcion: {
        demand: true,
        desc: "Elimina de la tarea por hacer",
        alias: '-d'
    }

})

.help()
    .argv;

module.exports = {
    argv
}