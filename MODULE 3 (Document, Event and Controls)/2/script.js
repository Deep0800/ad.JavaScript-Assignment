let buttons = document.querySelectorAll('.alert-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert(`${button.innerText} clicked!`);
    });
});