import { Iblog } from '../constants'
import { create } from 'zustand'

interface BlogModelProp {
  isOPen: boolean,
  blog: Iblog | undefined | null,
  setOPen: () => void,
  setClose: () => void,
  setBlog: (blog: Iblog) => void
}


export const useBlogModel = create<BlogModelProp>((set) => ({
  isOPen: true,
  blog: null,
  setOPen: () => set({ isOPen: true }),
  setClose: () => set({ isOPen: false }),
  setBlog: (blog: Iblog) => set({ blog: blog }),
}))

