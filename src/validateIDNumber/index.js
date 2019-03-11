import luhn from './luhn';

// Validate South African ID numbers
const validateIDNumber = (IDnumber) => {
  // Convert to string if its a number
  // Replace all blank characters
  const string = IDnumber.toString().replace(/\s/g, '');

  // IF it does not exist
  if (!string) {
    return false;
  }

  // IF it's not a number
  if (!Number(string)) {
    return false;
  }

  // IF it's not 13 characters long
  if (string.length !== 13) {
    return false;
  }

  // DATES
  const month = string.substr(2, 2);
  const day = string.substr(4, 2);

  // IF the month is greater than 12
  // IF the day is greater than 31
  if (month > 12 || day > 31) {
    return false;
  }

  // GENDER
  // Could be any range from 0000 => 9999 (not testable)

  // CITIZENSHIP
  const citizenship = string.substr(10, 1);

  // This can only be 0 or 1
  if (citizenship > 1) {
    return false;
  }

  // CHECKSUM (LUHN)
  if (!luhn(string)) {
    return false;
  }

  return true;
};

export default validateIDNumber;
