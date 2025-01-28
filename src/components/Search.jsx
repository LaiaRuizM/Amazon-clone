import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

import { callAPI } from "../utils/CallApi";

const Search = () => {
  const [suggestions, setSuggestions] = useState(null); //Dynamic search suggestions
  const [searchTerm, setSearchTerm] = useState("Something"); //Capture the search term as the user is typing

  const getSuggestions = () => {
    callAPI(`data/suggestions.json`).then(suggestionResults => {
      setSuggestions(suggestionResults);
    });
  };

  useEffect(() => {
    getSuggestions();
  }, []);

  return (
    <div className="w-[100%]">
      <div className="flex items-center h-10 bg-amazonclone-yellow rounded">
        <select className="p-2 bg-gray-300 text-black border text-xs xl:text-sm">
          <option>All</option>
          <option>Deals</option>
          <option>Amazon</option>
          <option>Fashion</option>
          <option>Computers</option>
          <option>Home</option>
          <option>Mobiles</option>
        </select>
        <input
          className="flex grow items-center h-[100%] rounded-l text-black"
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button className="w-[45px]">
          <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900" />
        </button>
      </div>
      {suggestions && <div></div>}
    </div>
  );
};

export default Search;
