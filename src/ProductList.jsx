import products from "./data.js";
import Itemcontainer from "./Itemcontainer.jsx";

export default function ProductList({ handleadditem }) {
  return (
    <div className="flex flex-row">
      {products.map((ele, index) => (
        <Itemcontainer
          productData={ele}
          key={index}
          itemadder={handleadditem}
        />
      ))}
    </div>
  );
}
