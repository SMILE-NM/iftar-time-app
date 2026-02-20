import { create } from 'zustand';

interface RamadanTimeState {
  ramadanDay: number;
  suhoor: number;
  iftar: number;
  setRamadanTime: (time: { suhoor: number; iftar: number }) => void;
  setRamadanDay: (day: { ramadanDay: number }) => void;
}

const useRamadanStore = create<RamadanTimeState>()((set) => ({
  ramadanDay: 0,
  iftar: 0,
  suhoor: 0,
  setRamadanTime: (time: { suhoor: number; iftar: number }) => set(time),
  setRamadanDay: (day: { ramadanDay: number }) => set(day),
}));

export { useRamadanStore };
