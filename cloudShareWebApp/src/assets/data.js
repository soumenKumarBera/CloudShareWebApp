import sarahjohnson from "./sarah-johnson.jpg";
import priya from "./priya sharma.jpg";
import micheal from "./download.jpg";

export const feture = [
    {
      iconeNmae:"ArrowUPCircle",
      iconeColor: "text-purple-500",
      title: "Easy File Upload",
      description:
        "Quickly upload your files with our intuitive drags and-drop interface",
    },
    {
      iconeNmae:"Shield",
      iconeColor: "text-green-500",
      title: "Secure Storage",
      description:
        "Your files are encrypted and stored securely in our cloud infrastructure.",
    },
    {
      iconeNmae:"Share2",
      iconeColor: "text-purple-500",
      title: "Simple Sharing",
      description:
        "Share files with anyone using secure links that you control.",
    },
    {
      iconeNmae:"CreditCard",
      iconeColor: "text-red-800",
      title: "Flexile Credits",
      description: "Pay only for what you use with our credit-based system.",
    },
    {
      iconeNmae:"FileText",
      iconeColor: "text-red-500",
      title: "File Managment",
      description: "Organize, preview, and manage your files from any device.",
    },
    {
      iconeNmae:"Clock",
      iconeColor: "text-blue-500",
      title: "Transaction History",
      description: "Keep track of all your credit purchases and usage.",
    },
  ];


  export const priceingSection = [

    {highlighted: 0,
      name: "Free",
      description: "Perfect for getting started",
      fetures: ["5 File uploads", "Basic file sharing", "7-day free retention", "Email support"],
      cta: "Get Started"  
      

    },

     {highlighted: 500,
      name: "Premium",
       description: "For individuals with larger needs",
      fetures: ["500 File uploads", "Advance file sharing", "30-day free retention", "Priority email support", "File analytics"],
      cta: "Go Premium"
    },

     {highlighted: 2500,
      name: "Ultimate",
       description: "For tearns and businesses",
      fetures: ["5000 File uploads", "Team sharing capabilties", "Unlimited file retention", "24/7 priority support", "Advance analytice", "API access"],
      cta: "Go Ultimate"
    }

  ];



  export const testimonials = [
    {image: sarahjohnson,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "CreativeMinds Inc.",
      rating: "5",
      quote: "CloudShare has transformed how our team collaborates on creative assets. The secure sharing and intuitive interface have made file management a breeze."
    },
    {image: micheal,
      name: "Michael Chen",
      role: "Freelance Designer",
      company: "Self-employed",
      rating: "5",
       quote: "As a freelancer, I need to share large design files with clients securely. CloudShare's simple interface and reasonable pricing make it my go-to solution."
    },
    {image: priya,
      name: "priya sharma",
      role: "Project Manager",
      company: "TechSolutions Ltd.",
      rating: "4",
       quote: "Managing project files across multiple teams used to be a nightmare until we found CloudShare. Now everything is organized and accessible exactly when we need it."
    },

  ]
