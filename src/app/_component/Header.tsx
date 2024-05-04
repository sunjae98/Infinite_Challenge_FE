import Image from 'next/image'

export default function Header() {
  return (
    <div className="max-w-full h-14 py-2.5 bg-white justify-center items-center gap-2.5 flex">
      <div className="w-[1000px] h-14 px-5 bg-white justify-between items-center flex">
        <div className="w-[138px] h-[25px] relative">
          <Image src="/logo.svg" alt="page logo" layout="fill" objectFit="contain" priority />
        </div>
        <div className="text-black text-base font-normal font-['Spoqa Han Sans Neo'] leading-[57px]">
          즐겨찾기
        </div>
      </div>
    </div>
  )
}
