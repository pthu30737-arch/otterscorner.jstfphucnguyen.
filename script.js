/* =====================================================
   PHÚC NGUYÊN OFFICIAL PROJECT
   JAVASCRIPT
===================================================== */


/* =====================================================
   LẤY CÁC ELEMENT
===================================================== */

const opening = document.getElementById("opening");

const website = document.getElementById("website");

const enterButton = document.getElementById("enterButton");

const musicButton = document.getElementById("musicButton");

const backgroundMusic =
    document.getElementById("backgroundMusic");


/* =====================================================
   NHẠC NỀN
===================================================== */

let musicPlaying = false;


/* =====================================================
   CLICK MASCOT
===================================================== */

enterButton.addEventListener("click", function () {

    /*
        Vì đây là hành động của người dùng,
        trình duyệt cho phép website phát nhạc.
    */

    backgroundMusic.volume = 0.35;

    backgroundMusic.play()
        .then(() => {

            musicPlaying = true;

            musicButton.textContent =
                "♫ MUSIC ON";

        })
        .catch(() => {

            console.log(
                "Không thể tự động phát nhạc."
            );

        });


    /*
        Ẩn opening
    */

    opening.classList.add("hide");


    /*
        Hiện website
    */

    setTimeout(function () {

        website.classList.add("show");

    }, 500);

});


/* =====================================================
   NÚT MUSIC
===================================================== */

musicButton.addEventListener("click", function () {

    if (musicPlaying) {

        backgroundMusic.pause();

        musicPlaying = false;

        musicButton.textContent =
            "♪ MUSIC OFF";

    } else {

        backgroundMusic.play();

        musicPlaying = true;

        musicButton.textContent =
            "♫ MUSIC ON";

    }

});


/* =====================================================
   MENU 01 / 02 / 03
===================================================== */

const menuItems =
    document.querySelectorAll(".menu-item");

const pageSections =
    document.querySelectorAll(".page-section");


menuItems.forEach(function (button) {

    button.addEventListener("click", function () {

        const sectionId =
            button.dataset.section;


        /*
            Bỏ active khỏi tất cả menu
        */

        menuItems.forEach(function (item) {

            item.classList.remove("active");

        });


        /*
            Active menu đang chọn
        */

        button.classList.add("active");


        /*
            Ẩn tất cả page
        */

        pageSections.forEach(function (section) {

            section.classList.remove("active");

        });


        /*
            Hiện page tương ứng
        */

        const target =
            document.getElementById(sectionId);

        if (target) {

            target.classList.add("active");

        }


        /*
            Scroll về đầu nội dung
        */

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});


/* =====================================================
   ACCORDION
===================================================== */

const accordionButtons =
    document.querySelectorAll(".accordion-header");


accordionButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const targetId =
            button.dataset.target;

        const content =
            document.getElementById(targetId);


        if (!content) return;


        content.classList.toggle("open");


        const plus =
            button.querySelector("span:last-child");


        if (content.classList.contains("open")) {

            plus.textContent = "−";

        } else {

            plus.textContent = "+";

        }

    });

});


/* =====================================================
   PROJECT MODAL
===================================================== */

const projectModal =
    document.getElementById("projectModal");

const modalClose =
    document.getElementById("modalClose");

const projectButtons =
    document.querySelectorAll(".project-detail");

const modalProjects =
    document.querySelectorAll(".modal-project");


/* =====================================================
   MỞ PROJECT
===================================================== */

projectButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const projectId =
            button.dataset.project;


        /*
            Ẩn tất cả project detail
        */

        modalProjects.forEach(function (project) {

            project.classList.remove("active");

        });


        /*
            Hiện project được chọn
        */

        const selectedProject =
            document.getElementById(projectId);


        if (selectedProject) {

            selectedProject.classList.add("active");

        }


        /*
            Hiện modal
        */

        projectModal.classList.add("show");


        document.body.style.overflow =
            "hidden";

    });

});


/* =====================================================
   ĐÓNG MODAL
===================================================== */

modalClose.addEventListener("click", function () {

    projectModal.classList.remove("show");

    document.body.style.overflow =
        "auto";

});


/* =====================================================
   CLICK RA NGOÀI MODAL
===================================================== */

projectModal.addEventListener("click", function (event) {

    if (event.target === projectModal) {

        projectModal.classList.remove("show");

        document.body.style.overflow =
            "auto";

    }

});


/* =====================================================
   ESC ĐỂ ĐÓNG
===================================================== */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        projectModal.classList.remove("show");

        document.body.style.overflow =
            "auto";

    }

});


/* =====================================================
   DỮ LIỆU THU CHI
===================================================== */

/*
    Hiện tại 3 project đều sử dụng
    QUỸ NỘI BỘ nên:

    Tổng thu = 0
    Tổng chi = 0
    Còn lại = 0

    Sau này chỉ cần sửa phần DATA
    bên dưới.
*/


const financeData = {

    project1: {

        income: 0,

        expenses: []

    },


    project2: {

        income: 0,

        expenses: []

    },


    project3: {

        income: 0,

        expenses: []

    }

};


/* =====================================================
   ELEMENT THU CHI
===================================================== */

const projectSelect =
    document.getElementById("projectSelect");

const totalIncome =
    document.getElementById("totalIncome");

const totalExpense =
    document.getElementById("totalExpense");

const remainingMoney =
    document.getElementById("remainingMoney");

const financeTable =
    document.getElementById("financeTable");


/* =====================================================
   FORMAT TIỀN
===================================================== */

function formatMoney(number) {

    return new Intl.NumberFormat(
        "vi-VN"
    ).format(number) + "đ";

}


/* =====================================================
   HIỂN THỊ THU CHI
===================================================== */

function renderFinance(projectId) {

    const data =
        financeData[projectId];


    if (!data) return;


    /*
        Tính tổng chi
    */

    let expenseTotal = 0;


    data.expenses.forEach(function (item) {

        expenseTotal +=
            item.total;

    });


    /*
        Tính còn lại
    */

    const remaining =
        data.income - expenseTotal;


    /*
        Hiển thị tổng
    */

    totalIncome.textContent =
        formatMoney(data.income);


    totalExpense.textContent =
        formatMoney(expenseTotal);


    remainingMoney.textContent =
        formatMoney(remaining);


    /*
        Xóa bảng cũ
    */

    financeTable.innerHTML = "";


    /*
        Nếu chưa có giao dịch
    */

    if (data.expenses.length === 0) {

        financeTable.innerHTML = `

            <tr>

                <td colspan="7">

                    Chưa có giao dịch.
                    Project sử dụng quỹ nội bộ: 0đ.

                </td>

            </tr>

        `;

        return;

    }


    /*
        Hiển thị giao dịch
    */

    data.expenses.forEach(function (item) {

        const row =
            document.createElement("tr");


        row.innerHTML = `

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
                ${formatMoney(item.price)}
            </td>

            <td>
                ${formatMoney(item.total)}
            </td>

            <td>
                ${formatMoney(item.deposit)}
            </td>

            <td>

                ${
                    item.proof
                    ?
                    `<a
                        href="${item.proof}"
                        target="_blank"
                        rel="noopener"
                    >
                        🔗 Drive
                    </a>`
                    :
                    "—"
                }

            </td>

        `;


        financeTable.appendChild(row);

    });

}


/* =====================================================
   ĐỔI PROJECT
===================================================== */

projectSelect.addEventListener("change", function () {

    renderFinance(
        projectSelect.value
    );

});


/* =====================================================
   LOAD THU CHI BAN ĐẦU
===================================================== */

renderFinance(
    projectSelect.value
);
