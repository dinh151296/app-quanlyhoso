// admin click
let adminElement = document.querySelector('.header__admin');
let adminSelect = document.querySelector('.admin-popup');
adminElement.addEventListener('click', function () {
    adminSelect.classList.toggle('is__open');
});

// aside-menu-left
// let asideMenuItem = document.querySelectorAll('.aside__menu > li');
// asideMenuItem.forEach(item => {
//     item.addEventListener('click', function (e) {
//         item.classList.add('is__open')
//     })
// });