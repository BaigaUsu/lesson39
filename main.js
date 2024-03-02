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
        password: {},
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
    })
 })

