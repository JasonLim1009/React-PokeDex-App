import React from "react";
// import { searchPokemon } from "../api";
const { useState } = React;

const Searchbar = (props) => {
  const { onSearch } = props;
  const [search, setSearch] = useState("");
  // const [pokemon, setPokemon] = useState();

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onClick = async (e) => {
    onSearch(search);
  };
  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Search..." onChange={onChange} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onClick}>Click</button>
      </div>
    </div>
  );
};

export default Searchbar;
