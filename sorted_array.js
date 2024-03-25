const array = [12, 9, 30, "A", "M", 99, 82, "J", "N", "B"];

// Fungsi untuk membandingkan dua elemen array
function compare(a, b) {
  // Periksa apakah kedua elemen adalah huruf
  if (typeof a === "string" && typeof b === "string") {
    // Kembalikan nilai yang lebih kecil berdasarkan urutan abjad
    return a.localeCompare(b);
  }

  // Periksa apakah kedua elemen adalah angka
  if (typeof a === "number" && typeof b === "number") {
    // Kembalikan nilai yang lebih kecil
    return a - b;
  }

  // Jika tidak, bandingkan berdasarkan tipe data
  if (typeof a === "string") {
    return -1;
  } else {
    return 1;
  }
}

// Mengurutkan array
const sortedArray = array.sort(compare);

// Menampilkan array yang sudah diurutkan
console.log(sortedArray);
