var Aluno1 = {
    ra: '1234',
    nome: 'Mariana Santos'
  }
  alert("RA:" + Aluno1.ra + "\nNome: " + Aluno1.nome);
  
  Aluno1.ra = '5678';
  Aluno1.nome = 'Bernardo';
  alert("RA:" + Aluno1.ra + "\nNome: " + Aluno1.nome);
  
  Aluno1['ra'] = '91011';
  Aluno1['nome'] = 'Kiko ';
  alert("RA:" + Aluno1.ra + "\nNome: " + Aluno1.nome);
