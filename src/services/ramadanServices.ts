// services/ramadanService.ts
import { IRamadanTime, RAMADAN_TIMES_SEOUL } from '@/data/ramadan-times';

export function findRamadanByDate(date: Date): IRamadanTime | undefined {
  const seoulDate = date.toLocaleDateString('en-CA', {
    timeZone: 'Asia/Seoul',
  });
  return RAMADAN_TIMES_SEOUL.find((r) => r.date === seoulDate);
}

export function getRamadanEventDates(ramadanTime: IRamadanTime) {
  const suhoorDate = new Date(
    `${ramadanTime.date}T${ramadanTime.suhoor}:00+09:00`,
  );
  const iftarDate = new Date(
    `${ramadanTime.date}T${ramadanTime.iftar}:00+09:00`,
  );
  return { suhoorDate, iftarDate };
}

export function getNextRamadanDay(now: Date): IRamadanTime | undefined {
  let today = findRamadanByDate(now);
  if (!today) return undefined;

  const { suhoorDate, iftarDate } = getRamadanEventDates(today);

  const iftarCalculated = Math.max(
    0,
    Math.floor((iftarDate.getTime() - now.getTime()) / 1000),
  );

  console.log('TEST', iftarCalculated);
  console.log('IFTAR TIME', iftarDate.getTime());
  console.log('IFTAR DATE', iftarDate);
  if (iftarCalculated === 0) {
    // если ифтар прошёл, берем завтрашний день
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    today = findRamadanByDate(tomorrow) ?? undefined;
  }

  return today;
}

export function getRamadanDay(now: Date): IRamadanTime | undefined {
  let today = findRamadanByDate(now);
  if (!today) return undefined;

  console.log('getRamadanDay', today);
  return today;
}
