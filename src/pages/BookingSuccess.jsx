import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/bookingSuccess.css"  // Import the CSS

function BookingSuccess() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/")
    }, 4000) // 4 seconds

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="success_page">
      <h1 className="success_title">🎉 Booking Successful</h1>
      <p className="success_text">Your hotel booking is confirmed</p>
      <p className="success_text redirect_text">Redirecting to home page...</p>
    </div>
  )
}

export default BookingSuccess