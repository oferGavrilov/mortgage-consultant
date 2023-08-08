import React from 'react'

export default function ExistsMortgage (): JSX.Element {
      return (
            <>
                  <h2 className='font-bold text-3xl text-title'>מחזור משכנתא קיימת</h2>

                  <div className='w-48 h-[2px] bg-[#adb5bd] my-6' />

                  <p className='tracking-wide w-[94%] leading-8'>
                        בתהליך זה אנו מסלקים את המשכנתא הישנה ובונים תמהיל חדש המותאם לצרכים החדשים שלנו.
                        המטרה שלנו בתהליך זה היא לחסוך בריביות, במסלול הקיים וקיצור תקופת ההחזר.
                        מחזור המשכנתא עשוי להיות כרוך בתשלום עמלות גבוהות ולכן מומלץ מאוד להתייעץ עם יועץ משכנאות בטרם ביצוע המחזור.
                  </p>

                  <div className='my-4'>
                        <h4 className='md:text-lg font-bold text-title'>
                              המקרים בהם כדאי לשקול מחזור:
                        </h4>
                        <p>
                              כאשר יש קושי ללקוח לעמוד בהחזר המשכנתא כתוצאה מירידה בהכנסות ו/או עליה בהוצאות, כאשר הריביות בשוק
                              המשכנתאות או במשק יורדות.
                        </p>
                  </div>

                  <h4 className='md:text-lg font-bold text-title mt-12 mb-6'>
                        מעוניינים בפגישה? חברתנו מגיעה עד בית הלקוח
                  </h4>

                  <button className='bg-title text-white py-2 px-4 rounded-md underline-offset-4 transition-all duration-300 hover:underline hover:scale-105 hover:shadow-lg'>לייעוץ ראשוני ללא עלות חייגו:
                        0525664468
                  </button>
            </>
      )
}
