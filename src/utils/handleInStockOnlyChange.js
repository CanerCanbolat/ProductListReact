export const handleInStockOnlyChange = (onInStockOnlyChange) => (e) => {
  onInStockOnlyChange(e.target.checked);
};
