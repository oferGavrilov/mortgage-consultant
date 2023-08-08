import React from 'react'

import { BsWhatsapp } from 'react-icons/bs'
import { SiFacebook } from 'react-icons/si'
import { BiLogoGmail } from 'react-icons/bi'
import { RiArrowLeftSFill } from 'react-icons/ri'
import SocialMedia from '@/common/SocialMedia'

export default function Footer () {
  return (
    <footer className='bg-[#212529] relative'>
      <div className='flex justify-between pt-20 text-white p-8 flex-col gap-y-8 md:flex-row'>

        <div>
          <div className='flex items-center'>
            <h4 className='footer-title'>שירותים</h4>
            <div className='h-[1px] bg-white w-full md:w-32 lg:w-44 mr-4'></div>
          </div>

          <ul>
            <li className='footer-li'>
              <RiArrowLeftSFill size={25} />
              ייעוץ משכנתא חדשה
            </li>
            <li className='footer-li'>
              <RiArrowLeftSFill size={25} />
              מחזור משכנתא קיימת
            </li>
            <li className='footer-li'>
              <RiArrowLeftSFill size={25} />
              הלוואה לכל מטרה
            </li>
          </ul>
        </div>

        <div>
          <div className='flex items-center'>
            <h4 className='footer-title'>צרו איתנו קשר</h4>
            <div className='h-[1px] bg-white w-full md:w-32 lg:w-44 mr-4'></div>
          </div>
          <ul>
            <li className='footer-li'>
              <RiArrowLeftSFill size={25} />
              טלפון: 0525664468
            </li>
            <li className='footer-li'>
              <RiArrowLeftSFill size={25} />
              כתובת: רחוב יפו 9, ראשון לציון
            </li>
            <li className='footer-li'>
              <RiArrowLeftSFill size={25} />
              מייל: ofergavri@gmail.com
            </li>
          </ul>
        </div>

        <SocialMedia />
      </div>

{/* Rights */}
      <div className='text-gray-400 text-center text-sm py-2'>
        <p>דניאל קטנוב יועץ משכנתאות פרטי @  All rights reserved</p>
      </div>
        
    </footer>
  )
}
