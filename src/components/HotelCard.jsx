import { Link } from "react-router-dom"
import "../styles/hotelcard.css"

function HotelCard({hotel}){

return(

<div className="hotel_card">

<img src={import.meta.env.BASE_URL + hotel.image} />

<h3>{hotel.name}</h3>

<p>{hotel.city}</p>

<p>₹{hotel.price}</p>

<p>⭐ {hotel.rating}</p>

<Link to={`/hotel/${hotel.id}`}>
<button>View Details</button>
</Link>

</div>

)

}

export default HotelCard