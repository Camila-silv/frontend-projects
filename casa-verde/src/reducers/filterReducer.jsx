export const UPDATE_A_Z = "UPDATE_A_Z";
export const UPDATE_Z_A = "UPDATE_Z_A";
export const UPDATE_LOWEST_PRICE = "UPDATE_LOWEST_PRICE";
export const UPDATE_HIGHEST_PRICE = "UPDATE_HIGHEST_PRICE";
export const CLEAN = "CLEAN";
export const FILTER_BY_RANGE = "FILTER_BY_RANGE";

const filterReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_A_Z:
      return alphabeticalSortFilter(action.value, action.type);
    case UPDATE_Z_A:
      return alphabeticalSortFilter(action.value, action.type);
    case UPDATE_LOWEST_PRICE:
      return lowestPriceFilter(action.value);
    case UPDATE_HIGHEST_PRICE:
      return highestPriceFilter(action.value);
    case CLEAN:
      return [];
    case FILTER_BY_RANGE:
      return filterByRange(action.value, action.min, action.max, action.setValidRange);
    default:
      return state;
  }
};

const highestPriceFilter = (list) => {
  const filter = [...list];

  return filter.sort((a, b) => b.preco - a.preco);
};

const lowestPriceFilter = (list) => {
  const filter = [...list];

  return filter.sort((a, b) => a.preco - b.preco);
};

const alphabeticalSortFilter = (list, type) => {
  const filter = [...list];

  if (type === UPDATE_A_Z) {
    return filter.sort((a, b) => a.name > b.name);
  }

  if (type === UPDATE_Z_A) {
    return filter.sort((a, b) => b.name > a.name);
  }
};

const filterByRange = (list, min, max, setValidRange) => {
  const filter = [];
  const firstLevelOfFormattingMin = min.replace("R$ ", "");
  const secondLevelOfFormattingMin = firstLevelOfFormattingMin.replace(
    ",",
    "."
  );

  const firstLevelOfFormattingMax = max.replace("R$ ", "");
  const secondLevelOfFormattingMax = firstLevelOfFormattingMax.replace(
    ",",
    "."
  );

  list.forEach((item) => {
    item.preco >= secondLevelOfFormattingMin && item.preco <= secondLevelOfFormattingMax
      ? filter.push(item)
      : null;
  });

  if(filter.length === 0 ) {
    setValidRange(false)
    return [];
  }

  setValidRange(true)
  return filter;
};

export default filterReducer;
