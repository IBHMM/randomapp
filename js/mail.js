document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const notyf = new Notyf();

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const errors = [];

        if (!name) errors.push("Adınızı daxil edin.");
        if (!email || !validateEmail(email))
            errors.push("Etibarlı bir email daxil edin.");
        if (!phone || !validatePhone(phone))
            errors.push("Etibarlı bir telefon nömrəsi daxil edin.");
        if (!subject) errors.push("Mövzu başlığını daxil edin.");
        if (!message) errors.push("Mətn daxil edin.");

        if (errors.length > 0) {
            notyf.error("Bütün sahələri doldurduğunuzdan əmin olun");
            return;
        }

        const formData = {
            name: name,
            from_name: email,
            email: email,
            phone: phone,
            subject: subject,
            message: message,
            reply_to: email,
        };

        // Initialize and send email in one place
        emailjs.init("4WUKHoARnDMkiPGzH"); 
        emailjs
            .send("service_bye4d6s", "template_1mva8rs", formData)
            .then((response) => {
                console.log("Email sent successfully:", response.status, response.text);
                notyf.success("Mesajınız göndərildi");
                form.reset();
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                notyf.error(
                    "Mesaj göndərmək mümkün olmadı. Zəhmət olmasa yenidən cəhd edin."
                );
            });
    });

    // Helper functions
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePhone(phone) {
        const phoneRegex = /^[0-9\s+()-]+$/;
        return phoneRegex.test(phone);
    }
});
