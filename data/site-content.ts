import {
  Droplets,
  Earth,
  HandHeart,
  Leaf,
  LucideIcon,
  Recycle,
  Sprout,
  SunMedium,
  Target,
  Trees,
  UsersRound,
  Waves
} from "lucide-react";

export type Metric = {
  value: string;
  label: string;
  icon: LucideIcon;
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Issues", href: "#impact" },
  { label: "Solutions", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" }
];

export const heroMetrics: Metric[] = [
  { value: "500", label: "Trees targeted", icon: Leaf },
  { value: "300+", label: "Students engaged", icon: UsersRound },
  { value: "70%", label: "Survival target", icon: Earth },
  { value: "1-3", label: "Institution pilots", icon: Sprout }
];

export const aboutCards = [
  {
    title: "Our Mission",
    description: "Improve tree survival rates, empower youth with practical climate skills, and promote climate-resilient practices through schools and demonstration farms.",
    icon: Sprout
  },
  {
    title: "Our Vision",
    description: "A climate-resilient Somalia driven by environmentally responsible youth and sustainable community practices.",
    icon: Target
  },
  {
    title: "Our Values",
    description: "Youth leadership, measurable survival outcomes, learning-by-doing, transparency, and long-term community resilience.",
    icon: HandHeart
  }
];

export const impactItems = [
  {
    title: "Improve Tree Survival",
    description: "Home-based planting, structured monitoring, and post-planting care designed to lift survival above 70%.",
    icon: Leaf
  },
  {
    title: "Empower Students",
    description: "Hands-on climate education, internships, and field learning through schools, universities, and academies.",
    icon: HandHeart
  },
  {
    title: "Operate Demo Farms",
    description: "Seedling production, climate-smart agriculture training, small-scale food production, and farm-based revenue.",
    icon: Trees
  },
  {
    title: "Track Real Impact",
    description: "Monthly survival tracking, weekly check-ins, student updates, photos, reports, and simple impact evidence.",
    icon: Recycle
  }
];

export const projects = [
  {
    title: "Tree Survival Program",
    category: "SDG 13",
    description: "Students plant trees at home or safe locations, then monitor and care for them with accountability support.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=85",
    stat: "500 trees in 6 months"
  },
  {
    title: "Climate Education & Internships",
    category: "SDG 4",
    description: "Structured farm visits, practical training sessions, certificates, volunteer roles, and internships for active students.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=85",
    stat: "20-30 interns trained"
  },
  {
    title: "Demonstration Farm",
    category: "Resilience",
    description: "A working farm that produces seedlings, teaches climate-smart agriculture, and creates income for program growth.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
    stat: "Nursery and food output"
  }
];

export const articles = [
  {
    title: "Why tree planting in Mogadishu needs survival systems",
    label: "Problem",
    date: "May 2026",
    description: "Daryeel responds to low survival rates caused by water scarcity, livestock damage, and limited aftercare."
  },
  {
    title: "How student-led home planting improves accountability",
    label: "Program",
    date: "April 2026",
    description: "Students become responsible for monitoring and maintaining trees planted at home or safe locations."
  },
  {
    title: "Building a self-sustaining climate model through farms",
    label: "Sustainability",
    date: "March 2026",
    description: "Seedlings, vegetables, training services, and sponsorships help reduce dependence on early-stage grants."
  }
];

export const donationGoals = [
  { label: "Seedlings and farm setup", value: 29 },
  { label: "Training and learning materials", value: 14 },
  { label: "Monitoring, logistics, and incentives", value: 43 }
];

export const footerLinks = {
  Explore: ["About", "Impact", "Projects", "Community"],
  Action: ["Volunteer", "Donate", "Partner", "Newsletter"],
  Learn: ["Climate Articles", "Education Resources", "Annual Impact", "Contact"]
};

export const natureIcons = [Leaf, Trees, Recycle, Droplets, Waves, SunMedium];
