export const handlePayment = (price, navigate) => {

const options = {

key: import.meta.env.VITE_RAZORPAY_KEY,

amount: price * 100,   // dynamic amount (rupees → paise)

currency: "INR",

name: "Booking Clone",

description: "Hotel Booking Payment",

handler: function (response) {

alert("Payment Successful")

console.log(response)

sendMail()

navigate("/success")

},

prefill: {

name: "Customer",

email: "customer@email.com",

contact: "9000000000"

},

theme: {

color: "#003580"

}

}

const paymentObject = new window.Razorpay(options)

paymentObject.open()

}

function sendMail(){
console.log("Booking confirmation mail sent")
}