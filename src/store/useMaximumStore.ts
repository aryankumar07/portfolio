import { create } from 'zustand'

interface Imax {
  maximum: boolean,
  toggleMaximum: () => void,
}

export const useMaximumStore = create<Imax>((set) => ({
  maximum: false,
  toggleMaximum: () => set((state) => ({ maximum: !state.maximum }))
}))
