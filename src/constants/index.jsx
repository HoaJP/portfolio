import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import personImage from "../assets/testimonial.webp";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodejsLine,
  RiVuejsLine,
  RiFigmaLine,
  RiAngularjsLine,
  RiTailwindCssFill,
  RiBootstrapFill,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Luong Manh Hoa",
  role: "Frontend Developer",
  subheading:
    "As a fourth-year student with a passion for Frontend development, I am actively seeking a Frontend Intern position. I have hands-on experience with ReactJS and VueJS and am eager to apply this knowledge to build effective web applications, while learning and contributing to real-world projects.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "LMS Website",
    description:
      "Our LMS website simplifies online education. Easily create, deliver, and track engaging courses, empowering learners and educators alike.",
    techStack: ["React", "TailwindCss", "Clerck"],
    imgSrc: project1,
    link: "https://lms-edemy-five.vercel.app/",
  },
  {
    id: 2,
    title: "News Website",
    description:
      "Your daily source for reliable news: breaking headlines, in-depth reports, and diverse stories from around the world.",
    techStack: ["ReactJs", "Bootstrap", "News API"],
    imgSrc: project4,
    link: "https://news-app-nine-lilac.vercel.app/",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills. Fully responsive and optimized for performance.",
    techStack: ["GSAP", "ReactJs", "Tailwind CSS"],
    imgSrc: project3,
    link: "https://portfolio-plum-xi-63.vercel.app/",
  },
  {
    id: 4,
    title: "Movie Trailer Website",
    description:
      "Witness the first look at a gripping new film. This trailer offers a thrilling glimpse into its plot, characters, and epic scale.",
    techStack: ["React", "TailwindCss", "TMDB API"],
    imgSrc: project2,
    link: "https://movie-trailer-flame-two.vercel.app/",
  },
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "TypeScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Node.js",
    icon: <RiNodejsLine className="text-green-500" />,
  },
  {
    name: "VueJs",
    icon: <RiVuejsLine className="text-green-600" />,
  },
  {
    name: "Angular",
    icon: <RiAngularjsLine className="text-red-600" />,
  },
  {
    name: "Figma",
    icon: <RiFigmaLine className="text-orange-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill className="text-teal-400" />,
  },
  {
    name: "Bootstrap",
    icon: <RiBootstrapFill className="text-pink-400" />,
  },
];

export const EXPERIENCES = [
  {
    yearRange: "2024 - Present",
    role: "UX/UI Focused Frontend Developer (Personal Project)", 
    company: "LMS Learning Platform (Self-Initiated Project)", 
    description:
      "Applied UX/UI principles and design thinking to build a complete Learning Management System (LMS) website. Developed an intuitive user experience by implementing features for course management, content delivery, and progress tracking using React.js and Next.js. Focused on crafting a visually appealing and highly usable platform for online education.",
    techStack: [
      "Redux",
      "Ant Design",
      "Material UI",
      "UI/UX Design",
      "Figma (Optional)",
    ], 
  },
  {
    yearRange: "2023 - 2024", 
    role: "Frontend Development with Frameworks (Coursework & Group Projects)", 
    company: "University Group Projects & Self-Study", 
    description:
      "Gained practical experience with modern JavaScript frameworks like React.js and Vue.js through various group projects for university coursework. Focused on applying these frameworks to build interactive and responsive user interfaces, enhancing my understanding of component-based architecture and state management.",
    techStack: ["React.js", "Vue.js", "Angular", "TailwindCss", "Bootstrap"], 
  },
  {
    yearRange: "2022 - 2023", 
    role: "Frontend Development Fundamentals & Personal Projects", 
    company: "University Coursework & Self-Study", 
    description:
      "Actively learned foundational Frontend Development concepts, including HTML, CSS, and JavaScript. Applied knowledge to build various small personal projects, focusing on UI/UX and responsive design. This period was crucial for developing my core programming skills.",
    techStack: ["Javascript", "HTML", "CSS", "Git"], 
  },
  {
    yearRange: "2021 - 2022", 
    role: "Introduction to Programming", 
    company: "University Coursework",
    description:
      "Completed foundational coursework in and programming. Gained initial exposure to core concepts and built basic programs",
    techStack: ["C", "C++", "Python"],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Excellent Student",
    institution: "Gia Loc High School - Hai Duong",
    duration: "2018 - 2021",
    description:
      "I actively study, participate in school activities, achieve high scores in exams, and maintain good relationships with everyone.",
  },
  {
    id: 2,
    degree: "Good Student at University",
    institution: "Posts and Telecommunications Institute of Technology (PTIT)",
    duration: "2021 - present",
    description:
      "I entered university with a high admission score and have since developed solid programming and system design skills. Throughout my studies, I've successfully built several personal projects, and I'm set to graduate at the end of this year.",
  },
];

export const TESTIMONIAL = {
  name: "Nguyen Thi Binh",
  title: "Professional, PTIT",
  quote:
    "Hoa is an outstanding student. Working with him is both enjoyable and productive, as he consistently stays updated with technology trends, which greatly benefits our work. I highly value his analytical thinking and programming skills",
  image: personImage,
};
