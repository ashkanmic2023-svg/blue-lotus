// =========================================
// BLUE LOTUS — ANIME DATA
// -----------------------------------------
// منبع واحد حقیقت برای انیمه‌ها.
// ساختار API-like، هم‌راستا با movies.js و series.js.
// japaneseTitle به عنوان هویت اختصاصی انیمه حفظ شده.
// =========================================

export const anime = [
  {
    id: "attack-on-titan",
    slug: "attack-on-titan",
    title: "Attack on Titan",
    japaneseTitle: "進撃の巨人",
    originalTitle: "حمله به تایتان",
    persianTitle: "حمله به تایتان",
    year: 2013,
    runtime: 24,
    genres: ["Action", "Dark Fantasy"],
    genre: "Action · Dark Fantasy",
    rating: 9.1,
    poster:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=900&q=85",
    backdrop:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1400&q=85",
    description:
      "در دنیایی که انسان‌ها پشت دیوارهای عظیم زندگی می‌کنند، حقیقت آرام‌آرام از دل ترس بیرون می‌آید. داستانی از آزادی، بقا، دوستی و انتخاب‌هایی که هیچ بازگشتی از آن‌ها وجود ندارد.",
    featured: true,
    tags: ["popular"],
    type: "Anime",
  },
  {
    id: "demon-slayer",
    slug: "demon-slayer",
    title: "Demon Slayer",
    japaneseTitle: "鬼滅の刃",
    originalTitle: "شیطان‌کش",
    persianTitle: "شیطان‌کش",
    year: 2019,
    runtime: 24,
    genres: ["Action", "Fantasy"],
    genre: "Action · Fantasy",
    rating: 8.6,
    poster:
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=900&q=85",
    backdrop:
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1400&q=85",
    description:
      "پسر جوانی پس از کشته شدن خانواده‌اش به دست شیاطین، برای نجات خواهرش شمشیرزن می‌شود.",
    featured: false,
    tags: ["popular"],
    type: "Anime",
  },
  {
    id: "jujutsu-kaisen",
    slug: "jujutsu-kaisen",
    title: "Jujutsu Kaisen",
    japaneseTitle: "呪術廻戦",
    originalTitle: "جوجوتسو کایسن",
    persianTitle: "جوجوتسو کایسن",
    year: 2020,
    runtime: 24,
    genres: ["Action", "Supernatural"],
    genre: "Action · Supernatural",
    rating: 8.5,
    poster:
      "https://images.unsplash.com/photo-1614583224978-f8f9a4e4c4b3?auto=format&fit=crop&w=900&q=85",
    backdrop:
      "https://images.unsplash.com/photo-1614583224978-f8f9a4e4c4b3?auto=format&fit=crop&w=1400&q=85",
    description:
      "دانش‌آموزی که میزبان یک نفرین قدرتمند شده، به دنیای جادوگران جوجوتسو وارد می‌شود.",
    featured: false,
    tags: ["popular"],
    type: "Anime",
  },
  {
    id: "your-name",
    slug: "your-name",
    title: "Your Name",
    japaneseTitle: "君の名は。",
    originalTitle: "نام تو",
    persianTitle: "نام تو",
    year: 2016,
    runtime: 106,
    genres: ["Romance", "Fantasy"],
    genre: "Romance · Fantasy",
    rating: 8.4,
    poster:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=85",
    backdrop:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=85",
    description:
      "دو نوجوان در دو شهر متفاوت به شکلی غیرمنتظره زندگی‌شان با هم گره می‌خورد.",
    featured: false,
    tags: ["popular"],
    type: "Anime",
  },
];

// =========================================
// HELPERS
// =========================================

export function getFeaturedAnime() {
  return anime.find((a) => a.featured) || anime[0];
}

export function getOtherAnime() {
  return anime.filter((a) => !a.featured);
}

export function getAnimeBySlug(slug) {
  return anime.find((a) => a.slug === slug);
}

export function getAnimeByTag(tag) {
  if (!tag || tag === "all") return anime;
  return anime.filter((a) => a.tags.includes(tag));
}

export function searchAnime(query) {
  const q = query.trim().toLowerCase();
  if (!q) return anime;

  return anime.filter((a) => {
    return (
      a.title.toLowerCase().includes(q) ||
      a.japaneseTitle.toLowerCase().includes(q) ||
      a.originalTitle.toLowerCase().includes(q) ||
      a.persianTitle.toLowerCase().includes(q) ||
      a.genres.some((g) => g.toLowerCase().includes(q))
    );
  });
}