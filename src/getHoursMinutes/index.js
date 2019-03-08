import addZeroPadding from '../addZeroPadding';

// Get the hours and minutes in the format HH:MM from a timestamp
const getHoursMinutes = (timestamp) => {
  const date = new Date(timestamp);

  return `${addZeroPadding(date.getHours())}:${addZeroPadding(date.getMinutes())}`;
};

export default getHoursMinutes;
