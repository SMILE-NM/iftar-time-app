'use client';
import {
  getNextRamadanDay,
  getRamadanDay,
  getRamadanEventDates,
} from '@/services/ramadanServices';
import { getSeoulTime } from '@/utils/timeUtils';

export function calculateRamadanTime(): { suhoor: number; iftar: number } {
  const now = getSeoulTime();

  console.log('getSeoulTime result', now);

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
  console.log('Soul Time', now);
  const ramadanDay = getRamadanDay(now);
  console.log('ramadanDay', ramadanDay);
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
