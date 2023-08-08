import React from 'react'

export default function Loan (): JSX.Element {
      return (
            <>
                  <h2 className='font-bold text-3xl text-title'>
                        הלוואה לכל מטרה ומרכוז חובות
                  </h2>

                  <div className='w-48 h-[2px] bg-[#adb5bd] my-6' />

                  <p>
                        מיועד לבעלי נכס בלבד. משכנתא לכל מטרה מהווה פתרון מעולה לצורכי מירכוז הלוואות, אם יש לכם כמה הלוואות לא כלכליות,
                        אנו נאחד את כולם למשכנתא אחת ובכך נוזיל את העלות הכוללת של ההלוואה ונקל עליכם בהחזר החודשי.
                  </p>

                  <h4 className='md:text-lg font-bold text-title mt-12 mb-6'>
                        מעוניינים בפגישה? חברתנו מגיעה עד בית הלקוח
                  </h4>

                  <button className='bg-title text-white py-2 px-4 rounded-md underline-offset-4 transition-all duration-300 hover:underline hover:scale-105 hover:shadow-lg'>לייעוץ ראשוני ללא עלות חייגו:
                        0525664468
                  </button>
            </>
      )
}
