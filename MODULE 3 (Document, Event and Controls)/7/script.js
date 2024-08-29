document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    console.log('Form submitted!');
    console.log('Name:', name);
    console.log('Email:', email);

    alert('Form submitted!');
});