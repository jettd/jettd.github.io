document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.getElementById('order-form');
    const now = new Date();
    const disableTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 19, 15, 0, 0);
    let orderingDisabled = false;

    if (now >= disableTime) {
        disableOrdering();
    }

    orderForm.addEventListener('submit', function(event) {
        event.preventDefault();

        if (orderingDisabled) {
            alert('Online ordering is currently disabled.');
        } else {
            // Process the order and integrate the payment gateway
        }
    });

    // Add this function to the control panel for the website host
    function toggleOrdering() {
        orderingDisabled = !orderingDisabled;
    }

    function disableOrdering() {
        orderingDisabled = true;
    }
});
