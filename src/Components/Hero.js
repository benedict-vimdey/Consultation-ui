import React from 'react'
import nurse from '../Images/wnurse.jpg'

function Hero() {
    return (
        <div className='w-full'>
            <div className=' max-w-7xl mx-auto px-12 mt-16'>
                <div className='grid grid-cols-2'>
                    <div className='py-12'>
                        <p className=' text-5xl font-bold'>Find the good life by <br/> good health</p>
                        <p className=' text-gray-400 mt-8 mb-10 text-sm'> Official Public Service Announcement on Coronavirus from the <br/> World Health Organization. Learn about the Symptoms, Prevention, <br/> Travel Advisory and common about Coronavirus </p>
                        <a className='px-5 py-3 bg-blue-700 text-white inline-flex cursor-pointer' style={{borderRadius: '6px'}}>Learn More</a>
                    </div>

                    <div>
                        <img src={nurse} alt='nurse' className=' object-fill w-11/12 py-0'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
