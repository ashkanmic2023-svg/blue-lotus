// =========================================
// BLUE LOTUS — SERIES DATA
// -----------------------------------------
// منبع واحد حقیقت برای سریال‌ها.
// ساختار API-like، هم‌راستا با movies.js.
// =========================================

export const series = [
  {
    id: 1,
    slug: "dark",
    title: "Dark",
    originalTitle: "دارک",
    persianTitle: "دارک",
    year: 2017,
    runtime: 60,
    genres: ["Mystery", "Sci-Fi"],
    genre: "Mystery · Sci-Fi",
    rating: 8.7,
    poster:
      "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/w780/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
    description:
      "شهری که رازهایش در تاریکی پنهان شده‌اند؛ داستانی درباره خانواده، زمان و زنجیره‌ای از اتفاقات که نسل‌ها را به هم گره می‌زند.",
    featured: true,
    tags: ["popular"],
    type: "Series",
  },
  {
    id: 2,
    slug: "breaking-bad",
    title: "Breaking Bad",
    originalTitle: "بریکینگ بد",
    persianTitle: "بریکینگ بد",
    year: 2008,
    runtime: 49,
    genres: ["Crime", "Drama"],
    genre: "Crime · Drama",
    rating: 9.5,
    poster:
      "https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRN2.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/w780/ztkUQFLlC19CCMYHW9o1zWhJRN2.jpg",
    description:
      "معلم شیمی دبیرستان پس از تشخیص سرطان، برای تأمین آینده‌ی خانواده‌اش وارد دنیای تولید مواد مخدر می‌شود.",
    featured: false,
    tags: ["popular", "classic"],
    type: "Series",
  },
  {
    id: 3,
    slug: "stranger-things",
    title: "Stranger Things",
    originalTitle: "چیزهای عجیب",
    persianTitle: "چیزهای عجیب",
    year: 2016,
    runtime: 51,
    genres: ["Drama", "Fantasy"],
    genre: "Drama · Fantasy",
    rating: 8.6,
    poster:
      "https://image.tmdb.org/t/p/w500/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/w780/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg",
    description:
      "گروهی از بچه‌ها در شهری کوچک با نیروهای فراطبیعی و آزمایش‌های مخفی دولتی روبه‌رو می‌شوند.",
    featured: false,
    tags: ["popular"],
    type: "Series",
  },
  {
    id: 4,
    slug: "the-last-of-us",
    title: "The Last of Us",
    originalTitle: "آخرین بازمانده از ما",
    persianTitle: "آخرین بازمانده از ما",
    year: 2023,
    runtime: 55,
    genres: ["Drama", "Adventure"],
    genre: "Drama · Adventure",
    rating: 8.7,
    poster:
      "https://image.tmdb.org/t/p/w500/dmo6TYuuJgaYinXBPjrgGfmsB5C.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/w780/dmo6TYuuJgaYinXBPjrgGfmsB5C.jpg",
    description:
      "در دنیایی پس از فروپاشی، مردی خسته و دختری جوان سفری پرخطر را برای یافتن امیدی تازه آغاز می‌کنند.",
    featured: false,
    tags: ["popular"],
    type: "Series",
  },
];

// =========================================
// HELPERS
// =========================================

export function getFeaturedSeries() {
  return series.find((s) => s.featured) || series[0];
}

export function getOtherSeries() {
  return series.filter((s) => !s.featured);
}

export function getSeriesBySlug(slug) {
  return series.find((s) => s.slug === slug);
}

export function getSeriesByTag(tag) {
  if (!tag || tag === "all") return series;
  return series.filter((s) => s.tags.includes(tag));
}

export function searchSeries(query) {
  const q = query.trim().toLowerCase();
  if (!q) return series;

  return series.filter((s) => {
    return (
      s.title.toLowerCase().includes(q) ||
      s.originalTitle.toLowerCase().includes(q) ||
      s.persianTitle.toLowerCase().includes(q) ||
      s.genres.some((g) => g.toLowerCase().includes(q))
    );
  });
}