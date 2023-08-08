import React from 'react'

import { BsWhatsapp } from 'react-icons/bs'
import { SiFacebook } from 'react-icons/si'
import { BiLogoGmail } from 'react-icons/bi'

export default function SocialMedia () {
      return (
            <div>
                  <h4 className='md:text-center py-4 text-lg tracking-wider text-[#0582ca]'>חפשו אותנו ברשתות</h4>
                  <div className='flex gap-x-6'>
                        <div className='footer-social-icon hover:bg-[#4267B2]'>
                              <SiFacebook size={25} color='#ffffff' />
                        </div>

                        <div className='footer-social-icon hover:bg-[#F4B400]'>
                              <BiLogoGmail size={25} color='#ffffff' />
                        </div>

                        <div className='footer-social-icon  hover:bg-whatsapp'>
                              <BsWhatsapp size={25} color='#ffffff' />
                        </div>
                  </div>
            </div>
      )
}
// 25D366