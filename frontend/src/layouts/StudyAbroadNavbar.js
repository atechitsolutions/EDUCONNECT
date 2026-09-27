export default function StudyAbroadNavbar() {

    return `

    <nav
        class="study-abroad-navbar"
        aria-label="Study Abroad navigation"
    >

        <div class="study-abroad-navbar-container">


            <!-- =====================================================
                 BRAND
            ====================================================== -->

            <a
                href="#study-abroad-page"
                class="study-abroad-navbar-brand"
                aria-label="EDUCONNECT Study Abroad Home"
            >
                <span class="study-abroad-brand-mark">
                    ED
                </span>

                <span class="study-abroad-brand-text">
                    EDUCONNECT
                </span>
            </a>


            <!-- =====================================================
                 MOBILE MENU BUTTON
            ====================================================== -->

            <button
                type="button"
                class="study-abroad-mobile-toggle"
                aria-label="Open Study Abroad navigation"
                aria-expanded="false"
                data-study-abroad-menu-toggle
            >
                <span></span>
                <span></span>
                <span></span>
            </button>


            <!-- =====================================================
                 NAVIGATION
            ====================================================== -->

            <div
                class="study-abroad-navbar-menu"
                data-study-abroad-menu
            >


                <!-- =================================================
                     HOME
                ================================================== -->

                <a
                    href="#study-abroad-page"
                    class="study-abroad-nav-link"
                >
                    Home
                </a>


                <!-- =================================================
                     EXPLORE
                ================================================== -->

                <div class="study-abroad-nav-dropdown">

                    <button
                        type="button"
                        class="study-abroad-nav-dropdown-button"
                        aria-expanded="false"
                    >
                        Explore
                        <span>⌄</span>
                    </button>


                    <div class="study-abroad-nav-dropdown-menu">


                        <a href="#study-abroad-search">
                            Search Study Abroad
                        </a>

                        <a href="#study-abroad-destinations">
                            Explore Destinations
                        </a>

                        <a href="#study-abroad-degree-explorer">
                            Explore Degrees
                        </a>

                        <a href="#study-abroad-course-explorer">
                            Find Courses
                        </a>

                        <a href="#study-abroad-universities">
                            Find Universities
                        </a>

                    </div>

                </div>


                <!-- =================================================
                     DESTINATIONS
                ================================================== -->

                <div class="study-abroad-nav-dropdown">

                    <button
                        type="button"
                        class="study-abroad-nav-dropdown-button"
                        aria-expanded="false"
                    >
                        Destinations
                        <span>⌄</span>
                    </button>


                    <div class="study-abroad-nav-dropdown-menu">


                        <a href="#study-abroad-destinations">
                            All Destinations
                        </a>

                        <a href="#study-abroad-popular-destinations">
                            Popular Destinations
                        </a>

                        <a href="#study-abroad-affordable-destinations">
                            Affordable Destinations
                        </a>

                        <a href="#study-abroad-top-university-destinations">
                            Top University Destinations
                        </a>

                        <a href="#study-abroad-country-comparison">
                            Compare Countries
                        </a>

                    </div>

                </div>


                <!-- =================================================
                     COURSES & UNIVERSITIES
                ================================================== -->

                <div class="study-abroad-nav-dropdown">

                    <button
                        type="button"
                        class="study-abroad-nav-dropdown-button"
                        aria-expanded="false"
                    >
                        Courses & Universities
                        <span>⌄</span>
                    </button>


                    <div class="study-abroad-nav-dropdown-menu">


                        <a href="#study-abroad-degree-explorer">
                            Degrees
                        </a>

                        <a href="#study-abroad-course-explorer">
                            Courses
                        </a>

                        <a href="#study-abroad-universities">
                            Universities
                        </a>

                        <a href="#study-abroad-top-universities">
                            Top Universities
                        </a>

                    </div>

                </div>


                <!-- =================================================
                     ADMISSIONS
                ================================================== -->

                <div class="study-abroad-nav-dropdown">

                    <button
                        type="button"
                        class="study-abroad-nav-dropdown-button"
                        aria-expanded="false"
                    >
                        Admissions
                        <span>⌄</span>
                    </button>


                    <div class="study-abroad-nav-dropdown-menu">


                        <a href="#study-abroad-admission-requirements">
                            Admission Requirements
                        </a>

                        <a href="#study-abroad-application-process">
                            Application Process
                        </a>

                        <a href="#study-abroad-intakes">
                            Intakes
                        </a>

                        <a href="#study-abroad-exams">
                            Exams & Test Preparation
                        </a>

                        <a href="#study-abroad-scholarships">
                            Scholarships
                        </a>

                    </div>

                </div>


                <!-- =================================================
                     COST & FINANCE
                ================================================== -->

                <div class="study-abroad-nav-dropdown">

                    <button
                        type="button"
                        class="study-abroad-nav-dropdown-button"
                        aria-expanded="false"
                    >
                        Costs & Finance
                        <span>⌄</span>
                    </button>


                    <div class="study-abroad-nav-dropdown-menu">


                        <a href="#study-abroad-cost">
                            Study Abroad Cost
                        </a>

                        <a href="#study-abroad-scholarships">
                            Scholarships
                        </a>

                        <a href="#study-abroad-financial-support">
                            Financial Support
                        </a>

                        <a href="#study-abroad-tools">
                            Cost Calculator
                        </a>

                    </div>

                </div>


                <!-- =================================================
                     RESOURCES
                ================================================== -->

                <div class="study-abroad-nav-dropdown">

                    <button
                        type="button"
                        class="study-abroad-nav-dropdown-button"
                        aria-expanded="false"
                    >
                        Resources
                        <span>⌄</span>
                    </button>


                    <div class="study-abroad-nav-dropdown-menu">


                        <a href="#study-abroad-application-process">
                            Application Guide
                        </a>

                        <a href="#study-abroad-admission-requirements">
                            Requirements
                        </a>

                        <a href="#study-abroad-intakes">
                            Intake Guide
                        </a>

                        <a href="#study-abroad-exams">
                            Exam Guide
                        </a>

                        <a href="#study-abroad-faq">
                            FAQs
                        </a>

                    </div>

                </div>


                <!-- =================================================
                     MORE
                ================================================== -->

                <div class="study-abroad-nav-dropdown">

                    <button
                        type="button"
                        class="study-abroad-nav-dropdown-button"
                        aria-expanded="false"
                    >
                        More
                        <span>⌄</span>
                    </button>


                    <div class="study-abroad-nav-dropdown-menu">


                        <a href="#study-abroad-reviews">
                            Student Reviews
                        </a>

                        <a href="#study-abroad-tools">
                            Study Abroad Tools
                        </a>

                        <a href="#study-abroad-why">
                            Why Study Abroad
                        </a>

                        <a href="#study-abroad-support">
                            Application Support
                        </a>

                        <a href="#study-abroad-faq">
                            Frequently Asked Questions
                        </a>

                    </div>

                </div>


                <!-- =================================================
                     CTA
                ================================================== -->

                <a
                    href="#study-abroad-cta"
                    class="study-abroad-navbar-cta"
                >
                    Get Started
                </a>

            </div>

        </div>

    </nav>

    `;
}