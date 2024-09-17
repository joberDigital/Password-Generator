var cantidad = document.getElementById("cantidad");
var boton = document.getElementById("generar");
let contrasena = document.getElementById("contrasena");

const cadenaCaracteres =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const componentes = () => {
  let numeroDigitado = parseInt(cantidad.value);
  console.log(numeroDigitado);


  if (numeroDigitado < 8) {
    alert("La cantidad de caracteres tienen que ser mayor a 8");
         cantidad.value = new String("😔😔");
         setTimeout(() => {
        cantidad.value = "";
        }, 2000);
        numeroDigitado = 0;
        }
        generar(numeroDigitado);
};

function generar(numeroDigitado) {
       let password = "";
  for (let i = 0; i < numeroDigitado; i++) {
       let caracterAleatorio =
      cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
      console.log(caracterAleatorio);
      password += caracterAleatorio;
  }
      contrasena.value = password;
}


function elegirPassword() {
  let choose = contrasena.value;
  const tieneMayusculas = /[A-Z]/.test(choose); // Verifica si hay al menos una letra mayuscula
  const tieneNumeros = /\d/.test(choose); // Verifica si hay al menos un numero
  // .test() es un metodo que funciona con expresiones regulares, no con cadenas de texto
       if (!tieneMayusculas || !tieneNumeros) {
    // Si falta cualquiera de las dos (mayusculas o numeros), es debil
       alert("Contraseña Débil");
       } else {
    // Si tiene ambos (mayusculas y numeros), es fuerte
       alert("Contraseña Fuerte");
       }
       clearInterval(playPasswords);
}
var playPasswords = setInterval(componentes, 2000);
boton.onclick = playPasswords;
