import React from 'react'

const NavItems = [
    "Home",
    "Services",
    "About Us",
    "Our team",
    "Contact us"
]

function Navbar() {
    return (
        <div className=' w-full bg-white'>
            <div className=' max-w-7xl mx-auto px-12'>
                <div className='flex justify-between py-5 cursor-pointer'> 
                    <div className=' text-2xl font-bold'>
                        Healthbag
                    </div>

                    <div className=' space-x-10 mx-auto py-2'>
                        {NavItems.map((items)=>{
                            return <a className='mx-auto hover:underline hover:text-red-400'>{items}</a>
                        })}
                        
                       
                    </div>

                    <div className='flex space-x-5'>
                        <p className='px-5 py-2 border-transparent bg-red-300' style={{borderRadius: "5px"}}>Book A Date</p>
                        <p className='px-5 py-2 bg-blue-700 text-white inline-flex' style={{borderRadius:'6px'}}>Login</p>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Navbar
