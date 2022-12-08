module.exports = {

  dateStrAddOne: (progressDate) => {
    const dateFormatted = (arr) => {
      const formateDateArr = arr.slice(0, 3).map((num) => {
        if (num < 10) return ('0').concat(num);
        return num;
      });
      return formateDateArr.join('-');
    };
    const reviewDate = progressDate;
    reviewDate[1] = Number(reviewDate[1]) + 1;
    const result = dateFormatted(reviewDate);
    return result;
  },
  dateStr: (progressDate) => {
    const dateFormatted = (arr) => {
      const formateDateArr = arr.slice(0, 3).map((num) => {
        if (num < 10) return ('0').concat(num);
        return num;
      });
      return formateDateArr.join('-');
    };
    const result = dateFormatted(progressDate);
    return result;
  },
};
