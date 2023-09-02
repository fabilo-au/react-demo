/**
 * This function returns a date object from a string, number or date.
 * Its purpose is to speed up creation of unit testing
 */
const getDate = (date?: string | number | Date) => {
  if (!date) {
    return new Date();
  }
  return new Date(date);
};

export default getDate;
