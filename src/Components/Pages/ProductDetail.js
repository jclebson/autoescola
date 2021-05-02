import React from "react";
import styled from "styled-components";
import { FaIdCard, FaHome, FaScroll } from "react-icons/fa";

import Hero from "Components/Molecules/Hero";
import Heading from "Components/Atoms/Heading";
import Section from "Components/Molecules/Section";
import Footer from "Components/Organisms/Footer";
import Button from "Components/Atoms/Button";

import HeroImage from "Assets/hero.jpg";
import Callout, {
  CalloutActions,
  CalloutBody,
  CalloutMedia,
} from "Components/Atoms/Callout";
import SvgSpeed from "Draws/Speed";
import BreadCrumb from "Components/Atoms/BreadCrumb";
import ProductType from "Models/Types/ProductType";

const PinnedList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const PinnedItem = styled.li`
  display: inline-block;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 16px 16px 0;

  svg {
    margin-right: 8px;
    vertical-align: middle;
  }
`;

const ProductDetail = ({ product }) => {
  return (
    <React.Fragment>
      <Hero image={HeroImage}>
        <Heading>
          <h1>{product.title}</h1>
        </Heading>
        <BreadCrumb
          items={[
            { label: "Início", link: "/" },
            { label: "Serviços", link: `/servicos/${product.slang}` },
            { label: product.title },
          ]}
        />
      </Hero>
      <Section>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
          tempora ea quos. Facilis, vitae! Mollitia dolores debitis eos
          quibusdam. Illo perferendis neque iste fuga quidem dolorum itaque
          maiores id molestiae.
        </p>
        <p>
          Eligendi ut veniam laudantium assumenda reiciendis quibusdam
          asperiores numquam perferendis enim expedita in quaerat, quae
          aspernatur officiis! Unde temporibus quam ab et commodi suscipit,
          laborum architecto facilis, quas similique saepe.
        </p>
        <p>
          Voluptas ea, nemo a in iste repellendus libero vero error aperiam
          aspernatur. Repellendus sequi doloribus dolorum harum aut veritatis
          pariatur vel molestiae quibusdam! Nisi ratione ipsa dolore unde magnam
          neque?
        </p>
        <h5>Documentos necessários:</h5>
        <PinnedList>
          <PinnedItem>
            <FaIdCard />
            RG
          </PinnedItem>
          <PinnedItem>
            <FaIdCard />
            CPF
          </PinnedItem>
          <PinnedItem>
            <FaScroll />
            Certidão de nascimento ou casamento
          </PinnedItem>
          <PinnedItem>
            <FaHome />
            Comprovante de residência
          </PinnedItem>
        </PinnedList>
      </Section>
      <Section inverse>
        <Callout>
          <CalloutBody>
            <h6>Faça sua matrícula agora mesmo</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus non molestias dolorem doloribus? Error itaque unde
              beatae ut ea iste omnis. Vel, ratione nam? Eligendi mollitia fugit
              accusantium nobis saepe.
            </p>
            <CalloutActions>
              <Button color="primary">Matricular</Button>
            </CalloutActions>
          </CalloutBody>
          <CalloutMedia>
            <SvgSpeed></SvgSpeed>
          </CalloutMedia>
        </Callout>
      </Section>
      <Footer />
    </React.Fragment>
  );
};

ProductDetail.defaultProps = {
  product: {},
};

ProductDetail.propTypes = {
  product: ProductType,
};

export default ProductDetail;
