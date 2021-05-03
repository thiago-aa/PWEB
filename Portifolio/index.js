const divImg = document.getElementById("project");
const description = document.getElementById('description');
const img = document.getElementById('img_inicial');
const fstDesc = document.getElementById('fst-desc');

function todo() {
  img.remove();
  fstDesc.remove();
  divImg.innerHTML = '<a href="https://github.com/thiago-aa/react-todo-app" target="_blank"><img class="print" src="./img/todoList.png" alt="Imagem do app to-do list"></a>';
  description.innerHTML = '<p>Um app de lista de afazeres feito em react.js</p>';
}

function calculadora() {
  img.remove();
  fstDesc.remove();
  divImg.innerHTML = '<a href="https://github.com/thiago-aa/react-calculator" target="blank"><img class="print" src="./img/calculator.png" alt="Imagem do app to-do list"></a>';
  description.innerHTML = '<p>Uma simples calculadora feita com React.js</p>';

  console.log(document.getElementById())
}

function starwars() {
  img.remove();
  fstDesc.remove();
  divImg.innerHTML = '<a href="https://github.com/thiago-aa/react-star-wars-app" targe="_blank"><img class="print" src="./img/Screenshot_Film.png" alt="Imagem do app to-do list"></a>';
  description.innerHTML = '<p>Um app em react feito utilizando a api gratuita <a style="color: #222;" href="http://swapi.dev" target="_blank">swapi.dev.</a></p>'; 
}

function product() {
  img.remove();
  fstDesc.remove();
  divImg.innerHTML = '<a href="https://codepen.io/thiago-aa/full/jOyGaJv" target="_blank"><img class="print" src="./img/productLandingPage.png" alt="Imagem do app to-do list"></a>';
  description.innerHTML = '<p>Uma pagina de divulgação de um produto, a qual faz parte do curso de css e html da FreecodeCamp.</p>'; 
}