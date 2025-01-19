import { create } from "zustand";

interface NavBarStateProperties {
  navBarBackground: string;
  navBarColor: string;
  navBarActiveIcon: string;
  navBarShadow: boolean;
}

type NavBarState = NavBarStateProperties & {
  setNavBarShadow: (newShadow: boolean) => void;
  setNavBarBackground: (newBackground: string) => void;
  setNavBarColor: (newColor: string) => void;
  setNavBarActiveIcon: (newActiveIcon: string) => void;
};

const defaultNavBarState: NavBarStateProperties = {
  navBarBackground: "white",
  navBarColor: "black",
  navBarActiveIcon: "misc/nav-active",
  navBarShadow: false,
};

export const useNavBarState = create<NavBarState>((set) => ({
  ...defaultNavBarState,
  setNavBarShadow: (newShadow: boolean) =>
    set((state) => ({
      ...state,
      navBarShadow: newShadow,
    })),
  setNavBarBackground: (newBackground: string) =>
    set((state) => ({
      ...state,
      navBarBackground: newBackground,
    })),
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
