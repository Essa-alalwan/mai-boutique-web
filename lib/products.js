// Placeholder catalogue — names, prices, and photography are all illustrative for this demo.
const products = [
  // ---------- clothing (men's casual/loungewear) ----------
  {
    slug: "camo-jogger-pants",
    category: "clothing",
    subcategory: "joggers",
    name: { en: "Camo Jogger Pants", ar: "بنطال جوجر كامو" },
    description: {
      en: "A relaxed jogger in brushed cotton with a ribbed cuff, built for everyday wear around the branches.",
      ar: "بنطال جوجر مريح من القطن المصنفر بحاشية مضلعة، مناسب للارتداء اليومي.",
    },
    variants: [
      { id: "m", label: { en: "M", ar: "M" }, price: 4.5 },
      { id: "l", label: { en: "L", ar: "L" }, price: 4.5 },
      { id: "xl", label: { en: "XL", ar: "XL" }, price: 4.5 },
      { id: "xxl", label: { en: "XXL", ar: "XXL" }, price: 4.5 },
    ],
    price: 4.5,
    currency: "BHD",
    image: { photo: "1601561446301-fecc99036f4b", width: 900, height: 1100 },
    featured: true,
    tags: ["bestseller"],
  },
  {
    slug: "cuffed-track-pants",
    category: "clothing",
    subcategory: "joggers",
    name: { en: "Cuffed Track Pants", ar: "بنطال رياضي بحاشية مطوية" },
    description: {
      en: "A tapered pant with a drawstring waist and a cuffed hem — dress it up with a jacket or keep it casual.",
      ar: "بنطال ضيق من الأسفل بخصر برباط وحاشية مطوية — يُلبس رسمياً مع جاكيت أو ببساطة يومياً.",
    },
    variants: [
      { id: "m", label: { en: "M", ar: "M" }, price: 5.5 },
      { id: "l", label: { en: "L", ar: "L" }, price: 5.5 },
      { id: "xl", label: { en: "XL", ar: "XL" }, price: 5.5 },
      { id: "xxl", label: { en: "XXL", ar: "XXL" }, price: 5.5 },
    ],
    price: 5.5,
    currency: "BHD",
    image: { photo: "1473966968600-fa801b869a1a", width: 900, height: 1100 },
    featured: false,
    tags: [],
  },
  {
    slug: "weekend-shorts",
    category: "clothing",
    subcategory: "shorts",
    name: { en: "Weekend Shorts", ar: "شورت نهاية الأسبوع" },
    description: {
      en: "An above-the-knee short in soft cotton twill, cut for warm days and worn all season at our branches.",
      ar: "شورت فوق الركبة من قماش القطن الناعم، مناسب للأيام الدافئة ويُباع طوال الموسم في فروعنا.",
    },
    variants: [
      { id: "s", label: { en: "S", ar: "S" }, price: 2.5 },
      { id: "m", label: { en: "M", ar: "M" }, price: 2.5 },
      { id: "l", label: { en: "L", ar: "L" }, price: 2.5 },
      { id: "xl", label: { en: "XL", ar: "XL" }, price: 2.5 },
      { id: "xxl", label: { en: "XXL", ar: "XXL" }, price: 2.5 },
    ],
    price: 2.5,
    currency: "BHD",
    image: { photo: "1621496503717-095a410e1566", width: 900, height: 1100 },
    featured: false,
    tags: [],
  },
  {
    slug: "active-training-shorts",
    category: "clothing",
    subcategory: "shorts",
    name: { en: "Active Training Shorts", ar: "شورت رياضي" },
    description: {
      en: "A lightweight training short with an elastic waist, built for movement without losing its shape.",
      ar: "شورت رياضي خفيف بخصر مطاطي، مصمم للحركة دون أن يفقد شكله.",
    },
    variants: [
      { id: "m", label: { en: "M", ar: "M" }, price: 3.5 },
      { id: "l", label: { en: "L", ar: "L" }, price: 3.5 },
      { id: "xl", label: { en: "XL", ar: "XL" }, price: 3.5 },
      { id: "xxl", label: { en: "XXL", ar: "XXL" }, price: 3.5 },
    ],
    price: 3.5,
    currency: "BHD",
    image: { photo: "1587249247014-079373c40427", width: 900, height: 1100 },
    featured: false,
    tags: [],
  },
  {
    slug: "essential-crew-tee",
    category: "clothing",
    subcategory: "tshirts",
    name: { en: "Essential Crew Tee", ar: "تيشيرت أساسي" },
    description: {
      en: "Our everyday crew neck tee in heavyweight cotton — the piece customers restock most.",
      ar: "تيشيرت الرقبة الدائرية اليومي من القطن الثقيل — القطعة التي يعيد زبائننا شراءها أكثر من غيرها.",
    },
    variants: [
      { id: "s", label: { en: "S", ar: "S" }, price: 2.5 },
      { id: "m", label: { en: "M", ar: "M" }, price: 2.5 },
      { id: "l", label: { en: "L", ar: "L" }, price: 2.5 },
      { id: "xl", label: { en: "XL", ar: "XL" }, price: 2.5 },
      { id: "xxl", label: { en: "XXL", ar: "XXL" }, price: 2.5 },
    ],
    price: 2.5,
    currency: "BHD",
    image: { photo: "1581655353564-df123a1eb820", width: 900, height: 1100 },
    featured: true,
    tags: ["bestseller"],
  },
  {
    slug: "oversized-tee",
    category: "clothing",
    subcategory: "tshirts",
    name: { en: "Oversized Tee", ar: "تيشيرت أوفرسايز" },
    description: {
      en: "A boxy, oversized tee in soft cotton jersey, cut long enough to wear untucked.",
      ar: "تيشيرت واسع القصة من الجيرسي القطني الناعم، بطول يسمح بارتدائه دون إدخاله.",
    },
    variants: [
      { id: "s", label: { en: "S", ar: "S" }, price: 2.5 },
      { id: "m", label: { en: "M", ar: "M" }, price: 2.5 },
      { id: "l", label: { en: "L", ar: "L" }, price: 2.5 },
    ],
    price: 2.5,
    currency: "BHD",
    image: { photo: "1552903905-5e39e774e375", width: 900, height: 1100 },
    featured: true,
    tags: ["new"],
  },
  {
    slug: "linen-blend-shirt",
    category: "clothing",
    subcategory: "shirts",
    name: { en: "Linen Blend Shirt", ar: "قميص مزيج الكتان" },
    description: {
      en: "A shirt in a breathable linen blend, sleeves that roll and stay — relaxed enough for the weekend, sharp enough for the office.",
      ar: "قميص من مزيج الكتان القابل للتهوية بأكمام تُطوى وتثبت — مريح لعطلة نهاية الأسبوع وأنيق بما يكفي للعمل.",
    },
    variants: [
      { id: "s", label: { en: "S", ar: "S" }, price: 4.5 },
      { id: "m", label: { en: "M", ar: "M" }, price: 4.5 },
      { id: "l", label: { en: "L", ar: "L" }, price: 4.5 },
      { id: "xl", label: { en: "XL", ar: "XL" }, price: 4.5 },
      { id: "xxl", label: { en: "XXL", ar: "XXL" }, price: 4.5 },
    ],
    price: 4.5,
    currency: "BHD",
    image: { photo: "1740711152088-88a009e877bb", width: 900, height: 1100 },
    featured: false,
    tags: [],
  },
  {
    slug: "classic-chino-pants",
    category: "clothing",
    subcategory: "chinos",
    name: { en: "Classic Chino Pants", ar: "بنطال تشينو كلاسيكي" },
    description: {
      en: "A tailored chino with a clean taper, finished in a neutral tone that pairs with everything else on the rack.",
      ar: "بنطال تشينو مفصل بقصة ضيقة أنيقة، بلون محايد يتناسق مع كل قطعة أخرى في المتجر.",
    },
    variants: [
      { id: "34", label: { en: "34", ar: "٣٤" }, price: 4 },
      { id: "36", label: { en: "36", ar: "٣٦" }, price: 4 },
      { id: "38", label: { en: "38", ar: "٣٨" }, price: 4 },
      { id: "40", label: { en: "40", ar: "٤٠" }, price: 4 },
      { id: "42", label: { en: "42", ar: "٤٢" }, price: 4 },
    ],
    price: 4,
    currency: "BHD",
    image: { photo: "1678274342617-09c13eefab9f", width: 900, height: 1100 },
    featured: false,
    tags: [],
  },

  // ---------- perfumes ----------
  {
    slug: "oud-al-bahrain",
    category: "perfume",
    subcategory: "oud",
    name: { en: "Oud Al Bahrain", ar: "عود البحرين" },
    description: {
      en: "A dense, resinous oud built to last from morning into evening without needing to be reapplied.",
      ar: "عود كثيف وراتنجي مصمَّم ليدوم من الصباح حتى المساء دون الحاجة لإعادة وضعه.",
    },
    variants: [
      { id: "30ml", label: { en: "30ml", ar: "٣٠ مل" }, price: 14 },
      { id: "50ml", label: { en: "50ml", ar: "٥٠ مل" }, price: 22 },
      { id: "100ml", label: { en: "100ml", ar: "١٠٠ مل" }, price: 34 },
    ],
    price: 14,
    currency: "BHD",
    image: { photo: "1738414808975-201966230c59", width: 900, height: 1100 },
    featured: false,
    tags: [],
  },
  {
    slug: "amber-nights",
    category: "perfume",
    subcategory: "oriental",
    name: { en: "Amber Nights", ar: "ليالي العنبر" },
    description: {
      en: "Warm amber and spice, composed to sit close to the skin rather than fill a room.",
      ar: "عنبر دافئ وتوابل، مركَّب ليبقى قريباً من البشرة لا ليملأ الغرفة.",
    },
    variants: [
      { id: "30ml", label: { en: "30ml", ar: "٣٠ مل" }, price: 12 },
      { id: "50ml", label: { en: "50ml", ar: "٥٠ مل" }, price: 19 },
      { id: "100ml", label: { en: "100ml", ar: "١٠٠ مل" }, price: 29 },
    ],
    price: 12,
    currency: "BHD",
    image: { photo: "1613521140785-e85e427f8002", width: 900, height: 1100 },
    featured: true,
    tags: ["bestseller"],
  },
  {
    slug: "leather-and-oud",
    category: "perfume",
    subcategory: "woody",
    name: { en: "Leather & Oud", ar: "جلد وعود" },
    description: {
      en: "A dark, resinous blend of leather and oud, built for evenings and cooler months.",
      ar: "مزيج داكن وراتنجي من الجلد والعود، مصمَّم للسهرات والأشهر الأكثر برودة.",
    },
    variants: [
      { id: "30ml", label: { en: "30ml", ar: "٣٠ مل" }, price: 13 },
      { id: "50ml", label: { en: "50ml", ar: "٥٠ مل" }, price: 21 },
      { id: "100ml", label: { en: "100ml", ar: "١٠٠ مل" }, price: 32 },
    ],
    price: 13,
    currency: "BHD",
    image: { photo: "1669350350450-e7d42d85fcd2", width: 900, height: 1100 },
    featured: false,
    tags: [],
  },
  {
    slug: "manama-musk",
    category: "perfume",
    subcategory: "oud",
    name: { en: "Manama Musk", ar: "مسك المنامة" },
    description: {
      en: "Our best-selling blend, pairing white musk with a soft, refined oud base.",
      ar: "مزيجنا الأكثر مبيعاً، يجمع بين المسك الأبيض وقاعدة عود ناعمة ومصقولة.",
    },
    variants: [
      { id: "30ml", label: { en: "30ml", ar: "٣٠ مل" }, price: 15 },
      { id: "50ml", label: { en: "50ml", ar: "٥٠ مل" }, price: 23 },
      { id: "100ml", label: { en: "100ml", ar: "١٠٠ مل" }, price: 35 },
    ],
    price: 15,
    currency: "BHD",
    image: { photo: "1650686036849-ff87bcaa2e9e", width: 900, height: 1100 },
    featured: true,
    tags: ["bestseller"],
  },
  {
    slug: "vetiver-noir",
    category: "perfume",
    subcategory: "woody",
    name: { en: "Vetiver Noir", ar: "فيتيفر نوار" },
    description: {
      en: "An earthy, green vetiver kept sharp and dry — a quiet, confident everyday scent.",
      ar: "فيتيفر ترابي وأخضر يبقى جافاً وحاداً — عطر هادئ وواثق للاستخدام اليومي.",
    },
    variants: [
      { id: "30ml", label: { en: "30ml", ar: "٣٠ مل" }, price: 12 },
      { id: "50ml", label: { en: "50ml", ar: "٥٠ مل" }, price: 19 },
      { id: "100ml", label: { en: "100ml", ar: "١٠٠ مل" }, price: 28 },
    ],
    price: 12,
    currency: "BHD",
    image: { photo: "1617661338085-d1ec6a89a6d8", width: 900, height: 1100 },
    featured: false,
    tags: [],
  },
  {
    slug: "saffron-oud",
    category: "perfume",
    subcategory: "oud",
    name: { en: "Saffron Oud", ar: "عود الزعفران" },
    description: {
      en: "A sharper, spice-forward oud lifted with saffron — one for evenings, not the office.",
      ar: "عود أكثر حدة تتصدره التوابل ويرتفع بالزعفران — عطر للسهرات لا لمكان العمل.",
    },
    variants: [
      { id: "30ml", label: { en: "30ml", ar: "٣٠ مل" }, price: 16 },
      { id: "50ml", label: { en: "50ml", ar: "٥٠ مل" }, price: 24 },
      { id: "100ml", label: { en: "100ml", ar: "١٠٠ مل" }, price: 35 },
    ],
    price: 16,
    currency: "BHD",
    image: { photo: "1663254515553-c33847ac142d", width: 900, height: 1100 },
    featured: false,
    tags: ["new"],
  },
  {
    slug: "golden-sands",
    category: "perfume",
    subcategory: "oriental",
    name: { en: "Golden Sands", ar: "الرمال الذهبية" },
    description: {
      en: "Vanilla, sandalwood, and a trace of oud — warm enough for winter, light enough for anytime.",
      ar: "فانيليا وخشب الصندل ولمسة من العود — دافئ بما يكفي للشتاء، وخفيف بما يكفي لأي وقت.",
    },
    variants: [
      { id: "30ml", label: { en: "30ml", ar: "٣٠ مل" }, price: 11 },
      { id: "50ml", label: { en: "50ml", ar: "٥٠ مل" }, price: 18 },
      { id: "100ml", label: { en: "100ml", ar: "١٠٠ مل" }, price: 27 },
    ],
    price: 11,
    currency: "BHD",
    image: { photo: "1738414808975-201966230c59", width: 900, height: 1100 },
    featured: false,
    tags: [],
  },
  {
    slug: "tobacco-amber",
    category: "perfume",
    subcategory: "oriental",
    name: { en: "Tobacco Amber", ar: "عنبر التبغ" },
    description: {
      en: "Warm tobacco leaf and amber resin, built to carry through a long day at the branch.",
      ar: "أوراق تبغ دافئة وراتنج العنبر، مصمَّم ليدوم طوال يوم عمل طويل في الفرع.",
    },
    variants: [
      { id: "30ml", label: { en: "30ml", ar: "٣٠ مل" }, price: 9 },
      { id: "50ml", label: { en: "50ml", ar: "٥٠ مل" }, price: 15 },
      { id: "100ml", label: { en: "100ml", ar: "١٠٠ مل" }, price: 23 },
    ],
    price: 9,
    currency: "BHD",
    image: { photo: "1638295916768-459f6cf440bc", width: 900, height: 1100 },
    featured: true,
    tags: [],
  },
];

export default products;

export function getAllProducts() {
  return products;
}

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category) {
  if (!category || category === "all") return products;
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(limit = 6) {
  return products.filter((p) => p.featured).slice(0, limit);
}

export function getRelatedProducts(slug, limit = 4) {
  const current = getProductBySlug(slug);
  if (!current) return [];
  return products
    .filter((p) => p.slug !== slug && p.category === current.category)
    .sort((a, b) => {
      const aMatch = a.subcategory === current.subcategory ? 0 : 1;
      const bMatch = b.subcategory === current.subcategory ? 0 : 1;
      return aMatch - bMatch;
    })
    .slice(0, limit);
}

export function getSubcategories(category) {
  const list = getProductsByCategory(category);
  return [...new Set(list.map((p) => p.subcategory))];
}
