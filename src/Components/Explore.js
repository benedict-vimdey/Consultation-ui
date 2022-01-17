import doc from '../Images/doc.jpeg'
import clinic from '../Images/clinic.png'
import lab from '../Images/lab.png'
import ambulance from '../Images/amulance.png'
import insurance from '../Images/insurance.png'
import arrow from '../Images/arrowblue.png'
import Mission from './Mission'




const details = [
    {
        icon: doc,
        title: 'Doctors',
        text: 'Lorem Ipsum is simply the dummy text of the'
    },
    {
        icon: clinic,
        title: 'Clinics',
        text: 'Lorem Ipsum is simply the dummy text of the'
    },
    {
        icon: lab,
        title: 'Labs',
        text: 'Lorem Ipsum is simply the dummy text of the'
    },
    {
        icon: ambulance,
        title: 'Emergency',
        text: 'Lorem Ipsum is simply the dummy text of the'
    },
    {
        icon: insurance,
        title: 'Insurance',
        text: 'Lorem Ipsum is simply the dummy text of the'
    }
];



const ExploreDetails = ({icon, title, text}) => {
    return(
        <div className="w-full">
            <div className=' max-w-xs space-x-5 space-y-5 w-60 m-1 flex-wrap rounded-xl bg-gray-100
             mb-5 py-3 hover:bg-blue-700 hover:drop-shadow-2xl'>
                <div className=' mt-2'>
                    <img src={icon} className=' w-12 rounded-full mx-auto'/>
                </div>
                <div>
                    <p className=' pt-3 font-bold text-xl text-center'>
                        {title}
                    </p>
                    <p className=' mt-4 text-sm text-center'>
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}





function Explore() {
    return (
        <div className=" bg-gray-300">
            <div>
                <div className='flex max-w-7xl px-20 pt-10 justify-between'>
                    <div className=' font-bold text-4xl text-gray-800 mb-10 leading-normal'>
                        Explore by <br/> category
                    </div>

                    <div className=' '>
                     
                        <img src={arrow} className='w-20' />
                    </div>
                </div>


                <div className=' max-w-7xl px-16 '>
                    <div className=' flex flex-row'>
                        {details.map((item)=>(
                            <ExploreDetails
                            icon ={item.icon}
                            title={item.title}
                            text ={item.text}
                            />
                        ))}
                    </div>
                </div>

                <Mission/>
            </div>
        </div>
    )
}

export default Explore
