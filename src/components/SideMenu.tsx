import SocialMedia from '@/common/SocialMedia'
import useClickOutside from '@/hooks/useClickOutside';
import React, { useEffect, useRef } from 'react'

interface Props {
      isOpen: boolean
      setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SideMenu ({ isOpen, setIsOpen }: Props) {
      const sideMenuRef = useRef<HTMLElement | null>(null);

      useClickOutside(sideMenuRef, () => setIsOpen(false), isOpen);


      return (
            <section ref={sideMenuRef} className={`side-menu-container ${isOpen ? 'translate-x-0' : '-translate-x-[300px]'}`}>
                  <h2 className='text-center text-2xl py-10'>Main Menu</h2>

                  <h4 className='px-4 text-lg mb-2 text-[#0582ca]'>שירותים</h4>
                  <ul>
                        <li className='side-menu-li'>ייעוץ משכנתא חדשה</li>
                        <li className='side-menu-li'>מחזור משכנתא קיימת</li>
                        <li className='side-menu-li'>הלוואה לכל מטרה</li>
                  </ul>

                  <div className='my-16'>
                        <h4 className='px-4 text-lg mb-2 text-[#0582ca]'>נוספים</h4>
                        <ul>
                              <li className='side-menu-li'>לקוחות ממליצים</li>
                              <li className='side-menu-li'>צור קשר</li>
                        </ul>
                  </div>
                  <div className='flex flex-col items-center text-center'>
                        <SocialMedia />
                  </div>
            </section>
      )
}
