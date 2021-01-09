import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import ServicesContainer from '../components/Services'
import {homeObjOne, homeObjTwo, homeObjThree} from '../components/InfoSection/Data'
import Footer from '../components/Footer'

console.log({homeObjOne});

const Home = () => {

const [isOpen, setIsOpen] = useState(false)

const toggle = () => {
    setIsOpen(!isOpen);
}



    return (
<>

<Sidebar isOpen={isOpen} toggle={toggle} />
<Navbar toggle={toggle} />
<HeroSection />
<InfoSection {...homeObjOne} />
<InfoSection {...homeObjTwo} />
<ServicesContainer />
<InfoSection {...homeObjThree} />
<Footer />

</>

  );

};

export default Home
