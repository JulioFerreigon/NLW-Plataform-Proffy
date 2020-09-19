//Procurar o botao
document.querySelector("#add-time")
//Quando clicar no botao
.addEventListener('click', cloneField)
//Executar acao
function cloneField() {
//Duplicar os campos
    //que campo ?
    const newfieldContainer = document.querySelector(".schedule-item")
    //agora clone
    .cloneNode(true)
//limpe os campos
    //que campos ?
    const fields = newfieldContainer.querySelectorAll('input')
    //para cada campo, limpe-os
    fields.forEach(function(field) {
        //pegando o field do momento e limpando-o
        field.value = ""
        //repita até todos os fields estarem limpo
    })
//Coloque na página
    //onde ?
    document.querySelector("#schedule-items")
    //adicione um filho a ele
    .appendChild(newfieldContainer) //adicionado como filho embaixo do ultimo filho do schedule-items
}

//fazendo o botao de delete
//Procurar botao
document.querySelector("#add-time")
//Quando clicar no botao
.addEventListener('click', cloneDelete)
//Executar acao
function cloneDelete() {
//Duplicar os campos
    //que campo ?
    const newDeleteContainer = document.querySelector(".delete-item-wrapper")
    //agora clone
    .cloneNode(true)
//Coloque na página
    //onde ?
    document.querySelector("#schedule-items")
    //adicione um filho a ele
    .appendChild(newDeleteContainer) //adicionado como filho embaixo do ultimo filho do schedule-items
}