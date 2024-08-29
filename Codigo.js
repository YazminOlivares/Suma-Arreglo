const numeros = [];
for(let i = 0; i<10; i++){
    numeros.push(Math.floor(Math.random()*50));
}

let sumatoria = 0;
numeros.forEach((elemento) => sumatoria = sumatoria + elemento)

console.log("La sumatoria del arreglo es: " + sumatoria);
