let draggedItem;

const dragStart = (event) => {
    draggedItem = event.target;
    event.dataTransfer.effectAllowed = "move";
}

const dragOver = (event) => {
    event.preventDefault();
}

const dragEnter = ({target}) => {
    if(target.classList.contains("tarefas")){
        target.classList.add("coluna-destaque")
    }
}

const dragLeave = ({target}) => {
    target.classList.remove("coluna-destaque");
}

const drop = ({target}) =>{
    target.classList.remove("coluna-destaque");
    if(target.classList.contains("tarefas")){
        target.append(draggedItem);
    }  
}

const novaTarefa = ({target}) => {
    if(!target.classList.contains("tarefas")) return;
    const tarefa = document.createElement("section");
    tarefa.className = "tarefa";
    tarefa.draggable = "true";
    tarefa.addEventListener("dragstart", dragStart);
    tarefa.addEventListener("focusout", () =>{
        tarefa.contentEditable = "false";
        const btnExcluir = document.createElement("button");
        btnExcluir.className = "remover_tarefa";
        btnExcluir.innerHTML = '<i class="fa-solid fa-x">'

        btnExcluir.addEventListener("click", () =>{
            tarefa.remove();
        })
        tarefa.append(btnExcluir);

        if(!tarefa.textContent) tarefa.remove();
    })

    tarefa.contentEditable = "true";
    tarefa.addEventListener("keypress", (event) =>{
        if(event.key === 'Enter'){
            target.append(tarefa);
        }
    })
    target.append(tarefa);
    tarefa.focus();
}

const removerTarefa = (tarefa) => {
    tarefa.remove();
}

const colunas = document.querySelectorAll(".tarefas")
const tarefas = document.querySelectorAll(".tarefa");

colunas.forEach((coluna) => {
    coluna.addEventListener("dragover", dragOver);
    coluna.addEventListener("drop", drop);
    coluna.addEventListener("dragenter", dragEnter);
    coluna.addEventListener("dragleave", dragLeave);
    coluna.addEventListener("dblclick", novaTarefa);
});

tarefas.forEach((tarefa) => {
    tarefa.addEventListener("dragstart", dragStart);
});

