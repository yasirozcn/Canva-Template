
var navbar = $('.navbar');
window.addEventListener('scroll', function() {
    navbar.classList.remove('scrollUp');
    if (window.scrollY > 10 && window.scrollY < 400) {
        navbar.classList.remove('scrollUp');
        navbar.classList.add('scrollDown');
    } else if (window.scrollY > 380) {
        navbar.classList.remove('scrollUp');
        navbar.classList.remove('scrollDown');
        navbar.classList.add('scrollDownSecond');
    } else {
        navbar.classList.remove('scrollDown');
        navbar.classList.remove('scrollDownSecond');
        navbar.classList.add('scrollUp');
    }
});


    var responsiveButton = $('#responsiveButton');
    var retinaButton = $('#retinaButton');
    var performanceButton = $('#performanceButton');
    var bootstrapButton = $('#bootstrapButton');
    var themeButton = $('#themeButton');
    var responsiveTab = $('#responsive');
    var retinaTab = $('#retina');
    var performanceTab = $('#performance');
    var bootstrapTab = $('#bootstrap');
    var themeTab = $('#theme');
    var navigations = document.querySelectorAll('.navigation-info');
    var buttons = document.querySelectorAll('.tablinks');
    responsiveButton.on('click', function() {
        buttons.forEach(function(button) {
            button.classList.remove('active');
        });
        responsiveButton[0].classList.add('active');
        navigations.forEach(function(navigation) {
            navigation.classList.remove('block');
            navigation.classList.add('none');
        });
        responsiveTab[0].classList.remove('none');
        responsiveTab[0].classList.add('block');
    });
    retinaButton.on('click', function() {
        buttons.forEach(function(button) {
            button.classList.remove('active');
        });
        retinaButton[0].classList.add('active');
        navigations.forEach(function(navigation) {
            navigation.classList.remove('block');
            navigation.classList.add('none');
        });
        retinaTab[0].classList.remove('none');
        retinaTab[0].classList.add('block');
    });
    performanceButton.on('click', function() {
        buttons.forEach(function(button) {
            button.classList.remove('active');
        });
        performanceButton[0].classList.add('active');
        navigations.forEach(function(navigation) {
            navigation.classList.remove('block');
            navigation.classList.add('none');
        });
        performanceTab[0].classList.remove('none');
        performanceTab[0].classList.add('block');
    });
    bootstrapButton.on('click', function() {
        buttons.forEach(function(button) {
            button.classList.remove('active');
        });
        bootstrapButton[0].classList.add('active');
        navigations.forEach(function(navigation) {
            navigation.classList.remove('block');
            navigation.classList.add('none');
        });
        bootstrapTab[0].classList.remove('none');
        bootstrapTab[0].classList.add('block');
    });
    themeButton.on('click', function() {
        buttons.forEach(function(button) {
            button.classList.remove('active');
        });
        themeButton[0].classList.add('active');
        navigations.forEach(function(navigation) {
            navigation.classList.remove('block');
            navigation.classList.add('none');
        });
        themeTab[0].classList.remove('none');
        themeTab[0].classList.add('block');
    });


    let value1 = document.querySelector('.num-1');
    let value2 = document.querySelector('.num-2');
    value1.innerHTML = 0;
    value2.innerHTML = 0;
    for (let i = 0; i <= 15065897; i += 18363) {
        setTimeout(function() {
            value1.innerHTML = i;
        }, 0.0001 * i);
    }
    for (let i = 0; i <= 18465; i++) {
        setTimeout(function() {
            value2.innerHTML = i;
        }, 0.1 * i);
    }


    var hamburger = document.querySelector('.hamburger');
    var navbar = document.querySelector('.navbar');
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('hactive');
        navbar.classList.toggle('hactivebottom');
    });


    var goTop = document.querySelector('.goTop');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
            goTop.style.display = 'block';
        } else {
            goTop.style.display = 'none';
        }
    });
    goTop.addEventListener('click', function() {
        window.scrollTo(0, 0);
    });


    var navInput = document.querySelector('.nav-input');
    var navSearch = document.querySelector('.fa-search');
    var navCancel = document.querySelector('.fa-times');
    var navbar = document.querySelector('.navbar');
    navSearch.addEventListener('click', function() {
        navbar.style.display = 'none';
        navInput.style.display = 'block';
    });
    navCancel.addEventListener('click', function() {
        navbar.style.display = 'flex';
        navInput.style.display = 'none';
    });


    var shoppingCard = document.querySelector('.shopping-card');
    var shoppingCardButton = document.querySelector('.fa-shopping-bag');
    shoppingCardButton.addEventListener('click', function() {
        shoppingCard.classList.toggle('shopping-card-active');
    });
