/* =========================================================
   STUDY ABROAD — DEGREE EXPLORER
========================================================= */

export default function DegreeExplorer() {

    const degrees = [

        {
            id: "bachelors",
            name: "Bachelor's Degree",
            shortName: "UG",
            type: "Undergraduate",
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
            id: "masters",
            name: "Master's Degree",
            shortName: "PG",
            type: "Postgraduate",
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
            id: "mba",
            name: "MBA",
            shortName: "MBA",
            type: "MBA",
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
            id: "phd",
            name: "PhD",
            shortName: "PhD",
            type: "PhD",
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
            id: "diploma",
            name: "Diploma & Certificate",
            shortName: "CERT",
            type: "Diploma",
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
            id: "postgraduate-diploma",
            name: "Postgraduate Diploma",
            shortName: "PGD",
            type: "Postgraduate",
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

        <section
            id="study-abroad-degree-explorer"
            class="study-abroad-degree-explorer"
            aria-labelledby="degree-explorer-title"
        >

            <div class="study-abroad-degree-explorer-container">


                <div class="study-abroad-degree-explorer-header">

                    <div class="study-abroad-section-eyebrow">
                        CHOOSE YOUR DEGREE
                    </div>

                    <h2 id="degree-explorer-title">

                        Explore
                        <span>Degrees</span>

                    </h2>

                    <p>

                        Explore undergraduate, postgraduate,
                        MBA, PhD, diploma and certificate
                        study options abroad.

                    </p>

                </div>


                <!-- =================================================
                     FILTERS
                ================================================== -->

                <div
                    class="study-abroad-degree-filters"
                    role="tablist"
                    aria-label="Degree filters"
                >

                    <button
                        type="button"
                        class="degree-filter active"
                        data-degree-filter="all"
                        aria-selected="true"
                        role="tab"
                    >
                        All Degrees
                    </button>


                    <button
                        type="button"
                        class="degree-filter"
                        data-degree-filter="Undergraduate"
                        aria-selected="false"
                        role="tab"
                    >
                        Undergraduate
                    </button>


                    <button
                        type="button"
                        class="degree-filter"
                        data-degree-filter="Postgraduate"
                        aria-selected="false"
                        role="tab"
                    >
                        Postgraduate
                    </button>


                    <button
                        type="button"
                        class="degree-filter"
                        data-degree-filter="MBA"
                        aria-selected="false"
                        role="tab"
                    >
                        MBA
                    </button>


                    <button
                        type="button"
                        class="degree-filter"
                        data-degree-filter="PhD"
                        aria-selected="false"
                        role="tab"
                    >
                        PhD
                    </button>


                    <button
                        type="button"
                        class="degree-filter"
                        data-degree-filter="Diploma"
                        aria-selected="false"
                        role="tab"
                    >
                        Diploma
                    </button>

                </div>


                <!-- =================================================
                     DEGREE GRID
                ================================================== -->

                <div
                    class="study-abroad-degree-grid"
                    data-degree-grid
                >

                    ${degrees.map((degree) => `

                        <article
                            class="study-abroad-degree-card"
                            data-degree-card
                            data-degree-type="${degree.type}"
                            data-degree-id="${degree.id}"
                        >

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


                            <div class="degree-card-content">

                                <h3>
                                    ${degree.name}
                                </h3>

                                <p>
                                    ${degree.suitableFor}
                                </p>


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


                                <a
                                    href="#study-abroad-course-explorer"
                                    class="degree-explore-button"
                                    data-degree-explore="${degree.id}"
                                >

                                    Explore Programs

                                    <span>
                                        →
                                    </span>

                                </a>

                            </div>

                        </article>

                    `).join("")}

                </div>


                <div
                    class="study-abroad-degree-empty"
                    data-degree-empty
                    hidden
                >

                    <div aria-hidden="true">
                        🎓
                    </div>

                    <h3>
                        No degree options found
                    </h3>

                    <p>
                        Try another degree category.
                    </p>

                </div>


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


                    <a
                        href="#study-abroad-course-explorer"
                        class="study-abroad-degree-guide-button"
                    >

                        Explore Courses

                        <span>
                            →
                        </span>

                    </a>

                </div>

            </div>

        </section>

    `;
}