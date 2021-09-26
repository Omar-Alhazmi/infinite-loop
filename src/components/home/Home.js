import React,{useState} from 'react'
import Navbar from '../heder/Header'
import Sidebar from '../PhoneBar/index'
import LandingPage from '../landingPage/LandingPage'
import Footer from '../footer/Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle}/>
          <LandingPage />
          <Footer />
        </>
    )
}
export default Home
