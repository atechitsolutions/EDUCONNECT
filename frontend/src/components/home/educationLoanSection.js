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
                "Comprehensive education financing information for students",

            highlight:
                "Understand loan options for tuition and education expenses",

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
                "Financing options for higher education expenses",

            highlight:
                "Understand funding for tuition, living and academic costs",

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
                "Education financing guidance for international study",

            highlight:
                "Understand funding for tuition and overseas expenses",

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
                "Guide to common education loan eligibility requirements",

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
                "Important guide for understanding education loan costs",

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
                "Guide to commonly required documents for loan applications",

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
                        Education Loan
                    </h2>


                    <p>
                        Explore education financing options,
                        eligibility requirements, interest rates,
                        documentation and application guidance.
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
                    aria-label="Show next education loans"
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