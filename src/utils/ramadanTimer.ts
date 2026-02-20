// services/ramadanTimer.ts
import {
  getNextRamadanDay,
  getRamadanEventDates,
} from '@/services/ramadanServices';
import { getSeoulTime } from '@/utils/timeUtils';

export function calculateRamadanTime(): { suhoor: number; iftar: number } {
  // const test = new Date();

  // const now = new Date(test.getTime() + 66 * 60 * 1000);

  const now = getSeoulTime();

  const ramadanDay = getNextRamadanDay(now);

  if (!ramadanDay) return { suhoor: 0, iftar: 0 };

  const { suhoorDate, iftarDate } = getRamadanEventDates(ramadanDay);

  return {
    suhoor: Math.max(
      0,
      Math.floor((suhoorDate.getTime() - now.getTime()) / 1000),
    ),
    iftar: Math.max(
      0,
      Math.floor((iftarDate.getTime() - now.getTime()) / 1000),
    ),
  };
}

export function getIftarAndSuhoorTime() {
  const now = getSeoulTime();
  const ramadanDay = getNextRamadanDay(now);
  if (!ramadanDay)
    return {
      suhoorTime: '',
      iftarTime: '',
      day: 0,
      month: '',
      year: 0,
      ramadanDay: 0,
    };

  return {
    suhoorTime: ramadanDay.suhoor,
    iftarTime: ramadanDay.iftar,
    day: now.getDate(),
    month: now.toLocaleString('en-US', {
      month: 'long',
      timeZone: 'Asia/Seoul',
    }),
    year: now.getFullYear(),
    ramadanDay: ramadanDay.day,
  };
}
