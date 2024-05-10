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

/* 추천 검색어 리스트 */
interface RecSearchListState {
  recSearchList: RecSearchList[]
  setRecSearchList: (recSearchWord: RecSearchList[]) => void
}

interface RecSearchList {
  name: string
  id: number
}

export const useRecSearchListStore = create<RecSearchListState>((set) => ({
  recSearchList: [],
  setRecSearchList: (recSearchList) => set({ recSearchList }),
}))

/* 현재 검색어 */
interface SearchTermState {
  searchTerm: string
  setSearchTerm: (searchTerm: string) => void
}
export const useSearchTermStore = create<SearchTermState>((set) => ({
  searchTerm: '',
  setSearchTerm: (searchTerm: string) => set({ searchTerm }),
}))
