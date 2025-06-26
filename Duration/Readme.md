# Analisis Durasi Penekanan Tombol Terlama

## Deskripsi Soal

Diberikan sebuah input berupa array multidimensi. Setiap elemen dalam array ini merepresentasikan sebuah kejadian penekanan tombol.

* Elemen pertama dari setiap sub-array (`[kode_tombol, waktu_penekanan]`) adalah **kode tombol** yang ditekan, di mana:
    * `a` = `0`
    * `b` = `1`
    * ...
    * `z` = `25`
* Elemen kedua adalah **detik (timestamp)** di mana tombol tersebut ditekan.

**Tugas Anda** adalah untuk menentukan tombol mana yang memiliki **durasi penekanan terlama**. Durasi penekanan sebuah tombol dihitung dari selisih waktu penekanan tombol *sebelumnya* dengan waktu penekanan tombol *saat ini*.

**Penting:**
* Untuk penekanan tombol pertama, durasinya dihitung dari waktu penekanan tombol itu sendiri (asumsi waktu mulai adalah `0`).
* Output yang diharapkan adalah sebuah objek yang berisi `key` (karakter tombol yang ditekan) dan `duration` (durasi terlama dalam detik).

## Contoh

### Contoh 1

**Input:**

```javascript
const input = [
  [0, 2],
  [1, 5],
  [0, 9],
  [2, 15]
];

** Penjelasan: **

asumsi detik awal mulai 0 jadi awal durasi : 2 - 0 = 2 detik

Tombol 'a' (0) ditekan pada detik ke-2:
Durasi: 2 - 0 = 2 detik. (Diasumsikan waktu mulai adalah 0 karena ini tombol pertama)

Tombol 'b' (1) ditekan pada detik ke-5:
Durasi: 5 - 2 = 3 detik. (Waktu penekanan sebelumnya adalah 2 detik)

Tombol 'a' (0) ditekan pada detik ke-9:
Durasi: 9 - 5 = 4 detik. (Waktu penekanan sebelumnya adalah 5 detik)

Tombol 'c' (2) ditekan pada detik ke-15:
Durasi: 15 - 9 = 6 detik. (Waktu penekanan sebelumnya adalah 9 detik)

Dari perhitungan di atas, durasi terlama adalah 6 detik, yang terjadi pada penekanan tombol 'c'.

Output:
JavaScript

{
  key: 'c',
  duration: 6
}