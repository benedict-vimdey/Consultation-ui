import nurse from '../Images/nursewri.jpg'
import mission from '../Images/mission-icon1.png'
import briefcase from '../Images/briefcase.png'
import telescope from '../Images/telescope.png'

const elements = [
    {
        icon: mission,
        title:'Our Mission',
        text: 'Lorem Ipsum is a dummy text of the printing and typesetting Industry'
    },
    {
        icon: briefcase,
        title:'Who we are',
        text: 'Lorem Ipsum is a dummy text of the printing and typesetting Industry'
    },
    {
        icon: telescope,
        title:'Our Vision',
        text: 'Lorem Ipsum is a dummy text of the printing and typesetting Industry'
    }
    
]


const ElementItems = ({icon, title, text}) => {
    return(
        <div className='w-full'>
            <div className='rounded-xl mb-10 max-w-2xl bg-gray-100 space-x-10 px-10 py-10 hover:bg-blue-700 cursor-pointer hover:drop-shadow-2xl'>
                <div className='flex'>
                    <img src={icon} className=' rounded-xl w-10'/>
                    <p className=' py-2 font-bold ml-3'>
                        {title}
                    </p>
                </div>
                <p className='px-3'>
                    {text}
                </p>
            </div>
        </div>
    )
}




function Mission() {
    return (
        <div className=' max-w-7xl px-16 pt-32 pb-16'>
            <div className='flex'>
                <div>
                    <img src={nurse} className=' items-center' style={{borderRadius:'15px 50px 30px'}} />
                </div>

                <div className=' ml-48'>
                    {elements.map((item)=>(
                        <ElementItems
                        icon = {item.icon}
                        title = {item.title}
                        text = {item.text} 
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Mission
