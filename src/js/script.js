//DECLARAÇÃO DE VARIAVEIS 
let tarefa =[];

//FUNÇÃO DE VALIDAÇÃO
const validarCampo=()=>{
    let valida =false;
    if(document.getElementById("task").value == "") valida=true;
    return valida;
}

//FUNÇÃO ADICIONAR TAREFA
function adicionarTarefa(){
    let linha =document.getElementById("task")

    if(validarCampo()){
        //alert("Preencha o campo Tarefa")
        Swal.fire({
            icon:"warning",
            title:"Atenção",
            text:"Preencha o campo Tarefa",
            confirmButtonColor:"#0D2C4AFF",
            confirmButtonText:"Ok"
        })
    }
    else{
        tarefa.push(linha.value);
        linha.value="";
        listarTarefas();
        Swal.fire({
            icon:"success",
            title:"Tarefa Adicionada com sucesso",
            showConfirmButton:false,
            timer:1500
        })
    }
}

//FUNÇÃO PARA ADICIONAR COM O BOTÃO ENTER
const taskInput =document.getElementById("task");

if(taskInput){
    taskInput.addEventListener('keypress',(e)=>{
    if(e.key === 'Enter'){
        e.preventDefault();
        adicionarTarefa();
    }
})
}

//FUNÇÃO LISTAR TAREFAS
function listarTarefas(){
    let valor="";
    for(let i =0; i < tarefa.length;i++){
        valor += `
            <div class="task-item">
                <span>${tarefa[i]}</span>
                <button onclick="editarTarefa(${i})">Editar</button>
                <button onclick="removerTarefa(${i})">Remover</button>
            </div>
        
        `
    }
    document.getElementById("lista").innerHTML =valor;
}

//FUNÇÃO REMOVER TAREFA
function removerTarefa(i){

    Swal.fire({
        icon:"warning",
        title:"Tem certeza que deseja Apagar ?",
        text:"Essa tarefa será apagada",
        showCancelButton:true,
        confirmButtonColor:"#6B095BFF",
        confirmButtonText:"Sim",
        cancelButtonText:"Cancelar",
    }).then((result)=>{
        if(result.isConfirmed){
            tarefa.splice(i,1);
            listarTarefas();
            Swal.fire(
                "Apagado",
                "A tarefa foi removida da lista",
                "success"
            )
        }
    })
}

//FUNÇÃO EDITAR TAREFA
function editarTarefa(indice){
    document.getElementById("task").value = tarefa[indice];
    indiceEditar = indice;
    document.getElementById("task").focus();
}

//FUNÇÃO SALVAR TAREFA
function salvarTarefa(){
    if(validarCampo()){
        alert("Preencha o campo tarefa")
    }else if(indiceEditar !== -1){
        tarefa[indiceEditar]=document.getElementById("task").value;
        document.getElementById("task").value ="";
        listarTarefas();
        Swal.fire({
            icon:"success",
            title:"Tarefa Alterada",
            showConfirmButton:false,
            timer:1500
        })
    }
    else{
        console.log("nenhuma tarefa selecionada")
    }
    document.getElementById("task").focus();
}