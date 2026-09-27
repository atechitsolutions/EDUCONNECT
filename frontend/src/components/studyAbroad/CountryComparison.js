/* =========================================================
   STUDY ABROAD — COUNTRY COMPARISON
========================================================= */

export default function CountryComparison() {

    const countries = [

        {
            name: "USA",
            flag: "🇺🇸",
            universities: "4,000+",
            tuition: "From ₹18L/year",
            popularFor: "STEM • Business • Technology",
            duration: "1–2 Years",
            workOpportunity: "OPT available"
        },

        {
            name: "United Kingdom",
            flag: "🇬🇧",
            universities: "160+",
            tuition: "From ₹15L/year",
            popularFor: "Business • Law • Medicine",
            duration: "1 Year",
            workOpportunity: "Graduate Route"
        },

        {
            name: "Canada",
            flag: "🇨🇦",
            universities: "100+",
            tuition: "From ₹12L/year",
            popularFor: "IT • Business • Engineering",
            duration: "1–2 Years",
            workOpportunity: "PGWP eligible programs"
        },

        {
            name: "Australia",
            flag: "🇦🇺",
            universities: "40+",
            tuition: "From ₹14L/year",
            popularFor: "Business • IT • Healthcare",
            duration: "1–2 Years",
            workOpportunity: "Post-study work options"
        },

        {
            name: "Germany",
            flag: "🇩🇪",
            universities: "400+",
            tuition: "Low / No tuition at many public universities",
            popularFor: "Engineering • Technology",
            duration: "1–2 Years",
            workOpportunity: "Post-study work options"
        },

        {
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

        <!-- =====================================================
             COUNTRY COMPARISON
        ====================================================== -->

        <section
            class="study-abroad-country-comparison"
            id="country-comparison"
        >


            <div class="study-abroad-country-comparison-container">


                <!-- =================================================
                     SECTION HEADER
                ================================================== -->

                <div class="study-abroad-country-comparison-header">


                    <div class="study-abroad-section-eyebrow">
                        COMPARE DESTINATIONS
                    </div>


                    <h2>

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

                <div class="study-abroad-country-selector">


                    <button
                        type="button"
                        class="country-selector-button active"
                    >

                        🇺🇸 USA

                    </button>


                    <button
                        type="button"
                        class="country-selector-button"
                    >

                        🇬🇧 UK

                    </button>


                    <button
                        type="button"
                        class="country-selector-button"
                    >

                        🇨🇦 Canada

                    </button>


                    <button
                        type="button"
                        class="country-selector-button"
                    >

                        🇦🇺 Australia

                    </button>


                    <button
                        type="button"
                        class="country-selector-button"
                    >

                        🇩🇪 Germany

                    </button>


                    <button
                        type="button"
                        class="country-selector-button"
                    >

                        🇫🇷 France

                    </button>


                </div>


                <!-- =================================================
                     COMPARISON GRID
                ================================================== -->

                <div class="study-abroad-country-comparison-grid">


                    ${countries.map((country) => `

                        <article
                            class="study-abroad-country-comparison-card"
                        >


                            <!-- =================================================
                                 CARD HEADER
                            ================================================== -->

                            <div class="country-comparison-card-header">


                                <div class="country-comparison-country">


                                    <span
                                        class="country-comparison-flag"
                                    >
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
                                >

                                    ♡

                                </button>


                            </div>


                            <!-- =================================================
                                 COUNTRY DETAILS
                            ================================================== -->

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


                            <!-- =================================================
                                 CARD ACTION
                            ================================================== -->

                            <button
                                type="button"
                                class="country-comparison-explore-button"
                            >

                                Explore ${country.name}

                                <span>
                                    →
                                </span>

                            </button>


                        </article>

                    `).join("")}


                </div>


                <!-- =================================================
                     COMPARISON FOOTER
                ================================================== -->

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
                                Compare destinations and find an option
                                that matches your goals.
                            </span>

                        </div>


                    </div>


                    <button
                        type="button"
                        class="country-comparison-button"
                    >

                        Compare Countries

                        <span>
                            →
                        </span>

                    </button>


                </div>


            </div>


        </section>

    `;
}