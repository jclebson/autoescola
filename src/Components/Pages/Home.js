import React from "react";
import Heading from "Components/Atoms/Heading";
import Hero from "Components/Molecules/Hero";
import Button from "Components/Atoms/Button";
import HeroImage from "Assets/hero.jpg";
import Grid from "Components/Atoms/Grid";
import Feature from "Components/Atoms/Feature";
import Section from "Components/Molecules/Section";
import { FaAccessibleIcon, FaCar, FaKey, FaMapMarkedAlt } from "react-icons/fa";

const Home = () => {
  return (
    <React.Fragment>
      <Hero image={HeroImage}>
        <Heading>
          <h1>
            Ganhe sua <strong>liberdade</strong>
            <br /> de ir e vir
          </h1>
        </Heading>
        <ul>
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
          <li>Optio voluptas laboriosam suscipit nisi omnis laborum</li>
          <li>
            Impedit inventore debitis modi, quis labore alias doloribus corporis
          </li>
        </ul>
        <Button color="primary" variant="outlined">
          Matricule-se agora
        </Button>
      </Hero>
      <Section>
        <Grid sm={2} md={4}>
          <Feature icon={<FaCar />} title="Maior e melhor frota">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Feature>

          <Feature icon={<FaKey />} title="Habilitação mais rápida">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Feature>

          <Feature icon={<FaMapMarkedAlt />} title="Excelente localização">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Feature>

          <Feature icon={<FaAccessibleIcon />} title="Acessibilidade">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Feature>
        </Grid>
      </Section>
    </React.Fragment>
  );
};

export default Home;
