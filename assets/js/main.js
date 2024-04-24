let swiperivideo = new Swiper('.i-video', {
    slidesPerView: 'auto',
    spaceBetween: 25,
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

let swiperproduct = new Swiper('.i-product', {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    centeredSlidesBounds: true,
    speed: 800,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        prevEl: '.i-product .i-page.next',
        nextEl: '.i-product .i-page.prev',
    },
    pagination: {
        el: '.i-product .swiper-pagination',
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

document.addEventListener("DOMContentLoaded", function() {
    let ulList = document.querySelector(".ul-list");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            ulList.classList.add("scrolled");
        } else {
            ulList.classList.remove("scrolled");
        }
    });
});


let swiperiseries = new Swiper('.i-series', {
    slidesPerView: 4,
    spaceBetween: 0,
    speed: 800,
    loop: true,
    navigation: {
        nextEl: '.i-series-next',
        prevEl: '.i-series-prev',
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

let swiperlithium = new Swiper('.i-lithium', {
    slidesPerView: 4,
    spaceBetween: 0,
    speed: 800,
    loop: true,
    navigation: {
        nextEl: '.i-lithium-next',
        prevEl: '.i-lithium-prev',
    },
    pagination: {
        el: '.lithium .swiper-pagination',
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

let swiperforklifts = new Swiper('.i-forklifts', {
    slidesPerView: 4,
    spaceBetween: 0,
    speed: 800,
    loop: true,
    navigation: {
        nextEl: '.i-forklifts-next',
        prevEl: '.i-forklifts-prev',
    },
    pagination: {
        el: '.i-forklifts .swiper-pagination',
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

let swiperpallets = new Swiper('.i-pallets', {
    slidesPerView: 4,
    spaceBetween: 0,
    speed: 800,
    loop: true,
    navigation: {
        nextEl: '.i-pallets-next',
        prevEl: '.i-pallets-prev',
    },
    pagination: {
        el: '.i-pallets .swiper-pagination',
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
        let headerItem = document.querySelector('.header-item');
        let svgElements = headerItem.querySelectorAll('svg .cls-1');
        let searchInput = document.querySelector('.header-search input');

        headerItem.addEventListener('mouseenter', function() {
            if (!window.scrollY) {
                svgElements.forEach(function(element) {
                    element.style.fill = '#152F65';
                });
                searchInput.style.borderRadius = "4px";
                searchInput.style.background = "rgba(0, 0, 0, 0.1)";
                searchInput.style.color = "#000000";
                searchInput.setAttribute("data-placeholder-color", "black");
            }
        });

        headerItem.addEventListener('mouseleave', function() {
            if (!window.scrollY) {
                svgElements.forEach(function(element) {
                    element.style.fill = '#FFFFFF';
                });
                searchInput.style.borderRadius = "";
                searchInput.style.background = "";
                searchInput.style.color = "#FFFFFF";
            }
        });

        const header = document.querySelector(".header");
        const links = document.querySelectorAll(".ul-list .link-group");
        const svgPaths = document.querySelectorAll(".svg-item path");

        if (!header || !headerItem || !searchInput || !svgPaths.length) {
            return;
        }

        headerItem.addEventListener("mouseover", function () {
            header.style.backgroundColor = "#FFFFFF";
            links.forEach(link => {
                link.style.color = "#000000";
            });
        });

        headerItem.addEventListener("mouseout", function () {
            if (window.scrollY > 0) {
                header.style.backgroundColor = "#FFFFFF";
                links.forEach(link => {
                    link.style.color = "#000000";
                });
            } else {
                header.style.backgroundColor = "transparent";
                links.forEach(link => {
                    link.style.color = "#FFFFFF";
                });
            }
        });

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
                svgElements.forEach(element => {
                    element.style.fill = '#152F65';
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
                svgElements.forEach(element => {
                    element.style.fill = '#FFFFFF';
                });
            }
        });

        links.forEach(link => {
            link.addEventListener("mouseover", function () {
                header.style.backgroundColor = "#FFFFFF";
                links.forEach(link => {
                    link.style.color = "#000000";
                });
            });

            link.addEventListener("mouseout", function () {
                if (window.scrollY > 0) {
                    header.style.backgroundColor = "#FFFFFF";
                    links.forEach(link => {
                        link.style.color = "#000000";
                    });
                } else {
                    header.style.backgroundColor = "transparent";
                    links.forEach(link => {
                        link.style.color = "#FFFFFF";
                    });
                }
            });
        });
    });

document.addEventListener("DOMContentLoaded", function () {
    let headerItem = document.querySelector('.header-item');
    let svgElements = headerItem.querySelectorAll('.svg-item path');

    headerItem.addEventListener('mouseenter', function() {
        svgElements.forEach(function(element) {
            element.setAttribute('stroke', '#152F65');
        });
    });

    headerItem.addEventListener('mouseleave', function() {
        svgElements.forEach(function(element) {
            element.setAttribute('stroke', '#FFFFFF');
        });
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
    // autoplay: {
    //     delay: 5000,
    // },
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
    let total = checkbox.closest('.decision-checkbox').previousElementSibling.querySelector('.decision-select-item .total');
    let selectedItemsText = [];

    let checkboxes = checkbox.closest('.decision-checkbox').querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(cb) {
        if (cb.checked) {
            selectedItemsText.push(cb.nextElementSibling.textContent);
        }
    });

    let labelText = selectedItemsText.join(', ');
    let totalCount = selectedItemsText.length;

    if (labelText === '') {
        label.textContent = 'Выбрать';
        total.classList.remove('show');
    } else {
        label.textContent = labelText;
        total.classList.add('show');
    }

    total.textContent = totalCount.toString();
}

let checkboxes = document.querySelectorAll('.decision-checkbox input[type="checkbox"]');
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        updateText(checkbox);
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
function scrollToElement(target) {
    // Select the target element
    const element = document.querySelector(target);

    // Scroll the target element into view
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Show/hide child items based on the selected target
        showHideChildItems(target);
    }
}

function showHideChildItems(target) {
    const childItems = document.querySelectorAll('.child-item');

    childItems.forEach(item => {
        item.style.opacity = '0';
        item.style.visibility = 'hidden';
    });

    const selectedChildItem = document.querySelector(target);
    if (selectedChildItem) {
        selectedChildItem.style.opacity = '1';
        selectedChildItem.style.visibility = 'visible';
    }
}



