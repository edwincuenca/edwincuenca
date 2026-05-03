import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  name: "EDWIN",
  surname: "CUENCA",
  tagline: "Building systems in the dark.",
  bio: [
    "I DON'T BUILD CORPORATE WEBSITES. I ENGINEER DIGITAL ARCHITECTURES THAT WITHSTAND THE CHAOS OF THE MODERN WEB.",
    "SPECIALIZING IN REACT, NODE.JS, AND SYSTEM SECURITY. MY CODE IS BRUTAL, EFFICIENT, AND DESIGNED TO SCALE IN THE HARSHEST ENVIRONMENTS."
  ],
  stats: [
    { label: "EST_YEAR", value: "1998" },
    { label: "PROTOCOLS_DEPLOYED", value: "42+", color: "magenta" },
    { label: "SYSTEM_STABILITY", value: "99%", color: "blue" },
    { label: "LOCATION", value: "NODE_01" }
  ],
  projects: [
    {
      title: "GRID_WATCHER_V1",
      description: "A decentralized monitoring system for global mesh networks. Real-time packet inspection and neural-link stability tracking.",
      tags: ['React', 'WebSockets', 'Rust'],
      link: "#"
    },
    {
      title: "NEURAL_OVERRIDE",
      description: "Biometric authentication layer using behavioral patterns and retina-scan simulation. Secure, brutal, uncompromising.",
      tags: ['TypeScript', 'Auth0', 'PostgreSQL'],
      link: "#"
    },
    {
      title: "DARK_NODE_CLI",
      description: "A high-performance terminal tool for managing distributed cloud nodes via encrypted channels.",
      tags: ['Node.js', 'Go', 'Docker'],
      link: "#"
    },
    {
      title: "SILENT_PROTOCOL",
      description: "Zero-knowledge encryption layer for peer-to-peer communication across untrusted subnets.",
      tags: ['Solidity', 'Cryptography', 'Next.js'],
      link: "#"
    },
    {
      title: "SYSTEM_DIAGNOSTIC",
      description: "Automated audit tool for identifying vulnerabilities in complex microservice architectures.",
      tags: ['Python', 'K8s', 'Grafana'],
      link: "#"
    }
  ],
  skills: {
    frontend: [
      { label: "FRONTEND_LAYER", skills: "REACT / NEXT.JS / TYPESCRIPT" },
      { label: "STYLING_ENGINE", skills: "TAILWIND / VANILLA CSS / GLSL" },
      { label: "STATE_MGMT", skills: "ZUSTAND / REDUX / CONTEXT_API" },
      { label: "ANIMATION_LIB", skills: "FRAMER_MOTION / THREE.JS" }
    ],
    backend: [
      { label: "BACKEND_CORE", skills: "NODE.JS / EXPRESS / GO" },
      { label: "DATABASE_SYNC", skills: "POSTGRES / MONGODB / REDIS" },
      { label: "CLOUD_DEVOPS", skills: "DOCKER / AWS / VERCEL" },
      { label: "SECURITY_PROTO", skills: "JWT / OAUTH / BCRYPT" }
    ]
  }
};
