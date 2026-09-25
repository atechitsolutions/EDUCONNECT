export default function StudyAbroadDestinations() {

    const destinations = [

        {
            country: "USA",
            flag: "🇺🇸",
            image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=1000&q=85",
            universities: "4,000+ Universities",
            courses: "Popular for STEM, Business & Technology",
            tuition: "Tuition from ₹18L/year"
        },

        {
            country: "United Kingdom",
            flag: "🇬🇧",
            image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1000&q=85",
            universities: "160+ Universities",
            courses: "Popular for Business, Law & Medicine",
            tuition: "Tuition from ₹15L/year"
        },

        {
            country: "Canada",
            flag: "🇨🇦",
            image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1000&q=85",
            universities: "100+ Universities",
            courses: "Popular for IT, Business & Engineering",
            tuition: "Tuition from ₹12L/year"
        },

        {
            country: "Australia",
            flag: "🇦🇺",
            image: "https://images.unsplash.com/photo-1506973035872-a4f7d6c5e7a1?auto=format&fit=crop&w=1000&q=85",
            universities: "40+ Universities",
            courses: "Popular for Business, IT & Healthcare",
            tuition: "Tuition from ₹14L/year"
        },

        {
            country: "Germany",
            flag: "🇩🇪",
            image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1000&q=85",
            universities: "400+ Universities",
            courses: "Popular for Engineering & Technology",
            tuition: "Low / No tuition at many public universities"
        },

        {
            country: "France",
            flag: "🇫🇷",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=85",
            universities: "3,500+ Institutions",
            courses: "Popular for Business, Arts & Fashion",
            tuition: "Tuition from ₹4L/year"
        },

        {
            country: "Ireland",
            flag: "🇮🇪",
            image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=1000&q=85",
            universities: "40+ Higher Education Institutions",
            courses: "Popular for IT, Business & Data Science",
            tuition: "Tuition from ₹10L/year"
        },

        {
            country: "New Zealand",
            flag: "🇳🇿",
            image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1000&q=85",
            universities: "8 Universities",
            courses: "Popular for Business, Engineering & IT",
            tuition: "Tuition from ₹12L/year"
        }

    ];


    return `

        <section
            class="study-abroad-destinations"
            id="study-abroad-destinations"
        >

            <div class="study-abroad-destinations-container">


                <!-- =================================================
                     SECTION HEADER
                ================================================== -->

                <div class="study-abroad-destinations-header">

                    <div class="study-abroad-section-eyebrow">
                        EXPLORE THE WORLD
                    </div>

                    <h2>
                        Choose Your
                        <span>Study Destination</span>
                    </h2>

                    <p>
                        Explore leading study destinations around the world
                        and discover universities, courses, costs and
                        opportunities for international students.
                    </p>

                </div>


                <!-- =================================================
                     DESTINATION FILTERS
                ================================================== -->

                <div class="study-abroad-destination-filters">

                    <button class="destination-filter active">
                        All Destinations
                    </button>

                    <button class="destination-filter">
                        Popular
                    </button>

                    <button class="destination-filter">
                        Affordable
                    </button>

                    <button class="destination-filter">
                        Top Universities
                    </button>

                </div>


                <!-- =================================================
                     DESTINATION GRID
                ================================================== -->

                <div class="study-abroad-destination-grid">

                    ${destinations.map((destination) => `

                        <article
                            class="study-abroad-destination-card"
                        >


                            <!-- IMAGE -->

                            <div class="destination-card-image">

                                <img
                                    src="${destination.image}"
                                    alt="${destination.country}"
                                    loading="lazy"
                                />

                                <div
                                    class="destination-card-image-overlay"
                                ></div>


                                <div class="destination-country">

                                    <span>
                                        ${destination.flag}
                                    </span>

                                    ${destination.country}

                                </div>


                                <button
                                    class="destination-favourite"
                                    aria-label="Save ${destination.country}"
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

                                    <span class="destination-card-arrow">
                                        ↗
                                    </span>

                                </div>


                                <h3>
                                    Study in ${destination.country}
                                </h3>


                                <div class="destination-card-info">

                                    <div>

                                        <span class="destination-info-icon">
                                            🎓
                                        </span>

                                        <span>
                                            ${destination.universities}
                                        </span>

                                    </div>


                                    <div>

                                        <span class="destination-info-icon">
                                            📚
                                        </span>

                                        <span>
                                            ${destination.courses}
                                        </span>

                                    </div>


                                    <div>

                                        <span class="destination-info-icon">
                                            💰
                                        </span>

                                        <span>
                                            ${destination.tuition}
                                        </span>

                                    </div>

                                </div>


                                <button
                                    class="destination-explore-button"
                                >

                                    Explore ${destination.country}

                                    <span>
                                        →
                                    </span>

                                </button>

                            </div>

                        </article>

                    `).join("")}

                </div>


                <!-- =================================================
                     VIEW ALL
                ================================================== -->

                <div class="study-abroad-destinations-footer">

                    <p>
                        Not sure where to study?
                        <strong>
                            Compare destinations and find the right
                            country for you.
                        </strong>
                    </p>

                    <button class="study-abroad-compare-button">

                        Compare Destinations

                        <span>
                            →
                        </span>

                    </button>

                </div>


            </div>

        </section>

    `;
}