var jogador1 = parseInt (prompt("Pedra(1), Papel(2) ou Tesoura(3)?"));
var jogador2 = parseInt (Math.random()*10);


if(jogador1 < 3){
    jogador2 = 1;
    }
  else if(jogador1 >= 3 && jogador1 < 6){
    jogador1 = 2;
    }
  else{
    jogador1 = 3;
    }

 if(jogador2 == 1 && jogador1 == 1 ? alert('Empate'): jogador2 == 2 && jogador1 == 2 ? alert('Empate'): jogador2 == 3 && jogador1 == 1){
        alert('Empate');
    }
    

 else if(jogador2 == 1 && jogador1 == 3 ? alert('Pedra quebra tesoura.'): jogador2 == 2 && jogador1 == 1 ? alert('Papel cobre a pedra.'): jogador2 == 3 && jogador1 == 2){
  alert('Tesoura corta papel.');
  }


 else if(jogador2 == 1 && jogador1 == 2 ? alert('Papel cobre a pedra'): jogador2 == 2 && jogador1 == 3 ? alert('Tesoura corta papel'): jogador2 == 3 && jogador1 == 1){
  alert('Pedra quebra tesoura');
  }

 
  
