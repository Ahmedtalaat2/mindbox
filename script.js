// ============================================================
// ملف: script.js
// جميع التفاعلات والحركات في الموقع
// ============================================================

// ============================================================
// 1. TRANSLATIONS OBJECT - جميع ترجمات الموقع
// ============================================================
const translations = {
  en: {
    pageTitle: "MindBox Portal — Dubai's Digital Growth Agency",
    metaDescription:
      "MindBox Portal — Web Development, Paid Ads, Social Media Design & AI Automation for businesses in UAE.",
    metaKeywords:
      "MindBox Portal, web development Dubai, paid ads Dubai, social media design Dubai, AI automation UAE",
    ogTitle: "MindBox Portal — Dubai's Digital Growth Agency",
    ogDescription:
      "Websites, paid ads, social media content & AI automation for businesses in UAE.",
    langBtn: "English",
    navHome: "Home",
    navServices: "Services",
    navWork: "Work",
    navProcess: "Process",
    navContact: "Contact",
    ctaBtn: "Get Free Strategy",
    mobileHome: "Home",
    mobileServices: "Services",
    mobileWork: "Work",
    mobileProcess: "Process",
    mobileContact: "Contact",
    mobileCta: "Get Free Strategy",
    heroTag: "UAE's Digital Growth Agency ",
    heroH1: "We Build Digital Systems<br />That <em>Grow Your Business.</em>",
    heroSub:
      "Websites, paid ads, social media content, and AI automation — everything your business needs to dominate online in UAE.",
    heroCta: "Get Free Strategy",
    heroServicesBtn: "Our Services",
    heroTrust: "Trusted by startups & businesses across UAE",
    statProjects: "Projects Delivered",
    statClients: "Happy Clients",
    statSatisfaction: "Client Satisfaction",
    statLocation: "Dubai Based",
    servicesTag: "What We Do",
    servicesTitle: "4 Services. <em>One Agency.</em>",
    servicesSub:
      "We focus on four core services that work together to grow your business — no fluff, no wasted budget, just measurable results.",
    serviceTitle1: "Web Development",
    serviceDesc1:
      "Fast, professional websites and online stores that convert visitors into customers.",
    serviceItem1a: "Custom Code (HTML/CSS/JS)",
    serviceItem1b: "WordPress Websites",
    serviceItem1c: "Shopify Stores",
    serviceItem1d: "Payment Integration",
    serviceCta1: "Start Your Website",
    serviceTitle2: "Paid Advertising",
    serviceDesc2:
      "High-performance ad campaigns that bring you real leads and sales — not just clicks.",
    serviceItem2a: "Meta Ads (FB & Instagram)",
    serviceItem2b: "Google Ads",
    serviceItem2c: "TikTok Ads",
    serviceItem2d: "ROI Tracking & Optimization",
    serviceCta2: "Launch Your Ads",
    serviceTitle3: "Social Media Design",
    serviceDesc3:
      "Scroll-stopping content that builds your brand and drives real engagement.",
    serviceItem3a: "Instagram & TikTok Posts",
    serviceItem3b: "Stories & Reels Templates",
    serviceItem3c: "Brand Visual Identity",
    serviceItem3d: "Monthly Content Calendar",
    serviceCta3: "Design My Content",
    serviceTitle4: "AI Automation",
    serviceDesc4:
      "Automate your business operations with AI — save time and scale faster.",
    serviceItem4a: "WhatsApp & Chatbot Systems",
    serviceItem4b: "Business Workflow Automation",
    serviceItem4c: "AI Customer Support",
    serviceItem4d: "Systems & API Integration",
    serviceCta4: "Automate My Business",
    workTag: "Our Work",
    workTitle: "Results That Speak<br /><em>Louder Than Promises.</em>",
    caseTag1: "Web Dev",
    caseTitle1: "Shopify Store — Fashion Brand",
    caseProblemLabel: "Problem:",
    caseSolutionLabel: "Solution:",
    caseProblemText1: "No online store, losing sales to competitors.",
    caseSolutionText1: "Custom Shopify store with payment integration.",
    caseResult1: "+65% Sales",
    caseResultText1: "in the first 45 days after launch",
    caseTag2: "Paid Ads",
    caseTitle2: "Meta Ads — Medical Clinic",
    caseProblemText2: "Zero online leads, empty appointment slots.",
    caseSolutionText2: "Meta Ads + Landing Page + WhatsApp automation.",
    caseResult2: "150+ Leads",
    caseResultText2: "generated in the first 30 days",
    caseTag3: "AI Automation",
    caseTitle3: "WhatsApp Bot — Restaurant Chain",
    caseProblemText3: "Team overwhelmed with customer inquiries.",
    caseSolutionText3: "AI WhatsApp bot handling orders & bookings.",
    caseResult3: "80% Less",
    caseResultText3: "manual customer support time saved",
    caseLink: "View Case Study",
    caseSeeAll: "See All Case Studies",
    processTag: "How We Work",
    processTitle: "From Day One to Results<br />in <em>4 Simple Steps.</em>",
    processSub:
      "A clear, proven process — no surprises, no wasted time, just results.",
    processTitle1: "Discovery & Audit",
    processText1:
      "We deep dive into your business, competitors, and goals to build the right plan.",
    processTitle2: "Strategy & Planning",
    processText2:
      "We create a custom roadmap with clear deliverables, timelines, and expected results.",
    processTitle3: "Execution & Launch",
    processText3:
      "We build, design, and launch everything — keeping you updated at every step.",
    processTitle4: "Optimize & Scale",
    processText4:
      "We track results monthly, optimize performance, and scale what's working.",
    ctaBadge: "🎯 Free Strategy Session",
    ctaTitle: "Ready to Grow Your Business<br />in <em>UAE?</em>",
    ctaSub:
      "Book a free 30-minute strategy session. We'll review your business, identify the biggest opportunities, and tell you exactly what to do next.",
    ctaBtnText: "Book Your Free Strategy Call",
    ctaTrust1: "100% Free",
    ctaTrust2: "No credit card",
    ctaTrust3: "Response in 24 hours",
    contactTag: "Get In Touch",
    contactTitle: "Let's Build Something<br /><em>Great Together.</em>",
    contactSub:
      "Tell us about your business and what you need. We'll get back to you within 24 hours with a clear plan.",
    contactWhatsapp: "WhatsApp",
    contactEmail: "Email",
    contactWebsite: "Website",
    contactLocation: "Location",
    contactLocationText: "Dubai, United Arab Emirates ",
    mapText: "Dubai, UAE",
    formTitle: "Send Us a Message",
    labelName: "Your Name",
    labelBusiness: "Business Name",
    labelContact: "Email or Phone Number",
    labelService: "Which Service Do You Need?",
    selectDefault: "Select a service",
    selectWeb: "Web Development",
    selectAds: "Paid Advertising",
    selectSocial: "Social Media Design",
    selectAi: "AI Automation",
    selectFull: "Full Package (All Services)",
    labelMessage: "Tell Us About Your Project",
    submitBtn: "Send Message",
    footerTagline:
      "Dubai's digital growth agency — websites, ads, social media, and AI automation.",
    footerServices: "Services",
    footerCompany: "Company",
    footerHello: "Say Hello",
    footerWeb: "Web Development",
    footerAds: "Paid Advertising",
    footerSocial: "Social Media Design",
    footerAi: "AI Automation",
    footerAbout: "About Us",
    footerWork: "Our Work",
    footerProcess: "Process",
    footerBlog: "Blog",
    footerContact: "Contact",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Service",
    footerCredit:
      "<span>2026MindBox</span> — Website created by Ahmed El Gamal",
  },
  ar: {
    pageTitle: "مايند بوكس بورتال — وكالة النمو الرقمي في الإمارات",
    metaDescription:
      "ميند بوكس بورتال — تطوير مواقع، إعلانات مدفوعة، تصميم سوشيال ميديا، وأتمتة بالذكاء الاصطناعي للشركات في الإمارات",
    metaKeywords:
      "ميند بوكس بورتال, تصميم مواقع دبي, إعلانات مدفوعة دبي, تصميم سوشيال ميديا دبي, أتمتة ذكاء اصطناعي الإمارات",
    ogTitle: "ميند بوكس بورتال — وكالة النمو الرقمي في دبي",
    ogDescription:
      "تطوير مواقع، إعلانات مدفوعة، تصميم سوشيال ميديا، وأتمتة بالذكاء الاصطناعي للشركات في الإمارات",
    langBtn: "العربية",
    navHome: "الرئيسية",
    navServices: "الخدمات",
    navWork: "أعمالنا",
    navProcess: "العملية",
    navContact: "اتصل بنا",
    ctaBtn: "احصل على استراتيجية مجانية",
    mobileHome: "الرئيسية",
    mobileServices: "الخدمات",
    mobileWork: "أعمالنا",
    mobileProcess: "العملية",
    mobileContact: "اتصل بنا",
    mobileCta: "احصل على استراتيجية مجانية",
    heroTag: "وكالة النمو الرقمي في الإمارات ",
    heroH1: "نحن نبني أنظمة رقمية<br />تنمي <em>أعمالك.</em>",
    heroSub:
      "تطوير مواقع، إعلانات مدفوعة، محتوى سوشيال ميديا، وأتمتة بالذكاء الاصطناعي — كل ما تحتاجه أعمالك للسيطرة على الإنترنت في الإمارات.",
    heroCta: "احصل على استراتيجية مجانية",
    heroServicesBtn: "خدماتنا",
    heroTrust: "موثوق من قبل الشركات الناشئة والشركات في جميع أنحاء الإمارات ",
    statProjects: "مشاريع منجزة",
    statClients: "عملاء سعداء",
    statSatisfaction: "رضا العملاء",
    statLocation: "مقرنا دبي",
    servicesTag: "ماذا نقدم",
    servicesTitle: "4 خدمات. <em>وكالة واحدة.</em>",
    servicesSub:
      "نركز على أربع خدمات أساسية تعمل معاً لتنمية أعمالك — لا حشو، لا ميزانية ضائعة، فقط نتائج قابلة للقياس.",
    serviceTitle1: "تطوير المواقع",
    serviceDesc1:
      "مواقع سريعة واحترافية ومتاجر إلكترونية تحول الزوار إلى عملاء.",
    serviceItem1a: "كود مخصص (HTML/CSS/JS)",
    serviceItem1b: "مواقع ووردبريس",
    serviceItem1c: "متاجر شوبيفاي",
    serviceItem1d: "دمج بوابات الدفع",
    serviceCta1: "ابدأ موقعك",
    serviceTitle2: "الإعلانات المدفوعة",
    serviceDesc2:
      "حملات إعلانية عالية الأداء تجلب لك عملاء حقيقيين ومبيعات — وليس مجرد نقاط.",
    serviceItem2a: "إعلانات ميتا (فيسبوك وانستغرام)",
    serviceItem2b: "إعلانات جوجل",
    serviceItem2c: "إعلانات تيك توك",
    serviceItem2d: "تتبع العائد وتحسين الأداء",
    serviceCta2: "أطلق إعلاناتك",
    serviceTitle3: "تصميم سوشيال ميديا",
    serviceDesc3: "محتوى يجذب الانتباه يبني علامتك التجارية ويزيد التفاعل.",
    serviceItem3a: "منشورات انستغرام وتيك توك",
    serviceItem3b: "قوالب ستوريز وريلز",
    serviceItem3c: "هوية بصرية للعلامة التجارية",
    serviceItem3d: "تقويم محتوى شهري",
    serviceCta3: "صمم محتواي",
    serviceTitle4: "أتمتة الذكاء الاصطناعي",
    serviceDesc4:
      "أتمتة عمليات عملك بالذكاء الاصطناعي — وفر الوقت وتوسع بشكل أسرع.",
    serviceItem4a: "بوتات واتساب وروبوتات محادثة",
    serviceItem4b: "أتمتة سير العمل",
    serviceItem4c: "دعم عملاء بالذكاء الاصطناعي",
    serviceItem4d: "دمج الأنظمة وAPIs",
    serviceCta4: "أتمتة أعمالي",
    workTag: "أعمالنا",
    workTitle: "نتائج تتحدث<br /><em>أعلى من الوعود.</em>",
    caseTag1: "تطوير مواقع",
    caseTitle1: "متجر شوبيفاي — علامة تجارية للأزياء",
    caseProblemLabel: "المشكلة:",
    caseSolutionLabel: "الحل:",
    caseProblemText1: "لا يوجد متجر إلكتروني، خسارة مبيعات للمنافسين.",
    caseSolutionText1: "متجر شوبيفاي مخصص مع دمج بوابات الدفع.",
    caseResult1: "+65% مبيعات",
    caseResultText1: "في أول 45 يوماً بعد الإطلاق",
    caseTag2: "إعلانات",
    caseTitle2: "إعلانات ميتا — عيادة طبية",
    caseProblemText2: "صفر عملاء محتملين عبر الإنترنت، مواعيد فارغة.",
    caseSolutionText2: "إعلانات ميتا + صفحة هبوط + أتمتة واتساب.",
    caseResult2: "+150 عميل محتمل",
    caseResultText2: "تم توليدهم في أول 30 يوماً",
    caseTag3: "أتمتة ذكاء اصطناعي",
    caseTitle3: "بوت واتساب — سلسلة مطاعم",
    caseProblemText3: "الفريق غارق في استفسارات العملاء.",
    caseSolutionText3: "بوت واتساب بالذكاء الاصطناعي يدير الطلبات والحجوزات.",
    caseResult3: "أقل بنسبة 80%",
    caseResultText3: "من وقت دعم العملاء اليدوي",
    caseLink: "عرض دراسة الحالة",
    caseSeeAll: "جميع دراسات الحالة",
    processTag: "كيف نعمل",
    processTitle: "من اليوم الأول إلى النتائج<br />في <em>4 خطوات بسيطة.</em>",
    processSub: "عملية واضحة ومثبتة — لا مفاجآت، لا وقت ضائع، فقط نتائج.",
    processTitle1: "الاكتشاف والتدقيق",
    processText1: "نغوص في عملك ومنافسيك وأهدافك لبناء الخطة المناسبة.",
    processTitle2: "الاستراتيجية والتخطيط",
    processText2: "ننشئ خريطة طريق مخصصة مع مخرجات وجداول زمنية ونتائج متوقعة.",
    processTitle3: "التنفيذ والإطلاق",
    processText3: "نبني ونصمم ونطلق كل شيء — ونبقيك على اطلاع في كل خطوة.",
    processTitle4: "التحسين والتوسع",
    processText4: "نتتبع النتائج شهرياً، ونحسن الأداء، ونوسع ما ينجح.",
    ctaBadge: "🎯 جلسة استراتيجية مجانية",
    ctaTitle: "مستعد لتنمية أعمالك<br />في <em>الإمارات</em>",
    ctaSub:
      "احجز جلسة استراتيجية مجانية لمدة 30 دقيقة. سنراجع عملك ونحدد أكبر الفرص ونخبرك بالضبط ماذا تفعل بعد ذلك.",
    ctaBtnText: "احجز جلسة الاستراتيجية المجانية",
    ctaTrust1: "مجانية 100%",
    ctaTrust2: "بدون بطاقة ائتمان",
    ctaTrust3: "رد خلال 24 ساعة",
    contactTag: "تواصل معنا",
    contactTitle: "لنبني شيئاً<br /><em>رائعاً معاً.</em>",
    contactSub: "أخبرنا عن عملك وما تحتاجه. سنرد عليك خلال 24 ساعة بخطة واضحة.",
    contactWhatsapp: "واتساب",
    contactEmail: "البريد الإلكتروني",
    contactWebsite: "الموقع",
    contactLocation: "الموقع",
    contactLocationText: "دبي، الإمارات العربية المتحدة ",
    mapText: "دبي، الإمارات",
    formTitle: "أرسل لنا رسالة",
    labelName: "الاسم",
    labelBusiness: "اسم الشركة",
    labelContact: "البريد الإلكتروني أو رقم الهاتف",
    labelService: "ما الخدمة التي تحتاجها؟",
    selectDefault: "اختر خدمة",
    selectWeb: "تطوير مواقع",
    selectAds: "إعلانات مدفوعة",
    selectSocial: "تصميم سوشيال ميديا",
    selectAi: "أتمتة بالذكاء الاصطناعي",
    selectFull: "حزمة كاملة (جميع الخدمات)",
    labelMessage: "أخبرنا عن مشروعك",
    submitBtn: "إرسال رسالة",
    footerTagline:
      "وكالة النمو الرقمي في دبي — مواقع، إعلانات، سوشيال ميديا، وأتمتة بالذكاء الاصطناعي.",
    footerServices: "الخدمات",
    footerCompany: "الشركة",
    footerHello: "راسلنا",
    footerWeb: "تطوير مواقع",
    footerAds: "إعلانات مدفوعة",
    footerSocial: "تصميم سوشيال ميديا",
    footerAi: "أتمتة بالذكاء الاصطناعي",
    footerAbout: "من نحن",
    footerWork: "أعمالنا",
    footerProcess: "العملية",
    footerBlog: "مدونة",
    footerContact: "اتصل بنا",
    footerCopy: "© 2026 ميند بوكس بورتال. جميع الحقوق محفوظة.",
    footerPrivacy: "سياسة الخصوصية",
    footerTerms: "شروط الخدمة",
    footerCredit:
      "<span>2026MindBox</span> — تم إنشاء الموقع بواسطة أحمـد الجمـــل",
  },
};

let currentLang = "en";

function switchLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  document.documentElement.lang = lang === "ar" ? "ar" : "en";
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  if (lang === "ar") {
    document.body.classList.add("rtl");
  } else {
    document.body.classList.remove("rtl");
  }

  document.title = t.pageTitle;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", t.metaDescription);
  document
    .querySelector('meta[name="keywords"]')
    .setAttribute("content", t.metaKeywords);
  document
    .querySelector('meta[property="og:title"]')
    .setAttribute("content", t.ogTitle);
  document
    .querySelector('meta[property="og:description"]')
    .setAttribute("content", t.ogDescription);

  document.querySelector(".lang-btn-text").textContent = t.langBtn;
  document
    .querySelectorAll(".mobile-lang-text")
    .forEach((el) => (el.textContent = t.langBtn));

  document
    .querySelectorAll(".nav-home")
    .forEach((el) => (el.textContent = t.navHome));
  document
    .querySelectorAll(".nav-services")
    .forEach((el) => (el.textContent = t.navServices));
  document
    .querySelectorAll(".nav-work")
    .forEach((el) => (el.textContent = t.navWork));
  document
    .querySelectorAll(".nav-process")
    .forEach((el) => (el.textContent = t.navProcess));
  document
    .querySelectorAll(".nav-contact")
    .forEach((el) => (el.textContent = t.navContact));
  document
    .querySelectorAll(".cta-btn-text")
    .forEach((el) => (el.textContent = t.ctaBtn));

  document
    .querySelectorAll(".mobile-nav-home")
    .forEach((el) => (el.textContent = t.mobileHome));
  document
    .querySelectorAll(".mobile-nav-services")
    .forEach((el) => (el.textContent = t.mobileServices));
  document
    .querySelectorAll(".mobile-nav-work")
    .forEach((el) => (el.textContent = t.mobileWork));
  document
    .querySelectorAll(".mobile-nav-process")
    .forEach((el) => (el.textContent = t.mobileProcess));
  document
    .querySelectorAll(".mobile-nav-contact")
    .forEach((el) => (el.textContent = t.mobileContact));
  document
    .querySelectorAll(".mobile-cta")
    .forEach((el) => (el.textContent = t.mobileCta));

  document
    .querySelectorAll(".hero-tag-text")
    .forEach((el) => (el.textContent = t.heroTag));
  document
    .querySelectorAll("#hero-title")
    .forEach((el) => (el.innerHTML = t.heroH1));
  document
    .querySelectorAll(".hero-sub")
    .forEach((el) => (el.textContent = t.heroSub));
  document
    .querySelectorAll(".hero-cta-btn")
    .forEach(
      (el) =>
        (el.innerHTML = `<i class="fa-solid fa-rocket"></i> ${t.heroCta}`),
    );
  document
    .querySelectorAll(".hero-services-btn")
    .forEach(
      (el) =>
        (el.innerHTML = `<i class="fa-solid fa-eye"></i> ${t.heroServicesBtn}`),
    );
  document
    .querySelectorAll(".hero-trust-text")
    .forEach((el) => (el.textContent = t.heroTrust));

  document
    .querySelectorAll(".stat-projects")
    .forEach((el) => (el.textContent = t.statProjects));
  document
    .querySelectorAll(".stat-clients")
    .forEach((el) => (el.textContent = t.statClients));
  document
    .querySelectorAll(".stat-satisfaction")
    .forEach((el) => (el.textContent = t.statSatisfaction));
  document
    .querySelectorAll(".stat-location")
    .forEach((el) => (el.textContent = t.statLocation));

  document
    .querySelectorAll(".services-tag")
    .forEach((el) => (el.textContent = t.servicesTag));
  document
    .querySelectorAll("#services-title")
    .forEach((el) => (el.innerHTML = t.servicesTitle));
  document
    .querySelectorAll(".services-sub")
    .forEach((el) => (el.textContent = t.servicesSub));

  document
    .querySelectorAll(".service-title-1")
    .forEach((el) => (el.textContent = t.serviceTitle1));
  document
    .querySelectorAll(".service-desc-1")
    .forEach((el) => (el.textContent = t.serviceDesc1));
  document
    .querySelectorAll(".service-item-1a")
    .forEach((el) => (el.textContent = t.serviceItem1a));
  document
    .querySelectorAll(".service-item-1b")
    .forEach((el) => (el.textContent = t.serviceItem1b));
  document
    .querySelectorAll(".service-item-1c")
    .forEach((el) => (el.textContent = t.serviceItem1c));
  document
    .querySelectorAll(".service-item-1d")
    .forEach((el) => (el.textContent = t.serviceItem1d));
  document
    .querySelectorAll(".service-cta-1")
    .forEach(
      (el) =>
        (el.innerHTML = `${t.serviceCta1} <i class="fa-solid fa-arrow-right"></i>`),
    );

  document
    .querySelectorAll(".service-title-2")
    .forEach((el) => (el.textContent = t.serviceTitle2));
  document
    .querySelectorAll(".service-desc-2")
    .forEach((el) => (el.textContent = t.serviceDesc2));
  document
    .querySelectorAll(".service-item-2a")
    .forEach((el) => (el.textContent = t.serviceItem2a));
  document
    .querySelectorAll(".service-item-2b")
    .forEach((el) => (el.textContent = t.serviceItem2b));
  document
    .querySelectorAll(".service-item-2c")
    .forEach((el) => (el.textContent = t.serviceItem2c));
  document
    .querySelectorAll(".service-item-2d")
    .forEach((el) => (el.textContent = t.serviceItem2d));
  document
    .querySelectorAll(".service-cta-2")
    .forEach(
      (el) =>
        (el.innerHTML = `${t.serviceCta2} <i class="fa-solid fa-arrow-right"></i>`),
    );

  document
    .querySelectorAll(".service-title-3")
    .forEach((el) => (el.textContent = t.serviceTitle3));
  document
    .querySelectorAll(".service-desc-3")
    .forEach((el) => (el.textContent = t.serviceDesc3));
  document
    .querySelectorAll(".service-item-3a")
    .forEach((el) => (el.textContent = t.serviceItem3a));
  document
    .querySelectorAll(".service-item-3b")
    .forEach((el) => (el.textContent = t.serviceItem3b));
  document
    .querySelectorAll(".service-item-3c")
    .forEach((el) => (el.textContent = t.serviceItem3c));
  document
    .querySelectorAll(".service-item-3d")
    .forEach((el) => (el.textContent = t.serviceItem3d));
  document
    .querySelectorAll(".service-cta-3")
    .forEach(
      (el) =>
        (el.innerHTML = `${t.serviceCta3} <i class="fa-solid fa-arrow-right"></i>`),
    );

  document
    .querySelectorAll(".service-title-4")
    .forEach((el) => (el.textContent = t.serviceTitle4));
  document
    .querySelectorAll(".service-desc-4")
    .forEach((el) => (el.textContent = t.serviceDesc4));
  document
    .querySelectorAll(".service-item-4a")
    .forEach((el) => (el.textContent = t.serviceItem4a));
  document
    .querySelectorAll(".service-item-4b")
    .forEach((el) => (el.textContent = t.serviceItem4b));
  document
    .querySelectorAll(".service-item-4c")
    .forEach((el) => (el.textContent = t.serviceItem4c));
  document
    .querySelectorAll(".service-item-4d")
    .forEach((el) => (el.textContent = t.serviceItem4d));
  document
    .querySelectorAll(".service-cta-4")
    .forEach(
      (el) =>
        (el.innerHTML = `${t.serviceCta4} <i class="fa-solid fa-arrow-right"></i>`),
    );

  document
    .querySelectorAll(".work-tag")
    .forEach((el) => (el.textContent = t.workTag));
  document
    .querySelectorAll("#work-title")
    .forEach((el) => (el.innerHTML = t.workTitle));

  document
    .querySelectorAll(".case-tag-1")
    .forEach((el) => (el.textContent = t.caseTag1));
  document
    .querySelectorAll(".case-title-1")
    .forEach((el) => (el.textContent = t.caseTitle1));
  document
    .querySelectorAll(".case-problem-label")
    .forEach((el) => (el.textContent = t.caseProblemLabel));
  document
    .querySelectorAll(".case-solution-label")
    .forEach((el) => (el.textContent = t.caseSolutionLabel));
  document
    .querySelectorAll(".case-problem-text-1")
    .forEach((el) => (el.textContent = t.caseProblemText1));
  document
    .querySelectorAll(".case-solution-text-1")
    .forEach((el) => (el.textContent = t.caseSolutionText1));
  document
    .querySelectorAll(".case-result-text-1")
    .forEach((el) => (el.textContent = t.caseResultText1));

  document
    .querySelectorAll(".case-tag-2")
    .forEach((el) => (el.textContent = t.caseTag2));
  document
    .querySelectorAll(".case-title-2")
    .forEach((el) => (el.textContent = t.caseTitle2));
  document
    .querySelectorAll(".case-problem-text-2")
    .forEach((el) => (el.textContent = t.caseProblemText2));
  document
    .querySelectorAll(".case-solution-text-2")
    .forEach((el) => (el.textContent = t.caseSolutionText2));
  document
    .querySelectorAll(".case-result-text-2")
    .forEach((el) => (el.textContent = t.caseResultText2));

  document
    .querySelectorAll(".case-tag-3")
    .forEach((el) => (el.textContent = t.caseTag3));
  document
    .querySelectorAll(".case-title-3")
    .forEach((el) => (el.textContent = t.caseTitle3));
  document
    .querySelectorAll(".case-problem-text-3")
    .forEach((el) => (el.textContent = t.caseProblemText3));
  document
    .querySelectorAll(".case-solution-text-3")
    .forEach((el) => (el.textContent = t.caseSolutionText3));
  document
    .querySelectorAll(".case-result-text-3")
    .forEach((el) => (el.textContent = t.caseResultText3));

  document
    .querySelectorAll(".case-link")
    .forEach(
      (el) =>
        (el.innerHTML = `${t.caseLink} <i class="fa-solid fa-arrow-right"></i>`),
    );
  document
    .querySelectorAll(".case-see-all-btn")
    .forEach(
      (el) =>
        (el.innerHTML = `${t.caseSeeAll} <i class="fa-solid fa-arrow-right"></i>`),
    );

  document
    .querySelectorAll(".process-tag")
    .forEach((el) => (el.textContent = t.processTag));
  document
    .querySelectorAll("#process-title")
    .forEach((el) => (el.innerHTML = t.processTitle));
  document
    .querySelectorAll(".process-sub")
    .forEach((el) => (el.textContent = t.processSub));
  document
    .querySelectorAll(".process-title-1")
    .forEach((el) => (el.textContent = t.processTitle1));
  document
    .querySelectorAll(".process-text-1")
    .forEach((el) => (el.textContent = t.processText1));
  document
    .querySelectorAll(".process-title-2")
    .forEach((el) => (el.textContent = t.processTitle2));
  document
    .querySelectorAll(".process-text-2")
    .forEach((el) => (el.textContent = t.processText2));
  document
    .querySelectorAll(".process-title-3")
    .forEach((el) => (el.textContent = t.processTitle3));
  document
    .querySelectorAll(".process-text-3")
    .forEach((el) => (el.textContent = t.processText3));
  document
    .querySelectorAll(".process-title-4")
    .forEach((el) => (el.textContent = t.processTitle4));
  document
    .querySelectorAll(".process-text-4")
    .forEach((el) => (el.textContent = t.processText4));

  document
    .querySelectorAll(".cta-badge-text")
    .forEach((el) => (el.textContent = t.ctaBadge));
  document
    .querySelectorAll(".cta-title-text")
    .forEach((el) => (el.innerHTML = t.ctaTitle));
  document
    .querySelectorAll(".cta-sub-text")
    .forEach((el) => (el.textContent = t.ctaSub));
  document
    .querySelectorAll(".cta-btn-text")
    .forEach(
      (el) =>
        (el.innerHTML = `<i class="fa-solid fa-calendar-check"></i> ${t.ctaBtnText}`),
    );
  document
    .querySelectorAll(".cta-trust-1")
    .forEach((el) => (el.textContent = t.ctaTrust1));
  document
    .querySelectorAll(".cta-trust-2")
    .forEach((el) => (el.textContent = t.ctaTrust2));
  document
    .querySelectorAll(".cta-trust-3")
    .forEach((el) => (el.textContent = t.ctaTrust3));

  document
    .querySelectorAll(".contact-tag")
    .forEach((el) => (el.textContent = t.contactTag));
  document
    .querySelectorAll("#contact-title")
    .forEach((el) => (el.innerHTML = t.contactTitle));
  document
    .querySelectorAll(".contact-sub")
    .forEach((el) => (el.textContent = t.contactSub));
  document
    .querySelectorAll(".contact-whatsapp-label")
    .forEach((el) => (el.textContent = t.contactWhatsapp));
  document
    .querySelectorAll(".contact-email-label")
    .forEach((el) => (el.textContent = t.contactEmail));
  document
    .querySelectorAll(".contact-website-label")
    .forEach((el) => (el.textContent = t.contactWebsite));
  document
    .querySelectorAll(".contact-location-label")
    .forEach((el) => (el.textContent = t.contactLocation));
  document
    .querySelectorAll(".contact-location-text")
    .forEach((el) => (el.textContent = t.contactLocationText));
  document
    .querySelectorAll(".map-text")
    .forEach((el) => (el.textContent = t.mapText));
  document
    .querySelectorAll(".form-title-text")
    .forEach((el) => (el.textContent = t.formTitle));
  document
    .querySelectorAll(".label-name")
    .forEach((el) => (el.textContent = t.labelName));
  document
    .querySelectorAll(".label-business")
    .forEach((el) => (el.textContent = t.labelBusiness));
  document
    .querySelectorAll(".label-contact")
    .forEach((el) => (el.textContent = t.labelContact));
  document
    .querySelectorAll(".label-service")
    .forEach((el) => (el.textContent = t.labelService));
  document
    .querySelectorAll(".select-default")
    .forEach((el) => (el.textContent = t.selectDefault));
  document
    .querySelectorAll(".select-web")
    .forEach((el) => (el.textContent = t.selectWeb));
  document
    .querySelectorAll(".select-ads")
    .forEach((el) => (el.textContent = t.selectAds));
  document
    .querySelectorAll(".select-social")
    .forEach((el) => (el.textContent = t.selectSocial));
  document
    .querySelectorAll(".select-ai")
    .forEach((el) => (el.textContent = t.selectAi));
  document
    .querySelectorAll(".select-full")
    .forEach((el) => (el.textContent = t.selectFull));
  document
    .querySelectorAll(".label-message")
    .forEach((el) => (el.textContent = t.labelMessage));
  document
    .querySelectorAll(".submit-btn-text")
    .forEach(
      (el) =>
        (el.innerHTML = `<i class="fa-solid fa-paper-plane"></i> ${t.submitBtn}`),
    );

  document
    .querySelectorAll(".footer-tagline-text")
    .forEach((el) => (el.textContent = t.footerTagline));
  document
    .querySelectorAll(".footer-services-title")
    .forEach((el) => (el.textContent = t.footerServices));
  document
    .querySelectorAll(".footer-company-title")
    .forEach((el) => (el.textContent = t.footerCompany));
  document
    .querySelectorAll(".footer-hello-title")
    .forEach((el) => (el.textContent = t.footerHello));
  document
    .querySelectorAll(".footer-link-web")
    .forEach(
      (el) =>
        (el.innerHTML = `<i class="fa-solid fa-chevron-right"></i> ${t.footerWeb}`),
    );
  document
    .querySelectorAll(".footer-link-ads")
    .forEach(
      (el) =>
        (el.innerHTML = `<i class="fa-solid fa-chevron-right"></i> ${t.footerAds}`),
    );
  document
    .querySelectorAll(".footer-link-social")
    .forEach(
      (el) =>
        (el.innerHTML = `<i class="fa-solid fa-chevron-right"></i> ${t.footerSocial}`),
    );
  document
    .querySelectorAll(".footer-link-ai")
    .forEach(
      (el) =>
        (el.innerHTML = `<i class="fa-solid fa-chevron-right"></i> ${t.footerAi}`),
    );
  document
    .querySelectorAll(".footer-link-about")
    .forEach(
      (el) =>
        (el.innerHTML = `<i class="fa-solid fa-chevron-right"></i> ${t.footerAbout}`),
    );
  document
    .querySelectorAll(".footer-link-work")
    .forEach(
      (el) =>
        (el.innerHTML = `<i class="fa-solid fa-chevron-right"></i> ${t.footerWork}`),
    );
  document
    .querySelectorAll(".footer-link-process")
    .forEach(
      (el) =>
        (el.innerHTML = `<i class="fa-solid fa-chevron-right"></i> ${t.footerProcess}`),
    );
  document
    .querySelectorAll(".footer-link-blog")
    .forEach(
      (el) =>
        (el.innerHTML = `<i class="fa-solid fa-chevron-right"></i> ${t.footerBlog}`),
    );
  document
    .querySelectorAll(".footer-link-contact")
    .forEach(
      (el) =>
        (el.innerHTML = `<i class="fa-solid fa-chevron-right"></i> ${t.footerContact}`),
    );
  document
    .querySelectorAll(".footer-copy-text")
    .forEach((el) => (el.textContent = t.footerCopy));
  document
    .querySelectorAll(".footer-privacy")
    .forEach((el) => (el.textContent = t.footerPrivacy));
  document
    .querySelectorAll(".footer-terms")
    .forEach((el) => (el.textContent = t.footerTerms));
  document
    .querySelectorAll(".footer-credit-text")
    .forEach((el) => (el.innerHTML = t.footerCredit));

  localStorage.setItem("mindbox_language", lang);
}

function loadSavedLanguage() {
  const savedLang = localStorage.getItem("mindbox_language");
  if (savedLang && (savedLang === "en" || savedLang === "ar")) {
    switchLanguage(savedLang);
  } else {
    switchLanguage("en");
  }
}

function toggleMobileLangDropdown() {
  const dropdown = document.getElementById("mobileLangDropdown");
  const currentBtn = document.querySelector(".mobile-lang-current");
  if (dropdown && currentBtn) {
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
      currentBtn.classList.remove("open");
    } else {
      dropdown.classList.add("show");
      currentBtn.classList.add("open");
    }
  }
}

document.addEventListener("click", function (event) {
  const switcher = document.querySelector(".mobile-lang-switcher");
  const dropdown = document.getElementById("mobileLangDropdown");
  const currentBtn = document.querySelector(".mobile-lang-current");
  if (switcher && !switcher.contains(event.target)) {
    if (dropdown && dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
      if (currentBtn) currentBtn.classList.remove("open");
    }
  }
});

const scrollProgress = document.getElementById("scrollProgress");
window.addEventListener("scroll", () => {
  const pct =
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;
  scrollProgress.style.width = pct + "%";
});

window.addEventListener("scroll", () => {
  document
    .getElementById("header")
    .classList.toggle("scrolled", window.scrollY > 50);
});

const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileNav = document.getElementById("mobileNav");

hamburgerBtn.addEventListener("click", () => {
  mobileNav.classList.contains("open") ? closeMobileNav() : openMobileNav();
});

function openMobileNav() {
  mobileNav.classList.add("open");
  hamburgerBtn.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeMobileNav() {
  mobileNav.classList.remove("open");
  hamburgerBtn.classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMobileNav();
});

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.1 },
);
document.querySelectorAll(".fade-up").forEach((el) => fadeObserver.observe(el));

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting && e.target.dataset.count) {
        animateCounter(e.target);
        counterObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.5 },
);
document
  .querySelectorAll("[data-count]")
  .forEach((el) => counterObserver.observe(el));

function animateCounter(el) {
  const target = parseInt(el.dataset.count);
  const suffix = el.dataset.count == "100" ? "%" : "+";
  const step = target / (1800 / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current) + suffix;
  }, 16);
}

const allSections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".main-nav a");

window.addEventListener("scroll", () => {
  let current = "";
  allSections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach((l) => {
    l.classList.toggle("active", l.getAttribute("href") === "#" + current);
  });
});

function handleSubmit(btn) {
  btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${currentLang === "ar" ? "جاري الإرسال..." : "Sending..."}`;
  btn.style.opacity = "0.75";
  setTimeout(() => {
    btn.innerHTML = `<i class="fa-solid fa-check"></i> ${currentLang === "ar" ? "تم الإرسال! سنرد خلال 24 ساعة" : "Message Sent! We'll respond in 24h"}`;
    btn.style.background = "#2a9d8f";
    btn.style.opacity = "1";
  }, 1500);
}

window.addEventListener("load", () => {
  document
    .querySelectorAll("#hero .fade-up")
    .forEach((el) => el.classList.add("visible"));
  loadSavedLanguage();
});

// Canvas Animation
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");
let W, H, particles, shootingStars;
let mouse = { x: null, y: null };

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});
window.addEventListener("mouseleave", () => {
  mouse.x = null;
  mouse.y = null;
});

function resizeCanvas() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
  initParticles();
}

class Particle {
  constructor() {
    this.reset(true);
  }
  reset(initial) {
    this.x = Math.random() * W;
    this.y = initial ? Math.random() * H : H + 10;
    this.size = Math.random() * 1.5 + 0.2;
    this.speedX = (Math.random() - 0.5) * 0.18;
    this.speedY = -(Math.random() * 0.25 + 0.06);
    this.life = initial ? Math.random() * 300 : 0;
    this.maxLife = Math.random() * 300 + 180;
    const r = Math.random();
    this.color =
      r < 0.74
        ? "rgba(255,255,255,"
        : r < 0.89
          ? "rgba(230,57,70,"
          : "rgba(244,162,97,";
  }
  update() {
    this.life++;
    this.x += this.speedX;
    this.y += this.speedY;
    if (mouse.x !== null) {
      const dx = this.x - mouse.x,
        dy = this.y - mouse.y;
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
  constructor() {
    this.reset();
  }
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
      if (this.wait >= this.next) {
        this.active = true;
        this.wait = 0;
      }
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
  particles.forEach((p) => {
    p.update();
    p.draw();
  });
  shootingStars.forEach((s) => {
    s.update();
    s.draw();
  });
  requestAnimationFrame(animateBg);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
animateBg();
