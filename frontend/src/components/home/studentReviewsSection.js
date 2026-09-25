import Section from "../common/Section.js";


export function StudentReviewsSection() {

    /* =====================================================
       STUDENT / PARENT VIDEO REVIEWS
    ====================================================== */

    const videoReviews = [

        {
            id: 1,
            type: "Student Experience",
            title: "My College Journey",
            description:
                "A student shares their experience of choosing a college, academics, campus life, and career opportunities.",
            reviewer: "Student Review",
            location: "India",
            rating: "4.8",
            date: "Verified Experience",
            thumbnail:
                "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85"
        },


        {
            id: 2,
            type: "Parent Experience",
            title: "A Parent's Education Journey",
            description:
                "A parent shares their experience of selecting the right educational institution for their child.",
            reviewer: "Parent Review",
            location: "India",
            rating: "4.7",
            date: "Verified Experience",
            thumbnail:
                "https://images.unsplash.com/photo-1504159506876-f8338247a14a?auto=format&fit=crop&w=1200&q=85"
        },


        {
            id: 3,
            type: "School Experience",
            title: "Life at School",
            description:
                "A student talks about academics, activities, teachers, facilities, and overall school life.",
            reviewer: "Student Review",
            location: "India",
            rating: "4.8",
            date: "Verified Experience",
            thumbnail:
                "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85"
        },


        {
            id: 4,
            type: "College Experience",
            title: "Choosing the Right College",
            description:
                "A student explains how college comparisons, courses, fees, and placements helped in making a decision.",
            reviewer: "Student Review",
            location: "India",
            rating: "4.9",
            date: "Verified Experience",
            thumbnail:
                "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1200&q=85"
        },


        {
            id: 5,
            type: "Career Experience",
            title: "From Education to Career",
            description:
                "A graduate shares their journey from education to internships, placements, and career opportunities.",
            reviewer: "Graduate Review",
            location: "India",
            rating: "4.8",
            date: "Verified Experience",
            thumbnail:
                "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
        },


        {
            id: 6,
            type: "Study Abroad Experience",
            title: "My Study Abroad Journey",
            description:
                "A student shares their experience of selecting an international university and preparing for study abroad.",
            reviewer: "International Student",
            location: "International",
            rating: "4.9",
            date: "Verified Experience",
            thumbnail:
                "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1200&q=85"
        }

    ];


    /* =====================================================
       CREATE ONE REVIEW CARD
    ====================================================== */

    function createReviewCard(review) {

        return `
            <article
                class="video-review-card"
                data-review-id="${review.id}"
            >

                <!-- =================================================
                     VIDEO THUMBNAIL
                ================================================== -->

                <div
                    class="video-review-thumbnail"
                    style="
                        background-image:
                        url('${review.thumbnail}');
                    "
                >

                    <div class="video-review-overlay"></div>


                    <!-- =================================================
                         PLAY BUTTON
                    ================================================== -->

                    <button
                        type="button"
                        class="video-play-button"
                        aria-label="Play ${review.title}"
                    >

                        <span>
                            ▶
                        </span>

                    </button>


                    <!-- =================================================
                         VIDEO BADGE
                    ================================================== -->

                    <span
                        class="video-review-video-badge"
                    >
                        VIDEO REVIEW
                    </span>

                </div>


                <!-- =================================================
                     REVIEW CONTENT
                ================================================== -->

                <div class="video-review-content">


                    <!-- =================================================
                         REVIEWER META
                    ================================================== -->

                    <div class="video-review-meta">

                        <span
                            class="video-review-reviewer"
                        >
                            ${review.reviewer}
                        </span>


                        <span
                            class="video-review-location"
                        >
                            📍 ${review.location}
                        </span>

                    </div>


                    <!-- =================================================
                         TITLE
                    ================================================== -->

                    <h3>
                        ${review.title}
                    </h3>


                    <!-- =================================================
                         RATING
                    ================================================== -->

                    <div
                        class="video-review-rating-row"
                    >

                        <span
                            class="video-review-rating"
                        >
                            ★ ${review.rating}
                        </span>


                        <span
                            class="video-review-verified"
                        >
                            ✓ ${review.date}
                        </span>

                    </div>


                    <!-- =================================================
                         DESCRIPTION
                    ================================================== -->

                    <p>
                        ${review.description}
                    </p>


                    <!-- =================================================
                         ACTION
                    ================================================== -->

                    <button
                        type="button"
                        class="video-review-link"
                        data-review-id="${review.id}"
                    >

                        <span
                            class="video-review-link-text"
                        >
                            Watch Experience
                        </span>


                        <span
                            class="video-review-link-arrow"
                        >
                            →
                        </span>

                    </button>

                </div>

            </article>
        `;

    }


    /* =====================================================
       CREATE ALL REVIEW CARDS
    ====================================================== */

    const videoCards =
        videoReviews
            .map(createReviewCard)
            .join("");


    /* =====================================================
       SECTION CONTENT
    ====================================================== */

    const content = `

        <div class="video-reviews-section">


            <!-- =================================================
                 HEADER
            ================================================== -->

            <div class="video-reviews-header">

                <div class="video-reviews-heading-content">

                    <span
                        class="video-reviews-eyebrow"
                    >
                        ✦ REAL EXPERIENCES
                    </span>


                    <h3>
                        Review Given by Students & Parents
                    </h3>


                    <p>
                        Discover real education experiences through
                        student and parent video reviews.
                    </p>

                </div>


                <!-- =================================================
                     VIEW ALL
                ================================================== -->

                <button
                    type="button"
                    class="video-reviews-view-all"
                >

                    <span>
                        View All Reviews
                    </span>


                    <span>
                        →
                    </span>

                </button>

            </div>


            <!-- =================================================
                 REVIEW CAROUSEL
            ================================================== -->

            <div class="student-reviews-carousel">

                <div class="student-reviews-viewport">

                    <div class="student-reviews-track">

                        ${videoCards}

                    </div>

                </div>


                <!-- =================================================
                     NEXT ARROW
                ================================================== -->

                <button
                    type="button"
                    class="student-reviews-next"
                    aria-label="Show next reviews"
                >

                    <span>
                        →
                    </span>

                </button>

            </div>


            <!-- =================================================
                 TRUST MESSAGE
            ================================================== -->

            <div
                class="video-reviews-trust"
            >

                <div
                    class="video-reviews-trust-icon"
                >
                    ✓
                </div>


                <div>

                    <strong>
                        Real Education Experiences
                    </strong>


                    <p>
                        Hear directly from students and parents
                        about their education journeys.
                    </p>

                </div>

            </div>

        </div>

    `;


    /* =====================================================
       RETURN SECTION
    ====================================================== */

    return Section({

        id:
            "student-reviews",

        title:
            "Student & Parent Experiences",

        subtitle:
            "Watch real experiences from students, parents, graduates, and learners about education and career journeys.",

        content

    });

}


export default StudentReviewsSection;