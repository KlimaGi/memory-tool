module.exports = {

  dateStrAddOne: (progressDate) => {
    const dateFormat = (arr) => {
      const dateArr = arr;
      if (dateArr[1] < 10) dateArr[1] = ('0').concat(dateArr[1]);
      if (dateArr[2] < 10) dateArr[2] = ('0').concat(dateArr[2]);
      return dateArr.slice(0, 3).join('-');
    };

    const reviewDate = progressDate;
    reviewDate[1] = Number(reviewDate[1]) + 1;
    const result = dateFormat(reviewDate);
    return result;
  },
  dateStr: (progressDate) => {
    const dateFormat = (arr) => {
      const dateArr = arr;
      if (dateArr[1] < 10) dateArr[1] = ('0').concat(dateArr[1]);
      if (dateArr[2] < 10) dateArr[2] = ('0').concat(dateArr[2]);
      return dateArr.slice(0, 3).join('-');
    };
    const result = dateFormat(progressDate);
    return result;
  },
};
