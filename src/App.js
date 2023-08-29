import React, {useEffect, useState} from "react";
import ProductsView from "./pages/products";
import { fetchProducts } from "./api";
function App() {
  const [productList, setProductList] = useState([]);
  const [colorArray, setColorArray] = useState([])
  useEffect(() => {
    fetchProducts().then((res) => {
      setColorArray(res.map(product => product.colour))
      setProductList(res)
    }).catch((err) => {
      console.log('err ', err);
    })
  },[])
  return (
    <div>
      <ProductsView productList={productList} colorArray={colorArray} setProductList={setProductList} />
    </div>
  );
}

export default App;
