import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import { Link as LRouter } from 'react-router-dom'

export const LandingPageContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 860px;
position: relative;
z-index: 1;

:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index: 2;
}
`;
export const LandingPageBackground = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`;

export const VideoBackground = styled.video`
width: 100%;
height: 100%;
object-fit: cover;
--o-object-fit: cover;
background: #232a34; 
`;

export const LandingPageContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
margin-top: -300px;
display: flex;
flex-direction: column;
align-items: center;
`;
export const LandingPageH1 = styled.h1`
color: #fff;
font-size: 48px;
text-align: center;

@media screen and (max-width: 768px){
    font-size: 40px;
}

@media screen and (max-width: 480px){
    font-size: 32px;
}
`;

export const LandingPageParagraph = styled.p`
margin-top: 24px;
color: #fff;
font-size: 24px;
text-align: center;
max-width: 600px;

@media screen and (max-width: 768px){
    font-size: 24px;
}
@media screen and (max-width: 480px){
    font-size: 18px;
}
`;

export const LandingPagePBtnWrapper = styled.div `
margin-top: 32px; 
display: flex;
flex-direction: column;
align-items: center;

`

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`
export const LandingButton = styled(LRouter)`
border-radius: 50px;
background: ${({primary}) => (primary ? '#dea169' : '#DBE2EF')};
white-space: nowrap;
padding: ${({Large}) => (Large ? '14px 48px' : '12px 30px')};
color: ${({dark}) => (dark ? '#010606' : '#fff')};
font-size: ${({fontLarge}) => (fontLarge ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
transition: all 0.2s ease-in-out;
&:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => ( primary ? '#fff' : '#01BF71')};
}
`;




