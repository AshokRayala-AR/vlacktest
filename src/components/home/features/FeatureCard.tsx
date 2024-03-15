import {Data} from './FeaturesData.tsx';

export default function FeatureCard (){
    return (
    <div className='md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-3 lg:gap-4 mt-14 w-5/6'>
    {Data.map(item =>{
    return (
    <div  className=' text-left p-6 bg-white shadow-md mb-4'>
        <div className='flex justify-center mb-4 md:justify-start '> <item.id  /> </div>
        <h1 className=' flex justify-center text-xl font-semibold mb-4 md:justify-start '>{item.title}</h1>
        <p className='text-justify mb-4'>{item.content}</p>
        </div>
    ) }
)}
</div>)
}

