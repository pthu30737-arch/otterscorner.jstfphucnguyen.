/* ========================================
   PHÚC NGUYÊN OFFICIAL PROJECT
   JAVASCRIPT
======================================== */


/* ========================================
   LẤY CÁC ELEMENT
======================================== */

const enterButton = document.getElementById("enterButton");

const opening = document.getElementById("opening");

const mainPage = document.getElementById("mainPage");

const menuButton = document.getElementById("menuButton");

const menuOverlay = document.getElementById("menuOverlay");

const menuClose = document.getElementById("menuClose");

const menuItems = document.querySelectorAll(".menu-item");

const contentSections = document.querySelectorAll(".content-section");

const backButtons = document.querySelectorAll(".back-button");


/* ========================================
   MỞ WEBSITE
   BẤM VÀO 1.PNG
======================================== */

enterButton.addEventListener("click", function () {

    opening.style.opacity = "0";


    setTimeout(function () {

        opening.style.display = "none";

        mainPage.style.display = "flex";

        mainPage.style.opacity = "0";


        setTimeout(function () {

            mainPage.style.opacity = "1";

        }, 50);

    }, 800);

});


/* ========================================
   MỞ MENU
======================================== */

menuButton.addEventListener("click", function () {

    menuOverlay.style.display = "flex";


    setTimeout(function () {

        menuOverlay.style.opacity = "1";

    }, 30);

});


/* ========================================
   ĐÓNG MENU
======================================== */

menuClose.addEventListener("click", function () {

    closeMenu();

});


function closeMenu() {

    menuOverlay.style.opacity = "0";


    setTimeout(function () {

        menuOverlay.style.display = "none";

    }, 400);

}


/* ========================================
   BẤM VÀO 3 MỤC MENU
======================================== */

menuItems.forEach(function (item) {

    item.addEventListener("click", function () {

        const sectionID = item.getAttribute("data-section");

        const selectedSection =
            document.getElementById(sectionID);


        /* đóng menu */

        menuOverlay.style.opacity = "0";


        setTimeout(function () {

            menuOverlay.style.display = "none";


            /* ẩn tất cả section */

            contentSections.forEach(function (section) {

                section.style.display = "none";

            });


            /* hiện section được chọn */

            selectedSection.style.display = "flex";

        }, 400);

    });

});


/* ========================================
   NÚT BACK
======================================== */

backButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        /* ẩn tất cả section */

        contentSections.forEach(function (section) {

            section.style.display = "none";

        });

        /* quay về trang chính */

        mainPage.style.display = "flex";

    });

});


/* ========================================
   CLICK RA NGOÀI MENU
======================================== */

menuOverlay.addEventListener("click", function (event) {

    if (event.target === menuOverlay) {

        closeMenu();

    }

});


/* ========================================
   ESC ĐỂ ĐÓNG MENU
======================================== */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeMenu();

    }

});
