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
    heroPromotion: "تجربة شتوية بسعر 20 دينار للشخص\nابتداءً من 20 يناير 2026 –لمدة شهر واحد فقط ",

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
        image: "assests/ahmed.png",
        bio: "خبير في الطبخ العربي التقليدي مع خبرة 15 عاماً في المطبخ الشرق أوسطي",
        award: "موظف الشهر - نوفمبر 2025"
      },
      {
        name: "فاطمة علي",
        role: "مديرة المطبخ",
        image: "assests/fatma.png",
        bio: "متخصصة في المطبخ العربي والحلويات التقليدية مع شغف للنكهات الأصيلة",
        award: null
      },
      {
        name: "محمد حسن",
        role: "شيف رئيسي",
        image: "assests/mohamed.png",
        bio: "خبير في الطبخ الشرق أوسطي مع جوائز دولية وخبرة 12 عاماً",
        award: "موظف الشهر - اكتوبر 2025"
      },
      {
        name: "سارة أحمد",
        role: "مديرة الخدمة",
        image: "assests/sara.png",
        bio: "مختصة في خدمة العملاء مع خبرة 10 سنوات في إدارة الضيافة",
        award: null
      },
      {
        name: "علي محمود",
        role: "مساعد شيف",
        image: "assests/ali.png",
        bio: "شغوف بالطبخ العربي والأطباق التقليدية مع تركيز على الجودة والنكهة",
        award: "موظف الشهر - ديسمبر 2025"
      },
      {
        name: "مريم خالد",
        role: "خبيرة قهوة",
        image: "assests/maryam.png",
        bio: "متخصصة في تحضير القهوة العربية والشاي التقليدي والمشروبات الدافئة",
        award: null
      },
      {
        name: "حسن عبدالله",
        role: "مدير المطعم",
        image: "assests/hassan.png",
        bio: "مدير ذو خبرة في إدارة المطاعم العائلية وخدمة العملاء المتميزة",
        award: null
      },
      {
        name: "لينا عمر",
        role: "مضيفة رئيسية",
        image: "assests/lina.png",
        bio: "مختصة في خدمة العملاء والضيافة العربية مع تركيز على رضا العائلات",
        award: "موظف الشهر - سبتمبر 2025"
      },
      {
        name: "عمر سالم",
        role: "مسؤول المشروبات",
        image: "assests/omar.png",
        bio: "خبير في تحضير المشروبات التقليدية والعصائر الطازجة والمختصرات",
        award: null
      },
      {
        name: "نور محمد",
        role: "مساعدة خدمة",
        image: "assests/noor.png",
        bio: "مخلصة في تقديم خدمة متميزة للعائلات والأطفال مع ابتسامة دافئة",
        award: null
      }
    ],

    // Testimonials Section
    testimonialsTitle: "آراء العملاء المميزين",
    testimonialsSubtitle: "شرفنا أن نستضيف شخصيات بارزة في عالمنا العربي",
    testimonials: [
      {
        name: "ناصر القصبي",
        title: "مغني وملحن سعودي",
        image: "assests/ahmed.png",
        quote: "تجربة فريدة من نوعها في مطعم حلاوة. الطعام يحمل مذاق التراث العربي الأصيل مع لمسة عصرية راقية. يستحق الزيارة مراراً وتكراراً.",
        rating: 5
      },
      {
        name: "هيفاء وهبي",
        title: "ممثلة ومغنية لبنانية",
        image: "assests/fatma.png",
        quote: "مكان ساحر يجمع بين الدفء العائلي والأصالة العربية. الأطباق تذكرني بطفولتي في لبنان، والخدمة على أعلى مستوى من الكياسة والاحترافية.",
        rating: 5
      },
      {
        name: "عبدالله الرويشد",
        title: "إعلامي سعودي",
        image: "assests/mohamed.png",
        quote: "في زمن الوجبات السريعة، يقف مطعم حلاوة كواحة للطعام الحقيقي. كل لقمة تحمل قصة من تراثنا العربي الغني. شكراً للحفاظ على هذه التقاليد.",
        rating: 5
      },
      {
        name: "أحلام",
        title: "مغنية إماراتية",
        image: "assests/sara.png",
        quote: "الدفء في مطعم حلاوة ليس فقط في الأجواء، بل في كل طبق يقدمونه. يشعرك بالعودة إلى المنزل رغم أنك في مكان عام. تجربة لا تُنسى.",
        rating: 5
      },
      {
        name: "محمد العريفي",
        title: "داعية إسلامي",
        image: "assests/ali.png",
        quote: "مكان مبارك يحافظ على القيم العائلية والتقاليد العربية الأصيلة. الطعام حلال وشهي، والأجواء مناسبة للعائلات المسلمة التي تبحث عن الراحة والطمأنينة.",
        rating: 5
      },
      {
        name: "نجوى كرم",
        title: "مغنية لبنانية",
        image: "assests/lina.png",
        quote: "عندما أريد العودة إلى جذوري، أذهب إلى مطعم حلاوة. كل تفصيل يذكرني بلبنان الأصيل، من رائحة القهوة العربية إلى دفء الضيافة العربية الأصيلة.",
        rating: 5
      }
    ],

    // Contact Section
    contactTitle: "تواصل معنا",
    contactAddress: "خلدا، عمان، الأردن",
    contactPhone: "+962 77 123 4567",
    contactHours: "يومياً من 8:00 صباحاً إلى 12:00 منتصف الليل",

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
    heroPromotion: "A winter experience for 20 JOD per person\nStarting January 20, 2026 – for one month only",

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
        image: "assests/ahmed.png",
        bio: "Expert in traditional Arabic cooking with 15 years of experience in Middle Eastern cuisine",
        award: "Employee of the Month - November 2025"
      },
      {
        name: "Fatma Ali",
        role: "Head Chef",
        image: "assests/fatma.png",
        bio: "Specialist in Arabic cuisine and traditional desserts with passion for authentic flavors",
        award: null
      },
      {
        name: "Mohamed Hassan",
        role: "Master Chef",
        image: "assests/mohamed.png",
        bio: "Expert in Middle Eastern cooking with international awards and 12 years of experience",
        award: "Employee of the Month - October 2025"
      },
      {
        name: "Sara Ahmed",
        role: "Service Manager",
        image: "assests/sara.png",
        bio: "Customer service specialist with 10 years of experience in hospitality management",
        award: null
      },
      {
        name: "Ali Mahmoud",
        role: "Sous Chef",
        image: "assests/ali.png",
        bio: "Passionate about Arabic cooking and traditional dishes with focus on quality and flavor",
        award: "Employee of the Month - December 2025"
      },
      {
        name: "Maryam Khaled",
        role: "Coffee Expert",
        image: "assests/maryam.png",
        bio: "Specialist in preparing Arabic coffee, traditional tea, and warm beverages",
        award: null
      },
      {
        name: "Hassan Abdullah",
        role: "Restaurant Manager",
        image: "assests/hassan.png",
        bio: "Experienced manager in family restaurants and exceptional customer service",
        award: null
      },
      {
        name: "Lina Omar",
        role: "Head Waitress",
        image: "assests/lina.png",
        bio: "Specialist in customer service and Arabic hospitality with focus on family satisfaction",
        award: "Employee of the Month - November 2025"
      },
      {
        name: "Omar Salem",
        role: "Beverage Manager",
        image: "assests/omar.png",
        bio: "Expert in preparing traditional beverages, fresh juices, and specialty drinks",
        award: null
      },
      {
        name: "Noor Mohamed",
        role: "Service Assistant",
        image: "assests/noor.png",
        bio: "Dedicated to providing excellent service to families and children with a warm smile",
        award: null
      }
    ],

    // Testimonials Section
    testimonialsTitle: "Testimonials from Distinguished Guests",
    testimonialsSubtitle: "We're honored to have hosted prominent figures from our Arab world",
    testimonials: [
      {
        name: "Nasser Al Qasabi",
        title: "Saudi Singer & Composer",
        image: "assests/ahmed.png",
        quote: "A unique experience at Halawa Restaurant. The food carries the authentic taste of Arab heritage with a modern and elegant touch. Worth visiting again and again.",
        rating: 5
      },
      {
        name: "Haifa Wehbe",
        title: "Lebanese Actress & Singer",
        image: "assests/fatma.png",
        quote: "A magical place that combines family warmth and Arab authenticity. The dishes remind me of my childhood in Lebanon, and the service is of the highest level of courtesy and professionalism.",
        rating: 5
      },
      {
        name: "Abdullah Al Rousheed",
        title: "Saudi Media Personality",
        image: "assests/mohamed.png",
        quote: "In the age of fast food, Halawa Restaurant stands as an oasis for real food. Every bite carries a story from our rich Arab heritage. Thank you for preserving these traditions.",
        rating: 5
      },
      {
        name: "Ahlam",
        title: "Emirati Singer",
        image: "assests/sara.png",
        quote: "The warmth at Halawa Restaurant is not just in the atmosphere, but in every dish they serve. It makes you feel at home even in a public place. An unforgettable experience.",
        rating: 5
      },
      {
        name: "Mohammed Al Arifi",
        title: "Islamic Scholar",
        image: "assests/ali.png",
        quote: "A blessed place that preserves family values and authentic Arab traditions. The food is halal and delicious, and the atmosphere is suitable for Muslim families seeking comfort and peace of mind.",
        rating: 5
      },
      {
        name: "Najwa Karam",
        title: "Lebanese Singer",
        image: "assests/lina.png",
        quote: "When I want to return to my roots, I go to Halawa Restaurant. Every detail reminds me of authentic Lebanon, from the aroma of Arabic coffee to the warmth of genuine Arab hospitality.",
        rating: 5
      }
    ],

    // Contact Section
    contactTitle: "Contact Us",
    contactAddress: "Khilda, Amman, Jordan",
    contactPhone: "+962 77 123 4567",
    contactHours: "Daily from 8:00 AM to 12:00 AM"
  }
};