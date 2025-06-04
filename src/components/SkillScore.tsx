import { motion } from "framer-motion";

interface SkillScoreProps {
  score: number;
}

export default function SkillScore({ score }: SkillScoreProps) {
  const maxScore = 5;
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: maxScore }).map((_, idx) => (
        <motion.span
          initial={{ backgroundColor: "#EFEFF0" }}
          whileInView={idx < score ? { backgroundColor: "#122973" } : undefined}
          transition={{ duration: 0.5, delay: 1.5 + idx * 0.1 }}
          className="w-3 h-1 rounded-full"
        />
      ))}
    </div>
  );
}
