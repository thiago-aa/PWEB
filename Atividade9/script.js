//Questão 1
function retangulo(x,y) {
    this.x = x;
    this.y = y;
    this.calcArea = function () {
        console.log(x*y);
    }
}

var meuRetangulo = new retangulo(2,5);
meuRetangulo.calcArea();


//Questão 2
function Conta() {
    var nomeCorrentista, banco, numConta, saldo;

    this.getNomeCorrentista = () => {
        return nomeCorrentista;
    }
    this.setNomeCorrentista = nome => {
        nomeCorrentista = nome;
    }
    this.getBanco = () => {
        return banco;
    }
    this.setBanco = value=> {
        banco = value;
    }
    this.getConta = () => {
        return conta;
    }
    this.setConta = value => {
        conta = value;
    }
    this.getNumConta = () => {
        return numConta;
    }
    this.setNumConta = value => {
        numConta = value;
    }

    this.getSaldo = () => {
        return saldo;
    }
    this.setSaldo = value => {
        saldo = value;
    }
}

function Corrente() {
    var saldoEspecial;
    this.getSaldoEspecial = () => {
        return saldoEspecial;
    }
    this.setSaldoEspecial = value => {
        saldoEspecial = value
    }
}

function Poupanca() {
    var juros, dataVencimento;
    this.getJuros = () => {
        return juros;
    }
    this.setJuros = value => {
        juros = value;
    }

    this.getDataVencimento = () => {
        return dataVencimento;
    }
    this.setDataVencimento = value => {
        dataVencimento = value
    }
}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

nCorrente = new Corrente();
nCorrente.setNomeCorrentista('Thiago');
nCorrente.setBanco('Itau');
nCorrente.setNumConta('123');
nCorrente.setSaldo(250.00);
nCorrente.setSaldoEspecial(500.00);
console.log(
    `CONTA CORRENTE
     Nome Correntista: ${nCorrente.getNomeCorrentista()}\n
     Banco: ${nCorrente.getBanco()}\n
     Numero da conta: ${nCorrente.getNumConta()}\n
     Saldo: ${nCorrente.getSaldo()}\n
     Saldo Especial: ${nCorrente.getSaldoEspecial()}`
);

nPoupanca = new Poupanca();
nPoupanca.setNomeCorrentista('Tiago');
nPoupanca.setBanco('Bradesco');
nPoupanca.setNumConta(321);
nPoupanca.setSaldo(25.00);
nPoupanca.setJuros(0.5);
nPoupanca.setDataVencimento('22/01');
console.log(
    `CONTA POUPANÇA
     Nome Correntista: ${nPoupanca.getNomeCorrentista()}\n
     Banco: ${nPoupanca.getBanco()}\n
     Numero da conta: ${nPoupanca.getNumConta()}\n
     Saldo: ${nPoupanca.getSaldo()}\n
     Saldo Especial: ${nPoupanca.getJuros()}\n
     Data de Vencimento: ${nPoupanca.getDataVencimento()}`
);
