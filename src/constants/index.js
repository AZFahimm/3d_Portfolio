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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Full-Stack Developer",
    icon: backend,
  },
  {
    title: "Arduino Programmer",
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
    name: "Photoshop",
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

//090C2B

const experiences = [
  {
    title: "Arduino Programmer",
    company_name: "Facebook Marketplace",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "March 2019 - May 2020",
    points: [
      "Demonstrated expertise in designing and implementing projects using Arduino microcontrollers.",
      "Showcased proficiency in integrating various components such as sensors, LEDs, buzzers, and motors into Arduino-based systems.",
      "Exhibited a keen interest in incorporating Bluetooth communication for enabling notifications and mobile device control.",
      "Continuously sought opportunities for learning and skill development to enhance my programming capabilities within the Arduino ecosystem.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Freelancer",
    icon: tesla,
    iconBg: "#383E56",
    date: "Jan 2020 - March 2022",
    points: [
      "Experienced full-stack developer with expertise in both front-end and back-end development, capable of handling all aspects of web application development.",
      "Proficient in front-end technologies such as HTML, CSS, and JavaScript, ensuring visually appealing and responsive user interfaces.",
      "Skilled in back-end technologies such as Node.js and databases like MongoDB, allowing for the development of robust and scalable web applications.",
      "Strong problem-solving skills and a passion for creating efficient and user-friendly solutions, delivering high-quality software products.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Fiverr",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - Sep 2023",
    points: [
      "Skilled web developer with expertise in front-end development and a focus on creating engaging and user-friendly websites.",
      "Proficient in HTML, CSS, and JavaScript, ensuring high-quality and responsive web designs.",
      "Experienced in combining web development with Arduino programming, bringing innovative ideas to life through hardware and software integration.",
      "Committed to continuous learning and staying up-to-date with the latest trends and technologies in the field of web development.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Upwork",
    icon: meta,
    iconBg: "#383E56",
    date: "Jun 2023 - Present",
    points: [
      "Skilled React Native developer with expertise in building cross-platform mobile applications for both iOS and Android platforms.",
      "Proficient in developing interactive and user-friendly interfaces using React Native components and libraries.",
      "Experienced in integrating APIs and third-party services, ensuring seamless functionality and data flow in mobile applications.",
      "Committed to delivering high-performance and scalable React Native applications, focusing on code quality and best practices.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Brilliant Arduino project demonstrating innovative problem-solving and remarkable hardware integration.",
    name: "Shaklahi Ahmed",
    designation: "CFO",
    company: "ASSET",
    image: "https://scontent.fjsr12-1.fna.fbcdn.net/v/t39.30808-6/351335241_1334789310582113_2416623900325447260_n.jpg?_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFS-EJQjgCktiQ8fWBVeZKnvme7Cfgdx_C-Z7sJ-B3H8HgkXRFnIkVM536L7a0coYGScCTmc_7u54mItBYy4W-L&_nc_ohc=hJLhoYzoaDMAX9d5s5X&_nc_ht=scontent.fjsr12-1.fna&oh=00_AfBRlEBNdYdgx-HGi0iLeiJQizsafLn0FV99pBZ08mGfUQ&oe=64987FD2",
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
    name: "Smart Fire Notifier",
    description:
      "Ingenious Arduino project for fire and smoke detection, utilizing sensors, LEDs, and Bluetooth communication for seamless notification.",
    tags: [
      {
        name: "arduino",
        color: "blue-text-gradient",
      },
      {
        name: "programming",
        color: "green-text-gradient",
      },
      {
        name: "c",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/AZFahimm/AZFahimm",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };