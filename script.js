/* ==================================================
   PHÚC NGUYÊN OFFICIAL PROJECT
   JAVASCRIPT
================================================== */


/* ==================================================
   ELEMENTS
================================================== */

const opening =
    document.getElementById("opening");

const enterButton =
    document.getElementById("enterButton");

const website =
    document.getElementById("website");

const bgMusic =
    document.getElementById("bgMusic");

const musicButton =
    document.getElementById("musicButton");

const menuToggle =
    document.getElementById("menuToggle");

const menuClose =
    document.getElementById("menuClose");

const sideMenu =
    document.getElementById("sideMenu");

const modal =
    document.getElementById("projectModal");

const projectDetail =
    document.getElementById("projectDetail");



/* ==================================================
   MUSIC
================================================== */

let musicPlaying = false;


/*
   Khi người dùng bấm mascot,
   website sẽ thử bật nhạc.
*/

function startMusic() {

    bgMusic.volume = 0.35;

    bgMusic
        .play()
        .then(() => {

            musicPlaying = true;

            musicButton.textContent =
                "♫ MUSIC ON";

        })
        .catch(() => {

            musicPlaying = false;

            musicButton.textContent =
                "♫ MUSIC OFF";

        });

}


musicButton.addEventListener(
    "click",
    function () {

        if (musicPlaying) {

            bgMusic.pause();

            musicPlaying = false;

            musicButton.textContent =
                "♫ MUSIC OFF";

        } else {

            bgMusic
                .play()
                .then(() => {

                    musicPlaying = true;

                    musicButton.textContent =
                        "♫ MUSIC ON";

                });

        }

    }
);



/* ==================================================
   ENTER WEBSITE
================================================== */

enterButton.addEventListener(
    "click",
    function () {

        opening.classList.add("hide");

        website.classList.add("show");

        startMusic();

        setTimeout(
            function () {

                opening.style.display =
                    "none";

            },
            900
        );

    }
);



/* ==================================================
   MENU
================================================== */

menuToggle.addEventListener(
    "click",
    function () {

        sideMenu.classList.add("open");

    }
);


menuClose.addEventListener(
    "click",
    function () {

        sideMenu.classList.remove("open");

    }
);



/* ==================================================
   OPEN SECTION
================================================== */

function openSection(sectionId) {

    /*
       Đóng menu
    */

    sideMenu.classList.remove(
        "open"
    );


    /*
       Ẩn tất cả page
    */

    document
        .querySelectorAll(".page")
        .forEach(
            page => {

                page.classList.remove(
                    "active-page"
                );

            }
        );


    /*
       Hiện page được chọn
    */

    const target =
        document.getElementById(
            sectionId
        );

    if (target) {

        target.classList.add(
            "active-page"
        );

    }


    /*
       Nếu đang ở Donate thì
       đóng Donate
    */

    document
        .getElementById(
            "starsPage"
        )
        .classList.remove(
            "show"
        );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



/* ==================================================
   HOME
================================================== */

function showHome() {

    openSection("home");

}



/* ==================================================
   DONATE
================================================== */

function openDonate() {

    /*
       Google Form của bạn
    */

    window.open(
        "https://forms.gle/D47nMUWBiiyie2gSA",
        "_blank"
    );

}



/* ==================================================
   ACCORDION
================================================== */

function toggleAccordion(button) {

    const card =
        button.parentElement;

    card.classList.toggle(
        "open"
    );


    const symbol =
        button.querySelector(
            "span:last-child"
        );


    if (
        card.classList.contains(
            "open"
        )
    ) {

        symbol.textContent = "−";

    } else {

        symbol.textContent = "+";

    }

}



/* ==================================================
   PROJECT DATA
================================================== */

const projects = {


    pj1: {

        title:
            "CHEER TO GRADUATION & ROAD TO DEBUT",

        date:
            "18/01/2026 · VIETNAM",

        text:
`💕 Project nhỏ xinh đầu tiên của Otter’s Corner tới Phúc Nguyên yêu dấu 💕

📨 Dear Phúc Nguyên:

“Khi cánh cửa này khép lại cũng là lúc một cánh cửa mới mở ra, chặng đường tại SIA vừa qua Nguyên đã trải qua bằng tất cả nhiệt huyết và chân thành, giờ là lúc bước ra thế giới rộng lớn kia để tiếp tục hành trình theo đuổi đam mê.”

✨ SHOW THE WORLD WHO YOU ARE ✨

🦦 By: Otter’s Corner

💫 Date: 18/01/2026

📍 Location: Vietnam

Otter’s Corner xin được gửi lời cảm ơn tới @le.tresor_pn và @nayngieee_ khi đã cho phép team được sử dụng hình ảnh cho chiếc ads xinh iu này.

Cảm ơn designer iu quý của team @dazii2611 đã vất vả cho deadline gấp rút chúc mừng Phúc Nguyên tốt nghiệp hành trình này.

Các tình iu có bắt gặp chiếc ads nhỏ xinh này thì nhớ tag Otter’s Corner và gửi lời chúc tới Phúc Nguyên nhaaaa.`,

        images: [
            "PJ1.png"
        ]

    },


    pj2: {

        title:
            "PHƯỚN HER CONCERT FOR UPRIZE PN",

        date:
            "PHÚC KHỞI HƯNG NGUYÊN",

        text:
`Mở đầu cho hành trình Phúc Khởi Hưng Nguyên với chặng “Phúc Khai”, Otter’s Corner gửi đến HER Concert cụm 10 phướn như một dấu mốc khởi đầu, thay cho lời chúc tốt đẹp và lời hứa đồng hành dài lâu 🫂

Mỗi phướn đều mang theo niềm tin, sự tự hào và ước nguyện - mong Phúc Nguyên luôn tự tin, mạnh mẽ trên mọi chặng đường, không ngừng bứt phá và ngày càng vươn xa 🪽`,

        images: [
            "PJ2.1.png",
            "PJ2.2.png"
        ]

    },


    pj3: {

        title:
            "PHOTO FRAME x TEDxTPC2026",

        date:
            "CHẶNG KHỞI",

        text:
`🎹 Mở đầu chặng Khởi, Otter’s Corner mang đến project đầu tiên: frame check-in tại sự kiện TEDxTPC2026.

🎹 Lấy cảm hứng từ chủ đề Maestro, chúng mình tái hiện một “nhà hát” nơi vị nhạc trưởng tài ba UPRIZE PN dẫn dắt những giai điệu đầy cảm hứng.

🎹 Đừng quên ghé qua frame check-in và lưu lại những khoảnh khắc thật xinh nhéee.`,

        images: [
            "PJ3.1.png",
            "PJ3.2.png"
        ]

    }

};



/* ==================================================
   OPEN PROJECT
================================================== */

function openProject(projectId) {

    const project =
        projects[projectId];

    if (!project) return;


    let gallery = "";


    project.images.forEach(
        image => {

            gallery += `
                <img
                    src="${image}"
                    alt="${project.title}"
                    onerror="this.style.display='none'"
                >
            `;

        }
    );


    projectDetail.innerHTML = `

        <h2 class="project-detail-title">
            ${project.title}
        </h2>

        <p class="project-detail-date">
            ${project.date}
        </p>

        <div class="project-detail-text">
            ${project.text}
        </div>

        <div class="project-detail-gallery">
            ${gallery}
        </div>

    `;


    modal.classList.add(
        "show"
    );


    document.body.style.overflow =
        "hidden";

}



/* ==================================================
   CLOSE PROJECT
================================================== */

function closeProject() {

    modal.classList.remove(
        "show"
    );


    document.body.style.overflow =
        "";

}



/* ==================================================
   FINANCE DATA
================================================== */

const financeData = {


    pj1: {

        income: 0,

        expenses: 0,

        rows: []

    },


    pj2: {

        income: 0,

        expenses: 0,

        rows: []

    },


    pj3: {

        income: 0,

        expenses: 0,

        rows: []

    },


    pj4: {

        income: 0,

        expenses: 0,

        rows: []

    }

};



/* ==================================================
   FORMAT MONEY
================================================== */

function formatMoney(number) {

    return number
        .toLocaleString("vi-VN")
        + "đ";

}



/* ==================================================
   CHANGE FINANCE PROJECT
================================================== */

function changeFinanceProject() {

    const select =
        document.getElementById(
            "financeProject"
        );


    const project =
        financeData[
            select.value
        ];


    if (!project) return;


    document.getElementById(
        "totalIncome"
    ).textContent =
        formatMoney(
            project.income
        );


    document.getElementById(
        "totalExpense"
    ).textContent =
        formatMoney(
            project.expenses
        );


    document.getElementById(
        "totalRemaining"
    ).textContent =
        formatMoney(
            project.income -
            project.expenses
        );


    const table =
        document.getElementById(
            "financeTable"
        );


    table.innerHTML = "";


    if (
        project.rows.length === 0
    ) {

        table.innerHTML = `

            <tr>

                <td colspan="7">

                    Chưa có giao dịch

                </td>

            </tr>

        `;

        return;

    }


    project.rows.forEach(
        row => {

            const tr =
                document.createElement(
                    "tr"
                );


            tr.innerHTML = `

                <td>
                    ${row.date}
                </td>

                <td>
                    ${row.type}
                </td>

                <td>
                    ${row.quantity}
                </td>

                <td>
                    ${formatMoney(row.price)}
                </td>

                <td>
                    ${formatMoney(row.total)}
                </td>

                <td>
                    ${formatMoney(row.deposit)}
                </td>

                <td>
                    ${
                        row.proof
                        ?
                        `<a href="${row.proof}"
                           target="_blank">
                            🔗
                        </a>`
                        :
                        "—"
                    }
                </td>

            `;


            table.appendChild(
                tr
            );

        }
    );

}



/* ==================================================
   INITIAL FINANCE
================================================== */

changeFinanceProject();



/* ==================================================
   ESC KEY
================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closeProject();

            sideMenu.classList.remove(
                "open"
            );

        }

    }
);
