import Logo from '../assets/shared/logo.svg'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <div>
        <img src={Logo} alt="" />
      </div>
      <div></div>
      <div className='bg-opacity-[4%] backdrop-blur-md bg-white'>
        <div className='flex mx-6 gap-2'>
          <Link to={'/'} className='p-6 text-white'><strong>00</strong> HOME</Link>
        </div>
      </div>
    </nav>
  );
}
 
export default Navbar;
