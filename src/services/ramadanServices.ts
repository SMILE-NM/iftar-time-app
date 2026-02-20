// services/ramadanService.ts
import { IRamadanTime, RAMADAN_TIMES_SEOUL } from '@/data/ramadan-times';
import { getSeoulTime } from '@/utils/timeUtils';

export function findRamadanByDate(date: Date): IRamadanTime | undefined {
  return RAMADAN_TIMES_SEOUL.find(
    (r) => r.date === date.toISOString().slice(0, 10),
  );
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
