

const pricePerDay = 90;

const start = document.getElementById("startDate");
const end = document.getElementById("endDate");
const total = document.getElementById("total");


start.onchange = updatePrice;
end.onchange = updatePrice;

function updatePrice() {

    if (start.value && end.value) {

        let startDate = new Date(start.value);
        let endDate = new Date(end.value);

        if (endDate > startDate) {

            let days = (endDate - startDate) / (1000 * 60 * 60 * 24);
            let finalPrice = days * pricePerDay;

            total.innerHTML = "Total: $" + finalPrice;
        }
    }
}


function bookNow() {

    let car = encodeURIComponent("BMW 3 Series");
    let start = document.getElementById("startDate").value;
    let end = document.getElementById("endDate").value;

    let price = 100; // price per day OR total (your choice)

    let url = "booking.html?car=" + car 
        + "&start=" + start 
        + "&end=" + end
        + "&price=" + price;

    window.location.href = url;
}