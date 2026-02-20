'use client';

import {
  IRamadanTime,
  MONTH_NAMES,
  RAMADAN_TIMES_SEOUL,
} from '@/data/ramadan-times';

function getSeoulTime() {
  return new Date(
    new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' }),
  );
}

function getNextEventTime(today: Date, ramadanTime: IRamadanTime) {
  // const [suhoorHours, suhoorMinutes] = ramadanTime.suhoor
  //   .split(':')
  //   .map(Number);
  const [iftarHours, iftarMinutes] = ramadanTime.iftar.split(':').map(Number);

  const suhoorDate = new Date(
    `${ramadanTime.date}T${ramadanTime.suhoor}:00+09:00`,
  );
  const iftarDate = new Date(
    `${ramadanTime.date}T${ramadanTime.iftar}:00+09:00`,
  );

  return {
    suhoorDate,
    iftarDate,
    suhoorTime: ramadanTime.suhoor,
    iftarTime: ramadanTime.iftar,
  };
}

function formatTime(ms: number) {
  if (ms < 0) ms = 0;
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function calculateRamadanTime(): { suhoor: number; iftar: number } {
  const now = getSeoulTime();
  // const test = new Date();

  // const now = new Date(test.getTime() + 2 * 60 * 60 * 1000);

  // Внутренняя функция для поиска расписания по дате
  const findRamadanByDate = (date: Date): IRamadanTime | undefined => {
    return RAMADAN_TIMES_SEOUL.find(
      (r) => r.date === date.toISOString().slice(0, 10),
    );
  };

  let todayRamadan = findRamadanByDate(now);

  if (!todayRamadan) return { suhoor: 0, iftar: 0 };

  let { suhoorDate, iftarDate } = getNextEventTime(now, todayRamadan);

  let suhoorResult = suhoorDate.getTime() - now.getTime();
  let iftarResult = iftarDate.getTime() - now.getTime();

  // Если уже прошёл ифтар, берём завтрашний день
  if (iftarResult <= 0) {
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);

    const tomorrowRamadan = findRamadanByDate(tomorrow);

    if (!tomorrowRamadan) return { suhoor: 0, iftar: 0 };

    ({ suhoorDate, iftarDate } = getNextEventTime(now, tomorrowRamadan));

    suhoorResult = suhoorDate.getTime() - now.getTime();
    // iftarResult = iftarDate.getTime() - now.getTime();
  }

  return {
    suhoor: Math.max(0, Math.floor(suhoorResult / 1000)),
    iftar: Math.max(0, Math.floor(iftarResult / 1000)),
  };
}

const getIftarAndSuhoorTime = () => {
  const now = getSeoulTime();
  const findRamadanByDate = (date: Date): IRamadanTime | undefined => {
    return RAMADAN_TIMES_SEOUL.find(
      (r) => r.date === date.toISOString().slice(0, 10),
    );
  };
  let todayRamadan = findRamadanByDate(now);

  if (!todayRamadan) return { suhoor: 0, iftar: 0 };

  const monthIndex = now.getMonth();

  return {
    iftarTime: todayRamadan.iftar,
    suhoorTime: todayRamadan.suhoor,
    day: now.getDate(),
    month: MONTH_NAMES[monthIndex],
    year: now.getFullYear(),
    ramadanDay: todayRamadan.day,
  };
};

export { calculateRamadanTime, getIftarAndSuhoorTime };
