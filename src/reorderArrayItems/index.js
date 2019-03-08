const reorderArrayItems = (array, fromIndex, toIndex) => {
  const result = Array.from(array);
  const [removed] = result.splice(fromIndex, 1);

  result.splice(toIndex, 0, removed);

  return result;
};

export default reorderArrayItems;
