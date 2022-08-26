import React, { Fragment, useState } from "react";
import "./Search.css";

const Search = (props) => {
  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      props.history.push(`/search/${keyword}`);
    } else {
      props.history.push("/products");
    }
  };

  return (
    <Fragment>
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Product ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </Fragment>
  );
};

export default Search;
