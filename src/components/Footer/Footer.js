import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { Button } from "../../globalStyles";
import {
  FooterContainer,
  FooterSubscription,
  Form,
  FormInput,
  FooterSubHeading,
  FooterSubText,
  FooterLink,
  FooterLinksContainer,
  FooterLinkTitle,
  FooterLinksItems,
  FooterLinksWrapper,
  SocialMedia,
  SocialMediaWrap,
  SocialIcon,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink

} from "./Footer.elements";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to receive the latest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>

        <Form>
          <FormInput name="email" type="email" placeholder="You Email" />

          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>

      <FooterLinksContainer>
          <FooterLinksWrapper>
              <FooterLinksItems>
                  <FooterLinkTitle>
                      About US
                  </FooterLinkTitle>
                  <FooterLink to="/sign-up">How it workds</FooterLink>
                  <FooterLink to="/">Testimonials</FooterLink>
                  <FooterLink to="/">Careers</FooterLink>
                  <FooterLink to="/">Investors</FooterLink>
                  <FooterLink to="/">Terms of Service</FooterLink>
              </FooterLinksItems>
              <FooterLinksItems>
                  <FooterLinkTitle>
                      About US
                  </FooterLinkTitle>
                  <FooterLink to="/sign-up">How it workds</FooterLink>
                  <FooterLink to="/">Testimonials</FooterLink>
                  <FooterLink to="/">Careers</FooterLink>
                  <FooterLink to="/">Investors</FooterLink>
                  <FooterLink to="/">Terms of Service</FooterLink>
              </FooterLinksItems>
              <FooterLinksItems>
                  <FooterLinkTitle>
                      About US
                  </FooterLinkTitle>
                  <FooterLink to="/sign-up">How it workds</FooterLink>
                  <FooterLink to="/">Testimonials</FooterLink>
                  <FooterLink to="/">Careers</FooterLink>
                  <FooterLink to="/">Investors</FooterLink>
                  <FooterLink to="/">Terms of Service</FooterLink>
              </FooterLinksItems>
              <FooterLinksItems>
                  <FooterLinkTitle>
                      About US
                  </FooterLinkTitle>
                  <FooterLink to="/sign-up">How it workds</FooterLink>
                  <FooterLink to="/">Testimonials</FooterLink>
                  <FooterLink to="/">Careers</FooterLink>
                  <FooterLink to="/">Investors</FooterLink>
                  <FooterLink to="/">Terms of Service</FooterLink>
              </FooterLinksItems>
          </FooterLinksWrapper>
      </FooterLinksContainer>

      <SocialMedia>
          <SocialMediaWrap>
              <SocialLogo to="/">
                  <SocialIcon/>
                  ULTRA
              </SocialLogo>
              <WebsiteRights>ULTRA 2020</WebsiteRights>
              <SocialIcons>
                  <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                      <FaFacebook />
                  </SocialIconLink>
                  <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                      <FaInstagram />
                  </SocialIconLink>
                  <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                      <FaYoutube />
                  </SocialIconLink>
                  <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                      <FaTwitter />
                  </SocialIconLink>
                  <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                      <FaLinkedin />
                  </SocialIconLink>
              </SocialIcons>
          </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
