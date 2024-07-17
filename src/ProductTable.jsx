import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";
import NoResultsMessage from "./NoResultsMessage";
import { isProductNull } from "./utils/isProductNull";

export default function ProductTable({ categories, products }) {
  return (
    <div className="product-table">
      {categories.map((category) => {
        const filteredItems = products.filter(
          (product) => product.category === category
        );
        return (
          <div key={category}>
            <thead>
              <ProductCategoryRow category={category} />
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {isProductNull(filteredItems) ? (
                <NoResultsMessage />
              ) : (
                filteredItems.map((product) => (
                  <ProductRow key={product.name} product={product} />
                ))
              )}
            </tbody>
          </div>
        );
      })}
    </div>
  );
}
