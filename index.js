const form = document.getElementById('inputs');
const titulo = document.querySelector('h1');
const respostas = document.getElementById('textContent');
const maior = document.getElementById('maior')



form.addEventListener('submit', function(enviar) {
    enviar.preventDefault();

    const Num01 = document.getElementById('X').value;
    const Num02 = document.getElementById('Y').value;

    if (Num01 == "" || Num02 == "") {
        alert("Por favor preencha os dois campos com algum valor!")
    } else {
        form.style.display = 'none';
        titulo.innerHTML = "Esses são os dados dos seus números escolhidos";
        respostas.style.display = 'grid';
    }

    if (Num01 > Num02) {
        maior.innerText = `Segundo os dados que você me passou, cheguei a conclusão que ${Num01} é maior do que ${Num02} `;
    } else {
        maior.innerText = `Segundo os dados que você me passou, cheguei a conclusão que ${Num02} é maior do que ${Num01} `;
    }

})