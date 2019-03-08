const snakeCaseToUpperCase = (string) => {
  const sentence = string
    .split('_')
    .map((word) => {
      return word.toUpperCase();
    })
    .join(' ');

  return sentence;
};

export default snakeCaseToUpperCase;
