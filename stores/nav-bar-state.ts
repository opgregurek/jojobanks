import { create } from "zustand";

interface NavBarStateProperties {
  navBarColor: string;
  navBarActiveIcon: string;
}

type NavBarState = NavBarStateProperties & {
  setNavBarColor: (newColor: string) => void;
  setNavBarActiveIcon: (newActiveIcon: string) => void;
};

const defaultNavBarState: NavBarStateProperties = {
  navBarColor: "black",
  navBarActiveIcon: "misc/nav-active",
};

export const useNavBarState = create<NavBarState>((set) => ({
  ...defaultNavBarState,
  setNavBarColor: (newColor: string) =>
    set((state) => ({
      ...state,
      navBarColor: newColor,
    })),
  setNavBarActiveIcon: (newActiveIcon: string) =>
    set((state) => ({
      ...state,
      navBarActiveIcon: newActiveIcon,
    })),
}));
