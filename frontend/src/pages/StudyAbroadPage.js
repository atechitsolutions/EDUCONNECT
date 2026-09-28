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

   This file controls only the order of the Study Abroad
   content sections.
========================================================= */


import StudyAbroadHero
    from "../components/studyAbroad/StudyAbroadHero.js";


import StudyAbroadSearch
    from "../components/studyAbroad/StudyAbroadSearch.js";


import StudyAbroadDestinations
    from "../components/studyAbroad/StudyAbroadDestinations.js";


import CountryComparison
    from "../components/studyAbroad/CountryComparison.js";


import DegreeExplorer
    from "../components/studyAbroad/DegreeExplorer.js";


import CourseExplorer
    from "../components/studyAbroad/CourseExplorer.js";


import TopUniversitiesAbroad
    from "../components/studyAbroad/TopUniversitiesAbroad.js";


import AdmissionRequirements
    from "../components/studyAbroad/AdmissionRequirements.js";


import ApplicationProcess
    from "../components/studyAbroad/ApplicationProcess.js";


import Intakes
    from "../components/studyAbroad/Intakes.js";


import AbroadScholarships
    from "../components/studyAbroad/AbroadScholarships.js";


import StudyAbroadCost
    from "../components/studyAbroad/StudyAbroadCost.js";


import AbroadExams
    from "../components/studyAbroad/AbroadExams.js";


import StudyAbroadAdditionalSections
    from "../components/studyAbroad/StudyAbroadAdditionalSections.js";


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
                 01. EXISTING HERO
                 -------------------------------------------------
                 KEEP HERO UNCHANGED
            ================================================== -->

            ${StudyAbroadHero()}


            <!-- =================================================
                 02. SEARCH / DISCOVERY
            ================================================== -->

            ${StudyAbroadSearch()}


            <!-- =================================================
                 03. DESTINATION DISCOVERY
            ================================================== -->

            ${StudyAbroadDestinations()}


            <!-- =================================================
                 04. COUNTRY COMPARISON
            ================================================== -->

            ${CountryComparison()}


            <!-- =================================================
                 05. DEGREE EXPLORER
            ================================================== -->

            ${DegreeExplorer()}


            <!-- =================================================
                 06. COURSE EXPLORER
            ================================================== -->

            ${CourseExplorer()}


            <!-- =================================================
                 07. UNIVERSITIES & PROGRAMS
            ================================================== -->

            ${TopUniversitiesAbroad()}


            <!-- =================================================
                 08. ADMISSION REQUIREMENTS
            ================================================== -->

            ${AdmissionRequirements()}


            <!-- =================================================
                 09. APPLICATION PROCESS
            ================================================== -->

            ${ApplicationProcess()}


            <!-- =================================================
                 10. INTAKES & DEADLINES
            ================================================== -->

            ${Intakes()}


            <!-- =================================================
                 11. SCHOLARSHIPS & FUNDING
            ================================================== -->

            ${AbroadScholarships()}


            <!-- =================================================
                 12. EDUCATION COST
            ================================================== -->

            ${StudyAbroadCost()}


            <!-- =================================================
                 13. EXAMS & ELIGIBILITY
            ================================================== -->

            ${AbroadExams()}


            <!-- =================================================
                 14. ADDITIONAL STUDY ABROAD CONTENT
                 -------------------------------------------------
                 Contains supporting sections such as:
                 - Why Study Abroad
                 - Study Abroad Tools
                 - Application Support
                 - Other planning information
            ================================================== -->

            ${StudyAbroadAdditionalSections()}


            <!-- =================================================
                 15. STUDENT REVIEWS
            ================================================== -->

            ${AbroadStudentReviews()}


            <!-- =================================================
                 16. FAQ
            ================================================== -->

            ${StudyAbroadFAQ()}


            <!-- =================================================
                 17. FINAL CTA
            ================================================== -->

            ${StudyAbroadCTA()}


        </div>

    `;
}