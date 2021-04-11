var burgerIsActive = false;

function setBurger(){
    if (window.innerWidth < 768) {
        deactivateBurger();
    }
}

function toggleBurger() {

    const burger = document.querySelector('.burger-lines');

    console.log(burger);

    window.addEventListener('resize', () => {

        if (window.innerWidth >= 768) {
            document.querySelector('.nav-links').classList.remove('hidden');
        }
        else {
            document.querySelector('.nav-links').classList.add('hidden');
        }

    });

    burger.addEventListener('click', () => {

        console.log("burger");
        burger.classList.toggle('active');

        if (burgerIsActive) {
            deactivateBurger();
        }
        else {
            activateBurger();
        }

    });

}

function activateBurger(){
    const burger_1 = document.querySelector('.burger-line-1');
    const burger_2 = document.querySelector('.burger-line-2');
    const burger_3 = document.querySelector('.burger-line-3');
    burger_1.style.animation = 'activate-burger-1 0.5s ease forwards';
    burger_2.style.animation = 'activate-burger-2 0.5s ease forwards';
    burger_3.style.animation = 'activate-burger-3 0.5s ease forwards';
    document.querySelector('.nav-links').classList.remove('hidden');
    burgerIsActive = true;
}

function deactivateBurger(){
    const burger_1 = document.querySelector('.burger-line-1');
    const burger_2 = document.querySelector('.burger-line-2');
    const burger_3 = document.querySelector('.burger-line-3');
    burger_1.style.animation = 'deactivate-burger-1 0.5s ease forwards';
    burger_2.style.animation = 'deactivate-burger-2 0.5s ease forwards';
    burger_3.style.animation = 'deactivate-burger-3 0.5s ease forwards';
    console.log(window.innerWidth);
    if (window.innerWidth < 768) document.querySelector('.nav-links').classList.add('hidden');
    burgerIsActive = false;
}

setBurger();
toggleBurger();