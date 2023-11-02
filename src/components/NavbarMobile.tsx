import MenuIcon from '../assets/shared/icon-hamburger.svg'
import CloseIcon from '../assets/shared/icon-close.svg'
import Logo from '../assets/shared/logo.svg'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from "gsap";

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const openMenu = () => {
    setIsOpen(true)

    const menuContents = menuRef.current?.children
    const yFrom = {
      y: 24,
      opacity: 0
    }

    const yTo = {
      y: 0,
      opacity: 1,
      duration: 0.5
    }

    const tlMenu = gsap.timeline()
    if (menuContents) {
      tlMenu
        .fromTo(menuRef.current, {
          x: '100%',
        }, {
          x: 0,
          duration: 0.5,
          ease: 'power.in'
        })
        .fromTo(menuContents[0].children[0], {
          x: 24,
          opacity: 0
        }, {
          x: 0,
          opacity: 1,
          duration: 0.5
        }, '-=0.3')
        .fromTo(menuContents[1].children[0], yFrom, yTo, '-=0.5')
        .fromTo(menuContents[1].children[1], yFrom, yTo, '-=0.4')
        .fromTo(menuContents[1].children[2], yFrom, yTo, '-=0.3')
        .fromTo(menuContents[1].children[3], yFrom, yTo, '-=0.2')
    }
  }

  const closeMenu = () => {
    setIsOpen(false)

    const menuContents = menuRef.current?.children
    const yFrom = {
      y: 24,
      opacity: 0
    }
    const yTo = {
      y: 0,
      opacity: 1,
      duration: 0.5
    }

    const tlMenu = gsap.timeline()
    if (menuContents) {
      tlMenu
        .to(menuContents[0].children[0], {
          x: 24,
          opacity: 0,
          duration: 0.5
        })
        .fromTo(menuContents[1].children[0], yTo, { ...yFrom, y: -24, duration: 0.3 }, '-=0.5')
        .fromTo(menuContents[1].children[1], yTo, { ...yFrom, y: -24, duration: 0.3 }, '-=0.4')
        .fromTo(menuContents[1].children[2], yTo, { ...yFrom, y: -24, duration: 0.3 }, '-=0.3')
        .fromTo(menuContents[1].children[3], yTo, { ...yFrom, y: -24, duration: 0.3 }, '-=0.2')
        .to(menuRef.current, {
          x: '100%',
          duration: 0.5,
          ease: 'power.in'
        })
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'unset'
    }
  }, [isOpen])

  return (
    <nav className='relative'>
      <div className='flex items-center justify-between p-4'>
        <img src={Logo} alt="" width={40} />
        <button className='p-1' onClick={openMenu}>
          <img src={MenuIcon} alt="" />
        </button>
      </div>
      <div ref={menuRef} className='absolute top-0 right-0 w-[68%] bg-opacity-[4%] translate-x-full z-50 backdrop-blur-xl bg-white h-screen p-6'>
        <div className='flex justify-end'>
          <button className=''>
            <img src={CloseIcon} alt="" onClick={closeMenu} />
          </button>
        </div>
        <ul className='flex flex-col gap-4 mt-6'>
          <li className='opacity-0'>
            <Link to={'/'} className='text-white'><strong>00</strong> HOME</Link>
          </li>
          <li className='opacity-0'>
            <Link to={'/destination'} className='text-white'><strong>01</strong> DESTINATION</Link>
          </li>
          <li className='opacity-0'>
            <Link to={'/crew'} className='text-white'><strong>02</strong> CREW</Link>
          </li>
          <li className='opacity-0'>
            <Link to={'/technology'} className='text-white'><strong>03</strong> TECHNOLOGY</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarMobile;