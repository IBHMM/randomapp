document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const notyf = new Notyf();

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        const submitButton = document.querySelector("#mailbutton");
        const buttonLoader = document.querySelector("#mailbutton");
        submitButton.disabled = true;

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // const errors = [];

        // if (!name) errors.push("Adınızı daxil edin.");
        // if (!email || !validateEmail(email))
        //     errors.push("Etibarlı bir email daxil edin.");
        // if (!phone || !validatePhone(phone))
        //     errors.push("Etibarlı bir telefon nömrəsi daxil edin.");
        // if (!subject) errors.push("Mövzu başlığını daxil edin.");
        // if (!message) errors.push("Mətn daxil edin.");

        // if (errors.length > 0) {
        //     notyf.error("All fields require");
        //     resetButton(submitButton, "Send");
        //     return;
        // }

        const formData = {
            name: name,
            from_name: email,
            email: email,
            phone: phone,
            subject: subject,
            message: message,
            reply_to: email,
        };

        // Initialize EmailJS
        // emailjs.init("4WUKHoARnDMkiPGzH");

        // Animate the button loader
        buttonLoader.classList.add("spin-animation");

        // emailjs
        //     .send("service_bye4d6s", "template_1mva8rs", formData)
        //     .then((response) => {
        //         console.log("Email sent successfully:", response.status, response.text);
        //         notyf.success("Message sent successfully");

        //         // Success animation
        //         submitButton.innerHTML = `<span class="success-animation">✔</span> Sent!`;
        //         setTimeout(() => resetButton(submitButton, "Send"), 2000);

        //         form.reset();
        //     })
        //     .catch((error) => {
        //         console.error("EmailJS Error:", error);
        //         notyf.error("Message can't send, Please try again");
        //         resetButton(submitButton, "Send");
        //     })
        //     .finally(() => {
        //         buttonLoader.classList.remove("spin-animation");
        //     });
        setTimeout(() => {
            notyf.success("Message sent successfully");
            resetButton(submitButton, "Send");
            form.reset();
            buttonLoader.classList.remove("spin-animation");
        }, 2000);
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

    function resetButton(button, text) {
        button.innerHTML = text;
        button.disabled = false;
    }
});
