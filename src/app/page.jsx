'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Homepage = () => {
  return (
    <motion.div
      className="h-full overflow-x-hidden"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="min-h-screen flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-8 gap-10">
        {/* IMAGE CONTAINER */}
        <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-auto relative rounded-md overflow-hidden">
          <Image
            src="/hero2.jpg"
            alt="Hero Banner"
            fill
            className="object-cover rounded-md"
            priority
          />
        </div>

        {/* TEXT CONTAINER */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 justify-center items-start text-center sm:text-left">
          {/* TITLE */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight dark:text-white">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>

          {/* DESCRIPTION */}
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-white">
            Welcome to my digital canvas, where innovation and creativity converge.
            With a keen eye for aesthetics and a mastery of code, my portfolio showcases
            a diverse collection of projects that reflect my commitment to excellence.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/portfolio">
              <button className="w-full sm:w-auto px-4 py-2 text-sm sm:text-base bg-black text-white rounded-lg hover:bg-gray-800 transition">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="w-full sm:w-auto px-4 py-2 text-sm sm:text-base ring-1 ring-black rounded-lg hover:bg-black hover:text-white transition">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
