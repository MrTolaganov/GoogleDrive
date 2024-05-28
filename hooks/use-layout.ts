import { create } from "zustand";

type LayoutStore = {
  layout: "list" | "grid";
  setLayout: (layout: "list" | "grid") => void;
};

export const useLayout = create<LayoutStore>(set => ({
  layout: "list",
  setLayout: layout => set({ layout }),
}));
