export default function Hero() {
    return `
        <section class="hero">

            <!-- =====================================================
                 PREMIUM BACKGROUND OVERLAY
                 This stays behind all interactive content
            ====================================================== -->
            <div class="hero-overlay"></div>


            <!-- =====================================================
                 HERO CONTENT
            ====================================================== -->
            <div class="hero-content">

                <!-- Small Premium Label -->
                <div class="hero-badge">

                    <span class="hero-badge-dot"></span>

                    India's Education Discovery Platform

                </div>


                <!-- =================================================
                     MAIN HEADING
                ================================================== -->
                <h1 class="hero-title">

                    India's Complete

                    <span>
                        Education Platform
                    </span>

                </h1>


                <!-- =================================================
                     DESCRIPTION
                ================================================== -->
                <p class="hero-description">

                    Find Schools, Colleges, Universities, Scholarships,
                    Study Abroad Programs, Jobs and More —
                    All in One Place.

                </p>


                <!-- =================================================
                     SEARCH BOX
                ================================================== -->
                <div class="hero-search">

                    <div class="hero-search-icon">
                        🔍
                    </div>

                    <input
                        type="text"
                        placeholder="Search colleges, universities, courses, scholarships..."
                        aria-label="Search education opportunities"
                    />

                    <button
                        type="button"
                        class="hero-search-btn"
                    >
                        Search
                    </button>

                </div>


                <!-- =================================================
                     QUICK SEARCH OPTIONS
                ================================================== -->
                <div class="hero-quick-links">

                    <span>
                        Popular:
                    </span>

                    <button type="button">
                        Colleges
                    </button>

                    <button type="button">
                        Universities
                    </button>

                    <button type="button">
                        Courses
                    </button>

                    <button type="button">
                        Scholarships
                    </button>

                    <button type="button">
                        Study Abroad
                    </button>

                </div>


                <!-- =================================================
                     MAIN ACTION BUTTONS
                ================================================== -->
                <div class="hero-buttons">

                    <button
                        type="button"
                        class="primary-btn hero-primary-btn"
                    >
                        Explore Education

                        <span>
                            →
                        </span>

                    </button>


                    <button
                        type="button"
                        class="secondary-btn hero-secondary-btn"
                    >
                        Compare Colleges
                    </button>

                </div>


                <!-- =================================================
                     PLATFORM STATISTICS
                ================================================== -->
                <div class="hero-stats">

                    <div class="hero-stat">

                        <strong>
                            10,000+
                        </strong>

                        <span>
                            Institutions
                        </span>

                    </div>


                    <div class="hero-stat-divider"></div>


                    <div class="hero-stat">

                        <strong>
                            5,000+
                        </strong>

                        <span>
                            Courses
                        </span>

                    </div>


                    <div class="hero-stat-divider"></div>


                    <div class="hero-stat">

                        <strong>
                            1,000+
                        </strong>

                        <span>
                            Scholarships
                        </span>

                    </div>


                    <div class="hero-stat-divider"></div>


                    <div class="hero-stat">

                        <strong>
                            50+
                        </strong>

                        <span>
                            Study Destinations
                        </span>

                    </div>

                </div>

            </div>


            <!-- =====================================================
                 DECORATIVE GLOW
            ====================================================== -->
            <div class="hero-glow hero-glow-one"></div>

            <div class="hero-glow hero-glow-two"></div>


            <!-- =====================================================
                 SCROLL INDICATOR
            ====================================================== -->
            <div class="hero-scroll-indicator">

                <span>
                    Explore Education
                </span>

                <div class="hero-scroll-arrow">
                    ↓
                </div>

            </div>

        </section>
    `;
}