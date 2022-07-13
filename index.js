let btnEnviar = document.querySelectorAll('#botao-cadastrar button')[0];
let nome = document.querySelectorAll('.wrap input')[0];
let email = document.querySelectorAll('.wrap input')[1];
let data = document.querySelectorAll('.wrap input')[2];
let telefone = document.querySelectorAll('.wrap input')[3];
let tabela = document.querySelector('#tabela-cadastro');
let BD = [];


btnEnviar.onclick = function(){
    let numeros = new Object();
    numeros.nome = nome.value;
    numeros.email = email.value;
    numeros.data = data.value;
    numeros.telefone = telefone.value;
    numeros.id = BD.length +1;
    BD.push(numeros);
    tabela.innerHTML +=` 
    <tbody></tr><tr><td>${numeros.id}</td><td>${numeros.nome}</td><td>${numeros.email}</td><td>${numeros.data}</td><td>${numeros.telefone}</td></tr></tbody>`;
}



function montarTabela(){
    for (let i = 1; i < BD.length; i++){
        tabela.innerHTML += ` 
        <tbody></tr><tr><td>${numeros.id}</td><td>${BD[i].nome}</td><td>${BD[i].email}</td><td>${BD[i].data}</td><td>${BD[i].telefone}</td></tr></tbody`;
    }
     
}





