import React from 'react'
import { motion } from 'framer-motion'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion.js'
import { Tilt } from 'react-tilt'
import { styles } from '../styles'
import { SectionWrapper } from '../Hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className={'w-full'}>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className={'w-full green-pink-gradient p-[2px] rounded-[20px] shadow-card'}
      >
        <div
          options={{
            max: 5,
            scale: 1,
            speed: 150,
          }}
          className={
            "bg-tertiary rounded-[20px] py-5 px-12 min-h-[290px] flex justify-evenly items-center flex-col"
          }
        >
          <img src={icon} alt={title}
            className={'w-16 h-16 tabletsInPortraitMode:h-12 tabletsInPortraitMode:w-12 landscapeTabletsAndSmallDesktops:h-14 landscapeTabletsAndSmallDesktops:w-14   object-contain'}
          />
          <h3
            className={'text-white tabletsInPortraitMode:text-[12px] landscapeTabletsAndSmallDesktops:text-[14px] text-[20px] font-bold text-center'}
          >{title}</h3>

        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant(0.3)}
        className='mt-[47px]'
      >
        <h1 className={styles.sectionHeadText}>Visão Geral</h1>
      </motion.div>
      <motion.p
        variants={textVariant(0.3)}
        className={'mt-1 text-secondary text-[17px] text-center max-w-3xl leading-[30px] mx-[100px]'}
      >

        Atuo no front-end e no back-end de aplicações web. No front-end,
        utilizo HTML, CSS e JavaScript, com frameworks como React e Vue.js
        para criar interfaces interativas. No back-end, trabalho com Node.js
        e Python, implementando lógica de negócio e APIs, além de usar Express
        para facilitar o desenvolvimento.
        Gerencio bancos de dados relacionais, como MySQL,
        e não-relacionais, como MongoDB. Tenho experiência
        com Docker, CI/CD para automação de deploys e uso Git para
        controle de versão. Minha experiência em serviços de hospedagem, como AWS
        e Heroku, me permite integrar a experiência do usuário com a lógica interna
        da aplicação, garantindo um desenvolvimento eficiente de ponta a ponta.
      </motion.p>
      <div className={'mt-1 flex items-center bigMobile:pb-[160px] bigMobile:h-auto justify-center bigMobile:flex-col tabletsInPortraitMode:gap-[40px] gap-[70px] h-[650px] overflow-hidden w-full p-16'}>
        {
          services.map((element, index) => (
            <ServiceCard key={element.title} index={index} {...element} />
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
