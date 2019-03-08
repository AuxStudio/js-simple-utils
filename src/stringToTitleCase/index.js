import firstCharToUpperCase from '../firstCharToUpperCase';

const stringToTitleCase = (string) => {
  const newString = string
    .split(' ')
    .map((word, index) => {
      let newWord = word.toLowerCase();

      if (index === 0) {
        // Only the first word's first letter should be uppercased
        newWord = firstCharToUpperCase(newWord);
      }

      return newWord;
    })
    .join(' ');

  return newString;
};

export default stringToTitleCase;
