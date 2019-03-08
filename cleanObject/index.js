// Remove all falsy elements from an object
const cleanObject = (object) => {
  const cleanedObject = object;

  Object.keys(object).forEach((key) => {
    const value = object[key];

    if (!value) {
      delete cleanedObject[key];
    }
  });

  return cleanedObject;
};

export default cleanObject;
