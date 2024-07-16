import { handleFilterTextChange } from "./utils/handleFilterTextChange";
import { handleInStockOnlyChange } from "./utils/handleInStockOnlyChange";

export default function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnly,
}) {
  return (
    <form className="search-bar">
      <input
        className="input-search"
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={handleFilterTextChange(onFilterTextChange)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={handleInStockOnlyChange(onInStockOnly)}
        />{" "}
        "Only show products in stock"
      </label>
    </form>
  );
}
