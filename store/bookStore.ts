import { create } from "zustand";

interface IBook {
    stateSidebar : boolean
    updateStateSidebar : (newStateSidebar : boolean) => void
}

export const useBookStore = create<IBook>( (set) => ({
   stateSidebar : true,
   updateStateSidebar : (newStateSidebar : boolean) => set({stateSidebar : newStateSidebar})
}));