
const form = document.getElementById('form-atividade');
let linhas = '';

form.addEventListener ('submit', function(e) {
    e.preventDefault();

const inputNomeContato = document.getElementById('Nome-Contato');
const inputTelefoneContato = document.getElementById('Telefone-Contato');

let linha = '<tr>';
    linha += `<td> ${inputNomeContato.value}</td>`;
    linha += `<td> ${inputTelefoneContato.value}</td>`;
    linha += `</tr>`;

linhas += linha;

    const CorpoTabela = document.querySelector("tbody");
    CorpoTabela.innerHTML = linhas;

    inputNomeContato.value = '' ;
    inputTelefoneContato.value = '' ;

})

let linha = '<tr>';
        linha += `<td> Contato adicionado com sucesso! </td>`;
        linha += `</tr>`;