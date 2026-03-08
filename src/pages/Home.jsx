import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import HotelCard from "../components/HotelCard";
import Loader from "../components/Loader";
import "../styles/home.css";

function Home() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <Loader />;

  return (
    <div className="home_container">
      <h1 className="home_title">Find Best Hotels</h1>

      <SearchBar />

      <div className="home_hotels">
        {hotels.slice(0, 3).map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}

export default Home;