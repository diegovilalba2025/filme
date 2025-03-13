document.addEventListener("DOMContentLoaded", () => {
    const filmes = [
        {
            titulo: "Kraven: O Caçador",
            imagem: "imagens/Kraven.jpg",
            video: "https://drive.google.com/file/d/1h02-JJT6EHqsEHhce6Xxq8_bq3VC7Pte/preview",
            sinopse: "Kraven é um dos vilões mais icônicos do universo do Homem-Aranha, e neste filme ele é caçado e caçador.",
            categoria: "acao"
        },
        {
            titulo: "Interestelar",
            imagem: "imagens/interestelar.jpg",
            video: "https://drive.google.com/file/d/1litNXKp1kbJsgZW_kLdn3buboFfSbdzY/preview",
            sinopse: "Quando um buraco de minhoca é descoberto perto de Saturno, uma equipe de astronautas viaja através dele para encontrar um novo lar para a humanidade.",
            categoria: "drama"
        },
        {
            titulo: "Despertar de um Assassino",
            imagem: "imagens/assassino.jpg",
            video: "https://drive.google.com/file/d/1qtAe7ieAo51oPXcAuT6oD22oCj6iza-4/preview",
            sinopse: "Um thriller psicológico eletrizante, onde um homem acorda sem memória e descobre que é procurado pela polícia.",
            categoria: "acao"
        },
        {
            titulo: "Eu sou a lenda",
            imagem: "imagens/eusou.jpg",
            video: "https://drive.google.com/file/d/1y5fVqIOFvzXpeceVHkzmvk9nCICCHYlv/preview",
            sinopse: "Após uma epidemia devastadora, o militar Robert Neville luta para sobreviver em um mundo tomado por zumbis.",
            categoria: "acao"
        },
        {
            titulo: "Rede de vingança",
            imagem: "imagens/vingador de.jpg",
            video: "https://drive.google.com/file/d/1vQd-3ecE1DOnPY9ftQnXAQ3wh-oBvJDB/preview",
            sinopse: "Clay tem seu passado exposto e busca vingança contra aqueles que destruíram sua vida.",
            categoria: "acao"
        },
        {
            titulo: "Milagre do destino",
            imagem: "imagens/milagre.jpg",
            video: "https://drive.google.com/file/d/1fjODfZc9v59pcPtaANPHTgBukSg7aQbL/preview",
            sinopse: "Baseado em uma história real, uma mulher luta contra um câncer e busca um doador de medula.",
            categoria: "drama"
        },
        {
            titulo: "438 Days",
            imagem: "imagens/438.jpg",
            video: "https://drive.google.com/file/d/1WCNxgvWU6BhAhQ44eMW37U_So0dIPGR7/preview",
            sinopse: "A história real de dois jornalistas presos injustamente durante 438 dias.",
            categoria: "acao"
        },
        {
            titulo: "Fuga da escravidão",
            imagem: "imagens/max.jpg",
            video: "https://drive.google.com/file/d/1dUNzkZ5vZXyVknS0NQJQjD0Pu5-oPug5/preview",
            sinopse: "A emocionante história de um escravo fugindo para a liberdade.",
            categoria: "terror"
        },
  
  
  
        {
          titulo: "Parça 2",
          imagem: "imagens/parça.jpg",
          video: "https://drive.google.com/file/d/1eHmse_H7oXTEVXQBULiE-C2adhQvkpkm/preview",
          sinopse: "Em os Parças 2, Romeu (Bruno de Luca) precisa conseguir dinheiro para deixar o país o quanto antes, já que China saiu da cadeia e está em busca de vingança. Com o objetivo de ajudar o parça, Toin (Tom Cavalcante), Ray Van (Whindersson Nunes) e Pilôra (Tirulipa) juntam forças para reformar uma colônia de férias, de forma a atrair jovens de todo tipo e conseguir levantar o dinheiro. Quando o empreendimento enfim começa a funcionar, eles logo passam a competir com uma colônia vizinha, bem mais requintada.",
          categoria: "comedia"
      },
  
        
      {
        titulo: "To de Graça2",
        imagem: "imagens/to de graça 2.jpg",
        video: "https://drive.google.com/file/d/1eHZRZinM18p6LA1lCo98iA867Q-DLGBe/preview",
        sinopse: "Em os Parças 2, Romeu (Bruno de Luca) precisa conseguir dinheiro para deixar o país o quanto antes, já que China saiu da cadeia e está em busca de vingança. Com o objetivo de ajudar o parça, Toin (Tom Cavalcante), Ray Van (Whindersson Nunes) e Pilôra (Tirulipa) juntam forças para reformar uma colônia de férias, de forma a atrair jovens de todo tipo e conseguir levantar o dinheiro. Quando o empreendimento enfim começa a funcionar, eles logo passam a competir com uma colônia vizinha, bem mais requintada.",
        categoria: "comedia"
    },
  
    {
      titulo: "Comandante na altura",
      imagem: "imagens/altura.jpg",
      video: "https://drive.google.com/file/d/1uVwDJ0_jQHTcAUGmoFohX-hCxaFwxjjR/preview",
      sinopse: "Baseado em um acidente aéreo real. Quando o para-brisas de uma aeronave comercial se estilhaça a 30.000 pés de altitude, um piloto e sua tripulação farão de tudo para garantir a segurança dos passageiros e pousar o avião..",
      categoria: "acao"
  },
  
  {
      titulo: "Capitão América 2025",
      imagem: "imagens/america.jpg",
      video: "https://drive.google.com/file/d/1-hjZmItqFR2-0FC53EfBAFE27lOpWcjc/preview",
      sinopse: "Para provar a inocência de um amigo, o novo Capitão América vai contra todos, inclusive o general 'Thunderbolt' Ross, agora o presidente dos Estados Unidos. Descobrindo uma rede de conspirações, Sam Wilson redefine o que é ser um super-herói em um admirável mundo novo..",
      categoria: "acao"
  },
  
  {
      titulo: "Troia",
      imagem: "imagens/troia.jpg",
      video: "https://drive.google.com/file/d/1VioR1tEwDejj93y3UkiMeBO6uKGuAZ96/preview",
      sinopse: "Em 1193 A.C., Paris (Orlando Bloom) é um príncipe que provoca uma guerra da Messência contra Tróia, ao afastar Helena (Diane Kruger) de seu marido, Menelaus (Brendan Gleeson). Tem início então uma sangrenta batalha, que dura por mais de uma década. A esperança do Priam (Peter O'Toole), rei de Tróia, em vencer a guerra está nas mãos de Aquiles (Brad Pitt), o maior herói da Grécia, e seu filho Hector (Eric Bana)..",
      categoria: "acao"
  },
    
  
  
  {
      titulo: "A Ascensão do império '300'",
      imagem: "imagens/300.jpg",
      video: "https://drive.google.com/file/d/1iGcZbfhZHfs-f3RkBBaJNEpmksj0NAfx/preview",
      sinopse: "Grécia, 480 AC. Na Batalha de Termópilas, o rei Leônidas (Gerard Butler) e seus 300 guerreiros de Esparta lutam bravamente contra o numeroso exército do rei Xerxes (Rodrigo Santoro). No front de batalha, eles enfrentam desafios que marcam para sempre os destinos de seus povos. Enquanto enfrentam um dos maiores confrontos da história, a Rainha Gorgos tenta enviar reforços e ajuda para Leônidas. Após três dias de muita luta, porém, todos os espartanos são mortos. Menos Dilos, o único sobrevivente que passa, então, a narrar os acontecimentos desse evento colossal. O sacrifício e a dedicação destes homens uniu a Grécia no combate contra o inimigo persa. Dirigido por Zack Snyder, 300 é um épico sobre coragem, liberdade e martírios...",
      categoria: "acao"
  },
  
  
  
  
  
  {
      titulo: "Mufasa: O Rei Leão",
      imagem: "imagens/mufasa.jpg",
      video: "https://drive.google.com/file/d/1LY8mGVBUsvO8rgcNH0eQUbPICJvZTCFz/preview",
      sinopse: "Prólogo do live action de Rei Leão, produzido pela Disney e dirigido por Barry Jenkins, o longa contará a história de Mufasa e Scar antes de Simba. A trama tem a ajuda de Rafiki, Timão e Pumba, que juntos contam a lenda de Mufasa à jovem filhote de leão Kiara, filha de Simba e Nala. Narrado através de flashbacks, a história apresenta Mufasa como um filhote órfão, perdido e sozinho até que ele conhece um simpático leão chamado Taka – o herdeiro de uma linhagem real. O encontro ao acaso dá início a uma grande jornada de um grupo extraordinário de deslocados em busca de seu destino, além de revelar a ascensão de um dos maiores reis das Terras do Orgulho..",
      categoria:  "acao"
    },
    
    
    {
      titulo: "Acertando O Tom",
      imagem: "imagens/tom.jpg",// Coloque a imagem correta para o filme
      video: "https://drive.google.com/file/d/1LWKoULnAjdPa19-bzeMabmM8xJqsUbKv/preview",//Link para preview do vídeo
      sinopse: "Sam é uma jovem que sonha em viver de música. Quando é forçada a se mudar e a entrar num coro gospel, ela precisa ajudar seus companheiros a ganhar uma competição..",
      categoria:  "drama" // Categoria do filme
    },

    {
        titulo: "Auto da Compadecida 2",
        imagem: "imagens/auto.jpg",// Coloque a imagem correta para o filme
        video: "https://drive.google.com/file/d/1euL4BkMYj9GZfYDnHBc_EevunJm4AdH7/preview",//Link para preview do vídeo
        sinopse: " Após 20 anos desaparecido, João Grilo retorna para a cidade de Taperoá e reencontra com seu fiel escudeiro Chicó, que carrega adiante a história de que Nossa Senhora operou um milagre e ressuscitou o amigo. João Grilo, então, agora é considerado uma espécie de santo e seu status de celebridade chama a atenção especial dos dois políticos mais poderosos da região, querendo utilizá-lo como cabo eleitoral. Vendo toda essa comoção como uma oportunidade para finalmente enriquecer, João Grilo organiza um de seus famosos trambiques. Pena que nada sai como o planejado e o passado retorna e se repete para o sertanejo...",
        categoria:  "comedia" // Categoria do filme
      },
      
      {   
        titulo:"Quarto de Guerra",
        imagem:"imagens/quarto.jpg",
        video:"https://drive.google.com/file/d/13UxLqVin7sMvISwangXnzgxaEHb0jQOl/preview",
        sinopse:"O Quarto de Guerra é um filme que conta a história de Elizabeth e Tony, um casal em crise de relacionamento. A filha pequena percebe que ambos estão à beira do divórcio, mas eles não conseguem chegar a um acordo. Clara, uma anciã amorosa e cheia de sabedoria, apresenta seu “quarto de guerra” para ajudar Elizabeth. O local é um cômodo de sua casa onde trava batalhas de oração e ensina a jovem esposa a usar táticas e armas espirituais para vencer a luta e reconstruir seu lar",
        categoria:"drama"
      },
    
    
        {titulo:"Acompanhante Perfeito",
         imagem:"imagens/acompanhante.jpg",
         video:"https://drive.google.com/file/d/1-EcoNoAnoSByIGUv8rPkJ019HHZHE_6l/preview",
         sinopse:"Em Acompanhante Perfeita, Iris (Sophie Thatcher) e Josh (Jack Quaid) vivem um romance digno de cinema. Após se conhecerem em um mercado, os dois rapidamente se apaixonam e embarcam em um relacionamento intenso. Para aproveitar um fim de semana especial, eles viajam para uma luxuosa casa de campo com amigos, buscando descanso e diversão. No entanto, o que deveria ser um retiro tranquilo se transforma em um verdadeiro pesadelo quando uma revelação inesperada muda tudo: Iris é, na verdade, um robô. A descoberta desencadeia uma série de eventos caóticos, com perseguições, violência e segredos vindo à tona. Em meio ao terror, Iris, uma máquina altamente sofisticada, precisa lutar para sobreviver e entender sua própria existência. Misturando suspense, terror e comédia, o filme aborda temas como idealizações românticas e relações de gênero, explorando os limites entre humano e máquina. Enquanto a tensão aumenta, a grande questão permanece: será que alguém sairá vivo desse fim de semana?",
         categoria:"drama"
        },
        {
            titulo:" Steve Jobs",
            imagem:"imagens/job.jpg",
            video:"https://drive.google.com/file/d/1jmBb96WKbXpI8Cn2zA0Oa3Yca-KuGV26/preview",
            sinopse:"Com roteiro de Aaron Sorkin (A Rede Social), o filme de Danny Boyle procura traçar uma análise da vida de Steve Jobs a partir de três blocos, cada um centrado no momento do lançamento de produtos caros à carreira do magnata da Apple",
            categoria:"acao",
        },
         { titulo:"O Jogo da Imitação",
           imagem:"imagens/jogo.jpg",
           video:"https://drive.google.com/file/d/1zEecBLbmh1cn0GSL1QKiBDclfvm1GvEw/preview",
           sinopse:"“O Jogo da Imitação” é um drama biográfico lançado em 2014, sob a direção de Morten Tyldum. O filme retrata a vida de Alan Turing, um matemático e criptoanalista britânico, que desempenhou um papel crucial na decifração dos códigos da máquina Enigma durante a Segunda Guerra Mundial. Com uma poderosa performance de Benedict Cumberbatch no papel principal, a narrativa explora não apenas os desafios intelectuais enfrentados por Turing, mas também suas lutas pessoais em uma época de intolerância. ",
           categoria:"acao",
         },
         { titulo:"Covil de Ladroes",
            imagem:"imagens/covil.jpg",
            video:"https://drive.google.com/file/d/1G8E6XC9bmDlqejvXPMuCt7av0O2-Xy1x/preview",
            sinopse:"Em Los Angeles, capital dos roubos a banco, um banho de sangue coloca em interseção a vida de dois grupos: a radical unidade de elite do departamento de polícia local, liderada pelo desmedido Nick (Gerard Butler), e a equipe de assaltantes de banco mais arrojada em atividade. Enquanto os criminosos planejam um ataque ambicioso até então tido como impossível, os homens da lei apertam o cerco pelo elo aparentemente mais fraco da gangue.",
            categoria:"acao",
          },
  
          { titulo:"Oficina do Diabo 2025",
            imagem:"imagens/oficina.jpg",
            video:"https://drive.google.com/file/d/1M8LgqF9OO3CRBV-bCikSkUokVizMKWGr/preview",
            sinopse:" Após tentar a vida como músico na cidade grande, Pedro fracassa e volta, sem rumo, para a casa de sua mãe no interior. O demônio Natan levou Pedro a escolhas erradas, no entanto, suas tentações não conseguiram desvirtuá-lo completamente. Decididos a condenar a alma de Pedro ao Inferno, a Oficina convoca o experiente demônio Fausto para guiar Natan em sua missão.",
            categoria:"drama",
          },
   
   
          { titulo:" Até o Último Homem",
            imagem:"imagens/ate.jpg",
            video:"",
            sinopse:"Desmond T. Doss, foi o médico do Exército Americano da Segunda Guerra Mundial, que serviu durante a Batalha de Okinawa, se recusando a matar pessoas, tornando-se o primeiro homem da história americana a receber a Medalha de Honra sem disparar um tiro.",
            categoria:"acao",
          },
   
   {titulo:"Live ao vivo",
    imagem:"imagens/jogo-de-futebol.jpg",
    video:"https://www.twitch.tv/diegovilalba20140",
    sinopse:" futebol sua diversao",
    categoria:"acao",
 },
  
  
  
  
  
  
  
  
  
  
  
    ];
  
    const containerFilmes = document.getElementById("filmes-em-destaque");
    const containerCategorias = document.getElementById("categorias");
    const containerSobre = document.getElementById("sobre");
  
    // Função para adicionar filmes no DOM
    function adicionarFilmes(container, filmesArray) {
        container.innerHTML = "";
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
  
            container.appendChild(divFilme);
        });
  
        const botoesVerMais = container.querySelectorAll(".ver-mais");
        botoesVerMais.forEach((botao) => {
            botao.addEventListener("click", (evento) => {
                const filmeDiv = evento.target.closest(".filme");
                const sinopseDiv = filmeDiv.querySelector(".sinopse");
  
                if (sinopseDiv.style.display === "none" || sinopseDiv.style.display === "") {
                    sinopseDiv.style.display = "block";
                    evento.target.textContent = "Ver Menos";
                } else {
                    sinopseDiv.style.display = "none";
                    evento.target.textContent = "Ver Mais";
                }
            });
        });
  
        const imagensFilmes = container.querySelectorAll(".imagem-filme");
        imagensFilmes.forEach((imagem) => {
            imagem.addEventListener("click", () => {
                const videoSrc = imagem.getAttribute("data-video");
                window.open(videoSrc, "_blank");
            });
        });
    }
  
    // Função para exibir a seção específica
    function exibirSeção(secao) {
        containerFilmes.style.display = "none";
        containerCategorias.style.display = "none";
        containerSobre.style.display = "none";
        secao.style.display = "block";
    }
  
    // Exibir filmes em destaque por padrão
    adicionarFilmes(containerFilmes, filmes.filter(filme => ["acao", "drama", "terror", "Gospel", "aventura", "comedia","Ficção Científica"].includes(filme.categoria)));
  
  
    // Evento de clique nos botões de navegação
    document.getElementById("btn-categorias").addEventListener("click", () => {
        exibirSeção(containerCategorias);
  
        adicionarFilmes(document.getElementById("acao-filmes"), filmes.filter(filme => filme.categoria === "acao"));
        adicionarFilmes(document.getElementById("drama-filmes"), filmes.filter(filme => filme.categoria === "drama"));
        adicionarFilmes(document.getElementById("comedia-filmes"), filmes.filter(filme => filme.categoria === "comedia"));
        adicionarFilmes(document.getElementById("Terror-filmes"), filmes.filter(filme => filme.categoria === "terror"));
        adicionarFilmes(document.getElementById("aventura-filmes"), filmes.filter(filme => filme.categoria === "aventura"));
        adicionarFilmes(document.getElementById("Ficção Científica-filmes"), filmes.filter(filme => filme.categoria === "Ficção Científica"));
    });
  
    document.getElementById("btn-sobre").addEventListener("click", () => {
        exibirSeção(containerSobre);
    });
  
    // Evento de pesquisa
    const searchInput = document.getElementById("search-bar");
    searchInput.addEventListener("input", () => {
        const termoBusca = searchInput.value.toLowerCase();
        const filmesFiltrados = filmes.filter(filme => filme.titulo.toLowerCase().includes(termoBusca));
        adicionarFilmes(containerFilmes, filmesFiltrados);
    });
  // Botão de Sair
  const btnSair = document.getElementById("btn-sair");
  
  if (btnSair) {
      btnSair.addEventListener("click", () => {
          // Redireciona para a página de login
          window.location.href = "OIP.png"; // Substitua com o nome do arquivo correto
      });
  }
  });
  