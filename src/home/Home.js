import React,{useState} from 'react'
import Navbar from '../components/heder/Header'
import PhoneBar from '../components/PhoneBar'
import LandingPage from '../components/landingPage/LandingPage'
import Plans from '../components/plans/Plans'
import About from '../components/about/About'
import Footer from '../components/footer/Footer'


const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

    return (
        <>
          <PhoneBar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle}/>
          <LandingPage />
          <About />
          <Plans />
          <Footer />
        </>
    )
}
export default Home
