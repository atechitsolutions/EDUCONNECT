import Header from "./header.js";
import Navbar from "./navbar.js";

import FooterSection from "../components/home/footerSection.js";
import StudyAbroadHero from "../components/studyAbroad/StudyAbroadHero.js";
import StudyAbroadDestinations
    from "../components/studyAbroad/StudyAbroadDestinations.js";

export default function StudyAbroadLayout() {

    return `
        <!-- =====================================================
             HEADER
        ====================================================== -->

        ${Header()}


        <!-- =====================================================
             NAVBAR
        ====================================================== -->

        ${Navbar()}


        <!-- =====================================================
             STUDY ABROAD PAGE
        ====================================================== -->

        <main id="study-abroad-page">

            ${StudyAbroadHero()}


             ${StudyAbroadDestinations()}

        </main>




        <!-- =====================================================
             FOOTER
        ====================================================== -->

        ${FooterSection()}
    `;
}