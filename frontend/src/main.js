import initPremiumCursor from "./assets/js/premiumCursor.js";
import initScrollPlane from "./assets/js/scrollPlane.js";

import "./assets/css/premiumCursor.css";
import "./assets/css/variables.css";
import "./assets/css/style.css";
import "./assets/css/header.css";
import "./assets/css/navbar.css";
import "./assets/css/home.css";
import "./assets/css/footer.css";
import "./assets/css/ticker.css";
import "./assets/css/ui.css";
import "./assets/css/responsive.css";
import "./assets/css/studyAbroad.css";
import "./assets/css/study-abroad-destinations.css";
import "./assets/css/earlyLearning.css";

import Router from "./router/router.js";

import {
    initOnlineEducationCarousel
} from "./assets/js/onlineEducation.js";

import {
    initNewsCarousel
} from "./assets/js/newsCarousel.js";

import {
    initStudyAbroadCarousel
} from "./assets/js/studyAbroadCarousel.js";

import {
    initScholarshipCarousel
} from "./assets/js/scholarshipCarousel.js";

import {
    initRankingsCarousel
} from "./assets/js/rankingsCarousel.js";

import {
    initStudentReviewsCarousel
} from "./assets/js/studentReviewsCarousel.js";

import {
    initEducationLoanCarousel
} from "./assets/js/educationLoanCarousel.js";

import {
    initTopListsCarousel
} from "./assets/js/topListsCarousel.js";

import {
    initCompareCollegeCarousel
} from "./assets/js/compareCollegeCarousel.js";

import {
    initAuth
} from "./assets/js/auth.js";

import "./assets/css/auth.css";


document.addEventListener(
    "DOMContentLoaded",
    () => {

        const app =
            document.getElementById(
                "app"
            );


        /* =====================================================
           CHECK APP ROOT
        ====================================================== */

        if (!app) {

            console.error(
                "App root element (#app) was not found."
            );

            return;
        }


        /* =====================================================
           RENDER APPLICATION
        ====================================================== */

        app.innerHTML =
            Router();


        /* =====================================================
           INITIALIZE AUTHENTICATION
        ====================================================== */

        initAuth();


        /* =====================================================
           INITIALIZE ONLINE EDUCATION CAROUSEL
        ====================================================== */

        if (
            document.querySelector(
                "#online-education"
            )
        ) {

            initOnlineEducationCarousel();

        }


        /* =====================================================
           NEWS CAROUSEL
        ====================================================== */

        if (
            document.querySelector(
                "#news"
            )
        ) {

            initNewsCarousel();

        }


        /* =====================================================
           STUDY ABROAD CAROUSEL
        ====================================================== */

        if (
            document.querySelector(
                "#study-abroad"
            )
        ) {

            initStudyAbroadCarousel();

        }


        /* =====================================================
           SCHOLARSHIP CAROUSEL
        ====================================================== */

        if (
            document.querySelector(
                "#scholarship"
            )
        ) {

            initScholarshipCarousel();

        }


        /* =====================================================
           RANKINGS CAROUSEL
        ====================================================== */

        if (
            document.querySelector(
                "#rankings"
            )
        ) {

            initRankingsCarousel();

        }


        /* =====================================================
           STUDENT REVIEWS CAROUSEL
        ====================================================== */

        if (
            document.querySelector(
                "#student-reviews"
            )
        ) {

            initStudentReviewsCarousel();

        }


        /* =====================================================
           EDUCATION LOAN CAROUSEL
        ====================================================== */

        if (
            document.querySelector(
                "#education-loan"
            )
        ) {

            initEducationLoanCarousel();

        }


        /* =====================================================
           TOP LISTS CAROUSEL
        ====================================================== */

        if (
            document.querySelector(
                "#top-lists"
            )
        ) {

            initTopListsCarousel();

        }


        /* =====================================================
           COMPARE COLLEGE CAROUSEL
        ====================================================== */

        if (
            document.querySelector(
                "#compare-college"
            )
        ) {

            initCompareCollegeCarousel();

        }


        /* =====================================================
           PREMIUM CURSOR
        ====================================================== */

        initPremiumCursor();


        /* =====================================================
           SCROLL PAPER PLANE

           Keep disabled for now because enabling it was
           creating unwanted white space after the footer.
        ====================================================== */

        // initScrollPlane();


        /* =====================================================
           VIEW ALL / SHOW LESS
           BOARDING SCHOOLS
        ====================================================== */

        const boardingSection =
            document.querySelector(
                ".boarding-schools-section"
            );


        if (boardingSection) {

            const boardingButton =
                boardingSection.querySelector(
                    ".boarding-schools-explore-btn"
                );

            const boardingAll =
                boardingSection.querySelector(
                    ".boarding-schools-all"
                );


            if (
                boardingButton &&
                boardingAll
            ) {

                boardingButton.addEventListener(
                    "click",
                    () => {

                        const isExpanded =
                            boardingSection.classList
                                .toggle("is-expanded");


                        boardingAll.hidden =
                            !isExpanded;


                        const text =
                            boardingButton.querySelector(
                                ".boarding-view-all-text"
                            );


                        const arrow =
                            boardingButton.querySelector(
                                "span:last-child"
                            );


                        if (isExpanded) {

                            if (text) {

                                text.textContent =
                                    "Show Less";

                            }


                            if (arrow) {

                                arrow.textContent =
                                    "↑";

                            }


                            boardingAll.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });

                        }

                        else {

                            if (text) {

                                text.textContent =
                                    "View All Boarding Schools";

                            }


                            if (arrow) {

                                arrow.textContent =
                                    "→";

                            }


                            boardingSection.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });

                        }

                    }
                );

            }

        }


        /* =====================================================
           VIEW ALL / SHOW LESS
           COMPANIES
        ====================================================== */

        const companySection =
            document.querySelector(
                ".top-companies-section"
            );


        if (companySection) {

            const companyButton =
                companySection.querySelector(
                    ".top-companies-explore-btn"
                );

            const companyAll =
                companySection.querySelector(
                    ".top-companies-all"
                );


            if (
                companyButton &&
                companyAll
            ) {

                companyButton.addEventListener(
                    "click",
                    () => {

                        const isExpanded =
                            companySection.classList
                                .toggle("is-expanded");


                        companyAll.hidden =
                            !isExpanded;


                        const text =
                            companyButton.querySelector(
                                ".top-companies-view-all-text"
                            );


                        const arrow =
                            companyButton.querySelector(
                                "span:last-child"
                            );


                        if (isExpanded) {

                            if (text) {

                                text.textContent =
                                    "Show Less";

                            }


                            if (arrow) {

                                arrow.textContent =
                                    "↑";

                            }


                            companyAll.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });

                        }

                        else {

                            if (text) {

                                text.textContent =
                                    "View All Companies";

                            }


                            if (arrow) {

                                arrow.textContent =
                                    "→";

                            }


                            companySection.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });

                        }

                    }
                );

            }

        }


        /* =====================================================
           VIEW ALL / SHOW LESS
           UG + PG COLLEGES
        ====================================================== */

        const collegeWrapper =
            document.querySelector(
                ".ug-pg-section-wrapper"
            );


        if (collegeWrapper) {

            const collegeButton =
                collegeWrapper.querySelector(
                    ".ug-pg-cta-button"
                );

            const collegeAll =
                collegeWrapper.querySelector(
                    ".ug-pg-all"
                );


            if (
                collegeButton &&
                collegeAll
            ) {

                collegeButton.addEventListener(
                    "click",
                    () => {

                        const isExpanded =
                            collegeWrapper.classList
                                .toggle("is-expanded");


                        collegeAll.hidden =
                            !isExpanded;


                        const text =
                            collegeButton.querySelector(
                                ".ug-pg-view-all-text"
                            );


                        const arrow =
                            collegeButton.querySelector(
                                "span:last-child"
                            );


                        if (isExpanded) {

                            if (text) {

                                text.textContent =
                                    "Show Less";

                            }


                            if (arrow) {

                                arrow.textContent =
                                    "↑";

                            }


                            collegeAll.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });

                        }

                        else {

                            if (text) {

                                text.textContent =
                                    "View All Colleges";

                            }


                            if (arrow) {

                                arrow.textContent =
                                    "→";

                            }


                            collegeWrapper.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });

                        }

                    }
                );

            }

        }


        /* =====================================================
           CAROUSEL PERFORMANCE OPTIMIZATION

           Pause selected legacy animated carousels when
           they are outside the viewport.
        ====================================================== */

        const animatedCarouselTracks =
            document.querySelectorAll(`
                .boarding-schools-track,
                .top-companies-track,
                #top-ug-pg-colleges .ug-pg-track
            `);


        const carouselVisibilityObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(
                        (entry) => {

                            const track =
                                entry.target;


                            if (
                                entry.isIntersecting
                            ) {

                                track.style
                                    .animationPlayState =
                                    "running";

                            }

                            else {

                                track.style
                                    .animationPlayState =
                                    "paused";

                            }

                        }
                    );

                },
                {
                    threshold: 0.05
                }
            );


        animatedCarouselTracks.forEach(
            (track) => {

                carouselVisibilityObserver.observe(
                    track
                );

            }
        );

    }
);