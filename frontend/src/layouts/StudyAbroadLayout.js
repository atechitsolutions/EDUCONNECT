import Header from "./header.js";
import StudyAbroadNavbar from "./StudyAbroadNavbar.js";
import FooterSection from "../components/home/footerSection.js";

import StudyAbroadHero from "../components/studyAbroad/StudyAbroadHero.js";
import StudyAbroadSearch from "../components/studyAbroad/StudyAbroadSearch.js";
import StudyAbroadDestinations from "../components/studyAbroad/StudyAbroadDestinations.js";
import CountryComparison from "../components/studyAbroad/CountryComparison.js";
import DegreeExplorer from "../components/studyAbroad/DegreeExplorer.js";
import CourseExplorer from "../components/studyAbroad/CourseExplorer.js";
import TopUniversitiesAbroad from "../components/studyAbroad/TopUniversitiesAbroad.js";
import AdmissionRequirements from "../components/studyAbroad/AdmissionRequirements.js";
import StudyAbroadApplication from "../components/studyAbroad/ApplicationProcess.js";
import Intakes from "../components/studyAbroad/Intakes.js";
import StudyAbroadCost from "../components/studyAbroad/StudyAbroadCost.js";
import AbroadScholarships from "../components/studyAbroad/AbroadScholarships.js";
import AbroadExams from "../components/studyAbroad/AbroadExams.js";
import AbroadStudentReviews from "../components/studyAbroad/AbroadStudentReviews.js";
import StudyAbroadFAQ from "../components/studyAbroad/StudyAbroadFAQ.js";
import StudyAbroadCTA from "../components/studyAbroad/StudyAbroadCTA.js";
import StudyAbroadAdditionalSections from "../components/studyAbroad/StudyAbroadAdditionalSections.js";


export default function StudyAbroadLayout() {

    return `

        ${Header()}

        ${StudyAbroadNavbar()}


        <main
            id="study-abroad-page"
            class="study-abroad-page"
        >


            <!-- ================================================
                 HERO
            ================================================= -->

            ${StudyAbroadHero()}


            <!-- ================================================
                 GLOBAL SEARCH
            ================================================= -->

            ${StudyAbroadSearch()}


            <!-- ================================================
                 DESTINATIONS
            ================================================= -->

            ${StudyAbroadDestinations()}


            <!-- ================================================
                 COUNTRY COMPARISON
            ================================================= -->

            ${CountryComparison()}


            <!-- ================================================
                 DEGREE EXPLORER
            ================================================= -->

            ${DegreeExplorer()}


            <!-- ================================================
                 COURSE EXPLORER
            ================================================= -->

            ${CourseExplorer()}


            <!-- ================================================
                 TOP UNIVERSITIES
            ================================================= -->

            ${TopUniversitiesAbroad()}


            <!-- ================================================
                 ADMISSION REQUIREMENTS
            ================================================= -->

            ${AdmissionRequirements()}


            <!-- ================================================
                 APPLICATION PROCESS
            ================================================= -->

            ${StudyAbroadApplication()}


            <!-- ================================================
                 INTAKES
            ================================================= -->

            ${Intakes()}


            <!-- ================================================
                 COST
            ================================================= -->

            ${StudyAbroadCost()}


            <!-- ================================================
                 SCHOLARSHIPS
            ================================================= -->

            ${AbroadScholarships()}


            <!-- ================================================
                 EXAMS
            ================================================= -->

            ${AbroadExams()}


            <!-- ================================================
                 STUDENT REVIEWS
            ================================================= -->

            ${AbroadStudentReviews()}


            <!-- ================================================
                 ADDITIONAL STUDY ABROAD CONTENT
            ================================================= -->

            ${StudyAbroadAdditionalSections()}


            <!-- ================================================
                 FAQ
            ================================================= -->

            ${StudyAbroadFAQ()}


            <!-- ================================================
                 FINAL CTA
            ================================================= -->

            ${StudyAbroadCTA()}


        </main>


        ${FooterSection()}

    `;
}