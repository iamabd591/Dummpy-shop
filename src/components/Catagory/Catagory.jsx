import "./Catagory.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFakeAPIProducts } from "../../redux/action";
import CategoryCard from "../CategoryCard/CategoryCard";

const Catagory = () => {
  const dispatch = useDispatch();
  const [sliceData, setSliceData] = useState([]);
  const data = useSelector((state) => state.fakeApiProduct);

  useEffect(() => {
    dispatch(getFakeAPIProducts());
  }, [dispatch]);

  useEffect(() => {
    if (data?.length > 0) {
      setSliceData(data.slice(0, 16));
    }
  }, [data]);
  const chunkSize = 4;
  const chunkedData = [];

  for (let i = 0; i < sliceData?.length; i += chunkSize) {
    chunkedData?.push(sliceData?.slice(i, i + chunkSize));
  }

  return (
    <div className="catagory-main">
      {chunkedData?.map((chunk, chunkIndex) => (
        <div className="catagory-card-main" key={chunkIndex}>
          {chunk?.map((product, index) => (
            <CategoryCard product={product} key={index} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Catagory;
