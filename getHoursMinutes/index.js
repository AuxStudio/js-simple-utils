import addZeroPadding from '../addZeroPadding';

// Takes a timestamp and returns the time in the format: 13:00
const getHoursMinutes = (timestamp) => {
  const date = new Date(timestamp);

  return `${addZeroPadding(date.getHours())}:${addZeroPadding(date.getMinutes())}`;
};

export default getHoursMinutes;
