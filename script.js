// ========================================
// PROJECT
// JAVASCRIPT
// ========================================


// Lấy các thành phần trên trang

const enterButton = document.getElementById("enterButton");

const opening = document.getElementById("opening");

const mainPage = document.getElementById("mainPage");


// ========================================
// BẤM VÀO HÌNH PHÚC NGUYÊN
// ========================================

enterButton.addEventListener("click", function () {

    // Làm màn hình mở đầu mờ dần

    opening.style.opacity = "0";

    opening.style.transition = "opacity 0.8s ease";


    // Sau 0.8 giây thì ẩn màn hình mở đầu

    setTimeout(function () {

        opening.style.display = "none";


        // Hiện giao diện chính

        mainPage.style.display = "flex";

        mainPage.style.opacity = "0";

        mainPage.style.transition = "opacity 0.8s ease";


        // tạo hiệu ứng hiện dần

        setTimeout(function () {

            mainPage.style.opacity = "1";

        }, 50);


    }, 800);

});
