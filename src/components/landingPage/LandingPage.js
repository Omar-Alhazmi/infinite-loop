import React,{ useState } from 'react';
import Video  from '../../videos/video.mp4';
import * as LandingPageStyled from './LandingPageStyled';
const LandingPage = () => {
    const [hover,setHover] = useState(false)
    
    const onHover = () => {
        setHover(!hover)
    }
    return (
        <LandingPageStyled.LandingPageContainer >
            <LandingPageStyled.LandingPageBackground>
                <LandingPageStyled.VideoBackground autoPlay loop muted src={Video} type='video/mp4'/>
            </LandingPageStyled.LandingPageBackground>
            <LandingPageStyled.LandingPageContent>
              <LandingPageStyled.LandingPageH1>InfiniteLoop</LandingPageStyled.LandingPageH1>  
              <LandingPageStyled.LandingPageParagraph>Storage and Logistic Services<br/>
                                              Storing, Picking , Packing , Delivering
                                              </LandingPageStyled.LandingPageParagraph>
            <LandingPageStyled.LandingPagePBtnWrapper >
                <LandingPageStyled.LandingButton to="/SignIn" onMouseEnter={onHover} onMouseLeave={onHover} primary={true.toString()} dark={true.toString()} >
                SignIn {hover ? <LandingPageStyled.ArrowForward /> : <LandingPageStyled.ArrowRight /> }
                </LandingPageStyled.LandingButton>
              </LandingPageStyled.LandingPagePBtnWrapper>
            </LandingPageStyled.LandingPageContent>
        </LandingPageStyled.LandingPageContainer>
    );
};

export default LandingPage;


