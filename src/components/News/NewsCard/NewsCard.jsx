import React, { useEffect, useState } from "react";
import "./NewsCard.css";
import { GrLanguage } from "react-icons/gr";
import { CgCalendarDates } from "react-icons/cg";
import { HiArrowLongRight } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
const NewsCard = ({ news }) => {
  console.log(news);
  if (!news) return null;
  const [sliceData, setSliceData] = useState([]);

  useEffect(() => {
    if (sliceData?.length === 0 && news?.length > 0) {
      setSliceData(news?.slice(0, 3));
    }
  }, [news, sliceData]);
  return (
    <>
      <div className="news-card-main">
        <h2>Latest News</h2>
        <div className="news-card-container">
          {sliceData?.map((value, ind) => (
            <div className="news-card" key={ind}>
              <div className="news-image">
                <center>
                  <img
                    src={value ? value?.image_url : "Loading"}
                    alt={value?.title}
                  />
                </center>
              </div>
              <div className="news-icons">
                <div>
                  <p>
                    {value ? value?.language : "Loading"}
                    <span>
                      <GrLanguage />
                    </span>
                  </p>
                </div>
                <div>
                  <p>
                    {value && value?.country === "united states of america"
                      ? value?.country == "USA"
                      : value?.country}
                    <span>
                      <IoLocationOutline />
                    </span>
                  </p>
                </div>
                <div>
                  <p>
                    {value ? value?.pubDate : "Loading..."}
                    <span>
                      <CgCalendarDates />{" "}
                    </span>
                  </p>
                </div>
              </div>
              <div className="news-title">
                <p>{value ? value?.title?.slice(0, 60) + "..." : "Loading"}</p>
              </div>
              <div className="news-description">
                <p>
                  {value
                    ? value?.description?.slice(0, 150) + "..."
                    : "Loading..."}
                </p>
              </div>
              <div className="news-btn">
                <button>
                  <a href={value?.link}>Read More</a>
                  <span>
                    <HiArrowLongRight />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsCard;
