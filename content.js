// Content configuration for Arabic Restaurant & Cafe landing page
const content = {
  ar: {
    // Header
    logoSrc: "assests/Ar.png",
    logoAlt: "مطعم ومقهى عربي",
    languageButton: "EN",
    colorModeIcon: "assests/color-mode.png",
    colorModeIcons: {
        default: "assests/color-mode.png",
        warm: "assests/warm-mode.png"
    },

    // Hero Section
    heroVideoSrc: "assests/analyzed_video_video_cece81e5601848e497f8d8c1f8bc6f3c_cece81e5601848e497f8d8c1f8bc6f3c_origin.mp4",
    heroTitle: "لمّتكم الدافية تبدأ من حلاوة",
    heroBuffetTimes: "بوفيه الغداء 3:00 مساءً • بوفيه العشاء 8:00 مساءً",
    heroDescription: "3 ساعات من الدفء والمذاق واللمة الحلوة",
    heroStoryText: "الشتا يحكي حكايات دافية… وريحة البوفيه تفتح القلب قبل الشهية.\nفي مطعم حلاوة، بنجمع العيلة حول طاولة مليانة دفء وضحك وذكريات.\n\nضحكات الأطفال، لمّة الأحباب، وأطباق تهمس: استمتع بكل لقمة.\nوهون… الجو أنقى، بلا تدخين ولا أرجيلة، عشان تكتمل اللمة براحة وطمأنينة.\n\nفي حلاوة، لمّتكم معنا…\nمش بس أحلى، أحلى بألف مرة.",
    heroButton: "احجز الآن",
    heroPromotion: "تجربة شتوية بسعر 20 دينار للشخص\nابتداءً من 20 يناير 2026 - مقاعد محدودة 200 كرسي فقط ",

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
        image: "assests/mariam.png",
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
        image: "assests/nora.png",
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
        title: "ممثل سعودي",
        image: "assests/Naser.png",
        quote: "تجربة فريدة من نوعها في مطعم حلاوة. الطعام يحمل مذاق التراث العربي الأصيل مع لمسة عصرية راقية. يستحق الزيارة مراراً وتكراراً.",
        rating: 5
      },
      {
        name: "هياء وعائلتها",
        title: "",
        image: "assests/Haya.png",
        quote: "مكان ساحر يجمع بين الدفء العائلي والأصالة العربية. الأطباق تذكرني بطفولتي في لبنان، والخدمة على أعلى مستوى من الكياسة والاحترافية.",
        rating: 5
      },
      {
        name: "عبدالله وعائلته",
        title: "",
        image: "assests/Abdullah.png",
        quote: "في زمن الوجبات السريعة، يقف مطعم حلاوة كواحة للطعام الحقيقي. كل لقمة تحمل قصة من تراثنا العربي الغني. شكراً للحفاظ على هذه التقاليد.",
        rating: 5
      },
      {
        name: "أحلام",
        title: "",
        image: "assests/Ahlam.png",
        quote: "الدفء في مطعم حلاوة ليس فقط في الأجواء، بل في كل طبق يقدمونه. يشعرك بالعودة إلى المنزل رغم أنك في مكان عام. تجربة لا تُنسى.",
        rating: 5
      },
      {
        name: "محمد العريفي",
        title: "داعية إسلامي",
        image: "assests/Mohammad.png",
        quote: "مكان مبارك يحافظ على القيم العائلية والتقاليد العربية الأصيلة. الطعام حلال وشهي، والأجواء مناسبة للعائلات المسلمة التي تبحث عن الراحة والطمأنينة.",
        rating: 5
      },
      {
        name: "نجوى ",
        title: " ",
        image: "assests/Najwa.png",
        quote: "عندما أريد العودة إلى جذوري، أذهب إلى مطعم حلاوة. كل تفصيل يذكرني بلبنان الأصيل، من رائحة القهوة العربية إلى دفء الضيافة العربية الأصيلة.",
        rating: 5
      }
    ],

    // Booking Section
    bookingTitle: "احجز طاولتك",
    bookingSubtitle: "احجز طاولتك الآن واستمتع بتجربة طعام لا تُنسى، سعر لا يُضاهي 20 دينار لكل شخص ",
    bookingFullNameLabel: "الاسم الكامل",
    bookingFullNamePlaceholder: "أدخل اسمك الكامل",
    bookingPhoneLabel: "رقم الهاتف",
    bookingPhonePlaceholder: "أدخل رقم هاتفك",
    bookingGuestsLabel: "عدد الضيوف",
    bookingGuestsPlaceholder: "عدد الضيوف",
    bookingMealTypeLabel: "نوع الوجبة",
    bookingMealTypeSelect: "اختر نوع الوجبة",
    bookingMealTypeLunch: "بوفيه الغداء",
    bookingMealTypeDinner: "بوفيه العشاء",
    bookingDateLabel: "التاريخ",
    bookingDateHelper: "التواريخ المتاحة: 22، 23، 24، 29، 30، 31 يناير و 5، 6، 7، 12، 13، 14، 19، 20 فبراير 2026",
    bookingSubmitButton: "تأكيد الحجز",
    bookingConfirmationTitle: "تم تأكيد حجزك! 🎉",
    bookingConfirmationMessage: "شكراً لك! تم استلام طلب الحجز الخاص بك. سنتواصل معك قريباً.",
    bookingTotalPrice: "السعر الإجمالي",
    bookingPricePerGuest: "دينار للشخص الواحد",
    bookingCloseButton: "ممتاز",

    // Contact Section
    contactTitle: "تواصل معنا",
    contactAddress: "خلدا، عمان، الأردن",
    contactPhone: "+962 78 802 6543",
    contactHours: "يومياً من 8:00 صباحاً إلى 12:00 منتصف الليل",

    // Footer
    footerLocationTitle: "الموقع",
    footerLocationText: "خلدا - عمّان",
    footerOpenMaps: "افتح الخريطة",

    footerPoliciesTitle: "السياسات",
    footerPolicyRefund: "الاسترجاع",
    footerPolicyBooking: "الحجز",
    footerPolicyCancellation: "الإلغاء",
    footerPoliciesHint: "اضغط على أي سياسة لقراءتها.",

    footerSupportTitle: "دعم واتساب",
    footerSupportText: "تحتاج مساعدة سريعة؟ ارسل لنا على واتساب وسنرد عليك.",
    footerWhatsAppButton: "تواصل عبر واتساب",

    footerShareTitle: "شارك",
    footerShareText: "شارك الصفحة مع أصدقائك.",
    footerShareFacebook: "فيسبوك",
    footerShareInstagram: "إنستغرام",
    footerShareWhatsApp: "واتساب",

    footerBottomText: "© 2026 حلاوة — جميع الحقوق محفوظة.",

    // Policies content (used in modal)
    policyRefundTitle: "سياسة الاسترجاع",
    policyRefundBody:
      "إذا كان لديك دفع مُسبق لحجز/فعالية: يمكن طلب الاسترجاع عند الإلغاء ضمن المدة المسموحة في سياسة الإلغاء.\nيتم الاسترجاع إلى نفس وسيلة الدفع خلال 5–7 أيام عمل (حسب البنك).\nقد تُستثنى أي رسوم طرف ثالث إن وجدت.",
    policyBookingTitle: "سياسة الحجز",
    policyBookingBody:
      "الحجز يعتمد على توفر المقاعد.\nيرجى الوصول في الموعد المحدد — يتم الاحتفاظ بالطاولة لمدة 15 دقيقة.\nللتأكيد أو التعديل السريع، تواصل معنا عبر واتساب.",
    policyCancellationTitle: "سياسة الإلغاء",
    policyCancellationBody:
      "يمكن الإلغاء أو التعديل قبل الموعد بمدة لا تقل عن 6 ساعات حتى نتيح المقعد لغيرك.\nفي حال عدم الحضور بدون إشعار، قد نحتاج لتأكيد إضافي للحجوزات القادمة.",

    // Footer actions (used in script)
    footerShareMessage: "خلّينا نلمّها سوا في مطعم حلاوة!",
    footerLinkCopied: "تم نسخ الرابط.",
    footerInstagramHint: "تم نسخ الرابط — الصقه في إنستغرام.",
    footerCopyFailed: "انسخ الرابط يدويًا:",
    footerWhatsAppPrefill: "مرحباً، أحتاج مساعدة بخصوص الحجز في مطعم حلاوة.",
  },

  en: {
    // Header
    logoSrc: "assests/EN.png",
    logoAlt: "Arabic Restaurant & Cafe",
    languageButton: "عربي",
    colorModeIcon: "assests/color-mode.png",
    colorModeIcons: {
        default: "assests/color-mode.png",
        warm: "assests/warm-mode.png"
    },

    // Hero Section
    heroVideoSrc: "assests/analyzed_video_video_cece81e5601848e497f8d8c1f8bc6f3c_cece81e5601848e497f8d8c1f8bc6f3c_origin.mp4",
    heroTitle: "Your Warm Gathering Starts with Sweetness",
    heroBuffetTimes: "Lunch Buffet 3:00 PM • Dinner Buffet 8:00 PM",
    heroDescription: "3 Hours of Warmth, Flavor, and Sweet Company",
    heroStoryText: "Winter tells warm stories… and the aroma of the buffet opens the heart before the appetite.\nAt Halawa Restaurant, we gather the family around a table filled with warmth, laughter, and beautiful memories.\n\nChildren's laughter, loved ones together, and dishes that whisper: \"Savor every bite.\"\nAnd here… the air is purer, with no smoking and no hookah, so every gathering feels relaxed and safe.\n\nAt Halawa, your gathering with us…\nis not just delightful — it's a thousand times more delightful.",
    heroButton: "Book Now",
    heroPromotion: "A winter experience for 20 JOD per person\nstarting 20, Jan of 2026 – 200 Limited chairs",

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
        image: "assests/mariam.png",
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
        image: "assests/nora.png",
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
        title: "Saudi actor",
        image: "assests/Naser.png",
        quote: "A unique experience at Halawa Restaurant. The food carries the authentic taste of Arab heritage with a modern and elegant touch. Worth visiting again and again.",
        rating: 5
      },
      {
        name: "Haya and her family",
        title: "",
        image: "assests/Haya.png",
        quote: "A magical place that combines family warmth and Arab authenticity. The dishes remind me of my childhood in Lebanon, and the service is of the highest level of courtesy and professionalism.",
        rating: 5
      },
      {
        name: "Abdullah and his family",
        title: "Saudi Media Personality",
        image: "assests/Abdullah.png",
        quote: "In the age of fast food, Halawa Restaurant stands as an oasis for real food. Every bite carries a story from our rich Arab heritage. Thank you for preserving these traditions.",
        rating: 5
      },
      {
        name: "Ahlam",
        title: "",
        image: "assests/Ahlam.png",
        quote: "The warmth at Halawa Restaurant is not just in the atmosphere, but in every dish they serve. It makes you feel at home even in a public place. An unforgettable experience.",
        rating: 5
      },
      {
        name: "Mohammed Al Arifi",
        title: "Islamic Scholar",
        image: "assests/Mohammad.png",
        quote: "A blessed place that preserves family values and authentic Arab traditions. The food is halal and delicious, and the atmosphere is suitable for Muslim families seeking comfort and peace of mind.",
        rating: 5
      },
      {
        name: "Najwa",
        title: "",
        image: "assests/Najwa.png",
        quote: "When I want to return to my roots, I go to Halawa Restaurant. Every detail reminds me of authentic Lebanon, from the aroma of Arabic coffee to the warmth of genuine Arab hospitality.",
        rating: 5
      }
    ],

    // Booking Section
    bookingTitle: "Book Your Table",
    bookingSubtitle: "Reserve your table now and enjoy an unforgettable dining experience, unbeatable price: 20 dinars per person",
    bookingFullNameLabel: "Full Name",
    bookingFullNamePlaceholder: "Enter your full name",
    bookingPhoneLabel: "Phone Number",
    bookingPhonePlaceholder: "Enter your phone number",
    bookingGuestsLabel: "Number of Guests",
    bookingGuestsPlaceholder: "Number of guests",
    bookingMealTypeLabel: "Meal Type",
    bookingMealTypeSelect: "Select meal type",
    bookingMealTypeLunch: "Lunch Buffet",
    bookingMealTypeDinner: "Dinner Buffet",
    bookingDateLabel: "Date",
    bookingDateHelper: "Available dates: Jan 22, 23, 24, 29, 30, 31 and Feb 5, 6, 7, 12, 13, 14, 19, 20, 2026",
    bookingSubmitButton: "Confirm Booking",
    bookingConfirmationTitle: "Booking Confirmed! 🎉",
    bookingConfirmationMessage: "Thank you! Your booking request has been received. We will contact you soon.",
    bookingTotalPrice: "Total Price",
    bookingPricePerGuest: "JOD per person",
    bookingCloseButton: "Great!",

    // Contact Section
    contactTitle: "Contact Us",
    contactAddress: "Khilda, Amman, Jordan",
    contactPhone: "+962 78 802 6543",
    contactHours: "Daily from 8:00 AM to 12:00 AM",

    // Footer
    footerLocationTitle: "Location",
    footerLocationText: "Khalda, Amman",
    footerOpenMaps: "Open in Maps",

    footerPoliciesTitle: "Policies",
    footerPolicyRefund: "Refund",
    footerPolicyBooking: "Booking",
    footerPolicyCancellation: "Cancellation",
    footerPoliciesHint: "Tap a policy to read.",

    footerSupportTitle: "WhatsApp Support",
    footerSupportText: "Need quick help? Message us on WhatsApp and we’ll reply fast.",
    footerWhatsAppButton: "WhatsApp Support",

    footerShareTitle: "Share",
    footerShareText: "Share this page with friends.",
    footerShareFacebook: "Facebook",
    footerShareInstagram: "Instagram",
    footerShareWhatsApp: "WhatsApp",

    footerBottomText: "© 2026 Halawa — All rights reserved.",

    // Policies content (used in modal)
    policyRefundTitle: "Refund Policy",
    policyRefundBody:
      "If there was any prepayment for a booking/event: you can request a refund when cancelling within the allowed time in the Cancellation Policy.\nRefunds go back to the original payment method within 5–7 business days (bank dependent).\nAny third‑party fees (if applicable) may be excluded.",
    policyBookingTitle: "Booking Policy",
    policyBookingBody:
      "Bookings are subject to availability.\nPlease arrive on time — we hold the table for 15 minutes.\nFor quick confirmation or changes, contact us via WhatsApp.",
    policyCancellationTitle: "Cancellation Policy",
    policyCancellationBody:
      "You can cancel or reschedule at least 6 hours before your time so we can offer the seat to others.\nNo‑shows without notice may require extra confirmation for future bookings.",

    // Footer actions (used in script)
    footerShareMessage: "Let’s meet at Halawa!",
    footerLinkCopied: "Link copied.",
    footerInstagramHint: "Link copied — paste it into Instagram.",
    footerCopyFailed: "Copy this link:",
    footerWhatsAppPrefill: "Hi! I need help with a booking at Halawa."
  }
};