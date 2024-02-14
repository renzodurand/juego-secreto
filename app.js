let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Ganaste en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numeroDeUsuario < numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es mayor');
        }else {
            asignarTextoElemento('p', 'El número secreto es menor');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function saludo(){
    console.log('Hola Mundo');
}

function saludoNombre(nombre){
    let saludarNombre = `Hola ${nombre}`;
    console.log(saludarNombre);
    return;
    
}

function doble(numero){
    let resultado = numero * 2;
    console.log('El doble del número es ' + resultado);
    return;
}

function promedio(a, b, c){
    let promedio = (a + b + c) / 3;
    console.log('El promedio es ' + promedio);
    return;
}

function mayor(a,b){
    if(a>b){
        console.log('El número mayor es ' + a);
    }else if(a<b){
        console.log('El número mayor es ' + b);
    }else{
        console.log('Los números son iguales');
    }
    return;
}

function multiplicar(a){
    let resultado = a * a;
    console.log(resultado);
    return;
}

function generarNumeroSecreto(){
    let numeroGenerado =  Math.floor(Math.random()*10) + 1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se asignaron todos los números');
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }


    
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', 'Indica un número del 1 a 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    console.log(numeroSecreto);
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}
condicionesIniciales();
asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', 'Indica un número del 1 a 10');
saludo();
saludoNombre('Renzo');
doble(11);
promedio(2,5,6);
mayor(3,5);
multiplicar(5);
console.log(numeroSecreto);
