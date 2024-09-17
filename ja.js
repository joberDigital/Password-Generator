/* 
Explicacion de JavaScript
- var & let: es una variable, parte de la sintaxis de js y son espacios en memoria que nos permite 
almacenar un valor de numeros y cadenas de texto (string)
El mas usado= let:  puede guardar cualquier tipo de dato y cambiarlo despues

- const: variable que no cambia en el tiempo
*/

/*
Document.getElementById
Document: Toma una informacion del html y llevarlo al js (representa toda la estructura de la pagina)
.getElementById: es parte del metodo que obtiene un elemento por su Id del html
'cantidad': es el Id de ese elemento o campo de cantidad (toma el valor que almacena el recuadro de cantidad) 
*/

let cantidad = document.getElementById('cantidad'); //Lo que esta en parentesis sera el "id cantidad" (del ingreso datos);  variable que se refiere a un elemento HTML
let boton= document.getElementById('generar');//Lo que esta en parentesis sera el "id generar" (del boton)
let contraseña = document.getElementById('contrasena') //Lo que esta en parentesis sera el "id contrasena" (del recuadro de salida)

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

// Funcion: Hace tareas especificas de un bloque de codigo
// Funcion que genera la contraseña, tiene una condicion a verificar y tiene un bucle que lo genera
function generar(){
    let numeroDigitado = parseInt (cantidad.value);//parseInt: pasa de texto a numero y cantidad.value accede al valor que se coloco en el elemento cantidad 
    let = password= '';// Variable que almacenara la contraseña a partir de recorrer randomicamente la cadenaCaracteres

    // Condicionales: comvalida que la contraseña sea mayor que 8
    if(numeroDigitado <= 7 || numeroDigitado >=25){
        alert("La cantidad de caracteres tiene que ser mayor que 8 y menor que 25")// alert: muestra un recuadro de mensaje aparte
        
        return // Evita que genere contraseñas menor igual a 7 
    }

    // Blucle: recorrer algo, en este caso nuestra cadena de texto
    for(let i= 0; i < numeroDigitado; i++ ){
        let caracterAleatorio = cadenaCaracteres[ Math.floor(Math.random() * cadenaCaracteres.length)]; //Guarda lo que vamos haciendo en una variable
        //length: trae el tamaño de la cadena
        password += caracterAleatorio; //concateno y asigno lo que esta en la variable caracterAleatorio a la variable passwprd (a la cadena vacia)
    }
    contrasena.value = password;
    // Llamar a la función de validacion que creo aparte 
    /*
    Metodo usados: 
    Math.Random: escoge aleatoriamente numeros
    Mathfloor: redondea

    console.log: muestra en pantalla (consola) la informacion o texto que le asignemos
    console.log('password generada' + password);// solo ayuda a visulaizar en el compilador como va la ejecucion
    */

// Funcion que dice si la password generada es fuerte o debil
const tieneMayusculas = /[A-Z]/.test(password); // Verifica si hay al menos una letra mayuscula
const tieneNumeros = /\d/.test(password); // Verifica si hay al menos un numero
// .test() es un metodo que funciona con expresiones regulares, no con cadenas de texto  
if (!tieneMayusculas || !tieneNumeros) { 
    // Si falta cualquiera de las dos (mayusculas o numeros), es debil
    alert("Contraseña Débil");
} else {
    // Si tiene ambos (mayusculas y numeros), es fuerte
    alert("Contraseña Fuerte");
}

}



// Funcion que manda vacio al reacuadro contrasena.value y cantidad.value cuando se da clic al boton borrar
function borrar(){
    contrasena.value = ' '; //Limpia la contraseña
    cantidad.value = ' ';
}








