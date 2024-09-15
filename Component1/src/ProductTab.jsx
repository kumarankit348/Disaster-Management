import Product from "./Product.jsx";

function ProductTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={styles}>
      <Product title="mahindra xuv 700" idx={0} />
      <Product title="tata harior" idx={1} />
      <Product title="tata safari" idx={2} />
      <Product title="Grand vitara" idx={3} />
    </div>
  );
}

export default ProductTab;
