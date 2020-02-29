
window.addEventListener('DOMContentLoaded', () => {
    const advItemsContainer = document.querySelector('.advantages__items'),
          advItems = document.querySelectorAll('.advantages__item'),
          overlay = document.querySelector('.overlay');
          langSubmenu = document.querySelector('.lang__submenu');
          langClose = document.querySelector('.lang__close');
          menu = document.querySelector('.header__menu'),
        menuItem = document.querySelectorAll('.header__link'),
        hamburger = document.querySelector('.hamburger');      
    
    // Перемещение элементов

    advItems.forEach(item => {
        item.addEventListener('click', () => {
            advItemsContainer.prepend(item);
        });
    });

    // Modal

    document.querySelector('.promo__button').addEventListener('click', () => {
        overlay.style.display = 'block';
    });

    document.querySelector('.modal__close').addEventListener('click', () => {
        overlay.style.display = '';
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.style.display = '';
        }
    });

    //выбор языка

    document.querySelector('.lang__check').addEventListener('click', () => {
        langSubmenu.style.display = 'block';
        langClose.style.display = 'block';
    });
    
    document.querySelector('.lang__close').addEventListener('click', () => {
        langSubmenu.style.display = '';
    });

    // валидация name

    document.querySelectorAll('[name="name"]').forEach(item => {
        item.addEventListener('input', (e) => {
            if(e.target.value.length > 32) {
                e.target.value = e.target.value.substring(0,33);
            }
            item.value = item.value.replace(/\d/, '');
        });
    });


    // Checkboxes
    document.querySelectorAll('[type="checkbox"]').forEach(item => {
        item.addEventListener('change', () => {
            document.querySelectorAll('[type="checkbox"]').forEach(checkbox => {
                checkbox.checked = false;
            });
                item.checked = true;
        });
    });

    //Маска ввода phone
    let element = document.getElementById('phone');
    let maskOptions = {
        mask: '+7(000)000-00-00',
        lazy: false
    } 
    let mask = new IMask(element, maskOptions);

    //Hamburger 
   
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__menu_active');
    });


});

