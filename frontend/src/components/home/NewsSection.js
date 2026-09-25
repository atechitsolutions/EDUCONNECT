import Section from "../common/Section.js";
import InstitutionCard from "../common/InstitutionCard.js";


export function NewsSection() {

    /* =====================================================
       LATEST EDUCATION NEWS
    ====================================================== */

    const latestNews = [

        {
            rank: "01",

            name:
                "UGC releases new academic calendar for universities",

            category:
                "Education",

            location:
                "India",

            program:
                "Universities • Academic Calendar",

            rating:
                "4.8",

            reviews:
                "1,240",

            score:
                "9.3",

            ranking:
                "Important academic update for higher education institutions",

            highlight:
                "Updated academic schedule for the upcoming session",

            image:
                "https://images.indianexpress.com/2025/12/The-proposed-Higher-Education-Commission-of-India-HECI-Bill-is-now-renamed-the-Viksit-Bharat-Shiksha-Adhikshan-Bill-Image-Credit-UGC.jpg?utm_source=chatgpt.com",

            actionLabel:
                "Read Full News"

        },


        {
            rank: "02",

            name:
                "Top Engineering Colleges announce admissions",

            category:
                "Admissions",

            location:
                "India",

            program:
                "Engineering • B.Tech • Admissions",

            rating:
                "4.7",

            reviews:
                "980",

            score:
                "9.1",

            ranking:
                "Major engineering institutions begin admission activity",

            highlight:
                "Application portals opened for upcoming admissions",

            image:
                "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85",

            actionLabel:
                "Read Admissions News"

        },


        {
            rank: "03",

            name:
                "Government launches new scholarship scheme",

            category:
                "Scholarship",

            location:
                "India",

            program:
                "Student Financial Assistance",

            rating:
                "4.7",

            reviews:
                "1,110",

            score:
                "9.0",

            ranking:
                "New financial assistance initiative for eligible students",

            highlight:
                "Expanded support for economically weaker sections",

            image:
                "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=85",

            actionLabel:
                "Read Scholarship News"

        }

    ];


    /* =====================================================
       TRENDING NEWS
    ====================================================== */

    const trendingNews = [

        {
            rank: "04",

            name:
                "Placement opportunities increase across India",

            category:
                "Jobs",

            location:
                "India",

            program:
                "Placements • Technology • Management",

            rating:
                "4.6",

            reviews:
                "870",

            score:
                "8.8",

            ranking:
                "Hiring activity remains strong across major sectors",

            highlight:
                "Technology and management hiring continues to grow",

            image:
                "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",

            actionLabel:
                "Read Jobs News"

        },


        {
            rank: "05",

            name:
                "NEP implementation expands in more states",

            category:
                "Education Policy",

            location:
                "India",

            program:
                "NEP • Curriculum • Higher Education",

            rating:
                "4.6",

            reviews:
                "760",

            score:
                "8.7",

            ranking:
                "More institutions are adopting new education frameworks",

            highlight:
                "New curriculum and credit-based learning systems",

            image:
                "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",

            actionLabel:
                "Read Policy News"

        },


        {
            rank: "06",

            name:
                "Study Abroad applications open for 2027",

            category:
                "International",

            location:
                "USA • UK • Canada • Australia",

            program:
                "International Admissions • Study Abroad",

            rating:
                "4.7",

            reviews:
                "1,020",

            score:
                "9.0",

            ranking:
                "Major international destinations begin application cycles",

            highlight:
                "Applications opening across leading study destinations",

            image:
                "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",

            actionLabel:
                "Read International News"

        }

    ];


    /* =====================================================
       COMBINE ALL NEWS
    ====================================================== */

    const allNews = [

        ...latestNews,

        ...trendingNews

    ];


    /* =====================================================
       CREATE NEWS CARD
    ====================================================== */

    function createNewsCard(news) {

        return InstitutionCard({

            item: {

                rank:
                    news.rank,

                name:
                    news.name,

                category:
                    news.category,

                location:
                    news.location,

                program:
                    news.program,

                rating:
                    news.rating,

                reviews:
                    news.reviews,

                score:
                    news.score,

                ranking:
                    news.ranking,

                highlight:
                    news.highlight,

                image:
                    news.image,

                actionLabel:
                    news.actionLabel

            },

            type:
                "education-news"

        });

    }


    /* =====================================================
       CREATE ALL SIX CARDS
    ====================================================== */

    const newsCards =
        allNews
            .map(createNewsCard)
            .join("");


    /* =====================================================
       CONTENT
    ====================================================== */

    const content = `

        <div class="news-section">


            <!-- =================================================
                 INTRO
            ================================================== -->

            <div class="news-intro">

                <div class="news-intro-content">

                    <span class="news-eyebrow">
                        📰 EDUCATION NEWS & UPDATES
                    </span>


                    <h2>
                        Latest Education News
                    </h2>


                    <p>
                        Stay updated with admissions,
                        scholarships, placements, education
                        policy and study-abroad developments.
                    </p>

                </div>


                <div class="news-stat">

                    <strong>
                        ${allNews.length}
                    </strong>

                    <span>
                        Featured<br>
                        News Updates
                    </span>

                </div>

            </div>


            <!-- =================================================
                 HORIZONTAL NEWS CAROUSEL
            ================================================== -->

            <div class="news-carousel">

                <div class="news-viewport">

                    <div class="news-track">

                        ${newsCards}

                    </div>

                </div>


                <!-- =================================================
                     NEXT BUTTON
                ================================================== -->

                <button
                    type="button"
                    class="news-next"
                    aria-label="Show next news"
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
            "news",

        title:
            "",

        subtitle:
            "",

        background:
            "light",

        content

    });

}


export default NewsSection;