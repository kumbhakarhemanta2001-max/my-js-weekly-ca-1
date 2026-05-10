const questions = [
  { 
    question: "আন্তর্জাতিক শ্রমিক দিবস কবে পালিত হয়?", 
    answer: "১ মে", 
    options: ["৩০ এপ্রিল", "১ মে", "২ মে", "৫ মে"],
    explanation: "⏺ দিবস (Day) → আন্তর্জাতিক শ্রমিক দিবস (International Labour Day) ⏺ তারিখ (Date) → ১ মে ⏺ উদ্দেশ্য (Aim) → শ্রমিকদের অধিকার ও কাজের প্রতি সম্মান জানানো"
  },

  { 
    question: "বিশ্ব প্রেস স্বাধীনতা দিবস কবে পালিত হয়?", 
    answer: "৩ মে", 
    options: ["২ মে", "৩ মে", "৪ মে", "৫ মে"],
    explanation: "⏺ দিবস (Day) → World Press Freedom Day ⏺ তারিখ (Date) → ৩ মে ⏺ উদ্দেশ্য (Aim) → সংবাদমাধ্যমের স্বাধীনতা রক্ষা ও সচেতনতা বৃদ্ধি"
  },

  { 
    question: "২০২৬ সালের আন্তর্জাতিক ধাত্রী দিবসের থিম কী?", 
    answer: "One Million More Midwives", 
    options: ["Healthy Mothers Healthy World", "Midwives for Future", "One Million More Midwives", "Care for Every Child"],
    explanation: "⏺ দিবস (Day) → International Day of the Midwife ⏺ থিম (Theme) → One Million More Midwives ⏺ উদ্দেশ্য (Aim) → মাতৃস্বাস্থ্য ও নবজাতকের যত্নে ধাত্রীদের অবদানকে সম্মান জানানো"
  },

  { 
    question: "World Asthma Day 2026 কবে পালিত হয়েছে?", 
    answer: "৫ মে", 
    options: ["১ মে", "৩ মে", "৫ মে", "৭ মে"],
    explanation: "⏺ দিবস (Day) → World Asthma Day 2026 ⏺ তারিখ (Date) → ৫ মে ⏺ ফোকাস (Focus) → রোগ নির্ণয়, চিকিৎসা ও প্রতিরোধ"
  },

  { 
    question: "UNFCCC-তে ভারত কোন সময়সীমার জন্য নতুন NDC জমা দিয়েছে?", 
    answer: "২০৩১-২০৩৫", 
    options: ["২০২৫-২০৩০", "২০৩০-২০৩৫", "২০৩১-২০৩৫", "২০৩৫-২০৪০"],
    explanation: "⏺ সংস্থা (Organisation) → UNFCCC ⏺ সময়সীমা (Period) → ২০৩১-২০৩৫ ⏺ বিষয় (Topic) → ভারতের নতুন জলবায়ু লক্ষ্য (NDCs)"
  },

  { 
    question: "ইউরোপের প্রথম সম্পূর্ণ সমন্বিত লিথিয়াম প্রকল্প কোথায় চালু হয়েছে?", 
    answer: "ফিনল্যান্ড", 
    options: ["নরওয়ে", "ফিনল্যান্ড", "সুইডেন", "ডেনমার্ক"],
    explanation: "⏺ দেশ (Country) → ফিনল্যান্ড ⏺ স্থান (Place) → Kokkola ⏺ প্রকল্প (Project) → Integrated Lithium Production & Processing Project"
  },

  { 
    question: "OPEC ও OPEC+ ছাড়ার ঘোষণা কোন দেশ দিয়েছে?", 
    answer: "UAE", 
    options: ["কাতার", "সৌদি আরব", "UAE", "কুয়েত"],
    explanation: "⏺ দেশ (Country) → UAE ⏺ সংস্থা (Organisation) → OPEC & OPEC+ ⏺ কার্যকর (Effective) → মে ২০২৬ থেকে"
  },

  { 
    question: "SIPRI রিপোর্ট অনুযায়ী ভারতের প্রতিরক্ষা ব্যয় কত বিলিয়ন ডলার?", 
    answer: "৯২.১", 
    options: ["৭৫.৩", "৮১.৪", "৯২.১", "১০০.৫"],
    explanation: "⏺ রিপোর্ট (Report) → SIPRI Report ⏺ প্রতিরক্ষা ব্যয় (Defence Spending) → ৯২.১ বিলিয়ন ডলার ⏺ র‍্যাঙ্ক (Rank) → বিশ্বে ৫ম"
  },

  { 
    question: "Mount Dukono আগ্নেয়গিরি কোন দেশে অবস্থিত?", 
    answer: "ইন্দোনেশিয়া", 
    options: ["জাপান", "ইন্দোনেশিয়া", "ফিলিপাইন", "চীন"],
    explanation: "⏺ আগ্নেয়গিরি (Volcano) → Mount Dukono ⏺ দেশ (Country) → ইন্দোনেশিয়া ⏺ দ্বীপ (Island) → Halmahera Island"
  },

  { 
    question: "লাক্ষাদ্বীপের কোন সমুদ্র সৈকত ব্লু ফ্ল্যাগ সার্টিফিকেট পেয়েছে?", 
    answer: "মিনিকয় থুন্ডি", 
    options: ["রাধানগর", "মিনিকয় থুন্ডি", "কোভালাম", "পুরী বিচ"],
    explanation: "⏺ সার্টিফিকেট (Certificate) → Blue Flag ⏺ সমুদ্র সৈকত (Beach) → Minicoy Thundi Beach ⏺ অঞ্চল (Region) → Lakshadweep"
  },

  { 
    question: "ADB কত বিলিয়ন ডলার বিনিয়োগের পরিকল্পনা ঘোষণা করেছে?", 
    answer: "৭০ বিলিয়ন", 
    options: ["৫০ বিলিয়ন", "৬০ বিলিয়ন", "৭০ বিলিয়ন", "৮০ বিলিয়ন"],
    explanation: "⏺ সংস্থা (Organisation) → Asian Development Bank (ADB) ⏺ বিনিয়োগ (Investment) → ৭০ বিলিয়ন ডলার ⏺ উদ্দেশ্য (Aim) → জলবায়ু পরিবর্তন মোকাবিলা ও পরিকাঠামো উন্নয়ন"
  },

  { 
    question: "World Press Freedom Index 2026 কোন বিষয়ের সঙ্গে সম্পর্কিত?", 
    answer: "সংবাদমাধ্যমের স্বাধীনতা", 
    options: ["অর্থনীতি", "সংবাদমাধ্যমের স্বাধীনতা", "জলবায়ু", "শিক্ষা"],
    explanation: "⏺ সূচক (Index) → World Press Freedom Index 2026 ⏺ বিষয় (Topic) → সংবাদমাধ্যমের স্বাধীনতা ⏺ প্রকাশক (Publisher) → Reporters Without Borders"
  },

  { 
    question: "ভারতের প্রথম ট্রান্সজেন্ডার আম্পায়ার কে?", 
    answer: "রিথিকা শ্রী", 
    options: ["সোহিনী দাস", "রিথিকা শ্রী", "অনন্যা পাল", "মেঘা রায়"],
    explanation: "⏺ ব্যক্তি (Person) → রিথিকা শ্রী ⏺ রাজ্য (State) → তামিলনাড়ু ⏺ কৃতিত্ব (Achievement) → ভারতের প্রথম ট্রান্সজেন্ডার আম্পায়ার"
  },

  { 
    question: "UPI-এর পূর্ণরূপ কী?", 
    answer: "Unified Payments Interface", 
    options: ["Unified Payment Interface", "Unified Payments Interface", "Universal Payment India", "United Payment Interface"],
    explanation: "⏺ পূর্ণরূপ (Full Form) → Unified Payments Interface ⏺ ব্যবস্থাপনা (Managed by) → NPCI ⏺ ব্যবহার (Use) → রিয়েল-টাইম ডিজিটাল পেমেন্ট"
  },

  { 
    question: "Barrier-Free Tolling System প্রথম কোথায় চালু হয়েছে?", 
    answer: "গুজরাট", 
    options: ["মহারাষ্ট্র", "গুজরাট", "কর্ণাটক", "দিল্লি"],
    explanation: "⏺ রাজ্য (State) → গুজরাট ⏺ প্রযুক্তি (Technology) → FASTag ও ANPR ⏺ উদ্দেশ্য (Aim) → বাধাহীন যান চলাচল"
  },

  { 
    question: "ভারতের প্রথম সম্পূর্ণ পেপারলেস বিচারব্যবস্থা কোন রাজ্যে চালু হয়েছে?", 
    answer: "সিকিম", 
    options: ["কেরালা", "সিকিম", "গুজরাট", "তামিলনাড়ু"],
    explanation: "⏺ রাজ্য (State) → সিকিম ⏺ ঘোষণা করেছেন (Announced by) → বিচারপতি সূর্য কান্ত ⏺ বৈশিষ্ট্য (Feature) → সম্পূর্ণ ডিজিটাল বিচারব্যবস্থা"
  },

  { 
    question: "ভারতীয় রেলওয়ে কততম বন্দে ভারত ট্রেন চালু করেছে?", 
    answer: "১০০তম", 
    options: ["৫০তম", "৭৫তম", "১০০তম", "১২০তম"],
    explanation: "⏺ ট্রেন (Train) → বন্দে ভারত এক্সপ্রেস ⏺ সংখ্যা (Number) → ১০০তম ⏺ সংস্থা (Organisation) → ভারতীয় রেলওয়ে"
  },

  { 
    question: "গঙ্গা এক্সপ্রেসওয়ে প্রকল্প কোন রাজ্যে অবস্থিত?", 
    answer: "উত্তরপ্রদেশ", 
    options: ["বিহার", "উত্তরপ্রদেশ", "মধ্যপ্রদেশ", "রাজস্থান"],
    explanation: "⏺ প্রকল্প (Project) → গঙ্গা এক্সপ্রেসওয়ে ⏺ রাজ্য (State) → উত্তরপ্রদেশ ⏺ উদ্বোধন করেছেন (Inaugurated by) → প্রধানমন্ত্রী নরেন্দ্র মোদী"
  },

  { 
    question: "RBI-এর নতুন ডেপুটি গভর্নর হিসেবে কে নিযুক্ত হয়েছেন?", 
    answer: "রোহিত জৈন", 
    options: ["শক্তিকান্ত দাস", "রোহিত জৈন", "সঞ্জয় মালহোত্রা", "এম রাজেশ্বর রাও"],
    explanation: "⏺ ব্যক্তি (Person) → রোহিত জৈন ⏺ পদ (Post) → RBI Deputy Governor ⏺ সংস্থা (Organisation) → Reserve Bank of India"
  },

  { 
    question: "Mission SAKSHAM কোন সংস্থা চালু করেছে?", 
    answer: "RBI", 
    options: ["SEBI", "NABARD", "RBI", "SBI"],
    explanation: "⏺ মিশন (Mission) → Mission SAKSHAM ⏺ সংস্থা (Organisation) → RBI ⏺ উদ্দেশ্য (Aim) → Urban Co-operative Banks-এ সুশাসন ও ঝুঁকি ব্যবস্থাপনা উন্নয়ন"
  }
];

function loadMCQ() {
    const container = document.getElementById('mcq-container');
    container.innerHTML = ""; // আগের কন্টেন্ট ক্লিয়ার করার জন্য
    
    questions.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'mcq-card';
        card.innerHTML = `
            <span class="q-text">${index + 1}. ${item.question}</span>
            <div class="options-grid">
                ${item.options.map(opt => `<div class="opt">${opt}</div>`).join('')}
            </div>
            <button class="ans-btn" onclick="toggleAns(${index})">
                <i class="fas fa-eye"></i> Answer & Explanation
            </button>
            <div id="ans-${index}" class="ans-content" style="display:none;">
                <div style="color: #2e7d32; margin-bottom: 8px;">
                    <strong>সঠিক উত্তর:</strong> ${item.answer}
                </div>
                <div style="font-size: 14px; color: var(--hk-muted); font-weight: normal; border-top: 1px solid #ddd; pt: 5px;">
                    <strong>ব্যাখ্যা:</strong> ${item.explanation || "এই প্রশ্নের কোনো ব্যাখ্যা নেই।"}
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function toggleAns(id) {
    const ansDiv = document.getElementById(`ans-${id}`);
    const btn = ansDiv.previousElementSibling;
    if (ansDiv.style.display === "none" || ansDiv.style.display === "") {
        ansDiv.style.display = "block";
        btn.innerHTML = '<i class="fas fa-eye-slash"></i> Hide';
    } else {
        ansDiv.style.display = "none";
        btn.innerHTML = '<i class="fas fa-eye"></i> Answer & Explanation';
    }
}

window.onload = loadMCQ;