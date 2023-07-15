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
    nodejs,
    mongodb,
    git,
    sql,
    cpp,
    c,
    githubtech,
    figma,
    docker,
    enactus,
    trophy,
    growth,
    luckgame,
    ecommerce,
    cardpay,
    newsletter,
    threejs,
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
      title: "Resume",
      icon: web,
      link: "https://drive.google.com/drive/folders/1JqGFxIsfVd3dLDuXd50Tgo3CyUHZqFFx?usp=drive_link",
    },
    {
      title: "Linkedin",
      icon: mobile,
      link: "https://www.linkedin.com/in/tisha-singhal-1b7460227/",
    },
    {
      title: "Github",
      icon: backend,
      link: "https://github.com/TishaSinghal",
    },
    {
      title: "Leetcode",
      icon: creator,
      link: "https://leetcode.com/Tisha_03/" ,
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
    /*{
      name: "TypeScript",
      icon: typescript,
    },*/
    {
      name: "React JS",
      icon: reactjs,
    },
    /*{
      name: "Redux Toolkit",
      icon: redux,
    },*/
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
      name: "MySQL",
      icon: sql,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "Github",
      icon: githubtech,
    },
    /*{
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },*/
  ];
  
  const experiences = [
    {
      title: "Marketing and Campaigns Head",
      company_name: "Enactus ADGITM",
      icon: enactus,
      iconBg: "#FFFFFF",
      date: "June 2022 - June 2023",
      points: [
        "Lead a team towards the goal of organization while following latest trends to approach a potential customer.",
        "Collaborating with cross-functional departments including business development, content managers, and others.",
        "Participated in numerous Bplan & CaseStudy competitions and emerged as winnners for many.",
        "Managed various events and competitions under EnactusADGITM. ",
      ],
    },
    {
      title: "Achievements",
      company_name: "",
      icon: trophy,
      iconBg: "#FFFFFF",
      date: "",
      points: [
        "Second Position at FaceTheCase by NSUT, Delhi [March,2022]",
        "AIR45 in Codeblooded 3.0 by CodechefADGITM x CodingNinjas [April,2023]",
        "Third Position at SmartTank by SBSEC ,Delhi [April, 2023]",
      ],
    },
    {
      title: "Opportunities",
      company_name: "",
      icon: growth,
      iconBg: "#FFFFFF",
      date: "",
      points: [
        "Successfully completed Include <Her> Cohort 2.0 [June2023]",
        "Selected as an open source contributor for Social Summer of Code Season2 [June 2023]",
        "Selected for Web Developement internship position at CodeSoft [July 2023]",
        "Selected for the Virtual Internship Program at Bharat Intern as Full stack Web Developer [July 2023]",
        "Executive member at CodechefADGITM [Januarary 2023]"
      ], 
    },    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Card Payment",
      wlink: "https://react-website-two-beryl.vercel.app/",
      description:
        "Web-based modern platform for a company that deals with card payment.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: cardpay,
      source_code_link: "https://github.com/TishaSinghal/ReactWebsite",
    },
    {
      name: "Newsletter Style",
      wlink: "https://tishasinghal.github.io/Newsletter/",
      description:
        "Web application that resembles a newsletter format. A unique formatted website.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: newsletter,
      source_code_link: "https://github.com/TishaSinghal/Newsletter",
    },
    {
      name: "Ecommerce Platform",
      wlink:"https://tishasinghal.github.io/Ecommerce/",
      description:
        "A responsive ecommerce platform with a blog and contact page.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/TishaSinghal/Ecommerce",
    },
    {
      name: "Luck Game",
      description:
        "A luck based gamed build on javascript for better understanding of concepts.",
      tags: [
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: luckgame,
      source_code_link: "https://github.com/TishaSinghal/GamblingGame",
    },

  ];
  
  export { services, technologies, experiences, testimonials, projects };