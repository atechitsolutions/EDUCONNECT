/**
 * ============================================================
 * EDUCONNECT — STUDY ABROAD FAQ
 * ============================================================
 *
 * Purpose:
 * - Frequently asked questions
 * - Search-intent content
 * - Accessible FAQ interaction
 * - SEO-friendly semantic structure
 *
 * Framework:
 * Vanilla JavaScript + Vite
 * ============================================================
 */

export default function StudyAbroadFaq() {

    const faqs = [
        {
            question:
                "When should I start planning to study abroad from India?",

            answer:
                "It is generally useful to start planning well before your intended intake so you have time to research destinations and universities, prepare required tests and documents, review deadlines and organize your finances. The appropriate timeline varies by country, university and program."
        },

        {
            question:
                "How do I choose the right country to study abroad?",

            answer:
                "Consider the availability of your preferred course, universities, admission requirements, tuition fees, living costs, scholarships, application timelines and your personal priorities. Comparing these factors can help you create a more informed shortlist."
        },

        {
            question:
                "How do I choose a university for studying abroad?",

            answer:
                "Start by identifying programs that match your academic goals. Then compare the curriculum, admission requirements, tuition, location, available facilities, application deadlines and other factors that matter to you. Always verify current information directly with the university before applying."
        },

        {
            question:
                "What are the common requirements for studying abroad?",

            answer:
                "Requirements vary by destination, institution, program and applicant. Depending on your situation, you may need academic records, identification documents, language-test results, a statement of purpose, recommendation letters, financial documentation and other supporting documents."
        },

        {
            question:
                "Do I need IELTS or TOEFL to study abroad?",

            answer:
                "Some universities and programs require proof of English-language proficiency, while requirements and accepted tests can differ. Check the official requirements of each university and program you are considering."
        },

        {
            question:
                "Are scholarships available for Indian students studying abroad?",

            answer:
                "Scholarships and other funding opportunities may be available through universities, governments, organizations and other providers. Eligibility, funding, application requirements and deadlines vary, so each scholarship should be checked individually."
        },

        {
            question:
                "Can I get an education loan to study abroad?",

            answer:
                "Education financing may be available through banks and other financial institutions, depending on the applicant, institution, course, destination and lender criteria. Compare the applicable terms and verify eligibility with the relevant lender."
        },

        {
            question:
                "How much does it cost to study abroad?",

            answer:
                "The total cost depends on the destination, university, course and lifestyle. Tuition, accommodation, food, transport, insurance, travel, application expenses and other living costs may all contribute to your overall budget."
        },

        {
            question:
                "What is the study abroad application process?",

            answer:
                "A typical journey can include researching destinations, selecting courses, shortlisting universities, checking eligibility, preparing documents and tests, submitting applications, responding to admission decisions and completing destination-specific visa and pre-departure requirements."
        },

        {
            question:
                "When should I apply to universities abroad?",

            answer:
                "Application deadlines differ significantly between universities, programs and intakes. Some programs may have multiple deadlines or rolling admissions, while others have fixed deadlines. Always check the official university deadline for your specific program."
        },

        {
            question:
                "Do I need a student visa to study abroad?",

            answer:
                "Visa requirements depend on the destination, nationality, course and duration of study. Students should check the current requirements and application process through the relevant government or immigration authority."
        },

        {
            question:
                "Can EDUCONNECT guarantee university admission or visa approval?",

            answer:
                "No. Admission decisions are made by universities and visa decisions are made by the relevant government or immigration authorities. EDUCONNECT can provide information and planning support, but outcomes cannot be guaranteed."
        }
    ];


    return `
        <section
            class="study-abroad-faq-section"
            id="study-abroad-faq"
            aria-labelledby="study-abroad-faq-title"
        >

            <div class="study-abroad-container">


                <!-- ==================================================
                     HEADER
                =================================================== -->

                <div class="study-abroad-faq-header">

                    <div>

                        <span class="study-abroad-section-eyebrow">
                            FREQUENTLY ASKED QUESTIONS
                        </span>

                        <h2 id="study-abroad-faq-title">
                            Study Abroad questions, answered
                        </h2>

                        <p>
                            Find answers to common questions about studying
                            abroad, university applications, scholarships,
                            costs, exams and student visas.
                        </p>

                    </div>


                    <a
                        href="#study-abroad-counselling"
                        class="study-abroad-section-link"
                    >
                        Talk to a counsellor
                        <span aria-hidden="true">→</span>
                    </a>

                </div>


                <!-- ==================================================
                     FAQ LAYOUT
                =================================================== -->

                <div class="study-abroad-faq-layout">


                    <!-- CATEGORY NAVIGATION -->

                    <aside
                        class="study-abroad-faq-sidebar"
                        aria-label="FAQ categories"
                    >

                        <span>
                            EXPLORE TOPICS
                        </span>

                        <button
                            type="button"
                            class="study-abroad-faq-category active"
                            data-faq-category="all"
                        >
                            All questions
                        </button>

                        <button
                            type="button"
                            class="study-abroad-faq-category"
                            data-faq-category="planning"
                        >
                            Planning
                        </button>

                        <button
                            type="button"
                            class="study-abroad-faq-category"
                            data-faq-category="admission"
                        >
                            Admissions
                        </button>

                        <button
                            type="button"
                            class="study-abroad-faq-category"
                            data-faq-category="finance"
                        >
                            Scholarships & finance
                        </button>

                        <button
                            type="button"
                            class="study-abroad-faq-category"
                            data-faq-category="visa"
                        >
                            Visa & travel
                        </button>

                    </aside>


                    <!-- QUESTIONS -->

                    <div
                        class="study-abroad-faq-list"
                        id="study-abroad-faq-list"
                    >

                        ${faqs
                            .map(
                                (faq, index) => `
                                    <details
                                        class="study-abroad-faq-item"
                                        data-faq-index="${index}"
                                    >

                                        <summary>

                                            <span>
                                                ${faq.question}
                                            </span>

                                            <span
                                                class="study-abroad-faq-icon"
                                                aria-hidden="true"
                                            >
                                                +
                                            </span>

                                        </summary>

                                        <div class="study-abroad-faq-answer">

                                            <p>
                                                ${faq.answer}
                                            </p>

                                        </div>

                                    </details>
                                `
                            )
                            .join("")}

                    </div>

                </div>


                <!-- ==================================================
                     FAQ CTA
                =================================================== -->

                <div class="study-abroad-faq-cta">

                    <div>

                        <span class="study-abroad-section-eyebrow">
                            STILL HAVE QUESTIONS?
                        </span>

                        <h3>
                            Get help with your Study Abroad plan.
                        </h3>

                        <p>
                            Tell us about your course, destination and
                            academic background to discuss your next steps.
                        </p>

                    </div>


                    <div class="study-abroad-faq-actions">

                        <a
                            href="#study-abroad-counselling"
                            class="study-abroad-primary-button"
                        >
                            Get free counselling
                            <span aria-hidden="true">→</span>
                        </a>

                        <a
                            href="#study-abroad-destination-explorer"
                            class="study-abroad-secondary-button"
                        >
                            Explore destinations
                        </a>

                    </div>

                </div>


                <!-- ==================================================
                     SEO CONTENT
                =================================================== -->

                <div class="study-abroad-faq-seo">

                    <h2>
                        Frequently asked questions about studying abroad
                    </h2>

                    <p>
                        Students planning to study abroad from India often
                        have questions about destinations, universities,
                        courses, eligibility, application deadlines,
                        scholarships, education loans, English-language
                        tests and student visas.
                    </p>

                    <p>
                        There is no single study abroad process that applies
                        to every student. Requirements can differ according
                        to the country, university, program, intake and
                        individual applicant profile.
                    </p>

                    <p>
                        Before submitting an application, verify current
                        academic, financial, admission and visa requirements
                        using the official sources provided by the relevant
                        university, test provider or government authority.
                    </p>

                </div>

            </div>


            <!-- ==================================================
                 FAQ STRUCTURED DATA
                 ==================================================

                 This JSON-LD is generated from the visible FAQ
                 content above.

                 Search engines determine independently whether
                 FAQ rich results are eligible to appear.
            =================================================== -->

            <script type="application/ld+json">
                ${JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqs.map((faq) => ({
                        "@type": "Question",
                        "name": faq.question,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": faq.answer
                        }
                    }))
                })}
            </script>

        </section>
    `;
}