import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Services () {
  return (
    <section className='m-12 '>
      <div className='flex flex-col md:flex-row gap-y-16 justify-center items-center md:gap-x-8'>

        <div className='service-container'>
          <h2 className='service-title'>ייעוץ משכנתא חדשה</h2>
          <p className='service-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iusto.</p>
          <Link href='/service/new-mortgage' className='service-link'>
            למידע נוסף
          </Link>

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
          <Link href='/service/exists-mortgage' className='service-link'>
            למידע נוסף
          </Link>
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
          <Link href='/service/loan' className='service-link'>
            למידע נוסף
          </Link>
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
