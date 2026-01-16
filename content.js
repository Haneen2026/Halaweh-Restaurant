// Content configuration for Arabic Restaurant & Cafe landing page
const content = {
  ar: {
    // Header
    logoAlt: "مطعم ومقهى عربي",
    languageButton: "EN",

    // Hero Section
    heroTitle: "لمّتكم الدافية تبدأ من حلاوة",
    heroBuffetTimes: "بوفيه الغداء 3:00 مساءً • بوفيه العشاء 8:00 مساءً",
    heroDescription: "3 ساعات من الدفء والمذاق واللمة الحلوة",
    heroStoryText: "الشتا يحكي حكايات دافية… وريحة البوفيه تفتح القلب قبل الشهية.\nفي مطعم حلاوة، بنجمع العيلة حول طاولة مليانة دفء وضحك وذكريات.\n\nضحكات الأطفال، لمّة الأحباب، وأطباق تهمس: استمتع بكل لقمة.\nوهون… الجو أنقى، بلا تدخين ولا أرجيلة، عشان تكتمل اللمة براحة وطمأنينة.\n\nفي حلاوة، لمّتكم معنا…\nمش بس أحلى، أحلى بألف مرة.",
    heroButton: "احجز الآن",

    // About Section
    aboutTitle: "عن مطعمنا",
    aboutImageSrc: "assests/about.png",
    aboutImageAlt: "عائلة في مطعم حلاوة",
    aboutText: "في مطعم ومقهى حلاوة، نؤمن أن الطعام والمشروبات يجمعان القلوب قبل الموائد.\nنقدم بوفيه غداء وعشاء غني بالأطباق العربية الطازجة، إلى جانب قائمة مقهى مميزة تعكس أصالة النكهات العربية، في جو دافئ ومخصص للعائلات، بلا تدخين ولا أرجيلة.\n\nنحن نؤمن بالمسؤولية الاجتماعية، ونسعد بتوفير فرص عمل لذوي الاحتياجات الخاصة، لنخلق بيئة عمل شاملة وداعمة للجميع.\nهنا تجتمع العائلة، وتكبر الذكريات، وتتحول كل لحظة إلى تجربة دافئة لا تُنسى.",

    // Menu Showcase Section
    menuShowcaseTitle: "تجربة الطعام لدينا",
    menuShowcaseSubtitle: "استمتع بأطباقنا المميزة في جو دافئ وعائلي",
    menuCategories: [
      {
        id: "lunch",
        name: "بوفيه الغداء",
        isActive: true,
        dishes: [
          {
            name: "شاورما",
            image: "assests/shawarma.jpg",
            ingredients: ["لحم مشوي", "خضار طازجة", "خبز عربي", "صلصة الطحينة"]
          },
          {
            name: "كباب تركي",
            image: "assests/kebab.jpg",
            ingredients: ["لحم ضأن", "بصل", "فلفل", "توابل تركية"]
          },
           {
            name: "الكبسة",
            image: "assests/chicken-kabsa.jpg",
            ingredients: ["أرز بسمتي", "لحم ضأن طري", "خضار مشوي", "بهارات عربية"]
          },
          {
            name: "المنسف الأردني",
            image: "assests/mansaf.jpg",
            ingredients: ["لحم ضأن", "أرز مطبوخ", "لبن عربي", "مكسرات محمصة"]
          },
    
          {
            name: "البرياني",
            image: "assests/biryani.jpg",
            ingredients: ["أرز بسمتي", "دجاج طري", "خضار موسمية", "توابل هندية"]
          },
          {
            name: "اليخنة اليمنية",
            image: "assests/yakhni.jpg",
            ingredients: ["لحم غنم", "أرز مطبوخ", "بصل محمر", "بهارات يمنية"]
          },
          {
            name: "السمك الطازج",
            image: "assests/fresh-fish.jpg",
            ingredients: ["سمك طازج", "ليمون", "ثوم", "زيت زيتون"]
          },

          {
            name: "الملوخية",
            image: "assests/mulukhiyah.jpg",
            ingredients: ["ملوخية", "دجاج", "ثوم", "كمون"]
          },
          {
            name: "فاصولياء",
            image: "assests/lebanese-beans.jpg",
            ingredients: ["فاصولياء ", "ليمون", "ثوم"]
          },
          {
            name: "كبة بلبن",
            image: "assests/kibbeh-labanieh.jpg",
            ingredients: ["كبة", "لبن", "ثوم", "زيت زيتون"]
          }
        ]
      },
      {
        id: "dinner",
        name: "بوفيه العشاء",
        isActive: false,
        dishes: [
          {
            name: "الكبسة بالدجاج",
            image: "assests/chicken-kabsa.jpg",
            ingredients: ["دجاج مشوي", "أرز بسمتي", "خضار طازجة", "بهارات عربية"]
          },
          {
            name: "المشاوي المشكلة",
            image: "assests/mixed-grill.jpg",
            ingredients: ["لحم كبيبات", "دجاج مشوي", "كبدة", "خضار مشوي"]
          },
          {
            name: "السمك الطازج",
            image: "assests/fresh-fish.jpg",
            ingredients: ["سمك طازج", "ليمون", "ثوم", "زيت زيتون"]
          },
          {
            name: "كباب تركي",
            image: "assests/kebab.jpg",
            ingredients: ["لحم ضأن", "بصل", "فلفل", "توابل تركية"]
          },
          {
            name: "فاصولياء",
            image: "assests/lebanese-beans.jpg",
            ingredients: ["فاصولياء ", "ليمون", "ثوم"]
          },
          {
            name: "الكرنب المشوي",
            image: "assests/grilled-cauliflower.jpg",
            ingredients: ["كرنب", "زيت زيتون", "توابل", "ليمون"]
          },
          {
            name: "برجر اللحم",
            image: "assests/meat-burger.jpg",
            ingredients: ["لحم مطحون", "خضار", "توابل", "خبز عربي"]
          },
          {
            name: "السلطة الخضراء",
            image: "assests/green-salad.jpg",
            ingredients: ["خس", "طماطم", "خيار", "زيت زيتون"]
          },
          {
            name: "البيتزا العربية",
            image: "assests/arabic-pizza.jpg",
            ingredients: ["عجينة", "جبنة", "لحم", "خضار"]
          },
          {
            name: "مقلوبة",
            image: "assests/maqluba.jpg",
            ingredients: ["أرز", "باذنجان", "لحم", "مكسرات"]
          },
          {
            name: "كبة بلبن",
            image: "assests/kibbeh-labanieh.jpg",
            ingredients: ["كبة", "لبن", "ثوم", "زيت زيتون"]
          }
        ]
      },
      {
        id: "beverages",
        name: "المشروبات",
        isActive: false,
        dishes: [
          {
            name: "قهوة عربية",
            image: "assests/arabic-coffee.jpg",
            ingredients: ["قهوة مطحونة", "هيل", "قرفة", "ماء ساخن"]
          },
          {
            name: "شاي كرك",
            image: "assests/karak-tea.jpg",
            ingredients: ["شاي أسود", "حليب", "ماء", "بهارات هندية"]
          },
          {
            name: "ليموناضة طازجة",
            image: "assests/fresh-lemonade.jpg",
            ingredients: ["ليمون طازج", "سكر", "ماء بارد", "نعناع"]
          },
          {
            name: "عصير برتقال",
            image: "assests/orange-juice.jpg",
            ingredients: ["برتقال طازج", "ماء", "سكر", "ثلج"]
          },
          {
            name: "مشروب التمر الهندي",
            image: "assests/date-drink.jpg",
            ingredients: ["تمر هندي", "حليب", "ماء", "قرفة"]
          }
        ]
      },
      {
        id: "desserts",
        name: "الحلويات العربية",
        isActive: false,
        dishes: [
          {
            name: "الكنافة النابلسية",
            image: "assests/knafa.jpg",
            ingredients: ["عجينة كنافة", "جبنة طرية", "قطر", "فستق"]
          },
          {
            name: "البقلاوة",
            image: "assests/baklava.jpg",
            ingredients: ["فستق", "عسل", "زبدة", "عجينة رقاق"]
          },
          {
            name: "المعمول",
            image: "assests/maamoul.jpg",
            ingredients: ["دقيق", "سمن", "تمر", "فستق"]
          },
          {
            name: "القطايف",
            image: "assests/qatayef.jpg",
            ingredients: ["قطايف", "جبنة", "قطر", "فستق مطحون"]
          },
          {
            name: "رز بحليب",
            image: "assests/rice-milk.jpg",
            ingredients: ["أرز", "حليب", "سكر", "قرفة"]
          }
        ]
        }
      ],

    // Team Section
    teamTitle: "فريقنا",
    teamSubtitle: "تعرف على الفريق الدافئ الذي يجعل تجربة الطعام لدينا مميزة",
    teamMembers: [
      {
        name: "أحمد محمد",
        role: "شيف تنفيذي",
        image: "assests/ahmed.jpg",
        bio: "خبير في الطبخ العربي التقليدي مع خبرة 15 عاماً",
        award: "موظف الشهر - مارس 2025"
      },
      {
        name: "فاطمة علي",
        role: "رئيسة الطهاة",
        image: "assests/fatma.jpg",
        bio: "متخصصة في الحلويات العربية والمطبخ الشرقي",
        award: null
      },
      {
        name: "محمد حسن",
        role: "سقاك",
        image: "assests/mohamed.jpg",
        bio: "خبير في تحضير القهوة العربية والمشروبات التقليدية",
        award: "موظف الشهر - فبراير 2025"
      },
      {
        name: "سارة أحمد",
        role: "نادلة رئيسية",
        image: "assests/sara.jpg",
        bio: "مسؤولة عن خدمة العملاء وإدارة قاعة الطعام",
        award: null
      },
      {
        name: "علي محمود",
        role: "طباخ مساعد",
        image: "assests/ali.jpg",
        bio: "متخصص في الطبخ السريع والمأكولات البحرية",
        award: "موظف الشهر - يناير 2025"
      },
      {
        name: "لينا خالد",
        role: "مدربة قهوة",
        image: "assests/lina.jpg",
        bio: "خبيرة في تحضير المشروبات الساخنة والعصائر الطازجة",
        award: null
      },
      {
        name: "كريم يوسف",
        role: "نادل",
        image: "assests/karim.jpg",
        bio: "مسؤول عن خدمة العملاء في قسم المطعم",
        award: null
      },
      {
        name: "نورا سالم",
        role: "مسؤولة المخابز",
        image: "assests/nora.jpg",
        bio: "متخصصة في إعداد الخبز العربي والمعجنات",
        award: "موظف الشهر - أبريل 2025"
      },
      {
        name: "عمر عبدالله",
        role: "طباخ",
        image: "assests/omar.jpg",
        bio: "خبير في الطبخ التركي واللبناني",
        award: null
      },
      {
        name: "مريم حسن",
        role: "نادلة",
        image: "assests/mariam.jpg",
        bio: "مسؤولة عن خدمة العائلات والأطفال",
        award: null
      }
    ],

    // Contact Section
    contactTitle: "تواصل معنا",
    contactAddress: "شارع الملك فيصل، الرياض، المملكة العربية السعودية",
    contactPhone: "+966 50 123 4567",
    contactHours: "يومياً من 8:00 صباحاً إلى 12:00 منتصف الليل"
  },

  en: {
    // Header
    logoAlt: "Arabic Restaurant & Cafe",
    languageButton: "عربي",

    // Hero Section
    heroTitle: "Your Warm Gathering Starts with Sweetness",
    heroBuffetTimes: "Lunch Buffet 3:00 PM • Dinner Buffet 8:00 PM",
    heroDescription: "3 Hours of Warmth, Flavor, and Sweet Company",
    heroStoryText: "Winter tells warm stories… and the aroma of the buffet opens the heart before the appetite.\nAt Halawa Restaurant, we gather the family around a table filled with warmth, laughter, and beautiful memories.\n\nChildren's laughter, loved ones together, and dishes that whisper: \"Savor every bite.\"\nAnd here… the air is purer, with no smoking and no hookah, so every gathering feels relaxed and safe.\n\nAt Halawa, your gathering with us…\nis not just delightful — it's a thousand times more delightful.",
    heroButton: "Book Now",

    // About Section
    aboutTitle: "About Our Restaurant",
    aboutImageSrc: "assests/about.png",
    aboutImageAlt: "Family at Halawa Restaurant",
    aboutText: "At Halawa Restaurant & Café, we believe food and drinks bring hearts together before they bring people to the table.\nWe offer a rich lunch and dinner buffet with fresh Arabic dishes, alongside a café menu showcasing authentic Arabic flavors, all in a warm, family-only space with no smoking and no hookah.\n\nWe are proud to support our community by providing employment opportunities for people with special needs, creating an inclusive and welcoming workplace.\nHere families gather, memories grow, and every moment becomes a warm, unforgettable experience.",

    // Menu Showcase Section
    menuShowcaseTitle: "Our Culinary Experience",
    menuShowcaseSubtitle: "Indulge in our signature dishes in a warm, family atmosphere",
    menuCategories: [
      {
        id: "lunch",
        name: "Lunch Buffet",
        isActive: true,
        dishes: [
          {
            name: "Kabsa",
            image: "assests/chicken-kabsa.jpg",
            ingredients: ["Basmati rice", "Tender lamb", "Roasted vegetables", "Arabic spices"]
          },
          {
            name: "Jordanian Mansaf",
            image: "assests/mansaf.jpg",
            ingredients: ["Lamb meat", "Cooked rice", "Arabic yogurt", "Roasted nuts"]
          },
          {
            name: "Shawarma",
            image: "assests/shawarma.jpg",
            ingredients: ["Grilled meat", "Fresh vegetables", "Arabic bread", "Tahini sauce"]
          },
          {
            name: "Biryani",
            image: "assests/biryani.jpg",
            ingredients: ["Basmati rice", "Tender chicken", "Seasonal vegetables", "Indian spices"]
          },
          {
            name: "Yemeni Yakhni",
            image: "assests/yakhni.jpg",
            ingredients: ["Lamb meat", "Cooked rice", "Fried onions", "Yemeni spices"]
          },
          {
            name: "Fresh Fish",
            image: "assests/fresh-fish.jpg",
            ingredients: ["Fresh fish", "Lemon", "Garlic", "Olive oil"]
          },
          {
            name: "Turkish Kebab",
            image: "assests/kebab.jpg",
            ingredients: ["Lamb meat", "Onions", "Peppers", "Turkish spices"]
          },
          {
            name: "Mulukhiyah",
            image: "assests/mulukhiyah.jpg",
            ingredients: ["Mulukhiyah leaves", "Chicken", "Garlic", "Cumin"]
          },
          {
            name: "Beans",
            image: "assests/lebanese-beans.jpg",
            ingredients: ["Red beans", "Tahini", "Lemon", "Garlic"]
          },
          {
            name: "Kibbeh with Yogurt",
            image: "assests/kibbeh-labanieh.jpg",
            ingredients: ["Kibbeh", "Yogurt", "Garlic", "Olive oil"]
          }
        ]
      },
      {
        id: "dinner",
        name: "Dinner Buffet",
        isActive: false,
        dishes: [
          {
            name: "Kabsa",
            image: "assests/chicken-kabsa.jpg",
            ingredients: ["Grilled chicken", "Basmati rice", "Fresh vegetables", "Arabic spices"]
          },
          {
            name: "Mixed Grill",
            image: "assests/mixed-grill.jpg",
            ingredients: ["Kofta meat", "Grilled chicken", "Liver", "Roasted vegetables"]
          },
          {
            name: "Fresh Fish",
            image: "assests/fresh-fish.jpg",
            ingredients: ["Fresh fish", "Lemon", "Garlic", "Olive oil"]
          },
          {
            name: "Turkish Kebab",
            image: "assests/kebab.jpg",
            ingredients: ["Lamb meat", "Onions", "Peppers", "Turkish spices"]
          },
          {
            name: "Beans",
            image: "assests/lebanese-beans.jpg",
            ingredients: ["Red beans", "Tahini", "Lemon", "Garlic"]
          },
          {
            name: "Grilled Cauliflower",
            image: "assests/grilled-cauliflower.jpg",
            ingredients: ["Cauliflower", "Olive oil", "Spices", "Lemon"]
          },
          {
            name: "Meat Burger",
            image: "assests/meat-burger.jpg",
            ingredients: ["Ground meat", "Vegetables", "Spices", "Arabic bread"]
          },
          {
            name: "Green Salad",
            image: "assests/green-salad.jpg",
            ingredients: ["Lettuce", "Tomatoes", "Cucumber", "Olive oil"]
          },
          {
            name: "Arabic Pizza",
            image: "assests/arabic-pizza.jpg",
            ingredients: ["Dough", "Cheese", "Meat", "Vegetables"]
          },
          {
            name: "Maqluba",
            image: "assests/maqluba.jpg",
            ingredients: ["Rice", "Eggplant", "Meat", "Nuts"]
          },
          {
            name: "Kibbeh with Yogurt",
            image: "assests/kibbeh-labanieh.jpg",
            ingredients: ["Kibbeh", "Yogurt", "Garlic", "Olive oil"]
          }
        ]
      },
      {
        id: "beverages",
        name: "Beverages",
        isActive: false,
        dishes: [
          {
            name: "Arabic Coffee",
            image: "assests/arabic-coffee.jpg",
            ingredients: ["Ground coffee", "Cardamom", "Cinnamon", "Hot water"]
          },
          {
            name: "Karak Tea",
            image: "assests/karak-tea.jpg",
            ingredients: ["Black tea", "Milk", "Water", "Indian spices"]
          },
          {
            name: "Fresh Lemonade",
            image: "assests/fresh-lemonade.jpg",
            ingredients: ["Fresh lemon", "Sugar", "Cold water", "Mint"]
          },
          {
            name: "Orange Juice",
            image: "assests/orange-juice.jpg",
            ingredients: ["Fresh oranges", "Water", "Sugar", "Ice"]
          },
          {
            name: "Indian Date Drink",
            image: "assests/date-drink.jpg",
            ingredients: ["Indian dates", "Milk", "Water", "Cinnamon"]
          }
        ]
      },
      {
        id: "desserts",
        name: "Arabic Desserts",
        isActive: false,
        dishes: [
          {
            name: "Nablus Knafa",
            image: "assests/knafa.jpg",
            ingredients: ["Knafa dough", "Soft cheese", "Syrup", "Pistachios"]
          },
          {
            name: "Baklava",
            image: "assests/baklava.jpg",
            ingredients: ["Pistachios", "Honey", "Butter", "Phyllo dough"]
          },
          {
            name: "Maamoul",
            image: "assests/maamoul.jpg",
            ingredients: ["Flour", "Clarified butter", "Dates", "Pistachios"]
          },
          {
            name: "Qatayef",
            image: "assests/qatayef.jpg",
            ingredients: ["Qatayef pancakes", "Cheese", "Syrup", "Ground pistachios"]
          },
          {
            name: "Rice with Milk",
            image: "assests/rice-milk.jpg",
            ingredients: ["Rice", "Milk", "Sugar", "Cinnamon"]
          }
        ]
        }
      ],

    // Team Section
    teamTitle: "Our Team",
    teamSubtitle: "Meet the warm team that makes our dining experience special",
    teamMembers: [
      {
        name: "Ahmed Mohamed",
        role: "Executive Chef",
        image: "assests/ahmed.jpg",
        bio: "Expert in traditional Arabic cooking with 15 years of experience",
        award: "Employee of the Month - March 2025"
      },
      {
        name: "Fatma Ali",
        role: "Head Chef",
        image: "assests/fatma.jpg",
        bio: "Specialist in Arabic desserts and oriental cuisine",
        award: null
      },
      {
        name: "Mohamed Hassan",
        role: "Barista",
        image: "assests/mohamed.jpg",
        bio: "Expert in preparing Arabic coffee and traditional beverages",
        award: "Employee of the Month - February 2025"
      },
      {
        name: "Sara Ahmed",
        role: "Head Waitress",
        image: "assests/sara.jpg",
        bio: "Responsible for customer service and dining room management",
        award: null
      },
      {
        name: "Ali Mahmoud",
        role: "Assistant Cook",
        image: "assests/ali.jpg",
        bio: "Specialist in fast cooking and seafood dishes",
        award: "Employee of the Month - January 2025"
      },
      {
        name: "Lina Khaled",
        role: "Coffee Trainer",
        image: "assests/lina.jpg",
        bio: "Expert in preparing hot drinks and fresh juices",
        award: null
      },
      {
        name: "Karim Youssef",
        role: "Waiter",
        image: "assests/karim.jpg",
        bio: "Responsible for customer service in the restaurant section",
        award: null
      },
      {
        name: "Nora Salem",
        role: "Bakery Manager",
        image: "assests/nora.jpg",
        bio: "Specialist in preparing Arabic bread and pastries",
        award: "Employee of the Month - April 2025"
      },
      {
        name: "Omar Abdullah",
        role: "Cook",
        image: "assests/omar.jpg",
        bio: "Expert in Turkish and Lebanese cooking",
        award: null
      },
      {
        name: "Mariam Hassan",
        role: "Waitress",
        image: "assests/mariam.jpg",
        bio: "Responsible for serving families and children",
        award: null
      }
    ],

    // Contact Section
    contactTitle: "Contact Us",
    contactAddress: "King Faisal Street, Riyadh, Saudi Arabia",
    contactPhone: "+966 50 123 4567",
    contactHours: "Daily from 8:00 AM to 12:00 AM"
  }
};