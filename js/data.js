// NOTE: portfolio array and cta.portfolio key added – do not remove
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
    },
    {
      value: 'cyfer-connect',
      title: 'Cyfer Connect — Call Center Solutions',
      description: 'Scalable, trained, and technology-backed inbound & outbound call center teams that represent your brand with precision.',
      icon: 'fas fa-headset',
      iconGradient: 'from-[#1e3a5f] to-[#2563eb]',
      titleClass: 'text-[#1e3a5f] dark:text-[#60a5fa]',
      pageLink: 'cyfer-connect.html',
      features: [
        'Inbound customer support & helpdesk',
        'Outbound telesales & lead generation',
        'CRM integration & live reporting',
        '24/7 coverage with bilingual agents'
      ]
    },
    {
      value: 'cyfer-health-rcm',
      title: 'Cyfer Health RCM — Medical Billing',
      description: 'Accurate, compliant, and fully managed medical billing services that help healthcare providers get paid faster.',
      icon: 'fas fa-heartbeat',
      iconGradient: 'from-[#dc2626] to-[#7f1d1d]',
      titleClass: 'text-[#dc2626] dark:text-[#f87171]',
      pageLink: 'cyfer-health-rcm.html',
      features: [
        'Medical coding (ICD-10, CPT, HCPCS)',
        'Claims submission & payment posting',
        'AR follow-up & denial management',
        'HIPAA-compliant workflows'
      ]
    }
  ],
  team: {
    title: 'Our Leadership & Expert Team',
    subtitle:
      'The people driving innovation, engineering excellence, and client success at Cyfer Solutions.',
    // Add/update team members here. Set photo path when you want image cards.
    groups: [
      {
        title: 'Leadership Team',
        members: [
          {
            name: 'Hassan Abdul Qadir',
            role: 'Chief Executive Officer (CEO) & Co-Founder',
            bio: 'Leads the strategic direction of Cyfer Solutions, focusing on technology innovation, client partnerships, and building scalable software solutions for global businesses.',
            photo: ''
          },
          {
            name: 'Nukhba Tufail Malik',
            role: 'Head of Delivery & Co-Founder',
            bio: 'Oversees project delivery, client engagement, and operational execution to ensure high-quality solutions and timely product launches.',
            photo: ''
          }
        ]
      },
      {
        title: 'Engineering Team',
        members: [
          {
            name: 'Hammad Tahir',
            role: 'Lead Software Engineer',
            bio: 'Leads the engineering team and architecture decisions, ensuring robust, scalable, and high-performance software solutions.',
            photo: ''
          },
          {
            name: 'Muhammad Anas',
            role: 'Backend Engineering Intern',
            bio: 'Supports backend development and API implementation while gaining hands-on experience with modern server-side technologies.',
            photo: ''
          },
          {
            name: 'Zainab Khalid',
            role: 'Quality Assurance Engineer (Intern)',
            bio: 'Assists in testing, quality assurance processes, and ensuring reliable and bug-free product releases.',
            photo: ''
          }
        ]
      },
      {
        title: 'Specialists & Advisors',
        members: [
          {
            name: 'Abeer Jalil',
            role: 'Senior UI/UX Consultant',
            bio: 'Provides expert guidance in user experience design, helping create intuitive and engaging digital products.',
            photo: ''
          },
          {
            name: 'Shafaq Jaleel',
            role: 'Legal Advisor',
            bio: "Advises on legal compliance, contracts, and regulatory matters to support Cyfer Solutions' operations and client partnerships.",
            photo: ''
          }
        ]
      }
    ],
    joinCard: {
      href: 'contact.html#contactForm',
      label: 'Join Us!',
      subLabel: 'Open Roles',
      ariaLabel: 'Join Cyfer Solutions team'
    }
  },
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
          href: 'services.html',
          label: 'View Services',
          icon: 'fas fa-briefcase',
          variant: 'secondary'
        }
      ]
    },
    portfolio: {
      sectionClasses: 'max-w-4xl mx-auto px-4 pt-12 pb-24',
      cardClasses: 'rounded-[3rem] p-16 text-center text-white shadow-2xl relative overflow-hidden',
      heading: 'Ready to Build Something Amazing?',
      text: "Let's discuss your next project and turn your vision into a market-ready product.",
      overlayClasses: 'absolute inset-0 bg-black/20',
      buttons: [
        {
          href: 'contact.html',
          label: 'Start Your Project',
          icon: 'fas fa-rocket',
          variant: 'primary'
        },
        {
          href: 'services.html',
          label: 'View Services',
          icon: 'fas fa-briefcase',
          variant: 'secondary'
        }
      ]
    }
  },
  portfolio: [
    {
      id: 'channel-7-pk',
      title: 'Channel 7 – Pakistan Advertising Agency',
      tagline: 'Top Pakistan advertising agency offering branding, digital marketing, and creative campaign solutions.',
      category: 'Digital Agency',
      categoryIcon: 'fas fa-bullhorn',
      categoryColor: 'text-[#dc2626] dark:text-[#f87171]',
      categoryBg: 'bg-[#dc2626]/10 dark:bg-[#dc2626]/30',
      image: 'assets/portfolio-channel7pk.png',
      accentColor: '#e63232',
      accentLight: '#ff4d4d',
      client: 'Channel 7 Pakistan',
      industry: 'Advertising & Marketing',
      duration: 'Ongoing',
      websiteUrl: 'https://channel7.com.pk',
      servicesProvided: ['Brand Strategy', 'Digital Marketing', 'Creative Design'],
      overview: 'Channel 7 is a full-service advertising agency in Pakistan with a legacy of 35+ years. As a pioneer in the advertising space, they required a modern, high-impact digital presence to showcase their vast portfolio of over 1000+ clients across 5 cities.',
      problem: 'Their previous website did not reflect the premium, creative identity of the agency. It struggled with performance, lacked a cohesive dark-mode aesthetic, and had an outdated structure that failed to highlight their impressive statistics and industry-leading work.',
      solution: 'We developed a sleek, dark-themed platform designed to make their creative work take center stage. Fast-loading, fully responsive, and structured to highlight their key metrics—from 35+ years of excellence to their network of 100+ "restless creatives".',
      approach: [
        { icon: 'fas fa-palette', title: 'Brand Identity Sync', desc: 'Translated their established offline presence into a modern, bold digital interface focused on dark mode aesthetics and striking red accents.' },
        { icon: 'fas fa-chart-line', title: 'Impact Metrics', desc: 'Designed customized stat blocks to instantly communicate their scale: 5 cities, 35+ years, 100+ creatives, and 1000+ happy clients.' },
        { icon: 'fas fa-laptop-code', title: 'High-Performance Grid', desc: 'Engineered a seamless masonry layout with optimized lazy-loading to ensure thousands of high-res client assets load instantly.' },
        { icon: 'fas fa-rocket', title: 'Launch & Growth', desc: 'The new digital presence has significantly boosted inbound corporate leads and better represents Channel 7 as an industry titan.' }
      ],
      technologies: ['HTML5', 'Tailwind CSS', 'JavaScript', 'GSAP Animations', 'Vite'],
      results: [
        { metric: '35+', label: 'Years of Excellence' },
        { metric: '5', label: 'Cities across Pakistan' },
        { metric: '100+', label: 'Restless Creatives' },
        { metric: '1000+', label: 'Happy Clients' }
      ]
    },
    {
      id: 'unicef-admin',
      title: 'UNICEF Admin Portal',
      tagline: 'Secure UNICEF admin portal for data management, reporting, dashboards, and program monitoring tools.',
      category: 'Enterprise Portal',
      categoryIcon: 'fas fa-globe',
      categoryColor: 'text-[#0ea5e9] dark:text-[#38bdf8]',
      categoryBg: 'bg-[#0ea5e9]/10 dark:bg-[#0ea5e9]/30',
      image: 'assets/unicef.png',
      accentColor: '#0ea5e9',
      accentLight: '#38bdf8',
      client: 'UNICEF',
      industry: 'Non-Profit / NGO',
      duration: '6 Months',
      websiteUrl: 'https://adminunicef.cybervisiondemo.cloud',
      servicesProvided: ['Data Management', 'Dashboard Development', 'Secure Architecture'],
      overview: 'We partnered with UNICEF to develop a highly secure, centralized admin portal. This system was designed to handle complex data management, generate real-time reporting dashboards, and provide program monitoring tools across multiple regions.',
      problem: 'The organization was relying on fragmented spreadsheets and legacy data tools, leading to delayed reporting, data inconsistencies, and slow decision-making for critical ground-level programs.',
      solution: 'We engineered a centralized, role-based admin dashboard with real-time data synchronization. The system features custom reporting modules, data visualization charts, and end-to-end encryption to ensure sensitive field data remains protected.',
      approach: [
        { icon: 'fas fa-search', title: 'Discovery & Security', desc: 'Conducted rigorous security and compliance audits to map data workflows and define strict role-based access control (RBAC) layers.' },
        { icon: 'fas fa-database', title: 'Data Architecture', desc: 'Built a scalable relational database structure capable of ingesting high volumes of field data from distributed teams.' },
        { icon: 'fas fa-chart-pie', title: 'Dashboard UI/UX', desc: 'Designed intuitive, widget-based dashboards that allow program managers to visualize geographic and demographic metrics instantly.' },
        { icon: 'fas fa-shield-alt', title: 'Deployment & Training', desc: 'Deployed the system on secure infrastructure and provided comprehensive training for regional administrators.' }
      ],
      technologies: ['React.js', 'Node.js', 'PostgreSQL', 'Chart.js', 'AWS Secure Cloud'],
      results: [
        { metric: '100%', label: 'Data Centralization' },
        { metric: 'TBD', label: 'Reports Generated' },
        { metric: '0', label: 'Security Breaches' },
        { metric: '3x', label: 'Faster Reporting' }
      ]
    },
    {
      id: 'keystone-roofing-va',
      title: 'Keystone Roofing VA',
      tagline: 'Trusted Virginia roofing contractors offering roof repair, replacement, and maintenance services.',
      category: 'Web Platform',
      categoryIcon: 'fas fa-home',
      categoryColor: 'text-[#f59e0b] dark:text-[#fbbf24]',
      categoryBg: 'bg-[#f59e0b]/10 dark:bg-[#f59e0b]/30',
      image: 'assets/keystone roofing.jfif',
      accentColor: '#f59e0b',
      accentLight: '#fbbf24',
      client: 'Keystone Roofing',
      industry: 'Construction & Roofing',
      duration: '3 Months',
      websiteUrl: 'https://keystoneroofingva.com',
      servicesProvided: ['Web Development', 'Local SEO', 'Lead Generation'],
      overview: 'Keystone Roofing VA is a premier roofing contractor in Virginia. They approached us to build a digital platform that drives local leads, showcases their roofing portfolio, and allows customers to easily request estimates for repairs and replacements.',
      problem: 'Their offline reputation was excellent, but their digital footprint was non-existent. Without an optimized website, they were losing local search traffic to competitors and relying heavily on expensive, traditional outbound marketing.',
      solution: 'We delivered a high-conversion, SEO-optimized website tailored for local Virginia traffic. The platform features an integrated quote-request system, service-specific landing pages, and a dynamic gallery of past roofing projects to build trust.',
      approach: [
        { icon: 'fas fa-map-marker-alt', title: 'Local Strategy', desc: 'Analyzed local search trends in Virginia to structure the site architecture around high-value roofing keywords.' },
        { icon: 'fas fa-tools', title: 'Service Layouts', desc: 'Created dedicated landing pages for Roof Repair, Replacement, and Maintenance to maximize organic SEO ranking.' },
        { icon: 'fas fa-mobile-alt', title: 'Mobile Optimization', desc: 'Ensured the entire site and quote-request forms were fully responsive, as 70%+ of emergency roofing searches happen on mobile.' },
        { icon: 'fas fa-envelope-open-text', title: 'Lead Funnel', desc: 'Integrated an automated CRM connection so every estimate request instantly alerts the sales team.' }
      ],
      technologies: ['WordPress / Custom CMS', 'Tailwind CSS', 'PHP', 'Google Analytics', 'Local SEO Tools'],
      results: [
        { metric: 'TBD', label: 'Organic Traffic Increase' },
        { metric: '10+', label: 'Local Cities Ranked' },
        { metric: '2x', label: 'Lead Conversion Rate' },
        { metric: '100%', label: 'Mobile Score' }
      ]
    },
    {
      id: 'complete-your-home-ltd',
      title: 'Complete Your Home Ltd',
      tagline: 'UK home improvement experts offering renovations, roofing, extensions, and property upgrades.',
      category: 'Web Platform',
      categoryIcon: 'fas fa-tools',
      categoryColor: 'text-[#10b981] dark:text-[#34d399]',
      categoryBg: 'bg-[#10b981]/10 dark:bg-[#10b981]/30',
      image: 'assets/completeyourhome.png',
      accentColor: '#10b981',
      accentLight: '#34d399',
      client: 'Complete Your Home Ltd',
      industry: 'Home Improvement',
      duration: '4 Months',
      websiteUrl: 'https://completeyourhomeltd.co.uk/',
      servicesProvided: ['Web Development', 'Digital Branding', 'Conversion Optimization'],
      overview: 'Based in the UK, Complete Your Home Ltd specializes in high-end renovations, extensions, and property upgrades. They needed a premium digital showcase that reflects the quality of their craftsmanship and converts browsing homeowners into booked consultations.',
      problem: 'Their previous site was visually dated and failed to effectively categorize their diverse range of services (roofing, extensions, renovations). The user journey was confusing, resulting in a high bounce rate and low inquiry volume.',
      solution: 'We redesigned the platform from the ground up with a clean, modern aesthetic. The new site features logical service categorization, high-resolution before/after galleries, and strategically placed calls-to-action to streamlined the consultation booking process.',
      approach: [
        { icon: 'fas fa-paint-roller', title: 'Visual Redesign', desc: 'Developed a modern, trustworthy brand identity with clean typography and high-end project photography.' },
        { icon: 'fas fa-sitemap', title: 'UX Restructuring', desc: 'Reorganized the architecture so users can easily toggle between Roofing, Extensions, and General Renovations.' },
        { icon: 'fas fa-images', title: 'Dynamic Galleries', desc: 'Built a dynamic portfolio system that allows the client to easily upload new project case studies via a CMS.' },
        { icon: 'fas fa-check-circle', title: 'Trust Building', desc: 'Integrated live customer reviews, certifications, and guarantees directly into the conversion funnel.' }
      ],
      technologies: ['Custom CMS', 'React.js', 'SCSS', 'Node.js'],
      results: [
        { metric: 'High', label: 'User Engagement' },
        { metric: 'TBD', label: 'Bounce Rate Reduction' },
        { metric: 'Easy', label: 'Content Management' },
        { metric: '100%', label: 'Client Satisfaction' }
      ]
    },
    {
      id: 'ogdcl-portal',
      title: 'OGDCL Portal',
      tagline: 'Secure OGDCL portal for data management, reporting, dashboards, and oil & gas operations insights.',
      category: 'Enterprise Portal',
      categoryIcon: 'fas fa-industry',
      categoryColor: 'text-[#6366f1] dark:text-[#818cf8]',
      categoryBg: 'bg-[#6366f1]/10 dark:bg-[#6366f1]/30',
      image: 'assets/ogdc.png',
      accentColor: '#6366f1',
      accentLight: '#818cf8',
      client: 'OGDCL Pakistan',
      industry: 'Oil & Gas',
      duration: '8 Months',
      websiteUrl: 'https://ogdcl.cybervisiondemo.cloud/',
      servicesProvided: ['Enterprise Portal', 'Data Engineering', 'Operations Dashboard'],
      overview: 'We developed a robust enterprise data management system for OGDCL, one of the largest oil and gas exploration companies in Pakistan. The platform provides real-time insights into drilling operations, production metrics, and resource allocation across national facilities.',
      problem: 'Managing operational data across dozens of remote drilling sites was highly manual. The lack of a unified dashboard meant executive leadership struggled to get real-time visibility into production metrics and resource bottlenecks.',
      solution: 'We architected a highly secure, centralized enterprise portal that ingests operational data from multiple sites. It processes this data to feed live reporting dashboards, giving stakeholders complete visibility and actionable operations insights.',
      approach: [
        { icon: 'fas fa-hard-hat', title: 'Requirements Engineering', desc: 'Collaborated closely with site managers and executives to map out critical KPIs for drilling, production, and supply chain.' },
        { icon: 'fas fa-server', title: 'Secure Infrastructure', desc: 'Deployed on isolated, highly secure servers complying with strict national energy sector data regulations.' },
        { icon: 'fas fa-chart-line', title: 'Analytics Engine', desc: 'Engineered a real-time data processing pipeline that calculates production efficiency and predicts maintenance needs.' },
        { icon: 'fas fa-lock', title: 'Access Control', desc: 'Implemented granular, hierarchical access controls ensuring users only see data cleared for their specific clearance level.' }
      ],
      technologies: ['Angular', 'Spring Boot', 'Oracle DB', 'PowerBI Integration', 'Docker'],
      results: [
        { metric: 'Real-time', label: 'Operations Visibility' },
        { metric: 'Centralized', label: 'Data Management' },
        { metric: 'High', label: 'System Uptime' },
        { metric: '100%', label: 'Data Compliance' }
      ]
    },
    {
      id: 'channel-7-uae',
      title: 'Channel 7 UAE',
      tagline: 'UAE advertising agency offering branding, digital marketing, creative campaigns, and media solutions.',
      category: 'Digital Agency',
      categoryIcon: 'fas fa-bullseye',
      categoryColor: 'text-[#ec4899] dark:text-[#f472b6]',
      categoryBg: 'bg-[#ec4899]/10 dark:bg-[#ec4899]/30',
      image: 'assets/channel7ae.png',
      accentColor: '#ec4899',
      accentLight: '#f472b6',
      client: 'Channel 7 UAE',
      industry: 'Advertising & Marketing',
      duration: 'Ongoing',
      websiteUrl: 'https://channel7.ae/',
      servicesProvided: ['Web Platform', 'Brand Localization', 'Performance Infrastructure'],
      overview: 'As part of their global expansion into the Middle East, Channel 7 UAE required a localized yet internationally appealing digital presence. The platform mirrors the premium aesthetic of their flagship branch while catering specifically to the UAE corporate market.',
      problem: 'Expanding into the highly competitive UAE advertising market meant their digital presence needed to instantly convey authority, luxury, and regional expertise without cannibalizing their existing SEO or brand identity.',
      solution: 'We developed a culturally tuned, high-performance platform for the UAE branch. It utilizes the same foundational architecture as the Pakistan site but features localized content strategies, region-specific case studies, and rapid loading speeds optimized for the Gulf market.',
      approach: [
        { icon: 'fas fa-globe', title: 'Regional Localization', desc: 'Adapted the core brand identity to align with the visual and cultural expectations of enterprise clients in the UAE.' },
        { icon: 'fas fa-tachometer-alt', title: 'Speed Optimization', desc: 'Leveraged edge caching and localized CDNs to guarantee sub-second load times across the Middle East.' },
        { icon: 'fas fa-bullseye', title: 'Targeted Narratives', desc: 'Restructured the portfolio taxonomy to highlight international and high-end corporate campaigns suitable for the region.' },
        { icon: 'fas fa-chart-network', title: 'SEO Architecture', desc: 'Built a localized SEO architecture designed to capture high-intent searches for agencies in Dubai and Abu Dhabi.' }
      ],
      technologies: ['Next.js', 'Tailwind CSS', 'Vercel Edge Network', 'Headless CMS', 'Framer Motion'],
      results: [
        { metric: 'Localized', label: 'UAE Presence' },
        { metric: 'Sub-second', label: 'Load Times' },
        { metric: 'Premium', label: 'Brand Alignment' },
        { metric: 'Optimized', label: 'Regional SEO' }
      ]
    }
  ]
});
