let usuario="nico";
let pass="1234";
let login=false;

//LOGIN
for(let i = 0;i <= 2; i++){
    let usuarioIngreso=prompt("Ingrese su usuario");
    let passwordIngreso= prompt("ingrese su password");
if (usuarioIngreso == usuario && passwordIngreso == pass){
    login=true;
    break;}else {
        alert("credenciales inválidas");
    }
    }

//MENU
if (login) {
    let opciones = parseInt(prompt("Bienvenido a la calculadora de daño pokémon! :\nEscriba 1 para usar la calculadora\nEscriba 2 para salir"));
    while (opciones !== 2 && opciones !== 1) {
        opciones = parseInt(prompt("Opción inválida. Por favor, escriba 1 para usar la calculadora o 2 para salir"));
    }

    //CALCULADORA
    if (opciones === 1) {
        let tipo1 = prompt("Ingrese el tipo del pokémon atacante");
        let ataque = prompt("Ingrese el ataque del pokémon atacante");
        let tipo2 = prompt("Ingrese el tipo del pokémon defensor");

        if ((tipo1 == "Fuego" && tipo2 == "Agua") || (tipo1 == "Agua" && tipo2 == "Planta") || (tipo1 == "Planta" && tipo2 == "Fuego")) {
            let resultado = 0.5 * ataque;
            alert("El ataque será de " + resultado + " puntos de daño");
        } else if ((tipo1 == "Fuego" && tipo2 == "Planta") || (tipo1 == "Agua" && tipo2 == "Fuego") || (tipo1 == "Planta" && tipo2 == "Agua")) {
            let resultado = 2 * ataque;
            alert("El ataque será de " + resultado + " puntos de daño");
        } else {
            alert("El ataque será de " + ataque + " puntos de daño");
        }
    }else if (opciones === 2){
        alert("Gracias por utilizar la calculadora de daño pokémon");
    }
} else {
    alert("Inténtelo nuevamente en 30 minutos");
}