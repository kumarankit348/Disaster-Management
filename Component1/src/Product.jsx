import "./Product.css";
import Price from "./Price";

function Product({ title, idx }) {
  let oldPrices = ["20L", "19L", "22L", "15L"];
  let newPrices = ["18L", "16L", "17L", "12L"];
  let description = [
    ["Auto driving", "comfertable"],
    ["mini fortuner", "comfertable"],
    ["luxary and space", "high price range"],
    ["good in less budget", "panely of spaces"],
  ];
  return (
    <div className="Product">
      <h4>Title</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;
