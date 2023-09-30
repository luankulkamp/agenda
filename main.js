const form = document.getElementById('form-contato');
const numeroContato = document.getElementById('tel');

let linhas = '';
let nome = [];
let telefone = [];
let textoAjustado;

form.addEventListener('submit', function(e){

    e.preventDefault();

    mascaraTelefone();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){
    const inputNomeContato = document.getElementById('name');
    const inputNumeroContato = document.getElementById('tel');

    if(nome.includes(inputNomeContato.value)){
        alert(`O nome ${inputNomeContato.value} já foi cadastrado`);
    }else if (telefone.includes(textoAjustado)){
        alert(`O telefone ${textoAjustado} já foi cadastrado`);
    } else{

        nome.push(inputNomeContato.value);
        telefone.push(textoAjustado);

        let linha = '<tr>';
        linha+=`<td id="nome-tabela">${inputNomeContato.value}</td>`;
        linha+=`<td id="numero-tabela">${textoAjustado}</td>`;
        linha+='</tr>';

        linhas+=linha;

        inputNomeContato.value = '';
        inputNumeroContato.value = '';
        
    }
}

function atualizaTabela(){
    document.querySelector('tbody').innerHTML = linhas;
}

function mascaraTelefone(){
    const textoAtual = numeroContato.value;
    const isCelular = textoAtual.length === 9;
    const isCelularDDD = textoAtual.length === 11;

    if(isCelular){
        const parte1 = textoAtual.slice(0,5);
        const parte2 = textoAtual.slice(5,9);
        textoAjustado = `${parte1}-${parte2}`;

    } else if(isCelularDDD){
        const parte1 = textoAtual.slice(0,2);
        const parte2 = textoAtual.slice(2,7);
        const parte3 = textoAtual.slice(7, 11);

        textoAjustado = `(${parte1}) ${parte2}-${parte3}`;

    } else{
        const parte1 = textoAtual.slice(0,4);
        const parte2 = textoAtual.slice(4,8);

        textoAjustado = `${parte1}-${parte2}`;
    }
}