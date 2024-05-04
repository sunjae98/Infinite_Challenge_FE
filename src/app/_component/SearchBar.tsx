import Image from 'next/image'

export default function SearchBar() {
  return (
    <div className="w-[486px] pr-2 bg-white rounded-[42px] justify-between items-center inline-flex">
      <div className="w-[430px] h-[69.70px] pl-6 pr-2.5 py-5 bg-white justify-start items-center gap-2.5 flex rounded-[42px]">
        <div className="w-4 h-4 relative">
          <Image src="/search.svg" alt="search" layout="fill" objectFit="contain" priority />
        </div>
        <div className="w-[151px] text-center text-zinc-400 text-base font-normal font-['Spoqa Han Sans Neo'] leading-none">
          질환명을 입력해주세요.
        </div>
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
