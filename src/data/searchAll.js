// =========================================
// BLUE LOTUS — GLOBAL SEARCH
// -----------------------------------------
// سرچ سراسری روی فیلم + سریال + انیمه.
// برای Header استفاده می‌شود.
// =========================================

import { searchMovies } from "./movies";
import { searchSeries } from "./series";
import { searchAnime } from "./anime";

export function searchAll(query, limit = 8) {
  const q = query.trim();
  if (!q) return [];

  const movies = searchMovies(q).map((m) => ({
    ...m,
    kind: "movie",
    kindLabel: "فیلم",
  }));

  const series = searchSeries(q).map((s) => ({
    ...s,
    kind: "series",
    kindLabel: "سریال",
  }));

  const anime = searchAnime(q).map((a) => ({
    ...a,
    kind: "anime",
    kindLabel: "انیمه",
  }));

  return [...movies, ...series, ...anime].slice(0, limit);
}