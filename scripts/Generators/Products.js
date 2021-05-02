// import faker from "faker";
const faker = require("faker");

const BuildProductList = (size) => {
  const result = [];

  for (let i = 0; i < size; i++) {
    result.push({
      id: i + 1,
      image: faker.image.business(),
      title: faker.commerce.productName(),
      summary: faker.commerce.productDescription(),
      slang: faker.lorem.slug(),
    });
  }

  return result;
};

console.log(JSON.stringify(BuildProductList(100), null, "  "));
