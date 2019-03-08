// Convert a string to snake_case
const stringToSnakeCase = (string) => {
  const words = string.split(' ');
  const newWords = words.map((word) => {
    return word.toLowerCase();
  });
  const newString = newWords.join('_');

  return newString;
};

export default stringToSnakeCase;
