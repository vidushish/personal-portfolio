import {
  kiet,
  bvm,
  amity,
  icpc,
  uiux,
  cp,
  kts,
} from "../assets";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";

import {
  SiCplusplus,
  SiJavascript,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiGithub,
  SiMongodb,
  SiLeetcode,
  SiCodechef,
  SiCodeforces,
  SiLinkedin,
  SiPython,
  SiNumpy,
  SiScikitlearn
} from "react-icons/si";

export const resumeLink =
	"https://acrobat.adobe.com/id/urn:aaid:sc:AP:fbcc4443-3fac-4442-9527-e9a95db3aa8e";

export const callToAction = "https://www.linkedin.com/in/vidushi-sharma12/";

export const navLinks = [
	{
		id: "education",
		title: "Education",
	},
	{
		id: "skills",
		title: "Skills",
	},
	{
		id: "achievements",
		title: "Achievements",
	},
	{
		id: "projects",
		title: "Projects",
	},
	{
		id: "por",
		title: "Position of Responsibility",
	},
	{
		id: "contactMe",
		title: "Contact Me",
	},
];

export const codingProfiles = [
  {
    id: "leetcode",
    icon: SiLeetcode,
    link: "https://leetcode.com/u/sharma_vidushi31/",
  },
  {
    id: "codechef",
    icon: SiCodechef,
    link: "https://www.codechef.com/users/vidushish12",
  },
  {
    id: "codeforces",
    icon: SiCodeforces,
    link: "https://codeforces.com/profile/sharma_vidushi31",
  },
  {
    id: "github",
    icon: SiGithub,
    link: "https://github.com/vidushish",
  },
  {
    id: "linkedin",
    icon: SiLinkedin,
    link: "https://www.linkedin.com/in/vidushi-sharma12/",
  },
];

// Add your past academic experiences here
export const educationList = [
	{
		id: "education-1",
		icon: kiet,
		title: "Bachelor of Technology",
		institution: "KIET Group of Institutions (AKTU)",
		duration: "2023 - 2027",
		content1: "Computer Science",
		content2: "CGPA: 8.6",
		location: "Ghaziabad, Uttar Pradesh",
	},
	{
		id: "education-2",
		icon: bvm,
		title: "Intermediate (Class XII)",
		institution: "Bhai Parmanand Vidya Mandir School (CBSE)",
		duration: "2022 - 2023",
		content1: "Percentage: 91.4%",
		content2: "",
		location: "Anand Vihar, Delhi",
	},
	{
		id: "education-3",
		icon: amity,
		title: "High School (Class X)",
		institution: "Amity International School (CBSE)",
		duration: "2020 - 2021",
		content1: "Percentage: 82%",
		content2: "",
		location: "Ghaziabad, Uttar Pradesh",
	},
];

// Add your past achievements here for example - rankings in hackathons/events
export const achievements = [
	{
		id: "a-icpc",
		icon: icpc,
		event: "ICPC 2025 Preliminary Round",
		position: "Top 10 Teams – KIET Group of Institutions",
		content1:
			"Secured a position among the Top 10 teams in the ICPC 2025 Preliminary Round at KIET.",
		content2:
			"Felicitated by the Department of Computer Science for strong problem-solving and teamwork.",
		content3:
			"Demonstrated consistency and competitive programming excellence in a high-pressure contest.",
		article:
			"https://acrobat.adobe.com/id/urn:aaid:sc:AP:a69392c6-34f6-484c-8248-ec03291c075b", // ✅ certificate link
	},
	{
		id: "a-uiux",
		icon: uiux, // if you have, else use kiet
		event: "Design Bridge UI/UX Bootcamp – Technocrats",
		position: "Rank Certificate Holder",
		content1:
			"Awarded a Rank Certificate for outstanding performance in the UI/UX Bootcamp by Technocrats, KIET.",
		content2:
			"Developed strong foundations in design thinking, user experience, and interface design.",
		content3:
			"Collaborated with peers on practical design challenges and user-centric solutions.",
		article:
			"https://acrobat.adobe.com/id/urn:aaid:sc:AP:008fafeb-334b-4459-8153-1871fef13466", // optional
	},
	{
		id: "a-cp",
		icon: cp, // or any CP-related icon
		event: "Competitive Programming Profiles",
		position: "Consistent Contest Performer",
		content1:
			"Actively participating in contests on LeetCode, CodeChef, and Codeforces.",
		content2:
			"Achieved 2★ rating (1426) on CodeChef and a 1474 rating on LeetCode.",
		content3:
			"Demonstrates strong algorithmic thinking, consistency, and problem-solving skills.",
	},
];

export const skills = [
  {
    title: "Languages",
    items: [
      { id: "pl-1", name: "C++", icon: SiCplusplus },
      { id: "pl-2", name: "JavaScript", icon: SiJavascript },
      { id: "pl-3", name: "SQL", icon: SiMysql },
    ],
  },
  {
    title: "ML Skills",
    items: [
      { id: "ml-1", name: "NumPy", icon: SiNumpy },
      { id: "ml-2", name: "scikit-learn", icon: SiPython }, // fallback if icon not available
    ],
  },
  {
    title: "Frameworks",
    items: [
      { id: "fw-1", name: "React.js", icon: SiReact },
      { id: "fw-2", name: "Node.js", icon: SiNodedotjs },
      { id: "fw-3", name: "Express.js", icon: SiExpress },
    ],
  },
  {
    title: "Web Technologies",
    items: [
      { id: "web-1", name: "HTML", icon: SiHtml5 },
      { id: "web-2", name: "CSS", icon: SiCss3 },
      { id: "web-3", name: "Bootstrap", icon: SiBootstrap },
      { id: "web-4", name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Databases",
    items: [
      { id: "db-1", name: "MongoDB", icon: SiMongodb },
      { id: "db-2", name: "MySQL", icon: SiMysql },
    ],
  },
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
  id: "project-1",
  title: "PCOS Prediction Model",
  github: "https://github.com/vidushish/ml-projects/tree/main/pcos-prediction",
  content:
    "A machine learning model to predict Polycystic Ovary Syndrome (PCOS) using clinical and hormonal features. Implemented data preprocessing, train-test split, and Logistic Regression, achieving ~88.5% accuracy with evaluation using a confusion matrix.",
  stack: [
    { id: "pcos-1", icon: SiPython, name: "Python" },
    { id: "pcos-2", icon: SiNumpy, name: "NumPy" },
    { id: "pcos-3", icon: SiScikitlearn, name: "scikit-learn" },
  ],
},

  {
    id: "project-2",
    title: "TrackWise",
    github: "https://github.com/vidushish/TrackWise",
    link: "https://trackwise-hub.netlify.app",
    content:
      "A full-stack task & habit tracking web app with analytics dashboards and JWT-based authentication.",
    stack: [
      { id: "tw-1", icon: SiReact, name: "React.js" },
      { id: "tw-2", icon: SiNodedotjs, name: "Node.js" },
      { id: "tw-3", icon: SiExpress, name: "Express.js" },
      { id: "tw-4", icon: SiMongodb, name: "MongoDB" },
      { id: "tw-5", icon: SiTailwindcss, name: "Tailwind CSS" },
    ],
  },
  {
    id: "project-3",
    title: "Luxcape",
    github: "https://github.com/vidushish/Luxcape",
    link: "https://luxcape.onrender.com/listings",
    content:
      "A full-stack travel booking platform inspired by Airbnb. Users can explore listings, book stays, and manage properties with authentication and CRUD functionality.",
    stack: [
      { id: "lx-1", icon: SiHtml5, name: "HTML" },
      { id: "lx-2", icon: SiCss3, name: "CSS" },
      { id: "lx-3", icon: SiJavascript, name: "JavaScript" },
      { id: "lx-4", icon: SiNodedotjs, name: "Node.js" },
      { id: "lx-5", icon: SiExpress, name: "Express.js" },
      { id: "lx-6", icon: SiMongodb, name: "MongoDB" },
    ],
  },

  {
    id: "project-4",
    title: "BattleOfBits",
    github: "https://github.com/vidushish/BattleOfBits",
    content:
      "A contest tracking web app for competitive programmers. Helps users stay updated with upcoming DSA contests and manage contest details efficiently.",
    stack: [
      { id: "bb-1", icon: SiJavascript, name: "JavaScript" },
      { id: "bb-2", icon: SiNodedotjs, name: "Node.js" },
      { id: "bb-3", icon: SiExpress, name: "Express.js" },
      { id: "bb-4", icon: SiHtml5, name: "EJS" },
      { id: "bb-5", icon: SiCss3, name: "CSS" },
    ],
  },

  {
    id: "project-5",
    title: "Spotify Clone",
    github: "https://github.com/vidushish/Spotify-Clone",
    content:
      "A responsive front-end replica of Spotify featuring modern UI design and layout using pure HTML and CSS.",
    stack: [
      { id: "sp-1", icon: SiHtml5, name: "HTML" },
      { id: "sp-2", icon: SiCss3, name: "CSS" },
    ],
  },

  {
    id: "project-6",
    title: "Weather App",
    github: "https://github.com/vidushish/Weather-App",
    content:
      "A React-based weather application that fetches real-time weather data using the OpenWeatherMap API.",
    stack: [
      { id: "wa-1", icon: SiReact, name: "React.js" },
      { id: "wa-2", icon: SiJavascript, name: "JavaScript" },
      { id: "wa-3", icon: SiCss3, name: "CSS" },
    ],
  },

  {
    id: "project-7",
    title: "QR Code Generator",
    github: "https://github.com/vidushish/QR-Code-Generator",
    content:
      "A Node.js utility that generates QR codes from user input text or URLs, demonstrating backend fundamentals.",
    stack: [
      { id: "qr-1", icon: SiNodedotjs, name: "Node.js" },
      { id: "qr-2", icon: SiJavascript, name: "JavaScript" },
    ],
  },

  {
    id: "project-8",
    title: "Simon Game",
    github: "https://github.com/vidushish/The-Simon-Game",
    content:
      "An interactive memory-based game built using JavaScript, testing users’ pattern recognition skills.",
    stack: [
      { id: "sg-1", icon: SiHtml5, name: "HTML" },
      { id: "sg-2", icon: SiCss3, name: "CSS" },
      { id: "sg-3", icon: SiJavascript, name: "JavaScript" },
    ],
  },

  {
    id: "project-9",
    title: "Drum Kit",
    github: "https://github.com/vidushish/Drum-Kit",
    content:
      "An interactive drum kit web app that plays sounds via keyboard and mouse input.",
    stack: [
      { id: "dk-1", icon: SiHtml5, name: "HTML" },
      { id: "dk-2", icon: SiCss3, name: "CSS" },
      { id: "dk-3", icon: SiJavascript, name: "JavaScript" },
    ],
  },

  {
    id: "project-10",
    title: "Dice Game",
    github: "https://github.com/vidushish/Dice-Game",
    content:
      "A simple dice rolling game that generates random outcomes using JavaScript.",
    stack: [
      { id: "dg-1", icon: SiHtml5, name: "HTML" },
      { id: "dg-2", icon: SiCss3, name: "CSS" },
      { id: "dg-3", icon: SiJavascript, name: "JavaScript" },
    ],
  },

  {
    id: "project-11",
    title: "Amazon Clone",
    github: "https://github.com/vidushish/Project-1-Amazon-Layout-on-html-css",
    content:
      "A responsive Amazon-inspired front-end website layout built using HTML and CSS.",
    stack: [
      { id: "am-1", icon: SiHtml5, name: "HTML" },
      { id: "am-2", icon: SiCss3, name: "CSS" },
    ],
  },

  {
    id: "project-12",
    title: "To-Do List ",
    github: "https://github.com/vidushish/To-Do-List",
    content:
      "A console-based to-do list application implemented in C++ using basic data structures.",
    stack: [
      { id: "td-1", icon: SiCplusplus, name: "C++" },
    ],
  },
];


export const positionsOfResponsibility = [
  {
    id: "por-1",
    organisation: "Project Lead",
    title: "@Kinesis Technical Society (KTS)",
    duration: "Nov 2025 – Present",
    logo: kts,
    content: [
      {
        text: "Leading the planning and execution of KTS technical projects, ensuring timely and structured delivery.",
      },
      {
        text: "Coordinating with team members to streamline workflows and drive projects to completion.",
      },
    ],
  },
  {
    id: "por-2",
    organisation: "Student Placement Cell (SPC) Coordinator",
    title: "@KIET Group of Institutions",
    duration: "2025 – 2027",
    logo: kiet,
    content: [
      {
        text: "Coordinating placement activities between students, faculty, and recruiters.",
      },
      {
        text: "Supporting placement drives and maintaining effective communication during recruitment processes.",
      },
    ],
  },
  {
    id: "por-3",
    organisation: "Sustainable Development Goals (SDG) Coordinator ",
    title: "@KIET Group of Institutions",
    duration: "Aug 2025 – Present",
    logo: kiet,
    content: [
      {
        text: "Promoting and coordinating initiatives aligned with the United Nations Sustainable Development Goals.",
      },
      {
        text: "Collaborating with faculty and student bodies to drive sustainability-focused programs.",
      },
    ],
  },
];


// Links to your social media profiles
export const socialMedia = [
	{
		id: "social-media-1",
		icon: AiFillLinkedin,
		link: "https://www.linkedin.com/in/vidushi-sharma12/",
	},
	{
		id: "social-media-2",
		icon: AiFillGithub,
		link: "https://github.com/vidushish",
	},
	{
		id: "social-media-3",
		icon: AiFillMail,
		link: "mailto:vidushi.sh31@gmail.com",
	}
];

// Your professional summary
export const aboutMe = {
	name: "Vidushi Sharma",
	githubUsername: "vidushish",
	tagLine:
		"KIET’27 ||Computer Science || DSA(C++) || Frontend Developer || Full-stack learner",
	intro: "A problem-solver with a strong foundation in logical thinking and frontend development. Experienced in building scalable web applications and working in collaborative team environments.",
};
