/* =========================================================
   STUDY ABROAD — COUNTRY COMPARISON
========================================================= */

export default function CountryComparison() {

    const countries = [

        {
            id: "usa",
            name: "USA",
            flag: "🇺🇸",
            universities: "4,000+",
            tuition: "From ₹18L/year",
            popularFor: "STEM • Business • Technology",
            duration: "1–2 Years",
            workOpportunity: "OPT available"
        },

        {
            id: "uk",
            name: "United Kingdom",
            flag: "🇬🇧",
            universities: "160+",
            tuition: "From ₹15L/year",
            popularFor: "Business • Law • Medicine",
            duration: "1 Year",
            workOpportunity: "Graduate Route"
        },

        {
            id: "canada",
            name: "Canada",
            flag: "🇨🇦",
            universities: "100+",
            tuition: "From ₹12L/year",
            popularFor: "IT • Business • Engineering",
            duration: "1–2 Years",
            workOpportunity: "PGWP eligible programs"
        },

        {
            id: "australia",
            name: "Australia",
            flag: "🇦🇺",
            universities: "40+",
            tuition: "From ₹14L/year",
            popularFor: "Business • IT • Healthcare",
            duration: "1–2 Years",
            workOpportunity: "Post-study work options"
        },

        {
            id: "germany",
            name: "Germany",
            flag: "🇩🇪",
            universities: "400+",
            tuition: "Low / No tuition at many public universities",
            popularFor: "Engineering • Technology",
            duration: "1–2 Years",
            workOpportunity: "Post-study work options"
        },

        {
            id: "france",
            name: "France",
            flag: "🇫🇷",
            universities: "3,500+",
            tuition: "From ₹4L/year",
            popularFor: "Business • Arts • Fashion",
            duration: "1–2 Years",
            workOpportunity: "Post-study options"
        }

    ];


    return `

        <section
            class="study-abroad-country-comparison"
            id="study-abroad-country-comparison"
            aria-labelledby="country-comparison-title"
        >

            <div class="study-abroad-country-comparison-container">


                <div class="study-abroad-country-comparison-header">

                    <div class="study-abroad-section-eyebrow">
                        COMPARE DESTINATIONS
                    </div>

                    <h2 id="country-comparison-title">
                        Compare Study
                        <span>Destinations</span>
                    </h2>

                    <p>
                        Compare popular study abroad destinations
                        based on universities, tuition costs, popular
                        courses and post-study opportunities.
                    </p>

                </div>


                <!-- =================================================
                     COUNTRY SELECTOR
                ================================================== -->

                <div
                    class="study-abroad-country-selector"
                    role="tablist"
                    aria-label="Select countries"
                >

                    ${countries.map((country, index) => `

                        <button
                            type="button"
                            class="country-selector-button ${index === 0 ? "active" : ""}"
                            data-country-select="${country.id}"
                            aria-selected="${index === 0 ? "true" : "false"}"
                            role="tab"
                        >

                            ${country.flag}
                            ${country.name === "United Kingdom"
                                ? "UK"
                                : country.name}

                        </button>

                    `).join("")}

                </div>


                <!-- =================================================
                     COMPARISON TABLE
                ================================================== -->

                <div
                    class="study-abroad-country-comparison-grid"
                    data-country-comparison-grid
                >

                    ${countries.map((country) => `

                        <article
                            class="study-abroad-country-comparison-card"
                            data-country-comparison-card
                            data-country="${country.id}"
                        >

                            <div class="country-comparison-card-header">

                                <div class="country-comparison-country">

                                    <span class="country-comparison-flag">
                                        ${country.flag}
                                    </span>

                                    <div>

                                        <span>
                                            STUDY DESTINATION
                                        </span>

                                        <h3>
                                            ${country.name}
                                        </h3>

                                    </div>

                                </div>


                                <button
                                    type="button"
                                    class="country-comparison-save"
                                    aria-label="Save ${country.name}"
                                    aria-pressed="false"
                                    data-country-favourite="${country.id}"
                                >
                                    ♡
                                </button>

                            </div>


                            <div class="country-comparison-details">


                                <div class="country-comparison-detail">

                                    <span
                                        class="country-comparison-detail-icon"
                                        aria-hidden="true"
                                    >
                                        🎓
                                    </span>

                                    <div>

                                        <span>
                                            Universities
                                        </span>

                                        <strong>
                                            ${country.universities}
                                        </strong>

                                    </div>

                                </div>


                                <div class="country-comparison-detail">

                                    <span
                                        class="country-comparison-detail-icon"
                                        aria-hidden="true"
                                    >
                                        💰
                                    </span>

                                    <div>

                                        <span>
                                            Tuition
                                        </span>

                                        <strong>
                                            ${country.tuition}
                                        </strong>

                                    </div>

                                </div>


                                <div class="country-comparison-detail">

                                    <span
                                        class="country-comparison-detail-icon"
                                        aria-hidden="true"
                                    >
                                        📚
                                    </span>

                                    <div>

                                        <span>
                                            Popular For
                                        </span>

                                        <strong>
                                            ${country.popularFor}
                                        </strong>

                                    </div>

                                </div>


                                <div class="country-comparison-detail">

                                    <span
                                        class="country-comparison-detail-icon"
                                        aria-hidden="true"
                                    >
                                        ⏱
                                    </span>

                                    <div>

                                        <span>
                                            Typical Duration
                                        </span>

                                        <strong>
                                            ${country.duration}
                                        </strong>

                                    </div>

                                </div>


                                <div class="country-comparison-detail">

                                    <span
                                        class="country-comparison-detail-icon"
                                        aria-hidden="true"
                                    >
                                        💼
                                    </span>

                                    <div>

                                        <span>
                                            Work Opportunity
                                        </span>

                                        <strong>
                                            ${country.workOpportunity}
                                        </strong>

                                    </div>

                                </div>

                            </div>


                            <a
                                href="#study-abroad-course-explorer"
                                class="country-comparison-explore-button"
                                data-country-explore="${country.id}"
                            >

                                Explore ${country.name}

                                <span>
                                    →
                                </span>

                            </a>

                        </article>

                    `).join("")}

                </div>


                <!-- =================================================
                     MOBILE COMPARISON NOTE
                ================================================== -->

                <div class="study-abroad-country-comparison-mobile-note">

                    <span aria-hidden="true">
                        ↔
                    </span>

                    <p>
                        Swipe or scroll horizontally to explore
                        destination information on smaller screens.
                    </p>

                </div>


                <div class="study-abroad-country-comparison-footer">

                    <div class="country-comparison-footer-content">

                        <span
                            class="country-comparison-footer-icon"
                            aria-hidden="true"
                        >
                            🌎
                        </span>

                        <div>

                            <strong>
                                Not sure which country to choose?
                            </strong>

                            <span>
                                Compare destinations and explore
                                your available study options.
                            </span>

                        </div>

                    </div>


                    <a
                        href="#study-abroad-destinations"
                        class="country-comparison-button"
                    >

                        Explore Destinations

                        <span>
                            →
                        </span>

                    </a>

                </div>

            </div>

        </section>

    `;
}