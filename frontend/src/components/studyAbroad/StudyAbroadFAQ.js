/* =========================================================
   STUDY ABROAD — FAQ
========================================================= */

export default function StudyAbroadFAQ() {

    const faqs = [

        {
            question: "What are the best countries to study abroad?",
            answer:
                "Popular study destinations include the USA, UK, Canada, Australia, Germany, France, Ireland and New Zealand. The right destination depends on your course, budget, academic goals and preferred career opportunities."
        },

        {
            question: "How much does it cost to study abroad?",
            answer:
                "The total cost depends on the country, university, course, tuition fees, accommodation and lifestyle. Students should consider both tuition and living expenses when planning their study abroad budget."
        },

        {
            question: "Which exams are required to study abroad?",
            answer:
                "Depending on the university and course, students may need English proficiency tests such as IELTS, TOEFL or PTE. Some programs may also require exams such as GRE, GMAT or SAT."
        },

        {
            question: "When should I start my study abroad application?",
            answer:
                "It is generally useful to begin researching universities, courses and admission requirements well before the intended intake. Application deadlines vary by university, destination and program."
        },

        {
            question: "Can I get a scholarship to study abroad?",
            answer:
                "Scholarships and other funding opportunities are available for eligible students. Availability, eligibility requirements and coverage vary depending on the scholarship, university, destination and study level."
        },

        {
            question: "How do I choose the right university?",
            answer:
                "Compare universities based on your preferred course, academic requirements, tuition fees, location, available scholarships, university facilities and career goals."
        },

        {
            question: "What documents are required for studying abroad?",
            answer:
                "Common application documents can include academic transcripts, certificates, identification documents, English proficiency scores, recommendation letters, a statement of purpose and other documents required by the university."
        },

        {
            question: "What is an intake in study abroad admissions?",
            answer:
                "An intake is an admission period during which universities accept applications and enroll new students. Common intakes include Fall and Spring, while some universities also offer Summer or other admission periods."
        },

        {
            question: "Can international students work while studying abroad?",
            answer:
                "Work permissions for international students depend on the destination country, visa conditions and current regulations. Students should check the official rules applicable to their visa and study program."
        },

        {
            question: "How can I compare different study abroad destinations?",
            answer:
                "You can compare destinations based on tuition fees, living expenses, available universities, courses, admission requirements, scholarships, visa requirements and post-study opportunities."
        }

    ];


    return `

        <!-- =====================================================
             STUDY ABROAD FAQ
        ====================================================== -->

        <section
            class="study-abroad-faq"
            id="study-abroad-faq"
        >


            <div class="study-abroad-faq-container">


                <!-- =================================================
                     SECTION HEADER
                ================================================== -->

                <div class="study-abroad-faq-header">


                    <div class="study-abroad-section-eyebrow">
                        HAVE QUESTIONS?
                    </div>


                    <h2>

                        Frequently Asked
                        <span>Questions</span>

                    </h2>


                    <p>

                        Find answers to common questions about
                        universities, courses, applications,
                        scholarships and studying abroad.

                    </p>


                </div>


                <!-- =================================================
                     FAQ LIST
                ================================================== -->

                <div class="study-abroad-faq-list">


                    ${faqs.map((faq, index) => `

                        <article
                            class="study-abroad-faq-item"
                        >


                            <!-- =================================================
                                 FAQ QUESTION
                            ================================================== -->

                            <button
                                type="button"
                                class="study-abroad-faq-question"
                                aria-expanded="false"
                            >


                                <span class="study-abroad-faq-number">
                                    ${String(index + 1).padStart(2, "0")}
                                </span>


                                <span class="study-abroad-faq-question-text">
                                    ${faq.question}
                                </span>


                                <span
                                    class="study-abroad-faq-icon"
                                    aria-hidden="true"
                                >
                                    +
                                </span>


                            </button>


                            <!-- =================================================
                                 FAQ ANSWER
                            ================================================== -->

                            <div class="study-abroad-faq-answer">


                                <p>
                                    ${faq.answer}
                                </p>


                            </div>


                        </article>

                    `).join("")}


                </div>


                <!-- =================================================
                     FAQ FOOTER
                ================================================== -->

                <div class="study-abroad-faq-footer">


                    <div class="study-abroad-faq-footer-content">


                        <span
                            class="study-abroad-faq-footer-icon"
                            aria-hidden="true"
                        >
                            💬
                        </span>


                        <div>

                            <strong>
                                Still have questions?
                            </strong>

                            <span>
                                Explore more study abroad information
                                and discover your options.
                            </span>

                        </div>


                    </div>


                    <button
                        type="button"
                        class="study-abroad-faq-button"
                    >

                        Explore Study Abroad

                        <span>
                            →
                        </span>

                    </button>


                </div>


            </div>


        </section>

    `;
}
