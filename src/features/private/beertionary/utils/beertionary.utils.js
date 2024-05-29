export const getGroupedData = (data) => {
  return data.reduce((acc, item) => {
    const firstLetter = item.word[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(item);
    return acc;
  }, {});
};

export const getFilteredData = (groupedData, filter) => {
  return Object.keys(groupedData).reduce((acc, key) => {
    const filteredItems = groupedData[key].filter((item) =>
      item.word.toLowerCase().includes(filter)
    );
    if (filteredItems.length > 0) {
      acc[key] = filteredItems;
    }
    return acc;
  }, {});
};
