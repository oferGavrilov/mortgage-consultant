import SocialMedia from '@/common/SocialMedia'
import useClickOutside from '@/hooks/useClickOutside';
import Link from 'next/link';
import React, { useRef } from 'react'

interface Props {
      isOpen: boolean
      setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SideMenu ({ isOpen, setIsOpen }: Props) {
      const sideMenuRef = useRef<HTMLElement | null>(null);

      useClickOutside(sideMenuRef, () => setIsOpen(false), isOpen);


      return (
            <section ref={sideMenuRef} className={`side-menu-container ${isOpen ? 'translate-x-0' : '-translate-x-[300px]'}`}>
                  <h2 className='text-center text-2xl py-8'>Main Menu</h2>

                  <h4 className='px-4 text-lg mb-2 text-[#0582ca]'>שירותים</h4>
                  <ul>
                        <Link href='/service/new-mortgage' onClick={() => setIsOpen(false)}>
                              <li className='side-menu-li'>
                                    ייעוץ משכנתא חדשה
                              </li>
                        </Link>
                        <Link href='/service/exists-mortgage' onClick={() => setIsOpen(false)}>
                              <li className='side-menu-li'>
                                    מחזור משכנתא קיימת
                              </li>
                        </Link>
                        <Link href='/service/loan' onClick={() => setIsOpen(false)}>
                              <li className='side-menu-li'>
                                    הלוואה לכל מטרה
                              </li>
                        </Link>
                  </ul>

                  <div className='my-16'>
                        <h4 className='px-4 text-lg mb-2 text-[#0582ca]'>נוספים</h4>
                        <ul>
                              <li className='side-menu-li'>לקוחות ממליצים</li>
                              <Link href='/contact-us' onClick={() => setIsOpen(false)}>
                                    <li className='side-menu-li'>צור קשר</li>
                              </Link>
                        </ul>
                  </div>
                  <div className='flex flex-col items-center text-center'>
                        <SocialMedia />
                  </div>
            </section>
      )
}
