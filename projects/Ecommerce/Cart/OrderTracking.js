document.addEventListener("DOMContentLoaded", () => {
    // Generate a random Order ID
    const orderIdElement = document.getElementById("orderId");
    const randomId = "ORD" + Math.floor(Math.random() * 1000000000);
    orderIdElement.innerText = "#" + randomId;

    // Simulate progress (just for visual effect)
    setTimeout(() => {
        document.getElementById("step2").classList.add("active");
    }, 1500);
});