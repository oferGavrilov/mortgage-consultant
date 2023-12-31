import { useRouter } from 'next/router'
import React from 'react'
import { HiOutlineArrowCircleDown } from 'react-icons/hi'

export default function ContactUs () {
  const router = useRouter().pathname
  const isHomePage = router === '/'

  return (
    <section className={`${isHomePage && 'bg-[#ced0ce]'} relative`}>
      {!isHomePage && (
        <div>
          <h2 className='font-bold text-2xl text-title'>צרו איתנו קשר</h2>

          <div className='w-48 h-[2px] bg-[#adb5bd] my-6' />
        </div>
      )}


      <div className='p-6 w-full text-center'>
        <h2 className='font-semibold text-xl'>השאירו פרטים ליצירת קשר</h2>
        <HiOutlineArrowCircleDown size={45} color="#0f9def" className="my-8 mx-auto transition-all duration-200 hover:scale-110 hover:drop-shadow-md" />

        <form className=''>
          <div className='grid md:grid-cols-2 gap-4'>
            <input
              type="text"
              required
              placeholder="*שם מלא:"
              className='contact-input'
            />
            <input
              type="tel"
              required
              placeholder="*טלפון:"
              className='contact-input'
            />
            <input
              type="email"
              placeholder="דואל:"
              className='contact-input'
            />
            <input
              type="text"
              placeholder="מהות הפניה:"
              className='contact-input'
            />
          </div>
          <textarea
            name=""
            id=""
            // cols={10}
            rows={1}
            className='px-4 w-full min-h-[100px] max-h-[140px] py-2 my-4 rounded-lg border-b-2 bg-[#ffffff62] outline-none focus:border-[#0582ca] focus:bg-stone-200 transition-all duration-200'
          />

          <button className='bg-[#6c757d] my-2 rounded-lg text-white font-semibold px-4 py-3 shadow-lg transition-all duration-300 hover:scale-105'>שלח טופס</button>
        </form>
      </div>
      {isHomePage && (
        <>
          <div className='triangle-top -top-[20px]'></div>
          <div className='triangle-bottom -bottom-[60px]'></div>
        </>
      )}
    </section>
  )
}
