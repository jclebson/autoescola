import React from "react";

import Hero from "Components/Molecules/Hero";
import Heading from "Components/Atoms/Heading";
import Section from "Components/Molecules/Section";
import Grid from "Components/Atoms/Grid";
import HeroImage from "Assets/hero.jpg";
import AboutImage from "Draws/About";
import styled from "styled-components";
import Footer from "Components/Organisms/Footer";
import InstImage1 from "Assets/instructors/inst1.jpg";
import InstImage2 from "Assets/instructors/inst2.jpg";
import InstImage3 from "Assets/instructors/inst3.jpg";
import InstImage4 from "Assets/instructors/inst4.jpg";
import InstImage5 from "Assets/instructors/inst5.jpg";
import InstImage6 from "Assets/instructors/inst6.jpg";
import Card, { CardMedia, CardMediaDescription } from "Components/Atoms/Card";

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

const instructors = [
  {
    id: 1,
    name: "Thor",
    avatar: InstImage1,
  },
  {
    id: 2,
    name: "Mel",
    avatar: InstImage2,
  },
  {
    id: 3,
    name: "Bolinha",
    avatar: InstImage3,
  },
  {
    id: 4,
    name: "Mike",
    avatar: InstImage4,
  },
  {
    id: 5,
    name: "Emmy",
    avatar: InstImage5,
  },
  {
    id: 6,
    name: "Bob",
    avatar: InstImage6,
  },
];

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
          <Grid sm={2} md={3} lg={4}>
            {instructors.map((instructor) => {
              return (
                <Card key={instructor.id}>
                  <CardMedia image={instructor.avatar}>
                    <CardMediaDescription>
                      <h5>{instructor.name}</h5>
                    </CardMediaDescription>
                  </CardMedia>
                </Card>
              );
            })}
          </Grid>
        </Section>
        <Footer />
      </React.Fragment>
    </div>
  );
};

export default About;
