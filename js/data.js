window.CYFER_DATA = Object.freeze({
  backgroundVariants: {
    default: [
      { className: 'bubble bg-[#1e3a5f] w-96 h-96 -top-20 -left-20 animate-blob' },
      { className: 'bubble bg-[#dc2626] w-80 h-80 top-1/2 -right-20 animate-blob', style: 'animation-delay: 2s;' },
      { className: 'bubble bg-[#2563eb] w-72 h-72 bottom-10 left-1/4 animate-blob', style: 'animation-delay: 4s;' }
    ],
    about: [
      { className: 'bubble bg-[#1e3a5f] w-[500px] h-[500px] -top-24 -left-24 animate-blob' },
      { className: 'bubble bg-[#dc2626] w-[400px] h-[400px] top-1/2 -right-20 animate-blob', style: 'animation-delay: 2s;' },
      { className: 'bubble bg-[#2563eb] w-[300px] h-[300px] bottom-0 left-1/4 animate-blob', style: 'animation-delay: 4s;' }
    ]
  },
  services: [
    {
      value: 'web-app-development',
      title: 'Web Application Development',
      description: 'We build high-performance, scalable, and secure web applications tailored to your business needs.',
      icon: 'fas fa-code',
      iconGradient: 'from-[#1e3a5f] to-[#2563eb]',
      titleClass: 'text-[#1e3a5f] dark:text-[#60a5fa]',
      features: [
        'Custom dashboards & portals',
        'SaaS & enterprise-grade systems',
        'API-driven & scalable architecture',
        'SEO & performance optimized'
      ]
    },
    {
      value: 'mobile-app-development',
      title: 'Mobile App Development (iOS & Android)',
      description: 'Cross-platform and native mobile solutions with premium UI and smooth performance.',
      icon: 'fas fa-mobile-alt',
      iconGradient: 'from-[#dc2626] to-[#ea580c]',
      titleClass: 'text-[#dc2626] dark:text-[#f87171]',
      features: [
        'React Native & native solutions',
        'High-performance UI/UX',
        'Secure backend integrations',
        'App Store & Play Store deployment'
      ]
    },
    {
      value: 'ai-machine-learning',
      title: 'AI / Machine Learning Solutions',
      description: 'Intelligent solutions that automate, optimize, and predict business outcomes.',
      icon: 'fas fa-brain',
      iconGradient: 'from-[#7c3aed] to-[#ec4899]',
      titleClass: 'text-[#7c3aed] dark:text-[#a78bfa]',
      features: [
        'AI-driven automation',
        'Predictive analytics',
        'NLP & chatbots',
        'Computer vision systems'
      ]
    },
    {
      value: 'cloud-devops',
      title: 'Cloud & DevOps Engineering',
      description: 'Cloud-native infrastructure with automation, scalability, and security.',
      icon: 'fas fa-cloud',
      iconGradient: 'from-[#2563eb] to-[#06b6d4]',
      titleClass: 'text-[#2563eb] dark:text-[#60a5fa]',
      features: [
        'CI/CD pipelines',
        'Auto-scaling cloud setups',
        'Infrastructure as Code (IaC)',
        'Monitoring & performance tuning'
      ]
    },
    {
      value: 'aws-azure',
      title: 'AWS & Azure Cloud Solutions',
      description: 'Design, deploy, and manage secure and scalable cloud environments.',
      icon: 'fas fa-cloud-upload-alt',
      iconGradient: 'from-[#f59e0b] to-[#2563eb]',
      titleClass: 'text-[#f59e0b] dark:text-[#fbbf24]',
      features: [
        'Cloud architecture design',
        'Cost optimization',
        'Security & compliance',
        'High availability deployments'
      ]
    },
    {
      value: 'ui-ux',
      title: 'UI/UX Design',
      description: 'Modern, user-centered designs that improve engagement and usability.',
      icon: 'fas fa-paint-brush',
      iconGradient: 'from-[#ec4899] to-[#f43f5e]',
      titleClass: 'text-[#ec4899] dark:text-[#f472b6]',
      features: [
        'Wireframing & prototyping',
        'User journey & UX research',
        'Responsive UI design',
        'Design systems & branding'
      ]
    },
    {
      value: 'digital-marketing-seo',
      title: 'Digital Marketing & SEO',
      description: 'Growth-driven marketing strategies to increase visibility and conversions.',
      icon: 'fas fa-chart-line',
      iconGradient: 'from-[#ea580c] to-[#eab308]',
      titleClass: 'text-[#ea580c] dark:text-[#fb923c]',
      features: [
        'Technical & on-page SEO',
        'Performance marketing',
        'Conversion optimization',
        'Analytics & reporting'
      ]
    },
    {
      value: 'cyber-security',
      title: 'Cyber Security Solutions',
      description: 'Protect your systems, data, and infrastructure against modern cyber threats.',
      icon: 'fas fa-shield-alt',
      iconGradient: 'from-[#dc2626] to-[#7f1d1d]',
      titleClass: 'text-[#dc2626] dark:text-[#f87171]',
      features: [
        'Security audits & penetration testing',
        'Vulnerability assessment',
        'Compliance & risk management',
        'Secure system design'
      ]
    },
    {
      value: 'network-infrastructure',
      title: 'Network & Infrastructure Solutions',
      description: 'Reliable and secure networking solutions for enterprise environments.',
      icon: 'fas fa-network-wired',
      iconGradient: 'from-[#0f766e] to-[#0369a1]',
      titleClass: 'text-[#0f766e] dark:text-[#2dd4bf]',
      features: [
        'Network architecture & setup',
        'Cloud networking',
        'Firewall & VPN configurations',
        'Performance monitoring'
      ]
    }
  ],
  cta: {
    about: {
      sectionClasses: 'max-w-4xl mx-auto px-4 py-20',
      cardClasses: 'rounded-[3rem] p-16 text-center text-white shadow-2xl relative overflow-hidden animate-gradient-shift',
      heading: 'Ready to Transform Your Business?',
      text: "Let's build something extraordinary together.",
      overlayClasses: 'absolute inset-0 bg-gradient-to-br from-[#1e3a5f] to-[#dc2626] opacity-50',
      buttons: [
        {
          href: 'contact.html',
          label: 'Start With Us',
          variant: 'primary'
        }
      ]
    },
    services: {
      sectionClasses: 'max-w-4xl mx-auto px-4 pt-12 pb-24',
      cardClasses: 'rounded-[3rem] p-16 text-center text-white shadow-2xl relative overflow-hidden',
      heading: 'Ready to Transform Your Business?',
      text: "Let's discuss how our services can help you achieve your digital transformation goals.",
      overlayClasses: 'absolute inset-0 bg-black/20',
      buttons: [
        {
          href: 'contact.html',
          label: 'Start Your Project',
          variant: 'primary'
        },
        {
          href: 'portfolio.html',
          label: 'View Case Studies',
          variant: 'secondary'
        }
      ]
    },
    portfolio: {
      sectionClasses: 'max-w-4xl mx-auto px-4 pb-24',
      cardClasses: 'rounded-[3rem] p-16 text-center text-white shadow-2xl relative overflow-hidden',
      heading: 'Have a Project in Mind?',
      text: "Let's collaborate to bring your innovative ideas to life with cutting-edge technology.",
      overlayClasses: 'absolute inset-0 bg-black/20',
      buttons: [
        {
          href: 'contact.html',
          label: 'Start Your Project',
          variant: 'primary'
        },
        {
          href: 'contact.html',
          label: 'Book a Consultation',
          variant: 'secondary'
        }
      ]
    },
    contact: {
      sectionClasses: 'max-w-4xl mx-auto px-4 pb-24',
      cardClasses: 'rounded-[3rem] p-16 text-center text-white shadow-2xl relative overflow-hidden',
      heading: 'Not Sure Where to Start?',
      text: 'Schedule a free consultation with our experts to discuss your project requirements.',
      overlayClasses: 'absolute inset-0 bg-black/20',
      buttons: [
        {
          href: '#',
          label: 'Book a Call',
          icon: 'fas fa-calendar-alt',
          variant: 'primary'
        },
        {
          href: 'portfolio.html',
          label: 'View Our Work',
          icon: 'fas fa-eye',
          variant: 'secondary'
        }
      ]
    }
  }
});
