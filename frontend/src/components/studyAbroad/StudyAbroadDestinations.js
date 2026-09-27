/* =========================================================
   STUDY ABROAD — DESTINATIONS
========================================================= */

export default function StudyAbroadDestinations() {

    const destinations = [

        {
            id: "usa",
            country: "USA",
            flag: "🇺🇸",
            category: [
                "popular",
                "top-universities"
            ],
            image:
                "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=1000&q=85",
            universities:
                "4,000+ Universities",
            courses:
                "STEM, Business & Technology",
            tuition:
                "Tuition from ₹18L/year"
        },

        {
            id: "uk",
            country: "United Kingdom",
            flag: "🇬🇧",
            category: [
                "popular",
                "top-universities"
            ],
            image:
                "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1000&q=85",
            universities:
                "160+ Universities",
            courses:
                "Business, Law & Medicine",
            tuition:
                "Tuition from ₹15L/year"
        },

        {
            id: "canada",
            country: "Canada",
            flag: "🇨🇦",
            category: [
                "popular",
                "affordable"
            ],
            image:
                "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1000&q=85",
            universities:
                "100+ Universities",
            courses:
                "IT, Business & Engineering",
            tuition:
                "Tuition from ₹12L/year"
        },

        {
            id: "australia",
            country: "Australia",
            flag: "🇦🇺",
            category: [
                "popular",
                "top-universities"
            ],
            image:
                "https://images.unsplash.com/photo-1506973035872-a4f7d6c5e7a1?auto=format&fit=crop&w=1000&q=85",
            universities:
                "40+ Universities",
            courses:
                "Business, IT & Healthcare",
            tuition:
                "Tuition from ₹14L/year"
        },

        {
            id: "germany",
            country: "Germany",
            flag: "🇩🇪",
            category: [
                "affordable",
                "top-universities"
            ],
            image:
                "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1000&q=85",
            universities:
                "400+ Universities",
            courses:
                "Engineering & Technology",
            tuition:
                "Varies by institution and program"
        },

        {
            id: "france",
            country: "France",
            flag: "🇫🇷",
            category: [
                "affordable"
            ],
            image:
                "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=85",
            universities:
                "3,500+ Institutions",
            courses:
                "Business, Arts & Fashion",
            tuition:
                "Varies by institution and program"
        },

        {
            id: "ireland",
            country: "Ireland",
            flag: "🇮🇪",
            category: [
                "popular"
            ],
            image:
                "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=1000&q=85",
            universities:
                "40+ Higher Education Institutions",
            courses:
                "IT, Business & Data Science",
            tuition:
                "Varies by institution and program"
        },

        {
            id: "new-zealand",
            country: "New Zealand",
            flag: "🇳🇿",
            category: [
                "affordable"
            ],
            image:
                "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1000&q=85",
            universities:
                "8 Universities",
            courses:
                "Business, Engineering & IT",
            tuition:
                "Varies by institution and program"
        }

    ];


    return `

        <section
            id="study-abroad-destinations"
            class="study-abroad-destinations"
            aria-labelledby="study-abroad-destinations-title"
        >

            <div class="study-abroad-destinations-container">


                <!-- =================================================
                     HEADER
                ================================================== -->

                <div class="study-abroad-destinations-header">

                    <div class="study-abroad-section-eyebrow">
                        EXPLORE THE WORLD
                    </div>


                    <h2 id="study-abroad-destinations-title">

                        Choose Your
                        <span>
                            Study Destination
                        </span>

                    </h2>


                    <p>

                        Explore destinations and compare countries
                        based on universities, courses and study
                        opportunities.

                    </p>

                </div>


                <!-- =================================================
                     FILTERS
                ================================================== -->

                <div
                    class="study-abroad-destination-filters"
                    role="tablist"
                    aria-label="Study destination filters"
                >


                    <button
                        type="button"
                        class="destination-filter active"
                        data-destination-filter="all"
                        role="tab"
                        aria-selected="true"
                    >
                        All Destinations
                    </button>


                    <button
                        type="button"
                        class="destination-filter"
                        data-destination-filter="popular"
                        role="tab"
                        aria-selected="false"
                    >
                        Popular
                    </button>


                    <button
                        type="button"
                        class="destination-filter"
                        data-destination-filter="affordable"
                        role="tab"
                        aria-selected="false"
                    >
                        Affordable
                    </button>


                    <button
                        type="button"
                        class="destination-filter"
                        data-destination-filter="top-universities"
                        role="tab"
                        aria-selected="false"
                    >
                        Top Universities
                    </button>

                </div>


                <!-- =================================================
                     DESTINATION GROUP ANCHORS
                ================================================== -->

                <div
                    id="study-abroad-popular-destinations"
                    class="study-abroad-destination-anchor"
                    aria-hidden="true"
                ></div>


                <div
                    id="study-abroad-affordable-destinations"
                    class="study-abroad-destination-anchor"
                    aria-hidden="true"
                ></div>


                <div
                    id="study-abroad-top-university-destinations"
                    class="study-abroad-destination-anchor"
                    aria-hidden="true"
                ></div>


                <!-- =================================================
                     DESTINATION GRID
                ================================================== -->

                <div
                    class="study-abroad-destination-grid"
                    data-destination-grid
                >

                    ${destinations.map((destination) => `

                        <article
                            class="study-abroad-destination-card"
                            data-destination-card
                            data-country="${destination.id}"
                            data-category="${destination.category.join(" ")}"
                        >


                            <!-- IMAGE -->

                            <div class="destination-card-image">

                                <img
                                    src="${destination.image}"
                                    alt="Study in ${destination.country}"
                                    loading="lazy"
                                />


                                <div
                                    class="destination-card-image-overlay"
                                    aria-hidden="true"
                                ></div>


                                <!-- COUNTRY -->

                                <div class="destination-country">

                                    <span>
                                        ${destination.flag}
                                    </span>

                                    ${destination.country}

                                </div>


                                <!-- FAVORITE -->

                                <button
                                    type="button"
                                    class="destination-favourite"
                                    aria-label="Save ${destination.country}"
                                    aria-pressed="false"
                                    data-destination-favourite="${destination.id}"
                                >
                                    ♡
                                </button>

                            </div>


                            <!-- CONTENT -->

                            <div class="destination-card-content">


                                <div class="destination-card-top">

                                    <span class="destination-card-label">
                                        STUDY ABROAD
                                    </span>


                                    <span
                                        class="destination-card-arrow"
                                        aria-hidden="true"
                                    >
                                        ↗
                                    </span>

                                </div>


                                <h3>
                                    Study in ${destination.country}
                                </h3>


                                <div class="destination-card-info">


                                    <!-- UNIVERSITIES -->

                                    <div>

                                        <span
                                            class="destination-info-icon"
                                            aria-hidden="true"
                                        >
                                            🎓
                                        </span>

                                        <span>
                                            ${destination.universities}
                                        </span>

                                    </div>


                                    <!-- COURSES -->

                                    <div>

                                        <span
                                            class="destination-info-icon"
                                            aria-hidden="true"
                                        >
                                            📚
                                        </span>

                                        <span>
                                            ${destination.courses}
                                        </span>

                                    </div>


                                    <!-- COST -->

                                    <div>

                                        <span
                                            class="destination-info-icon"
                                            aria-hidden="true"
                                        >
                                            💰
                                        </span>

                                        <span>
                                            ${destination.tuition}
                                        </span>

                                    </div>

                                </div>


                                <!-- EXPLORE -->

                                <a
                                    href="#study-abroad-course-explorer"
                                    class="destination-explore-button"
                                    data-destination-explore="${destination.id}"
                                >

                                    Explore ${destination.country}

                                    <span aria-hidden="true">
                                        →
                                    </span>

                                </a>

                            </div>

                        </article>

                    `).join("")}

                </div>


                <!-- =================================================
                     EMPTY STATE
                ================================================== -->

                <div
                    class="study-abroad-destination-empty"
                    data-destination-empty
                    hidden
                >

                    <div
                        class="study-abroad-destination-empty-icon"
                        aria-hidden="true"
                    >
                        🌎
                    </div>

                    <h3>
                        No destinations found
                    </h3>

                    <p>
                        Try another destination category.
                    </p>

                </div>


                <!-- =================================================
                     COMPARE CTA
                ================================================== -->

                <div class="study-abroad-destinations-footer">

                    <p>

                        Not sure where to study?

                        <strong>
                            Compare destinations and explore
                            your options.
                        </strong>

                    </p>


                    <a
                        href="#study-abroad-country-comparison"
                        class="study-abroad-compare-button"
                    >

                        Compare Countries

                        <span aria-hidden="true">
                            →
                        </span>

                    </a>

                </div>

            </div>

        </section>

    `;
}