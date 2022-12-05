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

const timeDifference = ([time1, time2]) => {
  console.log('[time1, time2]', [time1, time2]);
  const num = (time) => time.split(':').map((x) => Number(x));
  const [hour1, min1] = num(time1);
  const [hour2, min2] = num(time2);

  let mins = 0;
  if (hour2 > hour1) {
    mins = (hour2 * 60 + min2) - (hour1 * 60 + min1);
  } else {
    mins = 720 - (hour1 * 60 + min1) + (hour2 * 60 + min2);
  }

  const hours = Math.floor(mins / 60);
  const minutes = mins % 60;

  const resultH = (hours < 10) ? `0${hours}` : `${hours}`;
  const resultM = (minutes < 10) ? `0${minutes}` : `${minutes}`;

  const resultTime = [resultH, resultM].join(':');
  return resultTime;
};

export { randomTime, whatIsTheTime, timeDifference };
