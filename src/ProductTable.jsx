import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

export default function ProductTable({
  filterTextOnly,
  inStockOnly,
  categories,
  products,
}) {
  return (
    <div className="product-table">
      {categories.map((category) => (
        <div key={category}>
          <thead>
            <ProductCategoryRow category={category} />
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <ProductRow key={product.name} product={product} />
              ))}
          </tbody>
        </div>
      ))}
    </div>
  );
}
