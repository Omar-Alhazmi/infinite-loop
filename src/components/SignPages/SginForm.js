import styled from 'styled-components';
import BG from '../../image/loginFormBG.jpg';
import { Link } from 'react-router-dom';

export const PageBody = styled.div`
display: grid;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100vw;
  height: 100vh;
  background-attachment: fixed; 
  background-size: cover;
  display: grid;
  align-items: center;
  justify-content: center;
	font-family: 'Open Sans', sans-serif;
  justify-items: center;
  background-image: url(${BG});
  `
export const FormContainer = styled.div`
  width: 400px;
  height: ${({SignUp}) => (SignUp ? '643px' : '436px')};
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 
  border-radius: 5px;
  position: relative;
  z-index: 1;
  background: inherit;
  text-align: center;
  padding: 8%;
  &:before {
  content: "";
  position: absolute;
  background: inherit;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
  filter: blur(10px);
  margin: -20px;
  }
  @media (max-width: 600px){
    width: 257px;
  }
`
export const FormBody = styled.div`
  width:100%;
  margin: 10% 0px;
  padding: 2%;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px){
    display:grid;
  }
`
export const LOGO = styled(Link)`
z-index: 99;
width:250px;
height:250px;
text-decoration: none;
color: #fff;
margin: -75px 0;
&img{
margin-left:32px;
margin-top:32px;
}
@media (max-width: 843px){

}
@media screen and (max-width: 480px){
    margin-left: 16px;
    margin-top: 8px;
}
`; 
export const SelectItem =styled.select`
	width: 100%; 
	margin-bottom: 10px; 
	background: rgba(0,0,0,0.3);
	border: none;
	outline: none;
	padding: 10px;
	font-size: 13px;
	color: #fff;
	text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
	border: 1px solid rgba(0,0,0,0.3);
	border-radius: 4px;
	box-shadow: inset 0 -5px 45px rgba(100,100,100,0.2), 0 1px 1px rgba(255,255,255,0.2);
	-webkit-transition: box-shadow .5s ease;
	-moz-transition: box-shadow .5s ease;
	-o-transition: box-shadow .5s ease;
	-ms-transition: box-shadow .5s ease;
	transition: box-shadow .5s ease;
  &:focus { box-shadow: inset 0 -5px 45px rgba(100,100,100,0.4),
             0 1px 1px rgba(255,255,255,0.2); 
  }
`
export const LoginInput = styled.input`
  -webkit-appearance: none;
	width: 100%; 
	margin-bottom: 10px; 
	background: rgba(0,0,0,0.3);
	border: none;
	outline: none;
	padding: 10px;
	font-size: 13px;
	color: #fff;
	text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
	border: 1px solid rgba(0,0,0,0.3);
	border-radius: 4px;
	box-shadow: inset 0 -5px 45px rgba(100,100,100,0.2), 0 1px 1px rgba(255,255,255,0.2);
	-webkit-transition: box-shadow .5s ease;
	-moz-transition: box-shadow .5s ease;
	-o-transition: box-shadow .5s ease;
	-ms-transition: box-shadow .5s ease;
	transition: box-shadow .5s ease;
  &:focus { box-shadow: inset 0 -5px 45px rgba(100,100,100,0.4),
             0 1px 1px rgba(255,255,255,0.2); 
}
`
export const FormButton = styled.button`
padding: 10px;
font-size: 13px;
background-color: #4a77d4; 
background-image: -moz-linear-gradient(top, #6eb6de, #4a77d4); 
background-image: -ms-linear-gradient(top, #6eb6de, #4a77d4); 
background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#6eb6de), to(#4a77d4)); 
background-image: -webkit-linear-gradient(top, #6eb6de, #4a77d4); 
background-image: -o-linear-gradient(top, #6eb6de, #4a77d4); 
background-image: linear-gradient(top, #6eb6de, #4a77d4); 
background-repeat: repeat-x; 
filter: progid:dximagetransform.microsoft.gradient(startColorstr=#6eb6de, endColorstr=#4a77d4, GradientType=0);  
border: 1px solid #3762bc; 
text-shadow: 1px 1px 1px rgba(0,0,0,0.4); 
box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.5); 
width: 100%; 
display:block;
cursor: pointer;
&:hover { 
  color: #333333; 
  text-decoration: none; 
  background-color: #e6e6e6; 
  background-position: 0 -15px; 
  -webkit-transition: background-position 0.1s linear; 
  -moz-transition: background-position 0.1s linear; 
  -ms-transition: background-position 0.1s linear; 
  -o-transition: background-position 0.1s linear; 
  transition: background-position 0.1s linear;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25); 
color: #ffffff; 
background-color:#004d79;}
`