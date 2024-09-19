import React from 'react';
import Image from '../assets/avatar.svg';
import { FaGithub,FaDribbble,FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variant';

const Banner = () => {
  return (
    <section id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 variants={fadeIn('up',0.3)} initial="hidden" whileInView={'show'} viewport={{once: false,amount: 0.7}} className='text-[40px] font-bold leading-[0.8] lg:text-[30px]'>
              HARI <span>SANDA</span>
            </motion.h1>
            <motion.div variants={fadeIn('up',0.3)} initial="hidden" whileInView={'show'} viewport={{once: false,amount: 0.7}} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation sequence={[
                'Developer',
                2000,
                'Software Ingeneer',
                2000,
                'Data Scientist',
                2000
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
              />
            </motion.div>
            <motion.p variants={fadeIn('up',0.3)} initial="hidden" whileInView={'show'} viewport={{once: false,amount: 0.7}} className='mb-8 max-w-lg mx-auto lg:mx-0'>
            Learn all about how to implement font using the API CSS code. A web font is any font used in a website’s design that isn’t installed by default on the 
            end user’s device—a counterpart to a system font.
            </motion.p>
            <motion.div variants={fadeIn('up',0.3)} initial="hidden" whileInView={'show'} viewport={{once: false,amount: 0.7}} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Download my CV</button>
            </motion.div>
            <motion.div variants={fadeIn('up',0.3)} initial="hidden" whileInView={'show'} viewport={{once: false,amount: 0.7}} className='flex text-[20px] gap-x-6 max-w-max mx-auto'>
              <a href='#'>
                <FaGithub/>
              </a>
              <a href='#'>
                <FaLinkedin/>
              </a>
              <a href='#'>
                <FaDribbble/>
              </a>
            </motion.div>
          </div>
          <motion.div variants={fadeIn('down',0.5)} initial="hidden" whileInView={'show'} viewport={{once: false,amount: 0.7}} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={Image} alt='profil'/>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Banner