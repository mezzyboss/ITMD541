function countVowels(str) {
    let vowels = 'aeiou';
    let count = 0;
    let normword = str.toLowerCase(); //normalize word by changing to lowercase
    for (char of normword) {
      if (vowels.includes(char)) { //check if each letter is on the list of vowels
        count++;
      }
    }
  
    return count;
  }
  
  // Testing time
  let testWords = ['Brian', 'WebApps', 'pneumonoultramicrosilicovolcanoconiosis'];
  testWords.forEach(word => console.log(word + ': ' + countVowels(word) + ' vowels'));
  