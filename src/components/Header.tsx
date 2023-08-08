'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SideMenu from './SideMenu'
import { AiOutlineMenu, AiTwotonePhone } from 'react-icons/ai';

import { BiLogoGmail } from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'

export default function Header () {

      const [isMenuOpen, setIsMenuOpen] = React.useState(false)
      return (
            <header className='flex justify-between items-center font-open-sans-hebrew bg-stone-100 px-6 fixed top-0 z-20 w-full h-[66px] shadow-xl shadow-stone-100'>
                  <Link href='/'>
                        <Image
                              src='/imgs/logo.jpeg'
                              alt='logo'
                              width={220}
                              height={200}
                        />
                  </Link>

                  <div className='hidden md:flex gap-x-3'>
                        <Link href='/service/new-mortgage'>
                              <div className='header-link'>
                                    ייעוץ משכנתא חדשה
                              </div>
                        </Link>
                        <Link href='/service/exists-mortgage'>
                              <div className='header-link'>
                                    מחזור משכנתא קיימת
                              </div>
                        </Link>
                        <Link href='/service/loan'>
                              <div className='header-link'>
                                    הלוואה לכל מטרה
                              </div>
                        </Link>
                  </div>

                  <div className='hidden lg:flex gap-x-4'>
                        <div className='header-link'>
                              <span>לקוחות ממליצים</span>
                        </div>
                        <Link href='/contact-us' className='header-link'>
                              <span>צור קשר</span>
                        </Link>
                  </div>


                  <div className='hidden xl:flex gap-x-6'>

                        {/* <div className='footer-social-icon h-8 w-8 hover:bg-[#F4B400]'> */}
                        <BiLogoGmail size={30} color='#F4B400' className="header-social-icon" />
                        {/* </div> */}
                        <AiTwotonePhone size={30} color='#0582ca' className="header-social-icon" />
                        <BsWhatsapp size={30} color="#25D366" className="header-social-icon" />
                  </div>

                  <div className='header-link md:hidden cursor-pointer' onClick={() => setIsMenuOpen(true)}>
                        <AiOutlineMenu size={18} />
                  </div>

                  <SideMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
            </header>
      )
}
