import { useTranslation } from 'react-i18next';
import {Data} from './FeaturesData.tsx';
import { motion } from 'framer-motion';
import { cardVariants } from '../../../utils/scrolls/Scroll.tsx';
export default function FeatureCard() {
    const { t } = useTranslation();
    return (
    <motion.div className='md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-3 lg:gap-4 mt-14 w-5/6' 
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.1 }}>
    {Data.map(itemFe =>{
    return (
    <motion.div  className=' text-left p-6 bg-white shadow-md mb-4' variants={cardVariants}>
        <div className='flex justify-center mb-4 md:justify-start '> <itemFe.svg  /> </div>
        <h1 className=' flex justify-center text-xl font-semibold mb-4 md:justify-start '>{ t(`${itemFe.title}`)}</h1>
        <p className='text-justify mb-4'>{t(`${itemFe.content}`)}</p>
        </motion.div>
    ) }
)}
</motion.div>)
}

