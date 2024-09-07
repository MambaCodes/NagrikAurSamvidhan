import React from "react";
import { useNavigate } from "react-router-dom";
import "./RoadMap.css";

const RoadMap = (props) => {
  const navigate = useNavigate();

  const handleCardClick = (id, index) => {
    if (index % 2 == 0) {
      // alert(`You clicked on ${index} and ${id}`);
      alert(`You clicked on a game`);
    } else {
      let path = `/app/content/${id}/${index}`;
      // navigate(`app/content/${id}/${index}`);
      navigate(path);
    }
  };
  const article = props.article;
  const id = article.id;
  console.log(id);
  return (
    <div className="roadmap">
      <div className="timeline">
        {Array.from({ length: 5 }).map((_, index) => {
          // Ensure we access the chapter based on the index and handle missing data
          let chapterData = article.chapters[index] || {
            title: "Game On! See How Much You Really Know!",
            desc: "See How Much You Really Know!",
          };
          if (Object.keys(chapterData).length === 0) {
            chapterData = {
              title: "Game On! See How Much You Really Know!",
              desc: "See How Much You Really Know!",
            };
          }
          const title =
            index === 0 ? "Put Your Knowledge to the Test!" : chapterData.title;
          const desc = index === 0 ? "Ready to Play?" : chapterData.desc;

          return (
            <div
              className="card"
              key={index}
              onClick={() => handleCardClick(id, index)}
              style={{ cursor: "pointer" }}
            >
              <div className="info">
                <h3 className="title">{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoadMap;
