import { motion } from "framer-motion";

interface ImageCardProps {
  image: string;
  title: React.ReactNode;
  content: React.ReactNode;
}

export default function ImageCard({ image, title, content }: ImageCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex flex-1 flex-col gap-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="relative w-full">
        <img
          src={image}
          alt={String(title)}
          className="w-full aspect-square object-contain rounded-md"
        />
        <div className="absolute top-2 left-2 w-2 h-2 bg-main rounded-full" />
        <div className="absolute top-2 right-2 w-2 h-2 bg-main rounded-full" />
      </div>
      <div className="h-[1px] bg-gray-200" />
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <div className="text-gray-600 leading-relaxed">{content}</div>
    </motion.div>
  );
}
