type Skill = {
  title: string;
  icon: string;
  style?: object;
};
type Testimonial = {
  quote: string;
  name?: string;
  job?: string;
};

export const skills: Skill[] = [

  {
    title: "NodeJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    title: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
  },
  {
    title: "Flutter",
    icon: "/flutter-icon.svg"
  },
  {
    title: "TensorFlow",
    icon: "/google-tensorflow-icon.svg"
  },
  {
    title: "PyTorch",
    icon: "/pytorch-icon.svg"
  },
  {
    title: "MongoDB",
    icon: "/mongodb-icon.svg"
  },
  {
    title: "Python",
    icon: "/python-svgrepo-com.svg"
  },
  {
    title: "Github",
    icon: "/icons8-github.svg"
  },
  {
    title: "Figma",
    icon: "/figma-seeklogo.svg"
  },
  {
    title: "Unity",
    icon: "/unity-seeklogo.svg"
  },
  {
    title: "Django",
    icon: "/django.svg"
  },

];

export const testimonials: Testimonial[] = [
  {
    quote:
      "His solution elevated our entire operation, making processes faster and more efficient. The support is also commendable, always ready to assist."
  },
  {
    quote:
      "Clients appreciate the innovative solutions, intuitive interfaces, and consistent quality I bring to every project."
  },
  {
    quote:
      "With a focus on user satisfaction, my work consistently earns positive feedback and fosters long-term engagement."
  }
];
