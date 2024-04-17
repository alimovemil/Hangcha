let swiperivideo = new Swiper('.i-video', {
    slidesPerView: 'auto',
    spaceBetween: 13,
    centeredSlides: true,
    centeredSlidesBounds: true,
    speed: 800,
    loop: true,
    navigation: {
        prevEl: '.i-video .i-page.next',
        nextEl: '.i-video .i-page.prev',
    },
    pagination: {
        el: '.i-video .swiper-pagination',
        clickable: true,
    },
});

document.addEventListener("DOMContentLoaded", function () {
    let pageVideo = document.querySelectorAll(".bf");

    pageVideo.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            this.style.display = "none";

            let videoParent = this.closest('.swiper-slide');

            let playDiv = videoParent.querySelector('.play');

            playDiv.style.display = "block";
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let listItems = document.querySelectorAll('.ul-list li');

    listItems.forEach(function (item) {
        let hoverBlock = item.querySelector('.child-main');
        let bgBlock = item.querySelector('.child-bg');
        let isHovered = false;

        item.addEventListener('mouseover', function () {
            hoverBlock.style.display = 'block';
            bgBlock.style.height = hoverBlock.offsetHeight + 'px';
            hoverBlock.style.transition = 'opacity 0.5s ease';
            bgBlock.style.transition = 'height 0.5s ease';
            hoverBlock.style.opacity = '1';
            bgBlock.classList.add('border-visible');
            isHovered = true;
        });

        item.addEventListener('mouseleave', function () {
            hoverBlock.style.transition = 'opacity 0.5s ease';
            bgBlock.style.transition = 'height 0.5s ease';
            hoverBlock.style.opacity = '0';
            setTimeout(function () {
                if (!isHovered) {
                    hoverBlock.style.display = 'none';
                    bgBlock.style.height = '0';
                }
            }, 500);
            bgBlock.classList.remove('border-visible');
            isHovered = false;
        });
    });
});


let swiperiseries = new Swiper('.i-series', {
    slidesPerView: 4,
    spaceBetween: 0,
    speed: 800,
    loop: true,
    navigation: {
        prevEl: '.i-series .i-page.next',
        nextEl: '.i-series .i-page.prev',
    },
    pagination: {
        el: '.i-series .swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
        1440: {
            slidesPerView: 4
        },
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    const links = document.querySelectorAll(".ul-list .link-group");
    const searchInput = document.querySelector(".header-search input");
    const logoImg = document.querySelector(".header-item-img");
    const logoSvg = document.querySelector(".header-item-svg");
    const logoScope = document.querySelector(".header-item-logo");
    const logoScopeImg = document.querySelector(".header-item-scope");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            header.style.backgroundColor = "#ffffff";
            links.forEach(link => {
                link.style.color = "#000000";
            });
            searchInput.style.borderRadius = "4px";
            searchInput.style.background = "rgba(0, 0, 0, 0.1)";
            searchInput.style.color = "#000000";
            logoImg.style.display = "none";
            logoSvg.style.display = "block";
            logoScope.style.display = "none"
            logoScopeImg.style.display = "block"
        } else {
            header.style.backgroundColor = "transparent";
            links.forEach(link => {
                link.style.color = "#ffffff";
            });
            searchInput.style.borderRadius = "";
            searchInput.style.background = "";
            searchInput.style.color = "#ffffff";
            logoImg.style.display = "block";
            logoSvg.style.display = "none";
            logoScope.style.display = "block"
            logoScopeImg.style.display = "none"
        }
    });
});


let swiperbanner = new Swiper('.banner-item', {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    centeredSlidesBounds: true,
    speed: 800,
    loop: true,
    navigation: {
        prevEl: '.banner-item .i-page.next',
        nextEl: '.banner-item .i-page.prev',
    },
    pagination: {
        el: '.banner-item .swiper-pagination',
        clickable: true,
    },
});

document.addEventListener("DOMContentLoaded", function() {
    let phoneNav = document.querySelector(".phone-nav");
    let phoneNavMenu = document.querySelector(".phone-nav-mn");

    phoneNav.addEventListener("click", function() {
        if (phoneNav.classList.contains("active")) {
            phoneNav.classList.remove("active");
            phoneNavMenu.style.opacity = 0;
            phoneNavMenu.style.display = "none";
        } else {
            phoneNav.classList.add("active");
            phoneNavMenu.style.opacity = 1;
            phoneNavMenu.style.display = "block";
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    let backButtons = document.querySelector('.phone-item-link .child-item.two .back-btn');
    let productList = document.querySelector('.phone-item-link .child-item.two');
    let productButton = document.querySelector('.phone-item-link button:nth-child(2)');

    productButton.addEventListener('click', function() {
        let buttonList = document.querySelector('.phone-item-link .btn-link-item');
        buttonList.classList.add('fade-out');
        setTimeout(function() {
            buttonList.style.display = 'none';
            buttonList.classList.remove('fade-out');
        }, 400);

        productList.style.display = 'block';
    });

    backButtons.addEventListener('click', function() {
        productList.classList.add('fade-out');
        setTimeout(function() {
            productList.style.display = 'none';
            productList.classList.remove('fade-out');
        }, 400);

        let buttonList = document.querySelector('.phone-item-link .btn-link-item');
        buttonList.style.display = 'flex';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let sphereButton = document.querySelector('.phone-item-link button:nth-child(3)');
    let productList = document.querySelector('.phone-item-link .child-item.two');
    let backButton = document.querySelector('.phone-item-link .child-item.two a');

    sphereButton.addEventListener('click', function() {
        let buttonList = document.querySelector('.phone-item-link .btn-link-item');
        buttonList.classList.add('fade-out');
        setTimeout(function() {
            buttonList.style.display = 'none';
            buttonList.classList.remove('fade-out');
        }, 400);

        productList.style.display = 'block';
    });

    backButton.addEventListener('click', function() {
        productList.classList.add('fade-out');
        setTimeout(function() {
            productList.style.display = 'none';
            productList.classList.remove('fade-out');
        }, 400);

        let buttonList = document.querySelector('.phone-item-link .btn-link-item');
        buttonList.style.display = 'flex';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let backButtonService = document.querySelector('.phone-item-link .child-item.three a');
    let productListService = document.querySelector('.phone-item-link .child-item.three');
    let serviceButton = document.querySelector('.phone-item-link button:nth-child(4)');

    serviceButton.addEventListener('click', function() {
        let buttonList = document.querySelector('.phone-item-link .btn-link-item');
        buttonList.classList.add('fade-out');
        setTimeout(function() {
            buttonList.style.display = 'none';
            buttonList.classList.remove('fade-out');
        }, 400);

        productListService.style.display = 'block';
    });

    backButtonService.addEventListener('click', function() {
        productListService.classList.add('fade-out');
        setTimeout(function() {
            productListService.style.display = 'none';
            productListService.classList.remove('fade-out');
        }, 400);

        let buttonList = document.querySelector('.phone-item-link .btn-link-item');
        buttonList.style.display = 'flex';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let backButtonCompany = document.querySelector('.phone-item-link .child-item.four a');
    let productListCompany = document.querySelector('.phone-item-link .child-item.four');
    let companyButton = document.querySelector('.phone-item-link button:nth-child(5)');

    companyButton.addEventListener('click', function() {
        let buttonList = document.querySelector('.phone-item-link .btn-link-item');
        buttonList.classList.add('fade-out');
        setTimeout(function() {
            buttonList.style.display = 'none';
            buttonList.classList.remove('fade-out');
        }, 400);

        productListCompany.style.display = 'block';
    });

    backButtonCompany.addEventListener('click', function() {
        productListCompany.classList.add('fade-out');
        setTimeout(function() {
            productListCompany.style.display = 'none';
            productListCompany.classList.remove('fade-out');
        }, 400);

        let buttonList = document.querySelector('.phone-item-link .btn-link-item');
        buttonList.style.display = 'flex';
    });
});