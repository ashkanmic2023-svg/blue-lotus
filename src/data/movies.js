// =========================================
// BLUE LOTUS — MOVIES DATA
// -----------------------------------------
// این فایل منبع واحد حقیقت برای فیلم‌هاست.
// بعداً با API جایگزین می‌شود (ساختار API-like).
// هم Home (MoviesSection) و هم Movies Page از این می‌خوانند.
// =========================================

export const movies = [
  {
    id: 1,
    slug: "interstellar",
    title: "Interstellar",
    originalTitle: "میان‌ستاره‌ای",
    persianTitle: "میان‌ستاره‌ای",
    year: 2014,
    runtime: 169,
    genres: ["Sci-Fi", "Drama"],
    genre: "Sci-Fi · Drama",
    rating: 8.7,
    poster:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/w780/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description:
      "سفری فراتر از زمان و فضا؛ روایتی درباره عشق، بقا و تلاش انسان برای پیدا کردن خانه‌ای تازه در میان ستارگان.",
    featured: true,
    tags: ["popular"],
    type: "Movie",
  },
  {
    id: 2,
    slug: "inception",
    title: "Inception",
    originalTitle: "تلقین",
    persianTitle: "تلقین",
    year: 2010,
    runtime: 148,
    genres: ["Sci-Fi", "Thriller"],
    genre: "Sci-Fi · Thriller",
    rating: 8.8,
    poster:
      "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/w780/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    description:
      "دزدی حرفه‌ای که در خواب دیگران نفوذ می‌کند، مأموریتی معکوس می‌پذیرد: کاشتن یک ایده در ذهن یک وارث.",
    featured: false,
    tags: ["popular"],
    type: "Movie",
  },
  {
    id: 3,
    slug: "the-dark-knight",
    title: "The Dark Knight",
    originalTitle: "شوالیه تاریکی",
    persianTitle: "شوالیه تاریکی",
    year: 2008,
    runtime: 152,
    genres: ["Action", "Crime"],
    genre: "Action · Crime",
    rating: 9.0,
    poster:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/w780/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    description:
      "بتمن در برابر آشوبی که جوکر به شهر گاتهام می‌آورد، مجبور می‌شود مرزهای اخلاقی خود را دوباره تعریف کند.",
    featured: false,
    tags: ["popular", "classic"],
    type: "Movie",
  },
  {
    id: 4,
    slug: "blade-runner-2049",
    title: "Blade Runner 2049",
    originalTitle: "بلید رانر ۲۰۴۹",
    persianTitle: "بلید رانر ۲۰۴۹",
    year: 2017,
    runtime: 164,
    genres: ["Sci-Fi", "Drama"],
    genre: "Sci-Fi · Drama",
    rating: 8.1,
    poster:
      "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/w780/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    description:
      "افسر جدیدی از پلیس لس‌آنجلس رازی را کشف می‌کند که می‌تواند جامعه‌ی باقی‌مانده را از هم بپاشد.",
    featured: false,
    tags: ["classic"],
    type: "Movie",
  },
  {
    id: 5,
    slug: "dune",
    title: "Dune",
    originalTitle: "تل‌ماسه",
    persianTitle: "تل‌ماسه",
    year: 2021,
    runtime: 155,
    genres: ["Sci-Fi", "Adventure"],
    genre: "Sci-Fi · Adventure",
    rating: 8.0,
    poster:
      "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/w780/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    description:
      "پسر جوانی از خاندانی اشرافی به سیاره‌ای خطرناک فرستاده می‌شود تا سرنوشت کهکشان را تغییر دهد.",
    featured: false,
    tags: ["popular"],
    type: "Movie",
  },
];

// =========================================
// HELPERS
// =========================================

export function getFeaturedMovie() {
  return movies.find((m) => m.featured) || movies[0];
}

export function getOtherMovies() {
  return movies.filter((m) => !m.featured);
}

export function getMovieBySlug(slug) {
  return movies.find((m) => m.slug === slug);
}

export function getMoviesByTag(tag) {
  if (!tag || tag === "all") return movies;
  return movies.filter((m) => m.tags.includes(tag));
}

export function searchMovies(query) {
  const q = query.trim().toLowerCase();
  if (!q) return movies;

  return movies.filter((m) => {
    return (
      m.title.toLowerCase().includes(q) ||
      m.originalTitle.toLowerCase().includes(q) ||
      m.persianTitle.toLowerCase().includes(q) ||
      m.genres.some((g) => g.toLowerCase().includes(q))
    );
  });
}