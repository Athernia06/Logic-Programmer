function pattern_count(text, pattern) {
    const textLength = text.length;
    const patternLength = pattern.length;
  
    let count = 0;
  
    for (let i = 0; i < textLength; i++) {
      let match = true;
      for (let j = 0; j < patternLength; j++) {
        if (text[i + j] !== pattern[j]) {
          match = false;
          break;
        }
      }
  
      if (match) {
        count++;
      }
    }
  
    return count;
  }
  
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Masukkan teks: ', (text) => {
    readline.question('Masukkan pola: ', (pattern) => {
      const count = pattern_count(text, pattern);
  
      console.log(`Jumlah pola "${pattern}" dalam teks "${text}": ${count}`);
  
      readline.close();
    });
  });
  