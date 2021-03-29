const pedra = document.getElementById('pedra');
const papel = document.getElementById('papel');
const tesoura = document.getElementById('tesoura');
const resultDiv = document.getElementById('result');
console.log(resultDiv);
let choice;
const handleChoice = () => {
    let computerChoice = Math.random();// x < 0.33 = Pedra 
                                       // 0.33 > x < 0.66 = Papel
                                       // x > 0.66 = Tesoura
    if(pedra.checked) {
        choice = 1;
        console.log(choice);
    } else if(papel.checked) {
        choice = 2;
        console.log(choice);
    } else {
        choice = 3;
        console.log(choice);
    }
    switch(choice) {
        case 1:
           if( computerChoice < 0.33) {
               document.getElementById('result').innerHTML = 'O computador escolheu Pedra, vocês empataram :| <button onclick="handleReset()">Jogar Novamente</button>';
           }  else if (computerChoice > 0.66) {
            document.getElementById('result').innerHTML = 'O computador escolheu Papel, Você perdeu! D: <button onclick="handleReset()">Jogar Novamente</button>';
           } else{
            document.getElementById('result').innerHTML = 'O computador escolheu Tesoura, Você venceu! :D <button onclick="handleReset()">Jogar Novamente</button>';
           }
        break;
        case 2:
            if( computerChoice < 0.33) {
                document.getElementById('result').innerHTML = 'O computador escolheu Pedra, Você venceu :D <button onclick="handleReset()">Jogar Novamente</button>';
            }  else if (computerChoice > 0.66) {
                document.getElementById('result').innerHTML = 'O computador escolheu Papel, vocês empataram! :| <button onclick="handleReset()">Jogar Novamente</button>';
            } else{
                document.getElementById('result').innerHTML = 'O computador escolheu Tesoura, Você perdeu! D: <button onclick="handleReset()">Jogar Novamente</button>';
            }
        break;
        case 3:
            if( computerChoice < 0.33) {
                document.getElementById('result').innerHTML = 'O computador escolheu Pedra, Você perdeu D: <button onclick="handleReset()">Jogar Novamente</button>';
            }  else if (computerChoice > 0.66) {
                document.getElementById('result').innerHTML = 'O computador escolheu Papel, Você venceu! :D <button onclick="handleReset()">Jogar Novamente</button>';
            } else{
                document.getElementById('result').innerHTML = 'O computador escolheu Tesoura, vocês empataram! :| <button onclick="handleReset()">Jogar Novamente</button>';
            } 
        break;
    }
}

const handleReset = () => {
    document.getElementById('form').reset();
    document.getElementById('result').innerHTML = '';
}
