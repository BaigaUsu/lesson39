 const form = document.getElementById('registration-form')

 form.addEventListener('submit', (event) => {
    event.preventDefault();
    const elemsData = {
        fullname: {
            pattern: /[a-z]+ [a-z]+/i,
            message: `ФИО должно содержать как минимум два слова из русских или английских букв, с обязательным пробелом между ними`
        },
        contact: {
            pattern: /^[a-z0-9.]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
            message: `Пожалуйста, введите корректный адрес электронной почты.`
        },
        password: {
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=])[A-Za-z\d!@#$%^&*()_+\-=]{8,}$/,
            message: `Пароль должен содержать как минимум одну заглавную букву, одну строчную букву, одну цифру и один специальный символ, и быть не менее 8 символов длиной.`
        },
    }
    let isValid = true

    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach(errorMessage => errorMessage.remove());

    Object.entries(elemsData).forEach((item) => {
        const [name, {pattern, message}] = item
        const elem = form.elements[name]
        if (pattern) {
            const isValidElement = pattern.test(elem.value)
            if (!isValidElement) {
                elem.classList.add('error')
                isValid = false;
                displayErrorMessage(elem, message)
            } else {
                elem.classList.remove('error')

            }
        };
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
     function displayErrorMessage(elem, message) {
        const errorMessageElement = document.createElement('div');
        errorMessageElement.textContent = message;
        errorMessageElement.classList.add('error-message');
        elem.parentNode.insertBefore(errorMessageElement, elem.nextSibling);

        const removeErrorMessage = () => {
            if (elem.value.match(elem.getAttribute('pattern'))) {
                errorMessageElement.remove();
                elem.classList.remove('error');
                elem.removeEventListener('input', removeErrorMessage);
            }
        };

        elem.addEventListener('input', removeErrorMessage);
    }
 })



