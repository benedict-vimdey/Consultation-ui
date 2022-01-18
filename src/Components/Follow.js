import first from '../Images/patient.jpg'
import second from '../Images/patient1.jpg'
import third from '../Images/patient2.jpeg'


const  details = [ 
    {
        image:first,
        date:'29 July, 2020',
        title: 'We believe in great idea and deeds',
        text: 'Lorem Ipsum is simply a dummy text of the printing and typesetting industry. Lorem scrambled it to make a type.',
        readmore: 'READ MORE',
    },
    {
        image:third,
        date:'29 July, 2020',
        title: 'We believe in great idea and deeds',
        text: 'Lorem Ipsum is simply a dummy text of the printing and typesetting industry. Lorem scrambled it to make a type.',
        readmore: 'READ MORE',
    },
    {
        image:second,
        date:'29 July, 2020',
        title: 'We believe in great idea and deeds',
        text: 'Lorem Ipsum is simply a dummy text of the printing and typesetting industry. Lorem scrambled it to make a type.',
        readmore: 'READ MORE',
    }
]


const ElementDetails = ({image, date, title, text, readmore}) =>{
    return(
        <div>
            <div className=' rounded-xl bg-gray-100' style={{borderRadius:'15px'}}>
                <div>
                    <img src={image} className='object-cover w-96' style={{borderRadius:'15px'}}/>

                </div>

                <div className=' px-7 py-5'>
                    <p className=' mt-5 text-blue-800'>
                        {date}
                    </p>

                    <p className=' mt-8 font-bold text-2xl leading-normal'>
                        {title}
                    </p>

                    <p className='mt-8 text-gray-400'>
                        {text}
                    </p>

                    <p className=' mt-8 text-blue-800 cursor-pointer'>
                        {readmore}
                    </p>
                </div>
            </div>
        </div>
    )
}





function Follow() {
    return (
        <div className=" bg-gray-300 px-16 pt-32 pb-24">
            <div>
                <div className=' text-4xl mb-20 font-bold text-gray-800'>
                    Follow the latest articles and news
                </div>

                <div className=' flex space-x-10'  >
                    {details.map((item)=>(
                        <ElementDetails
                        image = {item.image}
                        date ={item.date}
                        title={item.title}
                        text ={item.text}
                        readmore={item.readmore}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Follow
