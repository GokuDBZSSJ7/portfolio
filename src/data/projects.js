
import hotelImg from "../assets/hotel.jpg";
import coachImg from "../assets/coach.jpg";
import lojaImg from '../assets/loja.png';
import masterImg from '../assets/master.jpg';
import spaceImg from '../assets/space.jpg';
import graficaImg from '../assets/grafica.png';

const projects = [
  {
    title: "Sistema Desktop Gráfica",
    description:
      "Aplicação desktop desenvolvida para uma gráfica local, com foco em gerenciamento de Ordens de Serviço (OS), cadastro de clientes, controle de entradas e saídas financeiras, e geração de relatórios diários e mensais automatizados. O sistema também implementa gestão de boletos a receber, com controle de vencimentos e recebimentos, e utiliza um banco de dados compartilhado em nuvem, permitindo acesso simultâneo por diferentes dispositivos da empresa.",
    tags: ["Electron", "MySQL", "JavaScript", "Node.js"],
    image: graficaImg,
    link: "https://github.com/GokuDBZSSJ7/Software-Grafica",
  },
  {
    title: "Loja Virtual com .NET",
    description:
      "Sistema backend construído com C#, ASP.NET Core, Entity Framework Core e MySQL, focado no gerenciamento de produtos, pedidos, usuários e operações de uma loja virtual. O projeto adota Clean Architecture, com separação clara de responsabilidades entre as camadas de Domínio, Aplicação, Infraestrutura, Apresentação e Compartilhamento, garantindo alta escalabilidade, manutenibilidade e aderência às boas práticas modernas de desenvolvimento backend.",
    tags: [".NET", "MySQL", "Clean Architecture"],
    image: lojaImg,
    link: "https://github.com/GokuDBZSSJ7/.NET-Loja-Virtual",
  },
  {
    title: "Site Hotel Portal da Mata",
    description:
      "Website institucional desenvolvido em React + Vite, com layout responsivo e foco em conversão. Inclui formulário de reserva com envio direto via WhatsApp, onde o usuário escolhe datas, número de pessoas e quartos desejados. Também apresenta as acomodações e atrações da região de forma moderna e acessível.",
    tags: ["React", "TailwindCSS", "Javascript"],
    image: hotelImg,
    link: "https://hotelportaldamata.com.br/",
  },
  {
    title: "Coach Colombo",
    description:
      "Desenvolvimento de um site moderno e envolvente para o coach fitness Paulo Colombo, com foco em apresentar seus serviços, sua metodologia de treinamento e sua trajetória no universo da saúde e bem-estar.",
    tags: ["Angular", "Bootstrap", "Typescript"],
    image: coachImg,
    link: "https://coachcolombo.com.br/",
  },
  {
    title: "Master Food",
    description:
      "Apresento o MasterFood (também conhecido como DeliciousRecipes), um site leve, funcional e visualmente agradável, desenvolvido com foco na integração de APIs públicas e na experiência do usuário. O projeto consome dados da API TheMealDB, exibindo receitas completas com imagens, ingredientes, modo de preparo e vídeos ilustrativos.",
    tags: ["Angular", "TailwindCSS", "Typescript", "API"],
    image: masterImg,
    link: "https://master-food-lucas-baggio.netlify.app/",
  },
  {
    title: "Space Scene",
    description:
      "Um projeto Angular + Three.js que cria um sistema solar interativo! Experimente clicar em um planeta para aprender uma curiosidade sobre ele.",
    tags: ["Angular", "TailwindCSS", "Typescript"],
    image: spaceImg,
    link: "https://space-scene.netlify.app/",
  },
];

export default projects;
