
let numeros = [1,2,3,4,5,6,7,8];

let numerosPares = numeros.filter (function(numeros){
    return numeros % 2 === 0
})

let numerospordos = numerosPares.map (function (numeros){
    return numeros*2
    
})

console.log ('numeros para (filter)', numerosPares)
console.log (numerospordos)