import { getInstitutions } from "../../services/studyAbroadService.js";

const COUNTRY_META = {
    US: {
        flag: "🇺🇸",
        image: "https://images.unsplash.com/photo-1485871981521-5b1fd380e5ea?auto=format&fit=crop&w=1200&q=85"
    },
    USA: {
        flag: "🇺🇸",
        image: "https://images.unsplash.com/photo-1485871981521-5b1fd380e5ea?auto=format&fit=crop&w=1200&q=85"
    },
    GB: {
        flag: "🇬🇧",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=85"
    },
    UK: {
        flag: "🇬🇧",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=85"
    },
    CA: {
        flag: "🇨🇦",
        image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1200&q=85"
    },
    AU: {
        flag: "🇦🇺",
        image: "https://images.unsplash.com/photo-1506973035872-a4f7d6c5e7a1?auto=format&fit=crop&w=1200&q=85"
    },
    DE: {
        flag: "🇩🇪",
        image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=85"
    },
    BE: {
        flag: "🇧🇪",
        image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=85"
    },
    FR: {
        flag: "🇫🇷",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85"
    },
    IE: {
        flag: "🇮🇪",
        image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=1200&q=85"
    },
    NZ: {
        flag: "🇳🇿",
        image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=85"
    }
};

const FALLBACK_META = {
    flag: "🌍",
    image: "https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=1200&q=85"
};

function escapeHtml(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function getCountryMeta(code) {
    const normalizedCode = String(code ?? "").trim().toUpperCase();
    return COUNTRY_META[normalizedCode] ?? FALLBACK_META;
}

function buildDestinations(institutions) {
    const groups = new Map();

    institutions.forEach((institution) => {
        const country = institution.country?.trim();

        if (!country) {
            return;
        }

        if (!groups.has(country)) {
            groups.set(country, {
                country,
                code: institution.countryCode || "",
                institutions: [],
                universities: 0,
                colleges: 0,
                otherInstitutions: 0
            });
        }

        const group = groups.get(country);
        group.institutions.push(institution);

        if (!group.code && institution.countryCode) {
            group.code = institution.countryCode;
        }

        const type = String(institution.type ?? "").toUpperCase();

        if (type === "UNIVERSITY") {
            group.universities += 1;
        } else if (type === "COLLEGE") {
            group.colleges += 1;
        } else {
            group.otherInstitutions += 1;
        }
    });

    return [...groups.values()].sort(
        (a, b) => a.country.localeCompare(b.country)
    );
}

/*
 * Show two complete rows according to the responsive grid.
 */
function getDestinationBatchSize() {
    if (window.matchMedia("(max-width: 600px)").matches) return 2;
    if (window.matchMedia("(max-width: 850px)").matches) return 4;
    if (window.matchMedia("(max-width: 1150px)").matches) return 6;

    return 8;
}

export default function StudyAbroadDestinations() {
    const section = `
        <section
            class="study-abroad-destinations"
            id="study-abroad-destination-explorer"
            aria-labelledby="study-abroad-destinations-title"
        >
            <div class="study-abroad-destinations-container">
                <div class="study-abroad-destinations-header">
                    <span class="study-abroad-section-eyebrow">
                        STUDY DESTINATIONS
                    </span>

                    <h2 id="study-abroad-destinations-title">
                        Explore destinations available on
                        <span>EduConnect</span>
                    </h2>

                    <p>
                        Explore the destinations represented in the current institution list.
                    </p>
                </div>

                <div
                    class="study-abroad-destination-grid"
                    data-study-abroad-destinations
                    aria-live="polite"
                >
                    <div class="study-abroad-destination-loading">
                        <span class="destination-loading-dot"></span>
                        <span>Loading destinations...</span>
                    </div>
                </div>

                <div
                    class="study-abroad-load-more-wrap"
                    data-destination-controls
                    hidden
                >
                    <button
                        type="button"
                        class="study-abroad-load-more"
                        data-destination-load-more
                    >
                        View More Destinations
                        <span aria-hidden="true">↓</span>
                    </button>
                </div>
            </div>
        </section>
    `;

    setTimeout(async () => {
        const container = document.querySelector(
            "[data-study-abroad-destinations]"
        );

        if (!container) {
            return;
        }

        try {
            const institutions = await getInstitutions();
            const visible = Array.isArray(institutions) ? institutions : [];
            const destinations = buildDestinations(visible);

            if (!destinations.length) {
                container.innerHTML = `
                    <div class="study-abroad-destination-empty">
                        <div class="study-abroad-destination-empty-icon">🌍</div>
                        <h3>No destinations available yet</h3>
                        <p>
                            Active Study Abroad institutions added by an administrator
                            will appear here.
                        </p>
                    </div>
                `;
                return;
            }

            const initialCount = getDestinationBatchSize();

            container.innerHTML = destinations.map((destination, index) => {
                const meta = getCountryMeta(destination.code);
                const total = destination.institutions.length;

                const universityLabel =
                    `${destination.universities} ${
                        destination.universities === 1
                            ? "University"
                            : "Universities"
                    }`;

                const collegeLabel =
                    `${destination.colleges} ${
                        destination.colleges === 1
                            ? "College"
                            : "Colleges"
                    }`;

                const otherInstitutionLabel =
                    `${destination.otherInstitutions} ${
                        destination.otherInstitutions === 1
                            ? "Other institution"
                            : "Other institutions"
                    }`;

                return `
                    <article
                        class="study-abroad-destination-card"
                        data-country="${escapeHtml(
                            destination.code || destination.country
                        )}"
                        data-destination-index="${index}"
                        ${index >= initialCount ? "hidden" : ""}
                    >
                        <a
                            href="#study-abroad-search"
                            class="study-abroad-destination-link"
                            data-destination-query="institutions in ${escapeHtml(
                                destination.country
                            )}"
                            aria-label="Explore Study Abroad institutions in ${escapeHtml(
                                destination.country
                            )}"
                        >
                            <div class="destination-card-image">
                                <img
                                    src="${meta.image}"
                                    alt="Study in ${escapeHtml(
                                        destination.country
                                    )}"
                                    loading="lazy"
                                />

                                <div class="destination-card-image-overlay"></div>

                                <div class="destination-country">
                                    <span aria-hidden="true">${meta.flag}</span>
                                    ${escapeHtml(destination.country)}
                                </div>

                                <span class="destination-card-count">
                                    ${total} listed ${
                                        total === 1 ? "institution" : "institutions"
                                    }
                                </span>
                            </div>

                            <div class="destination-card-content">
                                <div class="destination-card-top">
                                    <span class="destination-card-label">
                                        STUDY ABROAD
                                    </span>
                                    <span
                                        class="destination-card-arrow"
                                        aria-hidden="true"
                                    >↗</span>
                                </div>

                                <h3>
                                    Study in ${escapeHtml(destination.country)}
                                </h3>

                                <p class="destination-card-description">
                                    Browse the institutions currently listed for
                                    this destination.
                                </p>

                                <div class="destination-card-stats">
                                    <span>
                                        <strong>${destination.universities}</strong>
                                        ${escapeHtml(universityLabel)}
                                    </span>

                                    <span>
                                        <strong>${destination.colleges}</strong>
                                        ${escapeHtml(collegeLabel)}
                                    </span>

                                    <span>
                                        <strong>${destination.otherInstitutions}</strong>
                                        ${escapeHtml(otherInstitutionLabel)}
                                    </span>
                                </div>

                                <div class="destination-card-footer">
                                    <span>
                                        Explore ${escapeHtml(destination.country)}
                                    </span>
                                    <span aria-hidden="true">→</span>
                                </div>
                            </div>
                        </a>
                    </article>
                `;
            }).join("");

            const sectionElement = container.closest(
                ".study-abroad-destinations"
            );

            const controls = sectionElement?.querySelector(
                "[data-destination-controls]"
            );

            const button = controls?.querySelector(
                "[data-destination-load-more]"
            );

            let expanded = false;

            if (controls && button) {
                controls.hidden = destinations.length <= initialCount;

                button.addEventListener("click", () => {
                    const cards = [
                        ...container.querySelectorAll(
                            ".study-abroad-destination-card"
                        )
                    ];

                    if (expanded) {
                        cards.forEach((card, index) => {
                            card.hidden = index >= initialCount;
                        });

                        expanded = false;
                        button.innerHTML =
                            'View More Destinations <span aria-hidden="true">↓</span>';

                        return;
                    }

                    const hiddenCards = cards
                        .filter((card) => card.hidden)
                        .slice(0, getDestinationBatchSize());

                    hiddenCards.forEach((card) => {
                        card.hidden = false;
                    });

                    if (!cards.some((card) => card.hidden)) {
                        expanded = true;
                        button.innerHTML =
                            'View Less <span aria-hidden="true">↑</span>';
                    }
                });
            }

            sectionElement?.addEventListener("click", (event) => {
                const link = event.target.closest("[data-destination-query]");

                if (!link) {
                    return;
                }

                const input = document.querySelector(
                    "#study-abroad-search-input"
                );

                if (!input) {
                    return;
                }

                event.preventDefault();
                input.value = link.dataset.destinationQuery || "";

                document.querySelector("#study-abroad-search-button")?.click();
            });
        } catch (error) {
            console.error(
                "Failed to load Study Abroad destinations:",
                error
            );

            container.innerHTML = `
                <div class="study-abroad-destination-empty">
                    <div class="study-abroad-destination-empty-icon">⚠️</div>
                    <h3>Unable to load destinations</h3>
                    <p>Please refresh the page and try again.</p>
                </div>
            `;
        }
    }, 0);

    return section;
}