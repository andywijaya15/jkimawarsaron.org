# Website Resmi JKI Mawar Saron Semarang

Website resmi jemaat JKI Mawar Saron Semarang dibangun menggunakan **Astro v7** (Static Site Generator) dengan sistem manajemen konten berbasis **Decap CMS** dan pipeline auto-deploy ke **Hostinger Shared Hosting** melalui **GitHub Actions**.

- **URL Website:** [https://new.jkimawarsaron.org](https://new.jkimawarsaron.org) (dan [https://jkimawarsaron.org](https://jkimawarsaron.org))
- **Panel Admin CMS:** [https://new.jkimawarsaron.org/admin](https://new.jkimawarsaron.org/admin)
- **Repositori:** `andywijaya15/jkimawarsaron.org`

---

## Cara Menambahkan & Memperbarui Konten di Hostinger

Anda **tidak perlu lagi mengunggah file manual ke File Manager Hostinger**. Semua perubahan otomatis terkirim ke Hostinger melalui dua cara:

### Cara 1: Lewat Panel Admin Web (Untuk Tim Multimedia / Sekretariat)

1. Buka browser ke alamat [https://jkimawarsaron.org/admin](https://jkimawarsaron.org/admin).
2. Login menggunakan akun GitHub yang memiliki akses ke repositori ini.
3. Pilih menu di bilah kiri:
   - **Agenda & Acara Gereja**: Tambah flyer poster, tanggal kegiatan, lokasi, dan detail perayaan.
   - **Warta & Buletin Jemaat**: Unggah cover warta mingguan dan ringkasan renungan.
   - **Khotbah & Firman**: Perbarui pembicara, nats Alkitab, dan ID video siaran YouTube.
4. Klik tombol **Publish**.
5. GitHub Actions akan otomatis melakukan build dan mengunggah hasilnya ke server Hostinger dalam waktu sekitar 1 hingga 2 menit.

### Cara 2: Lewat Koding / Git (Untuk Developer)

1. Clone repositori ke komputer lokal:
   ```bash
   git clone https://github.com/andywijaya15/jkimawarsaron.org.git
   cd jkimawarsaron.org
   npm install
   ```
2. Tambah atau edit konten di folder `src/content/`:
   - Acara: `src/content/events/*.md`
   - Buletin: `src/content/bulletin/*.md`
   - Khotbah: `src/content/sermons/*.md`
3. Test lokal sebelum push:
   ```bash
   npm run build && npm test
   ```
4. Commit dan push ke branch `main`:
   ```bash
   git add .
   git commit -m "feat: tambah agenda acara baru"
   git push origin main
   ```
5. GitHub Actions akan otomatis mendeteksi push baru, memvalidasi build, dan mengunggah seluruh aset baru ke `public_html` Hostinger via FTP.

---

## Perintah Pengembangan Lokal

| Perintah | Fungsi |
|---|---|
| `npm run dev` | Menjalankan web development server di `http://localhost:4321` |
| `npm run build` | Menghasilkan static HTML di folder `dist/` |
| `npm test` | Menjalankan pengujian integritas rute dan aset statis |

---

## Konfigurasi Rahasia (GitHub Secrets)

Di GitHub repository (`Settings > Secrets and variables > Actions`), pastikan 3 secret berikut terpasang agar auto-deploy ke Hostinger berjalan:

| Secret | Nilai |
|---|---|
| `HOSTINGER_FTP_HOST` | `ftp.jkimawarsaron.org` (atau IP `153.92.9.207`) |
| `HOSTINGER_FTP_USER` | `u429389714.andy` |
| `HOSTINGER_FTP_PASSWORD` | Password akun FTP Hostinger Anda |
