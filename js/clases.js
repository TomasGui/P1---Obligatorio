class docente {
    constructor(paramNombre,paramUser,paramPass) {
        this.nombre = paramNombre;
        this.user = paramUser;
        this.pass = paramPass;
        //this.alumnosAsignados = [];
    }
}

class alumno {
    constructor(paramNombre,paramUser,paramPass,paramDocente,pNivel) {
        this.nombre = paramNombre;
        this.user = paramUser;
        this.pass = paramPass;
        this.docente = paramDocente;
        this.ArrayEjerciciosResueltos = [];
        this.nivel = pNivel;
    }

    puedeSerEditado() {
        return this.nivel != 'Avanzado';
    }
    
}

//Relacionar las clases con las demas EJERCICIO - ENTREGA EJERCICIO - DEVOLUCION 

class ejercicio {
    constructor(paramDocente,paramNivel,paramTitulo,paramDescripcion,paramImagen) {
        this.id = idEjercicio;
        this.docente = paramDocente;
        this.nivel = paramNivel;
        this.titulo = paramTitulo;
        this.descripcion = paramDescripcion;
        this.imagen = paramImagen;

        idEjercicio++;
    }
}

class EntregaEjercicios {
    constructor(paramIdEjercicio, paramDocente,paramNivel, paramNombreAlumno , paramTitulo , paramAudio){
        this.id = idEntregaEjercicios ; 
        this.idEjercicio = paramIdEjercicio;
        this.docente = paramDocente;
        this.nivel = paramNivel;
        this.nombreAlumno = paramNombreAlumno ;
        this.titulo = paramTitulo ; 
        this.audio = paramAudio ;
        
        idEntregaEjercicios++;

    }

}

class DevolucionEjerciciosAlumnos {
    constructor(paramIdEjercicio, paramDocente,paramNivel,paramTitulo,paramNombreAlumno,paramPuntaje,paramComentario) {
        this.id = idDevolucioneEjercicios;
        this.idEjercicio = paramIdEjercicio;
        this.docente = paramDocente;
        this.nivel = paramNivel;
        this.titulo = paramTitulo;
        this.nombreAlumno = paramNombreAlumno;
        this.puntaje = paramPuntaje ; 
        this.comentario = paramComentario;

        idDevolucioneEjercicios ++;
    }
}

class nivelAlumno {
    constructor(pCodigo, pNombre) {
        this.codigo = pCodigo;
        this.nombre = pNombre;
    }

    puedeSerEditado() {
        return this.nombre !== 'Avanzado';
    }
}



