import { Evento } from "../evento";

const eventos: Evento[] = [
  {
    id: "b3d22a90-e486-4c55-ae97-8df99315a062",
    alias: "evento-fullstack",
    senha: "senha123",
    nome: "Evento de Desenvolvimento Fullstack",
    data: new Date("2024-12-01T10:00:00Z"),
    local: "São Paulo, SP",
    descricao:
      "Um evento completo para aprender desenvolvimento fullstack do zero.",
    imagem:
      "https://play-lh.googleusercontent.com/mpBm6uxkAwCTaDL7us2iG0L-Lpxb6_vUYxJ5dBMSrKFGZoION2lUY5RkJYModzngyIk",
    imagemBackground:
      "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    publicoEsperado: 200,
    convidados: [
      {
        id: "6cdd2b32-8cb9-40c6-aab5-eb85eb9e10c1",
        nome: "Alice Silva",
        email: "alice@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1,
      },
      {
        id: "c68da824-6da9-4f47-a6c6-43bbf24dba4a",
        nome: "Carlos Pereira",
        email: "carlos@example.com",
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0,
      },
      {
        id: "66955bd0-4762-4253-82df-14310c383e61",
        nome: "Beatriz Lima",
        email: "beatriz@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 2,
      },
    ],
  },
  // {
  //   id: "41a86f2a-6a52-4d9b-be4b-c3eef9271567",
  //   alias: "evento-js-avancado",
  //   senha: "js2024",
  //   nome: "Workshop Avançado de JavaScript",
  //   data: new Date("2024-11-20T15:00:00Z"),
  //   local: "Rio de Janeiro, RJ",
  //   descricao: "Um workshop avançado para programadores JavaScript.",
  //   imagem:
  //     "https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200",
  //   imagemBackground:
  //     "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg",
  //   publicoEsperado: 100,
  //   convidados: [
  //     {
  //       id: "52ca5193-2d6a-4d35-b9e1-7b02336863e0",
  //       nome: "Eduardo Santos",
  //       email: "eduardo@example.com",
  //       confirmado: true,
  //       possuiAcompanhantes: false,
  //       qtdeAcompanhantes: 0,
  //     },
  //     {
  //       id: "9b1afb69-9d89-418f-a666-27b7d1cbecbd",
  //       nome: "Fernanda Costa",
  //       email: "fernanda@example.com",
  //       confirmado: true,
  //       possuiAcompanhantes: true,
  //       qtdeAcompanhantes: 1,
  //     },
  //   ],
  // },
  // {
  //   id: "47b94208-46a8-4228-b82f-fcf927173e2d",
  //   alias: "evento-dev-frontend",
  //   senha: "front123",
  //   nome: "Bootcamp de Desenvolvimento Frontend",
  //   data: new Date("2024-11-15T09:00:00Z"),
  //   local: "Belo Horizonte, MG",
  //   descricao: "Aprenda a criar interfaces incríveis e responsivas.",
  //   imagem:
  //     "https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg",
  //   imagemBackground:
  //     "https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg",
  //   publicoEsperado: 150,
  //   convidados: [
  //     {
  //       id: "5041a2e8-89b8-417b-9fb3-f4ba220f9959",
  //       nome: "Gabriela Rocha",
  //       email: "gabriela@example.com",
  //       confirmado: true,
  //       possuiAcompanhantes: true,
  //       qtdeAcompanhantes: 1,
  //     },
  //     {
  //       id: "b9951647-dacc-4a00-8fff-d8c580eda8cf",
  //       nome: "Hugo Nogueira",
  //       email: "hugo@example.com",
  //       confirmado: false,
  //       possuiAcompanhantes: false,
  //       qtdeAcompanhantes: 0,
  //     },
  //     {
  //       id: "28df4cbc-0f40-4500-a522-33ef6fea607b",
  //       nome: "Isabela Martins",
  //       email: "isabela@example.com",
  //       confirmado: true,
  //       possuiAcompanhantes: false,
  //       qtdeAcompanhantes: 0,
  //     },
  //   ],
  // },
  // {
  //   id: "2c7f1668-a0eb-43af-9892-96c7ba0bce01",
  //   alias: "casamento-alberto-marina",
  //   senha: "casamento2024",
  //   nome: "Casamento do Alberto e Marina",
  //   data: new Date("2024-11-25T16:00:00Z"),
  //   local: "Florianópolis, SC",
  //   descricao:
  //     "Celebração do casamento de Alberto e Marina com amigos e familiares.",
  //   imagem:
  //     "https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg",
  //   imagemBackground:
  //     "https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg",
  //   publicoEsperado: 150,
  //   convidados: [
  //     {
  //       id: "d627331d-a43d-48c7-af21-efde4c3c4667",
  //       nome: "Bruno Cardoso",
  //       email: "bruno@example.com",
  //       confirmado: true,
  //       possuiAcompanhantes: true,
  //       qtdeAcompanhantes: 1,
  //     },
  //     {
  //       id: "b9288375-0c0d-4444-a6d5-aabc3a32a0e9",
  //       nome: "Carla Mendes",
  //       email: "carla@example.com",
  //       confirmado: true,
  //       possuiAcompanhantes: false,
  //       qtdeAcompanhantes: 0,
  //     },
  //   ],
  // },
  // {
  //   id: "6ced1457-313b-4b33-a35a-f5887f784f08",
  //   alias: "aniversario-joao",
  //   senha: "joao2024",
  //   nome: "Aniversário do João - 30 Anos",
  //   data: new Date("2024-12-05T18:00:00Z"),
  //   local: "Curitiba, PR",
  //   descricao:
  //     "Comemoração dos 30 anos de João com amigos próximos e familiares.",
  //   imagem:
  //     "https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg",
  //   imagemBackground:
  //     "https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg",
  //   publicoEsperado: 80,
  //   convidados: [
  //     {
  //       id: "06092fa6-c99c-4c08-a6ef-8f7367f2c747",
  //       nome: "Maria Souza",
  //       email: "maria@example.com",
  //       confirmado: true,
  //       possuiAcompanhantes: true,
  //       qtdeAcompanhantes: 2,
  //     },
  //     {
  //       id: "9fda0b97-73af-47af-9041-b24a25e0b500",
  //       nome: "José Almeida",
  //       email: "jose@example.com",
  //       confirmado: false,
  //       possuiAcompanhantes: false,
  //       qtdeAcompanhantes: 0,
  //     },
  //   ],
  // },
  // {
  //   id: "cdd8d917-727f-479c-8ea0-68f7f2fb8c84",
  //   alias: "inauguracao-loja-estrela",
  //   senha: "estrela2024",
  //   nome: "Inauguração da Loja Estrela",
  //   data: new Date("2024-12-10T09:00:00Z"),
  //   local: "Porto Alegre, RS",
  //   descricao:
  //     "Evento de inauguração da nova loja Estrela com brindes e promoções.",
  //   imagem:
  //     "https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png",
  //   imagemBackground:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s",
  //   publicoEsperado: 300,
  //   convidados: [
  //     {
  //       id: "u3yf90e447fdb-3ff4-474a-940d-d31b8dd9dab2",
  //       nome: "Cláudia Lima",
  //       email: "claudia@example.com",
  //       confirmado: true,
  //       possuiAcompanhantes: true,
  //       qtdeAcompanhantes: 3,
  //     },
  //     {
  //       id: "d2379909-eea3-4b8f-9d9e-180373c8afde",
  //       nome: "Ricardo Barbosa",
  //       email: "ricardo@example.com",
  //       confirmado: true,
  //       possuiAcompanhantes: false,
  //       qtdeAcompanhantes: 0,
  //     },
  //   ],
  // },
  // {
  //   id: "6af6052a-2ae8-46d4-bf12-eaf5ddd97b28",
  //   alias: "reuniao-familia-oliveira",
  //   senha: "familia2024",
  //   nome: "Reunião da Família Oliveira",
  //   data: new Date("2024-12-15T12:00:00Z"),
  //   local: "Salvador, BA",
  //   descricao: "Reunião de fim de ano da família Oliveira.",
  //   imagem:
  //     "https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg",
  //   imagemBackground:
  //     "https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid",
  //   publicoEsperado: 50,
  //   convidados: [
  //     {
  //       id: "85d6a6b2-1cc2-4a07-8d98-d119423fd2a4",
  //       nome: "Thiago Oliveira",
  //       email: "thiago@example.com",
  //       confirmado: true,
  //       possuiAcompanhantes: true,
  //       qtdeAcompanhantes: 4,
  //     },
  //     {
  //       id: "9b6c931c-3cd0-4e28-9a2a-b138bc433fc9",
  //       nome: "Letícia Oliveira",
  //       email: "leticia@example.com",
  //       confirmado: true,
  //       possuiAcompanhantes: false,
  //       qtdeAcompanhantes: 0,
  //     },
  //   ],
  // },
];

export default eventos;
