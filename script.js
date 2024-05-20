document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const wpnum = document.getElementById('wpnum').value;
    async function logUserIP() {
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();

            return data.ip;
        } catch (error) {
            console.error('Error fetching IP address:', error);
        }
    }
    logUserIP().then(ip => {
        emailjs.send("service_518ymj8", "template_ug00mib", {
            from_name: name,
            from_email: email,
            from_wp: wpnum,
            from_ip: ip,
            message: message
        })
    })
    .then((response) => {
        alert('Thank you for contacting us!');
    }, (error) => {
        alert('An error occurred while sending the email. Please try again later.');
    });
});