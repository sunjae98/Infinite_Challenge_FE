import Image from 'next/image'

export default function SearchNotFound() {
  return (
    <div className="w-[1000px] h-[322px] bg-white flex-col justify-center items-center gap-5 inline-flex">
      <div className="w-[72px] h-[72px] relative">
        <Image
          src="/searchNull.svg"
          alt="search not found"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <div className="text-center text-neutral-800 text-base font-bold font-['Spoqa Han Sans Neo'] leading-[18px]">
        현재 모집 중인 임상시험이 없습니다.
      </div>
      <div className="text-center text-gray-500 text-base font-normal font-['Spoqa Han Sans Neo'] leading-normal">
        원하시는 결과가 없나요?
        <br />
        아래 ‘임상시험 소식받기’를 통해 간단한 정보만 입력해주시면 해당 조건에 맞는
        <br />
        새로운 임상시험이 등록 되었을 때 빠르게 알려드리겠습니다.
      </div>
    </div>
  )
}
