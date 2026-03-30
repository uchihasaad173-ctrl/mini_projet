

function updatePrice() {
      dateError.style.display = "none";
      start.classList.remove("error-input");
      end.classList.remove("error-input");

      if (start.value && end.value) {

        let startDate = new Date(start.value);
        let endDate = new Date(end.value);

        if (endDate > startDate) {

          let days = (endDate - startDate) / (1000 * 60 * 60 * 24);
          let finalPrice = days * pricePerDay;

          total.innerHTML = "Total: $" + finalPrice;
        } else if (endDate < startDate) {
          dateError.style.display = "block";
          start.classList.add("error-input");
          end.classList.add("error-input");
          total.innerHTML = "Total: $90";
        }
      }
    }

    function bookNow() {
      if (start.value && end.value) {
        let startDate = new Date(start.value);
        let endDate = new Date(end.value);

        if (endDate <= startDate) {
          dateError.style.display = "block";
          start.classList.add("error-input");
          end.classList.add("error-input");
          return;
        }
      }

      let car ="supra";
      let startVal = document.getElementById("startDate").value;
      let endVal = document.getElementById("endDate").value;
      
      let price = 90; 
      let url = "booking.html?car=" + car
        + "&start=" + startVal
        + "&end=" + endVal
        + "&price=" + price;

      window.location.href = url;
    }
