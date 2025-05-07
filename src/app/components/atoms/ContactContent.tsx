"use client"

import Link from "next/link"

const ContactContent = ({isEnglish}: {isEnglish: boolean}) => {
  return (
    <section className='h-full p-6 md:p-8 xl:p-20 flex flex-col lg:flex-row 
    items-center'>
      <div className="h-full">
        <h2 className='text-5xl md:text-[5.1em] lg:text-8xl 
        xl:text-9xl 2xl:text-[180px] mb-2 lg:mb-4 2xl:mb-8 
        lg:leading-[1.1] font-semibold select-none'>
          {isEnglish ? "Contact" : "Contacto"}
        </h2>
        <div className="flex gap-8 xl:gap-14 text-2xl md:text-3xl lg:text-4xl 
        xl:text-6xl">
          <Link href="https://github.com/Us3rOjeda" 
          className="h-8 xl:h-16 cursor-pointer group relative">
            <span className="relative z-10">GitHub</span>
            <span className="absolute left-0 -bottom-0.5 
            h-[3px] bg-current w-full"></span>
          </Link>
          <Link href="https://www.linkedin.com/in/us3r0jeda6161/" 
          className="h-8 xl:h-16 cursor-pointer group relative">
            <span className="relative z-10">LinkedIn</span>
            <span className="absolute left-0 -bottom-0.5 
            h-[3px] bg-current w-full"></span>
          </Link>
        </div>
        <p
          onClick={() => navigator.clipboard.writeText('us3rnamew0rk@gmail.com')}
          className="cursor-pointer mt-10 xl:mt-20 md:text-2xl xl:text-4xl "
          aria-label="Clik To Copy mail."
        >
          us3rnamew0rk@gmail.com
        </p>
      </div>


    </section>
  )
}

export default ContactContent