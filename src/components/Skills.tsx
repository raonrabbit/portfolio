import { motion } from "framer-motion";
import SimpleCard from "./SimpleCard";
import SkillScore from "./SkillScore";

interface Skill {
  title: React.ReactNode;
  content: React.ReactNode;
}

export default function Skills() {
  const skills: Skill[] = [
    {
      title: (
        <div className="flex gap-2 items-center">
          React
          <SkillScore score={3} />
        </div>
      ),
      content: (
        <ul>
          <li>
            React 의 동작 방식을 이해하고 상태 관리, React Router Dom 등 활용
            가능
          </li>
          <li>컴포넌트 개념을 이해하고, 재사용을 위한 개발 가능</li>
        </ul>
      ),
    },
    {
      title: (
        <div className="flex gap-2 items-center">
          JavaScript
          <SkillScore score={3} />
        </div>
      ),
      content: (
        <ul>
          <li>
            <span className="font-semibold">ES6+</span> 를 이해하고 이를
            활용하여 소규모 프로젝트 진행가능
          </li>
          <li>
            <span className="font-semibold">JS기반</span> 프레임워크와
            라이브러리 사용가능
          </li>
          <li>
            <span className="font-semibold">
              비동기 처리(Promise, async/await)
            </span>{" "}
            및 <span className="font-semibold">API 연동</span> 가능
          </li>
        </ul>
      ),
    },
    {
      title: (
        <div className="flex gap-2 items-center">
          TypeScript
          <SkillScore score={3} />
        </div>
      ),
      content: (
        <ul>
          <li>타입 시스템을 활용하여 안정적인 코드 작성 가능</li>
          <li>React + TypeScript 환경에서 컴포넌트 개발 가능</li>
        </ul>
      ),
    },
    {
      title: (
        <div className="flex gap-2 items-center">
          Tailwind
          <SkillScore score={3} />
        </div>
      ),
      content: (
        <ul>
          <li>기초적인 Tailwind CSS 활용 가능</li>
          <li>컴포넌트 스타일링 및 다크 모드 적용 가능</li>
          <li>반응형 웹페이지 설계 및 구현 가능</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="h-full w-screen z-10">
      <div className="flex flex-col overflow-hidden bg-white w-full gap-4">
        <h2 className="text-gray-800 font-semibold text-4xl p-4">Skills</h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-3 gap-8 px-4 pb-12"
        >
          {skills.map((skill, idx) => (
            <SimpleCard key={idx} title={skill.title} content={skill.content} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
