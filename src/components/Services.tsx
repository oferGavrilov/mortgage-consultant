import Image from 'next/image'
import React from 'react'

export default function Services () {
  return (
    <section className='mx-12 my-24'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-8'>

        <div className='service-container'>
          <h2 className='service-title'>ייעוץ משכנתא חדשה</h2>
          <p className='service-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iusto.</p>
          <button className='service-btn'>למידע נוסף</button>
          <Image
            className='service-img -top-8'
            src='/imgs/lamp.png'
            alt='service'
            width={45}
            height={40}
          />
        </div>

        <div className='service-container'>
          <h2 className='service-title'>מחזור משכנתא קיימת</h2>
          <p className='service-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iusto.</p>
          <button className='service-btn'>למידע נוסף</button>
          <Image
            className='service-img -top-6'
            src='/imgs/cycle.png'
            alt='service'
            width={40}
            height={38}
          />
        </div>

        <div className='service-container'>
          <h2 className='service-title'>הלוואה לכל מטרה</h2>
          <p className='service-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iusto.</p>
          <button className='service-btn'>למידע נוסף</button>
          <Image
            className='service-img -top-7'
            src='/imgs/loan.png'
            alt='service'
            width={40}
            height={38}
          />
        </div>

      </div>
    </section>
  )
}
