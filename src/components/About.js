import React from 'react';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';
import { fadeIn } from '../variant';

const About = () => {
  const [ref,inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id='about' className='section' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          <motion.div 
            variants={fadeIn('right',0.3)} 
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
          >
          </motion.div>
          <motion.div 
            variants={fadeIn('left',0.3)} 
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1'
          >
            {/* presentation */}
            <h2 className='h2 text-accent'>About me</h2>
            <h3 className='mb-4 h3'>
              I'm a freelance front-end developer with other 3 yearrs of experiences.
            </h3>
            <p className='mb-6'>
            Learn all about how to implement font using the API CSS code. A web font is any font used in a website’s design that isn’t installed by default on the 
            end user’s device—a counterpart to a system font.
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-secondary text-gradient mb-2'>
                  {inView ? 
                  <CountUp start={0} end={3} duration={3}/>
                  : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br/> experiences
                </div>
              </div>

              <div>
                <div className='text-[40px] font-secondary text-gradient mb-2'>
                  {inView ? 
                  <CountUp start={0} end={4} duration={3}/>
                  : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br/> completed
                </div>
              </div>

              <div>
                <div className='text-[40px] font-secondary text-gradient mb-2'>
                  {inView ? 
                  <CountUp start={0} end={3} duration={3}/>
                  : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Collaborators <br/>
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Contact Me</button>
              <a href='#' className='text-gradient btn-link'>My Github</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About