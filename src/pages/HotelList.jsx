import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HotelCard from "../components/HotelCard";
import FilterPanel from "../components/FilterPanel";
import Loader from "../components/Loader";

function HotelList() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const city = params.get("city");

  // Fetch hotels dynamically
  useEffect(() => {
   fetch(import.meta.env.BASE_URL + "hotels.json")
  .then(res => res.json())
  .then(data => {
    setHotels(data);
    setLoading(false);
  })
  .catch(err => {
    console.error("Error fetching hotels:", err);
    setLoading(false);
  });
  }, []);

  // Filter hotels based on city, price, rating
  const filteredHotels = hotels.filter((hotel) => {
    const cityMatch = city
      ? hotel.city.toLowerCase().includes(city.toLowerCase())
      : true;
    const priceMatch = price ? hotel.price <= price : true;
    const ratingMatch = rating ? hotel.rating >= rating : true;

    return cityMatch && priceMatch && ratingMatch;
  });

  if (loading) return <Loader />;

  return (
    <div className="hotel_list_container">
      <FilterPanel setPrice={setPrice} setRating={setRating} />

      <div className="hotel_grid">
        {filteredHotels.length > 0 ? (
          filteredHotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))
        ) : (
          <h2>No Hotels Found</h2>
        )}
      </div>
    </div>
  );
}

export default HotelList;