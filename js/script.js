// validation check

(function() {
    "use strict";
    var forms = document.querySelectorAll(".needs-validation");
    Array.prototype.slice.call(forms).forEach(function(form) {
        form.addEventListener("submit", function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }


            form.classList.add("was-validated");
        }, false)
    });
})();

// submit form fields to google sheet
const form = document.querySelector("#form");
const submitButton = document.querySelector("#submit");
const scriptURL = "https://script.google.com/macros/s/AKfycbygVsr2M635I9VU3PBIGGNFqGieIdVkiPHZ5XTUd3ISHQS-FmIhUxZ4_Gb3AjqWj4SY/exec";

form.addEventListener("submit", (e) => {

    if (form.checkValidity()) {
        submitButton.disabled = true;
        e.preventDefault();
        let requestBody = new FormData(form);
        fetch(scriptURL, {
            method: "POST",
            body: requestBody
        })
        .then((response) => {
          
            submitButton.disabled = false;
            window.location.href='submit.html';
          
        })
        .catch((error) => {
            alert("Error!", error.message);
            submitButton.disabled = false;
        });
    }
});



