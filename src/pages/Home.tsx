import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar';
import NavbarMobile from '../components/NavbarMobile';

const HomePage = () => {
  const contentRef = useRef<HTMLDivElement>(null)
  const navigation = useNavigate()

  useLayoutEffect(() => {
    const contentCtx = gsap.context(() => {
      const contents = contentRef.current?.children
      if (contents) {        
        gsap.fromTo(contents[1], {
          x: 100,
          opacity: 0.2
        }, {
          x: 0,
          opacity: 1,
          duration: 0.5,
        })

        const toY = {
          y: 0,
          opacity: 1,
          duration: 0.5
        }

        gsap.fromTo(contents[0].children[0], {
          y: 24,
          opacity: 0,
        }, {
          ...toY,
          delay: 0.1
        })
        gsap.fromTo(contents[0].children[1], {
          y: 24,
          opacity: 0,
        }, {
          ...toY,
          delay: 0.2
        })
        gsap.fromTo(contents[0].children[2], {
          y: 24,
          opacity: 0,
        }, {
          ...toY,
          delay: 0.3
        })
      }
    }, contentRef)

    return () => contentCtx.revert()
  }, [])

  return (
    <section className={`min-h-screen bg-cover xs:bg-home-mobile bg-home-desktop sm:bg-home-tablet`}>
      <div className="xs:hidden">
        <Navbar />
      </div>
      <div className="sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
        <NavbarMobile />
      </div>
      <div className="container mt-36 xs:mt-14 sm:mt-14">
        <div ref={contentRef} className="grid grid-cols-12 text-white xs:grid-cols-6 sm:grid-cols-6 sm:gap-6">
          <div className="col-span-6 xs:text-center sm:text-center">
            <h5 className="text-grayish-blue xs:text-base sm:text-xl">SO, YOU WANT TO TRAVEL TO</h5>
            <h1>SPACE</h1>
            <p className="leading-7 text-grayish-blue xs:leading-6 sm:text-base">
              Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it.
              Well sit back, and relax because we’ll give you a truly out of this world experience!
            </p>
          </div>
          <div className="grid col-span-6 place-items-center xs:min-h-[40vh]">
            <div onClick={() => navigation('/destination')} className="border-0 border-solid border-white/20 hover:border-[40px] rounded-full transition-all cursor-pointer">
              <div className="flex items-center justify-center w-64 h-64 p-4 bg-white rounded-full xs:w-36 xs:h-36 sm:w-56 sm:h-56">
                <h4 className='text-primary-black xs:text-xl'>EXPLORE</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
