import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Tools", href: "/tools" },
  { label: "Support", href: "/support" },
  { label: "Pricing", href: "/pricing" },
  { label: "Testimonials", href: "/testimonials" },
]

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "Thanks to their DevOps platform, our deployment times have been reduced by over 50%. The automation tools have been a game-changer for our team.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "Their DevOps support helped us eliminate bottlenecks in our CI/CD process. The collaboration features made it easier for our teams to stay aligned.",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Monitoring and incident response have never been smoother. Their real-time dashboards and alerting systems gave us complete visibility over our infrastructure.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "With their DevOps tools, we achieved faster release cycles and improved system reliability. Their expertise truly accelerated our software delivery process.",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "The integration with our cloud infrastructure was seamless. The team's DevOps practices helped us scale effortlessly and avoid costly downtimes.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "We’ve seen a significant boost in productivity since adopting their DevOps solutions. Their platform made complex tasks easier and automated the tedious ones.",
  },
];


export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Automated CI/CD Pipelines",
    description:
      "Streamline your development process with powerful drag-and-drop CI/CD pipeline builders for seamless deployments.",
  },
  {
    icon: <Fingerprint />,
    text: "Secure Access Management",
    description:
      "Manage and control access across your infrastructure with multi-factor authentication and role-based access controls.",
  },
  {
    icon: <ShieldHalf />,
    text: "Pre-Built Infrastructure Templates",
    description:
      "Accelerate setup with ready-to-use infrastructure-as-code templates for Kubernetes, Docker, and cloud environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Monitoring",
    description:
      "Monitor your applications, services, and infrastructure in real-time to proactively identify and resolve issues.",
  },
  {
    icon: <PlugZap />,
    text: "Team Collaboration",
    description:
      "Collaborate efficiently with your team on builds, deployments, and incident response—all in one unified workspace.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain actionable insights into system performance, deployments, and user activity with integrated analytics dashboards.",
  },
];


export const checklistItems = [
  {
    title: "Seamless Code Integration",
    description:
      "Automate merges and deployments with CI/CD pipelines, reducing manual errors and boosting productivity.",
  },
  {
    title: "Collaborative Code Reviews",
    description:
      "Enable secure, efficient, and real-time code reviews with built-in version control integrations.",
  },
  {
    title: "AI-Powered Incident Management",
    description:
      "Leverage AI-driven alerts and recommendations to quickly resolve incidents and minimize downtime.",
  },
  {
    title: "Faster Deployment Sharing",
    description:
      "Instantly share deployment links and logs with your team for quick validation and feedback.",
  },
];


export const pricingOptions = [
  {
    title: "Starter",
    price: "$0",
    features: [
      "Basic CI/CD Pipelines",
      "1 Concurrent Build",
      "Community Support",
      "Git Integration",
    ],
  },
  {
    title: "Professional",
    price: "$70",
    features: [
      "Advanced CI/CD Pipelines",
      "5 Concurrent Builds",
      "Automated Rollbacks",
      "Monitoring & Alerts",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Unlimited CI/CD Pipelines",
      "20+ Concurrent Builds",
      "24/7 Priority Support",
      "Security & Compliance Tools",
    ],
  },
];


export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
