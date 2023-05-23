function siempreHambriento(arr) {
    let hambre = true;

    for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "comida") {
        console.log("Delicioso");
        hambre = false;
    }
    }

    if (hambre) {
        console.log("Tengo hambre");
    }
}

siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"

siempreHambriento([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"

function highPass(arr, cutoff) {
    var filteredArr = [];
    // tu código aquí
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > cutoff){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]

function betterThanAverage(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    // calcula el promedio
    let average = sum / arr.length
    var count = 0
    // cuenmta cuánmtas variables son mayores que el promedio
    for (let i = 0; i < arr.length; i++){
        if(arr[i] > average){
            count++
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta

function reverse(arr) {
    // tu código aquí
    arr.reverse()
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]

function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];

    for(let i = 2; i < n; i++){
        let nextFib = fibArr[i - 1] + fibArr[i - 2];
        fibArr.push(nextFib) 
    }
    // tu código aquí
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

