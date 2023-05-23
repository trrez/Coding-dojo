for(let i =1; i <= 20; i++){
    if(i % 2 != 0){
        console.log(i)
    }
}

for (let i = 100; i >= 0; i -= 3) {
    console.log(i);
}

for (let i = 0; i < 6; i++) {
    console.log(4 - (i * 1.5));
}

function sigma() {
    let sum = 0;
    let sequence = '';

    for (let i = 1; i <= 100; i++) {
    sum += i;

    if (i !== 100) {
        sequence += i + ' + ';
    } else {
        sequence += i;
    }
    }

    console.log(sequence);
    console.log('Resultado: ' + sum);
}

sigma();

function factorial() {
    let product = 1;
    let sequence = "";

    for (let i = 1; i <= 12; i++) {
      product *= i;

    if (i !== 12) {
        sequence += i + ' * ';
    } else {
        sequence += i;
    }
    }

    console.log(sequence);
    console.log(product);
}

factorial();