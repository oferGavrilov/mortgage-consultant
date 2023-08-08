import Image from 'next/image'
import React from 'react'

export default function Hero () {
      return (
            <section className='pt-12 md:pt-20 pb-8 px-8 flex justify-between'>
                  <div className='fade-left'>
                        <div className='flex items-center whitespace-nowrap gap-x-2 text-2xl md:text-4xl text-title'>
                              <h2 className='font-bold '>יועץ משכנתאות - </h2>
                              <span className=''>מי אני ? </span>
                        </div>

                        <div className='max-w-2xl text-lg text-gray-500 font-sans tracking-wider'>
                              <p className='leading-[2.2rem] py-4'>
                                    התחלתי את דרכי כיועץ נדלן, השקעתי בנדלן וכל העשייה הזאת יחד עם הלקוחות שלי גרמה לי להסיק מסקנה ברורה שתפקידו של יועץ המשכנתאות הינו תפקיד הכרחי בכך שהוא מלווה את הלקוח באופן אישי, מתמודד עם הבירוקרטיה מול הבנק ותמיד דואג לאינטרסים של הלקוח.
                              </p>

                              <p className='leading-[2.2rem] py-4'>
                                    אני מלווה את הלקוחות שלי בתהליך לקיחת משכנתא, מחזור משכנתא קיימת, לקיחת הלוואה לכל מטרה לאורך כל הדרך מתחילת התהליך עד סופו.
                              </p>

                              <p>
                                    המטרה שלי היא למצוא עבורכם את המשכנתא הטובה ביותר ובתנאים הנוחים ביותר ובעיקר
                                    לחסוך לכם מאות אלפי שקלים. אני עושה זאת באמצעות שיקוף מצבכם הפיננסי והצגת פתרונות יצירתיים על ידי ייעוץ פיננסי וניצול מקסימלי של אפשרויות המימון.
                              </p>
                        </div>
                  </div>
                  <div className='hidden md:block mt-auto ml-16'>
                        <Image src="/imgs/hero.png" alt='hero' width={400} height={600} />
                  </div>
            </section>
      )
}
