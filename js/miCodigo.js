//Variables globales
let idDevolucioneEjercicios = 1 ; 
let idEjercicio = 1;
let idEntregaEjercicios = 1 ;
let mensajeRegistroUsuario = "";
let mensajeEjercicioIngresadoDocente = '';
let mensajeEjercicioEntregados = "" ;
let MaxEjerciciosHechos = 0;

//Arrays Globales
let arrayDocentes = [];
let arrayAlumnos = [];
let usuarioActivo = null;
let EjerciciosEntregadosAlumnos = []; 
let ejerciciosIngresadosPorDocente = [];
let arrayDevolucionEjercicios = [];


// Precarga de datos antes de iniciar
function precargaDatos() {
    precargaDocentes();
    precargaAlumnos();
    precargaEjerciciosIngresados();
    precargaEjerciciosEntregados();
    precargaEjerciciosCorregidos();
}

//Precarga Usuarios Docentes
function precargaDocentes() {
    
    //DATOS VALIDOS 
    validarYCargarUsuarioDocente('Diaz',"diazsi9","Pass01");
    validarYCargarUsuarioDocente('Luis',"lucho02","Liberty45");
    validarYCargarUsuarioDocente('Carmen',"carmen","Carmen1");
    validarYCargarUsuarioDocente('Pablo',"pabloro","123Coco");
    validarYCargarUsuarioDocente('Guillermo',"gtomas","Gtomas20");
    validarYCargarUsuarioDocente('Hector',"hector20","flavio20T");
    validarYCargarUsuarioDocente('Marcelo',"mace2021","Mxx58");
    validarYCargarUsuarioDocente('Marcela',"marce98","marcelaFin21");
    validarYCargarUsuarioDocente('Luciano',"lucioXX","luciusMax54");
    validarYCargarUsuarioDocente('Fiorella',"FIOG8","auxilio58HOY");
    
    //DATOS NO VALIDOS
    validarYCargarUsuarioDocente('Emiliana',"Emi30","emiliana2021");
    validarYCargarUsuarioDocente('Micaela',"fiog8","mica21Soy");
    validarYCargarUsuarioDocente('Guillermo',"gtomas","Gtomas20");
    validarYCargarUsuarioDocente('Guillermo',"gtomas","Gtomas20");
    validarYCargarUsuarioDocente("","","",);
    validarYCargarUsuarioDocente("","tomazon","zoomORT2021");
    validarYCargarUsuarioDocente("Maximo","maxi100","");
    validarYCargarUsuarioDocente("Carolina", "", "caro1991HOY");
    
    console.log(arrayDocentes);
}

//Precarga Usuarios Alumnos
function precargaAlumnos() {
    //DATOS VALIDOS
    validarYCargarUsuarioAlumno('Juan',"juan88","Hola44",'diazsi9','Inicial');
    validarYCargarUsuarioAlumno('Diego',"diego89","Pass01",'diazsi9','Inicial');
    validarYCargarUsuarioAlumno('Alvaro',"alvaro90","aLva01",'diazsi9','Intermedio');
    validarYCargarUsuarioAlumno('Matías',"matias01","Hola100",'diazsi9','Avanzado');
    validarYCargarUsuarioAlumno('Mateo',"msilvera","Contraseña1",'diazsi9','Avanzado');

    validarYCargarUsuarioAlumno('Tom',"pollope","04Phantom",'lucho02','Inicial');
    validarYCargarUsuarioAlumno('Natalia',"natalia97","NatiGomez18",'lucho02','Inicial');
    validarYCargarUsuarioAlumno('Daniel',"dani007","Marvel55",'lucho02','Intermedio');
    
    validarYCargarUsuarioAlumno('Gimena',"gimena99","LaGime17",'carmen','Inicial');
    validarYCargarUsuarioAlumno('Fernanda',"fer413","Solare223",'carmen','Inicial');
    validarYCargarUsuarioAlumno('Camila',"camilita","Paris4life",'carmen','Intermedio');
    
    validarYCargarUsuarioAlumno('Miguel',"miguel02","Password01",'pabloro','Intermedio');
    validarYCargarUsuarioAlumno('Pedro',"pedro95","Chorizo31",'pabloro','Avanzado');
    validarYCargarUsuarioAlumno('Sebastián',"sebasabe","Sebasabe69",'pabloro','Avanzado');

    validarYCargarUsuarioAlumno('Lionel',"lio87","Lionel10",'gtomas','Inicial');
    validarYCargarUsuarioAlumno('Kiko',"KIKO20","Kiko2020",'gtomas','Inicial');

    //DATOS NO VALIDOS
    validarYCargarUsuarioAlumno('Kiko',"kiko20","Kiko2020",'gtomas','Inicial');
    validarYCargarUsuarioAlumno('Jose',"LIO87","Ricar01",'gtomas','Inicial');
    validarYCargarUsuarioAlumno('Hugo',"diazsi9","Hugo01",'gtomas','Inicial');
    validarYCargarUsuarioAlumno('Ricardo',"sebasabe","Ricar01",'gtomas','Inicial');
    validarYCargarUsuarioAlumno('Tania',"tania04","1234ab",'gtomas','Intermedio');
    validarYCargarUsuarioAlumno('Francisco',"fran","franCisco",'gtomas','Avanzado');
    validarYCargarUsuarioAlumno('Gonzalo',"gonza10","Gonza2010",'','Avanzado');
    validarYCargarUsuarioAlumno('Gonzalo',"gonza10","Gonza2010",'tiosam','Avanzado');
    validarYCargarUsuarioAlumno('',"","",'','');
    validarYCargarUsuarioAlumno('Lionel',"","",'','');
    validarYCargarUsuarioAlumno('Lionel',"lio87","",'','');
    validarYCargarUsuarioAlumno('Lionel',"lio87","Lionel10",'','');
    validarYCargarUsuarioAlumno('Lionel',"lio87","Lionel10",'gtomas','');

    console.log(arrayAlumnos);
}

//Precarga ejercicios plenateados por docentes
function precargaEjerciciosIngresados() {

    //DATOS VALIDOS
    validarYCargarEjercicioIngresado("diazsi9","Inicial","Ejercicio 1","Hacer el ejercicio indicado en la imagen y grabar un audio completo","ej1.png");
    validarYCargarEjercicioIngresado("lucho02","Intermedio","Ejercicio 3","Hacer el ejercicio indicado en la imagen usando guitarra acustica y grabar un audio completo.","ej2.png");
    validarYCargarEjercicioIngresado("diazsi9","Inicial","Ejercicio 2","Hacer el ejercicio indicado en la imagen usando guitarra electrica y grabar un audio completo","ej3.png");
    validarYCargarEjercicioIngresado("lucho02","Avanzado","Ejercicio 3","Hacer el ejercicio indicado en la imagen y grabar un audio completo, procure entregarlo antes de fin de Julio","ej4.png");
    validarYCargarEjercicioIngresado("diazsi9","Inicial","Ejercicio 3","Hacer el ejercicio indicado en la imagen y subir la grabación","ej5.png");
    validarYCargarEjercicioIngresado("lucho02","Avanzado","Ejercicio Examen","Hacer el ejercicio indicado en la imagen y grabar un audio completo, mucha suerte!","ej6.png");
    validarYCargarEjercicioIngresado("diazsi9","Inicial", "Ejercicio Examen","Hacer el ejercicio indicado en la imagen y grabar un audio completo, utilizando como instrumento guitarra acustica","ej7.png");
    validarYCargarEjercicioIngresado("lucho02","Intermedio","Ejercicio 2","Hacer el ejercicio indicado en la imagen y grabar un audio completo, utilizando como instrumento guitarra electrica","ej8.png");
    validarYCargarEjercicioIngresado("diazsi9","Avanzado","Ejercicio Examen Final","Hacer el ejercicio indicado en la foto y grabar un audio completo","ej9.png");
    validarYCargarEjercicioIngresado("diazsi9","Avanzado","Ejercicio Examen","Hacer el ejercicio que se muestra en la imagen y grabar un audio completo","ej1.png");
    validarYCargarEjercicioIngresado("lucho02","Inicial","Ejercicio 1","Hacer el ejercicio indicado en la imagen y grabar un audio de la composicion","ej2.png");
    validarYCargarEjercicioIngresado("pabloro","Intermedio","Ejercicio 5","Hacer el ejercicio indicado en la imagen y grabar un audio completo","ej3.png");
    validarYCargarEjercicioIngresado("pabloro","Inicial","Ejercicio 1","Hacer la tarea indicada en la imagen y grabar un audio completo","ej1.png");
    validarYCargarEjercicioIngresado("pabloro","Inicial","Ejercicio 2","Hacer el ejercicio indicado en la imagen y grabar un audio completo, contacteme apenas lo haya entregado","ej2.png");
    validarYCargarEjercicioIngresado("carmen","Inicial","Ejercicio 1","Hacer el ejercicio indicado en la imagen y grabar un audio completo, procure entregarlo antes de fin de Agosto","ej1.png");
    validarYCargarEjercicioIngresado("carmen","Inicial","Ejercicio 2","Hacer el ejercicio indicado en la imagen y grabar un audio completo del mismo","ej2.png");
    validarYCargarEjercicioIngresado("carmen","Intermedio","Ejercicio 5","Hacer el ejercicio indicado en la imagen y grabar un audio completo, procure entregarlo antes de fin de Noviembre","ej3.png");
    validarYCargarEjercicioIngresado("carmen","Avanzado","Ejercicio 9","Hacer el ejercicio indicado en la imagen y grabar un audio completo con una mano sola","ej9.png");
    validarYCargarEjercicioIngresado("diazsi9","Intermedio","Ejercicio Examen","Hacer el ejercicio indicado en la imagen y grabar un audio completo, tenga cuidado con el volumen","ej8.png");
    
    //DATOS NO VALIDOS
    validarYCargarEjercicioIngresado("","Inicial","Ejercicio 1","Hacer el ejercicio indicado en la imagen y grabar un audio completo","ej1.png");
    validarYCargarEjercicioIngresado("diazsi9","","Ejercicio 1","Hacer el ejercicio indicado en la imagen y grabar un audio completo","ej1.png");
    validarYCargarEjercicioIngresado("diazsi9","Intermedio","","Hacer el ejercicio indicado en la imagen y grabar un audio completo","ej1.png");
    validarYCargarEjercicioIngresado("diazsi9","Inicial","Ejercicio","Hacer","ej1.png");
    validarYCargarEjercicioIngresado("diazsi9","Intermedio","Ejercicio Test","Hacer el ejercicio indicado en la imagen y grabar un audio completo","");
    validarYCargarEjercicioIngresado("diazsi9","Inicial","Ejercicio 1","Hacer el ejercicio indicado en la imagen y grabar un audio completo","ej1.m4a");
    validarYCargarEjercicioIngresado("cesar79","Avanzado","Ejercicio 1","Hacer el ejercicio indicado en la imagen y grabar un audio completo","ej1.png");
    validarYCargarEjercicioIngresado("","","","","");
    validarYCargarEjercicioIngresado("diazsi9","Avanzado","","","ej1.png");
    validarYCargarEjercicioIngresado("diazsi9","Avanzado","Ejercicio ","Hacer el ejercicio indicado en la imagen y grabar un audio completo.La música (del griego: μουσική [τέχνη] - mousikē [téchnē], «el arte de las musas») es, según la definición tradicional del término, el arte de crear y organizar sonidos y silencios respetando los principios fundamentales de la melodía, la armonía y el ritmo, mediante la intervención de complejos procesos psicoanímicos. ","ej1.png");
    
    console.log(ejerciciosIngresadosPorDocente);
}

//Precarga Ejercicios entregados por alumno
function precargaEjerciciosEntregados() {
    // DATOS VALIDOS
    validarYCargarEjercicioEntregado(1,"diazsi9","Inicial","Ejercicio 1","juan88","ej1.m4a");
    validarYCargarEjercicioEntregado(3,"diazsi9","Inicial","Ejercicio 2","juan88","ej2.m4a");
    validarYCargarEjercicioEntregado(5,"diazsi9","Inicial","Ejercicio 3","juan88","ej3.m4a");
    validarYCargarEjercicioEntregado(7,"diazsi9","Inicial", "Ejercicio Examen","juan88","ej4.m4a");
    validarYCargarEjercicioEntregado(9,"diazsi9","Avanzado", "Ejercicio Examen Final","juan88","ej6.m4a");
    validarYCargarEjercicioEntregado(10,"diazsi9","Avanzado", "Ejercicio Examen","juan88","ej7.m4a");

    validarYCargarEjercicioEntregado(2,"lucho02","Intermedio","Ejercicio 3","dani007","ej5.m4a");
    validarYCargarEjercicioEntregado(8,"lucho02","Intermedio","Ejercicio 2","dani007","ej4.m4a");
    validarYCargarEjercicioEntregado(4,"lucho02","Avanzado","Ejercicio 3","pollope","ej3.m4a");
    validarYCargarEjercicioEntregado(6,"lucho02","Avanzado","Ejercicio Examen","pollope","ej6.m4a");
    validarYCargarEjercicioEntregado(11,"lucho02","Inicial","Ejercicio 1","pollope","ej6.m4a");

    validarYCargarEjercicioEntregado(15,"carmen","Inicial","Ejercicio 1","gimena99","ej5.m4a");
    validarYCargarEjercicioEntregado(16,"carmen","Inicial","Ejercicio 2","gimena99","ej6.m4a");
    validarYCargarEjercicioEntregado(17,"carmen","Intermedio","Ejercicio 5","fer413","ej4.m4a");
    validarYCargarEjercicioEntregado(18,"carmen","Avanzado","Ejercicio 9","fer413","ej6.m4a");

    // DATOS NO VALIDOS
    validarYCargarEjercicioEntregado(1,"diazsi9","Inicial","Ejercicio 1","juan88","ej1.m4a");
    validarYCargarEjercicioEntregado(99,"diazsi9","Intermedio","Ejercicio 2","alvaro90","ej2.m4a");
    validarYCargarEjercicioEntregado(19,"diazsi9","","Ejercicio Examen","alvaro90","ej3.m4a");
    validarYCargarEjercicioEntregado(19,"diazsi9","Intermedio","","alvaro90","ej3.m4a");
    validarYCargarEjercicioEntregado(19,"","Intermedio","Ejercicio Examen","alvaro90","ej4.m4a");
    validarYCargarEjercicioEntregado(19,"diazsi9","Intermedio", "Ejercicio Examen","","ej6.m4a");
    validarYCargarEjercicioEntregado(19,"diazsi9","Intermedio", "Ejercicio Examen","alvaro90","");
    validarYCargarEjercicioEntregado(19,"diazsi9","Intermedio", "Ejercicio Examen","alvaro90","ej1.png");
    validarYCargarEjercicioEntregado(19,"diazsi9","Intermedio", "Ejercicio Examen","tiosam","ej1.m4a");
    validarYCargarEjercicioEntregado("","diazsi9","Intermedio", "Ejercicio Examen","alvaro90","ej1.m4a");
    validarYCargarEjercicioEntregado("a","carmen","Avanzado","Ejercicio 9","fer413","ej6.m4a");

    console.log(EjerciciosEntregadosAlumnos);
}

//Precarga ejercicios corregidos por el docente 
function precargaEjerciciosCorregidos() {
    //Datos validos:
    validarYCargarEjercicioCorregido(1,"diazsi9","Inicial","Ejercicio 1","juan88",50,"");
    validarYCargarEjercicioCorregido(2,"lucho02","Intermedio","Ejercicio 3","dani007",85,"Muy bueno");
    validarYCargarEjercicioCorregido(3,"diazsi9","Inicial","Ejercicio 2","juan88",80,"Excelente");
    validarYCargarEjercicioCorregido(4,"lucho02","Avanzado","Ejercicio 3","pollope",100 , "Supremacia");
    validarYCargarEjercicioCorregido(5,"diazsi9","Inicial","Ejercicio 3","juan88",95,"STE");
    validarYCargarEjercicioCorregido(6,"lucho02","Avanzado","Ejercicio Examen","pollope",100,"MBB");
    validarYCargarEjercicioCorregido(7,"diazsi9","Inicial", "Ejercicio Examen","juan88",100,"STE");
    validarYCargarEjercicioCorregido(8,"lucho02","Intermedio","Ejercicio 2","dani007",60,"BB");
    validarYCargarEjercicioCorregido(9,"diazsi9","Avanzado", "Ejercicio Examen Final","juan88",20,"Que mal :(");
    validarYCargarEjercicioCorregido(15,"carmen","Inicial","Ejercicio 1","gimena99",85,"Impeca");
    validarYCargarEjercicioCorregido(16,"carmen","Inicial","Ejercicio 2","gimena99",75,"Bien");

    //Datos no validos : 
    validarYCargarEjercicioCorregido(5,"lucho02","Intermedio","Ejercicio 2","dani007",84,"");
    validarYCargarEjercicioCorregido(5,"lucho02","Intermedio","Ejercicio 2","dani007",12,"Horrible");
    validarYCargarEjercicioCorregido(10,"lucho02","Intermedio","Ejercicio 2","dani007",100,"Muy bueno");
    validarYCargarEjercicioCorregido(10,"","Intermedio","Ejercicio 2","dani007",100,"Muy bueno");
    validarYCargarEjercicioCorregido(10,"","", "Ejercicio Examen","juan88",100,"Muy bueno");
    validarYCargarEjercicioCorregido(10,"","", "","juan88",100,"Muy bueno");
    validarYCargarEjercicioCorregido(10,"","", "","","","Muy bueno");
    validarYCargarEjercicioCorregido("","","", "","","","");
    validarYCargarEjercicioCorregido(10,"carmen","Avanzado", "Ejercicio Examen","juan88",100,"Muy bueno");
    validarYCargarEjercicioCorregido(10,"diazsi9","Inicial", "Ejercicio Examen","juan88",100,"Muy bueno");
    validarYCargarEjercicioCorregido(10,"diazsi9","Avanzado", "Ejercicio Examen","fer413",100,"Muy bueno");
    validarYCargarEjercicioCorregido("A","diazsi9","Avanzado", "Ejercicio Examen","fer413",100,"Muy bueno");
    console.log(arrayDevolucionEjercicios);
}

//Carga de niveles para comparar
let arrayNivelAlumno = [
    new nivelAlumno("INICIAL", "Inicial"),
    new nivelAlumno("INTERMEDIO","Intermedio"),
    new nivelAlumno("AVANZADO", "Avanzado")
];


inicializar();

function inicializar() {
    precargaDatos();

    //Menu principal
    document.querySelector("#MenuIniciarSesion").addEventListener("click", Inicio);
    document.querySelector("#MenuRegistrarse").addEventListener("click", Registrarse);
    document.querySelector("#seleccionarPerfil").addEventListener("change", actualizarVistaRegistrarse);

    //Login
    document.querySelector("#btnIniciarSesion").addEventListener("click", IniciarSesion);

    //Registro
    document.querySelector("#btnRegisrtar").addEventListener("click", registrarUsuario);
    document.querySelector("#seleccionarPerfil").addEventListener("change", Registrarse);

    //Cerrar sesion
    document.querySelector("#btnMenuCerrarSesionDocente").addEventListener("click", CerrarSesion);
    document.querySelector("#btnMenuCerrarSesionAlumno").addEventListener("click", CerrarSesion);
    
    //Menues y eventos Docentes
    document.querySelector("#btnMenuAsignarAlumnos").addEventListener("click", AsignarAlumnos);
    document.querySelector("#btnMenuIngresoEjercicios").addEventListener("click", IngresoEjercicios);
    document.querySelector("#btnMenuDevolucionEjercicios").addEventListener("click", DevolucionEjercicios);
    document.querySelector("#btnIngresoEjercicios").addEventListener("click", GuardarIngresoEjercicios);
    document.querySelector("#asignarAlumnosDevolucion").addEventListener("change", GenerarComboEjercicios);
    document.querySelector("#verEjerciciosAlumnos").addEventListener("click", VerEjerciciosParaDevolucion);
    document.querySelector("#btnEntregarDevolucion").addEventListener("click", HacerDevolucionEjercicios);
    document.querySelector("#btnMenuVerListaEntregas").addEventListener("click", VerListaEntregas);   
    document.querySelector("#btnMenuVisualizarInformacionEstadisticaDOCENTE").addEventListener("click", VisualizarInformacionEstadisticaDOCENTE);
    
    //Menues y eventos Alumnos 
    document.querySelector("#MenuEntregarTareas").addEventListener("click", EntregarTareas);
    document.querySelector("#seleccionEjerciciosAlumno").addEventListener("change", VerEntregarTareas);
    document.querySelector("#EnviarTarea").addEventListener("click", GuardarEnviarTarea);
    document.querySelector("#MenuEjerciciosPlanteados").addEventListener("click", EjerciciosPlanteados);
    document.querySelector("#MenuVerEjerciciosResultos").addEventListener("click", VerEjerciciosResultos);
    document.querySelector("#MenuVisualizarInformacionEstadisticaALUMNOS").addEventListener("click", VisualizarInformacionEstadisticaALUMNOS);      
    document.querySelector("#btnBuscarEjercicioAlumno").addEventListener("click", BuscarEjercicioAlumno);
    document.querySelector("#btnMostrarTodosEjerciciosPlanteados").addEventListener("click", botonMostrarTodosEjerciciosPlanteados);
}

//Funciones de validacion de campos
//Validar password - La contraseña deberá tener un mínimo de 4 caracteres, contando con al menos una mayúscula, una minúscula y un número
function validarPassword(password) {
    let esValida = false;
    let tieneMayus = 0;
    let tieneNum = 0;
    let tieneMin = 0;
    if (password.length >= 4) {
        for (let i = 0; i<password.length; i++) {
            if (!isNaN(password[i])) {
                tieneNum++;
            } else {
				let letraMayus = password[i].toUpperCase();
				let letraMinus = password[i].toLowerCase();
				if (password[i] == letraMayus) {
					tieneMayus ++;
				}
				if (password[i] == letraMinus) {
					tieneMin ++;
				}
			}
        }
        if (tieneMayus>=1 && tieneNum >=1  && tieneMin>=1 ) {
            esValida = true;
        }
    }
    return esValida;
}

//Valida si el campo esta vacio
function campoVacio(texto) {
    let estaVacio = false;
    if (texto.trim() == "") {
        estaVacio = true;
    }
    return estaVacio;
}

//Comprobar si existe un alumno / docente dentro de una lista 
function existeUsuario(usuario,listaUsuarios) {
    let existe = false;
    //let usuarioMinuscula = usuario.toLowerCase();
    for (let i = 0; i<listaUsuarios.length; i++) {
        if (usuario == listaUsuarios[i].user) {
            existe = true;
        }
    }
    return existe;
}

//Comprobar el ingreso del password dentro del inicio de sesion
function passwordCorrecto(usuario,password,listaUsuarios) {
    let correcto = false;
    let usuarioMinuscula = usuario.toLowerCase();
    for (let i = 0; i<listaUsuarios.length; i++) {
        if (usuario == listaUsuarios[i].user) {
            if (password == listaUsuarios[i].pass) {
                correcto = true;
            }
        }
    }
    return correcto;
}

//Funcion que verifica si el usuario es docente o alumno buscando su nombre de usuario en el array que corresponda
function comprobarPerfilUsuario(usuario,listaUsuarios) {
    let esPerfil = false;
    let usuarioMinuscula = usuario.toLowerCase();
    for (let i = 0; i<listaUsuarios.length; i++) {
        if (usuarioMinuscula == listaUsuarios[i].user) {
            esPerfil = true;
        }
    }
    return esPerfil;
}

//Funcion que devuelve la posicion de un docente/alumno en un array usando su nombre de usuario
function verificarPosicionUsuario(usuario,listaUsuarios) {
    let posicion;
    let noEncontrePosicion = true;
    let i = 0;
    while (i<listaUsuarios.length && noEncontrePosicion) {
        if (listaUsuarios[i].user == usuario) {
            posicion = i;
            noEncontrePosicion = false;
        }
        i++;
    }
    return posicion;
}


// Funciones para cada pantallas

//Menu principal DOCENTE
function menu_principal_docente (){
    Ocultar_pantallas();
    document.querySelector("#MenuDocente").style.display = "block";
}
////Menu principal ALUMNO
function menu_principal_alumnos() {
    Ocultar_pantallas();
    document.querySelector("#MenuAlumnos").style.display = "block";
}

//Ocultar pantallas - TODAS
function Ocultar_pantallas () { 
    document.querySelector("#IniciarSecion").style.display = "none";
    document.querySelector("#MenuIniciarSesion").style.display = "none";
    document.querySelector("#MenuRegistrarse").style.display = "none";
    document.querySelector("#MenuDocente").style.display = "none";
    document.querySelector("#MenuAlumnos").style.display = "none";
    document.querySelector("#AsignarPerfilRegistro").style.display = "none";
    document.querySelector("#AsignarAlumnos").style.display = "none";
    document.querySelector("#IngresoEjercicios").style.display = "none";
    document.querySelector("#DevolucionEjercicios").style.display = "none";
    document.querySelector("#comboEjercicios").style.display = "none";
    document.querySelector("#VerListaEntregas").style.display = "none";
    document.querySelector("#VisualizarInformacionEstadisticaDOCENTE").style.display = "none";
    document.querySelector("#EntregarTareas").style.display = "none";
    document.querySelector("#EjerciciosPlanteados").style.display = "none";
    document.querySelector("#VerEjerciciosResultos").style.display = "none"; 
    document.querySelector("#VisualizarInformacionEstadisticaALUMNOS").style.display = "none";
}

//Pantalla Inicio
function PantallaInicio(){
    document.querySelector("#IniciarSecion").style.display = "block";
    document.querySelector("#MenuIniciarSesion").style.display = "block";
    document.querySelector("#MenuRegistrarse").style.display = "block";
}

//Pantalla cerrar sesion 
function CerrarSesion(){
    Ocultar_pantallas();
    usuarioActivo = null;
    PantallaInicio();
}

function Inicio (){
    document.querySelector("#nombreUsuario").value = "";
    document.querySelector("#password").value = "";
    document.querySelector("#mensajeInicioSesion").innerHTML = "";
    Ocultar_pantallas();
    PantallaInicio();
}

//F01 - Registro en la aplicación - Usuarios: Alumnos y Docentes

//Vacia y muestra opciones en el registro
function Registrarse(){
    document.querySelector("#nombreRegistro").value = "";
    document.querySelector("#nombreUsuarioRegistro").value = "";
    document.querySelector("#passwordRegistro").value = "";
    document.querySelector("#mensajesRegistro").innerHTML = "";
    Ocultar_pantallas();
    document.querySelector("#mensajesRegistro").innerHTML = "";
    document.querySelector("#MenuIniciarSesion").style.display = "block";
    document.querySelector("#MenuRegistrarse").style.display = "block";
    document.querySelector("#AsignarPerfilRegistro").style.display = "block";
    actualizarVistaRegistrarse();
}

// Mostrar opciones docente en el registro de Alumnos
function actualizarVistaRegistrarse() {
    let tipoUsuarioIngresado = document.querySelector("#seleccionarPerfil").value;
    //Verifica si se selecciona la opcion alumno para mostrar seleccion de docentes
    if (tipoUsuarioIngresado === "alumno") {
        document.querySelector("#seleccionarDocente").style.display = "block";
    } else {
        document.querySelector("#seleccionarDocente").style.display = "none";
    }
    //Muestra las opciones obtenidas por la funcion obtenerOpcionesDocentes
    let htmlOpcionesDocentes = obtenerOpcionesDocentes();
    document.querySelector("#asignarDocente").innerHTML = htmlOpcionesDocentes; 
}

// Obtener opciones docentes para el combo de registro de Alumnos
function obtenerOpcionesDocentes() {
    let htmlOpciones = `<option value="">Seleccione...</option>`;
    //Recorre el array docentes para obtener las opciones del combo
    for (let i = 0; i < arrayDocentes.length; i++) {
        let docenteActual = arrayDocentes[i];
        //Guarda las opciiones por cada docente del array
        htmlOpciones += `<option value="${docenteActual.user}">${docenteActual.nombre} (${docenteActual.user})</option>`;
    }

    return htmlOpciones;
}

// Leer datos ingresados del resgistro usuario
function registrarUsuario () {
    let tipoPerfilIngresado = document.querySelector("#seleccionarPerfil").value;
    let nombreIngresado = document.querySelector("#nombreRegistro").value;
    let nombreUsuarioIngresado = document.querySelector("#nombreUsuarioRegistro").value;
    let nombreUsuarioIngresadoMin = nombreUsuarioIngresado.toLowerCase();
    let passwordIngresado = document.querySelector("#passwordRegistro").value;
    let docenteIngresado = document.querySelector("#asignarDocente").value;

    validarDatosUsuario(tipoPerfilIngresado, nombreIngresado, nombreUsuarioIngresadoMin, passwordIngresado, docenteIngresado);
}

//Borrar los cambos de registro en una funcion
function BorrarCamposRegistro() {
    document.querySelector("#seleccionarPerfil").value = "";
    document.querySelector("#nombreRegistro").value="";
    document.querySelector("#nombreUsuarioRegistro").value = "";
    document.querySelector("#passwordRegistro").value = "";
    document.querySelector("#asignarDocente").value ="";
}

// Validaciones datos ingresados en registro
function validarDatosUsuario (tipoPerfilIngresado, nombreIngresado, nombreUsuarioIngresadoMin, passwordIngresado, docenteIngresado) {
    if (tipoPerfilIngresado == "alumno") {
        //Valida los datos del usuario Alumno
        if (validarYCargarUsuarioAlumno (nombreIngresado, nombreUsuarioIngresadoMin, passwordIngresado, docenteIngresado, "Inicial")) {
            mensajeRegistroUsuario = "El registro se ha completado con exito.";
            BorrarCamposRegistro();
            actualizarVistaRegistrarse();
        }
    } else if (tipoPerfilIngresado == "docente") {
        //Valida los datos del usuario Docente
        if (validarYCargarUsuarioDocente (nombreIngresado, nombreUsuarioIngresadoMin, passwordIngresado)) {
            mensajeRegistroUsuario = "El registro se ha completado con exito.";
            BorrarCamposRegistro();
            actualizarVistaRegistrarse();
        }
    } else {
        mensajeRegistroUsuario = "Debe seleccionar si es Alumno o Docente.";
    }
    document.querySelector("#mensajesRegistro").innerHTML = mensajeRegistroUsuario;
}

//F02 - Inicio de sesión en la aplicación - Usuarios: Alumnos y Docentes

function IniciarSesion() {

    let error = "";
    const usuario = document.querySelector("#nombreUsuario").value;
    const usuarioIngresado = usuario.toLowerCase();
    const passwordIngresada = document.querySelector("#password").value;

   //Valido que todos los campos esten completados
    if (!campoVacio(usuarioIngresado) && !campoVacio(passwordIngresada)) {
        //Valido qiue el usuario ingresado exista en el sistema, primero lo busco en el array de docentes, si no lo encuetro lo busco en el array de alumnos
        if (existeUsuario(usuarioIngresado,arrayDocentes)) {
            //(*1)Valido que la contraseña ingresada sea la correcta para ese usuario
            if (passwordCorrecto(usuarioIngresado,passwordIngresada,arrayDocentes)) {
                //(*2)Si todo esta correcto, guardo ese usuario en una variable global
                usuarioActivo = arrayDocentes[verificarPosicionUsuario(usuarioIngresado,arrayDocentes)];
                //(*3)Muestro el menu que corresponda al perfil del usuario
                menu_principal_docente();
            } else {
                error="Contraseña incorrecta, intente nuevamente.";
            }
        } else if (existeUsuario(usuarioIngresado,arrayAlumnos)) {
            //(*1)
            if (passwordCorrecto(usuarioIngresado,passwordIngresada,arrayAlumnos)) {
                //(*2)
                usuarioActivo = arrayAlumnos[verificarPosicionUsuario(usuarioIngresado,arrayAlumnos)];
                //(*3)
                menu_principal_alumnos();
            } else {
                error = "Contraseña incorrecta, intente nuevamente.";
            }
        } else {
            error ="Usuario no existente. Intente nuevamente o regístrese si es nuevo" ;
        }
    } else {
        error = "Todos los campos son obligatorios";
    }
    //Borrar los datos del los campos 
    document.querySelector("#nombreUsuario").value = "";
    document.querySelector("#password").value = "";
    //Mostrar mensaje de error
    document.querySelector ("#mensajeInicioSesion").innerHTML = error ;    
}

//Validar y carga datos DOCENTE - para ingresar datos nuevos o las precargas
function validarYCargarUsuarioDocente (pNombre , pNombreUsuario , pPassword) {
    let datoValido = true ;
    //Paso el nombre del usuario a Minisculas
    pNombreUsuario = pNombreUsuario.toLowerCase();
    //Valido que los campos no son vacios
    if (!campoVacio(pNombre) && (!campoVacio(pNombreUsuario))&& (!campoVacio(pPassword))) {
        //Validos si no existe el usuario en los arrays de DOCENTE y ALUMNO
        if (!existeUsuario(pNombreUsuario, arrayAlumnos) && !existeUsuario(pNombreUsuario, arrayDocentes)) {
            //Valido el password ingresado
            if (validarPassword(pPassword)) {
                //Guardo los parametros de la funcion en el arrayAlunos
                let nuevoDocente = new docente (pNombre , pNombreUsuario , pPassword);
                arrayDocentes.push(nuevoDocente);
            } else {
                datoValido = false;
                mensajeRegistroUsuario = "La contraseña debe tener un mínimo de 4 caracteres, con al menos una mayúscula, una minúscula y un número.";
            }
        } else {
            datoValido = false;
            mensajeRegistroUsuario = "Ya existe el usuario, intente con uno nuevo.";
        }
    } else {
        datoValido = false; 
        mensajeRegistroUsuario = "Todos los campos son obligatorios.";
    }

    return datoValido;
}

//Validar y carga datos ALUMNO- para ingresar datos nuevos o las precargas
function validarYCargarUsuarioAlumno (pNombre , pNombreUsuario , pPassword , pDocente , pNivel) {
    let datoValido = true ; 
    //Paso el nombre del usuario a Minisculas
    pNombreUsuario = pNombreUsuario.toLowerCase();
    //Valido que los campos no son vacios
    if (!campoVacio(pNombre) && (!campoVacio(pNombreUsuario))&& (!campoVacio(pPassword))) {
        //Validos si no existe el usuario en los arrays de DOCENTE y ALUMNO
        if (!existeUsuario( pNombreUsuario, arrayAlumnos) && !existeUsuario( pNombreUsuario, arrayDocentes)) {
            //Valido el password ingresado
            if (validarPassword(pPassword)) {
                //Validar si existe el DOCENTE seleccionado o precargado por el ALUMNO
                if(existeUsuario(pDocente,arrayDocentes)) {
                    //Valido si el nivel es INICIAL , INTERMEDIO y AVANZADO
                    if ( (pNivel=="Inicial")|| (pNivel=="Intermedio") || (pNivel=="Avanzado") ) {
                        //Guardo los parametros de la funcion en el arrayAlunos
                        let nuevoAlumno = new alumno (pNombre , pNombreUsuario , pPassword , pDocente , pNivel);
                        arrayAlumnos.push(nuevoAlumno);
                    }else {
                        datoValido = false;
                    }
                }else{
                    datoValido =false;
                    mensajeRegistroUsuario = "Favor seleccionar un docente de la lista.";
                }
            } else {
                datoValido = false;
                mensajeRegistroUsuario = "La contraseña debe tener un mínimo de 4 caracteres, con al menos una mayúscula, una minúscula y un número.";
            }
        } else {
            datoValido = false;
            mensajeRegistroUsuario = "Ya existe el usuario, intente con uno nuevo.";
        }
    } else {
        datoValido = false; 
        mensajeRegistroUsuario = "Todos los campos son obligatorios.";
    }

    return datoValido; 
}

//F04 - Asignación de Nivel a los Alumnos - Usuario: Docentes
function AsignarAlumnos (){
    Ocultar_pantallas();
    menu_principal_docente();
    document.querySelector("#AsignarAlumnos").style.display = "block";
    actualizarVistaListadoAlumnos();
}

// Llamado a la tabla y accion del boton guardar
function actualizarVistaListadoAlumnos() {
    let htmlListadoAlumnos = obtenerTablaListadoAlumnos();
    document.querySelector("#tablaAlumnos").innerHTML = htmlListadoAlumnos;
    //Creo los botones para guardar el nivel
    const botonesDeEdicion = document.querySelectorAll(".btnEditarAlumno");
    for (let i = 0; i < botonesDeEdicion.length; i++) {
        let botonActual = botonesDeEdicion[i];
        botonActual.addEventListener("click", botonDeEdicionDeAlumnoFueClickeado);
    }
}

// Tabla alumnos - nivel - opcion guardar
function obtenerTablaListadoAlumnos() {
    let htmlListadoAlumnos = ``;

    //Armado de la tabla
    if (arrayAlumnos.length === 0) {
        htmlListadoAlumnos = 'No existen alumnos registrados';
    } else {
        htmlListadoAlumnos +=    `<table border="1">`
        htmlListadoAlumnos +=    `
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Nivel</th>
                                        <th>Acciones</th>
                                    </tr>
                                   `;
        //Recorre array alumnos
        for (let i = 0; i < arrayAlumnos.length; i++) {
            let alumnoActual = arrayAlumnos[i];
            if (usuarioActivo.user == alumnoActual.docente) {
                //Verifico que el alumno pertenece al array alumnos
                let posicion = verificarPosicionUsuario(alumnoActual.user, arrayAlumnos);
                //Verifico el nivel del alumno encontrado
                let nivel = verificarNivelAlumno(posicion , arrayAlumnos );
                let selectNivel = "";
                //Verifico que el nivel del alumno no sea "Avanzado"
                if (alumnoActual.puedeSerEditado()) {
                    selectNivel = obtenerOpcionesNivelAlumno(alumnoActual);
                } else {
                    selectNivel = nivel ; 
                }             

                htmlListadoAlumnos += `
                <tr>
                    <td>${alumnoActual.nombre}</td>
                    <td>${selectNivel}</td>
                    <td>${GenerarBotonGuardarAsignarNivel(alumnoActual)}</td>
                    
                </tr>
                `;
            }
               
        }
        htmlListadoAlumnos +=    `</table>`
    }

    return htmlListadoAlumnos;
}

// Habilita boton guardar si nivel alumno es distinto de Avanzado y deshabilita cuando es Avanzado
function GenerarBotonGuardarAsignarNivel(pAlumnoActual) {
    let htmlboton = "";
    if (pAlumnoActual.puedeSerEditado()) {
        htmlboton += `<input class="btnEditarAlumno" alumno-user="${pAlumnoActual.user}" type="button" id="btnEditarAlumno_${pAlumnoActual.user}" value="Guardar">
        `;
    } else {
        htmlboton += `<input type="button" id="btnEditarAlumno_${pAlumnoActual.user}" value="Guardar" disabled >`;
    }
    
    return htmlboton ;
}

//Obtiene las opciones posibles segun el nivel del alumno para combo de niveles
function obtenerOpcionesNivelAlumno(pAlumnoActual) {
    let opcionSeleccionada = pAlumnoActual.nivel ; 
    let htmlOpciones = `<select id="comboNivelAlumno_${pAlumnoActual.user}">`;
    let posicion = 0 ;
    //Recorre array con niveles
    for (let i = 0; i < arrayNivelAlumno.length; i++) {
        let nivelAlumnoActual = arrayNivelAlumno[i];
        //Guarda la posicion del nivel del alumno
        if(opcionSeleccionada == nivelAlumnoActual.nombre){
            posicion = i ; 
        }
        
    }
    //Recorre el array de niveles con la posicion obtenida
    for(let i = posicion ; i < arrayNivelAlumno.length; i++) {
        let nivelAlumnoActual = arrayNivelAlumno[i];
        //Para el nivel del alumno genera un option con el nombre del nivel
        if (opcionSeleccionada === nivelAlumnoActual.nombre) {
            htmlOpciones += `<option value="${nivelAlumnoActual.nombre}" selected>${nivelAlumnoActual.nombre}</option>`;
        } else {
            htmlOpciones += `<option value="${nivelAlumnoActual.nombre}">${nivelAlumnoActual.nombre}</option>`;
        }
    }

    htmlOpciones +=`</select>`;

    return htmlOpciones;
}

function botonDeEdicionDeAlumnoFueClickeado() {
    const userAlumnoClickeado = this.getAttribute("alumno-user");
    //Guardo el atributo alumno-user para saber el alumno que fue clickeado
    const nivelSeleccionado = document.querySelector(`#comboNivelAlumno_${userAlumnoClickeado}`).value;
    //Guardo el valor del nivel seleccionado en el combo y se guarda en el alumno
    let alumno = arrayAlumnos[verificarPosicionUsuario(userAlumnoClickeado,arrayAlumnos)];
    alumno.nivel = nivelSeleccionado;
    actualizarVistaListadoAlumnos();
}

//F05 - Ingreso de Ejercicios - Usuario: Docentes

//Funcion que da accion al boton del menu docente para acceder al ingreso de ejercicios
function IngresoEjercicios (){
    if (document.querySelector("#IngresoEjercicios").style.display == 'none') {
        vaciarCamposIngresoEjercicios();
    }
    document.querySelector('#MensajeIngresoEjercicioDocente').innerHTML = '';
    Ocultar_pantallas();
    menu_principal_docente();
    document.querySelector("#IngresoEjercicios").style.display = "block";
}

//Funcion que da accion al boton para ingresar un ejercicio una vez ingresados los datos
function GuardarIngresoEjercicios (){
    IngresoEjercicios();
    ingresarEjercicioDocente();
}

//Funcion que toma los datos ingresados por un docente para subir un ejercicio al sistema
function ingresarEjercicioDocente() {
    //Capturo los datos ingresados por el usuario
    const nivelEjercicioIngresado = document.querySelector("#asignarNivelEjercicio").value;
    const tituloIngresado = document.querySelector("#tituloEjercicioDocenteAlumno").value;
    const descripcionIngresada = document.querySelector("#descripcionEjercicioDocenteAlumno").value;
    const imagenIngresada = document.querySelector("#imagenEjercicioaIngresar").value;
    //El nombre de la imagen en un principio empieza con los caracteres 'c:\fakepath\', le saco esos caracteres usando una funcion y me guardo solo el nombre de la imagen
    let nombreImagen = `${sacarFakepathImagen(imagenIngresada)}`;
    //Llamo a la funcion que se encargara de validar y subir el ejercicio si estan correctos los daots ingresados
    validarYCargarEjercicioIngresado(usuarioActivo.user,nivelEjercicioIngresado,tituloIngresado,descripcionIngresada,nombreImagen);
    //Muestro el mensaje que se generara en la funcion anterior
    document.querySelector('#MensajeIngresoEjercicioDocente').innerHTML = mensajeEjercicioIngresadoDocente;
}

//Validar y cargar Ejercicio ingresado por parte DOCENTE - ingresados y precargados
function validarYCargarEjercicioIngresado(docente,nivel,titulo,descripcion,rutaEjercicio) {
    //Valido que todos los campos esten completos
    if (nivel !='' && !campoVacio(titulo) && !campoVacio(descripcion) && !campoVacio(rutaEjercicio) && !campoVacio(docente)) {
        //Valido que exista el docente en el sistema
        if (existeUsuario(docente,arrayDocentes)) {
            //Sumo la cantidad total de caracteres entre el titulo y la descripcion ingresados y valido que no sea menor a 20 ni supere los 200 caracteres
            let cantidadCaracteresTotal = titulo.length + descripcion.length;
            if(cantidadCaracteresTotal > 20 && cantidadCaracteresTotal < 200) {
                //Valido que el formato del archivo sea de una imagen
                if (verificarExtensionArchivo(rutaEjercicio) == 'png') {
                    //Si todo esta correcto, creo el ejercicio con los datos ingresados y lo agrego al array de ejercicios ingresados
                    let nuevoEjercicio = new ejercicio(docente,nivel,titulo,descripcion,rutaEjercicio);
                    ejerciciosIngresadosPorDocente.push(nuevoEjercicio);
                    mensajeEjercicioIngresadoDocente = "Se ha guardado con exito el ejercicio planteado";
                    //Borrar los campos ingresados por el usuario 
                    vaciarCamposIngresoEjercicios();
                } else {
                    mensajeEjercicioIngresadoDocente = 'El archivo debe ser una imagen.';
                }
            } else {
                mensajeEjercicioIngresadoDocente = 'La cantidad de caracteres entre el título y la descripción no puede ser menor a 20 ni mayor a 200.';
            }
        } else {
            mensajeEjercicioIngresadoDocente = "El docente no existe.";
        }
    } else {
        mensajeEjercicioIngresadoDocente = 'Todos los campos son obligatorios.';
    }
}

//Esta funcion vacia los campos de Ingreso de Ejercicio de docente
function vaciarCamposIngresoEjercicios() {
    document.querySelector("#asignarNivelEjercicio").value = "";
    document.querySelector("#tituloEjercicioDocenteAlumno").value = "";
    document.querySelector("#descripcionEjercicioDocenteAlumno").value = "";
    document.querySelector("#imagenEjercicioaIngresar").value = "";
}


//Esta funcion remueve los caracteres 'c:\fakepath\' del nombre de un archivo, para solo obtener el nombre del mismo
function sacarFakepathImagen(rutaImagen) {
    let nombreImagen = '';
    for (let i = 12; i<rutaImagen.length;i++) {
        nombreImagen += rutaImagen[i];
    }
    return nombreImagen;
}

//Esta funcion devuelve los ultimos 3 caracteres del nombre de un achivo, se utiliza para obtener la extension de un archivo
function verificarExtensionArchivo(archivo) {
    let extensionArchivo = archivo[archivo.length-3]+archivo[archivo.length-2]+archivo[archivo.length-1];
    return extensionArchivo;
}

//F06 - Devolución de los Ejercicios Entregados - Usuario: Docentes
function DevolucionEjercicios() {
    //Vacio el el div con Id mensajeDevolucionEjercicios a texto vacio
    document.querySelector("#mensajeDevolucionEjercicios").innerHTML ='';
    Ocultar_pantallas();
    menu_principal_docente();
    //Mostrar la pantalla devolucion de ejercicios
    document.querySelector("#DevolucionEjercicios").style.display = "block";
    GenerarComboAlumnos();
    

}

//Funcion para verificar que no se repitan
function NombreAlumnosSinRepetir(texto, array){
    let resultado = true ; 
    let flagIgual = true ; 
    let i = 0;
    while (i<array.length && flagIgual) {
        let nombre = array[i]; 
        if (texto == nombre){
            flagIgual = false;
        }
        i++;
    }
    resultado = flagIgual;
    return resultado;
}

//Generar un combo desplegables en la seccion Devolucion de ejercicios
function GenerarComboAlumnos() {
    //Al inicar arranca con el <option> vacio
    let opciones = '<option value="">--Seleccione--</option>';
    //Array para acumular nombres NO repetidos
    let nombreChequeo = [];
    //Recorrer el array EjerciciosEntregadosAlumnos
    for (let i = 0; i < EjerciciosEntregadosAlumnos.length; i++) {

        const Ejercicio = EjerciciosEntregadosAlumnos[i];
        //Buscar la posicion en el array Alumnos 
        let posicionAlumno = verificarPosicionUsuario(Ejercicio.nombreAlumno,arrayAlumnos);
        //Buscar el nombre del ALUMNO dentro a partir de la posicion de este
        let alumno = verificarNombreAlumno(posicionAlumno,arrayAlumnos);
        //Verifico si el nombre del usuario activo esta presente en el array de EjerciciosEntregadosAlumnos, verifico que no tenga una entrega y que comparo que no se repitan los nombre del alumno -- SOLO VOY A MOSTRAR LOS NOMBRES SIN REPETIR
        if (usuarioActivo.user == Ejercicio.docente && NombreAlumnosSinRepetir(alumno, nombreChequeo) && (!ExisteDatosEjercicioCorregidos(Ejercicio.idEjercicio,Ejercicio.docente,Ejercicio.nivel,Ejercicio.titulo,Ejercicio.nombreAlumno))) {
            //Guardo el nombre del ALumno sin repetir
            nombreChequeo.push(alumno);
            //Genero el desplegable para cada NOMBRE de Alumno
            opciones += `<option value="${Ejercicio.nombreAlumno}">${alumno}</option>`;          
        }
    }
    //Devolver el desplegable de opciones con los nombres de los ALUMNOS
    document.querySelector("#asignarAlumnosDevolucion").innerHTML =opciones;
}

//Genera un combo de los ejercicios entregados para hacer la devolucion
function GenerarComboEjercicios() {
    //Habilito la vista del combo a mostrar en pantalla
    document.querySelector("#comboEjercicios").style.display = "block";
    //Dato del nombre del alumno que sale del html
    let nombre = document.querySelector("#asignarAlumnosDevolucion").value ; 
    //Al inicar arranca con el <option> vacio
    let opciones = '<option value="">--Seleccione--</option>';
    //Buscar dentro del array EjerciciosEntregadosAlumnos
    for (let i = 0; i < EjerciciosEntregadosAlumnos.length; i++) {
        
        const Ejercicio = EjerciciosEntregadosAlumnos[i];
        //Verifico si el nombre del usuario activo esta presente en el array de array EjerciciosEntregadosAlumnos, verifico que no tenga una entrega -- SOLO VOY A MOSTRAR LOS EJERCICIOS para el Alumno seleccionado
        if((Ejercicio.nombreAlumno == nombre) && (!ExisteDatosEjercicioCorregidos(Ejercicio.idEjercicio,Ejercicio.docente,Ejercicio.nivel,Ejercicio.titulo,Ejercicio.nombreAlumno))) {
            //Genera el combo con la Id del Ejercicio y muestra el titulo del Ejercicio 
            opciones += `<option value="${Ejercicio.idEjercicio}">${Ejercicio.titulo}</option>`;
        }
        
    }
    document.querySelector("#seleccionarEjercicioSinDevolucion").innerHTML =opciones;
}



//Funcion para mostrar los ejercicios planteados dentro de la pantalla Devolicion
function VerEjerciciosParaDevolucion () {

    let ver = "" ; 
    let nombre = document.querySelector("#asignarAlumnosDevolucion").value ;
    let datoIdEjercicio = document.querySelector("#seleccionarEjercicioSinDevolucion").value ;
    // Recorro el array de ejercicios entregados
    if (EjerciciosEntregadosAlumnos.length!=0) {
        //Verifico que los campos no esten vacios
        if ((!campoVacio(nombre))&&(!campoVacio(datoIdEjercicio))) {
            //Llamo a una funcion que retorna los datos de los ejercicios de los alumnos entregados
            ver = Buscar_y_mostrar_ejercicio(datoIdEjercicio);
        } else {
            //Mensajes 
            ver = "Debe seleccionar un alumno y un ejercicio";
        }
    } else {
        ver = "De momento, no hay ningún ejercicio nuevo";
    }

    document.querySelector("#VerEjercicioEntregadoParaCorreccion").innerHTML = ver ;

}
//Funcion para buscar y devolver el audio entregado por el alumno
function Buscar_y_mostrar_ejercicio(pIdEjercicio){
    let resultado = "";
    for(let i=0;i<EjerciciosEntregadosAlumnos.length;i++){
        const entrega = EjerciciosEntregadosAlumnos[i];
        if((entrega.idEjercicio==pIdEjercicio)) {
            resultado = `<h3>${entrega.titulo}</h3>
            <audio controls>
            <source src="audio/${entrega.audio}" type="audio/mp3">
            </audio>`;
        }
    }
    return resultado;
}

function IdEjercicioDevolverNombreAlumno (idEjercicio){
    let resultado = " " ;
    for (let i=0 ; i<EjerciciosEntregadosAlumnos.length ; i++){
        if (idEjercicio == EjerciciosEntregadosAlumnos[i].id) {
            resultado = EjerciciosEntregadosAlumnos[i].nombreAlumno;
        }
    }
    return resultado
}

function HacerDevolucionEjercicios(){

    let mensaje = "";
    let Guardado = false;
    //Adquirir valores del html
    const nombre = document.querySelector("#asignarAlumnosDevolucion").value ;
    const datoIdEjercicioIngresado = document.querySelector("#seleccionarEjercicioSinDevolucion").value ;
    const puntajeIngresado = document.querySelector("#puntajeEjercicio").value ;
    const comentarioIngresado = document.querySelector("#comentarioEjercicio").value ;
    //Verifico que los campos no esten vacios
    if (!campoVacio(puntajeIngresado)&&(!campoVacio(datoIdEjercicioIngresado))&&(!campoVacio(nombre))) {
        //Verifico que puntajeIngresado sea un numero
        if(!isNaN(puntajeIngresado)) {
            let puntajeNumerico = parseInt(puntajeIngresado);
            //Verifico el valor numero de puntaje dentre de 1 a 100
            if ((puntajeNumerico>=1)&&(puntajeNumerico<=100)){

                let datoIdEjercicio = parseInt(datoIdEjercicioIngresado);
                let puntaje = parseInt(puntajeIngresado) ;
                let nombreDocente = usuarioActivo.user;
                let nombreAlumno = nombre;
                let nivel = IdEjercicioDevolverNivel(datoIdEjercicio) ; 
                let tituloEjercicio = IdEjercicioDevolverTitulo(datoIdEjercicio); 
                //Validar y cargar el ejercicio corregido con los paramentro definidos previamente 
                if (validarYCargarEjercicioCorregido(datoIdEjercicio,nombreDocente,nivel,tituloEjercicio,nombreAlumno,puntaje,comentarioIngresado)) {
                    mensaje = "Se he realizado con exito la devolucion";
                    Guardado = true ; 
                } else {
                    mensaje = "No fue posible guardar los datos";
                }
            } else {
                mensaje = "Favor ingresar un puntaje dentro de 1 a 100";
            }
        } else { 
            mensaje = "Favor ingresar un valor numérico" ;
        }
        
    } else {
        mensaje = "Favor ingresar valor en todos los campos y seleccionar un alumno";
    }

    //Luego de guardar con exito genera Combos vacios para empezar de nuevo
    if (Guardado){
        
        document.querySelector("#VerEjercicioEntregadoParaCorreccion").innerHTML = "";
        DevolucionEjercicios();
        
        console.log(EjerciciosEntregadosAlumnos);
        console.log(arrayDevolucionEjercicios);

    }
    
    document.querySelector("#mensajeDevolucionEjercicios").innerHTML = mensaje ;
    document.querySelector("#puntajeEjercicio").value ="";
    document.querySelector("#comentarioEjercicio").value = "";
    
}

//Validar y cargar ejercicio corregido por DOCENTE - para ingresar y precargar ejercicios. 
function validarYCargarEjercicioCorregido(paramIdEjercicio, paramDocente,paramNivel,paramTitulo,paramNombreAlumno, paramPuntaje , paramComentario) {
    
    let datoValido = true ;
    //Verifico que todos los campos no esten vacios
    if ((paramIdEjercicio!=0) && (!campoVacio(paramDocente)) && (!campoVacio(paramNivel)) && (!campoVacio(paramNombreAlumno))&& (!campoVacio(paramTitulo))) {
        //Verifico que paramEjercicio y paramPuntaje sean numericos
        if((!isNaN(paramIdEjercicio))&&(!isNaN(paramPuntaje))) {
            //Verificar si existe el Alumno
            if (existeUsuario(paramNombreAlumno,arrayAlumnos)) {
                //Verifico si previamente tiene ejercicio entregado
                if(ExisteDatosEjercicioEntregadosPorAlumno (paramIdEjercicio,paramDocente, paramNivel, paramTitulo , paramNombreAlumno)){
                    //Comparo que no tenga un ejercicios con devolucion previame
                    if (!ExisteDatosEjercicioCorregidos (paramIdEjercicio,paramDocente, paramNivel, paramTitulo , paramNombreAlumno)) {
                        //Guardar la devolciomn del ejercicio con devolucion
                        let datosDevolucion = new DevolucionEjerciciosAlumnos (paramIdEjercicio, paramDocente,paramNivel, paramTitulo ,paramNombreAlumno, paramPuntaje , paramComentario) ;
                        arrayDevolucionEjercicios.push(datosDevolucion);
                    } else {
                        datoValido = false ; 
                    } 
                } else { 
                    datoValido = false ; 
                }
            } else { 
                datoValido = false ; 
            }
            
        } else {
            datoValido = false ; 
        }
    } else { 
        datoValido = false ;
    }

    return datoValido ; 
}

//Funcion para verificar si existe ejercicios entregados por el docente
function ExisteDatosEjercicioEntregadosPorAlumno (paramIdEjercicio,paramDocente, paramNivel, paramTitulo , paramNombreAlumno) { 
	let datoValido = false ; 
	let i = 0 ; 
    let flagIgual = false ;

	while(i<EjerciciosEntregadosAlumnos.length && !flagIgual) {
        const Ejercicio = EjerciciosEntregadosAlumnos[i];
		if((Ejercicio.idEjercicio == paramIdEjercicio) && (Ejercicio.docente == paramDocente) && (Ejercicio.nivel == paramNivel) && (Ejercicio.titulo == paramTitulo) && (Ejercicio.nombreAlumno == paramNombreAlumno )) {
			flagIgual = true ;
		}
        i++;
	}

	datoValido = flagIgual;

	return datoValido ;
}

//Funcion para verificar si exsite un ejercicio con devolucion
function ExisteDatosEjercicioCorregidos (paramIdEjercicio,paramDocente, paramNivel, paramTitulo , paramNombreAlumno) { 
	let datoValido = false ; 
	let i = 0 ; 
    let flagIgual = false ;

	while(i<arrayDevolucionEjercicios.length && !flagIgual) {
        const Ejercicio = arrayDevolucionEjercicios[i];
        //Comparo en simultaneo todos los parametros de la funcion
		if((Ejercicio.idEjercicio === paramIdEjercicio) &&(Ejercicio.docente == paramDocente) && (Ejercicio.nivel == paramNivel) &&(Ejercicio.titulo == paramTitulo) && (Ejercicio.nombreAlumno ==paramNombreAlumno )) {
			flagIgual = true ;
		}
        i++;
	}

	datoValido = flagIgual;

	return datoValido ;
}

//F07 - Ver Lista de Entregas - Usuario: Docentes

function VerListaEntregas (){
    Ocultar_pantallas();
    menu_principal_docente();
    document.querySelector("#VerListaEntregas").style.display = "block";
    
    GenerarTablaListaEntregas();
}

//Funcion para generar la tabla de los ejercicios entregados por los alumnos y ver si tienen devolciion
function GenerarTablaListaEntregas () {
    let resultado = ""; 
    //Verifico que si tiene ejercicios entregados por sus alumnos
    if (totalEjerciciosEntregadosParaUnDocente(usuarioActivo.user,EjerciciosEntregadosAlumnos)>0)  {
        //Genero tabla
        resultado = `<table border="2"> 
                    <tbody>
                    <thead>
                        <tr>
                            <th><b>Alumno</b></th>
                            <th><b>Ejercicio</b></th>
                            <th><b>Nivel</b></th>
                            <th><b>Devolucion</b></th>
                        </tr>`
        for(let i=0 ; i<EjerciciosEntregadosAlumnos.length;i++){
            const Ejercicio = EjerciciosEntregadosAlumnos[i];
            if(usuarioActivo.user == Ejercicio.docente) {
                
                let id = Ejercicio.idEjercicio ; 
                let nombreUsuarioAlumno = Ejercicio.nombreAlumno ; 
                let posicionAlumno = verificarPosicionUsuario(nombreUsuarioAlumno,arrayAlumnos);
                let alumno = verificarNombreAlumno(posicionAlumno,arrayAlumnos);
                let tituloEjercicio = Ejercicio.titulo ; 
                let nivel = Ejercicio.nivel ; 
                let devolucion = "NO" ;
            
               //Compara los arrays de Ejercicios Entregados y Array Devolucion Ejercicios
                if(ExisteDatosEjercicioCorregidos (Ejercicio.idEjercicio,Ejercicio.docente, Ejercicio.nivel, Ejercicio.titulo , Ejercicio.nombreAlumno)) {
                    devolucion = "SI";
                }
                resultado +=`<tr>
                <td>${alumno}</td>
                <td>${tituloEjercicio}</td>
                <td>${nivel}</td>
                <td>${devolucion}</td>
                </tr>`

            }
        }
        resultado += `</thead></tbody></table>`
    } else{
        //Muestra el mensaje que no hay devoluciones
        resultado = "No se han realizado entregas por parte de los alumnos";
    }
    //Devuelve mensaje al final
    document.querySelector("#VerTablaListadeEntregas").innerHTML=resultado ;
    }

//F08 - Visualizar información estadística - Usuario: Docentes

//Funcion que da accion al boton del menu docente para acceder a las estadisticas docente
function VisualizarInformacionEstadisticaDOCENTE (){
    VerEstadisticasDocente();
    Ocultar_pantallas();
    menu_principal_docente();
    document.querySelector("#VisualizarInformacionEstadisticaDOCENTE").style.display = "block";
}

//Funcion que muestra las primeras 2 estadisticas y genera el combo de alumnos
function VerEstadisticasDocente () {
    let resultado = '';
    //usando una funcion, obtengo un array con los alumnos con mas ejercicios hechos
    let alumnosConMasEjercicios = verificarAlumnosMasEjerciciosHechos(usuarioActivo.user,arrayAlumnos);
    //usando una funcion, obtengo los nombres de los alumnos del array que obtuve antes
    let nombresAlumnosConMasEjercicios = mostrarAlumnosMasEjerciciosHechos(alumnosConMasEjercicios);
    //usando una funcion, calculo el total de ejercicios que se esntregaron para ese docente
    let totalEJerciciosEntregados = totalEjerciciosEntregadosParaUnDocente(usuarioActivo.user,EjerciciosEntregadosAlumnos);
    //usando una funcion, genero el combo de alumnos y un boton para mostrar las siguientes 2 estadisticas
    let contenidoHTMLComboEstudiantes = generarHTMLSeleccionarEstudiante(usuarioActivo.user,arrayAlumnos);
    //Guardo todo en una variable y la muestro al usuario
    resultado += `El o los alumnos con más ejercicios entregados son ${nombresAlumnosConMasEjercicios}.<br><br>`;
    resultado += `El total de Ejercicios que se han entregado para usted es ${totalEJerciciosEntregados}.<br><br>`;
    resultado += contenidoHTMLComboEstudiantes;
    document.querySelector('#EstadisticasDocente').innerHTML = resultado;
    //Creo un evento de click para el boton que se genero antes
    document.querySelector('#btnMostrarEstadisticasDeAlumnoSeleccionado').addEventListener('click', mostrarEstdisticasComboAlumnos);
}

//Funcion que da accion al boton generado en la funcion contenidoHTMLComboEstudiantes
function mostrarEstdisticasComboAlumnos() {
    let resultado = '';
    //Otengo el usuario del alumno (value) seleccionado en el combo
    let alumnoSeleccionado = document.querySelector('#comboAlumnosEstadisticaDocente').value;
    //Valido que se haya seleccionado un alumno de la lista
    if (alumnoSeleccionado != '') {
        //usando una funcion, obtengo la posicion del alumno en el array de alumnos
        let posicionAlumnoSeleccionado = verificarPosicionUsuario(alumnoSeleccionado,arrayAlumnos);
        //usando una funcion, obtengo el nivel del alumno seleccionado
        let nivelAlumnoSeleccionado = verificarNivelAlumno(posicionAlumnoSeleccionado,arrayAlumnos);
        //usando una funcion, obtengo el nombre del alumno seleccionado
        let nombreAlumnoSeleccionado = verificarNombreAlumno(posicionAlumnoSeleccionado,arrayAlumnos);
        //usando una funcion, obtengo el total de ejercicios que el docente actual genero para un nivel especifico
        let ejerciciosPlanteadosParaNivelDeAlumno = verificarEjerciciosPlanteadosNivel(usuarioActivo.user,nivelAlumnoSeleccionado,ejerciciosIngresadosPorDocente);
        //usando una funcion, obtengo la cantidad de ejercicios que el alumno seleccionado entrego para su nivel
        let ejerciciosResueltosAlumnoSeleccionadoParaNivel = verificarEjerciciosResueltosAlumno(posicionAlumnoSeleccionado,arrayAlumnos);
        //Guardo todo en una variable para mostrarla al usuario
        resultado += `El total de ejercicios planteados para el nivel actual de ${nombreAlumnoSeleccionado} es ${ejerciciosPlanteadosParaNivelDeAlumno}.<br><br>`;
        resultado += `La cantidad de ejericios que ha entrgado ${nombreAlumnoSeleccionado} para su nivel es ${ejerciciosResueltosAlumnoSeleccionadoParaNivel}.<br><br>`;
    } else {
        resultado = 'Debe seleccionar a un alumno.'
    }
    document.querySelector('#EstadisticasAlumnoSeleccionado').innerHTML = resultado;
}

//Funcion que devuelve un array con los nombres de los alumnos que mas ejercicios entregaron
function verificarAlumnosMasEjerciciosHechos(userDocente,listaAlumnos) {
    let AlumnosConMasEjerciciosHechos = [];
    for (let i = 0; i<listaAlumnos.length; i++) {
        //Recorro el array de alumnos y valido que el docente del alumno sea el docente que se pasa por parametro
        if (listaAlumnos[i].docente == userDocente) {
            //Cuento el largo del array de ejercicios entregados del alumno, el array de ejercicios entregados es una propiedad de clase de cada alumno
            let ejerciciosHechosPorAlumno = listaAlumnos[i].ArrayEjerciciosResueltos.length;
            //Si existen mas de un alumno que entrego el maximo de ejercicios, agrego todos sus nombres al array
            if (ejerciciosHechosPorAlumno == MaxEjerciciosHechos) {
                AlumnosConMasEjerciciosHechos.push(listaAlumnos[i].nombre);
            }
            //Si solo un alumno tiene el maximo de ejercicios entregados, agrego solo su nombre al array y actualizo el maximo de ejercicios entregados
            if (ejerciciosHechosPorAlumno > MaxEjerciciosHechos) {
                AlumnosConMasEjerciciosHechos = [listaAlumnos[i].nombre];
                MaxEjerciciosHechos = ejerciciosHechosPorAlumno;
            }
        }
    }
    return AlumnosConMasEjerciciosHechos;
}


//Funcion que recorre un array de nombres y devuelve todos los nombres como una cadena de texto
function mostrarAlumnosMasEjerciciosHechos(listaAlumnosConMasEj) {
    resultado = '';
    for (let i = 0; i<listaAlumnosConMasEj.length; i++) {
        //Si es el penultimo nombre, a continuacion del nombre agrego una Y
        if (i == listaAlumnosConMasEj.length -2) {
            resultado += listaAlumnosConMasEj[i] + ' y ';
        //Si es el ultimo nombre, a continucacion del nombre agrego un punto
        } else if (i == listaAlumnosConMasEj.length -1) {
            resultado += listaAlumnosConMasEj[i];
        //Separo los nombres con coma
        } else {
            resultado += listaAlumnosConMasEj[i] + ', ';
        }
    }
    return resultado;
}

//Funcion que devuelve todos los ejercicios que se han entregado para un docente
function totalEjerciciosEntregadosParaUnDocente(userDocente,listaEjercicios) {
    let total = 0;
    for (let i = 0; i<listaEjercicios.length; i++) {
        //Valido que el ejercicio entregado corresponda a ese docente
        if (listaEjercicios[i].docente == userDocente) {
            total += 1;
        }
    }
    return total;
}

//Funcion que genera el combo de alumnos que se mostrara en la estadistica docente, y un boton para mostrar las estadisticas del alumno seleccionado
function generarHTMLSeleccionarEstudiante(userDocente,listaAlumnos) {
    //Inicio el HTML del combo, le doy una label, y un primer valor por defecto 'Seleccione...'
    let infoHTMLSeleccionarEstudiante = '<label for="comboAlumnosEstadisticaDocente">Seleccione estudiante:</label><br>';
    infoHTMLSeleccionarEstudiante += '<select name="alumnosEstadisticaDocente" id="comboAlumnosEstadisticaDocente">'
    infoHTMLSeleccionarEstudiante += `<option value=''>Seleccione...</option>`;
    //Recorro la lista de alumnos y valido si el alumno corresponde al docente actual...
    for (let i = 0; i<listaAlumnos.length; i++) {
        if (listaAlumnos[i].docente == userDocente) {
            //...si es así, creo una nueva opcion en el combo cuyo value sera el usuario del alumno y se mostrara el nombre del alumno en el combo 
            infoHTMLSeleccionarEstudiante += `<option value=${listaAlumnos[i].user}>${listaAlumnos[i].nombre}</option>`;
        }
    }
    //Cierro el combo
    infoHTMLSeleccionarEstudiante += '</select><br><br>'
    //Creo el boton que se utilizara para mostrar las estadisticas del alumno
    infoHTMLSeleccionarEstudiante += '<input type="button" id="btnMostrarEstadisticasDeAlumnoSeleccionado" value="Mostrar Estadísticas de Alumno"><br><br>';
    //Creo el div en el cual mostrare las estadisticas del alumno
    infoHTMLSeleccionarEstudiante += '<div id="EstadisticasAlumnoSeleccionado"></div>'
    return infoHTMLSeleccionarEstudiante;
}

//Funcion que usando la posicion de un alumno en un array, devuelve el nivel del mismo
function verificarNivelAlumno (posicionAlumno,listaAlumnos) {
    let nivelAlumno = listaAlumnos[posicionAlumno].nivel;
    return nivelAlumno;
}

//Funcion que usando la posicion de un alumno en un array, devuelve el nombre del mismo
function verificarNombreAlumno (posicionAlumno,listaAlumnos) {
    let nombreAlumno = listaAlumnos[posicionAlumno].nombre;
    return nombreAlumno;
}

//Funcion que devuelve la cantidad de ejercicios que un docente ingreso para un nivel especifico
function verificarEjerciciosPlanteadosNivel (docente,nivel,listaEjercicios) {
    let total = 0;
    for (let i = 0; i<listaEjercicios.length; i++) {
        //Verifico quie el ejercicio corresponda a el docente y al nivel
        if (nivel == listaEjercicios[i].nivel && docente == listaEjercicios[i].docente) {
            total += 1;
        }
    }
    return total;
}

//Funcion que devuelve la cantidad de ejercicios que un alumno entrego para su nivel
function verificarEjerciciosResueltosAlumno(posicionAlumno,listaAlumnos) {
    let total = 0;
    //Recorro el array propiedad del alumno de ejercicios entregados
    for (let i = 0; i<listaAlumnos[posicionAlumno].ArrayEjerciciosResueltos.length; i++) {
        //Guardo el nivel del ejercicio actual
        let nivelEjercicioResuelto = listaAlumnos[posicionAlumno].ArrayEjerciciosResueltos[i].nivel;
        //Guardo el nivel actual del alumno
        let nivelAlumno = listaAlumnos[posicionAlumno].nivel;
        //Verifico que los niveles sean los mismos
        if (nivelEjercicioResuelto == nivelAlumno) {
            total += 1;
        }
    }
    return total;
}

//F09 - Entrega tarea - Usuario: Alumnos

function EntregarTareas (){
    document.querySelector("#VerEjercicioPlanteado").innerHTML = '';
    Ocultar_pantallas();
    menu_principal_alumnos();
    GenerarComboEjerciciosPlanteadosPorDocentes();
    document.querySelector("#mensajeEntregaTarea").innerHTML = "";
    document.querySelector("#EntregarTareas").style.display = "block";  
}

function GuardarEnviarTarea(){
    IngresarEnviarTarea ();
}

//Funcion para verificar si el ejercicio fue entregado
function VerificarSiEjercicioFueEntregado(idEjercicio){
    let resultado = false ;
    let flagIgual = false ;
    let i = 0 ; 
    while (i<EjerciciosEntregadosAlumnos.length && !flagIgual) {
        if (idEjercicio===EjerciciosEntregadosAlumnos[i].idEjercicio) {
            flagIgual = true
        }

        i++;
    }

    resultado = flagIgual ; 

    return resultado ;
}

//Funcion para generar combo de ejerciicos planteados por el docente
function GenerarComboEjerciciosPlanteadosPorDocentes (){
    let opciones = '<option value="">--Seleccione--</option>';
    for (let i=0 ; i<ejerciciosIngresadosPorDocente.length;i++){
        const Ejercicio = ejerciciosIngresadosPorDocente[i]; 
        //Verifico que el usuario ALUMNO solo tenga el DOCENTE y NIVEL CORRESPONDIENTE 
        if ((!ExisteDatosEjercicioEntregadosPorAlumno(Ejercicio.id,Ejercicio.docente,Ejercicio.nivel,Ejercicio.titulo,usuarioActivo.user))&&usuarioActivo.docente==Ejercicio.docente && usuarioActivo.nivel==Ejercicio.nivel) {
            opciones += `<option value="${ejerciciosIngresadosPorDocente[i].id}">${ejerciciosIngresadosPorDocente[i].titulo}</option>`;
        }
    }
    //Mensaje a mostrar al final
    document.querySelector("#seleccionEjerciciosAlumno").innerHTML = opciones ;
}

function VerEntregarTareas(){
    let resultado = "";

    const EjercicioSeleccionadoOpciones =document.querySelector("#seleccionEjerciciosAlumno").value ;

    let EjercicioSeleccionado = parseInt (EjercicioSeleccionadoOpciones);
    //Genera una vista de los ejercicios planteados por el docente
        for(let i=0;i<ejerciciosIngresadosPorDocente.length;i++){
            const ejercicioPlanteado = ejerciciosIngresadosPorDocente[i];
            if((ejercicioPlanteado.id==EjercicioSeleccionado)) {
                resultado = `<h3>${ejercicioPlanteado.titulo}</h3>
                <p><b>Nivel : </b> ${ejercicioPlanteado.nivel}</p>
                <p><b>Descripcion : </b></p>
                <p>${ejercicioPlanteado.descripcion}</p>
                <img src="img/${ejercicioPlanteado.imagen}" >
                </img>`;
            }
        }

    document.querySelector("#VerEjercicioPlanteado").innerHTML = resultado ; 
    document.querySelector("#mensajeEntregaTarea").innerHTML = "" ; 
}

//Validar y cargar los datos de los ejercicios entregados por el ALUMNO - para ingresar y precargar datos
function validarYCargarEjercicioEntregado(paramIdEjercicio, paramDocente,paramNivel, paramTitulo ,paramNombreAlumno , paramAudio) {
    let datoValido = true ; 
    //Verifico que los campos si estan vacios
    if ((paramIdEjercicio!=0) && (!campoVacio(paramDocente)) && (!campoVacio(paramNivel)) && (!campoVacio(paramNombreAlumno))&& (!campoVacio(paramTitulo))&&(!campoVacio(paramAudio))) {
        //Comprobar si existe el alumno en el array de ALumnos
        if (existeUsuario(paramNombreAlumno , arrayAlumnos)) {
            //Verificar si hay un ejercicio planteado
            if (ExisteDatosEjercicioIngresadoPorDocente (paramIdEjercicio,paramDocente, paramNivel, paramTitulo )) {
                //Verifico si no hay un ejercicio entregado con estos parametros
                if (!ExisteDatosEjercicioEntregadosPorAlumno (paramIdEjercicio,paramDocente, paramNivel, paramTitulo , paramNombreAlumno)) {
                        //Verifico que la extension del audio sea m4a 
                        if(verificarExtensionArchivo(paramAudio) == 'm4a'){
                            //Guardo los parametros de la funcion dentro del array Ejercicios Entregados Alumnos
                            let EjercicioEntregado = new EntregaEjercicios(paramIdEjercicio, paramDocente,paramNivel, paramNombreAlumno , paramTitulo , paramAudio);
                            EjerciciosEntregadosAlumnos.push(EjercicioEntregado);
                            arrayAlumnos[verificarPosicionUsuario(paramNombreAlumno,arrayAlumnos)].ArrayEjerciciosResueltos.push(EjercicioEntregado); 
                        } else {
                            //Devuelvo mensaje de error cuando el archivo no es un audio. 
                            mensajeEjercicioEntregados = "El archivo debe ser un audio.";
                            datoValido =false ;
                        } 
                } else {
                    //Mensaje de error para mostrar que ya existe una entrega de ejercicio
                    mensajeEjercicioEntregados = "Ya existe una entrega de ejercicio por parte del alumno.";
                    datoValido = false ; 
                }
            } else {
                //Mensaje de error que no exite ejercicios planteados por el docente 
                mensajeEjercicioEntregados = "No existe ejercicio planteado por parte del docente.";
                datoValido = false ; 
            }
        } else {
            //Mensaje de error que no existe el alumno
            mensajeEjercicioEntregados = "No existe alumno.";
            datoValido = false ;
        }
    } else {
        // Si esta todo vacio devuelve que todos los campos son obligatorios
        mensajeEjercicioEntregados = "Todos los campos son obligatorios";
        datoValido = false ; 
    }

    return datoValido ; 
}

//Funcion para comprobar si Existe ejercicios ingresados por docente en el array ejerciciosIngresadosPorDocente 
function ExisteDatosEjercicioIngresadoPorDocente (paramIdEjercicio,paramDocente, paramNivel, paramTitulo ) { 
	let datoValido = false ; 
	let i = 0 ; 
    let flagIgual = false ;

	while(i<ejerciciosIngresadosPorDocente.length && !flagIgual) {
        //Verifico los 4 parametros de la funcion en simultaneo
		if((ejerciciosIngresadosPorDocente[i].id === paramIdEjercicio) &&(ejerciciosIngresadosPorDocente[i].docente == paramDocente) && (ejerciciosIngresadosPorDocente[i].nivel == paramNivel) &&(ejerciciosIngresadosPorDocente[i].titulo == paramTitulo)) {
			flagIgual = true ;
		}
        i++;
	}

	datoValido = flagIgual;

	return datoValido ;
}

//Enviar el ejercicio planteado por el docente
function IngresarEnviarTarea () { 

    let Guardado = false ; 
    //Adquirir los valores del htlml para la pantalla de entrega tarea
    const idEjercicioSeleccionadoOpcion =document.querySelector("#seleccionEjerciciosAlumno").value ;
    const audioIngresado = document.querySelector("#entregarAudio").value ;
    //Verificar si el array esta vacio y mostra un mensaje en caso que no
    if (ejerciciosIngresadosPorDocente.length>0) {
        //Verificar que los campos no esten vacios
        if ((!campoVacio(idEjercicioSeleccionadoOpcion)) && (!campoVacio(audioIngresado))) {
            //Genero variables para llamar en cada caso una funcion particular
            //Adquiero y convierto el idEjercicio y lo paso a un valor numerico
            let idEjercicioSeleccionado = parseInt(idEjercicioSeleccionadoOpcion);
            //Adquiero el nombre y la extension del archivo de audio
            let rutaAudio = `${sacarFakepathImagen(audioIngresado)}`;
            //Adquiero el nombre del docente apartir del ejercicio planteado
            let nombreDocente = IdEjercicioDevolverNombreDocente(idEjercicioSeleccionado);
            //Adquiero el nivel apartir del ejercicio planteado
            let nivel = IdEjercicioDevolverNivel(idEjercicioSeleccionado) ; 
            //Adquiero el titulo apartir del ejercicio planteado
            let tituloEjercicio = IdEjercicioDevolverTitulo(idEjercicioSeleccionado);
            //Valido los paramatros a guardar con la funcion
            if (validarYCargarEjercicioEntregado(idEjercicioSeleccionado,nombreDocente ,nivel, tituloEjercicio,usuarioActivo.user , rutaAudio)) {4
                Guardado = true ;             
                console.log(EjerciciosEntregadosAlumnos);
                mensajeEjercicioEntregados = "Se envio con exito el ejercicio";
            }
        } else {
            mensajeEjercicioEntregados = "Todos los campos son obligatorios."
        }
    } else {
        mensajeEjercicioEntregados = "No hay ejercicios planteados por el docente" ; 
    }
    //Se borraran los campos si se guardar con exito.
    if (Guardado){

        document.querySelector("#VerEjercicioPlanteado").innerHTML = "";
        document.querySelector("#seleccionEjerciciosAlumno").value = "";
        document.querySelector("#entregarAudio").value = "";

        EntregarTareas();

    }
   //Devuelve el mensaje para los casos de verdaderos y falsos
    document.querySelector("#mensajeEntregaTarea").innerHTML = mensajeEjercicioEntregados ;
    
}

//Funcion para devolver el nombre del docente del ejercicio entregado
function IdEjercicioDevolverNombreDocente (idEjercicio){
    let resultado = " ";
    for (let i=0 ; i<ejerciciosIngresadosPorDocente.length ; i++){
        if (idEjercicio == ejerciciosIngresadosPorDocente[i].id) {
            resultado = ejerciciosIngresadosPorDocente[i].docente;
        }
    }
    return resultado
}

//Funcion para devolver el nivel del ejercicio planteado
function IdEjercicioDevolverNivel (idEjercicio){
    let resultado = " " ;
    for (let i=0 ; i<ejerciciosIngresadosPorDocente.length ; i++){
        if (idEjercicio == ejerciciosIngresadosPorDocente[i].id) {
            resultado = ejerciciosIngresadosPorDocente[i].nivel;
        }
    }
    return resultado
}

//Funcion para devolver el titulo del ejercio
function IdEjercicioDevolverTitulo (idEjercicio){
    let resultado = " " ;
    for (let i=0 ; i<ejerciciosIngresadosPorDocente.length ; i++){
        if (idEjercicio == ejerciciosIngresadosPorDocente[i].id) {
            resultado = ejerciciosIngresadosPorDocente[i].titulo;
        }
    }
    return resultado
}
//Funcion para sacar el nombre de archivo audio y la extension de este
function sacaFakepathAudio(rutaAudio) {
    let nombreAudio = '';
    for (let i = 12; i<rutaAudio.length;i++) {
        nombreAudio += rutaAudio[i];
    }
    return nombreAudio;
}

//F11 - Ver ejercicios resueltos - Usuario: Alumnos

//Funcion que da accion al boton de menu de Ver Ejercicios Realizados del menu alumno
function VerEjerciciosResultos(){
    Ocultar_pantallas();
    menu_principal_alumnos();
    desplegarEjerciciosResueltosAlumno();
    document.querySelector("#VerEjerciciosResultos").style.display = "block"; 
}

//Funcion que muestra todos los ejercicios que ese alumno entrego
function desplegarEjerciciosResueltosAlumno () {
    let resultado = '';
    //Usare esta variable para saber si el alumno realizo algun ejercicioz
    let hizoEjercicios = false;
    //Inicio una litsa desordenada para mostrar los ejercicios
    resultado += '<ul>';
    //Recorro el array de ejercicios entregados y valido si el usuario vinculado al ejercicio corresponde con el usuario activo...
    for (let i = 0; i<EjerciciosEntregadosAlumnos.length; i++) {
        if (EjerciciosEntregadosAlumnos[i].nombreAlumno == usuarioActivo.user) {
            //...si es así, guardo el ejercicio en una variable
            let ejercicioEncontrado = EjerciciosEntregadosAlumnos[i];
            //Creo un nuevo item de la lista, el cual tendra el titulo del ejercicio y el nivel del ejercicio
            resultado += `<li>${ejercicioEncontrado.titulo} - ${ejercicioEncontrado.nivel}</li>`;
            //Si encuentro al menos un ejercicio, lo reflejo en la variable antes mencionada
            hizoEjercicios = true;
        }
    }
    //Cierro la lista
    resultado += '</ul>';
    //Si no encontre ningun ejercicio enregado por el alumno, cambio lo que se mostrara al usuario
    if (!hizoEjercicios) {
        resultado = 'Aún no has realizado ejericios.';
    }
    document.querySelector('#EjerciciosRealizadosAlumno').innerHTML = resultado;
}

//F10 - Ejercicios planteados por docente - Usuario: Alumnos

//Funcion que da accion al boton de menu de Ver Ejercicios Realizados del menu alumno
function EjerciciosPlanteados(){
    MostrarTodosEjerciciosPlanteados();
    Ocultar_pantallas();
    menu_principal_alumnos();
    document.querySelector("#EjerciciosPlanteados").style.display = "block";
}

//Funcion que toma el texto a buscar que ingresa el usuario alumno
function BuscarEjercicioAlumno() {
    document.querySelector('#MensajeEjerciciosPlanteados').innerHTML = '';
    let mostrarAlUsuario = '';
    let mensaje = '';
    //Guardo el texto ingresado
    const textoBusquedaIngresado = document.querySelector('#BuscadorEjerciciosAlumno').value;
    //Valido que el texto ingresado no este vacío
    if (!campoVacio(textoBusquedaIngresado)) {
        //Usando una funcion, verifico si existen coincidencias entre el texto y los titulos de los ejercicios que corresponda a ese alumno, y guardo las cincidencias en una variable
        let posiblesEjerciciosEncontradosPorTitulo = buscarYGuardarEjercicios(textoBusquedaIngresado,ejerciciosIngresadosPorDocente,"titulo");
        //Pregunto si la variable anterior esta vacia, si lo esta, es porque no encontre coincidencias...
        if (posiblesEjerciciosEncontradosPorTitulo != '') {
            //...si no, muestro las coincidencias al usuario
            mostrarAlUsuario = posiblesEjerciciosEncontradosPorTitulo;
        } else {
            //Si no encontre coincidencias en el titulo, uso la misma funcion para buscar coincidencias en la descripcion
            let posiblesEjerciciosEncontradosPorDescripcion = buscarYGuardarEjercicios(textoBusquedaIngresado,ejerciciosIngresadosPorDocente,"descripcion");
            //Pregunto si la variable anterior esta vacia, si lo esta, es porque no encontre coincidencias...
            if (posiblesEjerciciosEncontradosPorDescripcion != '') {
                //...si no, muestro las coincidencias al usuario
                mostrarAlUsuario = posiblesEjerciciosEncontradosPorDescripcion;
            } else {
                //Si no encontre coincidencias ni en titulo ni en descripcion, se lo digo al usuario via mensaje y vacio el div de ejercicios mostrados si tiene algo
                mensaje = 'No hay resultados que coincidan con su búsqueda.';
                document.querySelector('#ResultadoEjerciciosPlanteados').innerHTML = '';
                document.querySelector('#btnMostrarTodosEjerciciosPlanteados').style.display = "block";
            }
        }
    } else {
        mensaje = 'El campo de búsqueda no puede quedar vacío.';
    }
    //Si el mensaje no esta vacio, significa que ocurrio un error, y se lo muestro al usuario
    if (mensaje != '') {
        document.querySelector('#MensajeEjerciciosPlanteados').innerHTML = mensaje;
    } else {
        //Si no, es porque encontre coincidencia, entonces la muestro al usuario y muestro el boton para que se muestren todos los otros ejercicios
        document.querySelector('#ResultadoEjerciciosPlanteados').innerHTML = mostrarAlUsuario;
        document.querySelector('#btnMostrarTodosEjerciciosPlanteados').style.display = "block";
    }
    //Vacio el campo de busqueda
    document.querySelector('#BuscadorEjerciciosAlumno').value = '';
}

//Funcion que da accion al boton de Ver Todos los Ejercicios
function botonMostrarTodosEjerciciosPlanteados () {
    document.querySelector('#btnMostrarTodosEjerciciosPlanteados').style.display = "none";
    document.querySelector('#MensajeEjerciciosPlanteados').innerHTML = '';
    document.querySelector('#ResultadoEjerciciosPlanteados').innerHTML = '';
    MostrarTodosEjerciciosPlanteados();
}

//Funcion que muestra todos los ejercicios que correspondan al alumno en la seccion de ver ejercicios plateados
function MostrarTodosEjerciciosPlanteados() {
    let resultado = '';
    //inicio una lista desordenada
    resultado += '<ul>';
    //Recorro el array de ejercicios ingresados
    for (let i = 0; i<ejerciciosIngresadosPorDocente.length; i++) {
        //Si el ejercicio corresponde al nivel del alumno y al docente del alumno...
        if (usuarioActivo.nivel == ejerciciosIngresadosPorDocente[i].nivel && usuarioActivo.docente == ejerciciosIngresadosPorDocente[i].docente) {
            //...si cumple, agrego un nuevo elemento a la lista con el nombre, la descripcion y la imagen del ejercicio
            resultado += `<li> ${ejerciciosIngresadosPorDocente[i].titulo} <br><br>`;
            resultado += `${ejerciciosIngresadosPorDocente[i].descripcion}<br><br>`;
            resultado += `<img src='img/${ejerciciosIngresadosPorDocente[i].imagen}'</li>`
        }
    }
    //Cierro la lista
    resultado += '</ul>';
    document.querySelector("#ResultadoEjerciciosPlanteados").innerHTML = resultado; 
}

//Funcion que recorre los ejercicios planteados para buscar coincidencias entre un texto y una propiedad (en este caso titulo o descripcion) de los ejercicios
function buscarYGuardarEjercicios(texto,listaEjercicios,dondeBusco) {
    //Incicio una lista desordenada
    let resultado = '<ul>';
    //Paso el texto recibido a minuscula
    let textoMinuscula = texto.toLowerCase();
    //Guardo el lagro del texto en una variable
    let largoTextoIngresado = textoMinuscula.length;
    //Recorro el array de ejercicios
    for (let i = 0; i<listaEjercicios.length; i++) {
        //Valido que el ejercicio actual corresponda al nivel del alumno y al docente del alumno
        if (usuarioActivo.nivel == listaEjercicios[i].nivel && usuarioActivo.docente == listaEjercicios[i].docente) {
            //Paso todo el texto de la propiedad (sea del titulo o descripcion) a minuscula
            let textoEjercicioMinuscula = listaEjercicios[i][dondeBusco].toLowerCase();
            //Creo una varialbe que usare para saber si ya encontre o no una coincidencia
            let noNecesitoSeguir = false;
            //Recorro el texto de la propiedad
            let n = 0;
            while (n<textoEjercicioMinuscula.length && !noNecesitoSeguir) {
                //Usando una funcion, obtengo una cadena de texto del mismo largo que el texto a buscar desde mi posicion actual en el texto, y la comparo con el texto a buscar
                if (textoMinuscula == obternerCadenaDeMismoLargo(textoEjercicioMinuscula,largoTextoIngresado,n)) {
                    //Si encontre coincidencia, cambio la variable para salir del while y creo un nuevo elemento de la lista con el nombre, descripcion e imagen del ejercicio actual
                    noNecesitoSeguir = true;
                    resultado += `<li> ${listaEjercicios[i].titulo} <br><br>`;
                    resultado += `${listaEjercicios[i].descripcion}<br><br>`;
                    resultado += `<img src='img/${listaEjercicios[i].imagen}'</li>`;
                }
                n++;
                //Pregunto si en este momento estoy en una posicion del texto en la cual ya no puedo encontrar una coinciencia, pues el texto a buscar es mas largo que el resto del texto de propiedad...
                if (n+largoTextoIngresado>textoEjercicioMinuscula.length) {
                    ///...si es asi, cambio la variable para salir del while
                    noNecesitoSeguir = true;
                }
            }
        }
    }
    //Cierro la lista
    resultado += '</ul>';
    //Si no encontre ninguna coincidencia, lo unico que habra en mi resultado seran el inicio y el final de la lista...
    if (resultado == '<ul></ul>') {
        //...si es asi, vacio el resultado
        resultado = '';
    }
    return resultado;
}

//Funcion que devuelve una cadena de texto del mismo largo que un texto recibido, desde una posicion dada de un largo recibido
function obternerCadenaDeMismoLargo(texto,largo,posicion) {
    let nuevoTexto= '';
    //Recorro el texto desde la posicion dada hasta el largo recibido
    for (i = posicion; i<largo+posicion; i++) {
        //Guardo el nuevo texto en una variable
        nuevoTexto += texto[i];
    }
    return nuevoTexto;
}

//F12 - Visualizar Estadísticas - Usuario: Alumnos
function VisualizarInformacionEstadisticaALUMNOS(){
    Ocultar_pantallas();
    menu_principal_alumnos();
    //Muestra la pantalla donde se veran las estadisticas
    document.querySelector("#VisualizarInformacionEstadisticaALUMNOS").style.display = "block";
    EstadisticasAlumnos();
}


function EstadisticasAlumnos () {

    let mensaje = "" ;
    //Adquiero para cada variable ciertas cantidades numericas a mostrar
    //Cantidad de ejercidios planteados para el ALUMNO activo y su nivel 
    let TotalEjericios = ContarCantidadEjerciciosPlanteados(usuarioActivo.docente , usuarioActivo.nivel) ;
    //Cantidad de ejercicios entregados para el ALUMNO activo y su nivel 
    let EjerciciosIndividuales = ContarCantidadEjerciciosEntregados(usuarioActivo.user, usuarioActivo.nivel) ;
    //Cantidad de ejercicios con devolucion para el ALUMNO activo y su nivel 
    let EjerciciosDevolucion = ContarEjerciciosConDevolucion(usuarioActivo.user,usuarioActivo.nivel);
    //Verifico la cantidad total de ejercicios planteados
    if (TotalEjericios>0) {
        //Verifico la cantidad de ejercicios entregados
        if (EjerciciosIndividuales>0){
            //Calcular el porcentaje
            let Porcertaje = (EjerciciosIndividuales / TotalEjericios ) * 100 ;
            Porcertaje = Porcertaje.toFixed(2);
            //Calcular la cantidad de ejercicios que faltan corregir
            let Faltantes = EjerciciosIndividuales - EjerciciosDevolucion; 
            //Devulvo la estadistica generada
            mensaje = "Has resuelto un " + Porcertaje + " % de los ejercicios planteados para tu nivel ( <b>" + usuarioActivo.nivel + "</b> )";
            mensaje += "<br>";
            mensaje += "Tu docente ha corregido " + EjerciciosDevolucion + " ejercicios entregados." ;
            //Verifico que si no hay Devolucion de ejercicios 
            if (Faltantes!=0) {
                //En caso verdadero mostrar los faltantes
                mensaje += " Aun le faltan correguir " + Faltantes ;
            } 
        } else {
            //Sino hay ejercicios entregados
            mensaje = "No se han entregado ejercicios para corregir, tiene pendiente " + TotalEjericios + " entregas";
        }
        
    } else {
        //Sino hay ejercicios planteados para este ALUMNO y nivel  - muestro este mensaje 
        mensaje = "Aún no se han planteado ejercicios para su nivel";
    }
    //Devolver el mensaje 
    document.querySelector("#EstadisticasAlumnos").innerHTML = mensaje ;
}

//Funcion que devuelve la cantidad de ejercicios con devolucion para el ALUMNO activo y su nivel 
function ContarEjerciciosConDevolucion(nombreAlumno,nivel) {
    let resultado = 0 ; 
    let contador = 0 ; 
    
    for(let i=0;i<arrayDevolucionEjercicios.length;i++){
        const Ejercicio = arrayDevolucionEjercicios[i];
        if ((nombreAlumno==Ejercicio.nombreAlumno)&&(nivel==Ejercicio.nivel)) {
            contador++;
        }
    }
    resultado = contador;
    return resultado ;
}

//Funcion que devuelve la cantidad de ejercicios entregados para el ALUMNO activo y su nivel 
function ContarCantidadEjerciciosEntregados (nombreAlumno , nivel) {
    let resultado = 0 ; 
    let contador = 0 ; 
    for (let i=0 ; i<EjerciciosEntregadosAlumnos.length; i++) {
        if ((nombreAlumno == EjerciciosEntregadosAlumnos[i].nombreAlumno)&&(nivel==EjerciciosEntregadosAlumnos[i].nivel)) {
            contador ++;
        }
    }
    resultado = contador ; 
    return resultado ; 
}

//Funcion que devuelve la cantidad de ejercidios planteados para el ALUMNO activo y su nivel 
function ContarCantidadEjerciciosPlanteados (nombreDocente , nivel) {
    let resultado = 0 ; 
    let contador = 0 ; 

    for(let i=0;i<ejerciciosIngresadosPorDocente.length;i++){
        const Ejercicios = ejerciciosIngresadosPorDocente[i];
        if ((nombreDocente == Ejercicios.docente)&&(nivel==Ejercicios.nivel)) {
            contador ++;
        }
    }

    resultado = contador ;
    return resultado;
}