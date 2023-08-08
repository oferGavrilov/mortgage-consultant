import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { AiOutlineMenu } from 'react-icons/Ai'

export default function Header () {
      return (
            <header className='flex justify-between items-center font-open-sans-hebrew bg-stone-100 px-6 fixed top-0 z-10 w-full h-[66px] shadow-xl shadow-stone-100'>
                  <Link href='/'>
                        <Image
                              src='/imgs/logo.jpeg'
                              alt='logo'
                              width={230}
                              height={200}
                        />
                  </Link>

                  <div className='hidden md:flex gap-x-3'>
                        <div className='header-link'>
                              <span>ייעוץ משכנתא חדשה</span>
                        </div>
                        <div className='header-link'>
                              <span>מחזור משכנתא קיימת</span>
                        </div>
                        <div className='header-link'>
                              <span>הלוואה לכל מטרה</span>
                        </div>
                  </div>

                  <div className='hidden lg:flex gap-x-4'>
                        <div className='header-link'>
                              <span>לקוחות ממליצים</span>
                        </div>
                        <Link href='contact-us' className='header-link'>
                              <span>צור קשר</span>
                        </Link>
                  </div>


                  <div className='hidden xl:flex gap-x-8'>
                        <span>Mail</span>
                        <span>Phone</span>
                        <span>Whatsapp</span>
                  </div>

                  <div className='header-link md:hidden cursor-pointer'>
                        <AiOutlineMenu size={18}/>
                  </div>


            </header>
      )
}
