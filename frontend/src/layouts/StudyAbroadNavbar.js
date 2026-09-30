/* =========================================================
   EDUCONNECT — STUDY ABROAD NAVBAR
   Complete standalone navbar
   Includes:
   - Mega menu clicks
   - Country switching
   - Destination switching
   - Exam switching
   - Resource switching
   - More switching
   - Mobile menu
   - Outside click
   - ESC close
========================================================= */


/* =========================================================
   UNIVERSITY CARD DATA
========================================================= */

function countryUniversityCards(country) {

    const universities = {

        USA: [
            {
                logo: "NU",
                tag: "TOP UNIVERSITY",
                tagClass: "purple",
                title: "MBA",
                university: "Northeastern University",
                meta1: "Boston",
                meta2: "USA"
            },
            {
                logo: "NU",
                tag: "POPULAR",
                tagClass: "blue",
                title: "MPS in Applied AI",
                university: "Northeastern University",
                meta1: "Boston",
                meta2: "USA"
            },
            {
                logo: "NYU",
                tag: "UNDERGRADUATE",
                tagClass: "purple",
                title: "BS Information Systems & Technology",
                university: "New York University",
                meta1: "New York",
                meta2: "USA"
            },
            {
                logo: "NYU",
                tag: "UNDERGRADUATE",
                tagClass: "blue",
                title: "BS Leadership and Management",
                university: "New York University",
                meta1: "New York",
                meta2: "USA"
            }
        ],

        Germany: [
            {
                logo: "TUM",
                tag: "TOP UNIVERSITY",
                tagClass: "purple",
                title: "MSc Computer Science",
                university: "Technical University of Munich",
                meta1: "Munich",
                meta2: "Germany"
            },
            {
                logo: "RWTH",
                tag: "POPULAR",
                tagClass: "blue",
                title: "MSc Data Science",
                university: "RWTH Aachen University",
                meta1: "Aachen",
                meta2: "Germany"
            },
            {
                logo: "FU",
                tag: "MASTER",
                tagClass: "purple",
                title: "MSc Artificial Intelligence",
                university: "Free University of Berlin",
                meta1: "Berlin",
                meta2: "Germany"
            },
            {
                logo: "TU",
                tag: "ENGINEERING",
                tagClass: "blue",
                title: "MSc Mechanical Engineering",
                university: "TU Berlin",
                meta1: "Berlin",
                meta2: "Germany"
            }
        ],

        France: [
            {
                logo: "PSL",
                tag: "TOP UNIVERSITY",
                tagClass: "purple",
                title: "MSc Management",
                university: "PSL University",
                meta1: "Paris",
                meta2: "France"
            },
            {
                logo: "HEC",
                tag: "BUSINESS",
                tagClass: "blue",
                title: "Master in Management",
                university: "HEC Paris",
                meta1: "Paris",
                meta2: "France"
            },
            {
                logo: "IP",
                tag: "ENGINEERING",
                tagClass: "purple",
                title: "MSc Engineering",
                university: "Institut Polytechnique de Paris",
                meta1: "Paris",
                meta2: "France"
            },
            {
                logo: "SOR",
                tag: "MASTER",
                tagClass: "blue",
                title: "MSc Computer Science",
                university: "Sorbonne University",
                meta1: "Paris",
                meta2: "France"
            }
        ],

        UK: [
            {
                logo: "MAN",
                tag: "TOP UNIVERSITY",
                tagClass: "purple",
                title: "MSc Computer Science",
                university: "University of Manchester",
                meta1: "Manchester",
                meta2: "UK"
            },
            {
                logo: "KCL",
                tag: "POPULAR",
                tagClass: "blue",
                title: "MSc Data Science",
                university: "King's College London",
                meta1: "London",
                meta2: "UK"
            },
            {
                logo: "LSE",
                tag: "BUSINESS",
                tagClass: "purple",
                title: "MSc Business Analytics",
                university: "London School of Economics",
                meta1: "London",
                meta2: "UK"
            },
            {
                logo: "UCL",
                tag: "TECHNOLOGY",
                tagClass: "blue",
                title: "MSc Information Technology",
                university: "University College London",
                meta1: "London",
                meta2: "UK"
            }
        ],

        Australia: [
            {
                logo: "USYD",
                tag: "TOP UNIVERSITY",
                tagClass: "purple",
                title: "Master of Computer Science",
                university: "University of Sydney",
                meta1: "Sydney",
                meta2: "Australia"
            },
            {
                logo: "UNSW",
                tag: "POPULAR",
                tagClass: "blue",
                title: "Master of IT",
                university: "UNSW Sydney",
                meta1: "Sydney",
                meta2: "Australia"
            },
            {
                logo: "MON",
                tag: "BUSINESS",
                tagClass: "purple",
                title: "Master of Business Analytics",
                university: "Monash University",
                meta1: "Melbourne",
                meta2: "Australia"
            },
            {
                logo: "MEL",
                tag: "ENGINEERING",
                tagClass: "blue",
                title: "Master of Engineering",
                university: "University of Melbourne",
                meta1: "Melbourne",
                meta2: "Australia"
            }
        ],

        Finland: [
            {
                logo: "AAL",
                tag: "TOP UNIVERSITY",
                tagClass: "purple",
                title: "MSc Computer Science",
                university: "Aalto University",
                meta1: "Espoo",
                meta2: "Finland"
            },
            {
                logo: "HEL",
                tag: "POPULAR",
                tagClass: "blue",
                title: "MSc Data Science",
                university: "University of Helsinki",
                meta1: "Helsinki",
                meta2: "Finland"
            },
            {
                logo: "TUR",
                tag: "MASTER",
                tagClass: "purple",
                title: "MSc Technology",
                university: "University of Turku",
                meta1: "Turku",
                meta2: "Finland"
            },
            {
                logo: "TAM",
                tag: "TECHNOLOGY",
                tagClass: "blue",
                title: "MSc Computing Sciences",
                university: "Tampere University",
                meta1: "Tampere",
                meta2: "Finland"
            }
        ],

        UAE: [
            {
                logo: "KHA",
                tag: "TOP UNIVERSITY",
                tagClass: "purple",
                title: "Computer Science",
                university: "Khalifa University",
                meta1: "Abu Dhabi",
                meta2: "UAE"
            },
            {
                logo: "AUD",
                tag: "POPULAR",
                tagClass: "blue",
                title: "Business Administration",
                university: "American University in Dubai",
                meta1: "Dubai",
                meta2: "UAE"
            },
            {
                logo: "NYU",
                tag: "MASTER",
                tagClass: "purple",
                title: "MSc Management",
                university: "NYU Abu Dhabi",
                meta1: "Abu Dhabi",
                meta2: "UAE"
            },
            {
                logo: "UOS",
                tag: "TECHNOLOGY",
                tagClass: "blue",
                title: "MSc Computer Science",
                university: "University of Sharjah",
                meta1: "Sharjah",
                meta2: "UAE"
            }
        ],

        Canada: [
            {
                logo: "UOT",
                tag: "TOP UNIVERSITY",
                tagClass: "purple",
                title: "Master of Computer Science",
                university: "University of Toronto",
                meta1: "Toronto",
                meta2: "Canada"
            },
            {
                logo: "UBC",
                tag: "POPULAR",
                tagClass: "blue",
                title: "Master of Data Science",
                university: "University of British Columbia",
                meta1: "Vancouver",
                meta2: "Canada"
            },
            {
                logo: "WAT",
                tag: "TECHNOLOGY",
                tagClass: "purple",
                title: "Master of Data Science",
                university: "University of Waterloo",
                meta1: "Waterloo",
                meta2: "Canada"
            },
            {
                logo: "MCG",
                tag: "MASTER",
                tagClass: "blue",
                title: "MSc Computer Science",
                university: "McGill University",
                meta1: "Montreal",
                meta2: "Canada"
            }
        ],

        Hungary: [
            {
                logo: "BME",
                tag: "TOP UNIVERSITY",
                tagClass: "purple",
                title: "MSc Computer Science",
                university: "Budapest University of Technology",
                meta1: "Budapest",
                meta2: "Hungary"
            },
            {
                logo: "ELTE",
                tag: "POPULAR",
                tagClass: "blue",
                title: "MSc Data Science",
                university: "Eötvös Loránd University",
                meta1: "Budapest",
                meta2: "Hungary"
            },
            {
                logo: "SZEG",
                tag: "MASTER",
                tagClass: "purple",
                title: "MSc Engineering",
                university: "University of Szeged",
                meta1: "Szeged",
                meta2: "Hungary"
            },
            {
                logo: "DEB",
                tag: "TECHNOLOGY",
                tagClass: "blue",
                title: "MSc Computer Science",
                university: "University of Debrecen",
                meta1: "Debrecen",
                meta2: "Hungary"
            }
        ],

        Ireland: [
            {
                logo: "TCD",
                tag: "TOP UNIVERSITY",
                tagClass: "purple",
                title: "MSc Computer Science",
                university: "Trinity College Dublin",
                meta1: "Dublin",
                meta2: "Ireland"
            },
            {
                logo: "UCD",
                tag: "POPULAR",
                tagClass: "blue",
                title: "MSc Data & Computational Science",
                university: "University College Dublin",
                meta1: "Dublin",
                meta2: "Ireland"
            },
            {
                logo: "DCU",
                tag: "TECHNOLOGY",
                tagClass: "purple",
                title: "MSc Computing",
                university: "Dublin City University",
                meta1: "Dublin",
                meta2: "Ireland"
            },
            {
                logo: "UG",
                tag: "MASTER",
                tagClass: "blue",
                title: "MSc Computer Science",
                university: "University of Galway",
                meta1: "Galway",
                meta2: "Ireland"
            }
        ]

    };


    const list =
        universities[country] ||
        universities.USA;


    return list.map((item) => {

        return `
            <article class="edu-university-card">

                <div class="edu-university-card-top">

                    <div class="edu-university-logo">
                        ${item.logo}
                    </div>

                    <span class="edu-university-tag ${item.tagClass}">
                        ${item.tag}
                    </span>

                </div>

                <h4>
                    ${item.title}
                </h4>

                <p>
                    ${item.university}
                </p>

                <div class="edu-university-meta">

                    <span>
                        ${item.meta1}
                    </span>

                    <span>
                        ${item.meta2}
                    </span>

                </div>

                <a href="#study-abroad-universities">
                    View details
                    <span>→</span>
                </a>

            </article>
        `;

    }).join("");

}


/* =========================================================
   COUNTRY PANEL
========================================================= */

function countryPanel(
    country,
    count,
    subjects
) {

    return `
        <div
            class="edu-country-panel ${country === "USA" ? "active" : ""}"
            data-country-panel="${country}"
        >

            <div class="edu-country-heading">

                <h3>
                    ${country}
                    <span>(${count} Universities)</span>
                </h3>

                <a href="#study-abroad-universities">
                    View All
                </a>

            </div>


            <div class="edu-country-chips">

                ${subjects.map((subject) => `
                    <button
                        type="button"
                        data-country-subject="${subject}"
                    >
                        ${subject}
                    </button>
                `).join("")}

            </div>


            <div class="edu-university-grid">

                ${countryUniversityCards(country)}

            </div>

        </div>
    `;

}


/* =========================================================
   NAVBAR
========================================================= */

export default function StudyAbroadNavbar() {

    /*
       IMPORTANT:

       We use EVENT DELEGATION here.

       This means we don't need to modify main.js.

       The router creates this navbar through innerHTML,
       and these listeners work with the generated elements.
    */

    if (!window.__eduStudyNavbarController) {

        window.__eduStudyNavbarController = true;


        document.addEventListener(
            "click",
            (event) => {

                const destinationsLink =
                    event.target.closest(
                        "[data-open-destinations]"
                    );


                if (destinationsLink) {

                    event.preventDefault();
                    event.stopPropagation();

                    const navbar =
                        document.querySelector(
                            "#edu-study-nav"
                        );

                    const menu =
                        navbar?.querySelector(
                            '[data-mega-menu="destinations"]'
                        );

                    const trigger =
                        navbar?.querySelector(
                            '[data-mega-trigger="destinations"]'
                        );

                    if (!navbar || !menu || !trigger) {
                        return;
                    }

                    navbar.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                    navbar
                        .querySelectorAll(
                            ".edu-study-mega.is-open"
                        )
                        .forEach((openMenu) => {
                            openMenu.classList.remove("is-open");
                        });

                    navbar
                        .querySelectorAll(
                            ".edu-study-nav-item.is-open"
                        )
                        .forEach((openItem) => {
                            openItem.classList.remove("is-open");
                        });

                    navbar
                        .querySelectorAll(
                            ".edu-study-nav-button.is-open"
                        )
                        .forEach((openButton) => {
                            openButton.classList.remove("is-open");
                            openButton.setAttribute(
                                "aria-expanded",
                                "false"
                            );
                        });

                    menu.classList.add("is-open");
                    trigger.classList.add("is-open");
                    trigger.setAttribute(
                        "aria-expanded",
                        "true"
                    );

                    trigger
                        .closest(".edu-study-nav-item")
                        ?.classList.add("is-open");

                    navbar
                        .querySelector(".edu-study-menu")
                        ?.classList.add("is-open");

                    menu
                        .querySelectorAll("[data-mega-content]")
                        .forEach((panel) => {
                            panel.classList.toggle(
                                "active",
                                panel.dataset.megaContent === "featured"
                            );
                        });

                    menu
                        .querySelectorAll("[data-mega-panel]")
                        .forEach((panelButton) => {
                            panelButton.classList.toggle(
                                "active",
                                panelButton.dataset.megaPanel === "featured"
                            );
                        });

                    return;
                }

                const navbar =
                    event.target.closest(
                        "#edu-study-nav"
                    );


                /* =========================================
                   OUTSIDE CLICK
                ========================================== */

                if (!navbar) {

                    document
                        .querySelectorAll(
                            ".edu-study-mega.is-open"
                        )
                        .forEach((menu) => {

                            menu.classList.remove(
                                "is-open"
                            );

                        });


                    document
                        .querySelectorAll(
                            ".edu-study-nav-item.is-open"
                        )
                        .forEach((item) => {

                            item.classList.remove(
                                "is-open"
                            );

                        });


                    return;
                }


                /* =========================================
                   MAIN NAV BUTTON
                ========================================== */

                const navButton =
                    event.target.closest(
                        "[data-mega-trigger]"
                    );


                if (navButton) {

                    event.preventDefault();
                    event.stopPropagation();


                    const menuName =
                        navButton.dataset.megaTrigger;


                    const megaMenu =
                        navbar.querySelector(
                            `[data-mega-menu="${menuName}"]`
                        );


                    if (!megaMenu) {
                        return;
                    }


                    const wasOpen =
                        megaMenu.classList.contains(
                            "is-open"
                        );


                    /* Close every menu */

                    navbar
                        .querySelectorAll(
                            ".edu-study-mega.is-open"
                        )
                        .forEach((menu) => {

                            menu.classList.remove(
                                "is-open"
                            );

                        });


                    navbar
                        .querySelectorAll(
                            ".edu-study-nav-item.is-open"
                        )
                        .forEach((item) => {

                            item.classList.remove(
                                "is-open"
                            );

                        });


                    /* Open selected */

                    if (!wasOpen) {

                        megaMenu.classList.add(
                            "is-open"
                        );

                        navButton.classList.add(
                            "is-open"
                        );

                        const navItem =
                            navButton.closest(
                                ".edu-study-nav-item"
                            );

                        if (navItem) {

                            navItem.classList.add(
                                "is-open"
                            );

                        }

                    }

                    return;
                }


                /* =========================================
                   COUNTRY SWITCHING
                ========================================== */

                const countryButton =
                    event.target.closest(
                        ".edu-country-item"
                    );


                if (countryButton) {

                    event.preventDefault();
                    event.stopPropagation();


                    const country =
                        countryButton.dataset.country;


                    const mega =
                        countryButton.closest(
                            ".edu-country-mega"
                        );


                    if (!mega) {
                        return;
                    }


                    /* Remove active countries */

                    mega
                        .querySelectorAll(
                            ".edu-country-item.active"
                        )
                        .forEach((item) => {

                            item.classList.remove(
                                "active"
                            );

                        });


                    countryButton.classList.add(
                        "active"
                    );


                    /* Hide panels */

                    mega
                        .querySelectorAll(
                            ".edu-country-panel.active"
                        )
                        .forEach((panel) => {

                            panel.classList.remove(
                                "active"
                            );

                        });


                    /* Show selected panel */

                    const selectedPanel =
                        mega.querySelector(
                            `[data-country-panel="${country}"]`
                        );


                    if (selectedPanel) {

                        selectedPanel.classList.add(
                            "active"
                        );

                    }

                    return;
                }


                /* =========================================
                   SUBJECT CHIP
                ========================================== */

                const subjectButton =
                    event.target.closest(
                        "[data-country-subject]"
                    );


                if (subjectButton) {

                    event.preventDefault();
                    event.stopPropagation();


                    const panel =
                        subjectButton.closest(
                            ".edu-country-panel"
                        );


                    if (!panel) {
                        return;
                    }


                    panel
                        .querySelectorAll(
                            "[data-country-subject]"
                        )
                        .forEach((button) => {

                            button.classList.remove(
                                "active"
                            );

                        });


                    subjectButton.classList.add(
                        "active"
                    );

                    return;
                }


                /* =========================================
                   SIDEBAR MENU
                ========================================== */

                const sideButton =
                    event.target.closest(
                        ".edu-study-side-item"
                    );


                if (sideButton) {

                    event.preventDefault();
                    event.stopPropagation();


                    const mega =
                        sideButton.closest(
                            ".edu-study-mega"
                        );


                    if (!mega) {
                        return;
                    }


                    mega
                        .querySelectorAll(
                            ".edu-study-side-item.active"
                        )
                        .forEach((item) => {

                            item.classList.remove(
                                "active"
                            );

                        });


                    sideButton.classList.add(
                        "active"
                    );


                    const panelName =
                        sideButton.dataset.megaPanel;


                    if (!panelName) {
                        return;
                    }


                    mega
                        .querySelectorAll(
                            ".edu-study-panel.active"
                        )
                        .forEach((panel) => {

                            panel.classList.remove(
                                "active"
                            );

                        });


                    const panel =
                        mega.querySelector(
                            `[data-mega-content="${panelName}"]`
                        );


                    if (panel) {

                        panel.classList.add(
                            "active"
                        );

                    }

                    return;
                }


                /* =========================================
                   MOBILE BUTTON
                ========================================== */

                const mobileButton =
                    event.target.closest(
                        ".edu-study-mobile-button"
                    );


                if (mobileButton) {

                    event.preventDefault();
                    event.stopPropagation();


                    const menu =
                        navbar.querySelector(
                            ".edu-study-menu"
                        );


                    if (!menu) {
                        return;
                    }


                    menu.classList.toggle(
                        "is-open"
                    );


                    const expanded =
                        menu.classList.contains(
                            "is-open"
                        );


                    mobileButton.setAttribute(
                        "aria-expanded",
                        String(expanded)
                    );


                    return;
                }

            },
            true
        );


        /* ================================================
           ESC KEY
        ================================================= */

        document.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key !== "Escape"
                ) {
                    return;
                }


                document
                    .querySelectorAll(
                        ".edu-study-mega.is-open"
                    )
                    .forEach((menu) => {

                        menu.classList.remove(
                            "is-open"
                        );

                    });


                document
                    .querySelectorAll(
                        ".edu-study-nav-item.is-open"
                    )
                    .forEach((item) => {

                        item.classList.remove(
                            "is-open"
                        );

                    });

            }
        );

    }


    /* =====================================================
       NAVBAR HTML
    ====================================================== */

    return `

        <section
            class="edu-study-nav"
            id="edu-study-nav"
        >

            <div class="edu-study-nav-inner">


                <!-- BRAND -->

                <a
                    href="/"
                    class="edu-study-brand"
                >

                    <span
                        class="edu-study-brand-mark"
                    >
                        EC
                    </span>

                    EDUCONNECT

                </a>


                <!-- MAIN MENU -->

                <nav
                    class="edu-study-menu"
                    aria-label="Study Abroad Navigation"
                >


                    <!-- ===================================
                         EXPLORE COUNTRIES
                    ==================================== -->

                    <div
                        class="edu-study-nav-item"
                    >

                        <button
                            type="button"
                            class="edu-study-nav-button"
                            data-mega-trigger="countries"
                            aria-expanded="false"
                        >

                            Explore Countries

                            <span>⌄</span>

                        </button>


                        <div
                            class="edu-study-mega edu-country-mega"
                            data-mega-menu="countries"
                        >

                            <div
                                class="edu-country-mega-inner"
                            >


                                <!-- COUNTRY SIDEBAR -->

                                <aside
                                    class="edu-country-sidebar"
                                >

                                    <div
                                        class="edu-country-sidebar-title"
                                    >
                                        Explore Countries
                                    </div>


                                    <button
                                        type="button"
                                        class="edu-country-item active"
                                        data-country="USA"
                                    >
                                        <span>
                                            United States
                                        </span>

                                        <span
                                            class="edu-country-arrow"
                                        >
                                            →
                                        </span>
                                    </button>


                                    <button
                                        type="button"
                                        class="edu-country-item"
                                        data-country="Germany"
                                    >
                                        <span>
                                            Germany
                                        </span>

                                        <span
                                            class="edu-country-arrow"
                                        >
                                            →
                                        </span>
                                    </button>


                                    <button
                                        type="button"
                                        class="edu-country-item"
                                        data-country="France"
                                    >
                                        <span>
                                            France
                                        </span>

                                        <span
                                            class="edu-country-arrow"
                                        >
                                            →
                                        </span>
                                    </button>


                                    <button
                                        type="button"
                                        class="edu-country-item"
                                        data-country="UK"
                                    >
                                        <span>
                                            UK
                                        </span>

                                        <span
                                            class="edu-country-arrow"
                                        >
                                            →
                                        </span>
                                    </button>


                                    <button
                                        type="button"
                                        class="edu-country-item"
                                        data-country="Australia"
                                    >
                                        <span>
                                            Australia
                                        </span>

                                        <span
                                            class="edu-country-arrow"
                                        >
                                            →
                                        </span>
                                    </button>


                                    <button
                                        type="button"
                                        class="edu-country-item"
                                        data-country="Finland"
                                    >
                                        <span>
                                            Finland
                                        </span>

                                        <span
                                            class="edu-country-arrow"
                                        >
                                            →
                                        </span>
                                    </button>


                                    <button
                                        type="button"
                                        class="edu-country-item"
                                        data-country="UAE"
                                    >
                                        <span>
                                            United Arab Emirates
                                        </span>

                                        <span
                                            class="edu-country-arrow"
                                        >
                                            →
                                        </span>
                                    </button>


                                    <button
                                        type="button"
                                        class="edu-country-item"
                                        data-country="Canada"
                                    >
                                        <span>
                                            Canada
                                        </span>

                                        <span
                                            class="edu-country-arrow"
                                        >
                                            →
                                        </span>
                                    </button>


                                    <button
                                        type="button"
                                        class="edu-country-item"
                                        data-country="Hungary"
                                    >
                                        <span>
                                            Hungary
                                        </span>

                                        <span
                                            class="edu-country-arrow"
                                        >
                                            →
                                        </span>
                                    </button>


                                    <button
                                        type="button"
                                        class="edu-country-item"
                                        data-country="Ireland"
                                    >
                                        <span>
                                            Ireland
                                        </span>

                                        <span
                                            class="edu-country-arrow"
                                        >
                                            →
                                        </span>
                                    </button>

                                </aside>


                                <!-- COUNTRY CONTENT -->

                                <div
                                    class="edu-country-content"
                                >

                                    ${countryPanel(
                                        "USA",
                                        "1,000+",
                                        [
                                            "Computer Science",
                                            "Business",
                                            "Engineering",
                                            "Data Science",
                                            "MBA",
                                            "Information Technology"
                                        ]
                                    )}


                                    ${countryPanel(
                                        "Germany",
                                        "500+",
                                        [
                                            "Computer Science",
                                            "Engineering",
                                            "Data Science",
                                            "Business",
                                            "AI & Machine Learning",
                                            "Technology"
                                        ]
                                    )}


                                    ${countryPanel(
                                        "France",
                                        "400+",
                                        [
                                            "Business",
                                            "Management",
                                            "Engineering",
                                            "Computer Science",
                                            "Finance",
                                            "Technology"
                                        ]
                                    )}


                                    ${countryPanel(
                                        "UK",
                                        "800+",
                                        [
                                            "Computer Science",
                                            "Business",
                                            "Data Science",
                                            "Engineering",
                                            "Finance",
                                            "Management"
                                        ]
                                    )}


                                    ${countryPanel(
                                        "Australia",
                                        "600+",
                                        [
                                            "Computer Science",
                                            "Business",
                                            "Engineering",
                                            "Data Science",
                                            "IT",
                                            "Management"
                                        ]
                                    )}


                                    ${countryPanel(
                                        "Finland",
                                        "200+",
                                        [
                                            "Computer Science",
                                            "Technology",
                                            "Engineering",
                                            "Data Science",
                                            "Business",
                                            "AI"
                                        ]
                                    )}


                                    ${countryPanel(
                                        "UAE",
                                        "150+",
                                        [
                                            "Business",
                                            "Computer Science",
                                            "Engineering",
                                            "Management",
                                            "Technology",
                                            "Finance"
                                        ]
                                    )}


                                    ${countryPanel(
                                        "Canada",
                                        "700+",
                                        [
                                            "Computer Science",
                                            "Business",
                                            "Engineering",
                                            "Data Science",
                                            "Management",
                                            "Technology"
                                        ]
                                    )}


                                    ${countryPanel(
                                        "Hungary",
                                        "150+",
                                        [
                                            "Computer Science",
                                            "Engineering",
                                            "Business",
                                            "Technology",
                                            "Data Science",
                                            "Management"
                                        ]
                                    )}


                                    ${countryPanel(
                                        "Ireland",
                                        "250+",
                                        [
                                            "Computer Science",
                                            "Technology",
                                            "Business",
                                            "Data Science",
                                            "Engineering",
                                            "Finance"
                                        ]
                                    )}

                                </div>

                            </div>

                        </div>

                    </div>


                    <!-- ===================================
                         DESTINATIONS
                    ==================================== -->

                    <div
                        class="edu-study-nav-item"
                    >

                        <button
                            type="button"
                            class="edu-study-nav-button"
                            data-mega-trigger="destinations"
                            aria-expanded="false"
                        >

                            Destinations

                            <span>⌄</span>

                        </button>


                        <div
                            class="edu-study-mega"
                            data-mega-menu="destinations"
                        >

                            <div
                                class="edu-study-mega-inner"
                            >

                                <aside
                                    class="edu-study-mega-sidebar"
                                >

                                    <button
                                        type="button"
                                        class="edu-study-side-item active"
                                        data-mega-panel="featured"
                                    >
                                        Featured
                                        <span>→</span>
                                    </button>

                                    <button
                                        type="button"
                                        class="edu-study-side-item"
                                        data-mega-panel="universities"
                                    >
                                        Universities
                                        <span>→</span>
                                    </button>

                                    <button
                                        type="button"
                                        class="edu-study-side-item"
                                        data-mega-panel="courses"
                                    >
                                        Courses
                                        <span>→</span>
                                    </button>

                                </aside>


                                <div
                                    class="edu-study-mega-content"
                                >

                                    <div
                                        class="edu-study-panel active"
                                        data-mega-content="featured"
                                    >

                                        <div class="edu-study-column">

                                            <h4>
                                                Popular Destinations
                                            </h4>

                                            <a href="#study-abroad-destinations">
                                                USA
                                            </a>

                                            <a href="#study-abroad-destinations">
                                                UK
                                            </a>

                                            <a href="#study-abroad-destinations">
                                                Canada
                                            </a>

                                            <a href="#study-abroad-destinations">
                                                Australia
                                            </a>

                                            <a href="#study-abroad-destinations">
                                                Germany
                                            </a>

                                        </div>


                                        <div class="edu-study-column">

                                            <h4>
                                                Europe
                                            </h4>

                                            <a href="#study-abroad-destinations">
                                                France
                                            </a>

                                            <a href="#study-abroad-destinations">
                                                Finland
                                            </a>

                                            <a href="#study-abroad-destinations">
                                                Hungary
                                            </a>

                                            <a href="#study-abroad-destinations">
                                                Ireland
                                            </a>

                                        </div>


                                        <div class="edu-study-column">

                                            <h4>
                                                Middle East
                                            </h4>

                                            <a href="#study-abroad-destinations">
                                                UAE
                                            </a>

                                            <a href="#study-abroad-destinations">
                                                Dubai
                                            </a>

                                            <a href="#study-abroad-destinations">
                                                Abu Dhabi
                                            </a>

                                        </div>


                                        <div
                                            class="edu-study-feature"
                                        >

                                            <span
                                                class="edu-study-feature-icon"
                                            >
                                                🌍
                                            </span>

                                            <strong>
                                                Find your study destination
                                            </strong>

                                            <p>
                                                Compare destinations,
                                                universities and study
                                                opportunities.
                                            </p>

                                            <a
                                                href="#study-abroad-destinations"
                                            >
                                                Explore destinations →
                                            </a>

                                        </div>

                                    </div>


                                    <div
                                        class="edu-study-panel"
                                        data-mega-content="universities"
                                    >

                                        <div class="edu-study-column">

                                            <h4>
                                                University Types
                                            </h4>

                                            <a href="#study-abroad-universities">
                                                Top Universities
                                            </a>

                                            <a href="#study-abroad-universities">
                                                Public Universities
                                            </a>

                                            <a href="#study-abroad-universities">
                                                Private Universities
                                            </a>

                                        </div>


                                        <div class="edu-study-column">

                                            <h4>
                                                Explore By
                                            </h4>

                                            <a href="#study-abroad-universities">
                                                Ranking
                                            </a>

                                            <a href="#study-abroad-universities">
                                                Country
                                            </a>

                                            <a href="#study-abroad-universities">
                                                Course
                                            </a>

                                        </div>

                                    </div>


                                    <div
                                        class="edu-study-panel"
                                        data-mega-content="courses"
                                    >

                                        <div class="edu-study-column">

                                            <h4>
                                                Popular Courses
                                            </h4>

                                            <a href="#study-abroad-course-explorer">
                                                Computer Science
                                            </a>

                                            <a href="#study-abroad-course-explorer">
                                                Business
                                            </a>

                                            <a href="#study-abroad-course-explorer">
                                                Engineering
                                            </a>

                                            <a href="#study-abroad-course-explorer">
                                                Data Science
                                            </a>

                                        </div>


                                        <div class="edu-study-column">

                                            <h4>
                                                Study Level
                                            </h4>

                                            <a href="#study-abroad-degree-explorer">
                                                Undergraduate
                                            </a>

                                            <a href="#study-abroad-degree-explorer">
                                                Postgraduate
                                            </a>

                                            <a href="#study-abroad-degree-explorer">
                                                MBA
                                            </a>

                                            <a href="#study-abroad-degree-explorer">
                                                PhD
                                            </a>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    <!-- ===================================
                         EXAMS
                    ==================================== -->

                    <div
                        class="edu-study-nav-item"
                    >

                        <button
                            type="button"
                            class="edu-study-nav-button"
                            data-mega-trigger="exams"
                            aria-expanded="false"
                        >

                            Exams

                            <span>⌄</span>

                        </button>


                        <div
                            class="edu-study-mega"
                            data-mega-menu="exams"
                        >

                            <div
                                class="edu-study-mega-inner"
                            >

                                <aside
                                    class="edu-study-mega-sidebar"
                                >

                                    <button
                                        type="button"
                                        class="edu-study-side-item active"
                                        data-mega-panel="english-tests"
                                    >
                                        English Tests
                                        <span>→</span>
                                    </button>

                                    <button
                                        type="button"
                                        class="edu-study-side-item"
                                        data-mega-panel="admission-tests"
                                    >
                                        Admission Tests
                                        <span>→</span>
                                    </button>

                                </aside>


                                <div
                                    class="edu-study-mega-content"
                                >

                                    <div
                                        class="edu-study-panel active"
                                        data-mega-content="english-tests"
                                    >

                                        <div class="edu-study-column">

                                            <h4>
                                                English Tests
                                            </h4>

                                            <a href="#study-abroad-exams">
                                                IELTS
                                            </a>

                                            <a href="#study-abroad-exams">
                                                TOEFL
                                            </a>

                                            <a href="#study-abroad-exams">
                                                PTE
                                            </a>

                                            <a href="#study-abroad-exams">
                                                Duolingo
                                            </a>

                                        </div>


                                        <div class="edu-study-column">

                                            <h4>
                                                Preparation
                                            </h4>

                                            <a href="#study-abroad-exams">
                                                Exam Pattern
                                            </a>

                                            <a href="#study-abroad-exams">
                                                Preparation Guide
                                            </a>

                                            <a href="#study-abroad-exams">
                                                Practice
                                            </a>

                                        </div>


                                        <div
                                            class="edu-study-feature"
                                        >

                                            <span
                                                class="edu-study-feature-icon"
                                            >
                                                ✓
                                            </span>

                                            <strong>
                                                Prepare for your exam
                                            </strong>

                                            <p>
                                                Understand the test
                                                requirements for your
                                                study destination.
                                            </p>

                                            <a href="#study-abroad-exams">
                                                Explore exams →
                                            </a>

                                        </div>

                                    </div>


                                    <div
                                        class="edu-study-panel"
                                        data-mega-content="admission-tests"
                                    >

                                        <div class="edu-study-column">

                                            <h4>
                                                Graduate
                                            </h4>

                                            <a href="#study-abroad-exams">
                                                GRE
                                            </a>

                                            <a href="#study-abroad-exams">
                                                GMAT
                                            </a>

                                            <a href="#study-abroad-exams">
                                                SAT
                                            </a>

                                        </div>


                                        <div class="edu-study-column">

                                            <h4>
                                                Other Tests
                                            </h4>

                                            <a href="#study-abroad-exams">
                                                ACT
                                            </a>

                                            <a href="#study-abroad-exams">
                                                University Tests
                                            </a>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    <!-- ===================================
                         RESOURCES
                    ==================================== -->

                    <div
                        class="edu-study-nav-item"
                    >

                        <button
                            type="button"
                            class="edu-study-nav-button"
                            data-mega-trigger="resources"
                            aria-expanded="false"
                        >

                            Resources

                            <span>⌄</span>

                        </button>


                        <div
                            class="edu-study-mega"
                            data-mega-menu="resources"
                        >

                            <div
                                class="edu-study-mega-inner"
                            >

                                <aside
                                    class="edu-study-mega-sidebar"
                                >

                                    <button
                                        type="button"
                                        class="edu-study-side-item active"
                                        data-mega-panel="study-guides"
                                    >
                                        Study Guides
                                        <span>→</span>
                                    </button>

                                    <button
                                        type="button"
                                        class="edu-study-side-item"
                                        data-mega-panel="scholarships"
                                    >
                                        Scholarships
                                        <span>→</span>
                                    </button>

                                    <button
                                        type="button"
                                        class="edu-study-side-item"
                                        data-mega-panel="career"
                                    >
                                        Jobs & Career
                                        <span>→</span>
                                    </button>

                                </aside>


                                <div
                                    class="edu-study-mega-content"
                                >

                                    <div
                                        class="edu-study-panel active"
                                        data-mega-content="study-guides"
                                    >

                                        <div class="edu-study-column">

                                            <h4>
                                                Study Guides
                                            </h4>

                                            <a href="#study-abroad-admission-requirements">
                                                Admission Requirements
                                            </a>

                                            <a href="#study-abroad-application-process">
                                                Application Process
                                            </a>

                                            <a href="#study-abroad-intakes">
                                                Intakes
                                            </a>

                                        </div>


                                        <div class="edu-study-column">

                                            <h4>
                                                Planning
                                            </h4>

                                            <a href="#study-abroad-cost">
                                                Cost & Finance
                                            </a>

                                            <a href="#study-abroad-scholarships">
                                                Scholarships
                                            </a>

                                            <a href="#study-abroad-faq">
                                                FAQs
                                            </a>

                                        </div>


                                        <div
                                            class="edu-study-feature"
                                        >

                                            <span
                                                class="edu-study-feature-icon"
                                            >
                                                📚
                                            </span>

                                            <strong>
                                                Study Abroad Guide
                                            </strong>

                                            <p>
                                                Everything you need
                                                to plan your journey.
                                            </p>

                                            <a href="#study-abroad-explorer">
                                                Start exploring →
                                            </a>

                                        </div>

                                    </div>


                                    <div
                                        class="edu-study-panel"
                                        data-mega-content="scholarships"
                                    >

                                        <div class="edu-study-column">

                                            <h4>
                                                Scholarships
                                            </h4>

                                            <a href="#study-abroad-scholarships">
                                                Merit Scholarships
                                            </a>

                                            <a href="#study-abroad-scholarships">
                                                Need Based
                                            </a>

                                            <a href="#study-abroad-scholarships">
                                                University Awards
                                            </a>

                                        </div>

                                    </div>


                                    <div
                                        class="edu-study-panel"
                                        data-mega-content="career"
                                    >

                                        <div class="edu-study-column">

                                            <h4>
                                                Career
                                            </h4>

                                            <a href="#study-abroad-reviews">
                                                Student Perspectives
                                            </a>

                                            <a href="#study-abroad-explorer">
                                                Career Programs
                                            </a>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    <!-- ===================================
                         MORE
                    ==================================== -->

                    <div
                        class="edu-study-nav-item"
                    >

                        <button
                            type="button"
                            class="edu-study-nav-button"
                            data-mega-trigger="more"
                            aria-expanded="false"
                        >

                            More

                            <span>⌄</span>

                        </button>


                        <div
                            class="edu-study-mega"
                            data-mega-menu="more"
                        >

                            <div
                                class="edu-study-mega-inner"
                            >

                                <aside
                                    class="edu-study-mega-sidebar"
                                >

                                    <button
                                        type="button"
                                        class="edu-study-side-item active"
                                        data-mega-panel="tools"
                                    >
                                        Tools
                                        <span>→</span>
                                    </button>

                                    <button
                                        type="button"
                                        class="edu-study-side-item"
                                        data-mega-panel="services"
                                    >
                                        Services
                                        <span>→</span>
                                    </button>

                                    <button
                                        type="button"
                                        class="edu-study-side-item"
                                        data-mega-panel="support"
                                    >
                                        Support
                                        <span>→</span>
                                    </button>

                                </aside>


                                <div
                                    class="edu-study-mega-content"
                                >

                                    <div
                                        class="edu-study-panel active"
                                        data-mega-content="tools"
                                    >

                                        <div class="edu-study-column">

                                            <h4>
                                                Study Tools
                                            </h4>

                                            <a href="#study-abroad-cost">
                                                Cost Planner
                                            </a>

                                            <a href="#study-abroad-country-comparison">
                                                Country Comparison
                                            </a>

                                            <a href="#study-abroad-universities">
                                                University Shortlist
                                            </a>

                                        </div>


                                        <div class="edu-study-column">

                                            <h4>
                                                Planning
                                            </h4>

                                            <a href="#study-abroad-intakes">
                                                Intake Planner
                                            </a>

                                            <a href="#study-abroad-admission-requirements">
                                                Requirements
                                            </a>

                                            <a href="#study-abroad-application-process">
                                                Application Process
                                            </a>

                                        </div>

                                    </div>


                                    <div
                                        class="edu-study-panel"
                                        data-mega-content="services"
                                    >

                                        <div class="edu-study-column">

                                            <h4>
                                                EDUCONNECT
                                            </h4>

                                            <a href="#study-abroad-explorer">
                                                Study Abroad
                                            </a>

                                            <a href="#study-abroad-universities">
                                                University Discovery
                                            </a>

                                            <a href="#study-abroad-scholarships">
                                                Scholarship Discovery
                                            </a>

                                        </div>

                                    </div>


                                    <div
                                        class="edu-study-panel"
                                        data-mega-content="support"
                                    >

                                        <div class="edu-study-column">

                                            <h4>
                                                Help & Support
                                            </h4>

                                            <a href="#study-abroad-faq">
                                                FAQs
                                            </a>

                                            <a href="#study-abroad-application-process">
                                                Application Help
                                            </a>

                                            <a href="#study-abroad-cta">
                                                Get Started
                                            </a>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </nav>


                <!-- RIGHT ACTIONS -->

                <div
                    class="edu-study-nav-actions"
                >

                    <a
                        href="#study-abroad-cta"
                        class="edu-study-contact"
                    >
                        Get Started
                    </a>


                    <button
                        type="button"
                        class="edu-study-mobile-button"
                        aria-label="Open navigation"
                        aria-expanded="false"
                    >

                        <span></span>
                        <span></span>
                        <span></span>

                    </button>

                </div>

            </div>

        </section>

    `;

}
