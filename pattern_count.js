// Fungsi untuk menghitung jumlah pola dalam teks
function pattern_count(text, pattern) {
    // Menghitung panjang teks dan pola
    const textLength = text.length;
    const patternLength = pattern.length;
  
    // Inisialisasi penghitung pola
    let count = 0;
  
    // Looping melalui setiap karakter dalam teks
    for (let i = 0; i < textLength; i++) {
      // Periksa apakah pola cocok dengan substring teks saat ini
      let match = true;
      for (let j = 0; j < patternLength; j++) {
        if (text[i + j] !== pattern[j]) {
          match = false;
          break;
        }
      }
  
      // Jika pola cocok, tingkatkan penghitung
      if (match) {
        count++;
      }
    }
  
    // Mengembalikan jumlah pola yang ditemukan
    return count;
  }
  
  // Membaca input dari pengguna
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // Meminta input teks dan pola dari pengguna
  readline.question('Masukkan teks: ', (text) => {
    readline.question('Masukkan pola: ', (pattern) => {
      // Menghitung jumlah pola
      const count = pattern_count(text, pattern);
  
      // Menulis output ke konsol
      console.log(`Jumlah pola "${pattern}" dalam teks "${text}": ${count}`);
  
      // Menutup readline interface
      readline.close();
    });
  });
  