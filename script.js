const enterButton = document.getElementById("enterButton");

const opening = document.getElementById("opening");

const mainPage = document.getElementById("mainPage");


enterButton.addEventListener("click", function () {

    // Màn hình mở đầu mờ dần

    opening.style.opacity = "0";


    // Sau 0.8 giây chuyển sang trang chính

    setTimeout(function () {

        opening.style.display = "none";

        mainPage.style.display = "flex";

        setTimeout(function () {

            mainPage.style.opacity = "1";

        }, 50);

    }, 800);

});
