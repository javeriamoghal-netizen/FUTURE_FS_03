function scrollToBooking() {
  document.getElementById("booking").scrollIntoView({
    behavior: "smooth"
  });
}

document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;

  if (!name || !phone || !service || !date) {
    alert("Please fill all details");
    return;
  }

  alert(`Booking Confirmed ✅
Name: ${name}
Service: ${service}
Date: ${date}`);

  this.reset();
});