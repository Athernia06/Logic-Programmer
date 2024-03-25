function countLetters(str) {
    const letterCounts = {};
  
    const lowerCaseStr = str.toLowerCase();
  
    for (let i = 0; i < lowerCaseStr.length; i++) {
      const char = lowerCaseStr[i];
  
      if (/[a-z]/.test(char)) {
        letterCounts[char] = letterCounts[char] ? letterCounts[char] + 1 : 1;
      }
    }
  
    return letterCounts;
  }
  
  function sortObjectByValue(obj) {
    const arr = Object.entries(obj);
  
    arr.sort((a, b) => a[1] - b[1]);
  
    return arr;
  }
  
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Masukkan teks: ', (text) => {
    const letterCounts = countLetters(text);
  
    const sortedLetterCounts = sortObjectByValue(letterCounts);
  
    console.log(sortedLetterCounts);
  
    readline.close();
  });
  