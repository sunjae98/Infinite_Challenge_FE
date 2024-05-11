import Image from 'next/image'

export default function SearchResult() {
  const searchResult = [
    {
      from_type: 1,
      url: 'https://api.clinicaltrialskorea.com/api/v1/studies/29262/',
      id: 29262,
      ct_id: '201900132',
      locations: [
        {
          city: '부산',
        },
      ],
      phases: ['3상'],
      minimum_age_display: '18세',
      maximum_age_display: null,
      title:
        '이전 VEGFR 표적 요법 후 진행한 방사성요오드 치료저항성 분화 갑상선암 시험대상자에서 카보잔티닙(XL184)에 대한 제3상, 무작위배정, 이중 눈가림, 위약 대조 시험',
      start_date: '2019-01-01',
      completion_date: '2022-08-01',
      lead_sponsor_name: '파머수티컬리서치어소시에이츠코리아',
      brief_summary:
        '본 시험의 목적은 이전 VEGFR 표적 요법 후 진행한 RAI 저항성 DTC 시험대상자에서 위약과 비교하여 카보잔티닙이 PFS 및 ORR에 미치는 영향을 평가하는 것이다.',
      gender: '남녀모두',
      is_sponsor: false,
      survey_id: null,
      is_new: false,
      created_at: '2021-10-26T19:18:06.531105',
    },
    {
      from_type: 1,
      url: 'https://api.clinicaltrialskorea.com/api/v1/studies/27142/',
      id: 27142,
      ct_id: '202100156',
      locations: [
        {
          city: '서울',
        },
      ],
      phases: ['연구자 임상시험'],
      minimum_age_display: '18세',
      maximum_age_display: '65세',
      title:
        '갑상선 전절제술을 시행받는 환자에서 수술 전 비타민 D(디맥정 30,000 IU) 경구 투여의 수술 후 저칼슘혈증 예방 효용성 연구',
      start_date: '2020-12-01',
      completion_date: '2022-12-01',
      lead_sponsor_name: '서울대학교병원',
      brief_summary:
        '수술 전 비타민 D3(cholecalciferol) 경구 복용의 수술 후 저칼슘혈증 예방효과를 증명하고자 하는 연구자 임상시험이다.',
      gender: '남녀모두',
      is_sponsor: false,
      survey_id: null,
      is_new: false,
      created_at: '2022-05-12T13:47:12.640427',
    },
  ]

  return (
    <div className="w-[1000px] h-fit px-2.5 py-5 bg-white flex flex-wrap justify-center items-start gap-[30px]">
      {searchResult.map((item) => (
        <div
          key={item.id}
          className="w-[431px] h-[178px] p-5 bg-white rounded-[10px] border border-gray-300 flex-col justify-start items-start inline-flex">
          <div className="h-20 flex-col justify-start items-start gap-1 flex">
            <div className="w-full justify-between items-center flex">
              <div className="text-slate-500 text-[10px] font-normal font-['Spoqa Han Sans Neo']">
                {item.lead_sponsor_name}
              </div>
              <img src="/scrap.svg" alt="scrap" className={'w-4 h-4 relative'} />
            </div>
            <div className="h-[54px] flex-col justify-center items-start flex">
              <div className=" text-black text-xs font-bold font-['Spoqa Han Sans Neo'] leading-[18px]">
                {item.title}
              </div>
            </div>
          </div>
          <div className="h-[18px] pt-2 flex-col justify-center items-start flex">
            <div className="text-neutral-400 text-[8px] font-normal font-['Spoqa Han Sans Neo'] leading-[10px]">
              실시기관지역 | {item.locations.map((loc) => loc.city || '정보 없음').join(', ')}
            </div>
          </div>
          <div className="h-4 pt-2 flex-col justify-start items-start flex">
            <div className="text-neutral-400 text-[8px] font-normal font-['Spoqa Han Sans Neo'] leading-[8px]">
              모집 마감일 | {item.completion_date}
            </div>
          </div>
          <div className="pt-2 justify-start items-center gap-[5px] inline-flex">
            {item.phases.map((phase, index) => (
              <div
                key={index}
                className="px-2.5 py-[7px] bg-gray-100 rounded-[20px] justify-start items-start gap-2.5 flex">
                <div className="text-neutral-600 text-[10px] font-normal font-['Spoqa Han Sans Neo'] leading-[8px]">
                  {phase}
                </div>
              </div>
            ))}
            <div className="px-2.5 py-[7px] bg-gray-100 rounded-[20px] justify-start items-start gap-2.5 flex">
              <div className="text-neutral-600 text-[10px] font-normal font-['Spoqa Han Sans Neo'] leading-[8px]">
                {item.gender}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
