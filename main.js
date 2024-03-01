 const form = document.getElementById('registration-form')

 form.addEventListener('submit', (event) => {
    event.preventDefault();
    const elemsData = {
        fullname: {
            pattern: /[a-z]+ [a-z]+/i
        },
        contact: {},
        password: {},
    }
    Object.entries(elemsData).forEach((item) => {
        const [name, {pattern}] = item
        const elem = form.elements[name]
        if (pattern) {
            const isValid = pattern.test(elem.value)
        };

    })
 })
