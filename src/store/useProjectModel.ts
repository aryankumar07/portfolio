import { create } from "zustand"

interface ProjetStore {
    isOpen: boolean
    index: number
    setOpen: () => void
    setClose: () => void
    setIndex: (value: number) => void
}


export const useProjectModel = create<ProjetStore>((set) => (
    {
        isOpen: false,
        index: 0,
        setOpen: () => set({ isOpen: true }),
        setClose: () => set({ isOpen: false }),
        setIndex: (value: number) => set({ index: value })
    }
))
