import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variant';

const services = [
  {
    name: 'UX/UI design',
    description: ' Learn all about how to implement font using the API CSS code. A web font is any font used in a website’s design that isn’t installed by default on the end user’s device—a counterpart to a system font.',
    link: 'Learn more',
  },
  {
    name: 'Development',
    description: ' Learn all about how to implement font using the API CSS code. A web font is any font used in a website’s design that isn’t installed by default on the end user’s device—a counterpart to a system font.',
    link: 'Learn more',
  },
  {
    name: 'Data engeneering',
    description: ' Learn all about how to implement font using the API CSS code. A web font is any font used in a website’s design that isn’t installed by default on the end user’s device—a counterpart to a system font.',
    link: 'Learn more',
  },
  {
    name: 'Cybersecurity',
    description: ' Learn all about how to implement font using the API CSS code. A web font is any font used in a website’s design that isn’t installed by default on the end user’s device—a counterpart to a system font.',
    link: 'Learn more',
  },
]

const Services = () => {
  return (
    <section id='services' className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div 
           variants={fadeIn('right',0.5)} 
           initial="hidden"
           whileInView={'show'}
           viewport={{once: false, amount: 0.3}}
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>What I Do</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              I'm a freelance front-end developer with other 3 yearrs of experiences.
            </h3>
            <button className='btn btn-sm'>See my work</button>
          </motion.div>
          {/* service */}
          <motion.div
           variants={fadeIn('left',0.5)} 
           initial="hidden"
           whileInView={'show'}
           viewport={{once: false, amount: 0.3}}
          >
            {/* services liste */}
            <div >
              {services.map((service,index) => {
                const {name,description,link} = service;
                return(
                  <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight'>
                        {description}
                      </p>
                    </div>
                    {/* links */}
                    <div className='flex flex-col flex-1 items-end'>
                      <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight/>
                      </a>
                      <a href='#' className='text-sm text-gradient'>{link}</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services