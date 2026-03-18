/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Minh Nguyen Binh",
  title: "Welcome",
  subTitle: emoji(
    "I’m a software engineer focused on building impactful products through deep technical execution, project management discipline, and product design thinking. I connect engineering decisions with business outcomes, and I continuously explore new technologies—especially AI—to deliver practical value."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/minhnbwork97",
  linkedin: "https://www.linkedin.com/in/minhnb211/",
  gmail: "minhnb.work97@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "FULL-STACK SOFTWARE ENGINEER WITH DEEP TECHNICAL EXPERTISE, PROJECT MANAGEMENT CAPABILITY, AND PRODUCT DESIGN THINKING",
  skills: [
    emoji(
      "⚡ Deliver end-to-end software solutions across frontend, backend, data, cloud, and operations"
    ),
    emoji(
      "⚡ Lead project planning and execution with clear scope, timeline, stakeholder alignment, and delivery quality"
    ),
    emoji(
      "⚡ Apply product design thinking to shape user-centered solutions from discovery to delivery"
    ),
    emoji(
      "⚡ Analyze product requirements and translate business needs into practical, measurable technical solutions"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "frontend",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "backend",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "api-system-design",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "devops-cloud",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "ci-cd",
      fontAwesomeClassname: "fas fa-code-branch"
    },
    {
      skillName: "database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "business-analysis",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "project-management",
      fontAwesomeClassname: "fas fa-tasks"
    },
    {
      skillName: "product-thinking",
      fontAwesomeClassname: "fas fa-lightbulb"
    },
    {
      skillName: "product-design",
      fontAwesomeClassname: "fas fa-pencil-ruler"
    },
    {
      skillName: "communication-impact",
      fontAwesomeClassname: "fas fa-bullhorn"
    },
    {
      skillName: "ai-ml",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "testing-qa",
      fontAwesomeClassname: "fas fa-vial"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "VNU University of Engineering and Technology",
      logo: require("./assets/images/vnu_uet_logo.webp"),
      subHeader: "Master of Software Engineering",
      duration: "November 2022 - November 2024",
      desc: "Strengthened both technical foundations and management thinking for systematic software development.",
      descBullets: [
        "Advanced study in software project management and software development processes",
        "Focused on software architecture, scalability, and maintainability",
        "In-depth learning in deep learning and practical AI applications",
        "Master thesis: Developed GRACOS (Graph-Based Code Smell Detector) - a code smell detection method using graph neural networks",
        "Practiced testing strategies to ensure product quality"
      ]
    },
    {
      schoolName: "HaNoi University of Science and Technology",
      logo: require("./assets/images/hust_logo.png"),
      subHeader: "Bachelor of Information Technology",
      duration: "September 2015 - April 2019",
      desc: "Built a strong foundation in computer science and software development.",
      descBullets: [
        "Mastered core knowledge in programming, data structures, and algorithms",
        "Studied databases, operating systems, computer networks, and software engineering",
        "Built practical applications to develop product-oriented thinking"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Engineering Excellence", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Project Management & Delivery",
      progressPercentage: "70%"
    },
    {
      Stack: "Product Design & Thinking",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Demetio",
      companylogo: require("./assets/images/demetio.jpeg"),
      date: "February 2023 – Present",
      desc: "Drive end-to-end product engineering while coordinating delivery across technical and business stakeholders.",
      descBullets: [
        "Built and scaled production-ready systems across frontend, backend, cloud, and data workflows",
        "Planned and delivered project milestones with clear priorities, timelines, and quality standards",
        "Collaborated with product and cross-functional teams to shape user-focused solutions"
      ]
    },
    {
      role: "Software Engineer",
      company: "Agilead Global",
      companylogo: require("./assets/images/agilead.png"),
      date: "September 2019 – February 2023",
      desc: "Contributed to software delivery from implementation to production while strengthening project ownership and product mindset.",
      descBullets: [
        "Developed reliable application features and backend services for real-world product needs",
        "Supported sprint planning, task coordination, and on-time delivery across teams",
        "Worked closely with product stakeholders to balance user value, technical constraints, and business impact"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "AWS Certified Solutions Architect – Associate",
      subtitle: "Designing and deploying scalable systems on AWS",
      image: require("./assets/images/aws-sa.png"),
      imageAlt: "AWS Certified Solutions Architect – Associate logo",
      footerLink: []
    },
    {
      title: "AWS Cloud Practitioner",
      subtitle: "Stepping into AWS",
      image: require("./assets/images/aws_ccp.png"),
      imageAlt: "Amazon web service cloud practitioner logo",
      footerLink: []
    },
    {
      title: "NestJS Advanced Concepts",
      subtitle: "Advanced concepts in NestJS",
      image: require("./assets/images/nestjs_advanced.png"),
      imageAlt: "NestJS Advanced Concepts logo",
      footerLink: []
    },

    {
      title: "NestJS Architecture & Advanced Patterns",
      subtitle: "Practicing architecture and patterns",
      image: require("./assets/images/nest_architecture.png"),
      imageAlt: "NestJS Architecture & Advanced Patterns logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Go say Hi!",
  number: "",
  email_address: "minhnb.work97@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
