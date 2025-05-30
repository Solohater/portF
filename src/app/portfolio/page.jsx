'use client'
import React, { useRef } from 'react'
import {motion, useScroll, useTransform} from "framer-motion"
import Image from 'next/image';
import Link from 'next/link';

const items = [
  {
    id: 1,
    color: "from-green-300 to-yellow-300",
    title: "React Shop Management",
    desc: "This react app is used for managing a phone repair shop for testing the code here is an account username:testuser, and a password:!testuser.",
    img: '/DanD.PNG',
    link: "https://daveprojfront.onrender.com",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "A Rocket Selling Site",
    desc: "My first Tailwind Css Project.",
    img: "/acam rockets.PNG",
    link: "https://acme-rockets-cwqd.onrender.com/#hero",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "FastFood Next app",
    desc: "A FastFood next app.",
    img: "/resturant.PNG",
    link: "https://fastfood-amber-chi.vercel.app",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Next Website",
    desc: "My First next Website.",
    img: "/next.PNG",
    link: "https://next-tutorial-h41u.vercel.app",
  },
   {
    id: 5,
    color: "from-purple-300 to-red-300",
    title: "A Reminder app",
    desc: "My first react app.",
    img: "/Grocery list.PNG",
    link: "https://groceryreminder.netlify.app",
  },
];
const PortfolioPage = () => {

  const ref = useRef()

  const {scrollYProgress} = useScroll({target:ref})
  const x = useTransform(scrollYProgress, [0,1], ["0%", "-80%"])

  return (
    <motion.div 
        className="h-full" 
        initial={{y:"-200vh"}} 
        animate={{y:"0%"}} 
        transition={{duration:1}}
    >
      <div className='h-[600vh] relative' ref={ref}>
        <div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center'>My Works</div>
        <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
          <motion.div style={{x}} className='flex '>
            <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300'/>
            {items.map(item=>(
            <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} key={item.id}>
              <div className='flex flex-col gap-8 text-white'>
                <h1 className='text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl'>{item.title}</h1>
                <div className='relative w-80 h-56 md:h-64 md:w-96 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]'>
                  <Image src={item.img} alt='' fill/>
                </div>
                <p className='w-80 md:w-96 lg:text-lg lg:w-[500px] xl:w-[600px]'>{item.desc}</p>
                <Link href={item.link} className='flex justify-end'>
                  <button className='p-2 text-sm bg-white text-gray-600 md:p-4 md:text-md lg:p-8 lg:text-lg font-semibold m-4 rounded'>
                    See Demo
                  </button>
                </Link>
              </div>
            </div>
          ))}
          </motion.div>
        </div>
      </div>
        <div className='w-screen h-screen flex flex-col gap-8 items-center justify-center text-center'>
            <h1 className='text-8xl mt-60'>Do You Have A Project?</h1>
            <div className='relative'>
              <motion.svg animate={{rotate:360}} transition={{duration:8, ease:"linear", repeat:Infinity}} viewBox='0 0 300 300' className='w-64 h-64 md:w-[500px] md:h-[500px]'>
                <defs>
                    <path
                      id="circlePath"
                      d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                    />
                </defs>
                 <text fill="#000">
                  <textPath xlinkHref="#circlePath" className="text-xl">
                    Front-end Developer 
                  </textPath>
                </text>
              </motion.svg>
              <Link href='/contact' className='h-16 w-16 md:h-28 md:w-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center'>Hire Me</Link>
            </div>
          </div>
    </motion.div>
  )
}

export default PortfolioPage