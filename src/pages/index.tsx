import Layout from '@/layout/Layout'
import Hero from '@/components/Hero'
import UnderHero from '@/components/UnderHero'
import Services from '@/components/Services'
import ContactUs from '@/components/ContactUs'

export default function Home () {
  return (
    <main className='mt-[66px]'>
      <Hero />
      <UnderHero />
      <Services />
      <ContactUs />
    </main>
  )
}
