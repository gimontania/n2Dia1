/**Parte 1: ejercicios prácticos */
/**Reto 1 */
let ctaA = 10;
let ctaB = 5;

/**sumo y lo guardo en ctaA */
ctaA = ctaA + ctaB;
/**al valor actual ctaA le resto ctaB */
ctaB = ctaA - ctaB;
/**al valor actual ctaA, le resto valor actual ctaB */
ctaA = ctaA - ctaB;

console.log("cuenta A:", ctaA);
console.log("cuenta B:", ctaB);



/**Reto 2 */
let nivel = Number(prompt("Ingrese el nivel:"));
let honor = Number(prompt("Ingrese los puntos de honor:"));
let vip = prompt("¿Tiene vip? (si/no)") === "si";

if( nivel >= 20 && (honor === 100 || vip)) {
    console.log("Ingreso permitido");
} else {
    console.log("Ingreso denegado");
}

/**Reto 3 */
let vida = Number(prompt("Ingrese puntos de vida del jugador:"));
let ataque = Number(prompt("Ingrese puntos de ataque de enemigo"));

vida = vida - ataque;

if (vida < 10){
    console.log("¡Peligro crítico!");
}else {
    console.log("Sobreviviste");
}

