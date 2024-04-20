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

        if (hoverBlock && bgBlock) {
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
        }
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

let swipericomfort = new Swiper('.i-comfort', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    loop: true,
    navigation: {
        prevEl: '.i-comfort .i-page.next',
        nextEl: '.i-comfort .i-page.prev',
    },
    pagination: {
        el: '.i-comfort .swiper-pagination',
        clickable: true,
    },
});

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    const links = document.querySelectorAll(".ul-list .link-group");
    const searchInput = document.querySelector(".header-search input");
    const svgPaths = document.querySelectorAll(".svg-item path");

    if (!header || !searchInput || !svgPaths.length) {
        return;
    }

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            header.style.backgroundColor = "#FFFFFF";
            links.forEach(link => {
                link.style.color = "#000000";
            });
            searchInput.style.borderRadius = "4px";
            searchInput.style.background = "rgba(0, 0, 0, 0.1)";
            searchInput.style.color = "#000000";
            searchInput.setAttribute("data-placeholder-color", "black");
            svgPaths.forEach(path => {
                path.setAttribute("stroke", "#152F65");
            });
        } else {
            header.style.backgroundColor = "transparent";
            links.forEach(link => {
                link.style.color = "#FFFFFF";
            });
            searchInput.style.borderRadius = "";
            searchInput.style.background = "";
            searchInput.style.color = "#FFFFFF";
            searchInput.removeAttribute("data-placeholder-color");
            svgPaths.forEach(path => {
                path.setAttribute("stroke", "#ffffff");
            });
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const headerInner = document.querySelector(".header-inner");
    const searchInputItem = document.querySelector(".header-search-item input");

    if (headerInner && searchInputItem) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 0) {
                headerInner.style.backgroundColor = "#ffffff";
                searchInputItem.style.borderRadius = "4px";
                searchInputItem.style.background = "rgba(0, 0, 0, 0.1)";
                searchInputItem.style.color = "#000000";
            } else {
                headerInner.style.backgroundColor = "";
                searchInputItem.style.borderRadius = "";
                searchInputItem.style.background = "";
                searchInputItem.style.color = "#ffffff";
            }
        });
    }
});

window.addEventListener('scroll', function() {
    let svgElements = document.querySelectorAll('.header-item-img svg .cls-1');

    if (window.scrollY > 0) {
        svgElements.forEach(element => {
            element.style.fill = '#1b2e61';
        });
    } else {
        svgElements.forEach(element => {
            element.style.fill = '#FFFFFF';
        });
    }
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

let swipergallery = new Swiper('.i-gallery', {
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: true,
    centeredSlidesBounds: true,
    speed: 800,
    loop: true,
    navigation: {
        prevEl: 'i-gallery .i-page.next',
        nextEl: '.i-gallery .i-page.prev',
    },
    pagination: {
        el: '.i-gallery .swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 3
        },
        1440: {
            slidesPerView: 3
        },
    }
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
});

document.addEventListener('DOMContentLoaded', function() {
    let backButtons = document.querySelectorAll('.child-item a');

    backButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            let productList = button.closest('.child-item');
            productList.classList.add('fade-out');

            setTimeout(function() {
                productList.style.display = 'none';
                productList.classList.remove('fade-out');
            }, 400);

            let buttonList = document.querySelector('.phone-item-link .btn-link-item');
            buttonList.style.display = 'flex';
        });
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

document.addEventListener("DOMContentLoaded", function() {
    const selectItems = document.querySelectorAll(".decision-select-item");
    const checkboxBlocks = document.querySelectorAll(".decision-checkbox");

    selectItems.forEach((selectItem, index) => {
        selectItem.addEventListener("click", function() {
            const isOpen = !checkboxBlocks[index].classList.contains("hidden");

            checkboxBlocks.forEach((checkboxBlock, i) => {
                if (i === index) {
                    checkboxBlock.classList.toggle("hidden");
                } else {
                    checkboxBlock.classList.add("hidden");
                }
            });

            const arrowImg = selectItem.querySelector("img");
            arrowImg.classList.toggle("rotate", !isOpen);

            selectItems.forEach((item, idx) => {
                if (idx !== index) {
                    item.querySelector("img").classList.remove("rotate");
                }
            });
        });
    });
});

let labels = document.querySelectorAll('.label input');
labels.forEach(function(input) {
    input.addEventListener('click', function() {
        let label = input.parentElement;
        if (label.classList.contains('clicked')) {
            label.classList.remove('clicked');
        } else {
            label.classList.add('clicked');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const featuresArrows = document.querySelectorAll('.features-arrow');
    featuresArrows.forEach(function(featuresArrow) {
        featuresArrow.addEventListener('click', function() {
            const parentFeaturesInfo = this.closest('.features-info');
            const featuresSelect = parentFeaturesInfo.querySelector('.features-select');

            const allFeaturesSelects = document.querySelectorAll('.features-select');
            allFeaturesSelects.forEach(function(select) {
                if (select !== featuresSelect) {
                    select.style.display = 'none';
                }
            });

            const allFeaturesArrows = document.querySelectorAll('.features-arrow');
            allFeaturesArrows.forEach(function(arrow) {
                if (arrow !== featuresArrow) {
                    arrow.classList.remove('active');
                }
            });

            if (!this.classList.contains('active')) {
                this.classList.add('active');
                featuresSelect.style.display = 'block';
            } else {
                this.classList.remove('active');
                featuresSelect.style.display = 'none';
            }
        });
    });
});

function updateText(checkbox) {
    let label = checkbox.closest('.decision-checkbox').previousElementSibling.querySelector('.decision-select-item span');
    let selectedItemsText = [];

    let checkboxes = checkbox.closest('.decision-checkbox').querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(cb) {
        if (cb.checked) {
            selectedItemsText.push(cb.nextElementSibling.textContent);
        }
    });

    let labelText = selectedItemsText.join(', ');

    if (labelText === '') {
        label.textContent = 'Выбрать';
    } else {
        label.textContent = labelText;
    }
}

let checkboxes = document.querySelectorAll('.decision-checkbox input[type="checkbox"]');

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        updateText(this);
    });
});

let openModalBtn = document.getElementById("openModal");

let modal = document.getElementById("myModal");

openModalBtn.onclick = function() {
    modal.style.display = "block";
}

modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
