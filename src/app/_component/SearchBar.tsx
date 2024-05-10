'use client'

import Image from 'next/image'
import { useState } from 'react'
import { SyntheticEvent } from 'react'
import { useIsinputFocusStore } from '@/store/store'

export default function SearchBar() {
  const { isInputFocused, setIsInputFocused } = useIsinputFocusStore()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = () => {
    console.log('검색어:', searchTerm)
  }

  const handleInputChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement
    setSearchTerm(target.value)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const handleFocus = () => {
    setIsInputFocused(true)
  }

  const handleBlur = () => {
    if (searchTerm === '') {
      setIsInputFocused(false)
    }
  }

  return (
    <div className="w-[486px] pr-2 bg-white rounded-[42px] justify-between items-center inline-flex">
      <div className="w-[430px] h-[69.70px] pl-6 pr-2.5 py-5 bg-white justify-start items-center gap-2.5 flex rounded-[42px]">
        <div className={`w-full h-full flex items-center ${isInputFocused ? 'hidden' : ''}`}>
          <img
            src="/search.svg"
            alt="search"
            className={`w-4 h-4 relative ${isInputFocused ? 'hidden' : ''}`}
          />
          <img
            src="placeholder.svg"
            alt="placeholder"
            className={`w-[151px] h-full relative ml-3 ${isInputFocused ? 'hidden' : ''}`}
          />
        </div>
        <input
          type="text"
          className="w-full h-full outline-none"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      <div className="w-12 h-12 relative">
        <Image
          src="/searchBtn.svg"
          alt="search button"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
    </div>
  )
}
