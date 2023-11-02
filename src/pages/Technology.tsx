import gsap from 'gsap';
import { useLayoutEffect, useMemo, useRef, useState } from 'react';

import Navbar from '../components/Navbar';
import NavbarMobile from '../components/NavbarMobile';
import { technology as techs } from '../data.json';

const TechnologyPage = () => {
  const contentRef = useRef<HTMLDivElement>(null)
  const [selectedTech, setSelectedTech] = useState<number>(0)

  const tech = useMemo(() => {
    return techs.find((_, key) => key === selectedTech)
  }, [selectedTech])

  useLayoutEffect(() => {
    const contentCtx = gsap.context(() => {
      const contents = contentRef.current?.children
      if (contents) {
        gsap.fromTo(contents[1].children[0], {
          opacity: 0.2
        }, {
          opacity: 1,
          duration: 1
        })

        const toY = {
          y: 0,
          opacity: 1,
          duration: 0.5
        }

        gsap.fromTo(contents[0].children[1].children[0], {
          y: 24,
          opacity: 0,
        }, toY)

        gsap.fromTo(contents[0].children[1].children[1], {
          y: 24,
          opacity: 0,
        }, {
          ...toY,
          delay: 0.1
        })

        gsap.fromTo(contents[0].children[1].children[2], {
          y: 24,
          opacity: 0,
        }, {
          ...toY,
          delay: 0.2
        })
      }
    }, contentRef)

    return () => contentCtx.revert()
  }, [selectedTech])

  return (
    <section className={`min-h-screen bg-cover bg-tech-desktop xs:bg-tech-mobile overflow-hidden`}>
      <div className="xs:hidden">
        <Navbar />
      </div>
      <div className="sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
        <NavbarMobile />
      </div>
      <div className="md:container lg:container xl:container 2xl:container mt-14 xs:mt-6 sm:mb-20">
        <div className="container xs:mb-8 sm:mb-10">
          <h5 className="text-white xs:text-center xs:text-base sm:text-xl"><strong className="text-sub-gray">03</strong> SPACE LAUCH 101</h5>
        </div>
        <div ref={contentRef} className="grid items-center grid-cols-12 text-white xs:grid-cols-6 sm:grid-cols-6 xs:gap-9 sm:gap-10">
          <div className="flex items-center col-span-6 gap-10 xs:flex-col sm:flex-col sm:mx-20 xs:mx-5">
            <div className="flex flex-col gap-8 xs:flex-row sm:flex-row sm:justify-center xs:justify-center">
              {techs.map((_, key) => (
                <div
                  key={key}
                  onClick={() => setSelectedTech(key)}
                  className={`
                    cursor-pointer transition-all font-bellefair w-20 h-20 xs:w-10 xs:h-10 sm:h-14 sm:w-14 border border-white flex justify-center items-center text-[32px] xs:text-base sm:text-2xl rounded-full 
                    ${selectedTech === key ? 'bg-white text-primary-black' : 'bg-transparent text-white'}
                  `}
                >
                  {key + 1}
                </div>
              ))}
            </div>
            <div className="xs:text-center sm:text-center">
              <p className="text-grayish-blue xs:text-sm tracking-[2.7px] xs:mb-2 font-barlow-condensed sm:mb-4">THE TERMINOLOGY...</p>
              <h3 className="uppercase w-max xs:text-2xl xs:w-auto xs:mb-4 sm:w-auto sm:mb-6 sm:text-4xl">{tech?.name}</h3>
              <p className="leading-7 xs:leading-6 text-grayish-blue xs:text-sm sm:text-base">{tech?.description}</p>
            </div>
          </div>
          <div className="col-span-6 xs:-order-1 sm:-order-1">
            <div className="translate-x-[40%] xs:translate-x-0 sm:translate-x-0">
              <img src={tech?.images.portrait} className='xs:hidden sm:hidden' alt="" />
              <img src={tech?.images.landscape} className='md:hidden lg:hidden xl:hidden 2xl:hidden' alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechnologyPage;