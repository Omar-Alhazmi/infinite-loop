import React from 'react'
import * as FooterStyle from './FooterStyle';
import { animateScroll as scroll } from 'react-scroll'
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaYoutube,
  } from "react-icons/fa";
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
              <FooterStyle.FooterLinkTitle>About Us </FooterStyle.FooterLinkTitle>
              <FooterStyle.FooterLink to="/">How It Works</FooterStyle.FooterLink>
              <FooterStyle.FooterLink to="/">Testimonials</FooterStyle.FooterLink>
              <FooterStyle.FooterLink to="/">Careers</FooterStyle.FooterLink>
              <FooterStyle.FooterLink to="/">Investors</FooterStyle.FooterLink>
              <FooterStyle.FooterLink to="/">Terms of Service</FooterStyle.FooterLink>
            </FooterStyle.FooterLinkItems>
            <FooterStyle.FooterLinkItems>
              <FooterStyle.FooterLinkTitle>Contact Us </FooterStyle.FooterLinkTitle>
              <FooterStyle.FooterLink to="/">Contact</FooterStyle.FooterLink>
              <FooterStyle.FooterLink to="/">Support</FooterStyle.FooterLink>
              <FooterStyle.FooterLink to="/">Destinations</FooterStyle.FooterLink>
              <FooterStyle.FooterLink to="/">Sponserships</FooterStyle.FooterLink>
            </FooterStyle.FooterLinkItems>
          </FooterStyle.FooterLinksWrapper>
          <FooterStyle.FooterLinksWrapper>
            <FooterStyle.FooterLinkItems>
              <FooterStyle.FooterLinkTitle>Social Media </FooterStyle.FooterLinkTitle>
              <FooterStyle.FooterLink to="/">Instagram</FooterStyle.FooterLink>
              <FooterStyle.FooterLink to="/">Facebook</FooterStyle.FooterLink>
              <FooterStyle.FooterLink to="/">Youtube </FooterStyle.FooterLink>
              <FooterStyle.FooterLink to="/">Twitter</FooterStyle.FooterLink>
            </FooterStyle.FooterLinkItems>
                    </FooterStyle.FooterLinksWrapper>
                </FooterStyle.FooterLinksContainer>
                <FooterStyle.SocialMedia>
          <FooterStyle.SocialMediaWrap>
            <FooterStyle.SocialLogo to="/" onClick={toggleHome}>InfiniteLoop</FooterStyle.SocialLogo>
            <FooterStyle.WebsiteRights>
              InfiniteLoop © {new Date().getFullYear()} All rights reserved
            </FooterStyle.WebsiteRights>
            <FooterStyle.SocialIcons>
              <FooterStyle.SocialIconLink href="https://www.facebook.com/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </FooterStyle.SocialIconLink>
              <FooterStyle.SocialIconLink href="https://www.instagram.com/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </FooterStyle.SocialIconLink>
              <FooterStyle.SocialIconLink href="https://www.youtube.com/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </FooterStyle.SocialIconLink>
              <FooterStyle.SocialIconLink href="https://twitter.com/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </FooterStyle.SocialIconLink>
              <FooterStyle.SocialIconLink href="https://www.linkedin.com/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </FooterStyle.SocialIconLink>
            </FooterStyle.SocialIcons>
          </FooterStyle.SocialMediaWrap>
        </FooterStyle.SocialMedia>
            </FooterStyle.FooterWrap>
        </FooterStyle.FooterContainer>
    );
};

export default Footer;
