// Get the amount of hours that have elapsed since a timestamp
const getElapsedHours = (timestamp) => {
  if (timestamp) {
    const now = Date.now();
    const difference = now - timestamp;
    const hours = Math.round(difference / 1000 / 60 / 60); // / ms / s / min

    return hours;
  }

  return 0;
};

export default getElapsedHours;
