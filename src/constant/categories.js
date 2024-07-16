import { products } from "./products";

const categories = Array.from(
  new Set(products.map((product) => product.category))
);

export default categories;
