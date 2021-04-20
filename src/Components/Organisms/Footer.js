import React from "react";
import Container from "Components/Atoms/Container";
import Grid from "Components/Atoms/Grid";
import Heading from "Components/Atoms/Heading";
import styled from "styled-components";
import {
  FaPhone,
  FaBuilding,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Root = styled.footer`
  background-color: #2a2a2a;
  color: #aaa;
  padding: 40px 0;

  h6 {
    margin-top: 0;
    text-transform: uppercase;
  }
`;

const IconContainer = styled.span`
  margin-right: 8px;
`;

const FooterLink = styled.a`
  color: ${(props) => props.theme.colors.primary.main};
  display: block;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.primary.dark};
  }
`;

const Footer = (props) => {
  return (
    <Root>
      <Container>
        <Grid md={3}>
          <div>
            <Heading>
              <h6>Nossa Auto Escola</h6>
            </Heading>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
              aliquid maiores, libero illum molestias dolores exercitationem nam
              reiciendis quos illo omnis mollitia.
            </p>
          </div>
          <div>
            <Heading>
              <h6>Contatos</h6>
            </Heading>
            <p>
              <IconContainer>
                <FaPhone />
              </IconContainer>
              (12) 12345-6789
            </p>
            <p>
              <IconContainer>
                <FaBuilding />
              </IconContainer>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          <div>
            <Heading>
              <h6>Redes sociais</h6>
            </Heading>
            <p>
              <FooterLink
                target="_blank"
                href="https://www.facebook.com/exemplo_qualquer"
              >
                <IconContainer>
                  <FaFacebookF />
                </IconContainer>
                Facebook
              </FooterLink>
            </p>

            <p>
              <FooterLink
                target="_blank"
                href="https://www.linkedin.com/exemplo_qualquer"
              >
                <IconContainer>
                  <FaLinkedinIn />
                </IconContainer>
                Linkedin
              </FooterLink>
            </p>

            <p>
              <FooterLink
                target="_blank"
                href="https://www.twitter.com/exemplo_qualquer"
              >
                <IconContainer>
                  <FaTwitter />
                </IconContainer>
                Twitter
              </FooterLink>
            </p>
          </div>
        </Grid>
      </Container>
    </Root>
  );
};

export default Footer;
