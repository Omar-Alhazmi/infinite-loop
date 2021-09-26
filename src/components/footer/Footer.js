import React from 'react'
import { FaWhatsapp, FaTwitter, FaInstagram, FaHeart } from 'react-icons/fa';
import logo from '../../image/logo.png'
import * as FooterStyle from './FooterStyle';
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterStyle.FooterContainer>
            <FooterStyle.FooterWrap>
                <FooterStyle.FooterLinksContainer>
                    <FooterStyle.FooterLinksWrapper>
                        <FooterStyle.FooterLinkItems>
                            <FooterStyle.FooterLinkTitle> Contact Us </FooterStyle.FooterLinkTitle>
                            <FooterStyle.FooterLink href="https://twitter.com/" target="_blank">
                                <FaTwitter />
                            </FooterStyle.FooterLink>
                            <FooterStyle.FooterLink href="https://wa.me/" target="_blank">  <FaWhatsapp /></FooterStyle.FooterLink>
                            <FooterStyle.FooterLink href="https://www.instagram.com/" target="_blank">            <FaInstagram /></FooterStyle.FooterLink>
                        </FooterStyle.FooterLinkItems>
                    </FooterStyle.FooterLinksWrapper>
                </FooterStyle.FooterLinksContainer>
                <FooterStyle.SocialMedia>
                    <FooterStyle.SocialMediaWrap>
                        <FooterStyle.SocialLogo to='/' onClick={toggleHome}>
                            <FooterStyle.Logo src={logo} />
                        </FooterStyle.SocialLogo>
                        <FooterStyle.WebsiteRights>
                        Made with  <FaHeart />  by 0100
                        </FooterStyle.WebsiteRights>
                        <FooterStyle.WebsiteRights>
                            © InfiniteLoop {new Date().getFullYear()}
                        </FooterStyle.WebsiteRights>
                    </FooterStyle.SocialMediaWrap>
                </FooterStyle.SocialMedia>
            </FooterStyle.FooterWrap>
        </FooterStyle.FooterContainer>
    );
};

export default Footer;
