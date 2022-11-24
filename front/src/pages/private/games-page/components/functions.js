/* eslint-disable import/prefer-default-export */

const whatIsTheTime = (timeInMirror) => {
  const arr = timeInMirror.split(':').map((a) => Number(a));
  const [h, min] = arr;
  let mirH = min > 0 ? 12 - h - 1 : 12 - h;
  if (h === 12 && min > 0) mirH = 12 - 1;
  if (mirH === 0) mirH = 12;
  const mirMin = min > 0 ? 60 - min : min;

  const resultH = (mirH < 10) ? `0${mirH}` : `${mirH}`;
  const resultM = (mirMin < 10) ? `0${mirMin}` : `${mirMin}`;

  return [resultH, resultM].join(':');
};

// "06:35" --> "05:25"
// "11:59" --> "12:01"
// "12:02" --> "11:58"
// "04:00" --> "08:00"
// "06:00" --> "06:00"
// "12:00" --> "12:00"

export { whatIsTheTime };
