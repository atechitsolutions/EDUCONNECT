/* =========================================================
   STUDY ABROAD — DEGREE EXPLORER
========================================================= */

export default function DegreeExplorer() {

    const degrees = [

        {
            name: "Bachelor's Degree",
            shortName: "UG",
            icon: "🎓",
            duration: "3–4 Years",
            suitableFor:
                "Students completing undergraduate education",
            popularFields:
                "Computer Science • Business • Engineering • Medicine",
            destinations:
                "USA • UK • Canada • Australia • Europe"
        },

        {
            name: "Master's Degree",
            shortName: "PG",
            icon: "📚",
            duration: "1–2 Years",
            suitableFor:
                "Graduates looking to specialize or advance their careers",
            popularFields:
                "Technology • Business • Data Science • Engineering",
            destinations:
                "USA • UK • Canada • Australia • Germany"
        },

        {
            name: "MBA",
            shortName: "MBA",
            icon: "📊",
            duration: "1–2 Years",
            suitableFor:
                "Students and professionals pursuing business education",
            popularFields:
                "Finance • Marketing • Management • Entrepreneurship",
            destinations:
                "USA • UK • Canada • Australia • Europe"
        },

        {
            name: "PhD",
            shortName: "PhD",
            icon: "🔬",
            duration: "3–6 Years",
            suitableFor:
                "Students interested in advanced research and academia",
            popularFields:
                "Technology • Science • Engineering • Medicine",
            destinations:
                "USA • UK • Canada • Germany • Australia"
        },

        {
            name: "Diploma & Certificate",
            shortName: "CERT",
            icon: "📜",
            duration: "6 Months–2 Years",
            suitableFor:
                "Students seeking focused professional skills",
            popularFields:
                "Technology • Business • Design • Healthcare",
            destinations:
                "Canada • UK • Australia • Europe"
        },

        {
            name: "Postgraduate Diploma",
            shortName: "PGD",
            icon: "💼",
            duration: "1–2 Years",
            suitableFor:
                "Graduates seeking practical and career-focused education",
            popularFields:
                "IT • Business • Management • Data Analytics",
            destinations:
                "Canada • UK • Australia • Ireland"
        }

    ];


    return `

        <!-- =====================================================
             DEGREE EXPLORER
        ====================================================== -->

        <section
            class="study-abroad-degree-explorer"
            id="degree-explorer"
        >


            <div class="study-abroad-degree-explorer-container">


                <!-- =================================================
                     SECTION HEADER
                ================================================== -->

                <div class="study-abroad-degree-explorer-header">


                    <div class="study-abroad-section-eyebrow">
                        CHOOSE YOUR PATH
                    </div>


                    <h2>

                        Explore
                        <span>Degrees & Programs</span>

                    </h2>


                    <p>

                        Explore international degree options based
                        on your academic level, career goals and
                        preferred study destination.

                    </p>


                </div>


                <!-- =================================================
                     DEGREE FILTERS
                ================================================== -->

                <div class="study-abroad-degree-filters">


                    <button
                        type="button"
                        class="degree-filter active"
                    >
                        All Degrees
                    </button>


                    <button
                        type="button"
                        class="degree-filter"
                    >
                        Undergraduate
                    </button>


                    <button
                        type="button"
                        class="degree-filter"
                    >
                        Postgraduate
                    </button>


                    <button
                        type="button"
                        class="degree-filter"
                    >
                        MBA
                    </button>


                    <button
                        type="button"
                        class="degree-filter"
                    >
                        PhD
                    </button>


                    <button
                        type="button"
                        class="degree-filter"
                    >
                        Diploma
                    </button>


                </div>


                <!-- =================================================
                     DEGREE GRID
                ================================================== -->

                <div class="study-abroad-degree-grid">


                    ${degrees.map((degree) => `

                        <article
                            class="study-abroad-degree-card"
                        >


                            <!-- =================================================
                                 CARD HEADER
                            ================================================== -->

                            <div class="degree-card-header">


                                <div
                                    class="degree-card-icon"
                                    aria-hidden="true"
                                >
                                    ${degree.icon}
                                </div>


                                <span class="degree-card-short-name">
                                    ${degree.shortName}
                                </span>


                            </div>


                            <!-- =================================================
                                 CARD CONTENT
                            ================================================== -->

                            <div class="degree-card-content">


                                <h3>
                                    ${degree.name}
                                </h3>


                                <p>
                                    ${degree.suitableFor}
                                </p>


                                <!-- =================================================
                                     DEGREE DETAILS
                                ================================================== -->

                                <div class="degree-card-details">


                                    <div class="degree-card-detail">


                                        <span
                                            class="degree-detail-icon"
                                            aria-hidden="true"
                                        >
                                            ⏱
                                        </span>


                                        <div>

                                            <span>
                                                Duration
                                            </span>

                                            <strong>
                                                ${degree.duration}
                                            </strong>

                                        </div>


                                    </div>


                                    <div class="degree-card-detail">


                                        <span
                                            class="degree-detail-icon"
                                            aria-hidden="true"
                                        >
                                            📚
                                        </span>


                                        <div>

                                            <span>
                                                Popular Fields
                                            </span>

                                            <strong>
                                                ${degree.popularFields}
                                            </strong>

                                        </div>


                                    </div>


                                    <div class="degree-card-detail">


                                        <span
                                            class="degree-detail-icon"
                                            aria-hidden="true"
                                        >
                                            🌎
                                        </span>


                                        <div>

                                            <span>
                                                Popular Destinations
                                            </span>

                                            <strong>
                                                ${degree.destinations}
                                            </strong>

                                        </div>


                                    </div>


                                </div>


                                <!-- =================================================
                                     CARD ACTION
                                ================================================== -->

                                <button
                                    type="button"
                                    class="degree-explore-button"
                                >

                                    Explore Programs

                                    <span>
                                        →
                                    </span>

                                </button>


                            </div>


                        </article>

                    `).join("")}


                </div>


                <!-- =================================================
                     DEGREE FOOTER
                ================================================== -->

                <div class="study-abroad-degree-footer">


                    <div class="study-abroad-degree-footer-content">


                        <span
                            class="study-abroad-degree-footer-icon"
                            aria-hidden="true"
                        >
                            🎓
                        </span>


                        <div>

                            <strong>
                                Not sure which degree is right for you?
                            </strong>

                            <span>
                                Explore programs based on your education,
                                interests and career goals.
                            </span>

                        </div>


                    </div>


                    <button
                        type="button"
                        class="study-abroad-degree-guide-button"
                    >

                        Explore Degree Guide

                        <span>
                            →
                        </span>

                    </button>


                </div>


            </div>


        </section>

    `;
}