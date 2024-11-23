import React from 'react'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eye from './components/Eye'
import Featured from './components/Featured'
import Clientsreview from './components/Clientsreview'
import Cards from './components/Cards'
import Readytostart from './components/Readytostart'
import Fotter from './components/Fotter'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full  bg-[#27272a] min-h-screen'>
      <Navbar />
      <Landingpage />
      <Marquee />
      <About />
      <Eye />
      <Featured />
      <Clientsreview />
      <Cards />
      <Readytostart />
      <Fotter />
    </div>
  )
}

export default App