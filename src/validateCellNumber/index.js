const validateCellNumber = (cellNumber) => {
  if (cellNumber) {
    const regex = /^(\+?27|0)[6-8][0-9]{8}$/;
    const match = cellNumber.match(regex);
    const isValid = match && true;

    return isValid;
  }

  return false;
};

export default validateCellNumber;
