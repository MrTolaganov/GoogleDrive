import { create } from "zustand";

type PlanStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const usePlan = create<PlanStore>(set => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
