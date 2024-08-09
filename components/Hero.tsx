import { FaLocationArrow } from 'react-icons/fa'
import MagicButtons from './ui/MagicButtons'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { posix } from 'path'

const Hero = () => {
    return (
        <div className='pb-20 pt-36'>
            <div>
                <Spotlight className='-top-40 left-10 md:-left-32 md:-top-20 h-full' fill='white' />
                <Spotlight className='top-10 left-10 md:-left-full h-[80vh] w-[50vh]' fill='purple' />
                <Spotlight className='top-28 left-80 md:-left-32 h-[80vh] w-[50vh]' fill='blue' />
            </div>

            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2]
            absolute to-0 left-0 flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
                 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>
            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg;max-w-[60vw] flex flex-col items-center justify-center'>
                    <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                        Dynamic Web Magic With Nextjs
                    </h2>
                    <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl"
                        words='Transforming Concepts into Seamless Experiences' />

                        <p className='text-center md:tracking-wider mb-4 text-sm md:text-gl lg:text-2xl'>I&apos;m Fateme Babaei , a Nextjs Developer based in Croatia</p>

                        <a href='#about'>
                            <MagicButtons title="show my works" icon={<FaLocationArrow />} position='right'/>
                        </a>
                </div>
            </div>
        </div>
    )
}

export default Hero