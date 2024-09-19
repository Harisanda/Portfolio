import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variant';
import Image1 from '../assets/portfolio-img1.png';
import Image2 from '../assets/portfolio-img2.png';
import Image3 from '../assets/portfolio-img3.png';



const Projects = () => {
  return (
    <section id='projects' className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div 
            variants={fadeIn('right',0.2)} 
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'
          >
            <div>
              <h2 className='h2 leading-tight text-accent'>My latest <br/> projects.</h2>
              <p className='max-w-sm mb-16'>
                Learn all about how to implement font using the API CSS code. A web font is any font used in a website’s design that isn’t installed by default on the end user’s device—a counterpart to a system font.
              </p>
              <button className='btn btn-sm'>View all Projects</button>
            </div>
            {/* projects image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img 
                className='group-hover:scale-125 transition-all duration-500'
                src={Image1} 
                alt='image 1'
              />
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all 
              duration-500 z-50'>
                <span className='text-gradient'>UI/UX design</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all 
              duration-700 z-50'>
                <span className='text-3xl text-white'>Projects title</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            variants={fadeIn('left',0.2)} 
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 flex flex-col gap-y-10'
          >
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img 
                  className='group-hover:scale-125 transition-all duration-500'
                  src={Image2} 
                  alt='image 1'
                />
                {/* title */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all 
                duration-500 z-50'>
                  <span className='text-gradient'>UI/UX design</span>
                </div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all 
                duration-700 z-50'>
                  <span className='text-3xl text-white'>Projects title</span>
                </div>
              </div>

              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:my-16'>
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img 
                  className='group-hover:scale-125 transition-all duration-500'
                  src={Image3} 
                  alt='image 1'
                />
                {/* title */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all 
                duration-500 z-50'>
                  <span className='text-gradient'>UI/UX design</span>
                </div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all 
                duration-700 z-50'>
                  <span className='text-3xl text-white'>Projects title</span>
                </div>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Projects