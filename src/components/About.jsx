import React from 'react'
import { motion } from 'framer-motion'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion.js'
import { Tilt } from 'react-tilt'
import { styles } from '../styles'
import { SectionWrapper } from '../Hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className={'xs:w-[250px] w-full'}>
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
            className={'w-16 h-16 object-contain'}
          />
          <h3
            className={'text-white text-[20px] font-bold text-center'}
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
        <p className={styles.sectionSubText}>
          Introdução
        </p>
        <h1 className={styles.sectionHeadText}>Overview</h1>
      </motion.div>
      <motion.p
        variants={textVariant(0.3)}
        className={'mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Distinctio veritatis voluptatibus, corrupti itaque nisi,
        perspiciatis cupiditate fugit quisquam
        reprehenderit deserunt molestiae error magnam
        culpa ipsa? Eaque adipisci rem quas recusandae?
      </motion.p>
      <div className={'mt-20 flex flex-wrap gap-[150px] '}>
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
