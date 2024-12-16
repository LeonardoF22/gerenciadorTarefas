function exibBtn(btnNew, btnAdd, btnRemove){
    btnNew.style.display = 'none';
    btnAdd.style.display = 'block';
    btnRemove.style.display = 'block';
}

function ocultBtn(btnNew, btnAdd, btnRemove){
    btnNew.style.display = 'block';
    btnAdd.style.display = 'none';
    btnRemove.style.display = 'none';
}

function criarTarefa(lista, btnNew, btnAdd, btnRemove){
    exibBtn(btnNew, btnAdd, btnRemove);

    const novoItem = document.createElement('li');
    const inputItem = document.createElement('input');
    novoItem.setAttribute('draggable', 'true');
    novoItem.classList.add("item")

    inputItem.type = 'text';
    inputItem.placeholder = 'Digite a tarefa';
    inputItem.className = 'inputTarefa';
    
    novoItem.appendChild(inputItem);
    lista.appendChild(novoItem);

    inputItem.focus();

    inputItem.addEventListener('keypress', (event) => {
        if(event.key === 'Enter'){
                salvarTarefa(inputItem, novoItem, btnExcluir,);
                ocultBtn(btnNew, btnAdd, btnRemove);
        }
    })

    btnAdd.addEventListener('click', () => {
       salvarTarefa(inputItem, novoItem, btnExcluir,);
       ocultBtn(btnNew, btnAdd, btnRemove);
    })

    const btnExcluir = document.createElement('button');
    btnExcluir.className = 'RemoverItem';
    btnExcluir.innerHTML = '<i class="fa-solid fa-x">';

    btnExcluir.addEventListener('click', () => {
        novoItem.remove();
    })

    btnRemove.onclick = () => {
        if(lista.contains(novoItem) && inputItem.parentElement) {
            inputItem.remove(); 
            novoItem.remove();  
        }
        ocultBtn(btnNew, btnAdd, btnRemove);
    };
}

function salvarTarefa(inputItem, novoItem, btnExcluir){
    const tituloTarefa = inputItem.value.trim();
    
    if(tituloTarefa){
        novoItem.textContent = tituloTarefa;
        novoItem.appendChild(btnExcluir);
    } else {
        inputItem.remove();
        novoItem.remove();
    }
}

//ToDo
const btnNewToDo = document.getElementById('btnNewToDo');
const btnAddToDo = document.getElementById('btnAddToDo');
const listToDo = document.getElementById('lista-toDo');
const btnRemoveInputToDo = document.getElementById('btnRemoveInputToDo');
btnNewToDo.addEventListener('click', () => {
    criarTarefa(listToDo, btnNewToDo, btnAddToDo, btnRemoveInputToDo);
})

//OnProgress
const btnNewOnProgress = document.getElementById('btnNewOnProgess');
const btnAddOnProgress = document.getElementById('btnAddOnProgress')
const listaOnProgress = document.getElementById('lista-onProgess');
const btnRemoveInputOnProgress = document.getElementById('btnRemoveInputOnProgress');

btnNewOnProgress.addEventListener('click', () =>{
   criarTarefa(listaOnProgress, btnNewOnProgress, btnAddOnProgress, btnRemoveInputOnProgress);
})

//Complete
const btnNewComplete = document.getElementById('btnNewComplete');
const btnAddComplete = document.getElementById('btnAddComplete');
const listaComplete = document.getElementById('lista-complete');
const btnRemoveInputComplete = document.getElementById('btnRemoveInputComplete');

btnNewComplete.addEventListener('click', () =>{
    criarTarefa(listaComplete, btnNewComplete, btnAddComplete, btnRemoveInputComplete);
})