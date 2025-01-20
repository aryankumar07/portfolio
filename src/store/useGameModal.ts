import { create } from 'zustand'

interface GameModelStore {
    open: boolean
    index: number
    toggle: () => void
    setOpen: () => void
    setClose: () => void
    setIndex: (value: number) => void
}

export const useGameModel = create<GameModelStore>((set) => (
    {
        open: false,
        index: 0,
        toggle: () => set((state) => ({ open: !state.open })),
        setOpen: () => set({ open: true }),
        setClose: () => set({ open: false }),
        setIndex: (value: number) => set({ index: value })
    }
))

