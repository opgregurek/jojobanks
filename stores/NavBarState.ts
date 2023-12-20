import {atom} from "recoil";

export const NavBarBackground = atom({
    key: 'navBarBackground',
    default: 'white',
});

export const NavBarColor = atom({
    key: 'navBarColor',
    default: 'text.blue',
});

export const NavBarActiveIcon = atom({
    key: 'navBarActiveIcon',
    default: 'misc/nav-active',
});

export const NavBarShadow = atom({
    key: 'navBarShadow',
    default: false,
});