# Panduan Menghubungkan GitHub ke Hostinger (Auto Deploy)

Workflow `.github/workflows/deploy.yml` akan secara otomatis meng-compile website Astro dan mengunggahnya ke Hostinger setiap kali ada perubahan kode atau update konten/aset via Decap CMS (`/admin`).

---

### Langkah 1: Ambil Akses FTP dari Hostinger (hPanel)

1. Masuk ke **hPanel Hostinger** (https://hpanel.hostinger.com).
2. Pilih website Anda (`jkimawarsaron.org`), lalu klik **Kelola / Manage**.
3. Cari menu **Akun FTP** (FTP Accounts) di bilah pencarian atau bagian *Files*.
4. Catat informasi berikut:
   - **FTP IP / Host**: Contoh `ftp.jkimawarsaron.org` atau IP server `153.92.9.207`.
   - **Username FTP**: `u429389714.andy`.
   - **Password FTP**: Password yang Anda buat.
   - **Direktori**: Pastikan mengarah ke folder target, yaitu `/home/u429389714/domains/new.jkimawarsaron.org/public_html`.

---

### Langkah 2: Masukkan Secrets ke GitHub Repository

1. Buka repositori proyek ini di **GitHub**: `https://github.com/andywijaya15/jkimawarsaron.org/settings/secrets/actions`
2. Masuk ke tab **Settings** > **Secrets and variables** > **Actions**.
3. Klik tombol hijau **New repository secret**, lalu tambahkan 3 variabel berikut:

| Name (Nama Secret) | Value (Isi Nilai) |
|---|---|
| `HOSTINGER_FTP_HOST` | `ftp.jkimawarsaron.org` (atau `153.92.9.207`) |
| `HOSTINGER_FTP_USER` | `u429389714.andy` |
| `HOSTINGER_FTP_PASSWORD` | (Password akun FTP u429389714.andy dari hPanel) |

---

### Langkah 3: Mengatur Login Decap CMS (`/admin`)

Konfigurasi backend di `public/admin/config.yml` sudah diarahkan ke:
```yaml
backend:
  name: github
  repo: andywijaya15/jkimawarsaron.org
  branch: main
```
2. Tim admin bisa login menggunakan akun GitHub mereka yang memiliki akses ke repositori tersebut.
3. Saat admin mengunggah flyer acara atau memperbarui buletin di `/admin` lalu klik **Publish**, GitHub Actions akan otomatis melakukan build dan website di Hostinger terbarui dalam waktu ~1 menit.
