import chethanaImage from '../assets/chethanaImage.jpg'
import scrollDown from '../assets/scrollDown.png'

export function HeroSection() {
    return (
        <section className='grid md:grid-cols-5 gap-0 h-screen'>
            <div className='md:col-span-2 bg-secondary-700 md:bg-secondary-800 flex'>
                <img className='w-1/3 h-fit rounded-full m-auto md:mr-20' src={chethanaImage} />
            </div>
            <div className='md:col-span-3 bg-secondary-700 md:pl-20 flex max-md:justify-center '>
                <div className='grid md:grid-cols-3 grid-cols-1 my-auto max-md:text-center relative'>
                    <div className='leading-2 md:col-span-2'>
                        <h3 className='text-secondary-200 block lowercase font-light md:text-5xl text-xl tracking-widest'>Chethana Kalpa</h3>
                        <h3 className='text-primary block uppercase font-bold md:text-7xl text-4xl'>Keembiyahetti</h3>

                        <span className='text-2xl text-secondary-100 font-thin mt-10 block'>Software Engineer</span>
                    </div>
                    <div className='flex items-end justify-end max-md:justify-center max-md:mt-5'>
                        <div className='md:mr-5'>
                            <a href='' target={'_blank'} className='h-10 w-10 bg-secondary-600 hover:bg-secondary-700 border-2 border-secondary-600 w-fit inline-flex px-3 mx-2 group'><i className="fa fa-facebook text-secondary-100 group-hover:text-primary m-auto"></i></a>
                            <a href='' target={'_blank'} className='h-10 w-10 bg-secondary-600 hover:bg-secondary-700 border-2 border-secondary-600 w-fit inline-flex px-3 mx-2 group'><i className="fa fa-twitter text-secondary-200 group-hover:text-primary m-auto"></i></a>
                            <a href='' target={'_blank'} className='h-10 w-10 bg-secondary-600 hover:bg-secondary-700 border-2 border-secondary-600 w-fit inline-flex px-3 mx-2 group'><i className="fa fa-instagram text-secondary-200 group-hover:text-primary m-auto"></i></a>
                            <a href='' target={'_blank'} className='h-10 w-10 bg-secondary-600 hover:bg-secondary-700 border-2 border-secondary-600 w-fit inline-flex px-3 mx-2 group'><i className="fa fa-github text-secondary-200 group-hover:text-primary m-auto"></i></a>
                        </div>
                    </div>
                    <div className='absolute -bottom-48 col-span-3 w-full'>
                        <div className='grid grid-cols-4 border-t-2 border-solid border-secondary-100 pt-10'>
                            <div>
                                <span className='block text-secondary-100 text-md font-semibold'>Location</span>
                                <span className='block text-secondary-100 text-md mt-3'>Galle, Sri Lanka</span>
                            </div>
                            <div>
                                <span className='block text-secondary-100 text-md font-semibold'>Phone</span>
                                <span className='block text-secondary-100 text-md mt-3'>+(94) 77 3111 328</span>
                            </div>                               <div>
                                <span className='block text-secondary-100 text-md font-semibold'>Website</span>
                                <span className='block text-secondary-100 text-md mt-3'>chethana.me</span>
                            </div>                               <div>
                                <span className='block text-secondary-100 text-md font-semibold'>Email</span>
                                <span className='block text-secondary-100 text-md mt-3'>x@chethana.me</span>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className='absolute w-1/6 opacity-75 bottom-5 left-1/2 transform -translate-x-1/2 '>
                <img className='animate-pulse w-1/3 fa fa-arrow-down' src={scrollDown} />
            </div>
        </section>
    );
} 