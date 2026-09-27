/* =========================================================
   STUDY ABROAD — COURSE EXPLORER
========================================================= */

export default function CourseExplorer() {

    const courses = [

        {
            name: "Computer Science",
            category: "Technology",
            icon: "💻",
            destinations: "USA • UK • Canada • Germany",
            level: "Bachelor's • Master's",
            popularFor: "Software Development • AI • Data Science",
            duration: "1–4 Years"
        },

        {
            name: "Business Administration",
            category: "Business",
            icon: "📊",
            destinations: "USA • UK • Australia • Canada",
            level: "Bachelor's • Master's • MBA",
            popularFor: "Management • Finance • Marketing",
            duration: "1–2 Years"
        },

        {
            name: "Engineering",
            category: "Engineering",
            icon: "⚙️",
            destinations: "Germany • USA • UK • Australia",
            level: "Bachelor's • Master's",
            popularFor: "Mechanical • Civil • Electrical",
            duration: "1–4 Years"
        },

        {
            name: "Data Science",
            category: "Technology",
            icon: "📈",
            destinations: "USA • UK • Canada • Ireland",
            level: "Master's • Postgraduate",
            popularFor: "AI • Analytics • Machine Learning",
            duration: "1–2 Years"
        },

        {
            name: "Medicine",
            category: "Healthcare",
            icon: "🩺",
            destinations: "UK • Australia • USA • Europe",
            level: "Bachelor's • Master's",
            popularFor: "Medicine • Healthcare • Research",
            duration: "3–6 Years"
        },

        {
            name: "Law",
            category: "Law",
            icon: "⚖️",
            destinations: "UK • USA • Australia • Canada",
            level: "Bachelor's • Master's",
            popularFor: "Corporate Law • International Law",
            duration: "1–4 Years"
        },

        {
            name: "Architecture",
            category: "Design",
            icon: "🏛️",
            destinations: "UK • Australia • USA • Europe",
            level: "Bachelor's • Master's",
            popularFor: "Architecture • Urban Design",
            duration: "2–5 Years"
        },

        {
            name: "Hospitality & Tourism",
            category: "Hospitality",
            icon: "🌍",
            destinations: "Australia • UK • Switzerland • Canada",
            level: "Bachelor's • Master's",
            popularFor: "Hotels • Tourism • Event Management",
            duration: "1–4 Years"
        }

    ];


    return `

        <!-- =====================================================
             COURSE EXPLORER
        ====================================================== -->

        <section
            class="study-abroad-course-explorer"
            id="course-explorer"
        >


            <div class="study-abroad-course-explorer-container">


                <!-- =================================================
                     SECTION HEADER
                ================================================== -->

                <div class="study-abroad-course-explorer-header">


                    <div class="study-abroad-section-eyebrow">
                        FIND YOUR COURSE
                    </div>


                    <h2>

                        Explore Courses
                        <span>Worldwide</span>

                    </h2>


                    <p>

                        Discover popular courses and international
                        programs across leading study destinations.
                        Compare your options and find the right
                        academic path.

                    </p>


                </div>


                <!-- =================================================
                     COURSE SEARCH
                ================================================== -->

                <div class="study-abroad-course-search">


                    <div class="course-search-input">


                        <span
                            class="course-search-icon"
                            aria-hidden="true"
                        >
                            🔍
                        </span>


                        <input
                            type="text"
                            placeholder="Search courses, subjects or programs..."
                            aria-label="Search courses"
                        />


                    </div>


                    <button
                        type="button"
                        class="course-search-button"
                    >

                        Search

                        <span>
                            →
                        </span>

                    </button>


                </div>


                <!-- =================================================
                     COURSE FILTERS
                ================================================== -->

                <div class="study-abroad-course-filters">


                    <button
                        type="button"
                        class="course-filter active"
                    >
                        All Courses
                    </button>


                    <button
                        type="button"
                        class="course-filter"
                    >
                        Technology
                    </button>


                    <button
                        type="button"
                        class="course-filter"
                    >
                        Business
                    </button>


                    <button
                        type="button"
                        class="course-filter"
                    >
                        Engineering
                    </button>


                    <button
                        type="button"
                        class="course-filter"
                    >
                        Healthcare
                    </button>


                    <button
                        type="button"
                        class="course-filter"
                    >
                        Design
                    </button>


                </div>


                <!-- =================================================
                     COURSE GRID
                ================================================== -->

                <div class="study-abroad-course-grid">


                    ${courses.map((course) => `

                        <article
                            class="study-abroad-course-card"
                        >


                            <!-- =================================================
                                 CARD HEADER
                            ================================================== -->

                            <div class="course-card-header">


                                <div
                                    class="course-card-icon"
                                    aria-hidden="true"
                                >
                                    ${course.icon}
                                </div>


                                <span class="course-card-category">
                                    ${course.category}
                                </span>


                                <button
                                    type="button"
                                    class="course-card-favourite"
                                    aria-label="Save ${course.name}"
                                >
                                    ♡
                                </button>


                            </div>


                            <!-- =================================================
                                 CARD CONTENT
                            ================================================== -->

                            <div class="course-card-content">


                                <h3>
                                    ${course.name}
                                </h3>


                                <p class="course-card-destinations">

                                    🌎

                                    ${course.destinations}

                                </p>


                                <!-- =================================================
                                     COURSE DETAILS
                                ================================================== -->

                                <div class="course-card-details">


                                    <div class="course-card-detail">


                                        <span
                                            class="course-detail-icon"
                                            aria-hidden="true"
                                        >
                                            🎓
                                        </span>


                                        <div>

                                            <span>
                                                Study Level
                                            </span>

                                            <strong>
                                                ${course.level}
                                            </strong>

                                        </div>


                                    </div>


                                    <div class="course-card-detail">


                                        <span
                                            class="course-detail-icon"
                                            aria-hidden="true"
                                        >
                                            📚
                                        </span>


                                        <div>

                                            <span>
                                                Popular For
                                            </span>

                                            <strong>
                                                ${course.popularFor}
                                            </strong>

                                        </div>


                                    </div>


                                    <div class="course-card-detail">


                                        <span
                                            class="course-detail-icon"
                                            aria-hidden="true"
                                        >
                                            ⏱
                                        </span>


                                        <div>

                                            <span>
                                                Duration
                                            </span>

                                            <strong>
                                                ${course.duration}
                                            </strong>

                                        </div>


                                    </div>


                                </div>


                                <!-- =================================================
                                     CARD ACTION
                                ================================================== -->

                                <button
                                    type="button"
                                    class="course-explore-button"
                                >

                                    Explore Course

                                    <span>
                                        →
                                    </span>

                                </button>


                            </div>


                        </article>

                    `).join("")}


                </div>


                <!-- =================================================
                     COURSE FOOTER
                ================================================== -->

                <div class="study-abroad-course-footer">


                    <div class="study-abroad-course-footer-content">


                        <span
                            class="study-abroad-course-footer-icon"
                            aria-hidden="true"
                        >
                            🎓
                        </span>


                        <div>

                            <strong>
                                Can't find your course?
                            </strong>

                            <span>
                                Explore more programs and study options
                                from universities worldwide.
                            </span>

                        </div>


                    </div>


                    <button
                        type="button"
                        class="study-abroad-view-courses-button"
                    >

                        View All Courses

                        <span>
                            →
                        </span>

                    </button>


                </div>


            </div>


        </section>

    `;
}