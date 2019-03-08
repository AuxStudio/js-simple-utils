const luhn = (code) => {
  const { length } = code;
  const parity = length % 2;
  let sum = 0;

  for (let i = length - 1; i >= 0; i -= 1) {
    let d = parseInt(code.charAt(i), 10);

    if (i % 2 === parity) {
      d *= 2;
    }

    if (d > 9) {
      d -= 9;
    }

    sum += d;
  }

  return sum % 10 === 0;
};

export default luhn;
