//template_9brjj5j
//service_5pfyxcu
//OGVq5jbZr4x4aaLdm

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
            "service_5pfyxcu",
            "template_9brjj5j",
            event.target,
            "OGVq5jbZr4x4aaLdm"
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly on kzhang0826@gmail.com"
            );
        })
}