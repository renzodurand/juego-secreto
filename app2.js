let listaGenerica= [];
let lenguajesDeProgramación = ['Java Script', 'C', 'C++', 'Kotlin', 'Python'];

lenguajesDeProgramación.push('Java', 'Ruby', 'GoLang');

function imprimir(){
    console.log(lenguajesDeProgramación);
}

function imprimirInverso(){
    for(let i = lenguajesDeProgramación.length - 1; i > 0; i--){
        console.log(lenguajesDeProgramación[i]);
    }
    return imprimirInverso;
}

let listaNumeros = [1,2,3,4,5,6,7,8,9,10];
function promedio(){
    let suma = 0;
    for (let i=0; i<listaNumeros.length; i++){
        suma += listaNumeros[i];
    }
    return suma/listaNumeros.length;
}

function menor(){
    let menor = listaNumeros[0];
    for(let i=0; i<listaNumeros.length; i++){
        if(listaNumeros[i] < menor){
            menor = listaNumeros[i];
        }
    }
    return menor;
}

function mayor(){
    let mayor = listaNumeros[0];
    for(let i=0; i<listaNumeros.length; i++){
        if(listaNumeros[i] > mayor){
            mayor = listaNumeros[i];
        }
    }
    return mayor;
}

function suma(){
    let suma = 0;
    for(let i=0; i<listaNumeros.length; i++){
        suma += listaNumeros[i];
    }
    return suma;
}

function parametro(num, listaNumeros){
    let numero = num;
    for(let i=0; i<listaNumeros.length; i++){
        if(numero == listaNumeros[i]){
            console.log('la posición del número es ' + i);
            return;
        }  
    }return -1;
}

function sumaListas(){
    let lista1 = [1,2,3,4,5];
    let lista2 = [6,7,8,9,10];
    let lista3 = [];
    for(let i=0; i<lista1.length; i++){
        for(let j=0; j<lista2.length; j++){
            lista3.push(lista1[i] + lista2[j]);
        }
    }
    return lista3;
}

function cuadradoNumeros(){
    let lista1 = [1,2,3,4,5];
    let lista2 = [];
    for(let i=0; i<lista1.length; i++){
        lista2.push(lista1[i] * lista1[i]);
    }
    return lista2;
}

imprimir();
imprimirInverso();
console.log(promedio());
console.log(menor());
console.log(mayor());
console.log(suma());
console.log(parametro(3, listaNumeros));
console.log(sumaListas());
console.log(cuadradoNumeros());
