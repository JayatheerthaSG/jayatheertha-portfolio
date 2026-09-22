export const portfolio = {
  name: "Jayatheertha S G",
  role: "Software Developer · Data Analyst · AI/ML Enthusiast",
  email: "jayatheertha2381@gmail.com",
  phone: "+91 7204814182",
  location: "Bangalore, Karnataka",
  summary:
    "I work across software development, data analytics, AI/ML and infrastructure automation — turning data and engineering problems into practical systems.",
  social: {
    github: "https://github.com/JayatheerthaSG",
    linkedin: "https://www.linkedin.com/in/jayatheerthasg/",
    codechef: "https://www.codechef.com/users/jayatheerthasg",
    codeforces: "https://codeforces.com/profile/jayatheerthasg"
  },
  education: [
    {
      degree: "M.Tech",
      field: "Computer Science & Engineering",
      institution: "M S Ramaiah Institute of Technology",
      dates: "Dec 2024 — Aug 2026",
      detail: "CGPA: 8.9 / 10.0"
    },
    {
      degree: "B.E.",
      field: "Computer Science Engineering",
      institution: "Amruta Institute of Engineering and Management Sciences",
      dates: "Aug 2019 — Aug 2023",
      detail: "CGPA: 8.14 / 10.0"
    }
  ],
  experience: [
    {
      company: "Target",
      role: "Apprentice — Data Analyst, Merchandising (RTE Team)",
      dates: "Aug 2026 — Present",
      location: "Bangalore, Karnataka",
      stack: ["SQL", "Power BI", "Data Analysis"],
      bullets: [
        "Supporting the Merchandising RTE team with data analysis and business reporting.",
        "Using SQL to retrieve, query, and analyze data to support business requirements and decision-making.",
        "Creating Power BI reports and visualizations to generate business insights and support data-driven decisions."
      ]
    },
    {
      company: "Caze Labs",
      role: "Intern",
      dates: "Sep 2025 — Feb 2026",
      location: "Bangalore, Karnataka",
      stack: ["Ansible", "Linux", "Git", "Shell Scripting"],
      bullets: [
        "Developed and executed Ansible Playbooks to automate Linux server administration and configuration management tasks.",
        "Implemented inventory management and deployment workflows for efficient infrastructure provisioning.",
        "Verified deployments through testing and troubleshooting, ensuring reliable and consistent system configurations.",
        "Gained hands-on experience with Linux, Git, shell scripting, and infrastructure automation following DevOps best practices."
      ]
    }
  ],
  projects: [
    {
      id: "elephant",
      number: "01",
      title: "Real-Time Elephant Detection",
      subtitle: "Aerial imagery · hybrid deep learning",
      description:
        "A real-time elephant detection system using a hybrid YOLOv10 and MobileNetV2 CNN framework on aerial imagery.",
      stack: ["Python", "YOLOv10", "MobileNetV2", "OpenCV", "TensorFlow", "Roboflow"],
      bullets: [
        "Prepared and annotated a custom elephant dataset, applying preprocessing and augmentation techniques to improve model performance.",
        "Used YOLOv10 for object localization and MobileNetV2 for verification to reduce false-positive detections."
      ],
      architecture: ["AERIAL IMAGE", "PREPROCESSING", "YOLOv10", "OBJECT LOCALIZATION", "MobileNetV2", "VERIFICATION", "ELEPHANT DETECTION"]
    },
    {
      id: "parking",
      number: "02",
      title: "Vehicle Parking System",
      subtitle: "Parking management application",
      description:
        "A vehicle parking management system for managing different vehicle types and tracking parking entry and exit.",
      stack: ["PHP", "MySQL", "JavaScript", "SCSS", "Bootstrap"],
      bullets: [
        "Managed parking for different types of vehicles, including two-wheelers and three-wheelers.",
        "Tracked parked vehicles and managed vehicle entry and exit times."
      ]
    },
    {
      id: "gst",
      number: "03",
      title: "GST E-Billing App",
      subtitle: "Android application",
      description:
        "An Android application designed to simplify GST bill generation and management.",
      stack: ["Java", "Android Studio"],
      bullets: [
        "Designed an intuitive user interface with multiple activities for seamless navigation.",
        "Implemented features for efficient GST bill generation and management."
      ]
    },
    {
      id: "melanoma",
      number: "04",
      title: "Melanoma Cancer Detection",
      subtitle: "CNN-based image classification",
      description:
        "A deep learning-based system for analyzing skin images and classifying melanoma-related predictions.",
      stack: ["Python", "CNN", "Deep Learning"],
      bullets: [
        "Developed a deep learning-based system for detecting melanoma from skin images.",
        "Used a Convolutional Neural Network to analyze skin images and classify melanoma-related predictions."
      ]
    }
  ],
  skillGroups: [
    { title: "Languages", items: ["Python", "Java", "C", "HTML/CSS", "JavaScript", "SQL"] },
    { title: "Frameworks", items: ["Spring Boot", "Hibernate", "REST APIs"] },
    { title: "AI / ML", items: ["YOLOv10", "MobileNetV2", "TensorFlow", "OpenCV", "Roboflow"] },
    { title: "Data", items: ["SQL", "Power BI", "MySQL", "Data Analysis"] },
    { title: "Automation", items: ["Linux", "Ansible", "Jenkins", "GitHub"] },
    { title: "Developer Tools", items: ["VS Code", "Eclipse", "Google Cloud Platform", "Android Studio"] }
  ],
  learning: [
    "Google Cloud Ready Facilitator Program",
    "Data Analytics on AWS — Coursera",
    "Software Engineering Virtual Experience — JP Morgan",
    "Salesforce Developer — Salesforce",
    "Google Cloud Badges"
  ]
};