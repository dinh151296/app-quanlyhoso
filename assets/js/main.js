// admin click

let adminElement = document.querySelector('.header__admin');
let adminSelect = document.querySelector('.admin-popup');
adminElement.addEventListener('click', function () {
    adminSelect.classList.toggle('is__open');
});