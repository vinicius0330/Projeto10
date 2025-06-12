// Declaração de variáveis
let tarefa =[];

// Função de validação
const validarCampo=()=>{
    let valida =false;
    if(document.getElementById("task").value == "") valida=true;
    return valida;
}

// Função adicionar tarefa
function adicionarTarefa(){
    let linha =document.getElementById("task")

    if(validarCampo()){
        // alert("Preencha o campo Tarefa")
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
            title:"Tarefa adicionado com sucesso",
            showConfirmButton:false,
            timer:1500,
        })
    }
}

// Função listar tarefa
function listarTarefas(){
    let valor="";
    for(let i =0; i < tarefa.length;i++){
        valor+= tarefa[i] + "<br>";
    }
    document.getElementById("lista").innerHTML =valor;
}

// Função remover tarefa
function removerTarefa(){

    Swal.fire({
        icon:"warning",
        title:"Tem certeza que deseja apagar?",
        text:"Essa tarefa será APAGADA",
        showCancelButton:true,
        confirmButtonColor:"#6b095bff",
        confirmButtonText:"Sim, apagar",
        cancelButtonColor:"red",
        cancelButtonText:"Cancelar",
    }).then((result)=>{
        if(result.isConfirmed){
            tarefa.pop(); //Remove o último item adicionado
            listarTarefas();
            Swal.fire(
                "Apagado",
                "A tarefa foi removida da lista",
                "success",
            )
        }
    })
}