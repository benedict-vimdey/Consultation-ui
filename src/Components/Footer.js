import React from 'react'

const tabs = [
    "About Us",
    "Our Mission",
    "How it work?",
    "Our team"
];




function Footer() {
    return (
        <div className=' px-16 mt-20'>
            <div className='flex'>
                <div>
                    <p className=' text-xl font-bold mb-3'>
                       About Us 
                    </p>

                    <p className=' text-gray-400'>
                        Official Public Service Announcement on <br/> Prevention, Travel Advisory and Common <br/> About Coronavirus
                    </p>
                </div>

                <div className=' ml-32'>
                    <p className='text-xl font-bold mb-3'>
                        Useful Links
                    </p>

                    {tabs.map((item, id) =>{
                        return <a key={id} className='flex flex-col mb-1 text-gray-400'>{item}</a>
                    })}
                </div>

                <div className=' ml-32'>
                    <p className='text-xl font-bold mb-3'>
                        More
                    </p>

                    {tabs.map((item,id)=>{
                        return <a key={id} className='flex flex-col mb-1 text-gray-400'>{item}</a>
                    })}
                </div>

                <div className=' ml-32'>
                    <p className='text-xl font-bold mb-3'>
                        Newsletter
                    </p>

                    <input type='email' placeholder='Enter your email' className='px-1 py-2 bg-gray-100 border border-gray-300' /> 
                </div>
            </div>
        </div>
    )
}

export default Footer
