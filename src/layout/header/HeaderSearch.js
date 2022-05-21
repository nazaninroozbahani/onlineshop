import React, { useEffect, useRef, useState } from "react";
import styles from "./Header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllLaptops } from "../../redux/laptops/LaptopsAction";
import { useNavigate } from "react-router-dom";
import { BsArrowUpRight, BsSearch } from "react-icons/bs";

const Search = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [result, setResult] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const laptops = useSelector((state) => state.laptops.laptops);

  const dispatch = useDispatch();

  const history = useNavigate();

  const inputRef = useRef();

  useEffect(() => {
    getAllLaptops(dispatch);
  }, []);

  const handleChange = (txt) => {
    setSearchTxt(txt);
    if (txt.trim() === "") setResult([]);
    else setResult(laptops.filter((item) => item.name.includes(txt)));
    window.gtag("event", "search_changed", {
      event_category: "change events",
      event_label: "search input",
      non_interaction: true,
      value: txt,
    });
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
  };

  const handleClick = (id, name) => {
    history.push(`/product/${id}`);
    inputRef.current.blur();
    setSearchTxt(name);
    handleChange(name);
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.search} onSubmit={(e) => handleSearch(e)}>
      <BsSearch className={styles.icon} color={"lightgray"} size={"1rem"} />

      <div className={styles.searchBar}>
        <input
          className={styles.input}
          type="search"
          placeholder="جستجو ... "
          ref={inputRef}
          value={searchTxt}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => setShowResult(true)}
          onBlur={() => setShowResult(false)}
          style={{
            borderRadius: showResult && result.length ? "10px 10px 0 0" : 10,
          }}
        />
        {showResult && (
          <div className={styles.resultBox}>
            {result
              .filter((r, i) => i < 5)
              .map((item) => (
                <div
                  key={item.id}
                  onMouseDown={(e) => handleMouseDown(e)}
                  onClick={() => handleClick(item.id, item.name)}
                  className={styles.resultItem}
                >
                  <BsSearch color={"lightgray"} size={"1rem"} />
                  <p>{item.name}</p>
                  <BsArrowUpRight
                    color={"lightgray"}
                    className={styles.upRightArrow}
                  />
                </div>
              ))}
          </div>
        )}
      </div>
    </form>
  );
};

export default Search;
