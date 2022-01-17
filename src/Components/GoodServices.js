import React from 'react'
import doc from '../Images/docsgrid.png'

function GoodServices() {
    return (
        <div className=' max-w-7xl mt-20 pb-20'>
            <div className=' grid grid-cols-2'>
                <div className=' px-16 py-28'>
                    <p className=' text-3xl font-bold text-gray-700'>
                        Good service and better <br/> health by our specialists
                    </p>

                    <p className=' text-gray-400 text-sm mt-8'>
                    Lorem Ipsum is a dummy text of the printing and typesetting Industry. <br/>
                    Lorem Ipsum printer took a galley of type and scrambled it to make a type specimen book
                    </p>

                    <button className=' px-5 py-2 bg-blue-700 text-white font-extrabold mt-8' style={{borderRadius:'5px'}}>
                        Book Now
                    </button>
                </div>
                <div>
                    <img src={doc} alt="doctors grid" />
                </div>
            </div>
        </div>
    )
}

export default GoodServices
