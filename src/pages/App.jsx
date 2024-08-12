import { Fragment, useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import Card from "../components/ProductCards/Card";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/action";

function App() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products);

  useEffect(() => {
    console.log(product);
    dispatch(getProducts());
  }, []);

  return (
    <Fragment>
      <NavBar />
      <Card />
      <div>App</div>
    </Fragment>
  );
}

export default App;
