# VOID Portfolio — Design System Guidelines

## Typography

Source of truth: Figma "Local Text Styles" (18 styles), file `QgZFQvMoDXqPaFzQ9lhyTt`.

### Font families used

| Family | Role | Loaded in code? |
| --- | --- | --- |
| Pretendard | Korean headings & body copy, **and now English body/caption too** (H0/Kr, H2–H5 `/Kr-*`, Body/Kr, Caption/Kr-Label, plus what was PP Mori) | ✅ `@fontsource/pretendard` (400/500/600/700) |
| Space Grotesk | English subtitles, nav, UI labels (H1, H2–H5 `/En-*`) | ✅ `@fontsource/space-grotesk` (400/500/600/700) |
| ~~PP Mori~~ | ~~English body & caption~~ | **Removed.** It's a paid font (Pangram Pangram) whose license doesn't allow redistributing the font file, and this repo is public — committing the `.woff2` would violate the license. Replaced everywhere with Pretendard instead (it covers Latin glyphs fine). |
| TheNightWatch | Display / logotype ("VOID" wordmark) | ❌ **`@font-face` declared but the font file doesn't exist in the repo** (`/fonts/TheNightWatch.woff2` 404s) — always falls back, needs the actual font file. Same public-repo licensing question applies if it turns out to also be a paid font. |
| Inter | Misc UI elements | ❌ not loaded |
| Manrope | Used in places (secondary UI text) | ✅ loaded via Google Fonts (400/600/700) |
| Geist Mono | Used in places (monospace labels) | ✅ loaded via Google Fonts (400/700) |
| Open Sans, Space Mono | Referenced on some non-production canvases only | not used in the current site code |

**Known gap:** TheNightWatch (the "VOID" logotype) has a `@font-face` rule but the referenced file was never committed to the repo — the logo always renders in a fallback font. Needs the actual `.woff2` supplied, and confirmation it's OK to commit to this public repo (check its license first — see the PP Mori note above).

**Licensing rule:** never commit a paid/licensed font's actual file to this repo — it's public, so any file here is redistributable by anyone who clones it. Only self-hosted fonts under an open license (OFL, Apache, etc. — check `@fontsource`'s listed license) or Google Fonts belong here. For a paid font, use the closest available open-license substitute instead (e.g. Pretendard for PP Mori).

### Text style scale

| Style | Font | Weight | Size | Line-height | Letter-spacing |
| --- | --- | --- | --- | --- | --- |
| Display | TheNightWatch | Regular | 80px | Auto | -2% |
| H0 / Kr | Pretendard | SemiBold | 40px | Auto | 0% |
| H1 | PP Mori → Pretendard | Black | 32px | Auto | 0% |
| H1 | Space Grotesk | Medium | 32px | Auto | 0% |
| H2 / En-Subtitle | Space Grotesk | SemiBold | 24px | Auto | 0% |
| H2 / Kr-Subtitle | Pretendard | SemiBold | 24px | Auto | 0% |
| H3 / En-Subtitle | Space Grotesk | Regular | 22px | 160% | 0% |
| H3 / Kr-Subtitle | Pretendard | Regular | 22px | 160% | 0% |
| H4 / En-subtitle | Space Grotesk | SemiBold | 20px | Auto | 0% |
| H4 / Kr-subtitle | Pretendard | SemiBold | 20px | Auto | 0% |
| H5 / En-subtitle | Space Grotesk | SemiBold | 18px | Auto | 0% |
| H5 / Kr-subtitle | Pretendard | SemiBold | 18px | Auto | 0% |
| Body / En (16px) | PP Mori → Pretendard | Regular | 16px | 150% | 0% |
| Body / En (14px) | PP Mori → Pretendard | Semibold | 14px | 150% | 0% |
| Body / Kr (16px) | Pretendard | Regular | 16px | 150% | 0% |
| Body / Kr (14px) | Pretendard | Medium | 14px | 150% | 0% |
| Caption / En-Label | PP Mori → Pretendard | Regular | 12px | 140% | 0% |
| Caption / Kr-Label | Pretendard | Regular | 12px | 140% | 0% |

### Rule: font-family must match a real `@font-face`

Figma exports font names as `'FamilyName:WeightName'` (e.g. `Space_Grotesk:SemiBold`). This is **not** a real font name — never use it directly in code. Every `@fontsource` (and Google Fonts) `@font-face` declares the plain family name (e.g. `Space Grotesk`) with a numeric `font-weight`. Always translate Figma's export to:

```
font-['Space_Grotesk',sans-serif] font-semibold   /* not font-['Space_Grotesk:SemiBold',sans-serif] */
```

Using the colon-suffixed name only happens to work on a machine that has a font locally installed under that literal name — everywhere else it silently falls back to the generic sans-serif, which is why text can look "broken" on some computers and fine on others.

### Adding a self-hosted font file

Only do this for fonts under an open license (OFL, Apache, etc.) — see the licensing rule above. This repo is public, so anything committed here is redistributable.

1. Drop the `.woff2` file(s) in `public/fonts/` — anything in `public/` is served as-is at the site root (e.g. `public/fonts/Example-Regular.woff2` → `/fonts/Example-Regular.woff2`).
2. Add one `@font-face` per weight/style in `src/styles/fonts.css`, using the font's real family name and the matching numeric `font-weight` (check with the font's own name table if unsure, e.g. via `fonttools`/`ttx` — don't guess from the filename).
3. Only add the weights actually used in the code (`grep -rhoE "FamilyName:[A-Za-z]+" src/imports`) — don't wire up unused weights.

## General guidelines

* Only use absolute positioning when necessary. Opt for responsive and well structured layouts that use flexbox and grid by default
* Refactor code as you go to keep code clean
* Keep file sizes small and put helper functions and components in their own files.
