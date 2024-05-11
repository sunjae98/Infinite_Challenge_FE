import Header from '@/app/_component/Header'
import SearchBar from '@/app/_component/SearchBar'
import SearchNotFound from '@/app/_component/SearchNotFound'
import SearchResult from '@/app/_component/SearchResult'

export default function Home() {
  return (
    <main>
      <Header />
      <div className="max-w-full h-[462.49px] bg-myColor-100 flex-col justify-center items-center gap-10 flex relative">
        <div className="w-[462.49px] text-center text-black text-[34px] font-bold leading-[52px] flex justify-center">
          국내 모든 임상시험 검색하고 <br /> 온라인으로 참여하기
        </div>
        <SearchBar />
      </div>
      <div className="max-w-full h-[462.49px] bg-white flex-col items-center gap-10 flex">
        {/* <SearchNotFound /> */}
        <SearchResult />
      </div>
    </main>
  )
}
