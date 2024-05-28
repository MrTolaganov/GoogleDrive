import { create } from "zustand";

type FolderType = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useFolder = create<FolderType>(set => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
