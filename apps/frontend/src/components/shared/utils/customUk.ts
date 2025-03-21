import type { Locale } from 'date-fns';  // 1) Бярэм tып Locale з date-fns
import baseUk from 'date-fns/locale/uk'; // 2) Арыгінальная лакаль "uk"

// Ствараем нашу лакаль на базе baseUk
export const customUk: Locale = {
  ...baseUk,
  // localize можа быць undefined, таму выкарыстоўваем !
  localize: {
    ...baseUk.localize!,
    day(dayNumber: number, options?: { width?: string }) {
      // Атрымаем скарочаную назву дня (пн, вт, ср...) з арыгінальнай лакалі,
      // прымушаем date-fns вяртаць short-варыянт
      const shortName = baseUk.localize!.day(dayNumber, {
        ...options,
        width: 'short'
      });
      // Робім першую літару вялікай ("пн" -> "Пн")
      return shortName.charAt(0).toUpperCase() + shortName.slice(1);
    }
  }
};
