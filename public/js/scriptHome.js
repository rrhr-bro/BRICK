let openingBtn = document.querySelector('#welcomeBtn');
let modal = document.querySelector('.modal');
let closeb = document.querySelector('.icon-close');

let modalUD = document.querySelector('.modalUD');
let closeUD = document.querySelector('#closeUD');
let listings = document.querySelectorAll('.listing');

openingBtn.addEventListener('click', function(){
    modal.classList.add('modal-opened');
});

closeb.addEventListener('click', function(){
    modal.classList.remove('modal-opened');
});

listings.forEach(listing => {
    listing.addEventListener('click', function(){
        modalUD.classList.add('modal-opened');

        let lid = listing.querySelector('#lid');
        let title = listing.querySelector('.title');
        let type = listing.querySelector('#type');
        let city = listing.querySelector('.city');
        let price = listing.querySelector('#price');
        let status = listing.querySelector('#lstatus');
        let dat = listing.querySelector('#publishedAt');
        let desc = listing.querySelector('.description');
        let firstName = listing.querySelector('.firstName');
        let lastName = listing.querySelector('.lastName');
        let email = listing.querySelector('.email');

        document.querySelector('#idPoleUD').value = lid.innerText;
        document.querySelector('#titlePoleUD').value = title.innerText;
        document.querySelector('#typePoleUD').value = type.innerText;
        document.querySelector('#cityPoleUD').value = city.innerText;
        document.querySelector('#pricePoleUD').value = price.innerText;
        document.querySelector('#statusPoleUD').value = status.innerText;
        document.querySelector('#publishedAtPoleUD').value = dat.innerText;
        document.querySelector('#descPoleUD').value = desc.innerText;
        document.querySelector('#firstNamePole').value = firstName.innerText;
        document.querySelector('#lastNamePole').value = lastName.innerText;
        document.querySelector('#emailPoleUD').value = email.innerText;
    });
});
// закрытие окна
closeUD.addEventListener('click', function(){
    modalUD.classList.remove('modal-opened');
});