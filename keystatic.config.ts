import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: import.meta.env.DEV
    ? { kind: 'local' }
    : {
        kind: 'cloud',
      },
  cloud: {
    project: 'jkims/jkimawarsaron-org',
  },
  collections: {
    events: collection({
      label: 'Agenda & Acara',
      slugField: 'title',
      path: 'src/content/events/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Judul Acara' } }),
        date: fields.text({ label: 'Tanggal & Waktu (misal: Minggu, 25 Des 2026 | 09.00 WIB)' }),
        location: fields.text({ label: 'Lokasi Acara', defaultValue: 'Main Hall JKI Mawar Saron' }),
        category: fields.select({
          label: 'Kategori Acara',
          options: [
            { label: 'Ibadah Raya', value: 'Ibadah Raya' },
            { label: 'Pemuda & Remaja', value: 'Pemuda & Remaja' },
            { label: 'Kegerakan Rohani', value: 'Kegerakan Rohani' },
            { label: 'Doa & Puasa', value: 'Doa & Puasa' },
            { label: 'Perayaan Khusus', value: 'Perayaan Khusus' },
            { label: 'Seminar & Family', value: 'Seminar & Family' },
          ],
          defaultValue: 'Ibadah Raya',
        }),
        image: fields.text({ label: 'Path Gambar Poster (misal: /assets/img/Events/revival.jpg)' }),
        featured: fields.checkbox({ label: 'Tampilkan di Sorotan Utama (Featured)', defaultValue: false }),
        actionUrl: fields.text({ label: 'URL Aksi (Link / Email / WA)' }),
        actionText: fields.text({ label: 'Teks Tombol Aksi (misal: Informasi Acara)' }),
        content: fields.markdoc({ label: 'Deskripsi Acara' }),
      },
    }),
    bulletin: collection({
      label: 'Warta Jemaat (Buletin)',
      slugField: 'title',
      path: 'src/content/bulletin/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Judul Buletin' } }),
        date: fields.text({ label: 'Edisi / Tanggal (misal: Oktober 2026)' }),
        image: fields.text({ label: 'Gambar Sampul (misal: /assets/img/Newsletter/bulletin-jki-ms.jpg)' }),
        theme: fields.text({ label: 'Tema Warta' }),
        fileUrl: fields.text({ label: 'URL Unduhan File' }),
        content: fields.markdoc({ label: 'Catatan / Ringkasan' }),
      },
    }),
    sermons: collection({
      label: 'Khotbah & Renungan',
      slugField: 'title',
      path: 'src/content/sermons/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Judul Khotbah' } }),
        speaker: fields.text({ label: 'Pembicara / Pengkhotbah', defaultValue: 'Ps. Iman El Roi' }),
        date: fields.text({ label: 'Tanggal Khotbah' }),
        passage: fields.text({ label: 'Ayat Firman (Perikop)' }),
        image: fields.text({ label: 'Gambar Khotbah' }),
        youtubeId: fields.text({ label: 'ID Video YouTube (misal: 4tqfQkWYaeg)' }),
        series: fields.text({ label: 'Nama Seri Khotbah' }),
        content: fields.markdoc({ label: 'Ringkasan Firman' }),
      },
    }),
  },
  singletons: {
    schedule: singleton({
      label: 'Jadwal Ibadah',
      path: 'src/content/settings/schedule',
      format: { data: 'json' },
      schema: {
        services: fields.array(
          fields.object({
            category: fields.text({ label: 'Kategori (misal: Ibadah Raya)' }),
            name: fields.text({ label: 'Nama Ibadah (misal: Sunday Service)' }),
            time: fields.text({ label: 'Waktu (misal: Minggu 09.00 WIB)' }),
          }),
          {
            label: 'Daftar Jadwal Ibadah',
            itemLabel: (props) => `${props.fields.category.value || ''} - ${props.fields.name.value || ''} (${props.fields.time.value || ''})`,
          }
        ),
        locationUrl: fields.text({
          label: 'URL Google Maps Lokasi',
          defaultValue: 'https://maps.app.goo.gl/zfCuDaWoGZLhA4Jz9',
        }),
      },
    }),
    visionMission: singleton({
      label: 'Visi & Misi',
      path: 'src/content/settings/vision-mission',
      format: { data: 'json' },
      schema: {
        visionTitle: fields.text({ label: 'Judul Visi', defaultValue: 'Gereja yang Hadir untuk Kota dan Bangsa' }),
        visionDescription: fields.text({
          label: 'Deskripsi Visi',
          multiline: true,
          defaultValue: 'Gereja lokal yang menghadirkan kemuliaan, kasih, dan kuasa Kerajaan Allah yang seutuhnya di luar empat dinding gereja.',
        }),
        missionTitle: fields.text({ label: 'Judul Misi', defaultValue: 'Pertumbuhan Rohani & Kepemimpinan' }),
        missionDescription: fields.text({
          label: 'Deskripsi Misi',
          multiline: true,
          defaultValue: 'Membangun kehidupan jemaat yang solid dalam Kristus dan memperbanyak pemimpin-pemimpin yang melayani dengan integritas.',
        }),
      },
    }),
  },
});
