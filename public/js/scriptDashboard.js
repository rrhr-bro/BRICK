// фильтрация
let closeF = document.querySelector('#closeF');
let openingFBtn = document.querySelector('#filter1Btn');
let modalFilter = document.querySelector('#modalFilter');
let filterCancelBtn = document.querySelector('#filterCancelBtn');
// создание
let closeC = document.querySelector('#closeC');
let openingCBtn = document.querySelector('#create1Btn');
let create2Btn = document.querySelector('#create2Btn');
let modalCreate = document.querySelector('#modalCreate');

let cityPoleC = document.querySelector('#cityPoleC');
let pricePoleC = document.querySelector('#pricePoleC');
let descPoleC = document.querySelector('#descPoleC');

// обновление и удаление
let modalUD = document.querySelector('#modalUD');
let closeUD = document.querySelector('#closeUD');
let listings = document.querySelectorAll('.listing');
let deleteBtn = document.querySelector('#deleteBtn');
let updateBtn = document.querySelector('#updateBtn');

let cityPoleUD = document.querySelector('#cityPoleUD');
let pricePoleUD = document.querySelector('#pricePoleUD');
let descPoleUD = document.querySelector('#descPoleUD');

// проверка значений поля город
let cityPoles = document.querySelectorAll('.cityPoles')

cityPoles.forEach(cityPole => {
    cityPole.addEventListener("keydown", function(e) {
        const allowedKeys = ["Backspace", "ArrowLeft", "ArrowRight", "Delete", "Spacebar", "Shift"];

        if(!(/[А-ЯЁа-яё]/.test(e.key) || /[-]/.test(e.key) || allowedKeys.includes(e.key))){
            e.preventDefault();}
    });
    cityPole.addEventListener('input', function() {
        if (!(cityPole.value.length === 0)) {
            cityPole.value = cityPole.value.charAt(0).toUpperCase() + cityPole.value.slice(1).toLowerCase();
        }
    });
})

//проверка заполнения формы
function checkPoles() {
    create2Btn.disabled = (cityPoleC.value === '' || pricePoleC.value === '' || descPoleC.value === '')
    updateBtn.disabled = (cityPoleUD.value === '' || pricePoleUD.value === '' || descPoleUD.value === '')
    deleteBtn.disabled = (cityPoleUD.value === '' || pricePoleUD.value === '' || descPoleUD.value === '')
}

cityPoleC.addEventListener('input', checkPoles);
pricePoleC.addEventListener('input', checkPoles);
descPoleC.addEventListener('input', checkPoles);
cityPoleUD.addEventListener('input', checkPoles);
pricePoleUD.addEventListener('input', checkPoles);
descPoleUD.addEventListener('input', checkPoles);

checkPoles();

// заполнение окна обновление и удаление текущим обновлением
// открытие окна
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

        document.querySelector('#idPoleUD').value = lid.innerText;
        document.querySelector('#titlePoleUD').value = title.innerText;
        document.querySelector('#typePoleUD').value = type.innerText;
        document.querySelector('#cityPoleUD').value = city.innerText;
        document.querySelector('#pricePoleUD').value = price.innerText;
        document.querySelector('#statusPoleUD').value = status.innerText;
        document.querySelector('#publishedAtPoleUD').value = dat.innerText;
        document.querySelector('#descPoleUD').value = desc.innerText;
    });
});
// закрытие окна обновление и удаление
closeUD.addEventListener('click', function(){
    modalUD.classList.remove('modal-opened');
});

// открытие и закрытие окна для фильтрации
openingFBtn.addEventListener('click', function(){
    modalFilter.classList.add('modal-opened');
});

closeF.addEventListener('click', function(){
    modalFilter.classList.remove('modal-opened');
});
// сброс фильтрации
filterCancelBtn.addEventListener('click', function(){
    window.location.href = '/user/reset';
    modalFilter.classList.remove('modal-opened');
});

// открытие и закрытие окна для создания
openingCBtn.addEventListener('click', function(){
    modalCreate.classList.add('modal-opened');
});

closeC.addEventListener('click', function(){
    modalCreate.classList.remove('modal-opened');
});