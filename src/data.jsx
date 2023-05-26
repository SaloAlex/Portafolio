import {
  FaHome,
  FaUser,
  FaFolderOpen,
  // FaReact,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaChrome,
  FaGithub,
} from "react-icons/fa";

import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";
import {SiJavascript, SiPreact} from "react-icons/si"


import Work1 from "./assets/project-1.jpeg";
import Work2 from "./assets/project-2.jpg";
import Work3 from "./assets/project-3.jpeg";
import Work4 from "./assets/project-4.jpeg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";



import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Alexander",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Salomon",
  },

  {
    id: 3,
    title: "Age : ",
    description: "38 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Argentinian",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Buenos Aires",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "011-15-6551-2567",
  },

  {
    id: 8,
    title: "Email : ",
    description: "dvdsalomon6@gmail.com",
  },

  {
    id: 9,
    title: "Skype : ",
    description: "Alexander Salomon",
  },

  {
    id: 10,
    title: "Langages : ",
    description: "Spanish, Portuguese, English",
  },
];

export const stats = [
  {
    id: 1,
    no: "100%",
    title: "Love for the <br /> Music",
  },

  {
    id: 2,
    no: "85%",
    title: "Love for <br /> Sports",
  },

  {
    id: 3,
    no: "100%",
    title: "willing to<br /> Learn",
  },

  {
    id: 4,
    no: "85%",
    title: " Being self <br /> Taught",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2018 - PRESENT",
    title: "Esports organization <span> Rll E-sports </span>",
    desc: "Organization and direction of E-sports events online and lan modality, General production of streams,podcast and different audiovisual content for internet plataform and television, ",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2018 - 2018",
    title: "CM <span> Idenyo </span>",
    desc: "Management and creation of content for social media",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2008 - 2018",
    title: "Hairdresser <span> DyC Salon Unisex </span>",
    desc: "hairdresser and stylist",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2022",
    title: "Web development <span> CodeHouse </span>",
    desc: "Html-Css-Bootstrap-Sass-Git-Github",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2022",
    title: "Javascript<span> CoderHouse </span>",
    desc: "JavaScript course where I gained a solid understanding of the fundamentals of the language and developed skills to create interactivity in web pages. I learned how to manipulate the DOM, use events, functions, and objects, and also explored popular libraries like jQuery and React. This course gave me a strong foundation in JavaScript and allowed me to tackle more challenging web projects with confidence.",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2022-2023",
    title: "React js <span> CoderHouse </span>",
    desc: "React course in which I acquired skills to develop web applications using this popular JavaScript library. I learned the fundamental concepts of React, such as components and state, which allowed me to build dynamic and reactive interfaces. I also explored state management with Redux and learned how to interact with external APIs. This course prepared me to build modern, high-performance web apps with React.",
  },
];


export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Web Desing",
    details: [
      {
        icon: <FiFileText />,
        title: "Alexander Hotel Resort : ",
        desc: " Trabajo final curso Desarrollo web",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "CoderHouse",
      },
      {
        icon: <FaCode />,
        title: "language : ",
        desc: <> <FaHtml5 /> <FaCss3Alt/> <FaSass /> <FaBootstrap /></>,
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        link: (
          <div>
          <a
            href="https://saloalex.github.io/Hotel-Resort-HTML-CSS/"
            className="item__details"
            target="_blank"
            rel="noopener"
          >
            <FaChrome /> : Visit the Page
          </a>

            <br />

          <a
          href="https://github.com/SaloAlex/Hotel-Resort-HTML-CSS"
          className="item__details"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> : Visit the code
        </a>

          </div>
          
        ),
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "E-comerse-JS",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "E-comserse",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "CoderHouse",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: <> <FaHtml5 /> <FaCss3Alt/> <FaBootstrap /> <SiJavascript /> </>,
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        link: (
          <div>
          <a
            href="https://saloalex.github.io/E-comerce-Javascript-vanilla/"
            className="item__details"
            target="_blank"
            rel="noopener"
          >
            <FaChrome /> : Visit the Page
          </a>

            <br />

          <a
          href="https://github.com/SaloAlex/E-comerce-Javascript-vanilla"
          className="item__details"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> : Visit the code
        </a>

          </div>
        ),
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "E-comerse",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "E-comerse",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "CoderHouse",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: <> <FaHtml5 /> <FaCss3Alt/> <FaBootstrap /> <SiJavascript /> <SiPreact /> </>,
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        link: (
          <div>
          <a
            href="https://glittery-madeleine-9451cb.netlify.app/"
            className="item__details"
            target="_blank"
            rel="noopener"
          >
            <FaChrome /> : Visit the Page
          </a>

            <br />

          <a
          href="https://github.com/SaloAlex/Entrega-Final-Alexander-Salomon-React"
          className="item__details"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> : Visit the code
        </a>

          </div>
        ),
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "My Portfolio",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Personal",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: <> <FaHtml5 /> <FaCss3Alt/> <FaBootstrap /> <SiJavascript /> <SiPreact /> </>,
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  // {
  //   id: 5,
  //   img: Work5,
  //   title: "Landing Page",
  //   details: [
  //     {
  //       title: "Project : ",
  //       desc: "Website",
  //     },
  //     {
  //       title: "Client : ",
  //       desc: "Dribble",
  //     },
  //     {
  //       title: "Language : ",
  //       desc: "React JS, Node JS",
  //     },
  //     {
  //       title: "Preview : ",
  //       desc: "www.dribble.com",
  //     },
  //   ],
  // },

  // {
  //   id: 6,
  //   img: Work6,
  //   title: "Photo Editing",
  //   details: [
  //     {
  //       icon: <FiFileText />,
  //       title: "Project : ",
  //       desc: "Photo",
  //     },
  //     {
  //       icon: <FiUser />,
  //       title: "Client : ",
  //       desc: "Dribble",
  //     },
  //     {
  //       icon: <FaCode />,
  //       title: "Language : ",
  //       desc: "Adobe Photoshop",
  //     },
  //     {
  //       icon: <FiExternalLink />,
  //       title: "Preview : ",
  //       desc: "www.dibble.com",
  //     },
  //   ],
  // },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
