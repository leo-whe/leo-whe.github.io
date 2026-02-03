import { ProfileData } from './types';

// ==============================================================================
// 🟢 操作指南 (USER GUIDE):
// 
// 1. 这里是网站的“数据库”。你只需要修改这个文件，网页内容就会自动更新。
// 2. 请只修改引号 "" 或 `` 里的文字内容。
// 3. 如果想添加新的论文或新闻，复制 { ... } 块并粘贴即可。
// 4. 图片链接可以是网络链接 (https://...)，也可以是放在根目录下的本地文件 (./my-photo.jpg)。
// ==============================================================================

export const PROFILE: ProfileData = {
  // 🟢 1. 基础信息
  name: "Weilong He",
  title: "Ph.D. Candidate in Biological and Environmental Engineering",
  institution: "Cornell University",
  email: "wh542@cornell.edu", // 备用: whe8@ncsu.edu
  location: "Ithaca, New York, U.S.",
  
  // 🟢 2. 社交链接
  socials: {
    googleScholar: "#", // CV中未找到具体链接，建议自行补充
    twitter: "#",
    github: "#",
    linkedin: "https://www.linkedin.com/in/weilong-he-65339a253/",
  },

  // 🟢 3. 简短介绍 (用于 AI 助手上下文)
  shortBio: "I am a Ph.D. Candidate at Cornell University (transferred from NC State), specializing in Agricultural AI, Robotics, and Deep Learning for plant phenotyping.",

  // 🟢 4. 详细个人简介
  bio: `
    I am a Ph.D. Candidate in Biological and Environmental Engineering at Cornell University, currently based in Ithaca, NY. I previously pursued my Ph.D. at North Carolina State University (2023-2025) before transferring.
    
    My research interests lie at the intersection of Artificial Intelligence, Robotics, and Agriculture. I focus on developing robust deep learning algorithms and robotic systems for high-throughput plant phenotyping, disease detection, and precision agriculture. 
    
    Recently, I have been working on leveraging Large Language Models (LLMs) and game engines (synthetic data) to solve data scarcity challenges in agricultural AI, as well as developing domain-adaptive segmentation models for real-world field applications.
    
    I received my B.Eng. in Electronic Information Engineering from Wuhan University of Technology (2022).
  `,

  // 🟢 5. 新闻列表 (News)
  news: [
    {
      id: 'n1',
      date: 'May 2025',
      content: 'Selected as a Future Leaders for Food & Agriculture (FFAR) Fellow (2025-2028).',
      link: 'https://events.cornell.edu/riley-robb_hall'
    },
    {
      id: 'n2',
      date: 'Apr 2025',
      content: 'Awarded the NC STATE COE Doctoral Scholar of the Year (Scholarly Achievement Award).',
    },
    {
      id: 'n3',
      date: 'Jan 2025',
      content: 'Named one of 21 "Rising Seed Stars" by International Seed World magazine.',
    },
    {
      id: 'n4',
      date: 'Jul 2024',
      content: 'Won 1st Place in the ASABE Robotics Student Design Competition (Advanced Division).',
    }
  ],

  // 🟢 6. 研究项目 (Research Projects)
  research: [
    {
      id: 'r1',
      title: "LLM Agent & Robotics for Phenotyping",
      description: "Developing synthetic datasets using game engines to minimize manual labeling and implementing unsupervised domain-adaptive segmentation for disease quantification. Integrating models with drones/robots for real-time monitoring.",
      imageUrl: "https://picsum.photos/600/400?random=1", // 🔴 请替换为你的项目图片
      tags: ["GenAI", "Robotics", "Synthetic Data"]
    },
    {
      id: 'r2',
      title: "Cottonseed Defect Detection",
      description: "Developed a two-stage deep learning approach achieving 97% accuracy in identifying cottonseed defects. The system improves efficiency over existing methods and applies visualization techniques for model transparency.",
      imageUrl: "https://picsum.photos/600/400?random=2", // 🔴 请替换为你的项目图片
      tags: ["Deep Learning", "Classification", "AgTech"]
    },
    {
      id: 'r3',
      title: "Maize Leaf Azimuth Angle Detection",
      description: "Created a UAV-based phenotyping pipeline using Improved YOLOv5 and Transformers to characterize leaf orientation in large-scale maize fields, tackling challenges of dense and overlapping leaves.",
      imageUrl: "https://picsum.photos/600/400?random=3", // 🔴 请替换为你的项目图片
      tags: ["Computer Vision", "UAV", "Phenotyping"]
    },
    {
      id: 'r4',
      title: "Disease Spore Trap System",
      description: "Designed a remotely operated, Arduino-controlled vacuum spore trap with optimized airflow for early detection of downy mildew. Features a user-friendly interface for continuous on-site operation.",
      imageUrl: "https://picsum.photos/600/400?random=4", // 🔴 请替换为你的项目图片
      tags: ["IoT", "Sensors", "Hardware"]
    }
  ],

  // 🟢 7. 发表论文 (Publications) - 选取了部分 Representative Papers
  publications: [
    {
      id: 'p1',
      title: "Improved two-stage deep learning algorithm and lightweight YOLOv5n for classifying cottonseed damage",
      authors: ["Weilong He", "F. Wu", "L. U. Snyder", "J. Cheng", "E. Wilcox", "L. Xiang"],
      venue: "Computers and Electronics in Agriculture (IF: 8.4)",
      year: 2025,
      pdfLink: "https://doi.org/10.1016/j.compag.2024.110042",
      tags: ["Deep Learning", "Classification"]
    },
    {
      id: 'p2',
      title: "High-Throughput Robotic Phenotyping for Quantifying Tomato Disease Severity Enabled by Synthetic Data and Domain-Adaptive Semantic Segmentation",
      authors: ["Weilong He", "X. Li", "Z. Zhang", "Y. Chen", "et al."],
      venue: "Journal of Field Robotics (IF: 7.2)",
      year: 2025,
      pdfLink: "https://doi.org/10.1002/rob.22490",
      tags: ["Robotics", "Synthetic Data"]
    },
    {
      id: 'p3',
      title: "Swin-Roleaf: A new method for characterizing leaf azimuth angle in large-scale maize plants",
      authors: ["Weilong He", "J. L. Gage", "R. Rellán-Álvarez", "L. Xiang"],
      venue: "Computers and Electronics in Agriculture (IF: 8.4)",
      year: 2024,
      pdfLink: "https://doi.org/10.1016/j.compag.2024.109120",
      tags: ["Phenotyping", "Maize"]
    },
    {
      id: 'p4',
      title: "Development of a bionic hexapod robot with adaptive gait and clearance for enhanced agricultural field scouting",
      authors: ["Z. Zhang", "Weilong He", "F. Wu", "L. Quesada"],
      venue: "Frontiers in Robotics and AI",
      year: 2024,
      pdfLink: "https://doi.org/10.3389/frobt.2024.1426269",
      tags: ["Robotics"]
    }
  ],

  // 🟢 8. 教学经历 (Teaching)
  teaching: [
    {
      id: 't1',
      role: "Guest Lecturer",
      course: "HS 495/590: Plant Phenomics",
      institution: "North Carolina State University",
      period: "Mar 2025",
      description: "Delivered lecture on 'Deep learning in Plant Phenotyping'."
    },
    {
      id: 't2',
      role: "Teaching Assistant & Instructor",
      course: "BAE 401/501: Sensors and Controls",
      institution: "North Carolina State University",
      period: "Spring 2024",
      description: "Led hands-on experimental sessions, provided comprehensive support for lab experiments, and delivered guest lectures."
    },
    {
      id: 't3',
      role: "Summer Camp Assistant",
      course: "NC STATE BAE Summer Camp",
      institution: "North Carolina State University",
      period: "Summer 2023 & 2024",
      description: "Delivered presentations and led activities to introduce high school students to agricultural AI and robotics."
    }
  ],

  // 🟢 9. 奖项与荣誉 (Awards)
  awards: [
    {
      id: 'a1',
      title: "FFAR Fellow (2025-2028)",
      organization: "Foundation for Food & Agriculture Research",
      year: "2025"
    },
    {
      id: 'a2',
      title: "Doctoral Scholar of the Year",
      organization: "NC STATE College of Engineering",
      year: "2025"
    },
    {
      id: 'a3',
      title: "Rising Seed Star",
      organization: "International Seed World Magazine",
      year: "2025"
    },
    {
      id: 'a4',
      title: "1st Place, Robotics Student Design Competition",
      organization: "ASABE",
      year: "2024"
    },
    {
      id: 'a5',
      title: "3rd Place, Paper Competition",
      organization: "AOCABFE",
      year: "2024"
    }
  ],

  // 🟢 10. 相册 (Gallery)
  // 🔴 格式更新：现在每张图片需要 url 和 description
  galleryImages: [
    {
      url: "https://picsum.photos/800/600?random=1",
      description: "Presenting my research at ASABE Annual Meeting 2024 in Anaheim."
    },
    {
      url: "https://picsum.photos/800/600?random=2",
      description: "Field testing the new robotic phenotyping platform."
    },
    {
      url: "https://picsum.photos/800/600?random=3",
      description: "Winning the 1st Place in the ASABE Robotics Student Design Competition."
    },
    {
      url: "https://picsum.photos/800/600?random=4",
      description: "Teaching high school students at the NC STATE BAE Summer Camp."
    },
  ]
};