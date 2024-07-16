export const applyFilters = (product, filterText, inStockOnly) => {
  const isFilteredByText =
    filterText.trim() === "" ||
    product.name.toLowerCase().includes(filterText.toLowerCase());
  const isFilteredByStock = !inStockOnly || product.stocked;
  return isFilteredByText && isFilteredByStock;
};
