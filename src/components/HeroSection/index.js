import React, {useState} from 'react'
import Video from '../../video/herovideo.mp4'
import {Button} from '../../ButtonElements'
import {
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight
} from './HeroElements'





const HeroSection = () => {

    const [hover, setHover ] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (


       <HeroContainer>
           <HeroBg>

               <VideoBg autoPlay loop muted src={Video} type='video/mp4' />

           </HeroBg>

           <HeroContent>
               <HeroH1> Khyams, The Next Best Thing!</HeroH1>
               <HeroP>The Next Best Thing</HeroP>
               <HeroBtnWrapper>
                   <Button 
                    to="signup" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    >
                    Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                   </Button>
               </HeroBtnWrapper>
           </HeroContent>

       </HeroContainer>

       
    )
};

export default HeroSection