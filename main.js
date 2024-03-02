 const form = document.getElementById('registration-form')

 form.addEventListener('submit', (event) => {
    event.preventDefault();
    const elemsData = {
        fullname: {
            pattern: /[a-z]+ [a-z]+/i
        },
        contact: {
            pattern: /^[a-z0-9.]+@[a-z0-9.-]+\.[a-z]{2,}$/i
        },
        password: {
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=])[A-Za-z\d!@#$%^&*()_+\-=]{8,}$/
        },
    }

    Object.entries(elemsData).forEach((item) => {
        const [name, {pattern}] = item
        const elem = form.elements[name]
        if (pattern) {
            const isValid = pattern.test(elem.value)
            if (!isValid) {
                elem.classList.add('error')
            } else {
                elem.classList.remove('error')
            }
        };
        return isValid = true
    })
    if (isValid) {
        form.style.display = 'none';

        const fullname = form.elements['fullname'].value;
        const contact = form.elements['contact'].value;
        const messageText = `Здравствуйте, ${fullname}! Мы свяжемся с вами по email: ${contact}`;

        const messageElement = document.createElement('div');
        messageElement.textContent = messageText;
        form.parentNode.insertBefore(messageElement, form.nextSibling);
    }
 })

