const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item-carrossel");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });

    items[currentItem].classList.add("current-item");
  });
});
/*document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("myVideo");
  var text = document.getElementById("myText");

  // Defina o tempo em que deseja alterar a cor (em segundos)
  var tempoParaMudarCor = 4; // por exemplo, 5 segundos

  video.addEventListener("timeupdate", function () {
    if (video.currentTime >= tempoParaMudarCor) {
      text.style.color = " #676c72"; // mude para a cor desejada
   // }else{text.style.color = "white";}
  });
});
*/
document.addEventListener('DOMContentLoaded', function() {
  const section = document.getElementById('quem-somos');
  const triggerHeight = 250; // Altura em pixels a partir do topo da página para acionar a animação

  function handleScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > triggerHeight) {
      section.classList.add('scroll-trigger');
      window.removeEventListener('scroll', handleScroll);
    }
  }

  // Adiciona o ouvinte de evento de rolar
  window.addEventListener('scroll', handleScroll);

  // Chama a função inicialmente para verificar a posição no carregamento da página
  handleScroll();
});

function buscarEndereco(cep) {
  // Remover caracteres não numéricos do CEP
  cep = cep.replace(/\D/g, '');

  // Verificar se o CEP tem 8 dígitos
 // if (cep.length !== 8) {
   // alert("CEP inválido. Por favor, insira um CEP válido com 8 dígitos.");
   // return;
  //}

  // Construir a URL da API do Via CEP
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  // Fazer uma requisição HTTP GET para a API do Via CEP
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Verificar se a resposta da API contém um erro
      if (data.erro) {
        alert("CEP não encontrado. Por favor, insira um CEP válido.");
        return;
      }

      // Preencher os campos de rua, bairro, cidade e estado
      document.getElementById("logradouro").value = data.logradouro;
      document.getElementById("bairro").value = data.bairro;
      document.getElementById("localidade").value = data.localidade;
      document.getElementById("uf").value = data.uf;
    })
    .catch(error => console.error("Erro ao buscar o endereço:", error));
}


function formatarValor(input) {
  // Remove caracteres não numéricos
  let valor = input.value.replace(/[^\d]/g, '');

  // Adiciona pontos e vírgulas no valor
  valor = (parseFloat(valor) / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 });

  // Atualiza o valor no campo
  input.value = valor;
}

document.getElementById("myForm").addEventListener("submit", function (event) {
  // Adicione aqui a lógica para enviar o formulário ou realizar outras ações necessárias
  event.preventDefault(); // Evita o envio do formulário para este exemplo
});
let currentIndex = 0;
  
  // Define um evento para restaurar o estilo quando o usuário clicar novamente na imagem ampliada
  element.onclick = function() {
    element.style.transform = "scale(1.2)";
   
  };

function mudarImagem(direction) {
  const carrossel = document.getElementById('carrossel');
  const imagens = carrossel.getElementsByClassName('imagem');
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = imagens.length - 1;
  } else if (currentIndex >= imagens.length) {
    currentIndex = 0;
  }
  const offset = imagens[currentIndex].offsetLeft;
  carrossel.scrollLeft = offset;
}
function mostrarRestante() {
  var restanteEquipe = document.getElementById('restante-equipe');
  var linkContinueLendo = document.querySelector('a[href="javascript:void(0);"]');

  if (restanteEquipe.style.display === 'none') {
      restanteEquipe.style.display = 'block';
      linkContinueLendo.style.display = 'none';
  } else {
      restanteEquipe.style.display = 'none';
      linkContinueLendo.style.display = 'inline';
  }
}