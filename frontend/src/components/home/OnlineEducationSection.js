import Section from "../common/Section.js";
import InstitutionCard from "../common/InstitutionCard.js";


export function OnlineEducationSection() {

    /* =====================================================
       ONLINE EDUCATION PROGRAMS
    ====================================================== */

    const onlinePrograms = [

        {
            rank: "01",

            name: "Online MBA",

            category:
                "Online Degree",

            location:
                "India",

            program:
                "MBA • Management • Business Administration",

            rating:
                "4.8",

            reviews:
                "2,140",

            score:
                "9.2",

            ranking:
                "Popular online management program from leading universities",

            highlight:
                "UGC-approved online learning & flexible study options",

            image:
                "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",

            actionLabel:
                "Explore Online MBA"

        },


        {
            rank: "02",

            name: "Online BCA",

            category:
                "Online Degree",

            location:
                "India",

            program:
                "BCA • Computer Applications • IT",

            rating:
                "4.7",

            reviews:
                "1,760",

            score:
                "9.0",

            ranking:
                "Popular online program for computer applications and IT",

            highlight:
                "Industry-oriented curriculum & flexible learning",

            image:
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",

            actionLabel:
                "Explore Online BCA"

        },


        {
            rank: "03",

            name: "Certification Courses",

            category:
                "Skill Development",

            location:
                "Online",

            program:
                "AI • Data Science • Cloud • Digital Skills",

            rating:
                "4.6",

            reviews:
                "1,420",

            score:
                "8.8",

            ranking:
                "Short-term programs focused on in-demand professional skills",

            highlight:
                "Practical projects & career-focused learning",

            image:
                "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=85",

            actionLabel:
                "Explore Certifications"

        }

    ];


    /* =====================================================
       DISTANCE EDUCATION PROGRAMS
    ====================================================== */

    const distancePrograms = [

        {
            rank: "04",

            name: "Distance MBA",

            category:
                "Distance Degree",

            location:
                "India",

            program:
                "MBA • Management • Business Administration",

            rating:
                "4.6",

            reviews:
                "1,320",

            score:
                "8.8",

            ranking:
                "Flexible management education for learners and working students",

            highlight:
                "Affordable education with flexible schedules",

            image:
                "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",

            actionLabel:
                "Explore Distance MBA"

        },


        {
            rank: "05",

            name: "Distance B.Com",

            category:
                "Distance Degree",

            location:
                "India",

            program:
                "B.Com • Commerce • Accounting • Finance",

            rating:
                "4.5",

            reviews:
                "1,080",

            score:
                "8.6",

            ranking:
                "Flexible commerce degree for students and working learners",

            highlight:
                "Study from home with flexible schedules",

            image:
                "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85",

            actionLabel:
                "Explore Distance B.Com"

        },


        {
            rank: "06",

            name: "Distance M.A",

            category:
                "Postgraduate Degree",

            location:
                "India",

            program:
                "M.A. • Humanities • Social Sciences",

            rating:
                "4.5",

            reviews:
                "940",

            score:
                "8.5",

            ranking:
                "Flexible postgraduate programs from recognized universities",

            highlight:
                "Flexible schedules & accessible postgraduate education",

            image:
                "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1200&q=85",

            actionLabel:
                "Explore Distance M.A."

        }

    ];


    /* =====================================================
       COMBINE ALL PROGRAMS
    ====================================================== */

    const allPrograms = [

        ...onlinePrograms,

        ...distancePrograms

    ];


    /* =====================================================
       CREATE PROGRAM CARD
    ====================================================== */

    function createProgramCard(program) {

        return InstitutionCard({

            item: {

                rank:
                    program.rank,

                name:
                    program.name,

                category:
                    program.category,

                location:
                    program.location,

                program:
                    program.program,

                rating:
                    program.rating,

                reviews:
                    program.reviews,

                score:
                    program.score,

                ranking:
                    program.ranking,

                highlight:
                    program.highlight,

                image:
                    program.image,

                actionLabel:
                    program.actionLabel

            },

            type:
                "online-education"

        });

    }


    /* =====================================================
       CREATE ALL SIX CARDS
    ====================================================== */

    const programCards =
        allPrograms
            .map(createProgramCard)
            .join("");


    /* =====================================================
       CONTENT
    ====================================================== */

    const content = `

        <div class="online-education-section">


            <!-- =================================================
                 INTRO
            ================================================== -->

            <div class="online-education-intro">

                <div class="online-education-intro-content">

                    <span class="online-education-eyebrow">
                        💻 FLEXIBLE EDUCATION
                    </span>


                    <h2>
                        Online & Distance Education
                    </h2>


                    <p>
                        Explore online degrees, distance programs,
                        certifications and flexible learning
                        opportunities from recognized institutions.
                    </p>

                </div>


                <div class="online-education-stat">

                    <strong>
                        ${allPrograms.length}
                    </strong>

                    <span>
                        Featured<br>
                        Programs
                    </span>

                </div>

            </div>


            <!-- =================================================
                 HORIZONTAL CAROUSEL
            ================================================== -->

            <div class="online-education-carousel">


                <div class="online-education-viewport">

                    <div class="online-education-track">

                        ${programCards}

                    </div>

                </div>


                <!-- =================================================
                     NEXT BUTTON
                ================================================== -->

                <button
                    type="button"
                    class="online-education-next"
                    aria-label="Show next programs"
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
            "online-education",

        title:
            "",

        subtitle:
            "",

        content

    });

}


export default OnlineEducationSection;