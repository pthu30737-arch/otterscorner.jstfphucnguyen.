/* =====================================================
   OTTER'S CORNER × UPRIZE PN
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   STAR FIELD
===================================================== */

const starField =
    document.getElementById("starField");


function createStars() {

    const totalStars = 220;

    for (
        let i = 0;
        i < totalStars;
        i++
    ) {

        const star =
            document.createElement("span");

        star.classList.add("star");


        if (Math.random() > 0.86) {
            star.classList.add("large");
        }


        if (Math.random() > 0.92) {
            star.classList.add("cross");
        }


        star.style.left =
            Math.random() * 100 + "%";


        star.style.top =
            Math.random() * 100 + "%";


        star.style.setProperty(
            "--duration",
            (1.5 + Math.random() * 4) + "s"
        );


        star.style.setProperty(
            "--delay",
            (Math.random() * 5) + "s"
        );


        starField.appendChild(star);

    }

}


createStars();


/* =====================================================
   ELEMENTS
===================================================== */

const intro =
    document.getElementById("intro");


const website =
    document.getElementById("website");


const home =
    document.getElementById("home");


const enterButton =
    document.getElementById("enterButton");


const introButton =
    document.getElementById("introButton");


const music =
    document.getElementById("bgMusic");


const musicButton =
    document.getElementById("musicButton");


const pages =
    document.querySelectorAll(".page-section");


const menuCards =
    document.querySelectorAll(".menu-card");


const backHomeButtons =
    document.querySelectorAll("[data-home]");


/* =====================================================
   MUSIC
===================================================== */

let musicStarted = false;


async function startMusic() {

    if (musicStarted) {
        return;
    }


    try {

        await music.play();

        musicStarted = true;

        musicButton.classList.add(
            "playing"
        );

        musicButton.textContent =
            "♫";

    } catch (error) {

        /*
            Trình duyệt có thể chặn autoplay.

            Vì vậy website vẫn giữ nhạc,
            và nút music sẽ cho phép người dùng
            bật bằng tay.
        */

        musicStarted = false;

    }

}


/* =====================================================
   ENTER WEBSITE
===================================================== */

enterButton.addEventListener(
    "click",
    async () => {

        intro.classList.add("hidden");

        website.classList.remove("hidden");

        home.classList.remove("hidden");


        await startMusic();


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =====================================================
   MUSIC BUTTON
===================================================== */

musicButton.addEventListener(
    "click",
    async () => {

        if (music.paused) {

            try {

                await music.play();

                musicStarted = true;

                musicButton.classList.add(
                    "playing"
                );

                musicButton.textContent =
                    "♫";

            } catch (error) {

                console.log(
                    "Không thể phát nhạc:",
                    error
                );

            }

        } else {

            music.pause();

            musicButton.classList.remove(
                "playing"
            );

            musicButton.textContent =
                "♪";

        }

    }
);


/* =====================================================
   OPEN PAGE
===================================================== */

function openPage(pageId) {

    home.classList.add("hidden");


    pages.forEach(
        page => {

            page.classList.add(
                "hidden"
            );

        }
    );


    const target =
        document.getElementById(pageId);


    if (!target) {
        return;
    }


    target.classList.remove(
        "hidden"
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   MENU CARDS
===================================================== */

menuCards.forEach(
    card => {

        card.addEventListener(
            "click",
            () => {

                const page =
                    card.dataset.page;

                openPage(page);

            }
        );

    }
);


/* =====================================================
   BACK HOME
===================================================== */

backHomeButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                pages.forEach(
                    page => {

                        page.classList.add(
                            "hidden"
                        );

                    }
                );


                home.classList.remove(
                    "hidden"
                );


                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }
);


/* =====================================================
   BACK TO INTRO
===================================================== */

introButton.addEventListener(
    "click",
    () => {

        pages.forEach(
            page => {

                page.classList.add(
                    "hidden"
                );

            }
        );


        home.classList.remove(
            "hidden"
        );


        website.classList.add(
            "hidden"
        );


        intro.classList.remove(
            "hidden"
        );


        /*
            KHÔNG pause music.

            Nhạc vẫn chạy xuyên suốt.
        */

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =====================================================
   PROJECT DATA
===================================================== */

const projectData = {

    pj1: {

        code: "PJ1",

        date: "18/01/2026",

        title:
            "CHEER TO GRADUATION & ROAD TO DEBUT",

        images: [
            "assets/PJ1.png"
        ],

        content: `

            <p>
                💕 Project nhỏ xinh đầu tiên của
                Otter's Corner tới Phúc Nguyên yêu dấu 💕
            </p>


            <p>
                📨 Dear Phúc Nguyên:
            </p>


            <p>
                “Khi cánh cửa này khép lại cũng là lúc
                một cánh cửa mới mở ra, chặng đường tại
                SIA vừa qua Nguyên đã trải qua bằng tất cả
                nhiệt huyết và chân thành, giờ là lúc bước
                ra thế giới rộng lớn kia để tiếp tục hành
                trình theo đuổi đam mê.”
            </p>


            <p class="detail-highlight">
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
                Otter's Corner xin được gửi lời cảm ơn tới
                @le.tresor_pn và @nayngieee_ khi đã cho phép
                team được sử dụng hình ảnh cho chiếc ads
                xinh iu này.
            </p>


            <p>
                Cảm ơn designer iu quý của team
                @dazii2611 đã vất vả cho deadline gấp rút
                chúc mừng Phúc Nguyên tốt nghiệp hành trình này.
            </p>


            <p>
                Các tình iu có bắt gặp chiếc ads nhỏ xinh này
                thì nhớ tag Otter's Corner và gửi lời chúc
                tới Phúc Nguyên nhaaaa.
            </p>

        `

    },


    pj2: {

        code: "PJ2",

        date: "2026",

        title:
            "PHƯỚN HER CONCERT FOR UPRIZE PN",

        images: [
            "assets/PJ2.1.png",
            "assets/PJ2.2.png"
        ],

        content: `

            <p>
                Mở đầu cho hành trình
                <strong>Phúc Khởi Hưng Nguyên</strong>
                với chặng “Phúc Khai”, Otter's Corner gửi đến
                HER Concert cụm 10 phướn như một dấu mốc
                khởi đầu, thay cho lời chúc tốt đẹp và lời
                hứa đồng hành dài lâu 🫂
            </p>


            <p>
                Mỗi phướn đều mang theo niềm tin,
                sự tự hào và ước nguyện — mong Phúc Nguyên
                luôn tự tin, mạnh mẽ trên mọi chặng đường,
                không ngừng bứt phá và ngày càng vươn xa 🪽
            </p>

        `

    },


    pj3: {

        code: "PJ3",

        date: "2026",

        title:
            "PHOTO FRAME x TEDxTPC2026",

        images: [
            "assets/PJ3.1.png",
            "assets/PJ3.2.png"
        ],

        content: `

            <p>
                🎹 Mở đầu chặng Khởi, Otter's Corner
                mang đến project đầu tiên: frame check-in
                tại sự kiện TEDxTPC2026.
            </p>


            <p>
                🎹 Lấy cảm hứng từ chủ đề
                <strong>Maestro</strong>, chúng mình tái hiện
                một “nhà hát” nơi vị nhạc trưởng tài ba
                UPRIZE PN dẫn dắt những giai điệu đầy cảm hứng.
            </p>


            <p>
                🎹 Đừng quên ghé qua frame check-in và lưu lại
                những khoảnh khắc thật xinh nhéee.
            </p>

        `

    }

};


/* =====================================================
   PROJECT ELEMENTS
===================================================== */

const projectCards =
    document.querySelectorAll(
        ".project-card[data-project]"
    );


const projectList =
    document.getElementById(
        "projectList"
    );


const projectDetail =
    document.getElementById(
        "projectDetail"
    );


const projectDetailContent =
    document.getElementById(
        "projectDetailContent"
    );


const projectBack =
    document.getElementById(
        "projectBack"
    );


/* =====================================================
   OPEN PROJECT
===================================================== */

projectCards.forEach(
    card => {

        card.addEventListener(
            "click",
            () => {

                const projectId =
                    card.dataset.project;


                showProject(
                    projectId
                );

            }
        );

    }
);


function showProject(projectId) {

    const project =
        projectData[projectId];


    if (!project) {
        return;
    }


    const gallery =
        project.images
            .map(
                image => `

                    <img
                        src="${image}"
                        alt="${project.title}"
                        loading="lazy"
                    >

                `
            )
            .join("");


    projectDetailContent.innerHTML = `

        <div class="detail-header">

            <span class="detail-code">
                ${project.code}
            </span>


            <h2>
                ${project.title}
            </h2>


            <span class="detail-date">
                ${project.date}
            </span>

        </div>


        <div class="detail-text">

            ${project.content}

        </div>


        <div class="detail-gallery">

            ${gallery}

        </div>

    `;


    projectList.classList.add(
        "hidden"
    );


    projectDetail.classList.remove(
        "hidden"
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   CLOSE PROJECT
===================================================== */

projectBack.addEventListener(
    "click",
    () => {

        projectDetail.classList.add(
            "hidden"
        );


        projectList.classList.remove(
            "hidden"
        );


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =====================================================
   FINANCE DATA
===================================================== */


/*
    PJ1 / PJ2 / PJ3 hiện tại đều dùng
    quỹ nội bộ nên:

    Tổng thu  = 0đ
    Tổng chi  = 0đ
    Còn lại   = 0đ

    Khi có phát sinh chỉ cần thêm dữ liệu
    vào expenses.
*/


const financeData = {

    pj1: {

        income: 0,

        expenses: []

    },


    pj2: {

        income: 0,

        expenses: []

    },


    pj3: {

        income: 0,

        expenses: []

    }

};


/* =====================================================
   FINANCE
===================================================== */

const projectSelect =
    document.getElementById(
        "projectSelect"
    );


const financeResult =
    document.getElementById(
        "financeResult"
    );


const totalIncome =
    document.getElementById(
        "totalIncome"
    );


const totalExpense =
    document.getElementById(
        "totalExpense"
    );


const totalRemain =
    document.getElementById(
        "totalRemain"
    );


const financeTable =
    document.getElementById(
        "financeTable"
    );


projectSelect.addEventListener(
    "change",
    () => {

        const projectId =
            projectSelect.value;


        if (!projectId) {

            financeResult.classList.add(
                "hidden"
            );

            return;

        }


        showFinance(
            projectId
        );

    }
);


/* =====================================================
   SHOW FINANCE
===================================================== */

function showFinance(projectId) {

    const data =
        financeData[projectId];


    if (!data) {
        return;
    }


    const income =
        data.income;


    const expense =
        data.expenses.reduce(
            (sum, item) => {

                return sum + item.total;

            },
            0
        );


    const remain =
        income - expense;


    totalIncome.textContent =
        formatMoney(income);


    totalExpense.textContent =
        formatMoney(expense);


    totalRemain.textContent =
        formatMoney(remain);


    if (
        data.expenses.length === 0
    ) {

        financeTable.innerHTML = `

            <tr>

                <td colspan="7">

                    <div
                        style="
                            text-align:center;
                            padding:35px 20px;
                            opacity:.6;
                        "
                    >

                        Project sử dụng
                        <strong>quỹ nội bộ</strong>.

                        <br><br>

                        Hiện tại chưa phát sinh
                        khoản thu — chi.

                        <br><br>

                        Tổng thu:
                        <strong>0đ</strong>

                        ·

                        Tổng chi:
                        <strong>0đ</strong>

                        ·

                        Còn lại:
                        <strong>0đ</strong>

                    </div>

                </td>

            </tr>

        `;

    } else {

        financeTable.innerHTML =
            data.expenses
                .map(
                    item => `

                        <tr>

                            <td>
                                ${item.date}
                            </td>

                            <td>
                                ${item.type}
                            </td>

                            <td>
                                ${item.quantity}
                            </td>

                            <td>
                                ${formatMoney(
                                    item.unitPrice
                                )}
                            </td>

                            <td>
                                ${formatMoney(
                                    item.total
                                )}
                            </td>

                            <td>
                                ${formatMoney(
                                    item.deposit
                                )}
                            </td>

                            <td>

                                ${
                                    item.proof

                                    ?

                                    `
                                    <a
                                        href="${item.proof}"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Drive ↗
                                    </a>
                                    `

                                    :

                                    "—"
                                }

                            </td>

                        </tr>

                    `
                )
                .join("");

    }


    financeResult.classList.remove(
        "hidden"
    );

}


/* =====================================================
   MONEY FORMAT
===================================================== */

function formatMoney(
    amount
) {

    return new Intl.NumberFormat(
        "vi-VN"
    ).format(amount) + "đ";

}
