export const handleFilterTextChange = (onFilterTextChange) => (e) => {
  onFilterTextChange(e.target.value);
};
