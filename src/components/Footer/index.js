import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from './FooterElements'


const yearDate = new Date().getFullYear();

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">What We Do</FooterLink>
                                <FooterLink to="/signin">Investors</FooterLink>
                                <FooterLink to="/signin">Our Journey</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Buy Now</FooterLink>
                                <FooterLink to="/signin">Contact Us</FooterLink>

                        </FooterLinkItems>

                        <FooterLinkItems>                  
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">What We Do</FooterLink>
                                <FooterLink to="/signin">Investors</FooterLink>
                                <FooterLink to="/signin">Our Journey</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Buy Now</FooterLink>
                                <FooterLink to="/signin">Contact Us</FooterLink>

                        </FooterLinkItems>

                    </FooterLinksWrapper>

                    <FooterLinksWrapper>

                        <FooterLinkItems>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                    <FooterLink to="/signin">What We Do</FooterLink>
                                    <FooterLink to="/signin">Investors</FooterLink>
                                    <FooterLink to="/signin">Our Journey</FooterLink>
                                    <FooterLink to="/signin">Testimonials</FooterLink>
                                    <FooterLink to="/signin">Buy Now</FooterLink>
                                    <FooterLink to="/signin">Contact Us</FooterLink>

                            </FooterLinkItems>

                            <FooterLinkItems>                  
                                    <FooterLinkTitle>About Us</FooterLinkTitle>
                                    <FooterLink to="/signin">What We Do</FooterLink>
                                    <FooterLink to="/signin">Investors</FooterLink>
                                    <FooterLink to="/signin">Our Journey</FooterLink>
                                    <FooterLink to="/signin">Testimonials</FooterLink>
                                    <FooterLink to="/signin">Buy Now</FooterLink>
                                    <FooterLink to="/signin">Contact Us</FooterLink>

                        </FooterLinkItems>

                    </FooterLinksWrapper>
                                
                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Jupe</SocialLogo>
                        <WebsiteRights>© All Rights Reserved - Jupe.com {yearDate}</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="//www.instagram.com" target="_blank" aria-label="Intagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="//www.youtube.com" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="//www.twitter.com" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="//www.linkedin.com" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>            
        </FooterContainer>
    )
}

export default Footer
