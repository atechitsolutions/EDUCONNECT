import Header from "./header.js";
import StudyAbroadNavbar from "./StudyAbroadNavbar.js";
import FooterSection from "../components/home/footerSection.js";

export default function StudyAbroadLayout() {
    return `
        ${Header()}
        ${StudyAbroadNavbar()}

        <main id="study-abroad-page" class="edu-sa-page">
            <section class="edu-sa-hero" id="study-abroad-hero">
                <div class="edu-sa-hero-grid"></div>
                <div class="edu-sa-orb edu-sa-orb-a"></div>
                <div class="edu-sa-orb edu-sa-orb-b"></div>

                <div class="edu-sa-shell edu-sa-hero-layout">
                    <div class="edu-sa-hero-copy">
                        <span class="edu-sa-eyebrow">EDUCONNECT • STUDY ABROAD</span>
                        <h1>Turn your global education plan into a <em>clear next step.</em></h1>
                        <p>Explore destinations, universities, courses, scholarships, admission requirements and application guidance — all from one Study Abroad hub.</p>

                        <form class="edu-sa-search" action="#study-abroad-explorer" method="get">
                            <span aria-hidden="true">⌕</span>
                            <input name="q" type="search" placeholder="Search university, course or country..." aria-label="Search university, course or country">
                            <button type="submit">Explore <b>→</b></button>
                        </form>

                        <div class="edu-sa-quick">
                            <span>Popular:</span>
                            <a href="#study-abroad-destinations">USA</a>
                            <a href="#study-abroad-destinations">UK</a>
                            <a href="#study-abroad-destinations">Canada</a>
                            <a href="#study-abroad-destinations">Australia</a>
                            <a href="#study-abroad-destinations">Germany</a>
                        </div>

                        <div class="edu-sa-actions">
                            <a class="edu-sa-btn edu-sa-btn-light" href="#study-abroad-destinations">Explore destinations <span>→</span></a>
                            <a class="edu-sa-btn edu-sa-btn-ghost" href="#study-abroad-application-process">How the process works</a>
                        </div>
                    </div>

                    <div class="edu-sa-hero-panel">
                        <div class="edu-sa-panel-top">
                            <span>YOUR STUDY ABROAD PLAN</span>
                            <strong>01 — Explore</strong>
                        </div>
                        <div class="edu-sa-plan">
                            <div class="edu-sa-plan-line">
                                <span class="edu-sa-plan-icon">◎</span>
                                <div><b>Choose a destination</b><small>Compare countries, costs and opportunities</small></div>
                            </div>
                            <div class="edu-sa-plan-line">
                                <span class="edu-sa-plan-icon">⌘</span>
                                <div><b>Find your course & university</b><small>Explore degrees and institutions</small></div>
                            </div>
                            <div class="edu-sa-plan-line">
                                <span class="edu-sa-plan-icon">✓</span>
                                <div><b>Prepare your application</b><small>Requirements, exams and intakes</small></div>
                            </div>
                        </div>
                        <div class="edu-sa-panel-footer"><span>EDUCONNECT GUIDE</span><strong>Build your shortlist with clarity.</strong></div>
                    </div>
                </div>

                <div class="edu-sa-shell edu-sa-stats">
                    <div><b>50+</b><span>Study destinations</span></div>
                    <div><b>5,000+</b><span>Universities to explore</span></div>
                    <div><b>10,000+</b><span>Programs & courses</span></div>
                    <div><b>1,000+</b><span>Scholarship opportunities</span></div>
                </div>
            </section>

            <section class="edu-sa-section edu-sa-explorer" id="study-abroad-explorer">
                <div class="edu-sa-shell">
                    <div class="edu-sa-heading">
                        <span class="edu-sa-kicker">EXPLORE</span>
                        <h2>Everything you need to plan your study abroad journey.</h2>
                        <p>Start broad, then narrow your choices using destinations, degrees, courses and universities.</p>
                    </div>

                    <div class="edu-sa-explorer-grid">
                        <a class="edu-sa-feature-card edu-sa-feature-main" href="#study-abroad-destinations">
                            <span class="edu-sa-card-number">01</span>
                            <div><small>DESTINATIONS</small><h3>Where do you want to study?</h3><p>Compare popular destinations and discover what each country can offer.</p></div>
                            <span class="edu-sa-arrow">↗</span>
                        </a>
                        <a class="edu-sa-feature-card" href="#study-abroad-degree-explorer">
                            <span class="edu-sa-card-number">02</span>
                            <div><small>DEGREES</small><h3>Choose your study level</h3><p>Undergraduate, postgraduate, MBA, PhD and more.</p></div>
                            <span class="edu-sa-arrow">↗</span>
                        </a>
                        <a class="edu-sa-feature-card" href="#study-abroad-course-explorer">
                            <span class="edu-sa-card-number">03</span>
                            <div><small>COURSES</small><h3>Find a course that fits</h3><p>Explore fields of study and course pathways.</p></div>
                            <span class="edu-sa-arrow">↗</span>
                        </a>
                        <a class="edu-sa-feature-card" href="#study-abroad-universities">
                            <span class="edu-sa-card-number">04</span>
                            <div><small>UNIVERSITIES</small><h3>Build your shortlist</h3><p>Discover institutions and compare your options.</p></div>
                            <span class="edu-sa-arrow">↗</span>
                        </a>
                    </div>
                </div>
            </section>

            <section class="edu-sa-section edu-sa-destinations" id="study-abroad-destinations">
                <div class="edu-sa-shell">
                    <div class="edu-sa-section-head-row">
                        <div class="edu-sa-heading">
                            <span class="edu-sa-kicker">TOP DESTINATIONS</span>
                            <h2>Start with the country that matches your goals.</h2>
                            <p>Use destination cards as a starting point for comparing study environments.</p>
                        </div>
                        <a class="edu-sa-text-link" href="#study-abroad-country-comparison">Compare countries →</a>
                    </div>

                    <div class="edu-sa-country-grid">
                        <a class="edu-sa-country" href="#study-abroad-country-comparison"><span>🇺🇸</span><div><b>USA</b><small>Universities • STEM • Research</small></div><i>→</i></a>
                        <a class="edu-sa-country" href="#study-abroad-country-comparison"><span>🇬🇧</span><div><b>UK</b><small>Degrees • Research • Global exposure</small></div><i>→</i></a>
                        <a class="edu-sa-country" href="#study-abroad-country-comparison"><span>🇨🇦</span><div><b>Canada</b><small>Programs • Research • Student life</small></div><i>→</i></a>
                        <a class="edu-sa-country" href="#study-abroad-country-comparison"><span>🇦🇺</span><div><b>Australia</b><small>Programs • Research • Lifestyle</small></div><i>→</i></a>
                        <a class="edu-sa-country" href="#study-abroad-country-comparison"><span>🇩🇪</span><div><b>Germany</b><small>Engineering • Technology • Research</small></div><i>→</i></a>
                        <a class="edu-sa-country" href="#study-abroad-country-comparison"><span>🇮🇪</span><div><b>Ireland</b><small>Technology • Business • Research</small></div><i>→</i></a>
                    </div>
                </div>
            </section>

            <section class="edu-sa-section edu-sa-dark-section" id="study-abroad-country-comparison">
                <div class="edu-sa-shell">
                    <div class="edu-sa-heading edu-sa-heading-light">
                        <span class="edu-sa-kicker">COMPARE</span>
                        <h2>Compare destinations before you shortlist.</h2>
                        <p>Look at the factors that matter to you — study options, costs, admission requirements and the overall application journey.</p>
                    </div>
                    <div class="edu-sa-compare">
                        <div class="edu-sa-compare-head"><span>FACTOR</span><span>USA</span><span>UK</span><span>CANADA</span><span>AUSTRALIA</span></div>
                        <div><b>Study options</b><span>Wide range</span><span>Wide range</span><span>Wide range</span><span>Wide range</span></div>
                        <div><b>Popular fields</b><span>STEM / Business</span><span>Business / STEM</span><span>STEM / Business</span><span>STEM / Business</span></div>
                        <div><b>Planning focus</b><span>University fit</span><span>Course duration</span><span>Program fit</span><span>Course + location</span></div>
                    </div>
                </div>
            </section>

            <section class="edu-sa-section" id="study-abroad-degree-explorer">
                <div class="edu-sa-shell">
                    <div class="edu-sa-heading">
                        <span class="edu-sa-kicker">DEGREE EXPLORER</span>
                        <h2>Choose the level that fits your next move.</h2>
                    </div>
                    <div class="edu-sa-degree-grid">
                        <a href="#study-abroad-course-explorer"><b>01</b><h3>Undergraduate</h3><p>Explore bachelor's programs and academic pathways.</p><span>Explore →</span></a>
                        <a href="#study-abroad-course-explorer"><b>02</b><h3>Postgraduate</h3><p>Compare master's and specialized graduate programs.</p><span>Explore →</span></a>
                        <a href="#study-abroad-course-explorer"><b>03</b><h3>MBA & Management</h3><p>Explore business, management and leadership programs.</p><span>Explore →</span></a>
                        <a href="#study-abroad-course-explorer"><b>04</b><h3>PhD & Research</h3><p>Discover research-oriented study pathways.</p><span>Explore →</span></a>
                    </div>
                </div>
            </section>

            <section class="edu-sa-section edu-sa-soft" id="study-abroad-course-explorer">
                <div class="edu-sa-shell">
                    <div class="edu-sa-section-head-row">
                        <div class="edu-sa-heading">
                            <span class="edu-sa-kicker">COURSE EXPLORER</span>
                            <h2>Explore popular fields of study.</h2>
                            <p>Use broad subject areas to begin building your academic shortlist.</p>
                        </div>
                    </div>
                    <div class="edu-sa-course-grid">
                        <a href="#study-abroad-universities">Computer Science <span>→</span></a>
                        <a href="#study-abroad-universities">Business & Management <span>→</span></a>
                        <a href="#study-abroad-universities">Engineering <span>→</span></a>
                        <a href="#study-abroad-universities">Data Science & AI <span>→</span></a>
                        <a href="#study-abroad-universities">Finance & Economics <span>→</span></a>
                        <a href="#study-abroad-universities">Health & Life Sciences <span>→</span></a>
                        <a href="#study-abroad-universities">Design & Creative Arts <span>→</span></a>
                        <a href="#study-abroad-universities">Hospitality & Tourism <span>→</span></a>
                    </div>
                </div>
            </section>

            <section class="edu-sa-section" id="study-abroad-universities">
                <div class="edu-sa-shell">
                    <div class="edu-sa-section-head-row">
                        <div class="edu-sa-heading">
                            <span class="edu-sa-kicker">UNIVERSITY SHORTLIST</span>
                            <h2>Turn exploration into a shortlist.</h2>
                            <p>Organize universities by destination and study area before moving into application planning.</p>
                        </div>
                        <a class="edu-sa-text-link" href="#study-abroad-admission-requirements">Check requirements →</a>
                    </div>
                    <div class="edu-sa-university-grid">
                        <article><span>USA</span><h3>Research Universities</h3><p>Explore institutions with broad program portfolios and research opportunities.</p><a href="#study-abroad-admission-requirements">View pathway →</a></article>
                        <article><span>UK</span><h3>Global Universities</h3><p>Explore universities and focused degree structures across the UK.</p><a href="#study-abroad-admission-requirements">View pathway →</a></article>
                        <article><span>CANADA</span><h3>Study Destinations</h3><p>Explore institutions, programs and destination considerations.</p><a href="#study-abroad-admission-requirements">View pathway →</a></article>
                    </div>
                </div>
            </section>

            <section class="edu-sa-section edu-sa-soft" id="study-abroad-admission-requirements">
                <div class="edu-sa-shell">
                    <div class="edu-sa-heading">
                        <span class="edu-sa-kicker">ADMISSION REQUIREMENTS</span>
                        <h2>Know what you need before you apply.</h2>
                        <p>Requirements vary by country, institution and program. Use this as a planning checklist, then verify the exact requirements of your chosen university.</p>
                    </div>
                    <div class="edu-sa-requirements">
                        <details open><summary>Academic documents <span>+</span></summary><p>Keep transcripts, marksheets, degree certificates and other academic records ready where applicable.</p></details>
                        <details><summary>English-language tests <span>+</span></summary><p>Depending on the destination and institution, an English-language test may be required.</p></details>
                        <details><summary>Statement of purpose <span>+</span></summary><p>Some programs may request a statement explaining your academic interests and goals.</p></details>
                        <details><summary>Recommendation letters <span>+</span></summary><p>Some programs may require academic or professional recommendations.</p></details>
                    </div>
                </div>
            </section>

            <section class="edu-sa-section" id="study-abroad-application-process">
                <div class="edu-sa-shell">
                    <div class="edu-sa-heading">
                        <span class="edu-sa-kicker">APPLICATION PROCESS</span>
                        <h2>A clearer application journey, step by step.</h2>
                    </div>
                    <div class="edu-sa-process">
                        <div><b>01</b><h3>Explore</h3><p>Choose destinations, fields and degree levels.</p></div>
                        <div><b>02</b><h3>Shortlist</h3><p>Compare universities, courses and requirements.</p></div>
                        <div><b>03</b><h3>Prepare</h3><p>Organize documents, tests and application materials.</p></div>
                        <div><b>04</b><h3>Apply</h3><p>Submit applications and track the next steps.</p></div>
                        <div><b>05</b><h3>Plan</h3><p>Move toward the next stages after an admission decision.</p></div>
                    </div>
                </div>
            </section>

            <section class="edu-sa-section edu-sa-dark-section" id="study-abroad-intakes">
                <div class="edu-sa-shell">
                    <div class="edu-sa-heading edu-sa-heading-light">
                        <span class="edu-sa-kicker">INTAKES</span>
                        <h2>Plan your timeline around the right intake.</h2>
                        <p>Intake availability differs by country, university and program. Always check the official institution deadline.</p>
                    </div>
                    <div class="edu-sa-intake-grid">
                        <article><b>SEP — OCT</b><h3>Major intake</h3><p>Common planning window for many international programs.</p></article>
                        <article><b>JAN — FEB</b><h3>Winter intake</h3><p>Available for selected universities and programs.</p></article>
                        <article><b>MAY — JUN</b><h3>Additional intake</h3><p>Availability varies significantly by destination and course.</p></article>
                    </div>
                </div>
            </section>

            <section class="edu-sa-section" id="study-abroad-cost">
                <div class="edu-sa-shell">
                    <div class="edu-sa-heading">
                        <span class="edu-sa-kicker">COST & FINANCE</span>
                        <h2>Plan the financial side early.</h2>
                        <p>Think beyond tuition: living expenses, application costs, travel, insurance and other destination-specific expenses can affect the total budget.</p>
                    </div>
                    <div class="edu-sa-finance-grid">
                        <article><span>01</span><h3>Tuition</h3><p>Compare the published tuition for your shortlisted programs.</p></article>
                        <article><span>02</span><h3>Living costs</h3><p>Consider accommodation, food, transport and everyday expenses.</p></article>
                        <article><span>03</span><h3>Funding</h3><p>Review scholarships, grants and other available funding options.</p></article>
                        <article><span>04</span><h3>Emergency buffer</h3><p>Keep room in the budget for unexpected costs.</p></article>
                    </div>
                </div>
            </section>

            <section class="edu-sa-section edu-sa-soft" id="study-abroad-scholarships">
                <div class="edu-sa-shell">
                    <div class="edu-sa-heading">
                        <span class="edu-sa-kicker">SCHOLARSHIPS</span>
                        <h2>Look for funding opportunities early.</h2>
                        <p>Scholarship eligibility, deadlines and funding amounts differ by provider and institution. Check the official scholarship terms before applying.</p>
                    </div>
                    <div class="edu-sa-scholar-grid">
                        <article><b>MERIT</b><h3>Academic scholarships</h3><p>May be linked to academic performance or admission criteria.</p></article>
                        <article><b>NEED</b><h3>Need-based support</h3><p>May consider financial circumstances and supporting evidence.</p></article>
                        <article><b>UNIVERSITY</b><h3>Institutional awards</h3><p>Some universities provide their own scholarships or fee reductions.</p></article>
                    </div>
                </div>
            </section>

            <section class="edu-sa-section" id="study-abroad-exams">
                <div class="edu-sa-shell">
                    <div class="edu-sa-heading">
                        <span class="edu-sa-kicker">EXAMS & TEST PREPARATION</span>
                        <h2>Understand the tests your course may require.</h2>
                    </div>
                    <div class="edu-sa-exam-grid">
                        <a href="#study-abroad-admission-requirements"><b>IELTS</b><span>English proficiency</span>→</a>
                        <a href="#study-abroad-admission-requirements"><b>TOEFL</b><span>English proficiency</span>→</a>
                        <a href="#study-abroad-admission-requirements"><b>GRE</b><span>Graduate admissions</span>→</a>
                        <a href="#study-abroad-admission-requirements"><b>GMAT</b><span>Business admissions</span>→</a>
                    </div>
                </div>
            </section>

            <section class="edu-sa-section edu-sa-reviews" id="study-abroad-reviews">
                <div class="edu-sa-shell">
                    <div class="edu-sa-heading">
                        <span class="edu-sa-kicker">STUDENT PERSPECTIVES</span>
                        <h2>Plan with the questions that matter to you.</h2>
                    </div>
                    <div class="edu-sa-review-grid">
                        <blockquote><p>“Which destination fits my course and budget?”</p><footer>— Study planning question</footer></blockquote>
                        <blockquote><p>“What should I prepare before the application deadline?”</p><footer>— Application planning question</footer></blockquote>
                        <blockquote><p>“How do I compare universities without missing important requirements?”</p><footer>— Shortlisting question</footer></blockquote>
                    </div>
                </div>
            </section>

            <section class="edu-sa-section edu-sa-faq" id="study-abroad-faq">
                <div class="edu-sa-shell">
                    <div class="edu-sa-heading">
                        <span class="edu-sa-kicker">FAQ</span>
                        <h2>Common Study Abroad questions.</h2>
                    </div>
                    <div class="edu-sa-faq-list">
                        <details open><summary>When should I start planning? <span>+</span></summary><p>Start early enough to compare destinations, prepare required tests and documents, and meet the deadlines for your selected institutions.</p></details>
                        <details><summary>How do I choose a country? <span>+</span></summary><p>Compare your course availability, university options, total costs, admission requirements and personal priorities.</p></details>
                        <details><summary>Are scholarships available? <span>+</span></summary><p>Scholarships exist across universities and external providers, but eligibility and deadlines vary.</p></details>
                        <details><summary>Do all universities have the same requirements? <span>+</span></summary><p>No. Requirements can vary by university, program, destination and applicant profile.</p></details>
                    </div>
                </div>
            </section>

            <section class="edu-sa-final" id="study-abroad-cta">
                <div class="edu-sa-shell edu-sa-final-inner">
                    <div>
                        <span class="edu-sa-kicker">READY TO EXPLORE?</span>
                        <h2>Your next destination starts with a better shortlist.</h2>
                        <p>Explore destinations, courses and universities, then use the planning sections to prepare your next steps.</p>
                    </div>
                    <div class="edu-sa-final-actions">
                        <a class="edu-sa-btn edu-sa-btn-light" href="#study-abroad-destinations">Explore destinations →</a>
                        <a class="edu-sa-btn edu-sa-btn-outline-light" href="#study-abroad-application-process">View application process</a>
                    </div>
                </div>
            </section>
        </main>

        ${FooterSection()}
    `;
}
