/* =====================================================
   PHÚC NGUYÊN - OTTER'S CORNER
   OFFICIAL PROJECT WEBSITE
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =================================================
       ELEMENTS
    ================================================= */

    const opening = document.getElementById("opening");
    const mainPage = document.getElementById("mainPage");
    const enterButton = document.getElementById("enterButton");

    const menuButtons = document.querySelectorAll(".menu-card");
    const sections = document.querySelectorAll(".content-section");

    const music = document.getElementById("backgroundMusic");
    const musicButton = document.getElementById("musicButton");

    const projectCards = document.querySelectorAll(".project-card");

    const projectDetail = document.getElementById("projectDetail");
    const projectDetailTitle = document.getElementById("projectDetailTitle");
    const projectDetailContent = document.getElementById("projectDetailContent");
    const projectDetailMedia = document.getElementById("projectDetailMedia");

    const closeProject = document.getElementById("closeProject");

    const donateButton = document.getElementById("donateButton");

    /* =================================================
       GOOGLE FORM
    ================================================= */

    const GOOGLE_FORM_URL =
        "https://forms.gle/D47nMUWBiiyie2gSA";


    /* =================================================
       NHẠC NỀN
    ================================================= */

    let musicStarted = false;

    if (music) {

        music.volume = 0.35;

        music.loop = true;

    }


    /* =================================================
       BẬT NHẠC
    ================================================= */

    function startMusic() {

        if (!music) return;

        music.play()
            .then(function () {

                musicStarted = true;

                if (musicButton) {

                    musicButton.innerHTML = "♫ MUSIC ON";

                }

            })
            .catch(function (error) {

                console.log(
                    "Không thể tự động phát nhạc:",
                    error
                );

            });

    }


    /* =================================================
       NÚT NHẠC
    ================================================= */

    if (musicButton) {

        musicButton.addEventListener("click", function () {

            if (!music) return;

            if (music.paused) {

                music.play();

                musicButton.innerHTML = "♫ MUSIC ON";

            } else {

                music.pause();

                musicButton.innerHTML = "♫ MUSIC OFF";

            }

        });

    }


    /* =================================================
       MỞ WEBSITE
       BẤM VÀO ẢNH 1.PNG
    ================================================= */

    if (enterButton) {

        enterButton.addEventListener("click", function () {

            /* Bắt đầu nhạc */

            startMusic();


            /* hiệu ứng biến mất */

            if (opening) {

                opening.classList.add("opening-hide");

            }


            /* chờ animation */

            setTimeout(function () {

                if (opening) {

                    opening.style.display = "none";

                }


                if (mainPage) {

                    mainPage.style.display = "block";

                    setTimeout(function () {

                        mainPage.classList.add("main-show");

                    }, 50);

                }


                /* khóa scroll của opening */

                document.body.classList.add(
                    "website-open"
                );

            }, 800);

        });

    }


    /* =================================================
       MENU
    ================================================= */

    menuButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const targetId =
                button.getAttribute("data-target");

            if (!targetId) return;


            /* đóng tất cả section */

            sections.forEach(function (section) {

                section.classList.remove(
                    "section-active"
                );

            });


            /* mở section được chọn */

            const target =
                document.getElementById(targetId);

            if (target) {

                target.classList.add(
                    "section-active"
                );


                /* cuộn nhẹ */

                setTimeout(function () {

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }, 100);

            }

        });

    });


    /* =================================================
       ĐÓNG SECTION
    ================================================= */

    const closeButtons =
        document.querySelectorAll(".close-section");

    closeButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const section =
                button.closest(".content-section");

            if (section) {

                section.classList.remove(
                    "section-active"
                );

            }

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    });


    /* =================================================
       PROJECT DATA
    ================================================= */

    const projects = {

        "pj1": {

            title:
                "CHEER TO GRADUATION & ROAD TO DEBUT",

            media: `
                <video
                    class="project-video"
                    controls
                    playsinline
                >
                    <source
                        src="PJ1.mp4"
                        type="video/mp4"
                    >
                    Trình duyệt của bạn không hỗ trợ video.
                </video>
            `,

            content: `
                <p>
                    💕 Project nhỏ xinh đầu tiên của
                    Otter's Corner tới Phúc Nguyên yêu dấu 💕
                </p>

                <p>
                    📨 <strong>Dear Phúc Nguyên:</strong>
                    “Khi cánh cửa này khép lại cũng là lúc
                    một cánh cửa mới mở ra, chặng đường tại
                    SIA vừa qua Nguyên đã trải qua bằng tất
                    cả nhiệt huyết và chân thành, giờ là lúc
                    bước ra thế giới rộng lớn kia để tiếp tục
                    hành trình theo đuổi đam mê.”
                </p>

                <p class="project-highlight">
                    ✨ SHOW THE WORLD WHO YOU ARE ✨
                </p>

                <p>
                    🦦 <strong>By:</strong> Otter's Corner
                </p>

                <p>
                    💫 <strong>Date:</strong> 18/01/2026
                </p>

                <p>
                    📍 <strong>Location:</strong> Vietnam
                </p>

                <p>
                    Otter's Corner xin được gửi lời cảm ơn
                    tới những người đã cho phép team sử dụng
                    hình ảnh cho chiếc ads này.
                </p>

                <p>
                    Cảm ơn designer của team đã vất vả cho
                    deadline gấp rút chúc mừng Phúc Nguyên
                    tốt nghiệp hành trình này.
                </p>
            `

        },


        "pj2": {

            title:
                "PHƯỚN HER CONCERT FOR UPRIZE PN",

            media: `
                <div class="project-images">

                    <img
                        src="PJ2.1.png"
                        alt="PJ2.1"
                    >

                    <img
                        src="PJ2.2.png"
                        alt="PJ2.2"
                    >

                </div>
            `,

            content: `
                <p>
                    Mở đầu cho hành trình
                    <strong>Phúc Khởi Hưng Nguyên</strong>
                    với chặng “Phúc Khai”,
                    Otter's Corner gửi đến HER Concert
                    cụm 10 phướn như một dấu mốc khởi đầu,
                    thay cho lời chúc tốt đẹp và lời hứa
                    đồng hành dài lâu 🫂
                </p>

                <p>
                    Mỗi phướn đều mang theo niềm tin,
                    sự tự hào và ước nguyện - mong Phúc Nguyên
                    luôn tự tin, mạnh mẽ trên mọi chặng đường,
                    không ngừng bứt phá và ngày càng vươn xa 🪽
                </p>
            `

        },


        "pj3": {

            title:
                "PHOTO FRAME x TEDxTPC2026",

            media: `
                <div class="project-images">

                    <img
                        src="PJ3.1.png"
                        alt="PJ3.1"
                    >

                    <img
                        src="PJ3.2.png"
                        alt="PJ3.2"
                    >

                </div>
            `,

            content: `
                <p>
                    🎹 Mở đầu chặng Khởi,
                    Otter's Corner mang đến project đầu tiên:
                    frame check-in tại sự kiện TEDxTPC2026.
                </p>

                <p>
                    🎹 Lấy cảm hứng từ chủ đề Maestro,
                    chúng mình tái hiện một “nhà hát”
                    nơi vị nhạc trưởng tài ba UPRIZE PN
                    dẫn dắt những giai điệu đầy cảm hứng.
                </p>

                <p>
                    🎹 Đừng quên ghé qua frame check-in
                    và lưu lại những khoảnh khắc thật xinh nhéee.
                </p>
            `

        }

    };


    /* =================================================
       PROJECT CARD CLICK
    ================================================= */

    projectCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const projectId =
                card.getAttribute("data-project");

            const project =
                projects[projectId];

            if (!project) return;


            if (projectDetailTitle) {

                projectDetailTitle.innerHTML =
                    project.title;

            }


            if (projectDetailMedia) {

                projectDetailMedia.innerHTML =
                    project.media;

            }


            if (projectDetailContent) {

                projectDetailContent.innerHTML =
                    project.content;

            }


            if (projectDetail) {

                projectDetail.classList.add(
                    "detail-active"
                );

                document.body.classList.add(
                    "modal-open"
                );

            }

        });

    });


    /* =================================================
       ĐÓNG PROJECT
    ================================================= */

    if (closeProject) {

        closeProject.addEventListener(
            "click",
            function () {

                if (projectDetail) {

                    projectDetail.classList.remove(
                        "detail-active"
                    );

                }

                document.body.classList.remove(
                    "modal-open"
                );


                /* dừng video */

                if (projectDetailMedia) {

                    const video =
                        projectDetailMedia.querySelector(
                            "video"
                        );

                    if (video) {

                        video.pause();

                    }

                }

            }
        );

    }


    /* =================================================
       CLICK RA NGOÀI PROJECT
    ================================================= */

    if (projectDetail) {

        projectDetail.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === projectDetail
                ) {

                    projectDetail.classList.remove(
                        "detail-active"
                    );

                    document.body.classList.remove(
                        "modal-open"
                    );

                }

            }
        );

    }


    /* =================================================
       NÚT DONATE / FORM
    ================================================= */

    if (donateButton) {

        donateButton.addEventListener(
            "click",
            function () {

                window.open(
                    GOOGLE_FORM_URL,
                    "_blank"
                );

            }
        );

    }


    /* =================================================
       NÚT VỀ ĐẦU TRANG
    ================================================= */

    const topButton =
        document.getElementById("topButton");

    if (topButton) {

        topButton.addEventListener(
            "click",
            function () {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    /* =================================================
       TẠO SAO LẤP LÁNH
       DÙNG CHUNG CHO TOÀN WEBSITE
    ================================================= */

    const starContainer =
        document.querySelector(".global-stars");

    if (starContainer) {

        const starSymbols = [
            "✦",
            "✧",
            "✦",
            "⋆",
            "✧"
        ];


        for (
            let i = 0;
            i < 70;
            i++
        ) {

            const star =
                document.createElement("span");


            star.classList.add(
                "floating-star"
            );


            star.innerHTML =
                starSymbols[
                    Math.floor(
                        Math.random() *
                        starSymbols.length
                    )
                ];


            star.style.left =
                Math.random() * 100 + "%";


            star.style.top =
                Math.random() * 100 + "%";


            star.style.fontSize =
                (Math.random() * 15 + 7) + "px";


            star.style.animationDelay =
                (Math.random() * 4) + "s";


            star.style.animationDuration =
                (Math.random() * 3 + 2) + "s";


            starContainer.appendChild(
                star
            );

        }

    }


    /* =================================================
       SAO CHO TRANG DONATE
    ================================================= */

    const donateStars =
        document.querySelector(".donate-stars");

    if (donateStars) {

        for (
            let i = 0;
            i < 100;
            i++
        ) {

            const star =
                document.createElement("span");


            star.classList.add(
                "donate-star"
            );


            star.innerHTML = "✦";


            star.style.left =
                Math.random() * 100 + "%";


            star.style.top =
                Math.random() * 100 + "%";


            star.style.animationDelay =
                Math.random() * 5 + "s";


            star.style.animationDuration =
                Math.random() * 4 + 2 + "s";


            donateStars.appendChild(
                star
            );

        }

    }


    /* =================================================
       LỜI CHÚC - DEMO
       
       Sau này có thể lấy dữ liệu từ Google Sheets
       để tạo các ngôi sao tự động.
    ================================================= */

    const wishes = [
        {
            name: "Otter",
            message:
                "Chúc Phúc Nguyên luôn tỏa sáng và
                thật hạnh phúc trên hành trình phía trước! ✨"
        }
    ];


    /* =================================================
       TẠO SAO LỜI CHÚC
    ================================================= */

    const wishContainer =
        document.getElementById(
            "wishStars"
        );


    if (
        wishContainer &&
        wishes.length > 0
    ) {

        wishes.forEach(function (wish) {

            const star =
                document.createElement("div");


            star.classList.add(
                "wish-star"
            );


            star.innerHTML = `
                <span class="wish-icon">
                    ✦
                </span>

                <span class="wish-name">
                    ${wish.name}
                </span>
            `;


            star.addEventListener(
                "click",
                function () {

                    showWish(
                        wish.name,
                        wish.message
                    );

                }
            );


            wishContainer.appendChild(
                star
            );

        });

    }


    /* =================================================
       HIỆN LÁ THƯ LỜI CHÚC
    ================================================= */

    function showWish(
        name,
        message
    ) {

        const wishModal =
            document.getElementById(
                "wishModal"
            );


        const wishAuthor =
            document.getElementById(
                "wishAuthor"
            );


        const wishMessage =
            document.getElementById(
                "wishMessage"
            );


        if (!wishModal) return;


        if (wishAuthor) {

            wishAuthor.innerHTML =
                name;

        }


        if (wishMessage) {

            wishMessage.innerHTML =
                message;

        }


        wishModal.classList.add(
            "wish-modal-active"
        );

    }


    /* =================================================
       ĐÓNG LÁ THƯ
    ================================================= */

    const closeWish =
        document.getElementById(
            "closeWish"
        );


    if (closeWish) {

        closeWish.addEventListener(
            "click",
            function () {

                const wishModal =
                    document.getElementById(
                        "wishModal"
                    );


                if (wishModal) {

                    wishModal.classList.remove(
                        "wish-modal-active"
                    );

                }

            }
        );

    }


    /* =================================================
       CHUYỂN TAB BẰNG HASH
       Ví dụ:
       #info
       #projects
       #finance
       #donate
    ================================================= */

    function openHashSection() {

        const hash =
            window.location.hash;


        if (!hash) return;


        const target =
            document.querySelector(
                hash
            );


        if (!target) return;


        sections.forEach(
            function (section) {

                section.classList.remove(
                    "section-active"
                );

            }
        );


        target.classList.add(
            "section-active"
        );

    }


    window.addEventListener(
        "hashchange",
        openHashSection
    );


    /* =================================================
       ESC ĐỂ ĐÓNG
    ================================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                if (projectDetail) {

                    projectDetail.classList.remove(
                        "detail-active"
                    );

                }


                const wishModal =
                    document.getElementById(
                        "wishModal"
                    );


                if (wishModal) {

                    wishModal.classList.remove(
                        "wish-modal-active"
                    );

                }


                document.body.classList.remove(
                    "modal-open"
                );

            }

        }
    );


    /* =================================================
       LOG
    ================================================= */

    console.log(
        "✦ PHÚC NGUYÊN OFFICIAL PROJECT WEBSITE LOADED ✦"
    );

});
