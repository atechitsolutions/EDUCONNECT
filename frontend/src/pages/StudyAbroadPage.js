/* =========================================================
   EDUCONNECT — STUDY ABROAD PAGE
   ---------------------------------------------------------
   Page composition only.

   IMPORTANT:
   - Existing Study Abroad Navbar stays in StudyAbroadLayout.js
   - Existing Header/Footer stay in StudyAbroadLayout.js
   - Components remain inside:
     src/components/studyAbroad/
   ========================================================= */

import StudyAbroadHero from "../components/studyAbroad/StudyAbroadHero.js";
import StudyAbroadSearch from "../components/studyAbroad/StudyAbroadSearch.js";

import StudyAbroadDestinations from "../components/studyAbroad/StudyAbroadDestinations.js";
import CountryComparison from "../components/studyAbroad/CountryComparison.js";

import DegreeExplorer from "../components/studyAbroad/DegreeExplorer.js";
import CourseExplorer from "../components/studyAbroad/CourseExplorer.js";

import TopUniversitiesAbroad from "../components/studyAbroad/TopUniversitiesAbroad.js";

import AdmissionRequirements from "../components/studyAbroad/AdmissionRequirements.js";
import ApplicationProcess from "../components/studyAbroad/ApplicationProcess.js";
import Intakes from "../components/studyAbroad/Intakes.js";

import AbroadScholarships from "../components/studyAbroad/AbroadScholarships.js";
import StudyAbroadCost from "../components/studyAbroad/StudyAbroadCost.js";
import AbroadExams from "../components/studyAbroad/AbroadExams.js";

import StudyAbroadTools from "../components/studyAbroad/StudyAbroadTools.js";

import AbroadStudentReviews from "../components/studyAbroad/AbroadStudentReviews.js";

import StudyAbroadFAQ from "../components/studyAbroad/StudyAbroadFAQ.js";

import StudyAbroadCTA from "../components/studyAbroad/StudyAbroadCTA.js";

import StudyAbroadAdditionalSections from "../components/studyAbroad/StudyAbroadAdditionalSections.js";


export default function StudyAbroadPage() {

    return `

        <!-- =================================================
             STUDY ABROAD PAGE
        ================================================== -->

        <div
            class="study-abroad-page-content"
            id="study-abroad-content"
        >


            <!-- =================================================
                 01. HERO
            ================================================== -->

            <section
                id="study-abroad-hero-section"
                class="study-abroad-section study-abroad-hero-wrapper"
            >
                ${StudyAbroadHero()}
            </section>


            <!-- =================================================
                 02. SEARCH / DISCOVERY
            ================================================== -->

            <section
                id="study-abroad-search-section"
                class="study-abroad-section"
            >
                ${StudyAbroadSearch()}
            </section>


            <!-- =================================================
                 03. DESTINATIONS
            ================================================== -->

            <section
                id="study-abroad-destinations-section"
                class="study-abroad-section"
            >
                ${StudyAbroadDestinations()}
            </section>


            <!-- =================================================
                 04. COUNTRY COMPARISON
            ================================================== -->

            <section
                id="study-abroad-country-comparison"
                class="study-abroad-section"
            >
                ${CountryComparison()}
            </section>


            <!-- =================================================
                 05. DEGREE EXPLORER
            ================================================== -->

            <section
                id="study-abroad-degree-explorer"
                class="study-abroad-section"
            >
                ${DegreeExplorer()}
            </section>


            <!-- =================================================
                 06. COURSE EXPLORER
            ================================================== -->

            <section
                id="study-abroad-course-explorer"
                class="study-abroad-section"
            >
                ${CourseExplorer()}
            </section>


            <!-- =================================================
                 07. TOP UNIVERSITIES
            ================================================== -->

            <section
                id="study-abroad-universities"
                class="study-abroad-section"
            >
                ${TopUniversitiesAbroad()}
            </section>


            <!-- =================================================
                 08. ADMISSION REQUIREMENTS
            ================================================== -->

            <section
                id="study-abroad-admission-requirements"
                class="study-abroad-section"
            >
                ${AdmissionRequirements()}
            </section>


            <!-- =================================================
                 09. APPLICATION PROCESS
            ================================================== -->

            <section
                id="study-abroad-application-process"
                class="study-abroad-section"
            >
                ${ApplicationProcess()}
            </section>


            <!-- =================================================
                 10. INTAKES
            ================================================== -->

            <section
                id="study-abroad-intakes"
                class="study-abroad-section"
            >
                ${Intakes()}
            </section>


            <!-- =================================================
                 11. SCHOLARSHIPS
            ================================================== -->

            <section
                id="study-abroad-scholarships"
                class="study-abroad-section"
            >
                ${AbroadScholarships()}
            </section>


            <!-- =================================================
                 12. EDUCATION COST
            ================================================== -->

            <section
                id="study-abroad-cost"
                class="study-abroad-section"
            >
                ${StudyAbroadCost()}
            </section>


            <!-- =================================================
                 13. EXAMS
            ================================================== -->

            <section
                id="study-abroad-exams"
                class="study-abroad-section"
            >
                ${AbroadExams()}
            </section>


            <!-- =================================================
                 14. STUDY ABROAD TOOLS
            ================================================== -->

            <section
                id="study-abroad-tools"
                class="study-abroad-section"
            >
                ${StudyAbroadTools()}
            </section>


            <!-- =================================================
                 15. ADDITIONAL INFORMATION
            ================================================== -->

            <section
                id="study-abroad-additional-information"
                class="study-abroad-section"
            >
                ${StudyAbroadAdditionalSection()}
            </section>


            <!-- =================================================
                 16. STUDENT REVIEWS
            ================================================== -->

            <section
                id="study-abroad-student-reviews"
                class="study-abroad-section"
            >
                ${AbroadStudentReviews()}
            </section>


            <!-- =================================================
                 17. FAQ
            ================================================== -->

            <section
                id="study-abroad-faq"
                class="study-abroad-section"
            >
                ${StudyAbroadFAQ()}
            </section>


            <!-- =================================================
                 18. FINAL CTA
            ================================================== -->

            <section
                id="study-abroad-final-cta"
                class="study-abroad-section"
            >
                ${StudyAbroadCTA()}
            </section>


        </div>
    `;
}