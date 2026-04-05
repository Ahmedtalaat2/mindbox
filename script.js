// ============================================================
// MindBox Portal - MAIN.JS
// جميع التفاعلات والحركات للموقع بالكامل
// ============================================================

// ============================================================
// 1. TRANSLATIONS - جميع ترجمات الموقع (إنجليزي - عربي)
// ============================================================
const translations = {
  en: {
    // Meta
    pageTitle: "MindBox Portal — UAE's Digital Growth Agency",
    metaDescription: "MindBox Portal — Web Development, Paid Ads, Social Media Design & AI Automation for businesses in UAE.",
    metaKeywords: "MindBox Portal, web development UAE, paid ads UAE, social media design UAE, AI automation UAE",
    ogTitle: "MindBox Portal — UAE's Digital Growth Agency",
    ogDescription: "Websites, paid ads, social media content & AI automation for businesses in UAE.",
    
    // Header
    langBtn: "English",
    navHome: "Home", navServices: "Services", navWork: "Work", navProcess: "Process", navContact: "Contact",
    ctaBtn: "Get Free Strategy",
    
    // Mobile Nav
    mobileHome: "Home", mobileServices: "Services", mobileWork: "Work", mobileProcess: "Process", mobileContact: "Contact", mobileCta: "Get Free Strategy",
    
    // Hero
    heroTag: "UAE's Digital Growth Agency 🇦🇪",
    heroH1: "We Build Digital Systems<br />That <em>Grow Your Business.</em>",
    heroSub: "Websites, paid ads, social media content, and AI automation — everything your business needs to dominate online in UAE.",
    heroCta: "Get Free Strategy", heroServicesBtn: "Our Services",
    heroTrust: "Trusted by startups & businesses across UAE",
    
    // Stats
    statProjects: "Projects Delivered", statClients: "Happy Clients", statSatisfaction: "Client Satisfaction", statLocation: "UAE Based",
    
    // Services Section (Home Page)
    servicesTag: "What We Do", servicesTitle: "4 Services. <em>One Agency.</em>",
    servicesSub: "We focus on four core services that work together to grow your business — no fluff, no wasted budget, just measurable results.",
    serviceTitle1: "Web Development", serviceDesc1: "Fast, professional websites and online stores that convert visitors into customers.",
    serviceItem1a: "Custom Code (HTML/CSS/JS)", serviceItem1b: "WordPress Websites", serviceItem1c: "Shopify Stores", serviceItem1d: "Payment Integration", serviceCta1: "Start Your Website",
    serviceTitle2: "Paid Advertising", serviceDesc2: "High-performance ad campaigns that bring you real leads and sales — not just clicks.",
    serviceItem2a: "Meta Ads (FB & Instagram)", serviceItem2b: "Google Ads", serviceItem2c: "TikTok Ads", serviceItem2d: "ROI Tracking & Optimization", serviceCta2: "Launch Your Ads",
    serviceTitle3: "Social Media Design", serviceDesc3: "Scroll-stopping content that builds your brand and drives real engagement.",
    serviceItem3a: "Instagram & TikTok Posts", serviceItem3b: "Stories & Reels Templates", serviceItem3c: "Brand Visual Identity", serviceItem3d: "Monthly Content Calendar", serviceCta3: "Design My Content",
    serviceTitle4: "AI Automation", serviceDesc4: "Automate your business operations with AI — save time and scale faster.",
    serviceItem4a: "WhatsApp & Chatbot Systems", serviceItem4b: "Business Workflow Automation", serviceItem4c: "AI Customer Support", serviceItem4d: "Systems & API Integration", serviceCta4: "Automate My Business",
    
    // Case Studies
    workTag: "Our Work", workTitle: "Results That Speak<br /><em>Louder Than Promises.</em>",
    caseTag1: "Web Dev", caseTitle1: "Shopify Store — Fashion Brand", caseProblemLabel: "Problem:", caseSolutionLabel: "Solution:",
    caseProblemText1: "No online store, losing sales to competitors.", caseSolutionText1: "Custom Shopify store with payment integration.", caseResult1: "+65% Sales", caseResultText1: "in the first 45 days after launch",
    caseTag2: "Paid Ads", caseTitle2: "Meta Ads — Medical Clinic", caseProblemText2: "Zero online leads, empty appointment slots.", caseSolutionText2: "Meta Ads + Landing Page + WhatsApp automation.", caseResult2: "150+ Leads", caseResultText2: "generated in the first 30 days",
    caseTag3: "AI Automation", caseTitle3: "WhatsApp Bot — Restaurant Chain", caseProblemText3: "Team overwhelmed with customer inquiries.", caseSolutionText3: "AI WhatsApp bot handling orders & bookings.", caseResult3: "80% Less", caseResultText3: "manual customer support time saved",
    caseLink: "View Case Study", caseSeeAll: "See All Case Studies",
    
    // Process
    processTag: "How We Work", processTitle: "From Day One to Results<br />in <em>4 Simple Steps.</em>", processSub: "A clear, proven process — no surprises, no wasted time, just results.",
    processTitle1: "Discovery & Audit", processText1: "We deep dive into your business, competitors, and goals to build the right plan.",
    processTitle2: "Strategy & Planning", processText2: "We create a custom roadmap with clear deliverables, timelines, and expected results.",
    processTitle3: "Execution & Launch", processText3: "We build, design, and launch everything — keeping you updated at every step.",
    processTitle4: "Optimize & Scale", processText4: "We track results monthly, optimize performance, and scale what's working.",
    
    // CTA
    ctaBadge: "🎯 Free Strategy Session", ctaTitle: "Ready to Grow Your Business<br />in <em>UAE?</em>",
    ctaSub: "Book a free 30-minute strategy session. We'll review your business, identify the biggest opportunities, and tell you exactly what to do next.",
    ctaBtnText: "Book Your Free Strategy Call", ctaTrust1: "100% Free", ctaTrust2: "No credit card", ctaTrust3: "Response in 24 hours",
    
    // Contact
    contactTag: "Get In Touch", contactTitle: "Let's Build Something<br /><em>Great Together.</em>",
    contactSub: "Tell us about your business and what you need. We'll get back to you within 24 hours with a clear plan.",
    contactWhatsapp: "WhatsApp", contactEmail: "Email", contactWebsite: "Website", contactLocation: "Location",
    contactLocationText: "Dubai, United Arab Emirates 🇦🇪", mapText: "Dubai, UAE",
    formTitle: "Send Us a Message", labelName: "Your Name", labelBusiness: "Business Name", labelContact: "Email or Phone Number",
    labelService: "Which Service Do You Need?", selectDefault: "Select a service", selectWeb: "Web Development",
    selectAds: "Paid Advertising", selectSocial: "Social Media Design", selectAi: "AI Automation", selectFull: "Full Package (All Services)",
    labelMessage: "Tell Us About Your Project", submitBtn: "Send Message",
    
    // Footer
    footerTagline: "UAE's digital growth agency — websites, ads, social media, and AI automation.",
    footerServices: "Services", footerCompany: "Company", footerHello: "Say Hello",
    footerWeb: "Web Development", footerAds: "Paid Advertising", footerSocial: "Social Media Design", footerAi: "AI Automation",
    footerAbout: "About Us", footerWork: "Our Work", footerProcess: "Process", footerContact: "Contact",
    footerCopy: "© 2026 MindBox Portal. All rights reserved.", footerPrivacy: "Privacy Policy", footerTerms: "Terms of Service",
    footerCredit: "<span>2026MindBox</span> — Website created by Ahmed El Gamal",
    
    // ===== SERVICES PAGE TRANSLATIONS =====
    servicesPageTitle: "MindBox Portal — Our Services | Digital Solutions in UAE",
    servicesMetaDescription: "Explore MindBox Portal's services in UAE: Web Development, Paid Ads, Social Media Design & AI Automation.",
    servicesMetaKeywords: "web development UAE, paid ads UAE, social media design UAE, AI automation UAE",
    servicesOgTitle: "MindBox Portal — Our Digital Services in UAE",
    servicesOgDescription: "Professional web development, paid advertising, social media design & AI automation services in UAE.",
    servicesHeroTag: "What We Do", servicesHeroTitle: "Our <em>Services</em>",
    servicesHeroSub: "We offer four core digital services designed to grow your business in UAE — from web development and paid ads to social media design and AI automation.",
    quickLinkWeb: "🌐 Web Development", quickLinkAds: "📊 Paid Ads", quickLinkSocial: "🎨 Social Media", quickLinkAi: "🤖 AI Automation",
    serviceWebTitle: "Web Development", serviceWebDesc: "Fast, professional websites and online stores that convert visitors into customers. Custom-built solutions tailored to your business needs in UAE.",
    featuresTitle: "Features", benefitsTitle: "Benefits for Your Business",
    featureWeb1: "Responsive Design (Mobile Friendly)", featureWeb2: "Fast Loading Speed (90+ PageSpeed)", featureWeb3: "SEO Optimized Structure",
    featureWeb4: "Easy Content Management System", featureWeb5: "Secure & Safe Coding", featureWeb6: "Technical Support After Launch",
    benefitWeb1: "Increase Sales & Revenue", benefitWeb2: "Rank Higher on Google", benefitWeb3: "Build Brand Credibility", benefitWeb4: "Excellent User Experience",
    portfolioWebTitle: "Recent Web Projects", portfolioWebItem1Title: "Shopify Store — Fashion Brand", portfolioWebItem1Desc: "Custom Shopify store with payment integration", portfolioWebItem1Result: "+65% Sales",
    portfolioWebItem2Title: "Website — Medical Clinic", portfolioWebItem2Desc: "Professional site with online appointment booking", portfolioWebItem2Result: "+200% Bookings",
    portfolioWebItem3Title: "Platform — Consulting Firm", portfolioWebItem3Desc: "Complete platform with dashboard & blog", portfolioWebItem3Result: "+150% Traffic",
    pricingWebLabel: "Starting From", pricingWebValue: "3,000 AED", serviceWebCta: "Request Service",
    faqWebTitle: "Frequently Asked Questions", faqWebQ1: "How long does website development take?", faqWebA1: "Typically 2-6 weeks depending on project complexity.",
    faqWebQ2: "Do you support WordPress?", faqWebA2: "Yes, WordPress is our primary CMS for standard websites.",
    faqWebQ3: "Do you offer maintenance after launch?", faqWebA3: "Yes, we offer monthly and yearly maintenance packages.",
    
    serviceAdsTitle: "Paid Advertising", serviceAdsDesc: "High-performance ad campaigns that bring you real leads and sales — not just clicks. We target the right audience across all major platforms.",
    featureAds1: "Meta Ads (Facebook & Instagram)", featureAds2: "Google Ads (Search & Display)", featureAds3: "TikTok Ads",
    featureAds4: "ROI Tracking & Analysis", featureAds5: "Continuous Campaign Optimization", featureAds6: "Weekly Performance Reports",
    benefitAds1: "Reach Targeted Audience", benefitAds2: "Increase Sales & Leads", benefitAds3: "Improve Brand Awareness", benefitAds4: "High ROI",
    portfolioAdsTitle: "Recent Advertising Projects", portfolioAdsItem1Title: "Facebook Ads — Medical Clinic", portfolioAdsItem1Desc: "Targeted local patients with strategic campaigns", portfolioAdsItem1Result: "150+ Leads",
    portfolioAdsItem2Title: "Google Shopping — E-commerce Store", portfolioAdsItem2Desc: "Optimized product listings for search visibility", portfolioAdsItem2Result: "+120% Sales",
    portfolioAdsItem3Title: "TikTok Ads — Restaurant Chain", portfolioAdsItem3Desc: "Creative video campaigns to increase awareness", portfolioAdsItem3Result: "+300% Engagement",
    pricingAdsLabel: "Starting From", pricingAdsValue: "2,500 AED",
    faqAdsQ1: "What budget do I need for ads?", faqAdsA1: "We recommend starting from 3,000 AED per month for testing and optimization.",
    faqAdsQ2: "When will I see results?", faqAdsA2: "Initial results appear within 2 weeks, with optimal results after 2 months.",
    faqAdsQ3: "Which platforms do you support?", faqAdsA3: "Meta, Google, TikTok, LinkedIn, and Twitter based on your needs.",
    
    serviceSocialTitle: "Social Media Design", serviceSocialDesc: "Scroll-stopping content that builds your brand and drives real engagement. Consistent visual identity across all social platforms.",
    featureSocial1: "Instagram & TikTok Posts", featureSocial2: "Stories & Reels Templates", featureSocial3: "Complete Brand Visual Identity",
    featureSocial4: "Monthly Content Calendar", featureSocial5: "Social Media Ad Designs", featureSocial6: "Content Performance Analysis",
    benefitSocial1: "Increase Engagement & Followers", benefitSocial2: "Unique & Consistent Visual Identity", benefitSocial3: "Regular Content Schedule", benefitSocial4: "Improve Brand Awareness",
    portfolioSocialTitle: "Recent Social Media Projects", portfolioSocialItem1Title: "Awareness Campaign — Non-profit", portfolioSocialItem1Desc: "Engaging visual content for awareness campaigns", portfolioSocialItem1Result: "+400% Engagement",
    portfolioSocialItem2Title: "Brand Identity — Startup", portfolioSocialItem2Desc: "Complete visual identity & monthly content", portfolioSocialItem2Result: "+200% Followers",
    portfolioSocialItem3Title: "Spa & Beauty Center", portfolioSocialItem3Desc: "Daily content showcasing services & offers", portfolioSocialItem3Result: "Fully Booked",
    pricingSocialLabel: "Starting From", pricingSocialValue: "2,000 AED",
    faqSocialQ1: "How many posts do you recommend monthly?", faqSocialA1: "We recommend 15-20 posts per month across different platforms.",
    faqSocialQ2: "Do you offer account management?", faqSocialA2: "Yes, we can fully manage your accounts including posting and engagement.",
    faqSocialQ3: "How long does brand identity take?", faqSocialA3: "Typically 1-2 weeks depending on project complexity.",
    
    serviceAiTitle: "AI Automation", serviceAiDesc: "Automate your business operations with AI — save time, reduce costs, and scale faster. Smart solutions that work 24/7 for your business.",
    featureAi1: "WhatsApp & Chatbot Systems", featureAi2: "Business Workflow Automation", featureAi3: "24/7 AI Customer Support",
    featureAi4: "API & Systems Integration", featureAi5: "Smart Analytics & Reports", featureAi6: "Fully Customizable Solutions",
    benefitAi1: "Save Time & Effort", benefitAi2: "Reduce Operational Costs", benefitAi3: "Improve Customer Service", benefitAi4: "Increase Productivity",
    portfolioAiTitle: "Recent AI Automation Projects", portfolioAiItem1Title: "WhatsApp Bot — Restaurant Chain", portfolioAiItem1Desc: "Automated orders & reservations via WhatsApp", portfolioAiItem1Result: "80% Less Support Time",
    portfolioAiItem2Title: "Workflow Automation — Real Estate", portfolioAiItem2Desc: "Automated lead follow-up and offer distribution", portfolioAiItem2Result: "+50% Productivity",
    portfolioAiItem3Title: "Chatbot — Educational Platform", portfolioAiItem3Desc: "AI bot answering student questions & enrollment", portfolioAiItem3Result: "24/7 Instant Support",
    pricingAiLabel: "Starting From", pricingAiValue: "3,500 AED",
    faqAiQ1: "How long does bot development take?", faqAiA1: "2-4 weeks depending on complexity and requirements.",
    faqAiQ2: "Does the bot need continuous training?", faqAiA2: "Initial training provided, plus ongoing optimization available.",
    faqAiQ3: "Can you integrate with my existing systems?", faqAiA3: "Yes, we can integrate with most CRM systems and APIs.",
    
    generalFaqTitle: "Frequently Asked Questions", generalFaqSub: "Answers to common questions from our clients in UAE",
    generalFaqQ1: "How much do your services cost?", generalFaqA1: "Pricing varies based on service type and project scope. Our packages start from 2,000 AED for social media design and go up to 5,000+ AED for complete solutions. Contact us for a detailed quote based on your specific needs.",
    generalFaqQ2: "How long does a typical project take?", generalFaqA2: "Timeline depends on the project: simple websites (2-3 weeks), e-commerce stores (4-6 weeks), ad campaigns (2 weeks setup), and AI bots (2-4 weeks).",
    generalFaqQ3: "Do you offer a warranty on your services?", generalFaqA3: "Yes, we offer a 30-day warranty after project delivery for bug fixes and technical issues. We also provide ongoing maintenance packages for continuous support.",
    generalFaqQ4: "How can I contact you after the project?", generalFaqA4: "You can reach us via WhatsApp, email, or the contact form on our website. We provide technical support during business hours (9 AM - 6 PM) on weekdays.",
    generalFaqQ5: "Do you offer monthly ongoing services?", generalFaqA5: "Yes! We offer monthly maintenance packages for websites, ongoing ad campaign management, and monthly social media content creation. Choose the package that fits your needs.",
    generalFaqQ6: "Why should I choose MindBox Portal?", generalFaqA6: "We combine deep UAE market expertise, a comprehensive service suite under one roof, competitive pricing, and a focus on real results. You get direct communication with our team and professional execution.",
    
    finalCtaTitle: "Ready to Grow Your Business<br />in <em>UAE?</em>", finalCtaSub: "Book a free 30-minute strategy session. We'll understand your needs, identify opportunities, and create a clear plan for your success.",
    finalCtaBtn: "Book Your Free Strategy Call"
  },
  
  ar: {
    // Meta
    pageTitle: "ميند بوكس بورتال — وكالة النمو الرقمي في الإمارات",
    metaDescription: "ميند بوكس بورتال — تطوير مواقع، إعلانات مدفوعة، تصميم سوشيال ميديا، وأتمتة بالذكاء الاصطناعي للشركات في الإمارات",
    metaKeywords: "ميند بوكس بورتال, تصميم مواقع الإمارات, إعلانات مدفوعة الإمارات, تصميم سوشيال ميديا الإمارات, أتمتة ذكاء اصطناعي الإمارات",
    ogTitle: "ميند بوكس بورتال — وكالة النمو الرقمي في الإمارات",
    ogDescription: "تطوير مواقع، إعلانات مدفوعة، تصميم سوشيال ميديا، وأتمتة بالذكاء الاصطناعي للشركات في الإمارات",
    
    // Header
    langBtn: "العربية",
    navHome: "الرئيسية", navServices: "الخدمات", navWork: "أعمالنا", navProcess: "العملية", navContact: "اتصل بنا",
    ctaBtn: "احصل على استراتيجية مجانية",
    
    // Mobile Nav
    mobileHome: "الرئيسية", mobileServices: "الخدمات", mobileWork: "أعمالنا", mobileProcess: "العملية", mobileContact: "اتصل بنا", mobileCta: "احصل على استراتيجية مجانية",
    
    // Hero
    heroTag: "وكالة النمو الرقمي في الإمارات 🇦🇪",
    heroH1: "نحن نبني أنظمة رقمية<br />تنمي <em>أعمالك.</em>",
    heroSub: "تطوير مواقع، إعلانات مدفوعة، محتوى سوشيال ميديا، وأتمتة بالذكاء الاصطناعي — كل ما تحتاجه أعمالك للسيطرة على الإنترنت في الإمارات.",
    heroCta: "احصل على استراتيجية مجانية", heroServicesBtn: "خدماتنا",
    heroTrust: "موثوق من قبل الشركات الناشئة والشركات في جميع أنحاء الإمارات",
    
    // Stats
    statProjects: "مشاريع منجزة", statClients: "عملاء سعداء", statSatisfaction: "رضا العملاء", statLocation: "مقرنا الإمارات",
    
    // Services Section (Home Page)
    servicesTag: "ماذا نقدم", servicesTitle: "4 خدمات. <em>وكالة واحدة.</em>",
    servicesSub: "نركز على أربع خدمات أساسية تعمل معاً لتنمية أعمالك — لا حشو، لا ميزانية ضائعة، فقط نتائج قابلة للقياس.",
    serviceTitle1: "تطوير المواقع", serviceDesc1: "مواقع سريعة واحترافية ومتاجر إلكترونية تحول الزوار إلى عملاء.",
    serviceItem1a: "كود مخصص (HTML/CSS/JS)", serviceItem1b: "مواقع ووردبريس", serviceItem1c: "متاجر شوبيفاي", serviceItem1d: "دمج بوابات الدفع", serviceCta1: "ابدأ موقعك",
    serviceTitle2: "الإعلانات المدفوعة", serviceDesc2: "حملات إعلانية عالية الأداء تجلب لك عملاء حقيقيين ومبيعات — وليس مجرد نقاط.",
    serviceItem2a: "إعلانات ميتا (فيسبوك وانستغرام)", serviceItem2b: "إعلانات جوجل", serviceItem2c: "إعلانات تيك توك", serviceItem2d: "تتبع العائد وتحسين الأداء", serviceCta2: "أطلق إعلاناتك",
    serviceTitle3: "تصميم سوشيال ميديا", serviceDesc3: "محتوى يجذب الانتباه يبني علامتك التجارية ويزيد التفاعل.",
    serviceItem3a: "منشورات انستغرام وتيك توك", serviceItem3b: "قوالب ستوريز وريلز", serviceItem3c: "هوية بصرية للعلامة التجارية", serviceItem3d: "تقويم محتوى شهري", serviceCta3: "صمم محتواي",
    serviceTitle4: "أتمتة الذكاء الاصطناعي", serviceDesc4: "أتمتة عمليات عملك بالذكاء الاصطناعي — وفر الوقت وتوسع بشكل أسرع.",
    serviceItem4a: "بوتات واتساب وروبوتات محادثة", serviceItem4b: "أتمتة سير العمل", serviceItem4c: "دعم عملاء بالذكاء الاصطناعي", serviceItem4d: "دمج الأنظمة وAPIs", serviceCta4: "أتمتة أعمالي",
    
    // Case Studies
    workTag: "أعمالنا", workTitle: "نتائج تتحدث<br /><em>أعلى من الوعود.</em>",
    caseTag1: "تطوير مواقع", caseTitle1: "متجر شوبيفاي — ماركة أزياء", caseProblemLabel: "المشكلة:", caseSolutionLabel: "الحل:",
    caseProblemText1: "لا يوجد متجر إلكتروني، خسارة مبيعات للمنافسين.", caseSolutionText1: "متجر شوبيفاي مخصص مع دمج بوابات الدفع.", caseResult1: "+65% مبيعات", caseResultText1: "في أول 45 يوماً بعد الإطلاق",
    caseTag2: "إعلانات", caseTitle2: "إعلانات ميتا — عيادة طبية", caseProblemText2: "صفر عملاء محتملين عبر الإنترنت، مواعيد فارغة.", caseSolutionText2: "إعلانات ميتا + صفحة هبوط + أتمتة واتساب.", caseResult2: "+150 عميل محتمل", caseResultText2: "تم توليدهم في أول 30 يوماً",
    caseTag3: "أتمتة ذكاء اصطناعي", caseTitle3: "بوت واتساب — سلسلة مطاعم", caseProblemText3: "الفريق غارق في استفسارات العملاء.", caseSolutionText3: "بوت واتساب بالذكاء الاصطناعي يدير الطلبات والحجوزات.", caseResult3: "أقل بنسبة 80%", caseResultText3: "من وقت دعم العملاء اليدوي",
    caseLink: "عرض دراسة الحالة", caseSeeAll: "جميع دراسات الحالة",
    
    // Process
    processTag: "كيف نعمل", processTitle: "من اليوم الأول إلى النتائج<br />في <em>4 خطوات بسيطة.</em>",
    processSub: "عملية واضحة ومثبتة — لا مفاجآت، لا وقت ضائع، فقط نتائج.",
    processTitle1: "الاكتشاف والتدقيق", processText1: "نغوص في عملك ومنافسيك وأهدافك لبناء الخطة المناسبة.",
    processTitle2: "الاستراتيجية والتخطيط", processText2: "ننشئ خريطة طريق مخصصة مع مخرجات وجداول زمنية ونتائج متوقعة.",
    processTitle3: "التنفيذ والإطلاق", processText3: "نبني ونصمم ونطلق كل شيء — ونبقيك على اطلاع في كل خطوة.",
    processTitle4: "التحسين والتوسع", processText4: "نتتبع النتائج شهرياً، ونحسن الأداء، ونوسع ما ينجح.",
    
    // CTA
    ctaBadge: "🎯 جلسة استراتيجية مجانية", ctaTitle: "مستعد لتنمية أعمالك<br />في <em>الإمارات؟</em>",
    ctaSub: "احجز جلسة استراتيجية مجانية لمدة 30 دقيقة. سنراجع عملك ونحدد أكبر الفرص ونخبرك بالضبط ماذا تفعل بعد ذلك.",
    ctaBtnText: "احجز جلسة الاستراتيجية المجانية", ctaTrust1: "مجانية 100%", ctaTrust2: "بدون بطاقة ائتمان", ctaTrust3: "رد خلال 24 ساعة",
    
    // Contact
    contactTag: "تواصل معنا", contactTitle: "لنبني شيئاً<br /><em>رائعاً معاً.</em>",
    contactSub: "أخبرنا عن عملك وما تحتاجه. سنرد عليك خلال 24 ساعة بخطة واضحة.",
    contactWhatsapp: "واتساب", contactEmail: "البريد الإلكتروني", contactWebsite: "الموقع", contactLocation: "الموقع",
    contactLocationText: "دبي، الإمارات العربية المتحدة 🇦🇪", mapText: "دبي، الإمارات",
    formTitle: "أرسل لنا رسالة", labelName: "الاسم", labelBusiness: "اسم الشركة", labelContact: "البريد الإلكتروني أو رقم الهاتف",
    labelService: "ما الخدمة التي تحتاجها؟", selectDefault: "اختر خدمة", selectWeb: "تطوير مواقع",
    selectAds: "إعلانات مدفوعة", selectSocial: "تصميم سوشيال ميديا", selectAi: "أتمتة بالذكاء الاصطناعي", selectFull: "حزمة كاملة (جميع الخدمات)",
    labelMessage: "أخبرنا عن مشروعك", submitBtn: "إرسال رسالة",
    
    // Footer
    footerTagline: "وكالة النمو الرقمي في الإمارات — مواقع، إعلانات، سوشيال ميديا، وأتمتة بالذكاء الاصطناعي.",
    footerServices: "الخدمات", footerCompany: "الشركة", footerHello: "راسلنا",
    footerWeb: "تطوير مواقع", footerAds: "إعلانات مدفوعة", footerSocial: "تصميم سوشيال ميديا", footerAi: "أتمتة بالذكاء الاصطناعي",
    footerAbout: "من نحن", footerWork: "أعمالنا", footerProcess: "العملية", footerContact: "اتصل بنا",
    footerCopy: "© 2026 ميند بوكس بورتال. جميع الحقوق محفوظة.", footerPrivacy: "سياسة الخصوصية", footerTerms: "شروط الخدمة",
    footerCredit: "<span>2026MindBox</span> — تم إنشاء الموقع بواسطة أحمد الجمال",
    
    // ===== SERVICES PAGE TRANSLATIONS =====
    servicesPageTitle: "ميند بوكس بورتال — خدماتنا | حلول رقمية في الإمارات",
    servicesMetaDescription: "تعرف على خدمات ميند بوكس بورتال في الإمارات: تطوير مواقع، إعلانات مدفوعة، تصميم سوشيال ميديا، وأتمتة بالذكاء الاصطناعي.",
    servicesMetaKeywords: "تطوير مواقع الإمارات, إعلانات مدفوعة الإمارات, تصميم سوشيال ميديا الإمارات, أتمتة ذكاء اصطناعي الإمارات",
    servicesOgTitle: "ميند بوكس بورتال — خدماتنا الرقمية في الإمارات",
    servicesOgDescription: "خدمات احترافية: تطوير مواقع، إعلانات ممولة، تصميم سوشيال ميديا، وأتمتة بالذكاء الاصطناعي في الإمارات.",
    servicesHeroTag: "ماذا نقدم", servicesHeroTitle: "<em>خدماتنا</em>",
    servicesHeroSub: "نقدم أربع خدمات رقمية أساسية مصممة لتنمية أعمالك في الإمارات — من تطوير المواقع والإعلانات إلى تصميم السوشيال ميديا وأتمتة الذكاء الاصطناعي.",
    quickLinkWeb: "🌐 تطوير مواقع", quickLinkAds: "📊 إعلانات ممولة", quickLinkSocial: "🎨 تصميم سوشيال ميديا", quickLinkAi: "🤖 أتمتة بالذكاء الاصطناعي",
    serviceWebTitle: "تطوير المواقع", serviceWebDesc: "مواقع سريعة واحترافية ومتاجر إلكترونية تحول الزوار إلى عملاء. حلول مخصصة حسب احتياجات عملك في الإمارات.",
    featuresTitle: "المميزات", benefitsTitle: "المنافع لعملك",
    featureWeb1: "تصميم متجاوب مع جميع الأجهزة", featureWeb2: "سرعة تحميل فائقة", featureWeb3: "هيكل محسن لمحركات البحث",
    featureWeb4: "نظام إدارة محتوى سهل", featureWeb5: "كود آمن ومحمي", featureWeb6: "دعم فني بعد الإطلاق",
    benefitWeb1: "زيادة المبيعات والأرباح", benefitWeb2: "ظهور في الصفحات الأولى لجوجل", benefitWeb3: "بناء مصداقية العلامة التجارية", benefitWeb4: "تجربة مستخدم ممتازة",
    portfolioWebTitle: "أعمال حديثة في تطوير المواقع", portfolioWebItem1Title: "متجر شوبيفاي — ماركة أزياء", portfolioWebItem1Desc: "متجر شوبيفاي مخصص مع دمج بوابات الدفع", portfolioWebItem1Result: "+65% مبيعات",
    portfolioWebItem2Title: "موقع تعريفي — عيادة طبية", portfolioWebItem2Desc: "موقع احترافي مع حجز مواعيد أونلاين", portfolioWebItem2Result: "+200% حجوزات",
    portfolioWebItem3Title: "منصة — شركة استشارات", portfolioWebItem3Desc: "منصة متكاملة مع لوحة تحكم ومدونة", portfolioWebItem3Result: "+150% زيارات",
    pricingWebLabel: "يبدأ من", pricingWebValue: "3,000 درهم", serviceWebCta: "اطلب الخدمة",
    faqWebTitle: "أسئلة شائعة", faqWebQ1: "كم تستغرق مدة تصميم الموقع؟", faqWebA1: "عادة من 2 إلى 6 أسابيع حسب حجم المشروع.",
    faqWebQ2: "هل تدعم ووردبريس؟", faqWebA2: "نعم، ووردبريس هو خيارنا الأساسي للمواقع العادية.",
    faqWebQ3: "هل تقدمون صيانة بعد التسليم؟", faqWebA3: "نعم، نقدم باقات صيانة شهرية وسنوية.",
    
    serviceAdsTitle: "الإعلانات المدفوعة", serviceAdsDesc: "حملات إعلانية عالية الأداء تجلب لك عملاء حقيقيين ومبيعات — وليس مجرد نقاط. نستهدف الجمهور المناسب عبر جميع المنصات.",
    featureAds1: "إعلانات ميتا (فيسبوك وانستغرام)", featureAds2: "إعلانات جوجل", featureAds3: "إعلانات تيك توك",
    featureAds4: "تتبع وتحليل العائد على الاستثمار", featureAds5: "تحسين مستمر للحملات", featureAds6: "تقارير أداء أسبوعية",
    benefitAds1: "الوصول للجمهور المستهدف", benefitAds2: "زيادة المبيعات والعملاء المحتملين", benefitAds3: "تحسين الوعي بالعلامة التجارية", benefitAds4: "عائد استثمار مرتفع",
    portfolioAdsTitle: "أعمال حديثة في الإعلانات", portfolioAdsItem1Title: "إعلانات فيسبوك — عيادة طبية", portfolioAdsItem1Desc: "استهداف المرضى المحليين بحملات استراتيجية", portfolioAdsItem1Result: "+150 عميل محتمل",
    portfolioAdsItem2Title: "جوجل شوبينغ — متجر إلكتروني", portfolioAdsItem2Desc: "تحسين ظهور المنتجات في البحث", portfolioAdsItem2Result: "+120% مبيعات",
    portfolioAdsItem3Title: "تيك توك — سلسلة مطاعم", portfolioAdsItem3Desc: "حملات فيديو إبداعية لزيادة الوعي", portfolioAdsItem3Result: "+300% تفاعل",
    pricingAdsLabel: "يبدأ من", pricingAdsValue: "2,500 درهم",
    faqAdsQ1: "كم الميزانية المطلوبة للإعلانات؟", faqAdsA1: "ننصح بالبدء من 3,000 درهم شهرياً للاختبار والتحسين.",
    faqAdsQ2: "متى أرى نتائج الإعلانات؟", faqAdsA2: "النتائج الأولية تظهر خلال أسبوعين، والنتائج المثلى بعد شهرين.",
    faqAdsQ3: "ما المنصات التي تدعمونها؟", faqAdsA3: "ميتا، جوجل، تيك توك، لينكدإن، وتويتر حسب احتياجك.",
    
    serviceSocialTitle: "تصميم سوشيال ميديا", serviceSocialDesc: "محتوى يجذب الانتباه يبني علامتك التجارية ويزيد التفاعل. هوية بصرية متسقة عبر جميع المنصات.",
    featureSocial1: "منشورات انستغرام وتيك توك", featureSocial2: "قوالب ستوريز وريلز", featureSocial3: "هوية بصرية متكاملة للعلامة التجارية",
    featureSocial4: "تقويم محتوى شهري", featureSocial5: "تصميم إعلانات سوشيال ميديا", featureSocial6: "تحليل أداء المحتوى",
    benefitSocial1: "زيادة التفاعل والمتابعين", benefitSocial2: "هوية بصرية مميزة وموحدة", benefitSocial3: "جدولة محتوى منتظم", benefitSocial4: "تحسين الوعي بالعلامة التجارية",
    portfolioSocialTitle: "أعمال حديثة في السوشيال ميديا", portfolioSocialItem1Title: "حملة توعوية — منظمة غير ربحية", portfolioSocialItem1Desc: "محتوى بصري جذاب للحملات التوعوية", portfolioSocialItem1Result: "+400% تفاعل",
    portfolioSocialItem2Title: "هوية بصرية — شركة ناشئة", portfolioSocialItem2Desc: "هوية بصرية متكاملة ومحتوى شهري", portfolioSocialItem2Result: "+200% متابعين",
    portfolioSocialItem3Title: "سبا ومركز تجميل", portfolioSocialItem3Desc: "محتوى يومي يبرز الخدمات والعروض", portfolioSocialItem3Result: "حجوزات كاملة",
    pricingSocialLabel: "يبدأ من", pricingSocialValue: "2,000 درهم",
    faqSocialQ1: "كم منشوراً تنصحون به شهرياً؟", faqSocialA1: "ننصح بـ 15-20 منشوراً شهرياً موزعة على منصات مختلفة.",
    faqSocialQ2: "هل تتضمن الخدمة إدارة الحسابات؟", faqSocialA2: "نعم، يمكننا إدارة حساباتك بالكامل من نشر وجدولة ورد على التعليقات.",
    faqSocialQ3: "كم تستغرق عملية تصميم الهوية البصرية؟", faqSocialA3: "عادة من أسبوع إلى أسبوعين حسب تعقيد المشروع.",
    
    serviceAiTitle: "أتمتة الذكاء الاصطناعي", serviceAiDesc: "وفر وقتك وقلل التكاليف بأتمتة عمليات عملك بالذكاء الاصطناعي. حلول ذكية تعمل 24/7 لخدمة أعمالك.",
    featureAi1: "بوتات واتساب وروبوتات محادثة ذكية", featureAi2: "أتمتة سير العمل الداخلي", featureAi3: "دعم عملاء آلي 24/7",
    featureAi4: "دمج مع أنظمة API", featureAi5: "تحليلات وتقارير ذكية", featureAi6: "حلول قابلة للتخصيص بالكامل",
    benefitAi1: "توفير الوقت والجهد", benefitAi2: "تقليل التكاليف التشغيلية", benefitAi3: "تحسين خدمة العملاء", benefitAi4: "زيادة الإنتاجية",
    portfolioAiTitle: "أعمال حديثة في أتمتة الذكاء الاصطناعي", portfolioAiItem1Title: "بوت واتساب — سلسلة مطاعم", portfolioAiItem1Desc: "أتمتة الطلبات والحجوزات عبر واتساب", portfolioAiItem1Result: "80% أقل في وقت الدعم",
    portfolioAiItem2Title: "أتمتة سير العمل — شركة عقارية", portfolioAiItem2Desc: "أتمتة متابعة العملاء وإرسال العروض", portfolioAiItem2Result: "+50% إنتاجية",
    portfolioAiItem3Title: "روبوت محادثة — منصة تعليمية", portfolioAiItem3Desc: "روبوت يجيب على أسئلة الطلاب ويساعد في التسجيل", portfolioAiItem3Result: "دعم فوري 24/7",
    pricingAiLabel: "يبدأ من", pricingAiValue: "3,500 درهم",
    faqAiQ1: "كم تستغرق عملية تطوير البوت؟", faqAiA1: "من 2 إلى 4 أسابيع حسب تعقيد المتطلبات.",
    faqAiQ2: "هل يتطلب البوت تدريباً مستمراً؟", faqAiA2: "نقدم تدريباً أولياً، مع إمكانية تحسين مستمر.",
    faqAiQ3: "هل يمكن دمج البوت مع أنظمتي الحالية؟", faqAiA3: "نعم، نستطيع دمج البوت مع معظم أنظمة CRM وAPI.",
    
    generalFaqTitle: "أسئلة شائعة", generalFaqSub: "إجابات على أكثر الأسئلة شيوعاً من عملائنا في الإمارات",
    generalFaqQ1: "كم تكلفة الخدمات عموماً؟", generalFaqA1: "تختلف التكلفة حسب نوع الخدمة وحجم المشروع. باقاتنا تبدأ من 2,000 درهم لتصميم السوشيال ميديا وتصل إلى 5,000+ درهم للحلول المتكاملة. تواصل معنا للحصول على عرض سعر دقيق حسب احتياجاتك.",
    generalFaqQ2: "كم تستغرق مدة المشروع عادةً؟", generalFaqA2: "تختلف المدة حسب المشروع: المواقع البسيطة (2-3 أسابيع)، المتاجر الإلكترونية (4-6 أسابيع)، حملات الإعلانات (أسبوعان للإعداد)، بوتات الذكاء الاصطناعي (2-4 أسابيع).",
    generalFaqQ3: "هل تقدمون ضمان على خدماتكم؟", generalFaqA3: "نعم، نقدم ضماناً لمدة 30 يوماً بعد تسليم المشروع لتصحيح أي أخطاء برمجية. كما نقدم باقات صيانة مستمرة للدعم الفني.",
    generalFaqQ4: "كيف يمكنني التواصل معكم بعد المشروع؟", generalFaqA4: "يمكنك التواصل معنا عبر واتساب، الإيميل، أو نموذج الاتصال في الموقع. نقدم دعماً فنياً خلال أيام العمل من 9 صباحاً إلى 6 مساءً.",
    generalFaqQ5: "هل تقدمون خدمات شهرية مستمرة؟", generalFaqA5: "نعم! نقدم باقات صيانة شهرية للمواقع، وإدارة مستمرة لحملات الإعلانات، وتصميم محتوى شهري للسوشيال ميديا. اختر الباقة المناسبة لاحتياجاتك.",
    generalFaqQ6: "لماذا أختار ميند بوكس بورتال؟", generalFaqA6: "نتميز بخبرتنا في السوق الإماراتي، خدماتنا المتكاملة تحت سقف واحد، أسعارنا التنافسية، وتركيزنا على النتائج الحقيقية. نضمن لك تواصلاً مباشراً مع فريق العمل واحترافية في التنفيذ.",
    
    finalCtaTitle: "مستعد لتنمية أعمالك<br />في <em>الإمارات؟</em>", finalCtaSub: "احجز جلسة استراتيجية مجانية لمدة 30 دقيقة. سنفهم احتياجاتك، ونحدد الفرص، وننشئ خطة واضحة لنجاحك.",
    finalCtaBtn: "احجز استشارتك المجانية"
  }
};

// ============================================================
// 2. CURRENT LANGUAGE
// ============================================================
let currentLang = "en";

// ============================================================
// 3. SWITCH LANGUAGE FUNCTION
// ============================================================
function switchLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  document.documentElement.lang = lang === "ar" ? "ar" : "en";
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  if (lang === "ar") document.body.classList.add("rtl");
  else document.body.classList.remove("rtl");

  // Update Meta
  document.title = t.pageTitle;
  const metaDesc = document.querySelector('meta[name="description"]');
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (metaDesc) metaDesc.setAttribute("content", t.metaDescription);
  if (metaKeywords) metaKeywords.setAttribute("content", t.metaKeywords);
  if (ogTitle) ogTitle.setAttribute("content", t.ogTitle);
  if (ogDesc) ogDesc.setAttribute("content", t.ogDescription);

  // Update Language Buttons
  document.querySelectorAll(".lang-btn-text, .mobile-lang-text").forEach(el => { if(el) el.textContent = t.langBtn; });

  // Update Navigation
  document.querySelectorAll(".nav-home, .mobile-nav-home").forEach(el => { if(el) el.textContent = t.navHome; });
  document.querySelectorAll(".nav-services, .mobile-nav-services").forEach(el => { if(el) el.textContent = t.navServices; });
  document.querySelectorAll(".nav-work, .mobile-nav-work").forEach(el => { if(el) el.textContent = t.navWork; });
  document.querySelectorAll(".nav-process, .mobile-nav-process").forEach(el => { if(el) el.textContent = t.navProcess; });
  document.querySelectorAll(".nav-contact, .mobile-nav-contact").forEach(el => { if(el) el.textContent = t.navContact; });
  document.querySelectorAll(".cta-btn-text, .mobile-cta").forEach(el => { if(el) el.textContent = t.ctaBtn; });

  // Update Hero
  document.querySelectorAll(".hero-tag-text").forEach(el => { if(el) el.textContent = t.heroTag; });
  document.querySelectorAll("#hero-title").forEach(el => { if(el) el.innerHTML = t.heroH1; });
  document.querySelectorAll(".hero-sub").forEach(el => { if(el) el.textContent = t.heroSub; });
  document.querySelectorAll(".hero-cta-btn").forEach(el => { if(el) el.innerHTML = `<i class="fa-solid fa-rocket"></i> ${t.heroCta}`; });
  document.querySelectorAll(".hero-services-btn").forEach(el => { if(el) el.innerHTML = `<i class="fa-solid fa-eye"></i> ${t.heroServicesBtn}`; });
  document.querySelectorAll(".hero-trust-text").forEach(el => { if(el) el.textContent = t.heroTrust; });

  // Update Stats
  document.querySelectorAll(".stat-projects").forEach(el => { if(el) el.textContent = t.statProjects; });
  document.querySelectorAll(".stat-clients").forEach(el => { if(el) el.textContent = t.statClients; });
  document.querySelectorAll(".stat-satisfaction").forEach(el => { if(el) el.textContent = t.statSatisfaction; });
  document.querySelectorAll(".stat-location").forEach(el => { if(el) el.textContent = t.statLocation; });

  // Update Home Services
  document.querySelectorAll(".services-tag").forEach(el => { if(el) el.textContent = t.servicesTag; });
  document.querySelectorAll("#services-title").forEach(el => { if(el) el.innerHTML = t.servicesTitle; });
  document.querySelectorAll(".services-sub").forEach(el => { if(el) el.textContent = t.servicesSub; });
  document.querySelectorAll(".service-title-1").forEach(el => { if(el) el.textContent = t.serviceTitle1; });
  document.querySelectorAll(".service-desc-1").forEach(el => { if(el) el.textContent = t.serviceDesc1; });
  document.querySelectorAll(".service-cta-1").forEach(el => { if(el) el.innerHTML = `${t.serviceCta1} <i class="fa-solid fa-arrow-right"></i>`; });
  document.querySelectorAll(".service-title-2").forEach(el => { if(el) el.textContent = t.serviceTitle2; });
  document.querySelectorAll(".service-desc-2").forEach(el => { if(el) el.textContent = t.serviceDesc2; });
  document.querySelectorAll(".service-cta-2").forEach(el => { if(el) el.innerHTML = `${t.serviceCta2} <i class="fa-solid fa-arrow-right"></i>`; });
  document.querySelectorAll(".service-title-3").forEach(el => { if(el) el.textContent = t.serviceTitle3; });
  document.querySelectorAll(".service-desc-3").forEach(el => { if(el) el.textContent = t.serviceDesc3; });
  document.querySelectorAll(".service-cta-3").forEach(el => { if(el) el.innerHTML = `${t.serviceCta3} <i class="fa-solid fa-arrow-right"></i>`; });
  document.querySelectorAll(".service-title-4").forEach(el => { if(el) el.textContent = t.serviceTitle4; });
  document.querySelectorAll(".service-desc-4").forEach(el => { if(el) el.textContent = t.serviceDesc4; });
  document.querySelectorAll(".service-cta-4").forEach(el => { if(el) el.innerHTML = `${t.serviceCta4} <i class="fa-solid fa-arrow-right"></i>`; });

  // Update Case Studies
  document.querySelectorAll(".work-tag").forEach(el => { if(el) el.textContent = t.workTag; });
  document.querySelectorAll("#work-title").forEach(el => { if(el) el.innerHTML = t.workTitle; });
  document.querySelectorAll(".case-link").forEach(el => { if(el) el.innerHTML = `${t.caseLink} <i class="fa-solid fa-arrow-right"></i>`; });
  document.querySelectorAll(".case-see-all-btn").forEach(el => { if(el) el.innerHTML = `${t.caseSeeAll} <i class="fa-solid fa-arrow-right"></i>`; });

  // Update Process
  document.querySelectorAll(".process-tag").forEach(el => { if(el) el.textContent = t.processTag; });
  document.querySelectorAll("#process-title").forEach(el => { if(el) el.innerHTML = t.processTitle; });
  document.querySelectorAll(".process-sub").forEach(el => { if(el) el.textContent = t.processSub; });
  for (let i = 1; i <= 4; i++) {
    document.querySelectorAll(`.process-title-${i}`).forEach(el => { if(el) el.textContent = t[`processTitle${i}`]; });
    document.querySelectorAll(`.process-text-${i}`).forEach(el => { if(el) el.textContent = t[`processText${i}`]; });
  }

  // Update CTA
  document.querySelectorAll(".cta-badge-text").forEach(el => { if(el) el.textContent = t.ctaBadge; });
  document.querySelectorAll(".cta-title-text").forEach(el => { if(el) el.innerHTML = t.ctaTitle; });
  document.querySelectorAll(".cta-sub-text").forEach(el => { if(el) el.textContent = t.ctaSub; });
  document.querySelectorAll(".cta-btn-text").forEach(el => { if(el) el.innerHTML = `<i class="fa-solid fa-calendar-check"></i> ${t.ctaBtnText}`; });
  const trusts = [t.ctaTrust1, t.ctaTrust2, t.ctaTrust3];
  document.querySelectorAll(".cta-trust-1, .cta-trust-2, .cta-trust-3").forEach((el, i) => { if(el && trusts[i]) el.textContent = trusts[i]; });

  // Update Contact
  document.querySelectorAll(".contact-tag").forEach(el => { if(el) el.textContent = t.contactTag; });
  document.querySelectorAll("#contact-title").forEach(el => { if(el) el.innerHTML = t.contactTitle; });
  document.querySelectorAll(".contact-sub").forEach(el => { if(el) el.textContent = t.contactSub; });
  document.querySelectorAll(".contact-whatsapp-label").forEach(el => { if(el) el.textContent = t.contactWhatsapp; });
  document.querySelectorAll(".contact-email-label").forEach(el => { if(el) el.textContent = t.contactEmail; });
  document.querySelectorAll(".contact-website-label").forEach(el => { if(el) el.textContent = t.contactWebsite; });
  document.querySelectorAll(".contact-location-label").forEach(el => { if(el) el.textContent = t.contactLocation; });
  document.querySelectorAll(".contact-location-text").forEach(el => { if(el) el.textContent = t.contactLocationText; });
  document.querySelectorAll(".map-text").forEach(el => { if(el) el.textContent = t.mapText; });
  document.querySelectorAll(".form-title-text").forEach(el => { if(el) el.textContent = t.formTitle; });
  document.querySelectorAll(".submit-btn-text").forEach(el => { if(el) el.innerHTML = `<i class="fa-solid fa-paper-plane"></i> ${t.submitBtn}`; });

  // Update Footer
  document.querySelectorAll(".footer-tagline-text").forEach(el => { if(el) el.textContent = t.footerTagline; });
  document.querySelectorAll(".footer-services-title").forEach(el => { if(el) el.textContent = t.footerServices; });
  document.querySelectorAll(".footer-company-title").forEach(el => { if(el) el.textContent = t.footerCompany; });
  document.querySelectorAll(".footer-hello-title").forEach(el => { if(el) el.textContent = t.footerHello; });
  document.querySelectorAll(".footer-copy-text").forEach(el => { if(el) el.textContent = t.footerCopy; });
  document.querySelectorAll(".footer-credit-text").forEach(el => { if(el) el.innerHTML = t.footerCredit; });

  // ===== UPDATE SERVICES PAGE (if exists) =====
  if (document.querySelector(".services-hero-tag-text")) {
    document.querySelectorAll(".services-hero-tag-text").forEach(el => { if(el) el.textContent = t.servicesHeroTag; });
    document.querySelectorAll(".services-hero-title").forEach(el => { if(el) el.innerHTML = t.servicesHeroTitle; });
    document.querySelectorAll(".services-hero-sub").forEach(el => { if(el) el.textContent = t.servicesHeroSub; });
    
    // Quick Links
    document.querySelectorAll(".quick-link-web").forEach(el => { if(el) el.innerHTML = t.quickLinkWeb; });
    document.querySelectorAll(".quick-link-ads").forEach(el => { if(el) el.innerHTML = t.quickLinkAds; });
    document.querySelectorAll(".quick-link-social").forEach(el => { if(el) el.innerHTML = t.quickLinkSocial; });
    document.querySelectorAll(".quick-link-ai").forEach(el => { if(el) el.innerHTML = t.quickLinkAi; });
    
    // Web Development Service
    document.querySelectorAll(".service-web-title").forEach(el => { if(el) el.textContent = t.serviceWebTitle; });
    document.querySelectorAll(".service-web-desc").forEach(el => { if(el) el.textContent = t.serviceWebDesc; });
    document.querySelectorAll(".features-web-title, .benefits-web-title").forEach((el, i) => { if(el) el.textContent = i === 0 ? t.featuresTitle : t.benefitsTitle; });
    for (let i = 1; i <= 6; i++) document.querySelectorAll(`.feature-web-${i}`).forEach(el => { if(el) el.textContent = t[`featureWeb${i}`]; });
    for (let i = 1; i <= 4; i++) document.querySelectorAll(`.benefit-web-${i}`).forEach(el => { if(el) el.textContent = t[`benefitWeb${i}`]; });
    document.querySelectorAll(".portfolio-web-title").forEach(el => { if(el) el.textContent = t.portfolioWebTitle; });
    for (let i = 1; i <= 3; i++) {
      document.querySelectorAll(`.portfolio-web-item${i}-title`).forEach(el => { if(el) el.textContent = t[`portfolioWebItem${i}Title`]; });
      document.querySelectorAll(`.portfolio-web-item${i}-desc`).forEach(el => { if(el) el.textContent = t[`portfolioWebItem${i}Desc`]; });
      document.querySelectorAll(`.portfolio-web-item${i}-result`).forEach(el => { if(el) el.textContent = t[`portfolioWebItem${i}Result`]; });
    }
    document.querySelectorAll(".pricing-web-label").forEach(el => { if(el) el.textContent = t.pricingWebLabel; });
    document.querySelectorAll(".pricing-web-value").forEach(el => { if(el) el.textContent = t.pricingWebValue; });
    document.querySelectorAll(".service-web-cta").forEach(el => { if(el) el.innerHTML = `${t.serviceWebCta} <i class="fa-solid fa-arrow-right"></i>`; });
    document.querySelectorAll(".faq-web-title").forEach(el => { if(el) el.textContent = t.faqWebTitle; });
    for (let i = 1; i <= 3; i++) {
      document.querySelectorAll(`.faq-web-q${i}`).forEach(el => { if(el) el.textContent = t[`faqWebQ${i}`]; });
      document.querySelectorAll(`.faq-web-a${i}`).forEach(el => { if(el) el.textContent = t[`faqWebA${i}`]; });
    }
    
    // Paid Ads Service
    document.querySelectorAll(".service-ads-title").forEach(el => { if(el) el.textContent = t.serviceAdsTitle; });
    document.querySelectorAll(".service-ads-desc").forEach(el => { if(el) el.textContent = t.serviceAdsDesc; });
    for (let i = 1; i <= 6; i++) document.querySelectorAll(`.feature-ads-${i}`).forEach(el => { if(el) el.textContent = t[`featureAds${i}`]; });
    for (let i = 1; i <= 4; i++) document.querySelectorAll(`.benefit-ads-${i}`).forEach(el => { if(el) el.textContent = t[`benefitAds${i}`]; });
    document.querySelectorAll(".portfolio-ads-title").forEach(el => { if(el) el.textContent = t.portfolioAdsTitle; });
    for (let i = 1; i <= 3; i++) {
      document.querySelectorAll(`.portfolio-ads-item${i}-title`).forEach(el => { if(el) el.textContent = t[`portfolioAdsItem${i}Title`]; });
      document.querySelectorAll(`.portfolio-ads-item${i}-desc`).forEach(el => { if(el) el.textContent = t[`portfolioAdsItem${i}Desc`]; });
      document.querySelectorAll(`.portfolio-ads-item${i}-result`).forEach(el => { if(el) el.textContent = t[`portfolioAdsItem${i}Result`]; });
    }
    document.querySelectorAll(".pricing-ads-label").forEach(el => { if(el) el.textContent = t.pricingAdsLabel; });
    document.querySelectorAll(".pricing-ads-value").forEach(el => { if(el) el.textContent = t.pricingAdsValue; });
    for (let i = 1; i <= 3; i++) {
      document.querySelectorAll(`.faq-ads-q${i}`).forEach(el => { if(el) el.textContent = t[`faqAdsQ${i}`]; });
      document.querySelectorAll(`.faq-ads-a${i}`).forEach(el => { if(el) el.textContent = t[`faqAdsA${i}`]; });
    }
    
    // Social Media Service
    document.querySelectorAll(".service-social-title").forEach(el => { if(el) el.textContent = t.serviceSocialTitle; });
    document.querySelectorAll(".service-social-desc").forEach(el => { if(el) el.textContent = t.serviceSocialDesc; });
    for (let i = 1; i <= 6; i++) document.querySelectorAll(`.feature-social-${i}`).forEach(el => { if(el) el.textContent = t[`featureSocial${i}`]; });
    for (let i = 1; i <= 4; i++) document.querySelectorAll(`.benefit-social-${i}`).forEach(el => { if(el) el.textContent = t[`benefitSocial${i}`]; });
    document.querySelectorAll(".portfolio-social-title").forEach(el => { if(el) el.textContent = t.portfolioSocialTitle; });
    for (let i = 1; i <= 3; i++) {
      document.querySelectorAll(`.portfolio-social-item${i}-title`).forEach(el => { if(el) el.textContent = t[`portfolioSocialItem${i}Title`]; });
      document.querySelectorAll(`.portfolio-social-item${i}-desc`).forEach(el => { if(el) el.textContent = t[`portfolioSocialItem${i}Desc`]; });
      document.querySelectorAll(`.portfolio-social-item${i}-result`).forEach(el => { if(el) el.textContent = t[`portfolioSocialItem${i}Result`]; });
    }
    document.querySelectorAll(".pricing-social-label").forEach(el => { if(el) el.textContent = t.pricingSocialLabel; });
    document.querySelectorAll(".pricing-social-value").forEach(el => { if(el) el.textContent = t.pricingSocialValue; });
    for (let i = 1; i <= 3; i++) {
      document.querySelectorAll(`.faq-social-q${i}`).forEach(el => { if(el) el.textContent = t[`faqSocialQ${i}`]; });
      document.querySelectorAll(`.faq-social-a${i}`).forEach(el => { if(el) el.textContent = t[`faqSocialA${i}`]; });
    }
    
    // AI Automation Service
    document.querySelectorAll(".service-ai-title").forEach(el => { if(el) el.textContent = t.serviceAiTitle; });
    document.querySelectorAll(".service-ai-desc").forEach(el => { if(el) el.textContent = t.serviceAiDesc; });
    for (let i = 1; i <= 6; i++) document.querySelectorAll(`.feature-ai-${i}`).forEach(el => { if(el) el.textContent = t[`featureAi${i}`]; });
    for (let i = 1; i <= 4; i++) document.querySelectorAll(`.benefit-ai-${i}`).forEach(el => { if(el) el.textContent = t[`benefitAi${i}`]; });
    document.querySelectorAll(".portfolio-ai-title").forEach(el => { if(el) el.textContent = t.portfolioAiTitle; });
    for (let i = 1; i <= 3; i++) {
      document.querySelectorAll(`.portfolio-ai-item${i}-title`).forEach(el => { if(el) el.textContent = t[`portfolioAiItem${i}Title`]; });
      document.querySelectorAll(`.portfolio-ai-item${i}-desc`).forEach(el => { if(el) el.textContent = t[`portfolioAiItem${i}Desc`]; });
      document.querySelectorAll(`.portfolio-ai-item${i}-result`).forEach(el => { if(el) el.textContent = t[`portfolioAiItem${i}Result`]; });
    }
    document.querySelectorAll(".pricing-ai-label").forEach(el => { if(el) el.textContent = t.pricingAiLabel; });
    document.querySelectorAll(".pricing-ai-value").forEach(el => { if(el) el.textContent = t.pricingAiValue; });
    for (let i = 1; i <= 3; i++) {
      document.querySelectorAll(`.faq-ai-q${i}`).forEach(el => { if(el) el.textContent = t[`faqAiQ${i}`]; });
      document.querySelectorAll(`.faq-ai-a${i}`).forEach(el => { if(el) el.textContent = t[`faqAiA${i}`]; });
    }
    
    // General FAQ
    document.querySelectorAll(".general-faq-header .section-tag").forEach(el => { if(el) el.textContent = t.servicesTag; });
    document.querySelectorAll(".general-faq-header .section-title").forEach(el => { if(el) el.innerHTML = t.generalFaqTitle; });
    document.querySelectorAll(".general-faq-header .section-sub").forEach(el => { if(el) el.textContent = t.generalFaqSub; });
    for (let i = 1; i <= 6; i++) {
      document.querySelectorAll(`.general-faq-q${i}`).forEach(el => { if(el) el.textContent = t[`generalFaqQ${i}`]; });
      document.querySelectorAll(`.general-faq-a${i}`).forEach(el => { if(el) el.textContent = t[`generalFaqA${i}`]; });
    }
    
    // Final CTA
    document.querySelectorAll(".services-final-cta .cta-title-text").forEach(el => { if(el) el.innerHTML = t.finalCtaTitle; });
    document.querySelectorAll(".services-final-cta .cta-sub-text").forEach(el => { if(el) el.textContent = t.finalCtaSub; });
    document.querySelectorAll(".services-final-cta .cta-btn-text").forEach(el => { if(el) el.innerHTML = `<i class="fa-solid fa-calendar-check"></i> ${t.finalCtaBtn}`; });
  }

  localStorage.setItem("mindbox_language", lang);
}

// ============================================================
// 4. LOAD SAVED LANGUAGE
// ============================================================
function loadSavedLanguage() {
  const savedLang = localStorage.getItem("mindbox_language");
  if (savedLang === "ar") switchLanguage("ar");
  else switchLanguage("en");
}

// ============================================================
// 5. MOBILE LANGUAGE DROPDOWN
// ============================================================
function toggleMobileLangDropdown() {
  const dropdown = document.getElementById("mobileLangDropdown");
  const currentBtn = document.querySelector(".mobile-lang-current");
  if (dropdown && currentBtn) {
    dropdown.classList.toggle("show");
    currentBtn.classList.toggle("open");
  }
}

document.addEventListener("click", function(e) {
  const switcher = document.querySelector(".mobile-lang-switcher");
  const dropdown = document.getElementById("mobileLangDropdown");
  const currentBtn = document.querySelector(".mobile-lang-current");
  if (switcher && !switcher.contains(e.target)) {
    if (dropdown) dropdown.classList.remove("show");
    if (currentBtn) currentBtn.classList.remove("open");
  }
});

// ============================================================
// 6. SCROLL PROGRESS
// ============================================================
const scrollProgress = document.getElementById("scrollProgress");
window.addEventListener("scroll", () => {
  if (scrollProgress) {
    const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    scrollProgress.style.width = pct + "%";
  }
});

// ============================================================
// 7. HEADER SCROLL EFFECT
// ============================================================
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (header) header.classList.toggle("scrolled", window.scrollY > 50);
});

// ============================================================
// 8. HAMBURGER MENU
// ============================================================
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileNav = document.getElementById("mobileNav");

function openMobileNav() {
  if (mobileNav) mobileNav.classList.add("open");
  if (hamburgerBtn) hamburgerBtn.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeMobileNav() {
  if (mobileNav) mobileNav.classList.remove("open");
  if (hamburgerBtn) hamburgerBtn.classList.remove("open");
  document.body.style.overflow = "";
}

if (hamburgerBtn) {
  hamburgerBtn.addEventListener("click", () => {
    if (mobileNav && mobileNav.classList.contains("open")) closeMobileNav();
    else openMobileNav();
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMobileNav();
});

// ============================================================
// 9. SCROLL REVEAL
// ============================================================
const fadeObserver = new IntersectionObserver(
  (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
  { threshold: 0.1 }
);
document.querySelectorAll(".fade-up").forEach(el => fadeObserver.observe(el));

// ============================================================
// 10. COUNTER ANIMATION
// ============================================================
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(e => {
      if (e.isIntersecting && e.target.dataset.count) {
        animateCounter(e.target);
        counterObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.5 }
);

function animateCounter(el) {
  const target = parseInt(el.dataset.count);
  const suffix = el.dataset.count == "100" ? "%" : "+";
  const step = target / (1800 / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      clearInterval(timer);
      current = target;
    }
    el.textContent = Math.floor(current) + suffix;
  }, 16);
}

document.querySelectorAll("[data-count]").forEach(el => counterObserver.observe(el));

// ============================================================
// 11. ACTIVE NAV LINK
// ============================================================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".main-nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(l => {
    l.classList.toggle("active", l.getAttribute("href") === "#" + current);
  });
});

// ============================================================
// 12. CONTACT FORM
// ============================================================
function handleSubmit(btn) {
  const isArabic = currentLang === "ar";
  btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${isArabic ? "جاري الإرسال..." : "Sending..."}`;
  btn.style.opacity = "0.75";
  setTimeout(() => {
    btn.innerHTML = `<i class="fa-solid fa-check"></i> ${isArabic ? "تم الإرسال! سنرد خلال 24 ساعة" : "Message Sent! We'll respond in 24h"}`;
    btn.style.background = "#2a9d8f";
    btn.style.opacity = "1";
  }, 1500);
}

// ============================================================
// 13. GENERAL FAQ TOGGLE
// ============================================================
document.querySelectorAll(".general-faq-question").forEach(question => {
  question.addEventListener("click", () => {
    question.parentElement.classList.toggle("active");
  });
});

// ============================================================
// 14. HERO INITIAL
// ============================================================
window.addEventListener("load", () => {
  document.querySelectorAll("#hero .fade-up").forEach(el => el.classList.add("visible"));
  loadSavedLanguage();
});

// ============================================================
// 15. CANVAS ANIMATION
// ============================================================
const canvas = document.getElementById("bgCanvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  let W, H, particles, shootingStars;
  let mouse = { x: null, y: null };

  window.addEventListener("mousemove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener("mouseleave", () => { mouse.x = null; mouse.y = null; });

  function resizeCanvas() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
    initParticles();
  }

  class Particle {
    constructor() { this.reset(true); }
    reset(initial) {
      this.x = Math.random() * W;
      this.y = initial ? Math.random() * H : H + 10;
      this.size = Math.random() * 1.5 + 0.2;
      this.speedX = (Math.random() - 0.5) * 0.18;
      this.speedY = -(Math.random() * 0.25 + 0.06);
      this.life = initial ? Math.random() * 300 : 0;
      this.maxLife = Math.random() * 300 + 180;
      const r = Math.random();
      this.color = r < 0.74 ? "rgba(255,255,255," : r < 0.89 ? "rgba(230,57,70," : "rgba(244,162,97,";
    }
    update() {
      this.life++;
      this.x += this.speedX;
      this.y += this.speedY;
      if (mouse.x !== null) {
        const dx = this.x - mouse.x, dy = this.y - mouse.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 90) {
          this.x += (dx / d) * 0.4;
          this.y += (dy / d) * 0.4;
        }
      }
      if (this.life >= this.maxLife || this.y < -10) this.reset(false);
    }
    draw() {
      const a = Math.sin((this.life / this.maxLife) * Math.PI) * 0.78;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color + a + ")";
      ctx.fill();
      if (this.size > 1.0) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2.6, 0, Math.PI * 2);
        ctx.fillStyle = this.color + a * 0.09 + ")";
        ctx.fill();
      }
    }
  }

  class ShootingStar {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W * 0.7;
      this.y = Math.random() * H * 0.38;
      this.len = Math.random() * 120 + 55;
      this.speed = Math.random() * 8 + 5;
      this.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.4;
      this.life = 0;
      this.maxLife = 58;
      this.active = false;
      this.wait = 0;
      this.next = Math.random() * 550 + 300;
    }
    update() {
      if (!this.active) {
        this.wait++;
        if (this.wait >= this.next) { this.active = true; this.wait = 0; }
        return;
      }
      this.life++;
      this.x += Math.cos(this.angle) * this.speed;
      this.y += Math.sin(this.angle) * this.speed;
      if (this.life >= this.maxLife) this.reset();
    }
    draw() {
      if (!this.active) return;
      const a = 1 - this.life / this.maxLife;
      const tx = this.x - Math.cos(this.angle) * this.len;
      const ty = this.y - Math.sin(this.angle) * this.len;
      const g = ctx.createLinearGradient(tx, ty, this.x, this.y);
      g.addColorStop(0, "rgba(255,255,255,0)");
      g.addColorStop(1, `rgba(255,255,255,${a * 0.9})`);
      ctx.beginPath();
      ctx.moveTo(tx, ty);
      ctx.lineTo(this.x, this.y);
      ctx.strokeStyle = g;
      ctx.lineWidth = 1.4;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(this.x, this.y, 1.8, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${a})`;
      ctx.fill();
    }
  }

  function drawConnections() {
    const maxD = 85;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < maxD) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(230,57,70,${(1 - d / maxD) * 0.06})`;
          ctx.lineWidth = 0.4;
          ctx.stroke();
        }
      }
    }
  }

  function initParticles() {
    const count = Math.min(Math.floor((W * H) / 9000), 100);
    particles = Array.from({ length: count }, () => new Particle());
    shootingStars = Array.from({ length: 2 }, () => new ShootingStar());
  }

  function animateBg() {
    ctx.clearRect(0, 0, W, H);
    drawConnections();
    particles.forEach(p => { p.update(); p.draw(); });
    shootingStars.forEach(s => { s.update(); s.draw(); });
    requestAnimationFrame(animateBg);
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  animateBg();
}