// Fungsi untuk menghitung banyaknya huruf dalam string
function countLetters(str) {
    // Inisialisasi objek untuk menyimpan jumlah huruf
    const letterCounts = {};
  
    // Mengubah string menjadi lowercase
    const lowerCaseStr = str.toLowerCase();
  
    // Looping melalui setiap karakter dalam string
    for (let i = 0; i < lowerCaseStr.length; i++) {
      const char = lowerCaseStr[i];
  
      // Periksa apakah karakter adalah huruf
      if (/[a-z]/.test(char)) {
        // Jika ya, tingkatkan jumlah huruf untuk karakter tersebut
        letterCounts[char] = letterCounts[char] ? letterCounts[char] + 1 : 1;
      }
    }
  
    // Mengembalikan objek yang berisi jumlah huruf
    return letterCounts;
  }
  
  // Fungsi untuk mengurutkan objek berdasarkan nilai
  function sortObjectByValue(obj) {
    // Mengubah objek menjadi array
    const arr = Object.entries(obj);
  
    // Mengurutkan array berdasarkan nilai
    arr.sort((a, b) => a[1] - b[1]);
  
    // Mengembalikan array yang sudah diurutkan
    return arr;
  }
  
  // Membaca input dari pengguna
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Masukkan teks: ', (text) => {
    // Menghitung jumlah huruf
    const letterCounts = countLetters(text);
  
    // Mengurutkan hasil berdasarkan nilai
    const sortedLetterCounts = sortObjectByValue(letterCounts);
  
    // Menampilkan hasil
    console.log(sortedLetterCounts);
  
    // Menutup readline interface
    readline.close();
  });
  