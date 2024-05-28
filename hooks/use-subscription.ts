import { create } from "zustand";

type SubscriptionPlan = {
  subscription: "Basic" | "Pro";
  isLoading: boolean;
  totalStorage: number;
  setSubscription: (subscription: "Basic" | "Pro") => void;
  setIsLoading: (isLoading: boolean) => void;
  setTotalStorage: (totalStorage: number) => void;
};

export const useSubscription = create<SubscriptionPlan>(set => ({
  subscription: "Basic",
  isLoading: true,
  totalStorage: 0,
  setSubscription: subscription => set({ subscription }),
  setIsLoading: isLoading => set({ isLoading }),
  setTotalStorage: totalStorage => set({ totalStorage }),
}));
