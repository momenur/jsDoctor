import './Banner.css'
import doctorLeft from '../../assets/images/b-l.jpg'
import doctorMidle from '../../assets/images/b-m.jpg'
import doctorRight from '../../assets/images/b-r.jpg'
const Banner = () => {
    return (
        <div className="min-h-screen mx-auto backgroundImage">
            <div className='flex items-center justify-center gap-8 px-16 pt-36'>
                <div className='w-1/2 text-gray-200'>
                    <h1 className='mb-6 font-bold text-white text-7xl'>JS Doctor</h1>
                    <h3 className='mb-4 text-3xl font-semibold'>Your Best Medical Help Center</h3>
                    <p className='text-lg leading-snug line-clamp-3 line'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <button className='px-4 py-2 mt-6 text-xl font-medium text-white rounded-md bg-rose-400'>All Service</button>
                </div>
                <div className='w-[550px]'>
                    <div className='relative w-full'>
                        <img className='w-[250px] h-[250px] border-white border-4' src={doctorLeft} alt="" />
                        <img className='w-[250px] h-[250px] absolute top-1/2 left-1/4 border-white border-4' src={doctorMidle} alt="" />
                        <img className='w-[250px] h-[250px] absolute right-0 top-0 border-white border-4' src={doctorRight} alt="" />
                    </div>
                </div>
            </div>
            <footer className="absolute bottom-0 max-w-screen-xl p-4 text-white footer footer-center">
                <aside>
                    <p className='text-lg'>Copyright © 2023 - Momenur Islam <span className='text-rose-500'>||</span> momenurislam6@gmail.com</p>
                </aside>
            </footer>
        </div>
    );
};

export default Banner;