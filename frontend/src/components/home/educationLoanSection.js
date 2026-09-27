import Section from "../common/Section.js";
import InstitutionCard from "../common/InstitutionCard.js";


export function EducationLoanSection() {

    /* =====================================================
       EDUCATION LOAN OPTIONS
    ====================================================== */

    const loanOptions = [

        {
            rank: "01",

            name: "Education Loan",

            category:
                "Study Financing",

            location:
                "India",

            program:
                "School • College • University • Professional Courses",

            rating:
                "4.8",

            reviews:
                "1,840",

            score:
                "9.2",

            ranking:
                "Education loan information and financing guidance for students in India",

            highlight:
                "Understand education loan options for tuition fees and other education expenses",

            image:
                "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85",

            actionLabel:
                "Explore Education Loans"

        },


        {
            rank: "02",

            name: "Loan for Higher Education",

            category:
                "College & University Financing",

            location:
                "India",

            program:
                "Tuition • Accommodation • Books • Equipment",

            rating:
                "4.7",

            reviews:
                "1,420",

            score:
                "9.0",

            ranking:
                "Higher education loan and financing options for college and university expenses",

            highlight:
                "Understand funding options for tuition fees, accommodation, books and academic costs",

            image:
                "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85",

            actionLabel:
                "Explore Higher Education Loans"

        },


        {
            rank: "03",

            name: "Study Abroad Loan",

            category:
                "International Education",

            location:
                "Global",

            program:
                "Tuition • Living • Travel • Education Expenses",

            rating:
                "4.7",

            reviews:
                "1,180",

            score:
                "9.1",

            ranking:
                "Study abroad education loan and international education financing guidance",

            highlight:
                "Understand study abroad loan funding for tuition, living, travel and overseas education expenses",

            image:
                "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",

            actionLabel:
                "Explore Study Abroad Loans"

        }

    ];


    /* =====================================================
       LOAN GUIDES
    ====================================================== */

    const loanGuides = [

        {
            rank: "04",

            name: "Eligibility",

            category:
                "Who Can Apply",

            location:
                "India",

            program:
                "Academic • Admission • Financial Requirements",

            rating:
                "4.7",

            reviews:
                "1,020",

            score:
                "8.9",

            ranking:
                "Guide to education loan eligibility requirements for students in India",

            highlight:
                "Understand academic, admission and documentation conditions",

            image:
                "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85",

            actionLabel:
                "Check Eligibility"

        },


        {
            rank: "05",

            name: "Interest Rates",

            category:
                "Loan Cost",

            location:
                "India",

            program:
                "Interest • Repayment • Loan Terms",

            rating:
                "4.6",

            reviews:
                "940",

            score:
                "8.8",

            ranking:
                "Guide to education loan interest rates, costs and repayment terms",

            highlight:
                "Compare loan terms and understand repayment impact",

            image:
                "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85",

            actionLabel:
                "Understand Interest Rates"

        },


        {
            rank: "06",

            name: "Documents Required",

            category:
                "Application Process",

            location:
                "India",

            program:
                "Identity • Academic • Admission • Financial Documents",

            rating:
                "4.6",

            reviews:
                "860",

            score:
                "8.7",

            ranking:
                "Guide to documents required for education loan applications in India",

            highlight:
                "Prepare the required documents before applying",

            image:
                "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85",

            actionLabel:
                "View Documents"

        }

    ];


    /* =====================================================
       COMBINE ALL SIX ITEMS
    ====================================================== */

    const allLoans = [

        ...loanOptions,

        ...loanGuides

    ];


    /* =====================================================
       CREATE LOAN CARD
    ====================================================== */

    function createLoanCard(loan) {

        return InstitutionCard({

            item: {

                rank:
                    loan.rank,

                name:
                    loan.name,

                category:
                    loan.category,

                location:
                    loan.location,

                program:
                    loan.program,

                rating:
                    loan.rating,

                reviews:
                    loan.reviews,

                score:
                    loan.score,

                ranking:
                    loan.ranking,

                highlight:
                    loan.highlight,

                image:
                    loan.image,

                actionLabel:
                    loan.actionLabel

            },

            type:
                "education-loan"

        });

    }


    /* =====================================================
       CREATE ALL CARDS
    ====================================================== */

    const loanCards =
        allLoans
            .map(createLoanCard)
            .join("");


    /* =====================================================
       CONTENT
    ====================================================== */

    const content = `

        <div class="education-loan-section">


            <!-- =================================================
                 INTRO
            ================================================== -->

            <div class="education-loan-intro">

                <div class="education-loan-intro-content">

                    <span class="education-loan-eyebrow">
                        💰 EDUCATION FINANCING
                    </span>


                    <h2>
                        Education Loans
                    </h2>


                    <p>
                        Explore education loans in India, higher education
                        financing options, eligibility requirements, interest rates,
                        required documents and education loan application guidance.
                    </p>

                </div>


                <div class="education-loan-stat">

                    <strong>
                        ${allLoans.length}
                    </strong>

                    <span>
                        Featured<br>
                        Loan Guides
                    </span>

                </div>

            </div>


            <!-- =================================================
                 LOAN CAROUSEL
            ================================================== -->

            <div class="education-loan-carousel">

                <div class="education-loan-viewport">

                    <div class="education-loan-track">

                        ${loanCards}

                    </div>

                </div>


                <!-- =================================================
                     NEXT ARROW
                ================================================== -->

                <button
                    type="button"
                    class="education-loan-next"
                    aria-label="Show next education loan options in India"
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
            "education-loan",

        title:
            "",

        subtitle:
            "",

        content

    });

}


export default EducationLoanSection;