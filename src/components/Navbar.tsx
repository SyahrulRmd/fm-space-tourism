import Logo from '../assets/shared/logo.svg'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const { pathname } = useLocation()

  return (
    <nav className="flex items-center justify-between pt-10">
      <div className='ml-8'>
        <img src={Logo} alt="" />
      </div>
      <div className='h-[1px] sm:hidden bg-sub-gray flex-grow translate-x-10 z-10' />
      <div className='bg-opacity-[4%] backdrop-blur-md bg-white'>
        <div className='flex gap-12 mx-24 sm:mx-10 sm:gap-8'>
          <Link
            to={'/'}
            className={`sm:text-sm py-6 px-2 text-white transition-all border-b-2 border-transparent hover:border-white/50 ${pathname === '/' ? 'border-white' : ''}`}
          >
            <strong>00</strong> HOME
          </Link>
          <Link
            to={'/destination'}
            className={`py-6 px-2 text-white transition-all border-b-2 border-transparent hover:border-white/50 ${pathname === '/destination' ? 'border-white' : ''}`}
          >
            <strong>01</strong> DESTINATION
          </Link>
          <Link
            to={'/crew'}
            className={`sm:text-sm py-6 px-2 text-white transition-all border-b-2 border-transparent hover:border-white/50 ${pathname === '/crew' ? 'border-white' : ''}`}
          >
            <strong>02</strong> CREW
          </Link>
          <Link
            to={'/technology'}
            className={`sm:text-sm py-6 px-2 text-white transition-all border-b-2 border-transparent hover:border-white/50 ${pathname === '/technology' ? 'border-white' : ''}`}
          >
            <strong>03</strong> TECHNOLOGY
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
