export default function CurrentAffairs() {

    const items = [
        {
            icon: "📅",
            title: "Academic Calendar Updated",
            subtitle: "Latest Updates"
        },
        {
            icon: "🎯",
            title: "JEE Advanced Results",
            subtitle: "Out Now"
        },
        {
            icon: "🌐",
            title: "Study Abroad Scholarships",
            subtitle: "Apply Now"
        },
        {
            icon: "🏛️",
            title: "Government Exams",
            subtitle: "Latest Notifications"
        },
        {
            icon: "📚",
            title: "Board Examination Updates",
            subtitle: "Important Notice"
        }
    ];

    const tickerItems = [...items, ...items];

    return `
        <section class="premium-ticker-section current-affairs-ticker-section">

            <div class="premium-ticker">

                <!-- LABEL -->
                <div class="premium-ticker-label">

                    <div class="ticker-label-icon">
                        📰
                    </div>

                    <div class="ticker-label-text">
                        <strong>CURRENT AFFAIRS</strong>
                        <span>Education & Career News</span>
                    </div>

                </div>


                <!-- RUNNING CONTENT -->
                <div class="premium-ticker-window">

                    <div class="premium-ticker-track">

                        ${tickerItems.map(item => `
                            <div class="premium-ticker-item">

                                <div class="premium-ticker-item-icon">
                                    ${item.icon}
                                </div>

                                <div class="premium-ticker-item-content">

                                    <strong>
                                        ${item.title}
                                    </strong>

                                    <span>
                                        ${item.subtitle}
                                    </span>

                                </div>

                            </div>
                        `).join("")}

                    </div>

                </div>


                <!-- ARROW -->
                <button
                    class="premium-ticker-arrow"
                    aria-label="View current affairs"
                >
                    →
                </button>

            </div>


            <!-- PROGRESS LINE -->
            <div class="premium-ticker-progress">
                <span></span>
            </div>

        </section>
    `;
}