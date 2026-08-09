// ============================================================
// بيانات العظات
// لإضافة عظة جديدة: أضف كائنًا جديدًا داخل القائمة أدناه
//
// الحقول:
// id            - رقم فريد (يجب أن لا يتكرر!)
// title         - عنوان العظة
// speaker       - اسم الخادم / الأب
// youtubeId     - معرف الفيديو على يوتيوب (الجزء بعد watch?v= أو youtu.be/)
// youtubeUrl    - رابط الفيديو الكامل (للزر الخارجي)
// thumbnail     - (اختياري) صورة مخصصة داخل public/images/
//                 إن تُركت فارغة تُستخدم صورة غلاف الفيديو من يوتيوب تلقائيًا
// duration      - مدة الفيديو (اختياري)
// category      - "روحية" أو "فضائل" (مهم: هكذا بالضبط)
// ============================================================

export const sermonCategories = [
  { id: "all", label: "كل العظات" },
  { id: "روحية", label: "عظات روحية" },
  { id: "فضائل", label: "عظات عن فضائل العذراء" },
];

export const sermons = [
  {
    id: 1,
    title: "العذراء مريم رمز الطاعة في الخدمة",
    speaker: "البابا تواضروس الثاني",
    youtubeId: "QoGkjT50_DU",
    youtubeUrl: "https://www.youtube.com/watch?v=QoGkjT50_DU",
    duration: "3:33",
    category: "فضائل",
  },
  {
    id: 2,
    title: "القديسة العذراء مريم",
    speaker: "البابا شنودة الثالث",
    youtubeId: "wzmAFajMfhI",
    youtubeUrl: "https://youtu.be/wzmAFajMfhI?si=Pl54hRUu5KF-k_Ff",
    duration: "42:00",
    category: "روحية",
  },
  {
    id: 3,
    title: "الثيئوطوكوس",
    speaker: "ابونا داود لمعي",
    youtubeId: "iyiOXxbGPfg",
    youtubeUrl: "https://youtu.be/iyiOXxbGPfg?si=mSn8E1x7xO4aC9Au",
    duration: "28:00",
    category: "روحية",
  },
  {
    id: 4,
    title: "فضائل في حياة العذراء",
    speaker: "ابونا داود لمعي",
    youtubeId: "QWv2XPWFd_I",
    youtubeUrl: "https://youtu.be/QWv2XPWFd_I?si=3bwjGfDeyu8nvonM",
    duration: "31:00",
    category: "فضائل",
  },
  {
    id: 5,
    title: "امومة السيدة العذراء",
    speaker: "البابا شنودة الثالث",
    youtubeId: "XlUevRj-9qM",
    youtubeUrl: "https://youtu.be/XlUevRj-9qM?si=DMrwdkJJ4LsanqAX",
    duration: "38:00",
    category: "فضائل",
  },
  {
    id: 6,
    title: "مشاعر أمنا العذراء",
    speaker: "ابونا داود لمعي",
    youtubeId: "A90N0-vUBhM",
    youtubeUrl: "https://youtu.be/A90N0-vUBhM?si=WRvrMqITpi4jhojz",
    duration: "26:00",
    category: "روحية",
  },
  {
    id: 7,
    title: "البابا شنوده الثالث عن السيدة العذراء",
    speaker: "البابا شنوده الثالث",
    youtubeId: "aZ15ggNYne4",
    youtubeUrl: "https://www.youtube.com/watch?v=aZ15ggNYne4",
    category: "روحية",
  },
  {
    id: 8,
    title: "فضائل أمنا القديسة العذراء مريم",
    speaker: "ابونا تيودور ممدوح",
    youtubeId: "y5U8oJGqxW4",
    youtubeUrl: "https://youtu.be/y5U8oJGqxW4?si=6ABAv8OkZm9pnPmp",
    category: "فضائل",
  },
  {
    id: 9,
    title: "كيف نتشبه بالسيدة العذراء مريم ؟",
    speaker: "ابونا تادرس يعقوب",
    youtubeId: "tDBaGJ29tLE",
    youtubeUrl: "https://youtu.be/tDBaGJ29tLE?si=8_wPKeWE0g9aifGm",
    category: "روحية",
  },
  {
    id: 10,
    title: "فضائل من حياة العذراء",
    speaker: "ابونا داود لمعي",
    youtubeId: "jk1j4HGjBhg",
    youtubeUrl: "https://youtu.be/jk1j4HGjBhg?si=amM0Ucp4lvbUS1-Q",
    category: "فضائل",
  },
  {
    id: 11,
    title: "صفات القديسة العذراء مريم",
    speaker: "ابونا أغسطينوس موريس",
    youtubeId: "aZ15ggNYne4",
    youtubeUrl: "https://www.youtube.com/watch?v=aZ15ggNYne4",
    category: "روحية",
  },
  {
    id: 12,
    title: "خدمة العدرا مريم",
    speaker: "ابونا لوقا ماهر",
    youtubeId: "duPe8CDUnFk",
    youtubeUrl: "https://youtu.be/duPe8CDUnFk?si=eTL41xNYdZ_JuTGm",
    category: "روحية",
  },
  {
    id: 13,
    title: "اعظم النساء",
    speaker: "البابا شنوده الثالث",
    youtubeId: "aZ15ggNYne4",
    youtubeUrl: "https://youtu.be/aZ15ggNYne4?si=-N7NDx1l-P-piKkf",
    category: "روحية",
  },
];
