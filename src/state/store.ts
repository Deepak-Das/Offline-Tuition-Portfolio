import { create } from "zustand";

type navSateProps = {
  current: "Home" | "Course" | "About" | "Contact";
  setNaveState: (val: "Home" | "Course" | "About" | "Contact") => void;
};

export const useNaveState = create<navSateProps>((set) => ({
  current: "Home",
  setNaveState: (val) => {
    set({ current: val });
  },
}));

type menuStateProps = {
  collapsed: boolean;
  menuToggle: () => void;
};
export const useMenuToggle = create<menuStateProps>((set, get) => ({
  collapsed: false,
  menuToggle: () => {
    set((state) => {
      console.log(state.collapsed);

      return { collapsed: !state.collapsed };
    });
  },
}));
