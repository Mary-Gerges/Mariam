// ============================================================
// بيانات الترانيم والمدايح والألحان
// لإضافة عنصر جديد: أضف كائنًا جديدًا داخل القائمة المناسبة
//
// الحقول:
// id          - رقم فريد
// title       - اسم الترنيمة / المديح / اللحن
// description - وصف قصير (اختياري)
// youtubeId   - معرف الفيديو على يوتيوب (الجزء بعد watch?v= أو youtu.be/)
// youtubeUrl  - رابط الفيديو الكامل (للزر الخارجي)
// image       - (اختياري) صورة مخصصة داخل public/images/
//                 إن تُركت فارغة تُستخدم صورة غلاف الفيديو من يوتيوب تلقائيًا
// type        - "ترانيم" أو "مدايح" أو "ألحان" (مهم: هكذا بالضبط)
// ============================================================

export const hymnTabs = [
  { id: "ترانيم", label: "ترانيم" },
  { id: "مدايح", label: "مدايح" },
  { id: "ألحان", label: "ألحان" },
];

export const hymns = [
  {
    id: 1,
    title: "علشان خاطر العذرا يارب",
    description: "",
    youtubeId: "rJSKuux7NOk",
    youtubeUrl: "https://youtu.be/rJSKuux7NOk?si=a9DPS82uROTl4hOM",
    type: "ترانيم",
  },
  {
    id: 2,
    title: "يا بختك يا إللي تتشفع بأم النور",
    description: "",
    youtubeId: "vOxjfY-kLNA",
    youtubeUrl: "https://youtu.be/vOxjfY-kLNA?si=ebv1DsZ2ZCnJFBif",
    type: "ترانيم",
  },
  {
    id: 3,
    title: "ولسه يا عدرا",
    description: "",
    youtubeId: "rsm0YWJFg6I",
    youtubeUrl: "https://youtu.be/rsm0YWJFg6I?si=wx4JuY5yjHMQ-GnB",
    type: "ترانيم",
  },
  {
    id: 4,
    title: "العدرا م ر ي م",
    description: "",
    youtubeId: "fTAYcnU-tIk",
    youtubeUrl: "https://youtu.be/fTAYcnU-tIk?si=GMmyut8zV1hgywFu",
    type: "ترانيم",
  },
  {
    id: 5,
    title: "2 أبريل",
    description: "",
    youtubeId: "904BB84vzDQ",
    youtubeUrl: "https://youtu.be/904BB84vzDQ?si=n-gXUA6h7ajpEqNn",
    type: "ترانيم",
  },
  {
    id: 6,
    title: "15 يوم (ستي يا مالكة قلوب الناس)",
    description: "",
    youtubeId: "KzdbFyPo7F0",
    youtubeUrl: "https://youtu.be/KzdbFyPo7F0?si=cgk64g6QDrSiW1zC",
    type: "ترانيم",
  },
  {
    id: 7,
    title: "يا عدرا عايز معجزة",
    description: "",
    youtubeId: "BiO4vo6i44o",
    youtubeUrl: "https://youtu.be/BiO4vo6i44o?si=OPOYCcnRqxOh8Bp3",
    type: "ترانيم",
  },
  {
    id: 8,
    title: "قلب العدرا",
    description: "",
    youtubeId: "QG6l6-FB_IA",
    youtubeUrl: "https://youtu.be/QG6l6-FB_IA?si=0osvQXqY_0hnvAxD",
    type: "ترانيم",
  },
  {
    id: 9,
    title: "مريم يا إبنة يواقيم",
    description: "",
    youtubeId: "FygH45hWGhY",
    youtubeUrl: "https://youtu.be/FygH45hWGhY?si=bBA3fqqYYANhLHEF",
    type: "ترانيم",
  },
  {
    id: 10,
    title: "محلاكي يا مريم",
    description: "",
    youtubeId: "pqRtpZWQHRY",
    youtubeUrl: "https://youtu.be/pqRtpZWQHRY?si=yoORlQrM1EvaihZn",
    type: "ترانيم",
  },
  {
    id: 11,
    title: "أمانة يا عدرا",
    description: "",
    youtubeId: "FoDC4AzWZmY",
    youtubeUrl: "https://youtu.be/FoDC4AzWZmY?si=KMUnmtcKrzY6vEiT",
    type: "ترانيم",
  },
  {
    id: 12,
    title: "مين أحن منك",
    description: "",
    youtubeId: "Iq236XeGY_c",
    youtubeUrl: "https://youtu.be/Iq236XeGY_c?si=wgaj7YEvdNOUx6ga",
    type: "ترانيم",
  },
  {
    id: 13,
    title: "متعشمين فيكي",
    description: "",
    youtubeId: "zXXnF5hmctQ",
    youtubeUrl: "https://youtu.be/zXXnF5hmctQ?si=22AF5n4pILmPkd6p",
    type: "ترانيم",
  },
  {
    id: 14,
    title: "ميدلي رشوا الورد",
    description: "",
    youtubeId: "Z04rZW2GL5Y",
    youtubeUrl: "https://youtu.be/Z04rZW2GL5Y?si=Q8Zz1WtIEvyi8Cde",
    type: "ترانيم",
  },
  {
    id: 15,
    title: "تطلع الاب من السماء",
    description: "",
    youtubeId: "JL52iqE75FQ",
    youtubeUrl: "https://youtu.be/JL52iqE75FQ?si=wp1PIgfz0pxfj4A0",
    type: "ألحان",
  },
  {
    id: 16,
    title: "السلام لكي يا مريم",
    description: "",
    youtubeId: "x7ufgSEeAh0",
    youtubeUrl: "https://youtu.be/x7ufgSEeAh0?si=m4Ebzq9KzXVCfaWG",
    type: "مدايح",
  },
  {
    id: 17,
    title: "العشرة أوتار - يا م ر ي م",
    description:
      "",
    youtubeId: "f5q2G5Wk5Wk",
    youtubeUrl: "https://youtu.be/f5q2G5Wk5Wk?si=Hyn12eICU106-nn7",
    type: "مدايح",
  },
  {
    id: 18,
    title: "يا مريم البكر",
    description: "",
    youtubeId: "ZtgmHrETyyM",
    youtubeUrl: "https://youtu.be/ZtgmHrETyyM?si=c0X-ay93BiOOi9v9",
    type: "ترانيم",
  },
  {
    id: 19,
    title: "لحن أفرحي يا مريم",
    description: "",
    youtubeId: "PfIJqe13TR8",
    youtubeUrl: "https://youtu.be/PfIJqe13TR8?si=ych5ZvAXhkckjkjx",
    type: "ألحان",
  },
];
