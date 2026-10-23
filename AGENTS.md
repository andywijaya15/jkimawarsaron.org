# JKI Mawar Saron: Agent Development & UI Rules

Instruksi ini mengikat setiap AI coding agent yang bekerja pada repositori website JKI Mawar Saron Semarang (Astro v7).

## 1. Sumber Desain Tunggal (Single Source of Truth)

Sebelum melakukan perubahan UI atau komponen:
1. Wajib baca `DESIGN.md`: Ikuti token warna, tipografi, dan radius yang sudah didefinisikan.
   - Kanvas & Permukaan: Warm Canvas (`#FBF9F5`), Pure Surface (`#FFFFFF`). Hindari background gelap pekat.
   - Teks & Kontras: Deep Charcoal (`#1E242B`), Muted Slate (`#64748B`).
   - Aksen: Terracotta Gold (`#C88A3E`), Hover Amber (`#B4752E`).
   - Bentuk: Tombol/tag berbentuk pill (`rounded-full`), kartu bersudut membulat lembut (`16px-20px`).
2. Karakter Visual: Ramah, hangat, humanis, dan community-first (ala JPCC/Elevation), bukan tech-brutalist atau kaku.

## 2. Standar Anti-Slop (Aturan Mutlak)

Agent dilarang keras menghasilkan generic AI-slop UI:

### A. Konten & Salinan (Copywriting)
- DILARANG memakai em dash (`—`): Gunakan koma, titik, titik dua, atau tanda kurung.
- DILARANG membuat data atau testimoni palsu: Jangan buat review fiktif, foto avatar AI bule, atau statistik acak (seperti "10k+ jemaat").
- DILARANG kata klise AI: Hindari "Revolusioner", "Seamless", "Next-Gen", "Cutting-edge". Gunakan bahasa pastoral yang hangat dan natural.
- Tombol & Aksi Nyata: Jangan pakai CTA hampa ("Learn More", "Explore"). Gunakan kata kerja spesifik ("Rencanakan Kunjungan", "Tonton Ibadah Live", "Hubungi Tim Doa").

### B. Visual & Layout
- DILARANG template AI generik: Tidak ada bento grid acak, icon magic sparkle/petir, gradient ungu-biru neon, atau background dot-grid blueprint.
- Mobile First: Pastikan tidak ada horizontal overflow di HP, ukuran tombol minimal 44px tap target.
- Kontras WCAG AA: Teks normal minimal rasio 4.5:1, teks besar minimal 3:1.
- Elemen Interaktif: Setiap tombol atau link harus mengarah ke URL/halaman yang benar-benar ada (tidak ada tombol mati).

### C. Dials Antislop
- ENERGY: 2 (Hangat, menyambut, seimbang)
- RHYTHM: 2 (Konsisten, mengalir alami per seksi)
- MOTION: 1 (Subtle & tenang, transisi halus tanpa animasi berlebihan)

## 3. Rencana Eksekusi Rework

1. Fondasi Global:
   - Injeksi token CSS (`DESIGN.md`) ke layout utama (`src/layouts/Layout.astro`).
   - Ganti palet bootstrap grayscale lama ke kanvas hangat `#FBF9F5`.
2. Komponen Inti:
   - `Navbar.astro`: Latar putih bersih dengan bayangan lembut, navigasi fungsional.
   - `Footer.astro`: Informasi kontak nyata, jam ibadah, link media sosial gereja.
   - `LiveButton.astro`: Integrasi link YouTube live ibadah.
3. Halaman Publik:
   - `index.astro`: Hero "Welcome Home", bar jam ibadah (Umum 09.00, Kids 09.00, Youth 11.00), profil ringkas, seri khotbah, dan tombol WhatsApp pastoral care.
   - Halaman divisi (`ministry.astro`, `ourstory.astro`, `christ-community.astro`, dll.): Penyesuaian ke kartu hangat dan tipografi ramah.
4. Verifikasi: Jalankan `npm run build` dan `npm test` sebelum menyerahkan hasil.

<!-- antislop:start -->
## antislop
For UI, copy, people, mobile layout, or code comments work, read `antislop.md` (core) and then the skill for the task:
- UI / visual: `skills/antislop-ui/SKILL.md`
- Copy & text: `skills/antislop-copywriting/SKILL.md`
- People: `skills/antislop-human/SKILL.md`
- Mobile / responsive: `skills/antislop-layoutmobile/SKILL.md`
- Code comments: `skills/antislop-code/SKILL.md`
Before starting, ask the user when antislop applies: during the work, or after it is done.
<!-- antislop:end -->
