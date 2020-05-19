function sendMail(contactForm) {
    emailjs.send("gmail", "radio_racoon", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "radio_request": contactForm.radiosummary.value
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error);
            }
        );
   
    return false;

}
