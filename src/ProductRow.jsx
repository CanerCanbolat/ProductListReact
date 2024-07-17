export default function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );
  return (
    <tr className="products">
      <td> {name} </td>
      <td className="price"> {product.price} </td>
    </tr>
  );
}
