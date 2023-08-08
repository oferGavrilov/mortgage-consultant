import ExistsMortgage from '@/components/services/ExistsMortgage';
import Loan from '@/components/services/Loan';
import NewMortgage from '@/components/services/NewMortgage';
import { useRouter } from 'next/router';
import React from 'react'



export default function Page () {
  const router = useRouter();
  return (
    <section className='min-h-screen mt-16 p-10'>
      {router.query.service === 'new-mortgage' && <NewMortgage />}
      {router.query.service === 'exists-mortgage' && <ExistsMortgage />}
      {router.query.service === 'loan' && <Loan />}
    </section>
  )
}
