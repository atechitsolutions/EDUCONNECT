import Section from "../common/Section.js";
import InstitutionCard from "../common/InstitutionCard.js";


export function StudyAbroadSection() {

    /* =====================================================
       POPULAR DESTINATIONS
    ====================================================== */

    const popularDestinations = [

        {
            rank: "01",

            name:
                "Study in USA",

            category:
                "Study in USA",

            location:
                "United States",

            program:
                "UG • PG • MBA • STEM • Research",

            rating:
                "4.8",

            reviews:
                "2,480",

            score:
                "9.4",

            ranking:
                "Home to leading universities and globally recognized study abroad programs",

            highlight:
                "Top universities, study abroad scholarships & career opportunities",

            image:
                "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1200&q=85",

            actionLabel:
                "Explore USA"

        },


        {
            rank: "02",

            name:
                "Study in UK",

            category:
                "Study in UK",

            location:
                "United Kingdom",

            program:
                "UG • PG • MBA • Research",

            rating:
                "4.7",

            reviews:
                "2,120",

            score:
                "9.2",

            ranking:
                "Leading UK universities with globally recognized degrees and programs",

            highlight:
                "World-class UK education, universities & diverse study abroad programs",

            image:
                "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=85",

            actionLabel:
                "Explore UK"

        },


        {
            rank: "03",

            name:
                "Study in Canada",

            category:
                "Study in Canada",

            location:
                "Canada",

            program:
                "UG • PG • Diploma • Co-op",

            rating:
                "4.7",

            reviews:
                "1,980",

            score:
                "9.1",

            ranking:
                "Popular study abroad destination for international students",

            highlight:
                "Canadian education, career & post-study opportunities",

            image:
                "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1200&q=85",

            actionLabel:
                "Explore Canada"

        }

    ];


    /* =====================================================
       OTHER DESTINATIONS
    ====================================================== */

    const otherDestinations = [

        {
            rank: "04",

            name:
                "Study in Australia",

            category:
                "Study in Australia",

            location:
                "Australia",

            program:
                "UG • PG • MBA • Research",

            rating:
                "4.6",

            reviews:
                "1,560",

            score:
                "8.9",

            ranking:
                "Strong study abroad destination for universities and professional education",

            highlight:
                "Quality Australian education & international student experience",

            image:
                "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=85",

            actionLabel:
                "Explore Australia"

        },


        {
            rank: "05",

            name:
                "Study in Germany",

            category:
                "Study in Germany",

            location:
                "Germany",

            program:
                "Engineering • MBA • Research • STEM",

            rating:
                "4.6",

            reviews:
                "1,320",

            score:
                "8.8",

            ranking:
                "Strong option for technical, engineering and research-oriented education",

            highlight:
                "Affordable study in Germany & strong technical programs",

            image:
                "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=85",

            actionLabel:
                "Explore Germany"

        },


        {
            rank: "06",

            name:
                "Study in Europe",

            category:
                "Study in Europe",

            location:
                "Europe",

            program:
                "UG • PG • MBA • Research",

            rating:
                "4.5",

            reviews:
                "1,140",

            score:
                "8.7",

            ranking:
                "Access study abroad opportunities across multiple European countries",

            highlight:
                "European universities, scholarships & diverse international study options",

            image:
                "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=85",

            actionLabel:
                "Explore Europe"

        }

    ];


    /* =====================================================
       COMBINE ALL DESTINATIONS
    ====================================================== */

    const allDestinations = [

        ...popularDestinations,

        ...otherDestinations

    ];


    /* =====================================================
       CREATE DESTINATION CARD
    ====================================================== */

    function createDestinationCard(
        destination
    ) {

        return InstitutionCard({

            item: {

                rank:
                    destination.rank,

                name:
                    destination.name,

                category:
                    destination.category,

                location:
                    destination.location,

                program:
                    destination.program,

                rating:
                    destination.rating,

                reviews:
                    destination.reviews,

                score:
                    destination.score,

                ranking:
                    destination.ranking,

                highlight:
                    destination.highlight,

                image:
                    destination.image,

                actionLabel:
                    destination.actionLabel

            },

            type:
                "study-abroad"

        });

    }


    /* =====================================================
       CREATE ALL SIX CARDS
    ====================================================== */

    const destinationCards =
        allDestinations
            .map(
                createDestinationCard
            )
            .join("");


    /* =====================================================
       CONTENT
    ====================================================== */

    const content = `

        <div class="study-abroad-section">


            <!-- =================================================
                 INTRO
            ================================================== -->

            <div class="study-abroad-intro">

                <div class="study-abroad-intro-content">

                    <span class="study-abroad-eyebrow">
                        🌍 INTERNATIONAL EDUCATION
                    </span>


                    <h2>
                        Study Abroad Destinations
                    </h2>


                    <p>
                        Explore study abroad destinations,
                        international universities, degree programs,
                        scholarships and career opportunities for
                        students planning to study overseas.
                    </p>

                </div>


                <div class="study-abroad-stat">

                    <strong>
                        ${allDestinations.length}
                    </strong>

                    <span>
                        Featured<br>
                        Destinations
                    </span>

                </div>

            </div>


            <!-- =================================================
                 HORIZONTAL CAROUSEL
            ================================================== -->

            <div class="study-abroad-carousel">


                <div class="study-abroad-viewport">

                    <div class="study-abroad-track">

                        ${destinationCards}

                    </div>

                </div>


                <!-- =================================================
                     NEXT BUTTON
                ================================================== -->

                <button
                    type="button"
                    class="study-abroad-next"
                    aria-label="Show next study abroad destinations and international education options"
                >

                    <span>
                        →
                    </span>

                </button>

            </div>

        </div>

    `;


    /* =====================================================
       RETURN SECTION
    ====================================================== */

    return Section({

        id:
            "study-abroad",

        title:
            "",

        subtitle:
            "",

        content

    });

}


export default StudyAbroadSection;