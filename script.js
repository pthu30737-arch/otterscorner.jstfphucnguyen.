/* ========================================
   PHÚC NGUYÊN OFFICIAL PROJECT
   JAVASCRIPT
======================================== */


/* ========================================
   DỮ LIỆU PROJECT
======================================== */

/*
   SAU NÀY BẠN CHỈ CẦN SỬA PHẦN NÀY.

   Không cần sửa HTML.
*/


const projects = [

    {
        id: 1,

        name: "PROJECT 01",

        description:
            "Thông tin project sẽ được cập nhật.",

        income: 5000000,

        expenses: [

            {
                date: "01/08/2026",

                type: "Design",

                quantity: 1,

                price: 300000,

                deposit: 0,

                proof: "Minh chứng"
            },


            {
                date: "02/08/2026",

                type: "In ấn",

                quantity: 100,

                price: 5000,

                deposit: 250000,

                proof: "Minh chứng"
            },


            {
                date: "03/08/2026",

                type: "Đồ ăn, nước uống",

                quantity: 10,

                price: 50000,

                deposit: 0,

                proof: "Minh chứng"
            }

        ]
    },


    {
        id: 2,

        name: "PROJECT 02",

        description:
            "Project mới sẽ được cập nhật.",

        income: 3000000,

        expenses: [

            {
                date: "10/08/2026",

                type: "Thi công",

                quantity: 1,

                price: 500000,

                deposit: 200000,

                proof: "Minh chứng"
            }

        ]
    },


    {
        id: 3,

        name: "PROJECT 03",

        description:
            "Project mới sẽ được cập nhật.",

        income: 0,

        expenses: []

    }

];


/* ========================================
   LẤY ELEMENT
======================================== */

const enterButton =
    document.getElementById(
        "enterButton"
    );


const opening =
    document.getElementById(
        "opening"
    );


const mainPage =
    document.getElementById(
        "mainPage"
    );


const menuButton =
    document.getElementById(
        "menuButton"
    );


const menuOverlay =
    document.getElementById(
        "menuOverlay"
    );


const menuClose =
    document.getElementById(
        "menuClose"
    );


const menuItems =
    document.querySelectorAll(
        ".menu-item"
    );


const contentSections =
    document.querySelectorAll(
        ".content-section"
    );


const backButtons =
    document.querySelectorAll(
        ".back-button"
    );


const financeProjectList =
    document.getElementById(
        "financeProjectList"
    );


const financeDetail =
    document.getElementById(
        "financeDetail"
    );


const financeProjectContent =
    document.getElementById(
        "financeProjectContent"
    );


const financeBack =
    document.getElementById(
        "financeBack"
    );


const projectGrid =
    document.getElementById(
        "projectGrid"
    );


/* ========================================
   ENTER WEBSITE
======================================== */

enterButton.addEventListener(
    "click",
    function () {

        opening.style.opacity = "0";


        setTimeout(
            function () {

                opening.style.display =
                    "none";


                mainPage.style.display =
                    "flex";


                mainPage.style.opacity =
                    "1";

            },
            800
        );

    }
);


/* ========================================
   MENU
======================================== */

menuButton.addEventListener(
    "click",
    function () {

        menuOverlay.style.display =
            "flex";


        setTimeout(
            function () {

                menuOverlay.style.opacity =
                    "1";

            },
            30
        );

    }
);


menuClose.addEventListener(
    "click",
    closeMenu
);


function closeMenu() {

    menuOverlay.style.opacity =
        "0";


    setTimeout(
        function () {

            menuOverlay.style.display =
                "none";

        },
        400
    );

}


/* ========================================
   MENU ITEMS
======================================== */

menuItems.forEach(
    function (item) {

        item.addEventListener(
            "click",
            function () {

                const sectionID =
                    item.getAttribute(
                        "data-section"
                    );


                const selectedSection =
                    document.getElementById(
                        sectionID
                    );


                closeMenu();


                setTimeout(
                    function () {

                        contentSections.forEach(
                            function (section) {

                                section.style.display =
                                    "none";

                            }
                        );


                        selectedSection.style.display =
                            "flex";


                        if (
                            sectionID ===
                            "finance"
                        ) {

                            showFinanceList();

                        }

                    },
                    450
                );

            }
        );

    }
);


/* ========================================
   BACK
======================================== */

backButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                contentSections.forEach(
                    function (section) {

                        section.style.display =
                            "none";

                    }
                );


                mainPage.style.display =
                    "flex";


                financeDetail.style.display =
                    "none";


                financeProjectList.style.display =
                    "grid";

            }
        );

    }
);


/* ========================================
   CLICK NGOÀI MENU
======================================== */

menuOverlay.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            menuOverlay
        ) {

            closeMenu();

        }

    }
);


/* ========================================
   ESC
======================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key ===
            "Escape"
        ) {

            closeMenu();

        }

    }
);


/* ========================================
   TẠO PROJECTS
======================================== */

function renderProjects() {

    projectGrid.innerHTML = "";


    projects.forEach(
        function (project) {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "project-card";


            card.innerHTML = `

                <div class="project-image">
                    ✦
                </div>

                <h3>
                    ${project.name}
                </h3>

                <p>
                    ${project.description}
                </p>

            `;


            projectGrid.appendChild(
                card
            );

        }
    );

}


renderProjects();


/* ========================================
   HIỆN DANH SÁCH THU CHI
======================================== */

function showFinanceList() {

    financeProjectList.style.display =
        "grid";


    financeDetail.style.display =
        "none";


    financeProjectList.innerHTML =
        "";


    projects.forEach(
        function (project, index) {

            const totalExpense =
                calculateExpenses(
                    project
                );


            const remaining =
                project.income -
                totalExpense;


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "finance-project-card";


            card.innerHTML = `

                <div class="finance-project-number">
                    PROJECT ${String(
                        index + 1
                    ).padStart(2, "0")}
                </div>


                <h3>
                    ${project.name}
                </h3>


                <p>
                    Tổng thu:
                    ${formatMoney(
                        project.income
                    )}
                </p>


                <p>
                    Tổng chi:
                    ${formatMoney(
                        totalExpense
                    )}
                </p>


                <p>
                    Còn lại:
                    ${formatMoney(
                        remaining
                    )}
                </p>

            `;


            card.addEventListener(
                "click",
                function () {

                    showFinanceDetail(
                        project.id
                    );

                }
            );


            financeProjectList.appendChild(
                card
            );

        }
    );

}


/* ========================================
   TÍNH TỔNG CHI
======================================== */

function calculateExpenses(
    project
) {

    return project.expenses.reduce(
        function (
            total,
            item
        ) {

            return total +
                (
                    item.quantity *
                    item.price
                );

        },
        0
    );

}


/* ========================================
   TÍNH TỔNG CỌC
======================================== */

function calculateDeposit(
    project
) {

    return project.expenses.reduce(
        function (
            total,
            item
        ) {

            return total +
                item.deposit;

        },
        0
    );

}


/* ========================================
   HIỆN CHI TIẾT
======================================== */

function showFinanceDetail(
    projectID
) {

    const project =
        projects.find(
            function (item) {

                return item.id ===
                    projectID;

            }
        );


    if (!project) {
        return;
    }


    const totalExpense =
        calculateExpenses(
            project
        );


    const totalDeposit =
        calculateDeposit(
            project
        );


    const remaining =
        project.income -
        totalExpense;


    financeProjectList.style.display =
        "none";


    financeDetail.style.display =
        "block";


    let rows = "";


    if (
        project.expenses.length ===
        0
    ) {

        rows = `

            <tr>

                <td colspan="7">

                    Chưa có khoản chi nào.

                </td>

            </tr>

        `;

    }


    else {

        project.expenses.forEach(
            function (item) {

                const total =
                    item.quantity *
                    item.price;


                rows += `

                    <tr>

                        <td>
                            ${item.date}
                        </td>


                        <td>

                            <span
                                class="payment-type"
                            >
                                ${item.type}
                            </span>

                        </td>


                        <td>
                            ${item.quantity}
                        </td>


                        <td>
                            ${formatMoney(
                                item.price
                            )}
                        </td>


                        <td>
                            ${formatMoney(
                                total
                            )}
                        </td>


                        <td>
                            ${formatMoney(
                                item.deposit
                            )}
                        </td>


                        <td>
                            ${item.proof}
                        </td>

                    </tr>

                `;

            }
        );

    }


    financeProjectContent.innerHTML = `

        <h3 class="finance-title">

            ${project.name}

        </h3>


        <div class="finance-summary">


            <div>

                <span>
                    TỔNG THU
                </span>

                <strong>
                    ${formatMoney(
                        project.income
                    )}
                </strong>

            </div>


            <div>

                <span>
                    TỔNG CHI
                </span>

                <strong>
                    ${formatMoney(
                        totalExpense
                    )}
                </strong>

            </div>


            <div>

                <span>
                    CÒN LẠI
                </span>

                <strong>
                    ${formatMoney(
                        remaining
                    )}
                </strong>

            </div>

        </div>


        <p
            style="
                margin-bottom:20px;
                font-size:11px;
                opacity:.6;
            "
        >

            Tổng tiền cọc:
            ${formatMoney(
                totalDeposit
            )}

        </p>


        <div
            class="finance-table-wrapper"
        >

            <table
                class="finance-table"
            >

                <thead>

                    <tr>

                        <th>
                            NGÀY
                        </th>

                        <th>
                            LOẠI THANH TOÁN
                        </th>

                        <th>
                            SỐ LƯỢNG
                        </th>

                        <th>
                            ĐƠN GIÁ
                        </th>

                        <th>
                            THÀNH TIỀN
                        </th>

                        <th>
                            CỌC
                        </th>

                        <th>
                            MINH CHỨNG
                        </th>

                    </tr>

                </thead>


                <tbody>

                    ${rows}

                </tbody>

            </table>

        </div>

    `;

}


/* ========================================
   BACK DANH SÁCH PROJECT
======================================== */

financeBack.addEventListener(
    "click",
    function () {

        showFinanceList();

    }
);


/* ========================================
   FORMAT TIỀN
======================================== */

function formatMoney(
    number
) {

    return new Intl.NumberFormat(
        "vi-VN",
        {
            style: "currency",
            currency: "VND"
        }
    ).format(number);

}
