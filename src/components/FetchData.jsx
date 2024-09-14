import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFakeAPIProducts, getProducts } from "../redux/action";

const useFetchData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getFakeAPIProducts());
  }, [dispatch]);

  const data = useSelector((state) => state.products);
  const fakeData = useSelector((state) => state.fakeApiProduct);

  return {
    products: data?.products,
    fakeApiProducts: fakeData,
  };
};

export default useFetchData;
