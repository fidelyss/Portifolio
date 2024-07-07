import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={'relative w-full h-screen mx-auto'}>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className={"flex flex-col justify-center items-center mt-5"}>
          <div className={"w-5 h-5 rounded-full bg-[#915eff]"} />
          <div className={"w-1 sm:h-80 h-40 violet-gradient"} />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Oi. Eu sou &nbsp;
            <span className={"text-[#915eff]"}>
              Alisson
            </span>
          </h1>
          <h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Sou Desenvolvedor Full Stack. <br className={"sm:block hidden"} />
              Trabalho com Web sites, Wep Apis e aplicações DeskTop.
            </p>
          </h1>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className={"w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2"}>
            <motion.div animate={{ y: [0, 15, 0], transition: { duration: 1.5, repeat: Infinity, repeatType: "loop", } }}
              className={"rounded-full h-[10px] w-[10px] bg-secondary mb-1"}
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero