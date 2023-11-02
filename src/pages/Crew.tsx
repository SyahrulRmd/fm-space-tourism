import { useLayoutEffect, useMemo, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { crew as crews } from '../data.json'
import gsap from "gsap";
import NavbarMobile from "../components/NavbarMobile";

const CrewPage = () => {
  const contentRef = useRef<HTMLDivElement>(null)
  const [selectedCrew, setSelectedCrew] = useState<number>(0)
  const crew = useMemo(() => {
    return crews.find((_, key) => key === selectedCrew)
  }, [selectedCrew])

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
          duration: 1
        })

        const toY = {
          y: 0,
          opacity: 1,
          duration: 0.5
        }

        gsap.fromTo(contents[0].children[0].children[0], {
          y: 24,
          opacity: 0,
        }, toY)

        gsap.fromTo(contents[0].children[0].children[1], {
          y: 24,
          opacity: 0,
        }, {
          ...toY,
          delay: 0.1
        })

        gsap.fromTo(contents[0].children[0].children[2], {
          y: 24,
          opacity: 0,
        }, {
          ...toY,
          delay: 0.2
        })
      }
    }, contentRef)

    return () => contentCtx.revert()
  }, [selectedCrew])

  return (
    <section className={`min-h-screen bg-cover bg-crew-desktop xs:bg-crew-mobile`}>
      <div className="xs:hidden">
        <Navbar />
      </div>
      <div className="sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
        <NavbarMobile />
      </div>
      <div className="container mt-14 xs:mt-6 xs:p-5 xs:mb-20">
        <h5 className="text-white xs:text-center xs:text-base sm:text-xl"><strong className="text-sub-gray">02</strong> MEET YOUR CREW</h5>
        <div ref={contentRef} className="grid items-stretch grid-cols-12 text-white xs:grid-cols-6 sm:grid-cols-6 xs:mt-6 sm:mt-6 sm:gap-10">
          <div className="flex flex-col justify-between col-span-6 my-24 xs:flex-col-reverse xs:gap-8 xs:my-6 sm:my-6">
            <div className="xs:text-center sm:text-center">
              <h4 className="text-sub-gray xs:text-base xs:mb-2 sm:text-xl sm:mb-2">COMMANDER</h4>
              <h3 className="uppercase w-max xs:w-auto xs:text-2xl xs:mb-6 sm:mb-6 sm:text-4xl sm:w-auto">{crew?.name}</h3>
              <p className="leading-7 text-grayish-blue xs:leading-6 xs:text-sm">{crew?.bio}</p>
            </div>
            <div className="flex gap-6 mt-6 xs:justify-center sm:justify-center">
              {crews.map((_, key) => (
                <div key={key} onClick={() => setSelectedCrew(key)} className={`w-4 h-4 xs:w-3 xs:h-3 sm:w-3 sm:h-3 rounded-full transition-all cursor-pointer ${key === selectedCrew ? 'bg-white' : 'bg-white/20'}`} />
              ))}
            </div>
          </div>
          <div className="col-span-6 xs:-order-1">
            <div className="overflow-hidden ">
              <img src={crew?.images.webp} alt="" className="max-h-[73vh] m-auto xs:max-h-[224px]" />
              <hr className="border-sub-gray md:hidden lg:hidden xl:hidden 2xl:hidden" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CrewPage;
