import { motion } from "framer-motion";

interface SimpleCardProps {
  title: React.ReactNode;
  content: React.ReactNode;
}

export default function SimpleCard({ title, content }: SimpleCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex flex-1 flex-col gap-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="min-w-2 min-h-2 bg-main rounded-full" />
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        <div className="min-w-2 min-h-2 bg-main rounded-full" />
      </div>
      <div className="h-[1px] bg-gray-200" />
      <p className="text-gray-600 leading-relaxed">{content}</p>
    </motion.div>
  );
}
