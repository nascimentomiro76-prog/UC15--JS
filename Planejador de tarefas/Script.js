let tarefas = [];

let totalTarefas = 0;
let totalConcluídas = 0;

function adicionarTarefa () {

    let nome = document.getElementById ("tarefa").value.trim();

    let materia = document.getElementById("materia"). value.trim();

    let prioridade = document.getElementById ("prioridade").value;

    let mensagem = document.getElementById("mensagem");

    if (nome ==="" || materia === "" || prioridade === "") {

mensagem.textContent = "preencha todos os campos!";

mensagem.style.color = "red";

return;

 }
let duplicada = tarefas.some (function(tarefa)){

 return tarefa .nome.toloverCase()== nome.toloverCase();
}};

if (duplicada){
mensagem.textContent = "Essa tarefa já foi cadastrada!";
mensagem.style.color ="red";
return;
}
let novaTarefa = {
nome: nome,
materia: materia,
prioridade: prioridade,
concluída: false,
};

tarefa.push(novaTarefa);
totalTarefas++;
mensagem.textContent="tarefa cadastrada com sucesso!";
mensagem.style.color ="green";

atualizarContadores();
exibirTarefas();
limparCampos();

function exibirTarefas(){

    let lista = document.getElementById ("listaTarefas");
    lista.textContent = "";

    tarefas.forEach(function(tarefa,indice)
    let card =document.createElement ("div");
    card.className ="tarefa";

    let titulo = document.createElement("h3");

    titulo.textContent = tarefa.nome;
    let materia = document.createElement("p");

    materia.textContent = "materia:" + tarefa.materia;

    let prioridade = document.createElement("p");
    prioridade.textContent = "prioridade:" + tarefa.prioridade;

    let status = document.createElement ("p");

    status.textContent = tarefa.concluidas
    ?"satus: concluida"
    :"status: pedente"

    card.apendChild(titulo);
    card.apendChild(materia);
    card.apendChild(prioridade);
   card.apendChild(status);

   destacarPrioridade(card, tarefa.prioridade);

   if (tarefa.concluida) {
    card.classList.add("concluida");

   }else{

    let botao = document.createElement("button")
    botao.textContent = "concluir tarefas";
    botao .onclick = function() {
ConcluirTarefa(indice);

 };
 card.appedChild(botao);
 }
 lista.appendChild (card);


 );

}
function destacarPrioridade(card,prioridade){
if (prioridade === "alta") {
card.style.borderLeft = "Spx solid red";
}else if (prioridade ==="Media") {
 card.style.borderLeft ="Spx solid orange";
} else if (prioridade === "baixa") {
    card.style.borderLeft =" Spx solid blue";
}

}

function ConcluirTarefa(indice){
 let tarefa = tarefas [indice];
if (tarefa.concluida)
    return;
}
tarefa.concluida = true;
totalConcluidas ++;

let mensagem = document.getElementById("mensagem");
mensagem.textContent = "Tarefa concluida com sucesso!";
mensagem.style.color = "green";

