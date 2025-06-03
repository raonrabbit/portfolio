import { motion } from "framer-motion";
import InterviewCard from "./InterviewCard";

export default function Interview() {
  return (
    <div className="h-full w-screen z-10 pt-4">
      <div className="flex flex-col overflow-hidden bg-gradient-to-b from-white/70 to-white w-full gap-4">
        <h2 className="text-gray-800 font-semibold text-4xl p-4">Interview</h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-between gap-8 px-4 pb-12"
        >
          <InterviewCard
            title="왜 Frontend 개발자가 되고 싶은가요?"
            content="사용자와 직접적으로 맞닿는 창구를 제가 직접 만들 수 있다는 점이 매력적이었습니다. 사용자의 경험을 개선하고 시각적으로 아름다운 웹페이지를 만드는 것에 큰 보람을 느낍니다."
          />
          <InterviewCard
            title="어떤 개발자가 되고 싶으신가요?"
            content="다양한 기술들을 습득하여 전문성을 키우고, 대체 불가능한 고유한 매력을 지니고 있는 개발자가 되고 싶습니다."
          />
          <InterviewCard
            title="어떤 것을 가장 중요하게 생각하나요?"
            content="사용자가 불편함을 느끼지 않도록 깔끔하고 최적화된 웹페이지를 만드는 것을 중요하게 생각합니다. 이를 위해 끊임없이 고민하고 생각하며 개발을 하고 있습니다."
          />
        </motion.div>
      </div>
    </div>
  );
}
