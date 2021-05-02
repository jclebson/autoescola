import { render } from "test-utils";

import { useProduct, useProducts } from "./Products";

describe("useProduct()", () => {
  test("returns a product", () => {
    const slang = "mudanca-categoria-caminhao";
    const product = useProduct({ slang });

    expect(product.title).toEqual("Mudança de Categoria Caminhão");
  });

  test("returns undefined if product was not found", () => {
    const slang = "invalid-slang";

    const product = useProduct({ slang });

    expect(product).toBeUndefined();
  });
});

describe("useProducts()", () => {
  test("returns a product list", () => {
    const products = useProducts();
    expect(products.length).toBeGreaterThan(1);
  });
});
