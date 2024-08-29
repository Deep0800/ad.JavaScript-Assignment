// Get modal elements
const modal = document.getElementById("myModal");
const openModalBtn = document.querySelector(".open-modal-btn");
const closeBtn = document.getElementById("closeBtn");
const btn = document.querySelectorAll(".btn")

// Open the modal when the button is clicked
openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close the modal when clicking outside of the modal content
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

btn.forEach(button =>{
    button.addEventListener('click', ()=>{
        alert(`${button.innerText} clicked`)
    })
})

