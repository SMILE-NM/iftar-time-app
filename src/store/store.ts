import { create } from 'zustand';
enum RamadanMessage {
  Suhoor = 'Time until Iftar',
  Iftar = 'Suhoor ends in',
}

interface RamadanTimeStore {
  //   ramadanTitle:
  suhoor: number;
  iftar: number;
  setRamadanTime: (time: { suhoor: number; iftar: number }) => void;
}

const useRamadanStore = create<RamadanTimeStore>()((set) => ({
  iftarTimeToday: '',
  suhurTimeToday: '',
  iftar: 0,
  suhoor: 0,
  setRamadanTime: (time: { suhoor: number; iftar: number }) => set(time),
}));

export { useRamadanStore };
