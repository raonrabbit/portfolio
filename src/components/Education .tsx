import SimpleCard from "./SimpleCard";

export default function Education() {
  return (
    <div className="h-full bg-white w-screen z-10 pt-8 pb-4">
      <h2 className="text-gray-800 font-semibold text-4xl p-4 pb-8">
        Education
      </h2>
      <div className="grid grid-cols-3 gap-4 px-4">
        <SimpleCard
          title="안양대학교 컴퓨터공학과 졸업"
          content="2018.03 ~ 2024.02"
        />
        <SimpleCard
          title="삼성 청년 SW 아카데미 12기 재학"
          content="2024.06 ~ 현 재"
        />
      </div>
    </div>
  );
}
