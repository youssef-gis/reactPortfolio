import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Testimonials from './sections/testimonials/Testimonials';
import FAQs from './sections/faqs/FAQs';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';

import Theme from './theme/Theme';
import { useThemeContext } from './context/theme-context';
import { useState, useEffect, useRef } from 'react';

const App = () => {
  const {themeState} = useThemeContext()

  const mainRef = useRef()
  const [showFloatingNav, setshowFloatingNav] = useState(true)
  const [yPosition, setyPosition] = useState(0)

  const showFloatingNavHandler = ()=>{
    setshowFloatingNav(true)
  }
  const hideFloatingNavHandler = ()=>{
    setshowFloatingNav(false)
  }

  const FloatingNavHandler = ()=>{
    if(yPosition < (mainRef?.current?.getBoundingClientRect().y-20) 
      || yPosition > (mainRef?.current?.getBoundingClientRect().y+20) ){
      showFloatingNavHandler()
    }else{
      hideFloatingNavHandler()
    }
    setyPosition(mainRef?.current?.getBoundingClientRect().y)
  }
  useEffect(()=>{
    const checkYposition = setInterval(FloatingNavHandler, 2000)
    return ()=>clearInterval(checkYposition)
  }, [yPosition])
  return (
    <main className={`${themeState.primary} ${themeState.background}`} ref={mainRef}>
        <Navbar/>
        <Header/>
        <About/>
        <Services/>
        <Portfolio/>
        {/* <Testimonials/>
        <FAQs/> */}
        <Contact/>
        <Footer/>
        {showFloatingNav && <FloatingNav/>}
        <Theme/>
    </main>
  )
}

export default App