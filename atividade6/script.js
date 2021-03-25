let choice = parseInt(prompt('Escolha a sua jogada:\n1 - Pedra\n2 - Papel\n3 - Tesoura\n0 - Sair'));

let computerChoice = Math.random();// x < 0.33 = Pedra 
                                   // 0.33 > x < 0.66 = Papel
                                   // x > 0.66 = Tesoura
while(choice !== 0){
    switch(choice) {
        case 1:
           if( computerChoice < 0.33) {
               alert('O computador escolheu Pedra, vocês empataram :|');
           }  else if (computerChoice > 0.66) {
               alert('O computador escolheu Papel, Você perdeu! D:');
           } else{
               alert('O computador escolheu Tesoura, Você venceu! :D ');
           }
        break;
        case 2:
            if( computerChoice < 0.33) {
                alert('O computador escolheu Pedra, Você venceu :D');
            }  else if (computerChoice > 0.66) {
                alert('O computador escolheu Papel, vocês empataram! :|');
            } else{
                alert('O computador escolheu Tesoura, Você perdeu! D:');
            }
        break;
        case 3:
            if( computerChoice < 0.33) {
                alert('O computador escolheu Pedra, Você perdeu D:');
            }  else if (computerChoice > 0.66) {
                alert('O computador escolheu Papel, Você venceu! :D');
            } else{
                alert('O computador escolheu Tesoura, vocês empataram! :|');
            } 
        break;
    }
    choice = parseInt(prompt('Escolha a sua jogada:\n1 - Pedra\n2 - Papel\n3 - Tesoura\n0 - Sair'));
    computerChoice = Math.random();
}                                   

