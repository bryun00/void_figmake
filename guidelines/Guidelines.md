# VOID Portfolio — Design System Guidelines

## Typography

Source of truth: Figma "Local Text Styles" (18 styles), file `QgZFQvMoDXqPaFzQ9lhyTt`.

### Font families used

| Family | Role | Loaded in code? |
| --- | --- | --- |
| Pretendard | Korean headings & body copy (H0/Kr, H2–H5 `/Kr-*`, Body/Kr, Caption/Kr-Label) | ❌ not loaded — falls back to system sans-serif |
| Space Grotesk | English subtitles, nav, UI labels (H1, H2–H5 `/En-*`) | ✅ `@fontsource/space-grotesk` (400/500/600/700) |
| PP Mori | English body & caption (H1, Body/En, Caption/En-Label) | ❌ not loaded — paid font (Pangram Pangram), needs licensed files |
| TheNightWatch | Display / logotype | ✅ local file at `/fonts/TheNightWatch.woff2` |
| Inter | Misc UI elements | ❌ not loaded |
| Manrope | Used in places (secondary UI text) | ✅ loaded via Google Fonts (400/600/700) |
| Geist Mono | Used in places (monospace labels) | ✅ loaded via Google Fonts (400/700) |
| Open Sans, Space Mono | Referenced on some non-production canvases only | not used in the current site code |

**Known gap:** Pretendard and PP Mori are the two most-used families in the actual page code (175 and 30 usages respectively) but have no `@font-face` backing them, so every Korean heading/body string and every PP Mori string is silently rendering as the browser's fallback sans-serif — the same class of bug fixed for Space Grotesk (see below).

### Text style scale

| Style | Font | Weight | Size | Line-height | Letter-spacing |
| --- | --- | --- | --- | --- | --- |
| Display | TheNightWatch | Regular | 80px | Auto | -2% |
| H0 / Kr | Pretendard | SemiBold | 40px | Auto | 0% |
| H1 | PP Mori | Black | 32px | Auto | 0% |
| H1 | Space Grotesk | Medium | 32px | Auto | 0% |
| H2 / En-Subtitle | Space Grotesk | SemiBold | 24px | Auto | 0% |
| H2 / Kr-Subtitle | Pretendard | SemiBold | 24px | Auto | 0% |
| H3 / En-Subtitle | Space Grotesk | Regular | 22px | 160% | 0% |
| H3 / Kr-Subtitle | Pretendard | Regular | 22px | 160% | 0% |
| H4 / En-subtitle | Space Grotesk | SemiBold | 20px | Auto | 0% |
| H4 / Kr-subtitle | Pretendard | SemiBold | 20px | Auto | 0% |
| H5 / En-subtitle | Space Grotesk | SemiBold | 18px | Auto | 0% |
| H5 / Kr-subtitle | Pretendard | SemiBold | 18px | Auto | 0% |
| Body / En (16px) | PP Mori | Regular | 16px | 150% | 0% |
| Body / En (14px) | PP Mori | Semibold | 14px | 150% | 0% |
| Body / Kr (16px) | Pretendard | Regular | 16px | 150% | 0% |
| Body / Kr (14px) | Pretendard | Medium | 14px | 150% | 0% |
| Caption / En-Label | PP Mori | Regular | 12px | 140% | 0% |
| Caption / Kr-Label | Pretendard | Regular | 12px | 140% | 0% |

### Rule: font-family must match a real `@font-face`

Figma exports font names as `'FamilyName:WeightName'` (e.g. `Space_Grotesk:SemiBold`). This is **not** a real font name — never use it directly in code. Every `@fontsource` (and Google Fonts) `@font-face` declares the plain family name (e.g. `Space Grotesk`) with a numeric `font-weight`. Always translate Figma's export to:

```
font-['Space_Grotesk',sans-serif] font-semibold   /* not font-['Space_Grotesk:SemiBold',sans-serif] */
```

Using the colon-suffixed name only happens to work on a machine that has a font locally installed under that literal name — everywhere else it silently falls back to the generic sans-serif, which is why text can look "broken" on some computers and fine on others.

## General guidelines

* Only use absolute positioning when necessary. Opt for responsive and well structured layouts that use flexbox and grid by default
* Refactor code as you go to keep code clean
* Keep file sizes small and put helper functions and components in their own files.
