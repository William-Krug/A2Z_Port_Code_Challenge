const inputTest =
  '“Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers” (Socrates)';

function findLongestWord(inputText) {
  let largestWord = '';
  let largestWordCharacterCount = 0;

  const words = inputText.split(' ');
  for (let i = 0; i < words.length; i++) {
    const strippedWord = words[i].replace(/[^A-Za-z]/g, '');
    console.log(strippedWord, strippedWord.length);
    if (strippedWord.length > largestWordCharacterCount) {
      largestWord = strippedWord;
      largestWordCharacterCount = strippedWord.length;
    } else if (strippedWord.length === largestWordCharacterCount) {
      largestWord = vowelComparison(strippedWord, largestWord);
    }
  }

  return largestWord;
}

function vowelComparison(word1, word2) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  let word1VowelCount = 0;
  let word2VowelCount = 0;

  for (let i = 0; i < word1.length; i++) {
    if (vowels.includes(word1[i])) {
      word1VowelCount++;
    }
  }
  for (let i = 0; i < word2.length; i++) {
    if (vowels.includes(word2[i])) {
      word2VowelCount++;
    }
  }

  if (word1VowelCount >= word2VowelCount) {
    return word1;
  } else {
    return word2;
  }
}
