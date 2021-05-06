const email = document.getElementById('email');
const nome = document.getElementById('name');
const coment = document.getElementById('coment');
const yes = document.getElementById('yes');
const no = document.getElementById('no');
const correction = document.getElementById('correction');

const validar = () => {
  alert(coment.value.length);
  if(nome.value.length < 10) {
    alert("O nome deve ter no mínimo 10 letras");
  }
  if(coment.value.length < 30) {
    alert('O comentário deve ter no mínimo 30 letras');
  }
  if(no.checked) {
    alert('Que bom que você voltou a essa página!');
  }
  if(yes.checked) {
    alert('Volte sempre a está página!');
  }
}