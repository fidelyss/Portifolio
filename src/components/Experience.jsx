import React, { useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { experiences } from '../constants'
import { SectionWrapper } from '../Hoc/index'
import { textVariant } from '../utils/motion'
const ExperienceCard = ({ experience }) => {
  const [info, setInfo] = useState(false)
  const marcador = (<div className={'rounded-full w-[10px] h-[10px] bg-[#fff]'}></div>)
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #fff' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div>
          <img src={experience.icon} className={'rounded-full flex justify-center items-center w-full h-full'} />
        </div>
      }
      iconOnClick={
        () => {
          if (info == false) { setInfo(true) }
          else {
            setInfo(false)
          }
        }
      }
    >
      <div>
        <h3 className={'text-white text-[24px] mb-[20px] font-bold'}>
          {experience.title}
        </h3>
      </div>
      <div className={info ? '' : 'hidden'}>
        {
          experience.points.map(points => {
            return (
              <>
                <div className={'flex items-start gap-3 mb-[20px]'}>
                  <div className='pt-[7px]'>{marcador}</div>
                  <div>{points}</div>
                </div>
              </>
            )
          })}
      </div>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className='flex justify-center '>
        <h2 className={styles.sectionHeadText}>
          Carreira Curricular
        </h2>
      </motion.div>
      <div className={"mt-20 flex flex-col"}>
        <VerticalTimeline>
          {
            experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))
          }
        </VerticalTimeline>
      </div>
    </>
  )

}

export default Experience