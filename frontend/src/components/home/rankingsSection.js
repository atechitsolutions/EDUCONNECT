import Section from "../common/Section.js";
import InstitutionCard from "../common/InstitutionCard.js";


export function RankingsSection() {

    /* =====================================================
       NATIONAL RANKINGS
    ====================================================== */

    const nationalRankings = [

        {
            rank: "01",

            name:
                "Top Universities",

            category:
                "University Rankings",

            location:
                "India",

            program:
                "UG • PG • Research • Professional Programs",

            rating:
                "4.9",

            reviews:
                "2,840",

            score:
                "9.6",

            ranking:
                "Compare leading universities across academics, research, infrastructure and reputation",

            highlight:
                "Academics, research, placements & reputation",

            image:
                "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85",

            actionLabel:
                "Explore Universities"

        },


        {
            rank: "02",

            name:
                "Top Colleges",

            category:
                "College Rankings",

            location:
                "India",

            program:
                "UG • PG • Professional Courses",

            rating:
                "4.8",

            reviews:
                "2,410",

            score:
                "9.3",

            ranking:
                "Compare leading colleges across streams, courses and academic performance",

            highlight:
                "Courses, academics, placements & student opportunities",

            image:
                "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85",

            actionLabel:
                "Explore Colleges"

        },


        {
            rank: "03",

            name:
                "Top Schools",

            category:
                "School Rankings",

            location:
                "India",

            program:
                "Primary • Secondary • Senior Secondary",

            rating:
                "4.7",

            reviews:
                "1,980",

            score:
                "9.1",

            ranking:
                "Discover highly rated schools based on academics, facilities and teaching quality",

            highlight:
                "Academics, facilities, teaching & development",

            image:
                "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",

            actionLabel:
                "Explore Schools"

        }

    ];


    /* =====================================================
       CATEGORY RANKINGS
    ====================================================== */

    const categoryRankings = [

        {
            rank: "04",

            name:
                "Engineering Rankings",

            category:
                "Engineering Colleges",

            location:
                "India",

            program:
                "B.Tech • M.Tech • Research",

            rating:
                "4.8",

            reviews:
                "2,160",

            score:
                "9.2",

            ranking:
                "Institutions compared on education quality, placements, infrastructure and research",

            highlight:
                "Placements, infrastructure & technical education",

            image:
                "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85",

            actionLabel:
                "Explore Engineering"

        },


        {
            rank: "05",

            name:
                "Management Rankings",

            category:
                "MBA & Business Schools",

            location:
                "India",

            program:
                "BBA • MBA • Executive Programs",

            rating:
                "4.8",

            reviews:
                "2,030",

            score:
                "9.4",

            ranking:
                "Compare management institutes through academics, placements, faculty and industry exposure",

            highlight:
                "Placements, faculty & industry exposure",

            image:
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85",

            actionLabel:
                "Explore Management"

        },


        {
            rank: "06",

            name:
                "Medical Rankings",

            category:
                "Medical Colleges",

            location:
                "India",

            program:
                "MBBS • MD • MS • Healthcare",

            rating:
                "4.7",

            reviews:
                "1,740",

            score:
                "9.1",

            ranking:
                "Compare medical institutions on education, facilities, research and healthcare programs",

            highlight:
                "Medical education, facilities & research",

            image:
                "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",

            actionLabel:
                "Explore Medical"

        }

    ];


    /* =====================================================
       COMBINE ALL RANKINGS
    ====================================================== */

    const allRankings = [

        ...nationalRankings,

        ...categoryRankings

    ];


    /* =====================================================
       CREATE RANKING CARD
    ====================================================== */

    function createRankingCard(
        rankingItem
    ) {

        return InstitutionCard({

            item: {

                rank:
                    rankingItem.rank,

                name:
                    rankingItem.name,

                category:
                    rankingItem.category,

                location:
                    rankingItem.location,

                program:
                    rankingItem.program,

                rating:
                    rankingItem.rating,

                reviews:
                    rankingItem.reviews,

                score:
                    rankingItem.score,

                ranking:
                    rankingItem.ranking,

                highlight:
                    rankingItem.highlight,

                image:
                    rankingItem.image,

                actionLabel:
                    rankingItem.actionLabel

            },

            type:
                "ranking"

        });

    }


    /* =====================================================
       CREATE ALL SIX CARDS
    ====================================================== */

    const rankingCards =
        allRankings
            .map(
                createRankingCard
            )
            .join("");


    /* =====================================================
       CONTENT
    ====================================================== */

    const content = `

        <div class="rankings-section">


            <!-- =================================================
                 INTRO
            ================================================== -->

            <div class="rankings-intro">

                <div class="rankings-intro-content">

                    <span class="rankings-eyebrow">
                        🏆 EDUCATION RANKINGS
                    </span>


                    <h2>
                        Rankings
                    </h2>


                    <p>
                        Compare schools, colleges, universities
                        and professional institutions across
                        academics, placements, research,
                        infrastructure and reputation.
                    </p>

                </div>


                <div class="rankings-stat">

                    <strong>
                        ${allRankings.length}
                    </strong>

                    <span>
                        Featured<br>
                        Rankings
                    </span>

                </div>

            </div>


            <!-- =================================================
                 HORIZONTAL RANKINGS CAROUSEL
            ================================================== -->

            <div class="rankings-carousel">

                <div class="rankings-viewport">

                    <div class="rankings-track">

                        ${rankingCards}

                    </div>

                </div>


                <!-- =================================================
                     NEXT BUTTON
                ================================================== -->

                <button
                    type="button"
                    class="rankings-next"
                    aria-label="Show next rankings"
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
            "rankings",

        title:
            "",

        subtitle:
            "",

        content

    });

}


export default RankingsSection;