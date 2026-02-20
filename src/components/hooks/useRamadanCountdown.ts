import { useRamadanStore } from '@/store/store';

export function useRamadanCountdown() {
  const iftar = useRamadanStore((s) => s.iftar);
  const suhoor = useRamadanStore((s) => s.suhoor);

  return suhoor > 0 ? suhoor : iftar;
}
