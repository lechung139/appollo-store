const navSlide = ()  => {
    const burger = document.querySelector('header .burger');
    const nav = document.querySelector('header .store-list');
    const navLinks = document.querySelectorAll('header .store-list > li');
    const bodyHTML = document.querySelector('body');

    burger.addEventListener('click', () => {
        nav.classList.toggle('store-list-active');
        bodyHTML.classList.toggle('scroll-none');

        let icon = document.querySelector('header .burger i:last-child');
            icon.classList.toggle("ti-close");
        let switchIcon = document.querySelector('header .burger i:first-child');
            switchIcon.classList.toggle("switch");
    
        let product = document.querySelectorAll('header .store-list .product');
        let insideProduct = document.querySelectorAll('header .store-list .product .inside-product');
        for (let i=0; i<product.length; i++) {
            product[i].addEventListener('click', () => {
                insideProduct[i].classList.toggle('inside-product-active');
                product[i].classList.toggle('product-switch-color');
                for (let j=0; j<product.length; j++) {
                    if (j != i) 
                        product[j].classList.toggle('none-product');
                }
            });
        };
        
        //Animate nav
        navLinks.forEach((link) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = 'navLinkFade 1s';
            }
        });
    });
}

navSlide();