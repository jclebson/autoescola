import React from "react";
import PropTypes from "prop-types";
import Heading from "Components/Atoms/Heading";
import Hero from "Components/Molecules/Hero";
import Button from "Components/Atoms/Button";
import AboutVideo from "Assets/about.mp4";
import Grid from "Components/Atoms/Grid";
import Feature from "Components/Atoms/Feature";
import Section from "Components/Molecules/Section";
import Footer from "Components/Organisms/Footer";
import { FaAccessibleIcon, FaCar, FaKey, FaMapMarkedAlt } from "react-icons/fa";
import ProductGrid from "Components/Organisms/ProductGrid";
import HeroImage from "Assets/hero.jpg";
import Accordion, { AccordionGroup } from "Components/Atoms/Accordion";
import { Link } from "react-router-dom";
import ProductType from "Types/ProductType";

const Home = ({ products }) => {
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

      <Section inverse>
        <Heading>
          <h2>Conheça nossos serviços</h2>
        </Heading>
        <ProductGrid products={products} />
      </Section>

      <Section>
        <Grid md={2}>
          <div>
            <Heading>
              <h2>Nossa Auto Escola</h2>
            </Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              quibusdam minima facere at sequi error voluptatibus blanditiis
              perspiciatis accusamus enim sunt totam rem recusandae, libero esse
              cupiditate tenetur voluptatem nulla.
            </p>
            <div>
              <Button as={Link} to="/sobre" color="primary">
                Saiba mais
              </Button>
            </div>
          </div>
          <div>
            <video
              src={AboutVideo}
              width="100%"
              autoPlay
              playsInline
              loop
              muted
            />
          </div>
        </Grid>
      </Section>

      <Section inverse>
        <Heading>
          <h2>Dúvidas recorrentes</h2>
        </Heading>
        <AccordionGroup>
          <Accordion title="Como eu renovo minha CNH?">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
            numquam nisi cumque quia beatae
          </Accordion>

          <Accordion title="Como faço a mudança de categoria?">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
            numquam nisi cumque quia beatae
          </Accordion>

          <Accordion title="Fui multado, e agora?">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
            numquam nisi cumque quia beatae
          </Accordion>
        </AccordionGroup>
      </Section>

      <Footer />
    </React.Fragment>
  );
};

Home.defaultProps = {
  products: [],
};

Home.propTypes = {
  products: PropTypes.arrayOf(ProductType),
};

export default Home;
