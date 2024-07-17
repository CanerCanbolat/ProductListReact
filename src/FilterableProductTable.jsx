import categories from "./constant/categories";
import { products } from "./constant/products";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useState } from "react";
import { applyFilters } from "./utils/applyFilters";

export default function FilterableProductTable() {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const filteredProducts = products.filter((product) =>
    applyFilters(product, filterText, inStockOnly)
  );

  return (
    <div className="filterable-table">
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnly={setInStockOnly}
      />
      <ProductTable categories={categories} products={filteredProducts} />
    </div>
  );
}
