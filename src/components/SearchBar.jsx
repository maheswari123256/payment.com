import "../styles/searchbar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  const navigate = useNavigate();
  const [city, setCity] = useState("");

  const handleSearch = () => {
    const trimmedCity = city.trim();
    if (trimmedCity) {
      navigate(`/hotels?city=${encodeURIComponent(trimmedCity)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="search_container">
      <div className="input_wrapper">
        <FaSearch className="search_icon" />
        <input
          type="text"
          placeholder="Search City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress} // allow Enter key search
        />
      </div>

      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;