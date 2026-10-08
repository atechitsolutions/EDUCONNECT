/* =========================================================
   EDUCONNECT — STUDY ABROAD PAGE
   ---------------------------------------------------------
   Page composition only.

   KEEP UNCHANGED:
   - Existing Study Abroad Navbar
   - Existing Header / Footer
   - Existing Hero
   - Lead Form / Counselling
   - SEO / Metadata
   - Existing Vanilla JS + Vite architecture
========================================================= */

import StudyAbroadHero
    from "../components/studyAbroad/StudyAbroadHero.js";

import StudyAbroadLeadForm
    from "../components/StudyAbroadLeadForm.js";

import CountryComparison
    from "../components/studyAbroad/CountryComparison.js";

import Intakes
    from "../components/studyAbroad/Intakes.js";

import AbroadScholarships
    from "../components/studyAbroad/AbroadScholarships.js";

import StudyAbroadCost
    from "../components/studyAbroad/StudyAbroadCost.js";

import AbroadStudentReviews
    from "../components/studyAbroad/AbroadStudentReviews.js";

import StudyAbroadFAQ
    from "../components/studyAbroad/StudyAbroadFAQ.js";

import StudyAbroadCTA
    from "../components/studyAbroad/StudyAbroadCTA.js";


/* =========================================================
   STUDY ABROAD PAGE
========================================================= */

export default function StudyAbroadPage() {

    return `

        <div
            id="study-abroad-content"
            class="study-abroad-page-content"
        >

            <!-- =================================================
                 01. HERO
            ================================================== -->

            ${StudyAbroadHero()}

            <section
                class="study-abroad-featured-institutions"
                id="study-abroad-institutions"
                aria-labelledby="study-abroad-institutions-title"
                hidden
            >
                <div class="study-abroad-featured-institutions-container">
                    <div class="study-abroad-featured-institutions-heading">
                        <p>EXPLORE INSTITUTIONS</p>
                        <h2 id="study-abroad-institutions-title">
                            Colleges &amp; Universities Abroad
                        </h2>
                    </div>
                    <div
                        class="institution-search-card-grid"
                        data-study-abroad-institutions
                    ></div>
                </div>
            </section>


            <!-- =================================================
                 02. LEAD / COUNSELLING FORM
            ================================================== -->

            ${StudyAbroadLeadForm()}


            <!-- =================================================
                 03. COUNTRY COMPARISON
            ================================================== -->

            ${CountryComparison()}


            <!-- =================================================
                 04. INTAKES & DEADLINES
            ================================================== -->

            ${Intakes()}


            <!-- =================================================
                 05. SCHOLARSHIPS
            ================================================== -->

            ${AbroadScholarships()}


            <!-- =================================================
                 06. EDUCATION COST
            ================================================== -->

            ${StudyAbroadCost()}


            <!-- =================================================
                 07. STUDENT REVIEWS
            ================================================== -->

            ${AbroadStudentReviews()}


            <!-- =================================================
                 08. FAQ
            ================================================== -->

            ${StudyAbroadFAQ()}


            <!-- =================================================
                 09. FINAL CTA
            ================================================== -->

            ${StudyAbroadCTA()}

        </div>

    `;
}