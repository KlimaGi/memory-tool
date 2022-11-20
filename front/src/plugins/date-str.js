/* eslint-disable import/prefer-default-export */
const dateStr = (revisionDates, progressDone) => {
  const dateFormat = (arr) => {
    const dateArr = arr;
    if (dateArr[1] < 10) dateArr[1] = ('0').concat(dateArr[1]);
    if (dateArr[2] < 10) dateArr[2] = ('0').concat(dateArr[2]);
    return dateArr.slice(0, 3).join('-');
  };

  const reviewDate = revisionDates[progressDone];
  reviewDate[1] = Number(reviewDate[1]) + 1;
  return dateFormat(reviewDate);
};

export { dateStr };
