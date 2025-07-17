import React from 'react';
import {
  BotMessageSquare,
  Fingerprint,
  ShieldHalf,
  BatteryCharging,
  PlugZap,
  GlobeLock,
} from 'lucide-react';

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

const features = [
  {
    icon: <BotMessageSquare size={32} className="text-orange-400" />,
    title: "Automated CI/CD Pipelines",
    description: "Drag-and-drop CI/CD pipeline builders to streamline your deployments.",
  },
  {
    icon: <Fingerprint size={32} className="text-orange-400" />,
    title: "Secure Access Management",
    description: "MFA and role-based access control to protect your infrastructure.",
  },
  {
    icon: <ShieldHalf size={32} className="text-orange-400" />,
    title: "Infrastructure Templates",
    description: "Pre-built, production-ready IaC templates for Kubernetes and Docker.",
  },
  {
    icon: <BatteryCharging size={32} className="text-orange-400" />,
    title: "Real-Time Monitoring",
    description: "Live metrics, logs, and alerts for proactive issue resolution.",
  },
  {
    icon: <PlugZap size={32} className="text-orange-400" />,
    title: "Team Collaboration",
    description: "Collaborate across deployments, incidents, and code reviews.",
  },
  {
    icon: <GlobeLock size={32} className="text-orange-400" />,
    title: "Analytics Dashboard",
    description: "Visualize system health, deployments, and user activity in real-time.",
  },
];

const Support = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white px-6 py-12 flex flex-col items-center pt-20">
      <h1 className="text-5xl font-bold mb-4 ">DevOps Mania</h1>
      <p className="text-gray-300 max-w-2xl text-center mb-10 text-lg">
        Welcome to <span className=" font-semibold">DevOps Mania</span> — your trusted partner in building, securing, and managing modern infrastructure. Explore our core features designed for engineers and teams who demand automation, insight, and control.
      </p>

      <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl mb-16">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-[#1f1f1f] hover:bg-[#2a2a2a] transition-colors duration-300 p-6 rounded-xl shadow-md flex space-x-4 items-start border border-orange-500/10"
          >
            {item.icon}
            <div>
              <h3 className="text-xl font-semibold mb-1 text-orange-400">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;
