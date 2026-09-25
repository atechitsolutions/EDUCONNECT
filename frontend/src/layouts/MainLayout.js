import Header from "./header";
import Navbar from "./navbar";

import Hero from "../components/home/hero.js";

import RunningSocial from "../components/RunningSocial.js";
import CurrentAffairs from "../components/CurrentAffairs.js";

import Categories from "../components/home/categories.js";

import PlaySchoolSection
    from "../components/home/PlaySchoolSection.js";

import PreSchoolSection
    from "../components/home/PreSchoolSection.js";

import SchoolSection
    from "../components/home/SchoolSection.js";

import TopBoardingSchoolsSection
    from "../components/home/TopBoardingSchoolsSection.js";

import TopUGPGCollegesSection
    from "../components/home/TopUGPGCollegesSection.js";

import {
    OnlineEducationSection
} from "../components/home/OnlineEducationSection.js";

import {
    NewsSection
} from "../components/home/NewsSection.js";

import StudyAbroadSection
    from "../components/home/studyAbroad.js";

import ScholarshipSection
    from "../components/home/scholarshipSection.js";

import TopListsSection
    from "../components/home/topListsSection.js";

import RankingsSection
    from "../components/home/rankingsSection.js";

import StudentReviewsSection
    from "../components/home/studentReviewsSection.js";

import CompareCollegeSection
    from "../components/home/compareCollegeSection.js";

import EducationLoanSection
    from "../components/home/educationLoanSection.js";

import TopCompaniesSection
    from "../components/home/TopCompaniesSection.js";

import FooterSection
    from "../components/home/footerSection.js";


export default function MainLayout() {

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
             HERO
        ====================================================== -->

        ${Hero()}


        <!-- =====================================================
             SOCIAL MEDIA PLATFORM - RUNNING LINE
        ====================================================== -->

        ${RunningSocial()}


        <!-- =====================================================
             CURRENT AFFAIRS - RUNNING LINE
        ====================================================== -->

        ${CurrentAffairs()}


        <!-- =====================================================
             MAIN CATEGORIES
        ====================================================== -->

        ${Categories()}


        <!-- =====================================================
             PLAY SCHOOL
        ====================================================== -->

        ${PlaySchoolSection()}


        <!-- =====================================================
             PRE SCHOOL
        ====================================================== -->

        ${PreSchoolSection()}


        <!-- =====================================================
             SCHOOL
        ====================================================== -->

        ${SchoolSection()}


        <!-- =====================================================
             TOP 10 BOARDING SCHOOLS
        ====================================================== -->

        ${TopBoardingSchoolsSection()}


        <!-- =====================================================
             TOP UG & PG COLLEGES
        ====================================================== -->

        ${TopUGPGCollegesSection()}


        <!-- =====================================================
             ONLINE & DISTANCE EDUCATION
        ====================================================== -->

        ${OnlineEducationSection()}


        <!-- =====================================================
             LATEST EDUCATION NEWS
        ====================================================== -->

        ${NewsSection()}


        <!-- =====================================================
             STUDY ABROAD
        ====================================================== -->

        ${StudyAbroadSection()}


        <!-- =====================================================
             RANKINGS
        ====================================================== -->

        ${RankingsSection()}


        <!-- =====================================================
             STUDENT REVIEWS
        ====================================================== -->

        ${StudentReviewsSection()}


        <!-- =====================================================
             SCHOLARSHIPS
        ====================================================== -->

        ${ScholarshipSection()}


        <!-- =====================================================
             EDUCATION LOAN / FINANCE
        ====================================================== -->

        ${EducationLoanSection()}


        <!-- =====================================================
             TOP LISTS
        ====================================================== -->

        ${TopListsSection()}


        <!-- =====================================================
             COMPARE COLLEGE / UNIVERSITY
        ====================================================== -->

        ${CompareCollegeSection()}


        <!-- =====================================================
             TOP 10 COMPANIES TO WORK FOR
        ====================================================== -->

        ${TopCompaniesSection()}


        <!-- =====================================================
             FOOTER
        ====================================================== -->

        ${FooterSection()}

    `;
}