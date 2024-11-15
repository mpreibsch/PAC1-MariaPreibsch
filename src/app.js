const menu = document.querySelector("#menu");
const obrir = document.querySelector("#obrir");
const tancar = document.querySelector("#tancar");

obrir.addEventListener("click",() => {
    menu.classList.add("visible");
});

tancar.addEventListener("click", () => {
    menu.classList.remove("visible");
});


import Swal from 'sweetalert2';

const boto = document.querySelector("#boto");
boto.addEventListener("click", function() {
    Swal.fire({
        title: "Gràcies per participar!",
        icon: "success"
        });
});