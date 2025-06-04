import ImageCard from "./ImageCard";

export default function Projects() {
  return (
    <div className="h-full bg-gradient-to-t from-white/70 to-white w-screen z-10 pt-8 pb-4">
      <h2 className="text-gray-800 font-semibold text-4xl p-4 pb-8">
        Projects
      </h2>
      <div className="grid grid-cols-3 gap-4 px-4">
        <ImageCard
          image="/assets/Ezip_Preview.png"
          title="이집어때"
          content={
            <div>
              <ul>
                <li>
                  사용자가 원하는 부동산 매물을 쉽고 빠르게 찾을 수 있도록 돕는
                  부동산 정보 제공 플랫폼
                </li>
                <li>
                  <div className="font-semibold text-main pt-4">담당 기능</div>
                  Database 확장 및 데이터 처리, 네이버 뉴스 API 연동, GPT API
                  기반 챗봇 개발
                </li>
              </ul>
            </div>
          }
        />
        <ImageCard
          image="/assets/Donghang_Preview.png"
          title="동행"
          content={
            <div>
              <ul>
                <li>
                  AI 아바타를 활용한 뱅킹 키오스크, 일반 사용자는 UI 를 통해,
                  시니어 사용자는 AI 아바타와 대화 형식으로 뱅킹 업무 수행
                </li>
                <li>
                  <div className="font-semibold text-main pt-4">담당 기능</div>
                  아바타 애니메이션 및 분기 처리, 음성 탐지 기술 구현, 시니어
                  사용자 파트 UI 구현
                </li>
              </ul>
            </div>
          }
        />
        <ImageCard
          image="/assets/HangbokDog_Preview.png"
          title="행복하개"
          content={
            <div>
              <ul>
                <li>
                  소규모 유기견 보호소에서 유기견 관리 및 봉사 관리 등을 편하게
                  도와줄 수 있게 해주는 플랫폼
                </li>
                <li>
                  <div className="font-semibold text-main pt-4">담당 기능</div>
                  OCR 을 활용한 강아지 정보 입력 기능, 게시판 페이지, 긴급
                  페이지, 예방접종 페이지, 임시보호 페이지, 입양현황 페이지,
                  유기견 등록 페이지, 마이 페이지 개발
                </li>
              </ul>
            </div>
          }
        />
      </div>
    </div>
  );
}
