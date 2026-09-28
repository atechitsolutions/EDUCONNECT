/**
 * ============================================================
 * EDUCONNECT — STUDY ABROAD DESTINATIONS
 * ============================================================
 *
 * Purpose:
 * - Country discovery
 * - Study destination SEO
 * - Internal linking
 * - Country comparison entry point
 * - Popular destination exploration
 *
 * Framework:
 * Vanilla JavaScript + Vite
 * ============================================================
 */

export default function StudyAbroadDestinations() {

    const destinations = [
        {
            code: "US",
            country: "USA",
            title: "Study in the USA",
            description:
                "Explore universities, courses and study opportunities across the United States.",
            highlights: [
                "Universities",
                "STEM programs",
                "Research"
            ],
            href: "#study-abroad-country-comparison"
        },

        {
            code: "UK",
            country: "UK",
            title: "Study in the UK",
            description:
                "Discover undergraduate, postgraduate and professional study options in the United Kingdom.",
            highlights: [
                "Top universities",
                "Master's programs",
                "Research"
            ],
            href: "#study-abroad-country-comparison"
        },

        {
            code: "CA",
            country: "Canada",
            title: "Study in Canada",
            description:
                "Explore Canadian universities, colleges and programs across a wide range of study areas.",
            highlights: [
                "Universities",
                "Colleges",
                "Programs"
            ],
            href: "#study-abroad-country-comparison"
        },

        {
            code: "AU",
            country: "Australia",
            title: "Study in Australia",
            description:
                "Explore courses and institutions across Australia's major study destinations.",
            highlights: [
                "Universities",
                "Courses",
                "Student life"
            ],
            href: "#study-abroad-country-comparison"
        },

        {
            code: "DE",
            country: "Germany",
            title: "Study in Germany",
            description:
                "Explore German universities and study opportunities in engineering, technology, business and more.",
            highlights: [
                "Engineering",
                "Technology",
                "Research"
            ],
            href: "#study-abroad-country-comparison"
        },

        {
            code: "IE",
            country: "Ireland",
            title: "Study in Ireland",
            description:
                "Discover study opportunities in technology, business, science and other academic fields.",
            highlights: [
                "Technology",
                "Business",
                "Research"
            ],
            href: "#study-abroad-country-comparison"
        },

        {
            code: "NZ",
            country: "New Zealand",
            title: "Study in New Zealand",
            description:
                "Explore universities, institutes and programs available to international students.",
            highlights: [
                "Universities",
                "Programs",
                "Student experience"
            ],
            href: "#study-abroad-country-comparison"
        },

        {
            code: "FR",
            country: "France",
            title: "Study in France",
            description:
                "Discover higher education opportunities across French universities and institutions.",
            highlights: [
                "Business",
                "Engineering",
                "Arts"
            ],
            href: "#study-abroad-country-comparison"
        }
    ];


    return `
        <section
            class="study-abroad-destinations-section"
            id="study-abroad-destination-explorer"
            aria-labelledby="study-abroad-destinations-title"
        >

            <div class="study-abroad-container">


                <!-- ==================================================
                     SECTION HEADER
                =================================================== -->

                <div class="study-abroad-section-header">

                    <div class="study-abroad-section-header-content">

                        <span class="study-abroad-section-eyebrow">
                            STUDY DESTINATIONS
                        </span>

                        <h2 id="study-abroad-destinations-title">
                            Explore the best study abroad destinations
                        </h2>

                        <p>
                            Compare popular countries for overseas education
                            and discover universities, courses, scholarships,
                            admission requirements and student opportunities.
                        </p>

                    </div>


                    <a
                        href="#study-abroad-country-comparison"
                        class="study-abroad-section-link"
                    >
                        Compare countries

                        <span aria-hidden="true">
                            →
                        </span>
                    </a>

                </div>


                <!-- ==================================================
                     COUNTRY GRID
                =================================================== -->

                <div class="study-abroad-destinations-grid">

                    ${destinations
                        .map(
                            (destination, index) => `
                                <article
                                    class="study-abroad-country-card"
                                    data-country="${destination.code}"
                                    data-destination-index="${index}"
                                >

                                    <a
                                        href="${destination.href}"
                                        class="study-abroad-country-card-link"
                                        aria-label="${destination.title}"
                                    >


                                        <!-- COUNTRY TOP -->

                                        <div class="study-abroad-country-card-top">

                                            <span
                                                class="study-abroad-country-code"
                                                aria-hidden="true"
                                            >
                                                ${destination.code}
                                            </span>

                                            <span
                                                class="study-abroad-country-arrow"
                                                aria-hidden="true"
                                            >
                                                ↗
                                            </span>

                                        </div>


                                        <!-- COUNTRY CONTENT -->

                                        <div class="study-abroad-country-card-content">

                                            <h3>
                                                ${destination.title}
                                            </h3>

                                            <p>
                                                ${destination.description}
                                            </p>

                                        </div>


                                        <!-- COUNTRY HIGHLIGHTS -->

                                        <div class="study-abroad-country-highlights">

                                            ${destination.highlights
                                                .map(
                                                    (highlight) => `
                                                        <span>
                                                            ${highlight}
                                                        </span>
                                                    `
                                                )
                                                .join("")}

                                        </div>


                                        <!-- EXPLORE -->

                                        <div class="study-abroad-country-card-footer">

                                            <span>
                                                Explore destination
                                            </span>

                                            <span aria-hidden="true">
                                                →
                                            </span>

                                        </div>

                                    </a>

                                </article>
                            `
                        )
                        .join("")}

                </div>


                <!-- ==================================================
                     DESTINATION DISCOVERY CTA
                =================================================== -->

                <div class="study-abroad-destination-discovery">

                    <div class="study-abroad-destination-discovery-content">

                        <span class="study-abroad-section-eyebrow">
                            NOT SURE WHERE TO START?
                        </span>

                        <h3>
                            Compare countries based on what matters to you.
                        </h3>

                        <p>
                            Explore study options, course availability,
                            admission requirements, estimated costs and
                            other factors before creating your shortlist.
                        </p>

                    </div>


                    <div class="study-abroad-destination-discovery-actions">

                        <a
                            href="#study-abroad-country-comparison"
                            class="study-abroad-primary-button"
                        >
                            Compare destinations
                            <span aria-hidden="true">→</span>
                        </a>

                        <a
                            href="#study-abroad-counselling"
                            class="study-abroad-secondary-button"
                        >
                            Get free counselling
                        </a>

                    </div>

                </div>


                <!-- ==================================================
                     SEO CONTENT
                =================================================== -->

                <div class="study-abroad-destination-seo">

                    <h2>
                        Study abroad destinations for Indian students
                    </h2>

                    <p>
                        Choosing the right study abroad destination is an
                        important part of planning your overseas education.
                        Students from India can explore universities and
                        courses across countries such as the USA, UK, Canada,
                        Australia, Germany and Ireland, along with other
                        international destinations.
                    </p>

                    <p>
                        The right destination depends on factors such as your
                        preferred course, degree level, university options,
                        admission requirements, tuition fees, living costs,
                        available scholarships and personal goals. Comparing
                        these factors before applying can help you create a
                        more informed university shortlist.
                    </p>

                    <p>
                        EDUCONNECT brings destination discovery, university
                        search, course exploration, scholarships, education
                        financing information and application guidance together
                        in one Study Abroad platform.
                    </p>

                </div>

            </div>

        </section>
    `;
}