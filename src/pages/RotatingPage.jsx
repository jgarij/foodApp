import React from 'react'
import MovingBall from '../components/MovingBall'
export default function RotatingPage() {
  return (
    <div>
       <section className='flex px-12 justify-between items-center mt-24'>
                <div className='w-1/2'>
                    <h3 className='text-4xl font-bold mb-3'>GET MAURAMONEY AS CASHBACK</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error repellendus fugit cumque facere odit labore, voluptas sint eaque magnam nemo explicabo atque perspiciatis.</p>

                </div>
                <div className='w-1/2'>
                    <MovingBall></MovingBall>
                </div>
            </section> 
    </div>
  )
}
