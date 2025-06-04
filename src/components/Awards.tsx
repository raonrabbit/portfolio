import SimpleCard from "./SimpleCard";

export default function Awards() {
  return (
    <div className="h-full bg-white w-screen z-10 pt-4 pb-4">
      <h2 className="text-gray-800 font-semibold text-4xl p-4 pb-8">Awards</h2>
      <div className="grid grid-cols-3 gap-4 px-4">
        <SimpleCard
          title="AI 기반 부동산 추천 플랫폼 개발 PJT - 최우수상"
          content="??? ~ ???"
        />
        <SimpleCard
          title="AI 를 활용한 뱅킹 키오스크 PJT - 우수상 (SSAFY)"
          content="??? ~ ???"
        />
        <SimpleCard
          title="유기견 보호소를 위한 플랫폼 개발 PJT - 우수상 (SSAFY)"
          content="??? ~ ???"
        />
      </div>
    </div>
  );
}
