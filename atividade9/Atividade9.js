var i, numero =[3], maior = 0;

for (i = 0; i < 3; i++)
numero[i] = parseInt (prompt ('informe o número'));

maior = Math.max.apply(null, numero);

numero.sort();

alert('O número maior é: ' + maior);

for(i = 0; i < 3; i++)
alert ('\n A ordem crescente é: ' + numero [0] + ',' + numero [1]+ ','+ numero [2]);
