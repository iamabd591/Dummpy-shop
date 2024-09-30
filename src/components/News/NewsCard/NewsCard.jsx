import "./NewsCard.css";
import { GrLanguage } from "react-icons/gr";
import { CgCalendarDates } from "react-icons/cg";
import React, { useEffect, useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";

const NewsCard = ({ news = [] }) => {
  const [sliceData, setSliceData] = useState([]);

  useEffect(() => {
    if (news.length > 0) {
      setSliceData(news.slice(0, 3)); // Slice the news array when it updates
    }
  }, [news]);

  if (!news.length) return null; // Return null if no news is available

  return (
    <div className="news-card-main">
      <h2>Latest News</h2>
      <div className="news-card-container">
        {sliceData.map((value) => (
          <div className="news-card" key={value?.id || value?.title}>
            <div className="news-image">
              <center>
                {value?.image_url ? (
                  <img src={value.image_url} alt={value?.title || "Image"} />
                ) : (
                  <p>Loading image...</p>
                )}
              </center>
            </div>

            <div className="news-icons">
              <p>
                {value?.language || "Loading"}
                <span>
                  <GrLanguage />
                </span>
              </p>
              <p>
                {value?.country === "united states of america"
                  ? "USA"
                  : value?.country || "Loading"}
                <span>
                  <IoLocationOutline />
                </span>
              </p>
              <p>
                {value?.pubDate || "Loading..."}
                <span>
                  <CgCalendarDates />
                </span>
              </p>
            </div>

            <div className="news-title">
              <p>{value?.title?.slice(0, 60) + "..." || "Loading..."}</p>
            </div>

            <div className="news-description">
              <p>{value?.description?.slice(0, 150) + "..." || "Loading..."}</p>
            </div>

            <div className="news-btn">
              <button>
                <a href={value?.link} target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
                <span>
                  <HiArrowLongRight />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCard;
