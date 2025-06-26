Markdown

# Latihan Logika Fundamental: Linear Search

## Pendahuluan

Selamat datang di latihan logika fundamental! Latihan ini dirancang untuk membantu Anda memahami salah satu algoritma pencarian paling dasar dalam ilmu komputer: **Linear Search (Pencarian Linear)**. Ini adalah langkah penting untuk membangun pemikiran komputasi yang terstruktur.

## Skenario Masalah: "Detektif Angka Hilang"

Bayangkan Anda adalah seorang detektif yang bertugas mencari sebuah angka spesifik di dalam daftar panjang yang berantakan. Anda harus memeriksa setiap angka di daftar tersebut, satu per satu, mulai dari awal hingga akhir, sampai Anda menemukan angka yang dicari atau sampai seluruh daftar selesai diperiksa.


### Data (Database Detektif)

Berikut adalah daftar angka yang harus Anda selidiki:

Daftar Angka: [17, 5, 23, 9, 31, 12, 8, 45, 6, 20]


### Target Pencarian (Angka yang Dicari)

Untuk kasus ini, angka yang Anda cari adalah:

Target: 31


## Pertanyaan Logika

Jawablah pertanyaan-pertanyaan berikut secara berurutan, fokus pada alur pemikiran Anda seolah-olah Anda sedang mencari secara manual:

1.  **Langkah Pertama:**
    * Anda mulai mencari dari angka pertama di `Daftar Angka`. Angka pertama adalah `17`.
    * Apakah angka `17` sama dengan `Target` ($31$)?
    * *(Jawab: Ya / Tidak?)*

2.  **Langkah Kedua:**
    * Jika pada pemeriksaan awal tidak sama, Anda maju ke angka berikutnya di daftar. Angka kedua adalah `5`.
    * Apakah angka `5` sama dengan `Target` ($31$)?
    * *(Jawab: Ya / Tidak?)*

3.  **Proses Iterasi:**
    * Lanjutkan proses pemeriksaan ini, periksa setiap angka di `Daftar Angka` secara berurutan.
    * Sebutkan secara berurutan **angka-angka yang Anda periksa** mulai dari awal, hingga Anda menemukan `Target` ($31$).

4.  **Kondisi Ditemukan:**
    * Ketika Anda berhasil menemukan `Target` ($31$) di dalam daftar, apa yang harus Anda lakukan?
    * Apakah Anda perlu terus melanjutkan pemeriksaan ke angka-angka selanjutnya di daftar, atau Anda sudah bisa mengakhiri pencarian?

5.  **Kasus Tidak Ditemukan:**
    * Sekarang, bayangkan `Target` Anda adalah `100`.
    * Anda sudah memeriksa semua angka di `Daftar Angka` dari awal sampai akhir, namun angka `100` tidak ditemukan.
    * Apa kesimpulan Anda tentang keberadaan angka `100` di dalam `Daftar Angka` tersebut?

---

## Petunjuk (Opsional - Lihat Setelah Mencoba Sendiri!)

<details>
<summary>Klik untuk Petunjuk</summary>
Pikirkan tentang kondisi "berhenti" atau "selesai" untuk proses pencarian Anda. Sebuah algoritma pencarian linear akan berhenti ketika salah satu dari dua kondisi terpenuhi:
1.  Elemen target berhasil ditemukan.
2.  Seluruh daftar telah diperiksa, tetapi elemen target tidak ditemukan.
</details>

---

Cobalah kerjakan ini di pikiran Anda atau di secarik kertas. Pikirkan tentang setiap langkahnya. Setelah selesai, kita akan bahas jawabannya bersama! Selamat mencoba, detektif!

---