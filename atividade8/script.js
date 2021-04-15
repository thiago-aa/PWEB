//Forma 1 
var aluno = {
    RA: '0030421913032',
    Nome: 'Thiago'
}
console.log(aluno);

//Forma 2
aluno = new Object();
aluno.RA = 1234;
aluno.Nome = 'thiago';
console.log(aluno);

//Forma 3
aluno = {};
aluno['nome'] = 'tiago';
aluno['ra'] = 798;
console.log(aluno);