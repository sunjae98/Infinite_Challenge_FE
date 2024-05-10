import { create } from 'zustand'

/* search 포커스 여부 */
interface IsinputFocusState {
  isInputFocused: boolean
  setIsInputFocused: (isInputFocused: boolean) => void
}
export const useIsinputFocusStore = create<IsinputFocusState>((set) => ({
  isInputFocused: false,
  setIsInputFocused: (isInputFocused: boolean) => set({ isInputFocused }),
}))
