import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    nodejs,
    mongodb,
    git,
    expressjs,
    bootstrap,
    laravel,
    c,
    softheight,
    mepco,
    aceconnect,
    regional,
    carrent,
    jobit,
    tripguide,
    threejs,
    jsearch,
    tts
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Wordpress Developer",
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
      name: "Express JS",
      icon: expressjs,
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
      name: "C++",
      icon: c,
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
      name: "bootstrap",
      icon: bootstrap,
    },
    {
      name: "Laravel",
      icon: laravel,
    },
  ];
  
  const experiences = [
    {
      title: "Full-Stack Developer",
      company_name: "Softheight",
      icon: softheight,
      iconBg: "#383E56",
      date: "June 2024 - Present",
      points: [
        "Developing and maintaining web applications using MERN stack, Laravel and other modern technologies.",
        "Collaborating with cross-functional teams to deliver cutting-edge web solutions for clients.",
        "Implementing responsive designs, optimizing web performance, and ensuring seamless cross-browser functionality.",
        "Leading the development of various web projects from conception to deployment, while providing mentorship to junior developers."
      ],
    },
    {
      title: "Startup Founder - Takhleek",
      company_name: "Regional Plan 9 PITB",
      icon: regional,
      iconBg: "#E6DEDD",
      date: "21 July 2023 - 20 January 2024",
      points: [
        "Founded a startup to create an online platform takhleekat.com that helps artists in Pakistan showcase and sell their work 🖌️.",
        "Developed a website with my team where artists can create profiles, upload their work (paintings, calligraphy, handicrafts, embroidery—you name it), and get noticed by potential buyers 🎨.",
        "Built the platform to support artists in promoting their work and connecting with customers looking for unique, handmade pieces.",
        "Worked closely with artists to help them sell their creations, empowering them to take their craft to the next level 💪."
      ],
    },
    {
      title: "Internship",
      company_name: "MEPCO, Multan",
      icon: mepco,
      iconBg: "#383E56",
      date: "June 2022 - August 2022",
      points: [
        "Learned about how the electrical system works in Multan and basics of programming.",
        "Worked in various departments, including Programming Cell, Data Center, Machine Room, and Admin Cell.",
        "Gained a basic understanding of the operations in each department and how they support the electrical grid."
      ],
    },
    {
      title: "Workshop - CCNA Certification",
      company_name: "AceConnect",
      icon: aceconnect,
      iconBg: "#383E56",
      date: "December 2022",
      points: [
        "Completed a 3-day workshop focused on networking fundamentals and CCNA certification preparation.",
        "Acquired knowledge of network architecture, IP addressing, and routing protocols.",
        "Participated in hands-on labs covering topics like network configuration and troubleshooting.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Discoverio",
      description:
        "A MERN stack social media web platform for travel enthusiasts to share experiences, discover destinations, and connect with like-minded explorers, fostering a focused travel community.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "node js",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/sana-munir/clientdiscoverio",
    },
    {
      name: "Travelix",
      description:
        "A web platform for travelers to explore and book hotels worldwide, offering seamless access to accommodations across different countries, so you can plan your perfect stay no matter where your journey takes you.",
      tags: [
        {
          name: "html/css/js",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "php",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/sana-munir/travelix-master",
    },
    {
      name: "Smart News",
      description:
        "A dynamic website that curates news by categories such as science, entertainment etc filtered by country, delivering personalized, up-to-date headlines from around the world using the News API.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "newsapi",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/sana-munir/smartnews",
    },
  ];
  const projects2 = [
    {
      name: "JSearch",
      description:
        "A job search app powered by the JSearch API from Rapid API Hub, allowing users to easily find and apply for jobs by title and location, streamlining the job-hunting process.",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "rapid api",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jsearch,
      source_code_link: "https://github.com/sana-munir/clientdiscoverio",
    },
    {
      name: "Timetable System",
      description:
        "A timetable app for the CS department, designed for students and teachers to view their schedules and receive real-time notifications about class timings & updates.",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tts,
      source_code_link: "https://github.com/sana-munir/tts",
    },
  ];
  export { services, technologies, experiences, projects, projects2 };