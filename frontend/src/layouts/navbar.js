export default function Navbar() {

    return `

    <nav class="navbar">

        <div class="navbar-container">


            <!-- =================================================
                 HOME
            ================================================== -->

            <a
                href="#"
                class="navbar-link"
            >
                Home
            </a>


            <!-- =================================================
                 SCHOOL DROPDOWN
            ================================================== -->

            <div class="navbar-dropdown">

                <a
                    href="#school"
                    class="navbar-link navbar-dropdown-link"
                    data-auth-required="true"
                >

                    <span>
                        School
                    </span>

                    <span class="navbar-dropdown-arrow">
                        ▾
                    </span>

                </a>


                <div class="navbar-dropdown-menu">

                    <a
                        href="#play-school"
                        class="navbar-dropdown-item"
                        data-auth-required="true"
                    >
                        Play School
                    </a>


                    <a
                        href="#pre-school"
                        class="navbar-dropdown-item"
                        data-auth-required="true"
                    >
                        Pre School
                    </a>


                    <a
                        href="#boarding-school"
                        class="navbar-dropdown-item"
                        data-auth-required="true"
                    >
                        Boarding School
                    </a>

                </div>

            </div>


            <!-- =================================================
                 COLLEGE DROPDOWN
            ================================================== -->

            <div class="navbar-dropdown">

                <a
                    href="#top-lists"
                    class="navbar-link navbar-dropdown-link"
                    data-auth-required="true"
                >

                    <span>
                        College
                    </span>

                    <span class="navbar-dropdown-arrow">
                        ▾
                    </span>

                </a>


                <div class="navbar-dropdown-menu">

                    <!-- UNIVERSITY -->

                    <a
                        href="#top-lists"
                        class="navbar-dropdown-item"
                        data-auth-required="true"
                    >
                        University
                    </a>


                    <!-- PG -->

                    <a
                        href="#top-ug-pg-colleges"
                        class="navbar-dropdown-item"
                        data-auth-required="true"
                    >
                        PG
                    </a>

                </div>

            </div>


            <!-- =================================================
                 STUDY ABROAD
            ================================================== -->

            <a
                href="#study-abroad"
                class="navbar-link"
                data-auth-required="true"
            >
                Study Abroad
            </a>


            <!-- =================================================
                 SCHOLARSHIP
            ================================================== -->

            <a
                href="#scholarship"
                class="navbar-link"
                data-auth-required="true"
            >
                Scholarship
            </a>


            <!-- =================================================
                 JOBS
            ================================================== -->

            <a
                href="#jobs"
                class="navbar-link"
                data-auth-required="true"
            >
                Jobs
            </a>


            <!-- =================================================
                 COMMUNITY
            ================================================== -->

            <a
                href="#community"
                class="navbar-link"
                data-auth-required="true"
            >
                Community
            </a>


            <!-- =================================================
                 NEWS
            ================================================== -->

            <a
                href="#news"
                class="navbar-link"
                data-auth-required="true"
            >
                News
            </a>


            <!-- =================================================
                 CERTIFICATE
            ================================================== -->

            <a
                href="#certificate"
                class="navbar-link navbar-certificate-link"
                data-auth-required="true"
            >
                Certificate
            </a>


            <!-- =================================================
                 ONLINE COURSES
            ================================================== -->

            <a
                href="#online-courses"
                class="navbar-link navbar-onlinecourses-link"
                data-auth-required="true"
            >
                Online Courses
            </a>


            <!-- =================================================
                 PARTNERS LOGIN
            ================================================== -->

            <button
                type="button"
                class="navbar-partner-login"
                data-partner-login
            >
                Partners Login
            </button>


        </div>

    </nav>

    `;

}