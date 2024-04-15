document.addEventListener("DOMContentLoaded", function () {
    let pageLinks = document.querySelectorAll(".page-link");

    pageLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            pageLinks.forEach(function (link) {
                link.parentElement.classList.remove("active");
                link.style.width = "8px";
                link.style.height = "8px";
                link.style.backgroundColor = "white";
                link.style.borderRadius = "100px";
                link.style.borderColor = "transparent";
                link.style.margin = "0px";
                link.style.opacity = "0.5";
            });

            this.style.width = "48px";
            this.style.backgroundColor = "white";
            this.style.color = "#fff";
            this.parentElement.classList.add("active");
            this.style.opacity = "1";
        });
    });
});

let swiperivideo = new Swiper('.i-video', {
    slidesPerView :'auto',
    spaceBetween: 13,
    centeredSlides : true,
    centeredSlidesBounds: true,
    speed:800,
    loop:true,
    navigation: {
        prevEl: '.i-video .i-page.next',
        nextEl: '.i-video .i-page.prev',
    },
    pagination :{
        el: '.i-video .swiper-pagination',
        clickable :true,
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
    slidesPerView : 4,
    spaceBetween: 0,
    speed:800,
    loop:true,
    navigation: {
        prevEl: '.i-series .i-page.next',
        nextEl: '.i-series .i-page.prev',
    },
    pagination :{
        el: '.i-series .swiper-pagination',
        clickable :true,
    },
});

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    const logo = document.querySelector(".header-item > a > img");
    const logoOnScroll = "/img/Logo-scope.svg";
    const links = document.querySelectorAll(".ul-list .link-group");
    const searchInput = document.querySelector(".header-search input");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            header.style.backgroundColor = "#ffffff";
            links.forEach(link => {
                link.style.color = "#000000";
            });
            searchInput.style.borderRadius = "4px";
            searchInput.style.background = "rgba(0, 0, 0, 0.1)";
            searchInput.style.color = "#000000";
            logo.src = logoOnScroll;
        } else {
            header.style.backgroundColor = "transparent";
            links.forEach(link => {
                link.style.color = "#ffffff";
            });
            searchInput.style.borderRadius = "";
            searchInput.style.background = "";
            searchInput.style.color = "#ffffff";
            logo.src = "img/Logo.svg";
        }
    });
});



