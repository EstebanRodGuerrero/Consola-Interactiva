const { v4: uuidv4 } = require('uuid');





// CLase Tarea -----  Se crea el objeto tarea y todos sus atributos
    class Tarea {


        // variables
        id = '';
        desc = ''; 
        completadoEn = null; 

        

        constructor( desc ) { // EL constructor recibe parametros

            this.id = uuidv4;
            this.desc = desc;
            this.completadoEn = null;
            
        }

    }


    module.exports = Tarea;
