import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { handlePayment } from "../utils/razorpay";
import "../styles/details.css";
import Loader from "../components/Loader";

function HotelDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [hotel, setHotel] = useState(null); // store the single hotel
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + "hotels.json")
      .then(res => res.json())
      .then(data => {
        // find the hotel with matching id
        const foundHotel = data.find(h => h.id === parseInt(id));
        setHotel(foundHotel);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching hotels:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader />;

  if (!hotel)
    return (
      <div className="details_container">
        <h2>Hotel not found</h2>
      </div>
    );

  return (
    <div className="details_container">
      <div className="details_card">
        <img className="details_img" src={import.meta.env.BASE_URL + hotel.image} alt={hotel.name} />

        <div className="details_info">
          <h2 className="details_title">{hotel.name}</h2>
          <p className="details_city">📍 {hotel.city}</p>
          <p className="details_price">₹ {hotel.price} / night</p>
          <p className="details_rating">⭐ {hotel.rating}</p>

          <button
            onClick={() => handlePayment(hotel.price, navigate)}
            className="book_btn"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotelDetails;