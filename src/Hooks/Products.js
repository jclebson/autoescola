import ServImage01 from "Assets/serv-01.jpg";
import ServImage02 from "Assets/serv-02.jpg";
import ServImage03 from "Assets/serv-03.jpg";
import ServImage04 from "Assets/serv-04.jpg";
import ServImage05 from "Assets/serv-05.jpg";

const products = [
  {
    id: 1,
    title: "1ª Habilitação Carro e Moto",
    slang: "primeira-habilitacao-carro-e-moto",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: ServImage01,
  },
  {
    id: 2,
    title: "1ª Habilitação Carro",
    slang: "primeira-habilitacao-carro",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: ServImage02,
  },
  {
    id: 3,
    title: "1ª Habilitação Moto",
    slang: "primeira-habilitacao-moto",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: ServImage03,
  },
  {
    id: 4,
    title: "Mudança de Categoria Caminhão",
    slang: "mudanca-categoria-caminhao",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: ServImage04,
  },
  {
    id: 5,
    title: "Aulas Avulsas",
    slang: "aulas-avulsas",
    summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: ServImage05,
  },
];

export const useProducts = () => products;

export const useProduct = ({ slang }) => {
  return products.find((p) => p.slang === slang);
};
