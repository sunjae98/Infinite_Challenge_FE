export default function SearchBox() {
  const searchResult = [
    {
      name: '갑상선암',
      id: 4373,
    },
    {
      name: '갑상선염',
      id: 4376,
    },
    {
      name: '갑상선중독증',
      id: 4378,
    },
  ]

  const recentSearchWord = [
    {
      name: '갑상선암',
      id: 4373,
    },
    {
      name: '갑상선염',
      id: 4376,
    },
    {
      name: '갑상선중독증',
      id: 4378,
    },
  ]

  return (
    <div className="w-[486px] h-fit px-6 pt-6 pb-4 bg-white rounded-[20px] shadow flex-col justify-start items-start gap-2.5 inline-flex absolute top-3/4">
      <div className="w-[438px] h-9 pb-2.5 justify-start items-start gap-2.5 inline-flex">
        <div className="text-center text-gray-500 text-[13px] font-normal font-['Spoqa Han Sans Neo'] leading-none">
          최근 검색어
        </div>
      </div>
      {recentSearchWord.map((item) => (
        <div
          key={item.id}
          className="w-[438px] h-10 px-[5px] py-3 bg-white justify-start items-start gap-2.5 inline-flex">
          <img src="/search.svg" alt="search" className="w-4 h-4 relative" />
          <div className="text-center text-black text-sm font-normal font-['Spoqa Han Sans Neo'] leading-none">
            {item.name}
          </div>
        </div>
      ))}
      {/* <div className="w-[438px] h-8 py-2 bg-white justify-start items-start gap-2.5 inline-flex">
        <div className="text-center text-gray-400 text-base font-normal font-['Spoqa Han Sans Neo'] leading-none">
          최근 검색어가 없습니다.
        </div>
      </div> */}
    </div>
  )
}
