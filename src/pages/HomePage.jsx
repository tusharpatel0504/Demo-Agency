import { useEffect, useState, useRef } from 'react'
import Hero from '../component/Hero'
import NoiseBackground from '../component/NoiseBackground'
import GotBackground from '../component/GotBackground'
import ScrollLitHeading from '../component/ScrollLitHeading'
import Stats from '../component/Stats'
import StickyCards from '../component/StickyCards'
// import ScrollSection from '../component/ScrollSection'



const HomePage = () => {
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate margin based on scroll (0 to 60px max)
  const margin = Math.min(scrollY / 10, 60)

  return (
    <div className='m-3'>
      <NoiseBackground/>
      <div className='relative'>
        <div className='sticky top-0'>
          <div 
            style={{ 
              marginTop: `${margin}px`,
              marginLeft: `${margin}px`,
              marginRight: `${margin}px`,
              transition: 'margin 0.1s ease-out'
            }}
          >
            <Hero/>
          </div>
        </div>
        <div className='relative z-10'>
         <section ref={sectionRef} className="relative h-[400vh]">
        <div className="sticky top-0 h-screen">
          <GotBackground>
            <ScrollLitHeading sectionRef={sectionRef} />
          </GotBackground>
        </div>
      </section>
     <StickyCards/>

        </div>
      </div>
    </div>
  )
}

export default HomePage