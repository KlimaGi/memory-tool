/* eslint-disable import/prefer-default-export */

const randomTime = () => {
  const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const addZeroStr = (num) => (num < 10 ? `0${num}` : `${num}`);
  const hours = rand(1, 12);
  const mint = rand(0, 60);
  const time = [addZeroStr(hours), addZeroStr(mint)].join(':');
  return time;
};

const whatIsTheTime = (timeInMirror) => {
  const arr = timeInMirror.split(':').map((a) => Number(a));
  const [hours, minutes] = arr;
  let mirH = minutes > 0 ? 12 - hours - 1 : 12 - hours;
  if (hours === 12 && minutes > 0) mirH = 12 - 1;
  if (mirH === 0) mirH = 12;
  const mirMin = minutes > 0 ? 60 - minutes : minutes;

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

export { randomTime, whatIsTheTime };
