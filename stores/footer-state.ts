import { create } from "zustand";

interface FooterStateProperties {
  enableFooter: boolean;
}

type FooterState = FooterStateProperties & {
  setEnableFooter: (newEnableFooter: boolean) => void;
};

const defaultFooterState: FooterStateProperties = {
  enableFooter: true,
};

export const useFooterState = create<FooterState>((set) => ({
  ...defaultFooterState,
  setEnableFooter: (newEnableFooter: boolean) =>
    set((state) => ({
      ...state,
      enableFooter: newEnableFooter,
    })),
}));
