# JKI Mawar Saron — Design System & Style Reference
> "Welcome Home: Warm, Human-Centered, & Christ-Centered Community"

**Theme:** Light & Warm  
**Inspirasi:** JPCC (Jakarta Praise Community Church), Elevation Church, Hillsong Community

Sistem desain ini dirancang untuk menyambut jemaat baru (*Visitor-First*) sekaligus memfasilitasi pertumbuhan rohani jemaat lokal (*Community & Discipleship*). Menghindari kesan kaku, gelap, atau industrial; bergeser ke kanvas hangat (*warm sand/cream*), tipografi humanis yang mudah dibaca semua usia, sudut membulat ramah (*pill buttons 9999px, cards 16–20px*), dan fotografi komunitas nyata yang penuh sukacita.

---

## 1. Tokens — Colors

| Nama | Nilai Hex | Token CSS | Peran & Penggunaan |
|------|-----------|-----------|---------------------|
| **Warm Canvas** | `#FBF9F5` | `--color-canvas` | Latar belakang utama website. Memberi kesan hangat, ramah, dan tidak menyilaukan mata dibanding putih murni. |
| **Pure Surface** | `#FFFFFF` | `--color-surface` | Latar kartu informasi, modal, dan navbar. Memberi elevasi bersih di atas kanvas hangat. |
| **Deep Charcoal** | `#1E242B` | `--color-charcoal` | Warna teks utama, judul, dan elemen struktural utama. Lebih ramah dan lembut dibanding hitam pekat. |
| **Muted Slate** | `#64748B` | `--color-slate` | Teks sekunder, deskripsi ayat, metadata tanggal, dan label sub-judul. |
| **Terracotta Gold** | `#C88A3E` | `--color-accent` | Aksen utama (primary CTA, status Live, sorotan jadwal ibadah). Menggambarkan kehangatan dan fajar baru. |
| **Warm Amber Hover** | `#B4752E` | `--color-accent-hover` | State hover untuk tombol CTA utama. |
| **Soft Sage** | `#4A6B5D` | `--color-sage` | Aksen sekunder untuk kategori komunitas (Christ Community, Family, Doa). |
| **Soft Border** | `#E8E4DC` | `--color-border` | Garis batas tipis pada kartu, input field, dan pembatas konten agar tetap terstruktur rapi. |

---

## 2. Tokens — Typography

Menggunakan sans-serif modern yang ramah dan sangat terbaca di mobile (*humanist grotesque*):
- **Font Utama (Headings):** `Plus Jakarta Sans`, sans-serif (Weight: 600 SemiBold, 700 Bold)
- **Font Isi (Body & UI):** `Inter`, system-ui, sans-serif (Weight: 400 Regular, 500 Medium)

### Skala Tipografi

| Level | Ukuran | Line Height | Weight | Penggunaan | Token |
|-------|--------|-------------|--------|------------|-------|
| `display` | 48px – 64px | 1.15 | 700 | Judul Hero Banner ("Welcome Home", "Survival Mode") | `--text-display` |
| `h1` | 36px – 40px | 1.2 | 700 | Judul Halaman Utama (Our Story, Ministry, Events) | `--text-h1` |
| `h2` | 28px – 32px | 1.25 | 600 | Judul Seksi (Jadwal Ibadah, Christ Community, Khotbah) | `--text-h2` |
| `h3` | 20px – 24px | 1.3 | 600 | Judul Kartu Pelayanan, Judul Acara | `--text-h3` |
| `body-lg` | 18px | 1.6 | 400 | Intro paragraf, ayat renungan mingguan | `--text-body-lg` |
| `body` | 16px | 1.6 | 400 | Teks umum, deskripsi divisi pelayanan | `--text-body` |
| `caption` | 13px – 14px | 1.4 | 500 | Jam ibadah, label metadata, copyright footer | `--text-caption` |

---

## 3. Tokens — Spacing, Radii & Shadows

### Border Radius
| Elemen | Nilai | Token |
|--------|-------|-------|
| Tombol CTA & Badges | `9999px` (Pill) | `--radius-pill` |
| Kartu & Kontainer | `16px` – `20px` | `--radius-card` |
| Media / Banner | `20px` – `24px` | `--radius-media` |
| Input Fields | `12px` | `--radius-input` |

### Elevation & Shadows
- **Card Shadow:** `0 4px 20px -2px rgba(30, 36, 43, 0.05)` (`--shadow-card`)
- **Card Hover:** `0 12px 32px -4px rgba(30, 36, 43, 0.10)` (`--shadow-hover`)
- **Navbar Sticky Shadow:** `0 2px 10px rgba(30, 36, 43, 0.04)`

### Layout Spacing
- **Max Container Width:** `1200px`
- **Section Padding Desktop:** `80px` – `110px`
- **Section Padding Mobile:** `48px` – `64px`
- **Card Grid Gap:** `24px` – `32px`

---

## 4. Komponen Kunci Website Gereja

### A. Hero "Welcome Home" & Plan a Visit
- Headline menyambut jemaat baru: *"Ada tempat untukmu di Rumah ini"*.
- Video latar transparan atau foto hangat jemaat beribadah dengan overlay gradien lembut.
- **Quick Service Bar:**
  - Jam Ibadah: Umum 09.00 WIB | Kids Impact 09.00 WIB | Youth Impact 11.00 WIB
  - Tombol CTA Pill: *"Rencanakan Kunjungan"* (arahkan ke peta & info jemaat baru) dan *"Live Streaming"*.

### B. Next Steps & Ministry Cards
- Tata letak grid 3 kolom dengan foto jemaat asli:
  1. **Generasi:** Kids Impact & Youth Impact
  2. **Komunitas:** Christ Community (Kelompok Sel)
  3. **Pelayanan:** Praise & Worship, Usher, Diakonia, Creative
- Setiap kartu memiliki tag kategori lembut, judul jelas, dan link *"Pelajari Lebih Lanjut"*.

### C. Media & Khotbah Mingguan
- Highlight seri khotbah terbaru (YouTube embed atau poster seri khotbah).
- Kutipan / Ayat Mingguan dengan latar belakang aksen tenang dan tombol cepat *"Bagikan Ayat"*.

### D. Doa & Konseling Pastoral (Care Center)
- Tombol WhatsApp cepat untuk permohonan doa, konseling, atau pendaftaran penyerahan anak/baptisan.

---

## 5. Do's and Don'ts

### Do
- Gunakan foto jemaat asli lokal JKI Mawar Saron yang tersenyum dan berinteraksi hangat.
- Tampilkan jadwal ibadah dan lokasi fisik secara mencolok di halaman utama tanpa perlu banyak scroll.
- Gunakan tombol berbentuk *pill* (`rounded-full`) dengan teks yang ramah dan mengundang.
- Pertahankan kontras warna yang nyaman dibaca oleh generasi senior maupun pemuda.

### Don't
- Jangan menggunakan palet hitam pekat monokromatik bergaya *tech-brutalist* atau kaku untuk halaman publik.
- Hindari stok foto bule generik yang tidak mencerminkan jemaat lokal Semarang.
- Jangan menyembunyikan jadwal ibadah di dalam sub-menu yang rumit.
- Hindari sudut kotak tajam (`0px - 2px`) pada kartu dan tombol.

---

## 6. Quick Start CSS Variables

```css
:root {
  /* Colors */
  --color-canvas: #FBF9F5;
  --color-surface: #FFFFFF;
  --color-charcoal: #1E242B;
  --color-slate: #64748B;
  --color-accent: #C88A3E;
  --color-accent-hover: #B4752E;
  --color-sage: #4A6B5D;
  --color-border: #E8E4DC;

  /* Typography */
  --font-heading: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --font-body: 'Inter', system-ui, -apple-system, sans-serif;

  /* Radius */
  --radius-pill: 9999px;
  --radius-card: 18px;
  --radius-media: 24px;
  --radius-input: 12px;

  /* Shadows */
  --shadow-card: 0 4px 20px -2px rgba(30, 36, 43, 0.05);
  --shadow-hover: 0 12px 32px -4px rgba(30, 36, 43, 0.10);

  /* Layout */
  --max-width: 1200px;
}
```
