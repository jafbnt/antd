import { create } from "zustand";

type D3LayoutStoreProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const useD3LayoutStore = create<D3LayoutStoreProps>((set, get) => ({
  // Início State para abrir e fechar o menu
  isOpen: true,
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
  // Fim - State para abrir e fechar o menu
}));
