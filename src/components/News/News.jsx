import "./News.css";
import React, { useEffect } from "react";
import NewsCard from "./NewsCard/NewsCard";
import { getNEWS } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
const News = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNEWS());
  }, [dispatch]);

  const newsData = useSelector((state) => state.news);
  // console.log(newsData?.results);
  return (
    <>
      <NewsCard news={newsData?.results} />
    </>
  );
};

export default News;
