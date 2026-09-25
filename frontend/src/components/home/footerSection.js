function FooterColumn({ title, links = [] }) {
    return `
        <div class="footer-column">
            <h3>${title}</h3>

            <ul>
                ${links
                    .map(
                        (link) => `
                            <li>
                                <a href="${link.href || "#"}">
                                    ${link.label}
                                </a>
                            </li>
                        `
                    )
                    .join("")}
            </ul>
        </div>
    `;
}

function SocialLinks() {
    return `
        <div class="footer-social">
            <a href="#" aria-label="Facebook" class="social-link">
                <span>f</span>
            </a>

            <a href="#" aria-label="Instagram" class="social-link">
                <span>◎</span>
            </a>

            <a href="#" aria-label="LinkedIn" class="social-link">
                <span>in</span>
            </a>

            <a href="#" aria-label="YouTube" class="social-link">
                <span>▶</span>
            </a>
        </div>
    `;
}

export function FooterSection() {
    const currentYear = new Date().getFullYear();

    return `
        <footer class="site-footer" id="footer">

            <!-- Footer Main -->
            <div class="footer-container">

                <!-- Brand -->
                <div class="footer-brand">

                    <div class="footer-logo">
                        EduConnect
                    </div>

                    <p class="footer-description">
                        Your education platform for schools, colleges,
                        universities, courses, scholarships, jobs,
                        rankings, and study abroad opportunities.
                    </p>

                    ${SocialLinks()}

                </div>


                <!-- Education -->
                ${FooterColumn({
                    title: "Education",
                    links: [
                        { label: "Pre School", href: "#" },
                        { label: "Schools", href: "#" },
                        { label: "Colleges", href: "#" },
                        { label: "Universities", href: "#" },
                        { label: "Online Education", href: "#" },
                        { label: "Distance Education", href: "#" }
                    ]
                })}


                <!-- Explore -->
                ${FooterColumn({
                    title: "Explore",
                    links: [
                        { label: "Study Abroad", href: "#" },
                        { label: "Scholarships", href: "#" },
                        { label: "Top Lists", href: "#" },
                        { label: "Rankings", href: "#" },
                        { label: "Student Reviews", href: "#" },
                        { label: "Compare College", href: "#" }
                    ]
                })}


                <!-- Career -->
                ${FooterColumn({
                    title: "Career",
                    links: [
                        { label: "Jobs", href: "#" },
                        { label: "Internships", href: "#" },
                        { label: "Education Loan", href: "#" },
                        { label: "Career Guidance", href: "#" },
                        { label: "Courses", href: "#" },
                        { label: "Certifications", href: "#" }
                    ]
                })}


                <!-- Platform -->
                ${FooterColumn({
                    title: "Platform",
                    links: [
                        { label: "Student Community", href: "#" },
                        { label: "Latest News", href: "#" },
                        { label: "Current Affairs", href: "#" },
                        { label: "College Rankings", href: "#" },
                        { label: "Student Reviews", href: "#" },
                        { label: "Contact Us", href: "#" }
                    ]
                })}

            </div>


            <!-- Footer Middle -->
            <div class="footer-highlight">

                <div class="footer-highlight-content">

                    <h3>
                        Find the Right Education Opportunity
                    </h3>

                    <p>
                        Explore schools, colleges, universities,
                        scholarships, jobs and study abroad opportunities.
                    </p>

                </div>

                <a href="#" class="footer-cta">
                    Explore Now
                </a>

            </div>


            <!-- Footer Bottom -->
            <div class="footer-bottom">

                <div class="footer-bottom-container">

                    <p>
                        © ${currentYear} EduConnect.
                        All rights reserved.
                    </p>

                    <div class="footer-legal">

                        <a href="#">
                            Privacy Policy
                        </a>

                        <a href="#">
                            Terms & Conditions
                        </a>

                        <a href="#">
                            Contact Us
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    `;
}

export default FooterSection;