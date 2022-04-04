function enviar(){
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const estudo = document.getElementById("estudo").value;




if ((nome, idade, estudo == "")) {

    alert("Atenção! É obrigatório o preenchimento de todos os campos.")
}       else {
                document.getElementById("mensagem").innerHTML = `Olá ${nome}! Você tem ${idade} anos e acaba de se inscrever no curso de ${estudo}.`;
                document.getElementById("informativo").innerHTML = `<div class="perguntas"<label>Você conheceu o curso de ${estudo} através de indicação de alguém?</label><br><br>
                <button type="submit" onclick="Yes()">SIM</button> <button type="submit" onclick="No()">NÃO</button></div>`;
}
}


function Yes() {
    document.getElementById("resposta-final").innerHTML = "<h2>Que bom que estamos sendo indicados por outros alunos.</h2>";
    document.getElementById("next").disabled = false
}


function No() {
    document.getElementById("resposta-final").innerHTML = "<h2>Entendo, ficamos felizes com sua iniciativa em aprender.</h2>";
    document.getElementById("next").disabled = false
}


function next(){
    const area = prompt("Você deseja iniciar na area de 'Front-End' ou de 'Back-End'?");
let linguagem = "";
if (area === "Front-End"){
    linguagem = prompt("O que deseja aprender, React ou Vue?");
}
else if (area === "Back-End"){
    linguagem = prompt("Deseja aprender C# ou Javascript?");
}
else {
    alert("Area desejada é inválida, digite exatamente uma das opções indicadas!");
}

const especialidadeOuFullstack = prompt("Digite 'Continuar' para seguir aprendendo na área escolhida ou 'Fullstack' para seguir seu desenvolvendo como um Fullstack");
if (especialidadeOuFullstack === "Continuar"){
    alert(`Ótimo! continue se especializando em ${linguagem} para dominar por completo a área de ${area}!`);
}
else if (especialidadeOuFullstack === "Fullstack" ){
    alert(`Aproveite então para começar a aprender outras linguagens além de ${linguagem} se deseja se tornar um Fullstack!`);
}
else {
    alert("Você não colocou um texto válido!");
}

let msg = prompt("Tem alguma indicação de uma outra tecnologia que tenha interesse de aprender? Digite 'Sim' caso houver.");
while (msg === "Sim"){
    let novaTecnologia = prompt("Insira a tecnologia desejada");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'Sim' caso houver.");
}
}