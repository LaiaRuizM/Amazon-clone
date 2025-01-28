import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

import { callAPI } from "../utils/CallApi";

const Search = () => {
  const [suggestions, setSuggestions] = useState(null); //Dynamic search suggestions
  const [searchTerm, setSearchTerm] = useState(""); //Capture the search term as the user is typing
  const [category, setCategory] = useState("All"); //Storing the currently selected category for keeping track of it
  const navigate = useNavigate();

  const onHandleSubmit = e => {
    e.preventDefault();

    navigate({
      //This will define where we're moving to and it's also going to allow us to take some special parameters
      pathname: "search",
      search: `${createSearchParams({
        //This is going to allow us to build some search params that we're going to pass onto our SearchResults component
        category: `${category}`,
        searchTerm: `${searchTerm}`,
      })}`,
    });

    setSearchTerm("");
    setCategory("All");
  };

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
        <select
          onChange={e => setCategory(e.target.value)}
          className="p-2 bg-gray-300 text-black border text-xs xl:text-sm">
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
        <button onClick={onHandleSubmit} className="w-[45px]">
          <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900" />
        </button>
      </div>
      {suggestions && (
        <div className="bg-white text-black w-full z-40 absolute">
          {suggestions
            .filter(suggestion => {
              const currentSearchTerm = searchTerm.toLowerCase(); //Retrieve the search term
              const title = suggestion.title.toLowerCase(); // Extract the title from the current suggestion and convert it to lowercase for case-insensitive comparison
              return (
                currentSearchTerm &&
                title.startsWith(currentSearchTerm) &&
                title !== currentSearchTerm //Exclude suggestions that are an exact match with the search term: ["apple", "apple pie", "apple juice"] -> "apple pie" and "apple juice" are filtered in. "apple" is excluded because it matches exactly.
              );
            })
            .slice(0, 10) //Return the first ten elements
            .map(
              (
                suggestion //Render each suggestion as a clickable div with its title
              ) => (
                <div
                  key={suggestion.id}
                  //Set the clicked suggestion as the new search term:
                  onClick={() => setSearchTerm(suggestion.title)}>
                  {suggestion.title}
                </div>
              )
            )}
        </div>
      )}
    </div>
  );
};

export default Search;
