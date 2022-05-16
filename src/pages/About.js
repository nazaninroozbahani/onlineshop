import { useEffect, useRef, useState } from "react";

const About = () => {
  const [desc, setDesc] = useState("");
  const [about, setAbout] = useState("");
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setAbout(desc);
  };

  const toggleShowMore = () => {
    console.log("numberOfClicks show more before", showMore);
    setShowMore(!showMore);
    console.log("numberOfClicks show more after", showMore);
  };
  

  return (
    <>
      <div class="mb-3 w-75 p-8">
        <label for="exampleFormControlTextarea1" class="form-label">
          Example textarea
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <button type="button" class="btn btn-primary" onClick={handleClick}>
          ثبت
        </button>
      </div>
      <div
        className="w-50 m-8"
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          width: "100%",
          WebkitLineClamp: showMore ? "none" : 3,
        }}
      >
        {about}
      </div>
      {
        <button type="button" class="btn btn-primary" onClick={toggleShowMore}>
          مشاهده {showMore ? "کمتر" : "بیشتر"}
        </button>
      }
    </>
  );
};

export default About;
