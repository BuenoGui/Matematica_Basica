const form = document.getElementById('inputs');
const titulo = document.querySelector('h1')

form.addEventListener('submit', function(enviar) {
    enviar.preventDefault();

    const Num01 = document.getElementById('X').value;
    const Num02 = document.getElementById('Y').value;

    if (Num01 !== "" && Num02 !== "") {
        // Limpar os campos de input
        document.getElementById('X').value = "";
        document.getElementById('Y').value = "";
    } else {
        alert("Por favor preencha os dois campos com algum valor!")
    }

    form.style.opacity = 0;
    titulo.innerHTML = "Esses são os dados dos seus números escolhidos"   
    


})