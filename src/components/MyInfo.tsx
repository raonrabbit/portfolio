import { motion } from "framer-motion";
import Interview from "./Interview";
import Skills from "./Skills";
import Awards from "./Awards";
import Education from "./Education ";
import Projects from "./Projects";

export default function MyInfo() {
  return (
    <div className="relative">
      <section className="fixed top-0 left-0 w-screen h-screen flex flex-col py-10 bg-[url(/assets/background.jpg)]">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 0.5, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl font-semibold text-white px-14"
        >
          Frontend Developer_ _ _
        </motion.h1>
        <div className="flex justify-center items-center flex-col gap-4 h-full w-full">
          <div className="flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex justify-center items-center rounded-t-full overflow-hidden w-80 h-80 object-cover "
            >
              <img
                src="../../public/assets/MyPhoto.jpg"
                alt="프로필 사진"
                loading="lazy"
              />
            </motion.div>
          </div>
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex justify-center items-center text-2xl text-center w-full"
            >
              <text className="bg-white/70 px-2">
                프론트엔드 개발자 최준혁입니다.
              </text>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex justify-center items-center text-2xl text-center w-full"
            >
              <text className="bg-white/70 rounded-t-3xl px-4">
                고되도 아름다운 결과를 만들어내는 장인정신을 지향하는
                개발자입니다.
              </text>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="relative" style={{ marginTop: "100vh" }}>
        <Interview />
        <Skills />
        <Awards />
        <Education />
        <Projects />
      </div>
    </div>
  );
}
