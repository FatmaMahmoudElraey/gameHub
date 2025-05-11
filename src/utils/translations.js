// Simple translations for the navbar and common elements
const translations = {
  en: {
    navbar: {
      home: 'Home',
      myGames: 'My Games',
      createGame: 'Create Game',
      about: 'About',
      contact: 'Contact',
      profile: 'Profile',
      logout: 'Logout',
      login: 'Login',
      register: 'Register'
    },
    general: {
      appName: 'GameHub'
    },
    footer: {
      tagline: 'The ultimate gaming platform where players connect, compete, and create unforgettable gaming experiences.',
      quickLinks: 'Quick Links',
      resources: 'Resources',
      stayUpdated: 'Stay Updated',
      newsletterText: 'Subscribe to our newsletter for the latest updates and gaming news.',
      yourEmail: 'Your email',
      subscribe: 'Subscribe',
      allRightsReserved: 'All rights reserved.',
      home: 'Home',
      about: 'About Us',
      games: 'Games',
      contact: 'Contact',
      helpCenter: 'Help Center',
      faq: 'FAQ',
      termsOfService: 'Terms of Service',
      privacyPolicy: 'Privacy Policy',
      terms: 'Terms',
      privacy: 'Privacy',
      cookies: 'Cookies'
    },
    home: {
      hero: {
        title: 'Play, Compete, Win',
        subtitle: 'Join thousands of players in exciting challenges and games. Test your skills and climb the leaderboards!',
        getStarted: 'Get Started',
        login: 'Login'
      },
      popularGames: {
        title: 'Popular Games',
        wordPuzzle: {
          name: 'Word Puzzle',
          description: 'Challenge your vocabulary skills with this exciting word game',
          category: 'Puzzle'
        },
        mathChallenge: {
          name: 'Math Challenge',
          description: 'Test your quick math skills against others',
          category: 'Math'
        },
        triviaMaster: {
          name: 'Trivia Master',
          description: 'General knowledge quiz with thousands of questions',
          category: 'Quiz'
        }
      },
      features: {
        title: 'Why Choose GameHub?',
        subtitle: 'We offer the best gaming experience with fair competition and exciting rewards.',
        competitive: {
          title: 'Competitive',
          description: 'Compete against players of similar skill level in fair matches.'
        },
        variety: {
          title: 'Variety',
          description: 'Choose from dozens of different games across multiple categories.'
        },
        progress: {
          title: 'Progress',
          description: 'Track your stats and see your improvement over time.'
        }
      }
    }
  },
  ar: {
    navbar: {
      home: 'الرئيسية',
      myGames: 'ألعابي',
      createGame: 'إنشاء لعبة',
      about: 'من نحن',
      contact: 'اتصل بنا',
      profile: 'الملف الشخصي',
      logout: 'تسجيل الخروج',
      login: 'تسجيل الدخول',
      register: 'التسجيل'
    },
    general: {
      appName: 'مركز الألعاب'
    },
    footer: {
      tagline: 'منصة الألعاب المتميزة حيث يتواصل اللاعبون ويتنافسون وينشئون تجارب ألعاب لا تُنسى.',
      quickLinks: 'روابط سريعة',
      resources: 'مصادر',
      stayUpdated: 'ابق على اطلاع',
      newsletterText: 'اشترك في نشرتنا الإخبارية للحصول على آخر التحديثات وأخبار الألعاب.',
      yourEmail: 'بريدك الإلكتروني',
      subscribe: 'اشترك',
      allRightsReserved: 'جميع الحقوق محفوظة.',
      home: 'الرئيسية',
      about: 'من نحن',
      games: 'الألعاب',
      contact: 'اتصل بنا',
      helpCenter: 'مركز المساعدة',
      faq: 'الأسئلة الشائعة',
      termsOfService: 'شروط الخدمة',
      privacyPolicy: 'سياسة الخصوصية',
      terms: 'الشروط',
      privacy: 'الخصوصية',
      cookies: 'ملفات تعريف الارتباط'
    },
    home: {
      hero: {
        title: 'العب، تنافس، انتصر',
        subtitle: 'انضم إلى آلاف اللاعبين في تحديات وألعاب مثيرة. اختبر مهاراتك وتسلق قوائم المتصدرين!',
        getStarted: 'ابدأ الآن',
        login: 'تسجيل الدخول'
      },
      popularGames: {
        title: 'الألعاب الشائعة',
        wordPuzzle: {
          name: 'لغز الكلمات',
          description: 'تحدى مهارات المفردات لديك مع هذه اللعبة المثيرة للكلمات',
          category: 'لغز'
        },
        mathChallenge: {
          name: 'تحدي الرياضيات',
          description: 'اختبر مهاراتك الرياضية السريعة ضد الآخرين',
          category: 'رياضيات'
        },
        triviaMaster: {
          name: 'سيد المعلومات',
          description: 'اختبار المعرفة العامة مع آلاف الأسئلة',
          category: 'اختبار'
        }
      },
      features: {
        title: 'لماذا تختار مركز الألعاب؟',
        subtitle: 'نقدم أفضل تجربة ألعاب مع منافسة عادلة ومكافآت مثيرة.',
        competitive: {
          title: 'تنافسي',
          description: 'تنافس ضد لاعبين ذوي مستوى مهارة مماثل في مباريات عادلة.'
        },
        variety: {
          title: 'تنوع',
          description: 'اختر من بين عشرات الألعاب المختلفة عبر فئات متعددة.'
        },
        progress: {
          title: 'تقدم',
          description: 'تتبع إحصائياتك وشاهد تحسنك مع مرور الوقت.'
        }
      }
    }
  }
};

// Function to get translation
export const getTranslation = (key, language = 'en') => {
  // Split the key by dots (e.g., 'navbar.home' => ['navbar', 'home'])
  const parts = key.split('.');
  
  // Get the language object
  const langObj = translations[language] || translations.en;
  
  // Navigate through the object using the parts
  let result = langObj;
  for (const part of parts) {
    if (result && result[part] !== undefined) {
      result = result[part];
    } else {
      // If translation not found, return the last part of the key as fallback
      return parts[parts.length - 1];
    }
  }
  
  return result;
};

export default translations;
