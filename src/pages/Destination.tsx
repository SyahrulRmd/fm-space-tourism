import { useLayoutEffect, useMemo, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { destinations } from '../data.json'
import gsap from "gsap";
import NavbarMobile from "../components/NavbarMobile";

const DestinationPage = () => {
  const [selectedDestination, setSelectedDestination] = useState<number>(0)
  const destinationTabs = useRef<HTMLUListElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const destination = useMemo(() => {
    return destinations.find((_, key) => key === selectedDestination)
  }, [selectedDestination])

  // FIXME: issues on hover 
  useLayoutEffect(() => {
    let currentTl: gsap.core.Timeline;

    const tabs = destinationTabs.current?.children
    let activeTab = 0;

    const clickAnimation = (tl: gsap.core.Timeline, newActive: number) => {
      activeTab = newActive
      tl.play()

      if (currentTl) {
        currentTl.reverse()
      }

      currentTl = tl
    }

    const mouseEnterAnimation = (tl: gsap.core.Timeline, hoverTab: number) => {
      if (hoverTab !== activeTab) {
        tl.play()
      }
    }

    const mouseLeaveAnimation = (tl: gsap.core.Timeline, hoverTab: number) => {
      if (hoverTab !== activeTab) {
        tl.reverse()
      }
    }

    const tabsCtx = gsap.context(() => {
      if (tabs) {
        for (let i = 0; i < tabs.length; i++) {
          const underline = tabs[i].querySelector('#tab-underline')
          const onclickTl = gsap.timeline({ paused: true })

          if (i === 0) {
            clickAnimation(onclickTl, i)
          }

          onclickTl.fromTo(underline, {
            width: "0%",
            transformOrigin: 'left',
          }, {
            width: "100%",
            duration: 0.3,
            backgroundColor: 'white'
          });

          const onhoverTl = gsap.timeline({ paused: true })
          onhoverTl.fromTo(underline, {
            backgroundColor: 'transparent',
            width: "0%",
            transformOrigin: 'left',
          }, {
            backgroundColor: '#fff3',
            width: "100%",
            duration: 0.3,
          })

          tabs[i].addEventListener('click', () => clickAnimation(onclickTl, i))
          tabs[i].addEventListener('mouseenter', () => mouseEnterAnimation(onhoverTl, i))
          tabs[i].addEventListener('mouseleave', () => mouseLeaveAnimation(onhoverTl, i))
        }
      }
    }, destinationTabs)

    return () => tabsCtx.revert()
  }, [])

  useLayoutEffect(() => {
    const contentCtx = gsap.context(() => {
      const contents = contentRef.current?.children
      if (contents) {
        gsap.fromTo(contents[0], {
          x: -100,
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

        gsap.fromTo(contents[1].children[1].children[0].children[0], {
          y: 24,
          opacity: 0,
        }, toY)

        gsap.fromTo(contents[1].children[1].children[0].children[1], {
          y: 24,
          opacity: 0,
        }, {
          ...toY,
          delay: 0.2
        })

        gsap.fromTo(contents[1].children[1].children[1], {
          width: '0%',
        }, {
          width: '100%',
          duration: 0.5,
          delay: 0.3
        })

        gsap.fromTo(contents[1].children[1].children[2].children[0], {
          y: 24,
          opacity: 0,
        }, {
          ...toY,
          delay: 0.3
        })
        gsap.fromTo(contents[1].children[1].children[2].children[1], {
          y: 24,
          opacity: 0,
        }, {
          ...toY,
          delay: 0.4
        })
      }
    }, contentRef)

    return () => contentCtx.revert()
  }, [selectedDestination])

  return (
    <section className={`min-h-screen bg-cover bg-destination-desktop xs:bg-destination-mobile`}>
      <div className="xs:hidden">
        <Navbar />
      </div>
      <div className="sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
        <NavbarMobile />
      </div>
      <div className="container mt-14 xs:mt-6 xs:p-5">
        <h5 className="text-white xs:text-center xs:text-base sm:text-xl"><strong className="text-sub-gray">01</strong> PICK YOUR DESTINATION</h5>
        <div ref={contentRef} className="grid grid-cols-12 text-white sm:pb-20 sm:gap-6 xs:grid-cols-6 sm:grid-cols-6 xs:gap-6 xs:mb-14">
          <div className="col-span-6">
            <img src={destination?.images.webp} alt="" className="mx-auto mt-10 xs:w-40 sm:w-72" />
          </div>
          <div className="col-span-6">
            <div className="xs:mb-6 sm:mb-6">
              <ul ref={destinationTabs} className="flex gap-9 xs:justify-center sm:justify-center">
                {destinations.map((dest, key: number) => (
                  <li
                    id={key.toString()}
                    key={key}
                    onClick={() => setSelectedDestination(key)}
                    className={`
                      font-barlow-condensed tracking-[2.7px] cursor-pointer py-1 transition-all uppercase xs:text-sm ${selectedDestination === key ? 'text-white' : 'text-grayish-blue'}
                    `}
                  >
                    {dest.name}
                    <span id="tab-underline" className={`block h-[2px]`} style={{ width: key === 0 ? '100% !important' : '', backgroundColor: key === 0 ? 'white' : '' }} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-center">
                <h1 className="uppercase xs:text-6xl xs:mb-4 sm:text-7xl sm:mb-4">{destination?.name}</h1>
                <p className="leading-7 text-grayish-blue xs:leading-6 xs:text-sm ">{destination?.description}</p>
              </div>
              <hr className="my-7 border-sub-gray" />
              <div className="flex gap-12 xs:flex-col xs:items-center xs:text-center sm:justify-center sm:text-center">
                <div>
                  <p className="text-sm font-barlow-condensed tracking-[2.36px] text-grayish-blue">AVG. DISTANCE</p>
                  <h6 className="uppercase xs:text-3xl xs:mt-4">{destination?.distance}</h6>
                </div>
                <div>
                  <p className="text-sm font-barlow-condensed tracking-[2.36px] text-grayish-blue">EST. TRAVEL TIME</p>
                  <h6 className="uppercase xs:text-3xl xs:mt-4">{destination?.travel}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DestinationPage;