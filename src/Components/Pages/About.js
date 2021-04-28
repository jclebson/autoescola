import React from "react";

import Hero from "Components/Molecules/Hero";
import Heading from "Components/Atoms/Heading";
import Section from "Components/Molecules/Section";
import Grid from "Components/Atoms/Grid";
import HeroImage from "Assets/hero.jpg";
import AboutImage from "Draws/About";
import styled from "styled-components";
import Footer from "Components/Organisms/Footer";

const ImageContainer = styled.div`
  svg {
    width: 100%;
    max-width: 380px;
    height: auto;
    display: block;
    margin: 0 auto;
    color: ${(props) => props.theme.colors.primary.main};
  }
`;

const About = () => {
  return (
    <div>
      <React.Fragment>
        <Hero image={HeroImage}>
          <Heading>
            <h1>Nossa Auto Escola</h1>
          </Heading>
        </Hero>
        <Section>
          <Grid md={2}>
            <div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti ratione adipisci fuga odit nemo voluptatem ducimus
                optio, veritatis unde, voluptates nihil recusandae! Nesciunt
                eaque ipsam illo officiis deserunt quo quas.
              </p>
              <p>
                Quod tenetur nihil voluptate error! Praesentium, at officia. A
                repellendus rem quia vel asperiores unde tempore et nostrum,
                voluptate hic. Voluptatem enim autem voluptate adipisci, quidem
                quasi. Quis, minus vero.
              </p>
              <p>
                Nihil possimus asperiores enim iure et sequi similique animi
                quae, ipsa tempora accusamus autem repellat velit quibusdam
                cumque voluptate vero, quo accusantium pariatur quis. Expedita
                exercitationem quas culpa corrupti quos.
              </p>

              <ul>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Sapiente tenetur, necessitatibus quisquam veritatis autem
                  doloribus.
                </li>
                <li>
                  In officiis vitae numquam iste necessitatibus eius et animi,
                  ipsam.
                </li>
                <li>
                  Veniam consequuntur iusto blanditiis unde doloribus harum
                  praesentium.
                </li>
                <li>
                  Porro explicabo impedit ea vitae enim vero temporibus
                  cupiditate error.
                </li>
              </ul>
            </div>
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Exercitationem eveniet, earum ipsam ex a amet nobis laborum in
                doloremque tenetur sequi qui quia deleniti, quas laboriosam
                placeat dolores consequatur obcaecati?
              </p>
              <ImageContainer>
                <AboutImage />
              </ImageContainer>
            </div>
          </Grid>
        </Section>
        <Section inverse>
          <Grid md={2}>
            <div>
              <h4>Missão</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                id distinctio, doloribus quis aperiam ducimus, quasi porro
                possimus eveniet quibusdam tenetur, maiores odio rem harum
                officia deserunt voluptatem provident explicabo.
              </p>
            </div>
            <div>
              <h4>Visão</h4>
              <p>
                Quasi maxime animi pariatur. Dolor in tempore incidunt
                explicabo, tempora dolores magnam atque temporibus? Culpa natus,
                mollitia expedita blanditiis debitis eaque est illum dolore
                dolor, facilis eos, autem officia iure.
              </p>
            </div>
          </Grid>
        </Section>
        <Section>
          <Heading>
            <h3>Conheça nossos professores</h3>
          </Heading>
        </Section>
        <Footer />
      </React.Fragment>
    </div>
  );
};

export default About;
