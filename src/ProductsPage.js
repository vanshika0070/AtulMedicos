import Products from "./Products";
import { Link } from "react-router-dom";

function ProductsPage() {
  return (
    <>
       <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span className="separator">/</span>
        <span className="current">Products</span>
      </div>

      <Products from="products" />
      
    </>
  );
}

export default ProductsPage;