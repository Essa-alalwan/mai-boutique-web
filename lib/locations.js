const locations = [
  {
    id: "manama",
    order: 1,
    isFlagship: true,
    name: { en: "Manama", ar: "المنامة" },
    addressLine: {
      en: "Block 304, Road 1705, Manama",
      ar: "مجمع ٣٠٤، طريق ١٧٠٥، المنامة",
    },
    phone: "+973 1700 0001",
    hours: { en: "Sat–Thu, 10am–10pm", ar: "السبت–الخميس، ١٠ص–١٠م" },
    mapQuery: "M.A.I Clothing and Perfumes Manama Bahrain",
  },
  {
    id: "souq-albaraha",
    order: 2,
    isFlagship: false,
    name: { en: "Souq Al Baraha", ar: "سوق البراحة" },
    addressLine: { en: "Souq Al Baraha, Manama", ar: "سوق البراحة، المنامة" },
    phone: "+973 1700 0002",
    hours: { en: "Sat–Thu, 10am–10pm", ar: "السبت–الخميس، ١٠ص–١٠م" },
    mapQuery: "M.A.I Clothing and Perfumes Souq Al Baraha Bahrain",
  },
  {
    id: "galali",
    order: 3,
    isFlagship: false,
    name: { en: "Galali", ar: "قلالي" },
    addressLine: { en: "Main Road, Galali", ar: "الطريق الرئيسي، قلالي" },
    phone: "+973 1700 0003",
    hours: { en: "Sat–Thu, 10am–10pm", ar: "السبت–الخميس، ١٠ص–١٠م" },
    mapQuery: "M.A.I Clothing and Perfumes Galali Bahrain",
  },
  {
    id: "aali",
    order: 4,
    isFlagship: false,
    name: { en: "Aali", ar: "عالي" },
    addressLine: { en: "Main Road, Aali", ar: "الطريق الرئيسي، عالي" },
    phone: "+973 1700 0004",
    hours: { en: "Sat–Thu, 10am–10pm", ar: "السبت–الخميس، ١٠ص–١٠م" },
    mapQuery: "M.A.I Clothing and Perfumes Aali Bahrain",
  },
  {
    id: "karzakan",
    order: 5,
    isFlagship: false,
    name: { en: "Karzakan", ar: "كرزكان" },
    addressLine: { en: "Main Road, Karzakan", ar: "الطريق الرئيسي، كرزكان" },
    phone: "+973 1700 0005",
    hours: { en: "Sat–Thu, 10am–10pm", ar: "السبت–الخميس، ١٠ص–١٠م" },
    mapQuery: "M.A.I Clothing and Perfumes Karzakan Bahrain",
  },
  {
    id: "sitra",
    order: 6,
    isFlagship: false,
    name: { en: "Sitra", ar: "سترة" },
    addressLine: { en: "Main Road, Sitra", ar: "الطريق الرئيسي، سترة" },
    phone: "+973 1700 0006",
    hours: { en: "Sat–Thu, 10am–10pm", ar: "السبت–الخميس، ١٠ص–١٠م" },
    mapQuery: "M.A.I Clothing and Perfumes Sitra Bahrain",
  },
  {
    id: "askar",
    order: 7,
    isFlagship: false,
    name: { en: "Askar", ar: "عسكر" },
    addressLine: { en: "Main Road, Askar", ar: "الطريق الرئيسي، عسكر" },
    phone: "+973 1700 0007",
    hours: { en: "Sat–Thu, 10am–10pm", ar: "السبت–الخميس، ١٠ص–١٠م" },
    mapQuery: "M.A.I Clothing and Perfumes Askar Bahrain",
  },
  {
    id: "sanad",
    order: 8,
    isFlagship: false,
    name: { en: "Sanad", ar: "سند" },
    addressLine: { en: "Main Road, Sanad", ar: "الطريق الرئيسي، سند" },
    phone: "+973 1700 0008",
    hours: { en: "Sat–Thu, 10am–10pm", ar: "السبت–الخميس، ١٠ص–١٠م" },
    mapQuery: "M.A.I Clothing and Perfumes Sanad Bahrain",
  },
  {
    id: "jid-ali",
    order: 9,
    isFlagship: false,
    name: { en: "Jid Ali", ar: "جدعلي" },
    addressLine: { en: "Main Road, Jid Ali", ar: "الطريق الرئيسي، جدعلي" },
    phone: "+973 1700 0009",
    hours: { en: "Sat–Thu, 10am–10pm", ar: "السبت–الخميس، ١٠ص–١٠م" },
    mapQuery: "M.A.I Clothing and Perfumes Jid Ali Bahrain",
  },
  {
    id: "jannusan",
    order: 10,
    isFlagship: false,
    name: { en: "Jannusan", ar: "جنوسان" },
    addressLine: { en: "Main Road, Jannusan", ar: "الطريق الرئيسي، جنوسان" },
    phone: "+973 1700 0010",
    hours: { en: "Sat–Thu, 10am–10pm", ar: "السبت–الخميس، ١٠ص–١٠م" },
    mapQuery: "M.A.I Clothing and Perfumes Jannusan Bahrain",
  },
];

export default locations;

export function getAllLocations() {
  return [...locations].sort((a, b) => a.order - b.order);
}

export function getFlagshipLocation() {
  return locations.find((l) => l.isFlagship);
}

export function getMapUrl(location) {
  const query = encodeURIComponent(location.mapQuery);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}
