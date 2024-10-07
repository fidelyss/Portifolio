import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  rocket,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  SummaryShort,
  SocialMidia,
  jobit,
  inorbit,
  tripguide,
  threejs,
} from "../assets";



export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Trabalhos",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "Desenvolvedor Front-end",
    icon: web,
  },
  {
    title: "Desenvolvedor React Native",
    icon: mobile,
  },
  {
    title: "Desenvolvedor Backend ",
    icon: backend,
  },
  {
    title: "Criador de conteudo",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "PostgreSQL, ReactJS, Typescript, Fastify, DrizzleORM",
    company_name: "ROCKETSEAT",
    icon: rocket,
    iconBg: "#383E56",
    date: "Setembro, 21 de 2024",
    points: [
      "Desenvolvimento e manutenção de aplicações web usando React.js e outras tecnologias relacionadas.",
      "Implementação de design responsivo e garantia de compatibilidade entre navegadores.",
      "In.Obirt é uma plataforma web que permite criar metas, definir a frequência de execução e acompanhar o progresso, exibindo quantas metas foram concluídas e a regularidade de cada uma.",
    ],
  },
  {
    title: "Javascript, HTML, CSS",
    company_name: "ROCKETSEAT",
    icon: rocket,
    iconBg: "#E6DEDD",
    date: "Maio, 14 de 2024",
    points: [
      "Desenvolvimento e manutenção de aplicações web usando Javascrip, HTML e CSS entre outras tecnologias relacionadas.",
      "Resume um Short no youtube usando as apis ytdl-core, fluent-ffmpeg e ffmpeg-static para baixar, transcrever e resumir o video.",
    ],
  }
];


const projects = [
  {
    name: "Short Summary",
    description:
      "Plataforma baseada na web que permite aos usuários transcrever um video curto para um texto que resume o que esta acontecendo no video.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: SummaryShort,
    source_code_link: "https://github.com/fidelyss/Resumidor-de-Shorts-do-Youtube",
  },
  {
    name: "Midia Social App",
    description:
      "Aplicação web baseada no instagram. Podendo carregar arquivos, mensagens, e autentificar usuários.",
    tags: [
      {
        name: "REACT",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "EXPRESS",
        color: "pink-text-gradient",
      },
      {
        name: "NODEJS",
        color: "green-text-gradient",
      },
    ],
    image: SocialMidia,
    source_code_link: "https://github.com/fidelyss/Midia-Social-App",
  },
  {
    name: "In.Orbit",
    description:
      "In.Obirt é uma plataforma web que permite criar metas, definir a frequência de execução e acompanhar o progresso, exibindo quantas metas foram concluídas e a regularidade de cada uma.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: inorbit,
    source_code_link: "https://github.com/fidelyss/Control-of-daily-goals",
  },
];

export { services, technologies, experiences, projects };
