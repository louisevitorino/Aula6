let pessoas = [
{nome: " Louise ", idade: 34, cidade: " Rio de Janeiro "},
{nome: " Rodrigo ", idade: 45, cidade: " Rio de Janeiro "},
{nome: " Lucia ", idade: 67, cidade: " Alagoinhas "},
{nome: " Giulia ", idade: 25, cidade: " Barra de Sao Joao "}]

let total = 0

for(i = 0; i < pessoas.length; i++){
    total += pessoas[i].nome
    total += pessoas[i].idade
    total += pessoas[i].cidade

console.log(total)
}