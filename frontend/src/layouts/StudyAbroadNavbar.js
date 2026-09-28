/* =========================================================
   EDUCONNECT — STUDY ABROAD NAVBAR
   Complete Navbar Replacement
========================================================= */


/* =========================================================
   UNIVERSITY CARD DATA
========================================================= */

function countryUniversityCards(country) {

    const universities = {

        USA: [
            {
                logo: "N",
                title: "MBA at Northeastern University",
                university:
                    "D'Amore-McKim School of Business, Northeastern University",
                duration: "2 years 5 months",
                tag: "Top Picked",
                type: "purple"
            },
            {
                logo: "N",
                title: "MPS in Applied AI at Northeastern University",
                university:
                    "Northeastern University",
                duration: "1 year 11 months",
                tag: "STEM",
                type: "blue"
            },
            {
                logo: "NYU",
                title:
                    "BS Information Systems & Technology at NYU USA",
                university:
                    "New York University",
                duration: "4 years",
                tag: "STEM",
                type: "blue"
            },
            {
                logo: "NYU",
                title:
                    "BS Leadership and Management at NYU",
                university:
                    "New York University",
                duration: "4 years",
                tag: "Business",
                type: "purple"
            }
        ],

        Germany: [
            {
                logo: "TUM",
                title: "MSc Computer Science",
                university:
                    "Technical University of Munich",
                duration: "2 years",
                tag: "STEM",
                type: "blue"
            },
            {
                logo: "RW",
                title: "MSc Data Science",
                university:
                    "RWTH Aachen University",
                duration: "2 years",
                tag: "STEM",
                type: "blue"
            },
            {
                logo: "FU",
                title: "MSc Artificial Intelligence",
                university:
                    "Free University of Berlin",
                duration: "2 years",
                tag: "AI",
                type: "purple"
            },
            {
                logo: "TU",
                title: "MSc Mechanical Engineering",
                university:
                    "TU Berlin",
                duration: "2 years",
                tag: "Engineering",
                type: "blue"
            }
        ],

        France: [
            {
                logo: "PSL",
                title: "Master in Management",
                university:
                    "Paris Sciences et Lettres",
                duration: "2 years",
                tag: "Business",
                type: "purple"
            },
            {
                logo: "HEC",
                title: "MBA Programme",
                university:
                    "HEC Paris",
                duration: "16 months",
                tag: "Top Picked",
                type: "purple"
            }
        ],

        UK: [
            {
                logo: "U",
                title: "MSc Computer Science",
                university:
                    "University of Manchester",
                duration: "1 year",
                tag: "STEM",
                type: "blue"
            },
            {
                logo: "K",
                title: "MSc Data Science",
                university:
                    "King's College London",
                duration: "1 year",
                tag: "STEM",
                type: "blue"
            },
            {
                logo: "LSE",
                title: "MSc Business Analytics",
                university:
                    "London School of Economics",
                duration: "1 year",
                tag: "Business",
                type: "purple"
            },
            {
                logo: "UCL",
                title: "MSc Information Technology",
                university:
                    "University College London",
                duration: "1 year",
                tag: "STEM",
                type: "blue"
            }
        ],

        Australia: [
            {
                logo: "M",
                title: "Master of Information Technology",
                university:
                    "University of Melbourne",
                duration: "2 years",
                tag: "STEM",
                type: "blue"
            },
            {
                logo: "UNSW",
                title: "Master of Engineering",
                university:
                    "UNSW Sydney",
                duration: "2 years",
                tag: "Engineering",
                type: "blue"
            },
            {
                logo: "S",
                title: "Master of Data Science",
                university:
                    "University of Sydney",
                duration: "2 years",
                tag: "STEM",
                type: "blue"
            },
            {
                logo: "M",
                title: "Master of Business Analytics",
                university:
                    "Monash University",
                duration: "2 years",
                tag: "Business",
                type: "purple"
            }
        ],

        Finland: [
            {
                logo: "A",
                title: "MSc Computer Science",
                university:
                    "Aalto University",
                duration: "2 years",
                tag: "STEM",
                type: "blue"
            },
            {
                logo: "UH",
                title: "MSc Data Science",
                university:
                    "University of Helsinki",
                duration: "2 years",
                tag: "STEM",
                type: "blue"
            }
        ],

        UAE: [
            {
                logo: "UAE",
                title: "MBA Programme",
                university:
                    "University of Dubai",
                duration: "1–2 years",
                tag: "Business",
                type: "purple"
            },
            {
                logo: "H",
                title: "MSc Artificial Intelligence",
                university:
                    "Heriot-Watt University Dubai",
                duration: "1–2 years",
                tag: "AI",
                type: "blue"
            }
        ],

        Canada: [
            {
                logo: "T",
                title: "MSc Computer Science",
                university:
                    "University of Toronto",
                duration: "2 years",
                tag: "STEM",
                type: "blue"
            },
            {
                logo: "UBC",
                title: "Master of Data Science",
                university:
                    "University of British Columbia",
                duration: "10 months",
                tag: "STEM",
                type: "blue"
            },
            {
                logo: "W",
                title: "Master of Management Analytics",
                university:
                    "University of Waterloo",
                duration: "16 months",
                tag: "Business",
                type: "purple"
            },
            {
                logo: "M",
                title: "Master of Engineering",
                university:
                    "McGill University",
                duration: "2 years",
                tag: "Engineering",
                type: "blue"
            }
        ],

        Hungary: [
            {
                logo: "S",
                title: "General Medicine",
                university:
                    "Semmelweis University",
                duration: "6 years",
                tag: "Medicine",
                type: "purple"
            },
            {
                logo: "BME",
                title: "MSc Engineering",
                university:
                    "Budapest University of Technology",
                duration: "2 years",
                tag: "Engineering",
                type: "blue"
            }
        ],

        Ireland: [
            {
                logo: "T",
                title: "MSc Data Analytics",
                university:
                    "Trinity College Dublin",
                duration: "1 year",
                tag: "STEM",
                type: "blue"
            },
            {
                logo: "UCD",
                title: "MSc Computer Science",
                university:
                    "University College Dublin",
                duration: "1 year",
                tag: "STEM",
                type: "blue"
            }
        ]

    };


    const list =
        universities[country] ||
        universities.USA;


    return list.map((item) => `

        <article class="edu-university-card">

            <div class="edu-university-card-top">

                <div class="edu-university-logo">
                    ${item.logo}
                </div>

                <span
                    class="edu-university-tag ${item.type}"
                >
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
                    ${country}
                </span>

                <span>
                    ${item.duration}
                </span>

            </div>


            <a href="#">
                View Program
                <span>→</span>
            </a>

        </article>

    `).join("");
}


/* =========================================================
   MAIN NAVBAR
========================================================= */

export default function StudyAbroadNavbar() {

    return `

        <section
            class="edu-study-nav"
            id="edu-study-nav"
        >


            <!-- =================================================
                 NAVBAR HEADER
            ================================================== -->

            <div class="edu-study-nav-inner">


                <!-- BRAND -->

                <a
                    href="/"
                    class="edu-study-brand"
                >

                    <span class="edu-study-brand-mark">
                        ED
                    </span>

                    <span>
                        EDUCONNECT
                    </span>

                </a>


                <!-- DESKTOP NAV -->

                <nav
                    class="edu-study-menu"
                    aria-label="Study Abroad Navigation"
                >


                    <!-- EXPLORE COUNTRIES -->

                    <div
                        class="edu-study-nav-item"
                        data-mega-trigger="countries"
                    >

                        <button
                            type="button"
                            class="edu-study-nav-button"
                        >
                            Explore Countries
                            <span>⌄</span>
                        </button>

                    </div>


                    <!-- DESTINATIONS -->

                    <div
                        class="edu-study-nav-item"
                        data-mega-trigger="destinations"
                    >

                        <button
                            type="button"
                            class="edu-study-nav-button"
                        >
                            Destinations
                            <span>⌄</span>
                        </button>

                    </div>


                    <!-- EXAMS -->

                    <div
                        class="edu-study-nav-item"
                        data-mega-trigger="exams"
                    >

                        <button
                            type="button"
                            class="edu-study-nav-button"
                        >
                            Exams
                            <span>⌄</span>
                        </button>

                    </div>


                    <!-- RESOURCES -->

                    <div
                        class="edu-study-nav-item"
                        data-mega-trigger="resources"
                    >

                        <button
                            type="button"
                            class="edu-study-nav-button"
                        >
                            Resources
                            <span>⌄</span>
                        </button>

                    </div>


                    <!-- MORE -->

                    <div
                        class="edu-study-nav-item"
                        data-mega-trigger="more"
                    >

                        <button
                            type="button"
                            class="edu-study-nav-button"
                        >
                            More
                            <span>⌄</span>
                        </button>

                    </div>

                </nav>


                <!-- RIGHT ACTION -->

                <div class="edu-study-nav-actions">

                    <a
                        href="#study-abroad-cta"
                        class="edu-study-contact"
                    >
                        Get Started
                    </a>

                    <button
                        type="button"
                        class="edu-study-mobile-button"
                        aria-label="Open menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                </div>

            </div>


            <!-- =================================================
                 EXPLORE COUNTRIES
            ================================================== -->

            <div
                class="edu-study-mega edu-country-mega"
                data-mega-menu="countries"
            >

                <div class="edu-country-mega-inner">


                    <!-- COUNTRY SIDEBAR -->

                    <aside class="edu-country-sidebar">

                        <div class="edu-country-sidebar-title">
                            Countries
                        </div>


                        <button
                            class="edu-country-item active"
                            data-country="usa"
                            type="button"
                        >
                            <span>United States</span>
                            <span class="edu-country-arrow">›</span>
                        </button>


                        <button
                            class="edu-country-item"
                            data-country="germany"
                            type="button"
                        >
                            <span>Germany</span>
                            <span class="edu-country-arrow">›</span>
                        </button>


                        <button
                            class="edu-country-item"
                            data-country="france"
                            type="button"
                        >
                            <span>France</span>
                            <span class="edu-country-arrow">›</span>
                        </button>


                        <button
                            class="edu-country-item"
                            data-country="uk"
                            type="button"
                        >
                            <span>UK</span>
                            <span class="edu-country-arrow">›</span>
                        </button>


                        <button
                            class="edu-country-item"
                            data-country="australia"
                            type="button"
                        >
                            <span>Australia</span>
                            <span class="edu-country-arrow">›</span>
                        </button>


                        <button
                            class="edu-country-item"
                            data-country="finland"
                            type="button"
                        >
                            <span>Finland</span>
                            <span class="edu-country-arrow">›</span>
                        </button>


                        <button
                            class="edu-country-item"
                            data-country="uae"
                            type="button"
                        >
                            <span>United Arab Emirates</span>
                            <span class="edu-country-arrow">›</span>
                        </button>


                        <button
                            class="edu-country-item"
                            data-country="canada"
                            type="button"
                        >
                            <span>Canada</span>
                            <span class="edu-country-arrow">›</span>
                        </button>


                        <button
                            class="edu-country-item"
                            data-country="hungary"
                            type="button"
                        >
                            <span>Hungary</span>
                            <span class="edu-country-arrow">›</span>
                        </button>


                        <button
                            class="edu-country-item"
                            data-country="ireland"
                            type="button"
                        >
                            <span>Ireland</span>
                            <span class="edu-country-arrow">›</span>
                        </button>

                    </aside>


                    <!-- COUNTRY CONTENT -->

                    <div class="edu-country-content">


                        <!-- USA -->

                        <div
                            class="edu-country-panel active"
                            data-country-panel="usa"
                        >

                            <div class="edu-country-heading">

                                <h3>
                                    United States
                                    <span>(84)</span>
                                </h3>

                                <a href="#">
                                    View All
                                </a>

                            </div>


                            <div class="edu-country-chips">

                                <button>MBA</button>
                                <button>AI & ML</button>
                                <button>Computer Science</button>
                                <button>Management</button>
                                <button>Data Science</button>
                                <button>Finance & Accounting</button>
                                <button>Business Analytics</button>
                                <button>Healthcare</button>
                                <button>Engineering</button>
                                <button>Project Management</button>
                                <button>Information Technology</button>
                                <button>Marketing</button>
                                <button>Supply Chain</button>

                            </div>


                            <div class="edu-university-grid">

                                ${countryUniversityCards("USA")}

                            </div>

                        </div>


                        <!-- GERMANY -->

                        <div
                            class="edu-country-panel"
                            data-country-panel="germany"
                        >

                            <div class="edu-country-heading">

                                <h3>
                                    Germany
                                    <span>(52)</span>
                                </h3>

                                <a href="#">
                                    View All
                                </a>

                            </div>


                            <div class="edu-country-chips">

                                <button>Engineering</button>
                                <button>Computer Science</button>
                                <button>Data Science</button>
                                <button>Mechanical Engineering</button>
                                <button>Business</button>
                                <button>Management</button>
                                <button>Automotive</button>
                                <button>Artificial Intelligence</button>

                            </div>


                            <div class="edu-university-grid">

                                ${countryUniversityCards("Germany")}

                            </div>

                        </div>


                        <!-- FRANCE -->

                        <div
                            class="edu-country-panel"
                            data-country-panel="france"
                        >

                            <div class="edu-country-heading">

                                <h3>
                                    France
                                    <span>(46)</span>
                                </h3>

                                <a href="#">
                                    View All
                                </a>

                            </div>


                            <div class="edu-country-chips">

                                <button>Business</button>
                                <button>Management</button>
                                <button>Finance</button>
                                <button>Marketing</button>
                                <button>Computer Science</button>
                                <button>Engineering</button>

                            </div>


                            <div class="edu-university-grid">

                                ${countryUniversityCards("France")}

                            </div>

                        </div>


                        <!-- UK -->

                        <div
                            class="edu-country-panel"
                            data-country-panel="uk"
                        >

                            <div class="edu-country-heading">

                                <h3>
                                    United Kingdom
                                    <span>(91)</span>
                                </h3>

                                <a href="#">
                                    View All
                                </a>

                            </div>


                            <div class="edu-country-chips">

                                <button>MBA</button>
                                <button>Computer Science</button>
                                <button>Business Analytics</button>
                                <button>Data Science</button>
                                <button>Finance</button>
                                <button>Engineering</button>
                                <button>Healthcare</button>
                                <button>Law</button>

                            </div>


                            <div class="edu-university-grid">

                                ${countryUniversityCards("UK")}

                            </div>

                        </div>


                        <!-- AUSTRALIA -->

                        <div
                            class="edu-country-panel"
                            data-country-panel="australia"
                        >

                            <div class="edu-country-heading">

                                <h3>
                                    Australia
                                    <span>(73)</span>
                                </h3>

                                <a href="#">
                                    View All
                                </a>

                            </div>


                            <div class="edu-country-chips">

                                <button>Business</button>
                                <button>IT</button>
                                <button>Engineering</button>
                                <button>Data Science</button>
                                <button>Healthcare</button>
                                <button>Accounting</button>
                                <button>Cyber Security</button>

                            </div>


                            <div class="edu-university-grid">

                                ${countryUniversityCards("Australia")}

                            </div>

                        </div>


                        <!-- FINLAND -->

                        <div
                            class="edu-country-panel"
                            data-country-panel="finland"
                        >

                            <div class="edu-country-heading">

                                <h3>
                                    Finland
                                    <span>(31)</span>
                                </h3>

                                <a href="#">
                                    View All
                                </a>

                            </div>


                            <div class="edu-country-chips">

                                <button>Computer Science</button>
                                <button>Business</button>
                                <button>Engineering</button>
                                <button>Education</button>
                                <button>Data Science</button>

                            </div>


                            <div class="edu-university-grid">

                                ${countryUniversityCards("Finland")}

                            </div>

                        </div>


                        <!-- UAE -->

                        <div
                            class="edu-country-panel"
                            data-country-panel="uae"
                        >

                            <div class="edu-country-heading">

                                <h3>
                                    United Arab Emirates
                                    <span>(29)</span>
                                </h3>

                                <a href="#">
                                    View All
                                </a>

                            </div>


                            <div class="edu-country-chips">

                                <button>Business</button>
                                <button>Management</button>
                                <button>Finance</button>
                                <button>Computer Science</button>
                                <button>Engineering</button>

                            </div>


                            <div class="edu-university-grid">

                                ${countryUniversityCards("UAE")}

                            </div>

                        </div>


                        <!-- CANADA -->

                        <div
                            class="edu-country-panel"
                            data-country-panel="canada"
                        >

                            <div class="edu-country-heading">

                                <h3>
                                    Canada
                                    <span>(68)</span>
                                </h3>

                                <a href="#">
                                    View All
                                </a>

                            </div>


                            <div class="edu-country-chips">

                                <button>Computer Science</button>
                                <button>Business</button>
                                <button>Engineering</button>
                                <button>Data Science</button>
                                <button>Healthcare</button>
                                <button>Management</button>

                            </div>


                            <div class="edu-university-grid">

                                ${countryUniversityCards("Canada")}

                            </div>

                        </div>


                        <!-- HUNGARY -->

                        <div
                            class="edu-country-panel"
                            data-country-panel="hungary"
                        >

                            <div class="edu-country-heading">

                                <h3>
                                    Hungary
                                    <span>(25)</span>
                                </h3>

                                <a href="#">
                                    View All
                                </a>

                            </div>


                            <div class="edu-country-chips">

                                <button>Medicine</button>
                                <button>Engineering</button>
                                <button>Business</button>
                                <button>Computer Science</button>

                            </div>


                            <div class="edu-university-grid">

                                ${countryUniversityCards("Hungary")}

                            </div>

                        </div>


                        <!-- IRELAND -->

                        <div
                            class="edu-country-panel"
                            data-country-panel="ireland"
                        >

                            <div class="edu-country-heading">

                                <h3>
                                    Ireland
                                    <span>(37)</span>
                                </h3>

                                <a href="#">
                                    View All
                                </a>

                            </div>


                            <div class="edu-country-chips">

                                <button>Computer Science</button>
                                <button>Business</button>
                                <button>Data Analytics</button>
                                <button>Engineering</button>
                                <button>Finance</button>

                            </div>


                            <div class="edu-university-grid">

                                ${countryUniversityCards("Ireland")}

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            <!-- =================================================
                 DESTINATIONS
            ================================================== -->

            <div
                class="edu-study-mega"
                data-mega-menu="destinations"
            >

                <div class="edu-study-mega-inner">

                    <aside class="edu-study-mega-sidebar">

                        <button
                            class="edu-study-side-item active"
                            data-mega-panel="destination-featured"
                        >
                            Featured
                            <span>›</span>
                        </button>

                        <button
                            class="edu-study-side-item"
                            data-mega-panel="destination-universities"
                        >
                            Universities
                            <span>›</span>
                        </button>

                        <button
                            class="edu-study-side-item"
                            data-mega-panel="destination-courses"
                        >
                            Courses
                            <span>›</span>
                        </button>

                    </aside>


                    <div class="edu-study-mega-content">

                        <div
                            class="edu-study-panel active"
                            data-mega-content="destination-featured"
                        >

                            <div class="edu-study-column">

                                <h4>Destinations</h4>

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

                                <h4>Explore</h4>

                                <a href="#study-abroad-destinations">
                                    Popular Destinations
                                </a>

                                <a href="#country-comparison">
                                    Compare Countries
                                </a>

                                <a href="#top-universities-abroad">
                                    Top Universities
                                </a>

                            </div>


                            <div class="edu-study-column">

                                <h4>Plan</h4>

                                <a href="#study-abroad-intakes">
                                    Intakes
                                </a>

                                <a href="#admission-requirements">
                                    Requirements
                                </a>

                                <a href="#application-process">
                                    Application Process
                                </a>

                            </div>


                            <div class="edu-study-feature">

                                <span class="edu-study-feature-icon">
                                    🌎
                                </span>

                                <strong>
                                    Find your ideal destination
                                </strong>

                                <p>
                                    Compare countries, universities,
                                    costs and opportunities.
                                </p>

                                <a href="#study-abroad-search">
                                    Start Exploring →
                                </a>

                            </div>

                        </div>


                        <div
                            class="edu-study-panel"
                            data-mega-content="destination-universities"
                        >

                            <div class="edu-study-column">

                                <h4>Universities</h4>

                                <a href="#top-universities-abroad">
                                    Top Universities
                                </a>

                                <a href="#study-abroad-search">
                                    Find a University
                                </a>

                            </div>


                            <div class="edu-study-column">

                                <h4>By Destination</h4>

                                <a href="#">
                                    USA Universities
                                </a>

                                <a href="#">
                                    UK Universities
                                </a>

                                <a href="#">
                                    Canadian Universities
                                </a>

                                <a href="#">
                                    Australian Universities
                                </a>

                            </div>


                            <div class="edu-study-column">

                                <h4>Discover</h4>

                                <a href="#course-explorer">
                                    Courses
                                </a>

                                <a href="#degree-explorer">
                                    Degrees
                                </a>

                            </div>

                        </div>


                        <div
                            class="edu-study-panel"
                            data-mega-content="destination-courses"
                        >

                            <div class="edu-study-column">

                                <h4>Popular Courses</h4>

                                <a href="#course-explorer">
                                    Computer Science
                                </a>

                                <a href="#course-explorer">
                                    Business
                                </a>

                                <a href="#course-explorer">
                                    Engineering
                                </a>

                                <a href="#course-explorer">
                                    Data Science
                                </a>

                                <a href="#course-explorer">
                                    Healthcare
                                </a>

                            </div>


                            <div class="edu-study-column">

                                <h4>Popular Degrees</h4>

                                <a href="#degree-explorer">
                                    Bachelor's
                                </a>

                                <a href="#degree-explorer">
                                    Master's
                                </a>

                                <a href="#degree-explorer">
                                    MBA
                                </a>

                                <a href="#degree-explorer">
                                    PhD
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            <!-- =================================================
                 EXAMS
            ================================================== -->

            <div
                class="edu-study-mega"
                data-mega-menu="exams"
            >

                <div class="edu-study-mega-inner">

                    <aside class="edu-study-mega-sidebar">

                        <button
                            class="edu-study-side-item active"
                            data-mega-panel="exam-english"
                        >
                            English Tests
                            <span>›</span>
                        </button>

                        <button
                            class="edu-study-side-item"
                            data-mega-panel="exam-admission"
                        >
                            Admission Tests
                            <span>›</span>
                        </button>

                    </aside>


                    <div class="edu-study-mega-content">

                        <div
                            class="edu-study-panel active"
                            data-mega-content="exam-english"
                        >

                            <div class="edu-study-column">

                                <h4>English Exams</h4>

                                <a href="#abroad-exams">
                                    IELTS
                                </a>

                                <a href="#abroad-exams">
                                    TOEFL
                                </a>

                                <a href="#abroad-exams">
                                    PTE
                                </a>

                                <a href="#abroad-exams">
                                    Duolingo English Test
                                </a>

                            </div>


                            <div class="edu-study-column">

                                <h4>Preparation</h4>

                                <a href="#abroad-exams">
                                    IELTS Preparation
                                </a>

                                <a href="#abroad-exams">
                                    Exam Pattern
                                </a>

                                <a href="#abroad-exams">
                                    Exam Requirements
                                </a>

                                <a href="#abroad-exams">
                                    Exam Dates
                                </a>

                            </div>


                            <div class="edu-study-column">

                                <h4>Explore</h4>

                                <a href="#abroad-exams">
                                    IELTS Band Guide
                                </a>

                                <a href="#abroad-exams">
                                    TOEFL Guide
                                </a>

                                <a href="#abroad-exams">
                                    PTE Guide
                                </a>

                            </div>

                        </div>


                        <div
                            class="edu-study-panel"
                            data-mega-content="exam-admission"
                        >

                            <div class="edu-study-column">

                                <h4>Admission Tests</h4>

                                <a href="#abroad-exams">
                                    GRE
                                </a>

                                <a href="#abroad-exams">
                                    GMAT
                                </a>

                                <a href="#abroad-exams">
                                    SAT
                                </a>

                                <a href="#abroad-exams">
                                    ACT
                                </a>

                            </div>


                            <div class="edu-study-column">

                                <h4>Preparation</h4>

                                <a href="#abroad-exams">
                                    GRE Preparation
                                </a>

                                <a href="#abroad-exams">
                                    GMAT Preparation
                                </a>

                                <a href="#abroad-exams">
                                    SAT Preparation
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            <!-- =================================================
                 RESOURCES
            ================================================== -->

            <div
                class="edu-study-mega"
                data-mega-menu="resources"
            >

                <div class="edu-study-mega-inner">

                    <aside class="edu-study-mega-sidebar">

                        <button
                            class="edu-study-side-item active"
                            data-mega-panel="resource-guides"
                        >
                            Study Guides
                            <span>›</span>
                        </button>

                        <button
                            class="edu-study-side-item"
                            data-mega-panel="resource-scholarship"
                        >
                            Scholarships
                            <span>›</span>
                        </button>

                        <button
                            class="edu-study-side-item"
                            data-mega-panel="resource-career"
                        >
                            Jobs & Career
                            <span>›</span>
                        </button>

                    </aside>


                    <div class="edu-study-mega-content">

                        <div
                            class="edu-study-panel active"
                            data-mega-content="resource-guides"
                        >

                            <div class="edu-study-column">

                                <h4>Study Abroad Essentials</h4>

                                <a href="#">
                                    Why Study Abroad
                                </a>

                                <a href="#">
                                    How to Study Abroad
                                </a>

                                <a href="#">
                                    How to Choose a Destination
                                </a>

                                <a href="#">
                                    Study Abroad Consultants
                                </a>

                                <a href="#study-abroad-cost">
                                    Cost of Studying Abroad
                                </a>

                            </div>


                            <div class="edu-study-column">

                                <h4>SOPs & LORs</h4>

                                <a href="#">
                                    SOP for Masters
                                </a>

                                <a href="#">
                                    SOP for MBA
                                </a>

                                <a href="#">
                                    SOP for PhD
                                </a>

                                <a href="#">
                                    LOR Format
                                </a>

                                <a href="#">
                                    LOR Samples
                                </a>

                            </div>


                            <div class="edu-study-column">

                                <h4>Must Reads</h4>

                                <a href="#">
                                    Best Countries to Study Abroad
                                </a>

                                <a href="#">
                                    Education System Guide
                                </a>

                                <a href="#">
                                    Difference Between GPA & CGPA
                                </a>

                                <a href="#">
                                    How to Convert GPA
                                </a>

                            </div>


                            <div class="edu-study-feature">

                                <span class="edu-study-feature-icon">
                                    📚
                                </span>

                                <strong>
                                    Study Abroad Resources
                                </strong>

                                <p>
                                    Guides and information to help
                                    plan your international education.
                                </p>

                                <a href="#">
                                    Explore Resources →
                                </a>

                            </div>

                        </div>


                        <div
                            class="edu-study-panel"
                            data-mega-content="resource-scholarship"
                        >

                            <div class="edu-study-column">

                                <h4>Scholarships</h4>

                                <a href="#abroad-scholarships">
                                    Study Abroad Scholarships
                                </a>

                                <a href="#abroad-scholarships">
                                    Merit Scholarships
                                </a>

                                <a href="#abroad-scholarships">
                                    Government Scholarships
                                </a>

                                <a href="#abroad-scholarships">
                                    University Scholarships
                                </a>

                            </div>


                            <div class="edu-study-column">

                                <h4>Funding</h4>

                                <a href="#study-abroad-cost">
                                    Education Loans
                                </a>

                                <a href="#study-abroad-cost">
                                    Cost Planning
                                </a>

                                <a href="#study-abroad-cost">
                                    Living Expenses
                                </a>

                            </div>

                        </div>


                        <div
                            class="edu-study-panel"
                            data-mega-content="resource-career"
                        >

                            <div class="edu-study-column">

                                <h4>Jobs & Career</h4>

                                <a href="#">
                                    Part Time Jobs
                                </a>

                                <a href="#">
                                    Jobs After Graduation
                                </a>

                                <a href="#">
                                    Highest Paying Jobs
                                </a>

                                <a href="#">
                                    Career Opportunities
                                </a>

                            </div>


                            <div class="edu-study-column">

                                <h4>Planning</h4>

                                <a href="#">
                                    Career Guide
                                </a>

                                <a href="#">
                                    Graduate Jobs
                                </a>

                                <a href="#">
                                    Work Opportunities
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            <!-- =================================================
                 MORE
            ================================================== -->

            <div
                class="edu-study-mega"
                data-mega-menu="more"
            >

                <div class="edu-study-mega-inner">

                    <aside class="edu-study-mega-sidebar">

                        <button
                            class="edu-study-side-item active"
                            data-mega-panel="more-tools"
                        >
                            Tools
                            <span>›</span>
                        </button>

                        <button
                            class="edu-study-side-item"
                            data-mega-panel="more-services"
                        >
                            Services
                            <span>›</span>
                        </button>

                        <button
                            class="edu-study-side-item"
                            data-mega-panel="more-support"
                        >
                            Support
                            <span>›</span>
                        </button>

                    </aside>


                    <div class="edu-study-mega-content">


                        <!-- TOOLS -->

                        <div
                            class="edu-study-panel active"
                            data-mega-content="more-tools"
                        >

                            <div class="edu-study-tool-card">

                                <span>01</span>

                                <strong>
                                    CGPA to GPA Calculator
                                </strong>

                                <p>
                                    Convert your CGPA into GPA.
                                </p>

                                <a href="#">
                                    Open Calculator →
                                </a>

                            </div>


                            <div class="edu-study-tool-card">

                                <span>02</span>

                                <strong>
                                    Expense Calculator
                                </strong>

                                <p>
                                    Plan your study abroad expenses.
                                </p>

                                <a href="#study-abroad-cost">
                                    Calculate Cost →
                                </a>

                            </div>


                            <div class="edu-study-tool-card">

                                <span>03</span>

                                <strong>
                                    IELTS Band Calculator
                                </strong>

                                <p>
                                    Estimate your IELTS band score.
                                </p>

                                <a href="#abroad-exams">
                                    Calculate Score →
                                </a>

                            </div>


                            <div class="edu-study-tool-card">

                                <span>04</span>

                                <strong>
                                    Education Loan Calculator
                                </strong>

                                <p>
                                    Explore education financing.
                                </p>

                                <a href="#study-abroad-cost">
                                    Explore Loans →
                                </a>

                            </div>


                            <div class="edu-study-tool-card">

                                <span>05</span>

                                <strong>
                                    SGPA to Percentage
                                </strong>

                                <p>
                                    Convert SGPA to percentage.
                                </p>

                                <a href="#">
                                    Calculate →
                                </a>

                            </div>

                        </div>


                        <!-- SERVICES -->

                        <div
                            class="edu-study-panel"
                            data-mega-content="more-services"
                        >

                            <div class="edu-study-column">

                                <h4>Student Services</h4>

                                <a href="#study-abroad-search">
                                    University Search
                                </a>

                                <a href="#admission-requirements">
                                    Admission Guidance
                                </a>

                                <a href="#application-process">
                                    Application Assistance
                                </a>

                                <a href="#abroad-scholarships">
                                    Scholarship Guidance
                                </a>

                            </div>


                            <div class="edu-study-column">

                                <h4>Planning</h4>

                                <a href="#study-abroad-cost">
                                    Cost Planning
                                </a>

                                <a href="#study-abroad-intakes">
                                    Intake Planning
                                </a>

                                <a href="#abroad-exams">
                                    Exam Planning
                                </a>

                            </div>


                            <div class="edu-study-column">

                                <h4>Discover</h4>

                                <a href="#course-explorer">
                                    Course Explorer
                                </a>

                                <a href="#degree-explorer">
                                    Degree Explorer
                                </a>

                                <a href="#top-universities-abroad">
                                    University Explorer
                                </a>

                            </div>

                        </div>


                        <!-- SUPPORT -->

                        <div
                            class="edu-study-panel"
                            data-mega-content="more-support"
                        >

                            <div class="edu-study-column">

                                <h4>Need Help?</h4>

                                <a href="#study-abroad-faq">
                                    FAQs
                                </a>

                                <a href="#study-abroad-cta">
                                    Talk to a Counsellor
                                </a>

                                <a href="#study-abroad-cta">
                                    Request a Callback
                                </a>

                            </div>


                            <div class="edu-study-column">

                                <h4>Application</h4>

                                <a href="#application-process">
                                    Application Process
                                </a>

                                <a href="#admission-requirements">
                                    Admission Requirements
                                </a>

                                <a href="#study-abroad-intakes">
                                    Intakes
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


        </section>

    `;
}