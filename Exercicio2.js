let alunos = [
{nome: " Louise ", N1: 10, N2: 7, N3: 8},
{nome: " Rodrigo ", N1: 9, N2: 8, N3: 9.5},
{nome: " Maria ", N1: 7.5, N2: 7.5, N3: 9.7},
{nome: " Yago ", N1: 9.5, N2: 8.4, N3: 9.7}]

let total = 0

for(i=0; i < alunos.length; i++){
    total += alunos[i].nome
    total += alunos[i].N1
    total += alunos [i].N2
    total += alunos [i].N3

let media = (alunos[i].N1 + alunos[i].N2 + alunos[i].N3) / 3

console.log ("O/A estudante" + alunos[i].nome + "obteve a media - " + media)
}