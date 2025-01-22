import { create } from "zustand"
import { Project } from "../constants"

interface ProjetStore {
    isOpen: boolean
    project: Project | null
    setOpen: () => void
    setClose: () => void
    setProject: (value: Project) => void
}


export const useProjectModel = create<ProjetStore>((set) => (
    {
        isOpen: false,
        project: null,
        setOpen: () => set({ isOpen: true }),
        setClose: () => set({ isOpen: false }),
        setProject: (value: Project) => set({ project: value })
    }
))
