 const form = document.getElementById('registration-form')

 form.addEventListener('submit', (event) => {
    const elemsData = {
        fullname: {},
        contact: {},
        password: {},
    }
    event.preventDefault();
    console.log(event);
 })
