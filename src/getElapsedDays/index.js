const getElapsedDays = (timestamp) => {
  const now = Date.now();
  const difference = now - timestamp;
  const days = difference / 1000 / 60 / 60 / 24; // ms / s / min / h

  return days;
};

export default getElapsedDays;
