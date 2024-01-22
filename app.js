let numberSecret = 0;
let intentos = 0;
let numbersList = [];
let numberMax = 10;

let btn = document.querySelector('.container__boton');
let btnReset = document.getElementById('reiniciar');

btn.addEventListener("click", ()=> {
    let userNumber = parseInt(document.getElementById('numberUser').value);
    
    if (userNumber === numberSecret) {
        asigElement('p', `Ácertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (userNumber > numberSecret) {
            asigElement('p', 'El número secreto es menor');
        } else {
            asigElement('p', 'El número secreto es mayor');
        }
        intentos++;
        clearBox();
    }
    return;
});


btnReset.addEventListener("click", ()=> {
    // Limpiar caja
    clearBox();
    // Indicar mensaje de intervalo de números
    // Generar el número aleatorio
    // Inicializar el número intentos
    conditionsInitial();
    // Desabilitar el btn del nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
    return;
});

function conditionsInitial() {
    asigElement('h1', "Juego del número secreto");
    asigElement('p', `Introduce un numero entre 1 y ${numberMax}`);
    numberSecret = numberSecretGenerator();
    intentos = 1;
}

function clearBox() {
    document.querySelector('#numberUser').value = '';
}

function numberSecretGenerator() {
    let numberGenerator = Math.floor(Math.random()*numberMax)+1;
    // Si ya sorteamos todos los números
    if (numbersList.length === numberMax) {
        asigElement('p', 'Ya se sortearon todos los números posibles');
    } else{        
        // Si el número generado está incluido en la lista
        if (numbersList.includes(numberGenerator)) {
            return numberSecretGenerator();
        } else {
            numbersList.push(numberGenerator);
            return numberGenerator;
        }
    }
}

function asigElement(title, param) {
    let elementHTML = document.querySelector(title);
    elementHTML.innerHTML = param;
    return;
}

conditionsInitial();