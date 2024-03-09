const form = document.getElementById('inputs');
const titulo = document.querySelector('h1');
const respostas = document.getElementById('textContent');
const maior = document.getElementById('maior');
const divisivel = document.getElementById('divisivel');
const raiz = document.getElementById('raiz');

form.addEventListener('submit', function(enviar) {
    enviar.preventDefault();

    const Num01 = parseInt(document.getElementById('X').value);
    const Num02 = parseInt(document.getElementById('Y').value);

    if (isNaN(Num01) || isNaN(Num02)) {
        alert("Por favor preencha os dois campos com algum valor!")
    } else {
        form.style.display = 'none';
        titulo.innerHTML = "Esses são os dados dos seus números escolhidos";
        respostas.style.display = 'grid';
    }

    if (Num01 > Num02) {
        maior.innerText = `Segundo os dados que você me passou, cheguei a conclusão que ${Num01} é maior do que ${Num02} `;
    } else if (Num02 > Num01){
        maior.innerText = `Segundo os dados que você me passou, cheguei a conclusão que ${Num02} é maior do que ${Num01} `;
    } 

    if(Num01 % Num02 == 0){
        divisivel.innerText = `Me parece que ${Num01} é divisivel por ${Num02}`;
    } else if (Num02 % Num01 == 0) {
        divisivel.innerText = `Me parece que ${Num02} é divisivel por ${Num01}`;
    } else {
        divisivel.style.display = 'none'
    }

    if(Num01 * Num01 == Num02) {
        raiz.innerText = `Para te falar a verdade seu número: ${Num01} é a raiz de ${Num02}`
    } else if (Num02 * Num02 == Num01) {
        raiz.innerText = `Para te falar a verdade seu número: ${Num02} é a raiz de ${Num01}`
    } else {
        raiz.style.display = 'none'
    }

})