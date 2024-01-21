import { kebabCase } from "@/utils/utils";

const projects = [
  {
    id: 0,
    title: "Driver Analysis",
    desc: "Developed a comprehensive Driver Behavior Analysis system integrating various computer vision models to assess and enhance road safety.",
    img: `./da.jpeg`,
    link: "https://resq-notify.onrender.com/",
    tags: ["Tensorflow", "YOLO", "Python", "OpenCV", "PyTorch"]
  },
  {
    id: 1,
    title: "Crash Detection",
    desc: "Developing a computer vision system that detects vehicle crashes through dashcams, subsequently alerting the user's emergency contacts via app notifications, email, and WhatsApp.",
    img: `cd.jpeg`,
    link: "https://resq-notify.onrender.com/",
    tags: [
      "Tensorflow", "YOLO", "Python", "OpenCV", "PyTorch", "MobileNet Model"
    ]
  },
  {
    id: 3,
    title: "Automated Employee Cybersecurity Training System",
    desc: "Developed an AI-powered Employee Cybersecurity Training Software, now actively employed by aais.ai Developed machine learning model that creates phishing simulations based on each user's interests and role, ensuring they can recognize and respond to real Cybersecurity threats. Incorporated robust error handling mechanisms to safeguard the product from wear and tear, optimizing its performance by conducting alpha and beta testing.",
    img: `WhatsApp Image 2024-01-21 at 11.20.29 PM.jpeg`,
    tags: ["AI", "ML", "Python","Github","Django","MongoDB"]
  },
  {
    id: 2,
    title: "Twitter tweets Analysis",
    desc: "Integrated a client-provided NLP model to categorize tweets pertaining to disaster assistance, storing relevant findings in a MongoDB database. The curated data was then linked to a React-based web interface through a REST API developed with the FastAPI framework.",
    img: `DM.jpeg`,
    link: "https://tweetmydisasters.com/",
    tags: ["React", "Tailwind CSS", "Javascript", "Next.js","Python","RestAPI","FastAPI"]
  },

  {
    id: 4,
    title: "Memory-Enhanced AI Assistants (CHATBOTS)",
    desc: "Created advanced chatbots that incorporated memory and learning abilities to deliver AI based customer support and natural language processing. These chatbots could remember past conversations, save relevant information, and engage users in more personalized and natural interactions.",
    img: `static/projects/newnex.jpg`,
    tags: ["TensorFlow", "Python", "NLP"]
  },
  {
    id: 5,
    title: "News Recommendation System",
    desc: "Designed news recommendation system based on user preferences and behavior on a website, offering personalized content and services using multiple ML algorithms",
    img: `WhatsApp Image 2024-01-21 at 11.21.02 PM.jpeg`,
    tags: ["AI","ML","GitHub","MongoDB","Python"]
  },
  {
    id: 6,
    title: "Typo squatting Domain Search",
    desc: "Developed a project to protect users from typo squatting threats by searching for registered domains that are similar or closely related to the user's domain. The system alerts users to potential risks, helping them identify and avoid malicious websites that may attempt to deceive or compromise their online presence.",
    img: `WhatsApp Image 2024-01-21 at 11.21.03 PM.jpeg`,
    tags: [
      "AI","ML","GitHub","MongoDB","Python"
    ]
  },
  {
    id: 7,
    title: "KPI Report: Two-Wheeler Insurance Market in India",
    desc: "The report provides essential insights into the performance indicators of the two-wheeler insurance market in India. It covers market trends, growth rates, customer preferences, and key player performance in making informed decisions.",
    img: `WhatsApp Image 2024-01-21 at 11.21.04 PM.jpeg`,
    link: "https://github.com/priyamsekra10/KPI-Report-Two-Wheeler-Insurance-Market-in-India",
    tags: [
     "GitHub","MongoDB","Python","Data Analysis"
    ]
  },
  {
    id: 8,
    title: "Social Engineering Attack Monitor",
    desc: "This system searched for and scraped similar news articles to detect social engineering attacks. By analyzing the gathered data, it could proactively identify potential threats and enhance cybersecurity measures.",
    img: `WhatsApp Image 2024-01-21 at 11.21.04 PM-2.jpeg`,
    tags: ["AI","ML","GitHub","MongoDB","Python"]
  },
  {
    id: 9,
    title: "Trading Strategy",
    desc: "Leveraging US stock data, I made data-driven investment decisions. By analyzing market trends and patterns, the system identified promising opportunities, enabling informed choices for maximizing investment returns.",
    img: `WhatsApp Image 2024-01-21 at 11.21.05 PM.jpeg`,
    link: "https://github.com/priyamsekra10/A-Trading-Strategy-using-US-Stock-Data",
    tags: ["Data Analysis","GitHub","MongoDB","Python"]
  },
  {
    id: 10,
    title: "Food order and delivery management system",
    desc: "A Python and Oracle-based platform was created for users to explore and order meals from different stores, with data visualization using Matplotlib.",
    img: `WhatsApp Image 2024-01-21 at 11.21.05 PM-2.jpeg`,
    tags: ["Python","MYSQL","Data Analysis","Github"]
  }
];

export const allTags = [];

projects.forEach(project => {
  project.tags.forEach(tag => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map(tag => kebabCase(tag));

export default projects;
