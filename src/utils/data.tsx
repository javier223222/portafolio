type Project = {
  title: string;
  description: string;
  techStack: string[];
  company: string;
  period: string;
  github?: string;
  docs?: string;
};
export type skill={
  type:string,
  name:string,

}

export const projects: Project[] = [
  {
    title: 'Soft-Skills Training App (Microservices + ML)',
    company: 'Teching',
    period: 'Apr 2025 – Jul 2025',
    
    description:
      'Contributed to an AI-powered soft skills platform. Designed a microservices architecture (DDD) with Node.js/Express and FastAPI. Containerized services, used Kong API Gateway and RabbitMQ. Built ML pipelines (Isolation Forest for anomalies and churn prediction). Integrated PostgreSQL and MongoDB and implemented dashboards and KPIs.',
    techStack: ['Node.js', 'TypeScript', 'FastAPI', 'Docker', 'Kong', 'RabbitMQ', 'PostgreSQL', 'MongoDB', 'ML'],
  },
  {
    title: 'Restaurant ERP System',
    company: 'Hubbie Platform',
    period: 'Apr 2024 – Sep 2024',
  
    description:
      'Developed backend services with Go and Gin for inventory, users, menus, and orders. Implemented reusable REST endpoints and optimized performance for production loads. Collaborated with frontend and supported CI/CD workflows.',
    techStack: ['Go', 'Gin', 'REST API', 'Docker', 'CI/CD'],
  },
  {
    title: 'Client & Maintenance Management System',
    company: 'HIGHTECH ',
    period: 'May 2023 – Apr 2024',
    
    description:
      'Built full-stack features with Laravel, MySQL and PostgreSQL. Implemented role-based auth, WebSockets for chat/notifications, and CRUD modules for clients and catalogs. Added forms, validation and dashboards with Blade.',
    techStack: ['Laravel', 'PHP', 'MySQL', 'PostgreSQL', 'WebSockets', 'Blade'],
  },
  {
    title: 'IoT Solar Panel Monitoring System',
    company: 'Freelance',
    period: 'Jan 2023 – May 2023',
    
    description:
      'Designed REST APIs with Node.js to ingest sensor data and trigger alerts. Streamed real-time metrics via WebSockets to dashboards. Used JWT authentication and optimized MySQL queries for reliability.',
    techStack: ['Node.js', 'Express', 'JWT', 'MySQL', 'WebSockets'],
  },
  {
    title: 'University Management Platform',
    company: 'Platinum México',
    period: 'Sep 2022 – Mar 2023',
    
    description:
      'Delivered Go + Gin services for authentication, schedules and academic records. Integrated relational databases, enforced clean architecture and participated in code reviews.',
    techStack: ['Go', 'Gin', 'REST API', 'Clean Architecture', 'PostgreSQL'],
  },
];

export const skills: skill[] = [
  {type:"Backend",name:"RESTful API Design"},
  {type:"Backend",name:"Microservices Architecture"},
  {type:"Backend",name:"Event-driven & Async"},
  {type:"Backend",name:"WebSockets"},
  {type:"Backend",name:"Clean Architecture"},
  {type:"Backend",name:"Domain-Driven Design (DDD)"},
  {type:"Backend",name:"Real-time Processing"},
  {type:"Backend",name:"Java"},
  {type:"Databases",name:"MySQL"},
  {type:"Databases",name:"PostgreSQL"},
  {type:"Databases",name:"MongoDB"},
  {type:"Databases",name:"Data Modeling"},
  {type:"Databases",name:"Performance Tuning"},
  {type:"Databases",name:"Migrations"},
  {type:"DevOps & Infra",name:"Docker"},
  {type:"DevOps & Infra",name:"CI/CD Pipelines"},
  {type:"DevOps & Infra",name:"AWS (EC2 · S3 · ELB · CloudWatch · IAM)"},
  {type:"DevOps & Infra",name:"Nginx · Load Balancing"},
  {type:"DevOps & Infra",name:"Caching Strategies"},
  {type:"DevOps & Infra",name:"Performance Tuning"},
  {type:"DevOps & Infra",name:"Kong API Gateway"},
  {type:"DevOps & Infra",name:"RabbitMQ"},


  {type:"soft",name:"Team Collaboration"},
  {type:"soft",name:"Problem Solving"},
  {type:"soft",name:"Attention to Detail"},
  {type:"soft",name:"Continuous Learning"},
  {type:"soft",name:"Effective Communication"},
  {type:"soft",name:"Workshop Facilitation"},
  {type:"Toolbelt",name:"Node.js"},
  {type:"Toolbelt",name:"TypeScript"},
  {type:"Toolbelt",name:"Java"},
  {type:"Toolbelt",name:"Python"},
  {type:"Toolbelt",name:"Go"},
  {type:"Toolbelt",name:"Express.js"},
  {type:"Toolbelt",name:"FastAPI"},
  {type:"Toolbelt",name:"Spring Boot"},
  {type:"Toolbelt",name:"Gin"},
  {type:"Toolbelt",name:"Echo"},
  {type:"Toolbelt",name:"Laravel"},
  {type:"Toolbelt",name:"MySQL"},
  {type:"Toolbelt",name:"PostgreSQL"},
  {type:"Toolbelt",name:"MongoDB"},
  {type:"Toolbelt",name:"DynamoDB"},
  {type:"Toolbelt",name:"Docker"},
  {type:"Toolbelt",name:"Kong"},
  {type:"Toolbelt",name:"RabbitMQ"},
  {type:"Toolbelt",name:"AWS"},
  {type:"Toolbelt",name:"Azure"},
  {type:"Toolbelt",name:"DigitalOcean"},

];