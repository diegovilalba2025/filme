document.addEventListener("DOMContentLoaded", () => {
    const filmes = [
      {
        titulo: "Kraven: O Caçador",
        imagem: "imagens/Kraven.jpg",// Coloque a imagem correta para o filme
        video: "https://drive.google.com/file/d/1h02-JJT6EHqsEHhce6Xxq8_bq3VC7Pte/preview",
        sinopse: "Kraven é um dos vilões mais icônicos do universo do Homem-Aranha, e neste filme ele é caçado e caçador.",
        categoria: "acao" // Categoria do filme
      },
      {
        titulo: "Interestelar",
        imagem: "imagens/interestelar.jpg",// Coloque a imagem correta para o filme
        video: "https://drive.google.com/file/d/1litNXKp1kbJsgZW_kLdn3buboFfSbdzY/preview",
        sinopse: "Quando um buraco de minhoca é descoberto perto de Saturno, uma equipe de astronautas viaja através dele para encontrar um novo lar para a humanidade.",
        categoria: "drama" // Categoria do filme
      },
      {
        titulo: "Despertar de um Assassino",
        imagem: "imagens/assassino.jpg", // Coloque a imagem correta para o filme
        video: "https://drive.google.com/file/d/1qtAe7ieAo51oPXcAuT6oD22oCj6iza-4/preview",
        sinopse: "É um thriller psicológico eletrizante que combina ação intensa e suspense de tirar o fôlego, posicionando-se entre os melhores filmes do gênero. A trama começa com um homem que acorda em uma cama de hospital sem qualquer lembrança de sua identidade. Perdido e confuso, ele logo descobre que está sendo procurado pela polícia, acusado de cometer uma série de assassinatos brutais. Essa premissa intrigante mergulha o espectador em uma jornada cheia de mistérios, reviravoltas e adrenalina, mantendo a tensão do início ao fim..",
        categoria: "acao" // Categoria do filme
      },
      {
        titulo: "Eu sou a lenda",
        imagem: "imagens/eusou.jpg", // Coloque a imagem correta para o filme
        video: "https://drive.google.com/file/d/1qtAe7ieAo51oPXcAuT6oD22oCj6iza-4/preview",
        sinopse: "Devastada por uma doença, a raça humana praticamente deixou de existir na Terra. Em Nova Iorque, o último homem vivo é o militar Robert Neville (Will Smith), cuja única companhia é a fiel cadela Sam. O cenário é de abandono, com carros enferrujando e as estruturas da cidade cada vez mais em ruínas. Nesta terrível realidade, ele vive numa casa que fica fortemente trancada durante a noite, quando zumbis que não suportam a luz do dia atacam tudo o que vêem pela frente.",
        categoria: "acao" // Categoria do filme
      },
  
      {
        titulo: "Rede de vingança",
        imagem: "imagens/vingador de.jpg", // Coloque a imagem correta para o filme
        video: "https://drive.google.com/file/d/1vQd-3ecE1DOnPY9ftQnXAQ3wh-oBvJDB/preview"
  , // Link para preview do vídeo
        sinopse: "Em uma perigosa conspiração, Clay tem seu passado exposto para o mundo e, entre outros efeitos colaterais, acaba perdendo uma pessoa muito querida. Tomado pela fúria, ele parte em uma busca frenética por vingança contra aqueles que revelaram seu maior segredo. No entanto, em sua busca para colocar um ponto final no sistema criminoso responsável por sua perda, suas ações acabam tomando proporções nacionais ao envolverem governos e as instituições mais influentes do mundo, colocando-o na mira de diferentes organizações..",
        categoria: "acao" // Categoria do filme
      },
      
      {
        titulo: "filme milagre do destino historia real",
        imagem: "imagens/milagre.jpg",// Coloque a imagem correta para o filme
        video: "",// Link para preview do vídeo
        sinopse: "Milagre do Destino é um emocionante drama inspirado na história real da repórter Marina Alves. Diagnosticada com um linfoma agressivo, Marina (Dani Gondim) enfrenta desafios intensos enquanto busca um doador de medula óssea. No meio dessa jornada.",
        categoria: "drama" // Categoria do filme
      },
  
  
  
  
      {
        titulo: "Mufasa: O Rei Leão",
        imagem: "imagens/mufasa.jpg",// Coloque a imagem correta para o filme
        video: "https://drive.google.com/file/d/1LY8mGVBUsvO8rgcNH0eQUbPICJvZTCFz/preview",//Link para preview do vídeo
        sinopse: "Prólogo do live action de Rei Leão, produzido pela Disney e dirigido por Barry Jenkins, o longa contará a história de Mufasa e Scar antes de Simba. A trama tem a ajuda de Rafiki, Timão e Pumba, que juntos contam a lenda de Mufasa à jovem filhote de leão Kiara, filha de Simba e Nala. Narrado através de flashbacks, a história apresenta Mufasa como um filhote órfão, perdido e sozinho até que ele conhece um simpático leão chamado Taka – o herdeiro de uma linhagem real. O encontro ao acaso dá início a uma grande jornada de um grupo extraordinário de deslocados em busca de seu destino, além de revelar a ascensão de um dos maiores reis das Terras do Orgulho..",
        categoria:  "aventura" // Categoria do filme
      },
      
      
      {
        titulo: "Acertando O Tom",
        imagem: "imagens/tom.jpg",// Coloque a imagem correta para o filme
        video: "https://drive.google.com/file/d/1LWKoULnAjdPa19-bzeMabmM8xJqsUbKv/preview",//Link para preview do vídeo
        sinopse: "Sam é uma jovem que sonha em viver de música. Quando é forçada a se mudar e a entrar num coro gospel, ela precisa ajudar seus companheiros a ganhar uma competição..",
        categoria:  "drama" // Categoria do filme
      },
      
      { titulo:"O Jogo da Imitação",
        imagem:"imagens/jogo.jpg",
        video:"https://drive.google.com/file/d/1zEecBLbmh1cn0GSL1QKiBDclfvm1GvEw/preview",
        sinopse:"“O Jogo da Imitação” é um drama biográfico lançado em 2014, sob a direção de Morten Tyldum. O filme retrata a vida de Alan Turing, um matemático e criptoanalista britânico, que desempenhou um papel crucial na decifração dos códigos da máquina Enigma durante a Segunda Guerra Mundial. Com uma poderosa performance de Benedict Cumberbatch no papel principal, a narrativa explora não apenas os desafios intelectuais enfrentados por Turing, mas também suas lutas pessoais em uma época de intolerância. ",
        categoria:"Ficção Científica",// Categoria do filme
      },
  
  
  
  
  
  
  
      
  
  
  
      // Adicione outros filmes abaixo conforme necessário
    ];
  
    const containerFilmes = document.getElementById("filmes-em-destaque");
    const containerCategorias = document.getElementById("categorias");
    const containerSobre = document.getElementById("sobre");
  
    // Função para adicionar filmes a uma seção
    function adicionarFilmes(container, filmesArray) {
      container.innerHTML = ''; // Limpa os filmes existentes
      filmesArray.forEach((filme) => {
        const divFilme = document.createElement("div");
        divFilme.classList.add("filme");
  
        divFilme.innerHTML = `
          <img src="${filme.imagem}" alt="${filme.titulo}" class="imagem-filme" data-video="${filme.video}">
          <h3>${filme.titulo}</h3>
          <button class="ver-mais">Ver Mais</button>
          <div class="sinopse" style="display: none;">
            <p>${filme.sinopse}</p>
          </div>
        `;
  
        // Adiciona o filme à seção
        container.appendChild(divFilme);
      });
  
      // Função para exibir ou ocultar a sinopse ao clicar no botão "Ver Mais"
      const botoesVerMais = container.querySelectorAll('.ver-mais');
      botoesVerMais.forEach((botao) => {
        botao.addEventListener('click', (evento) => {
          const filmeDiv = evento.target.closest('.filme');
          const sinopseDiv = filmeDiv.querySelector('.sinopse');
          
          if (sinopseDiv.style.display === 'none' || sinopseDiv.style.display === '') {
            sinopseDiv.style.display = 'block'; 
            evento.target.textContent = 'Ver Menos'; 
          } else {
            sinopseDiv.style.display = 'none'; 
            evento.target.textContent = 'Ver Mais'; 
          }
        });
      });
  
      // Adiciona a funcionalidade de abrir o vídeo ao clicar na imagem
      const imagensFilmes = container.querySelectorAll('.imagem-filme');
      imagensFilmes.forEach((imagem) => {
        imagem.addEventListener('click', () => {
          const videoSrc = imagem.getAttribute('data-video'); // Pega o caminho do vídeo
          window.open(videoSrc, '_blank'); // Abre o link do Google Drive em uma nova aba
        });
      });
    }
  
    // Inicializa os filmes em destaque com Interestelar, Kraven e Despertar de um Assassino, Eu sou a lenda ,comandante na altura, Mufasa: O Rei Leão incluido
    adicionarFilmes(containerFilmes, filmes.filter(filme => filme.categoria === "acao" || filme.categoria === "drama" || filme.categoria === "comedia" || filme.categoria === "FicçãoCientífica"));
  
  
    // Função para exibir a seção correta
    function exibirSeção(secao) {
      // Esconde todas as seções
      containerFilmes.style.display = "none";
      containerCategorias.style.display = "none";
      containerSobre.style.display = "none";
  
      // Exibe a seção selecionada
      secao.style.display = "block";
    }
  
    // Adiciona a funcionalidade ao botão "Home"
    const btnHome = document.getElementById('btn-home');
    btnHome.addEventListener('click', () => {
      exibirSeção(containerFilmes); // Exibe filmes em destaque
    });
  
    // Adiciona a funcionalidade ao botão "Categorias"
    const btnCategorias = document.getElementById('btn-categorias');
    btnCategorias.addEventListener('click', () => {
      exibirSeção(containerCategorias); // Exibe categorias
  
      // Exibe filmes por categoria
      const filmesDeAcao = filmes.filter(filme => filme.categoria === "acao");
      const filmesDeDrama = filmes.filter(filme => filme.categoria === "drama");
      const filmesDeComedia = filmes.filter(filme => filme.categoria === "comedia");
      const filmesDeFicçãoCientífica = filmes.filter(filme => filme.categoria === "Ficção Científica");
  
  
  
  
  
      // Adiciona filmes nas suas respectivas categorias
      adicionarFilmes(document.getElementById('acao-filmes'), filmesDeAcao);
      adicionarFilmes(document.getElementById('drama-filmes'), filmesDeDrama);
      adicionarFilmes(document.getElementById('comedia-filmes'), filmesDeComedia);
      adicionarFilmes(document.getElementById('Ficção Científica-filmes'), filmesDeFicçãoCientífica);
  
  
  
  
  
    });
  
    // Adiciona a funcionalidade ao botão "Sobre"
    const btnSobre = document.getElementById('btn-sobre');
    btnSobre.addEventListener('click', () => {
      exibirSeção(containerSobre); // Exibe sobre
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    // Adicionar evento de clique no botão de "Sair"
    const btnSair = document.getElementById("btn-sair");
  
    if (btnSair) {
      btnSair.addEventListener("click", () => {
        // Redireciona para a página de login
        window.location.href = "login.html"; // Substitua pelo nome correto da página de login
      });
    }
  });