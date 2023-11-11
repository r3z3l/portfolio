import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import grossImg from "@/public/grossImg.png";
import rmtdevImg from "@/public/rmtdev.png";
import groupImg from "@/public/group.png";
import quizappImg from "@/public/quizapp.png"
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Incognito 4.0 CTF Organiser",
    location: "worldwide",
    description: "I Organised the Incognito 4.0 CTF event, which was significant better than Incognito 3.0 and Improved our CTF rating at CTFTime.",
    icon: React.createElement(FaFontAwesomeFlag),
    date: "2023",
  },
  {
    title: "Security Engineer Intern",
    location: "Remote, Bangalore",
    description:
      "I worked as a Security Engineer Intern, where I worked on a Client-Side Security Solution and build microservices.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Incognito 3.0 CTF Problem Setter",
    location: "worldwide",
    description: "I created a Capture The Flag (CTF) competition for the Incognito 3.0 CTF event, which attracted over 2000 participants from more than 30 countries.",
    icon: React.createElement(FaFontAwesomeFlag),
    date: "2022",
  },
  {
    title: "Graduation",
    location: "Lucknow, U.P. India",
    description:
      "Undergradute student at IIIT Lucknow, learning and building security tools. I have worked on Backend Development and Information Security.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - present",
  },
] as const;

export const projectsData = [
  {
    title: "grOSS",
    description:
      "I built this project in MesoHackathon and Won in Cyber Security Track. Users can check authenticity of Github Repo and Known Vulnerabiltiy and leaks",
    tags: ["React", "Django", "SAST tools", "Tailwind", "Github"],
    imageUrl: grossImg,
  },
  {
    title: "vulnlauncher",
    description:
      "A GUI interface for setting up VulnHub challenge and solving them. I worked on it's integeration with Backend.",
    tags: ["Python", "Django", "HTML", "Tailwind", "CSS"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Group Buying on BlockChain",
    description:
      "This project is a prototype to demonstrate group buying on the blockchain.",
    tags: ["React", "Solidity", "Web3", "Tailwind", "MetaMask"],
    imageUrl: groupImg,
  },
  {
    title: "Quiz App",
    description: "A quiz application which ask questions from pool of question. It can be helpful for assessment process",
    tags: ["Java", "JFrame","OOPS"],
    imageUrl: quizappImg,
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "MySQL",
  "Python",
  "Django",
  "Sqlite",
  "HTTPToolkit",
  "Postman",
  "BurpSuite",
  "Nmap",
  "Nessus",
  "Linux",
  "Metasploit",
] as const;