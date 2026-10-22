import { getOnlineEducationProgrammes } from "../../services/onlineEducationService.js";
import { onlineEducationInstitutions } from "../../data/onlineEducationInstitutions.js";
import { renderOnlineEducationCustomCards } from "./onlineEducationCustomCards.js";

const byId = (id) => document.getElementById(id);

const escapeHTML = (value = "") =>
    String(value).replace(/[&<>"']/g, (char) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);

const storage = (key, fallback) => {
    try {
        return JSON.parse(localStorage.getItem(key)) || fallback;
    } catch {
        return fallback;
    }
};

function setMeta(selector, attribute, value, createTag) {
    let element = document.head.querySelector(selector);

    if (!element) {
        element = document.createElement(createTag);
        document.head.append(element);
    }

    element.setAttribute(attribute, value);

    if (createTag === "meta") {
        element.setAttribute("content", value);
    }
}

function updatePageMetadata() {
    const title = "Online Education: Compare Courses & Degrees | EduConnect";
    const description =
        "Compare online courses, certificates, diplomas and degree programmes. Explore learning websites by education level, subject, study mode and destination.";
    const canonicalUrl = "https://www.educonnect.com/online-education/";

    document.title = title;

    setMeta('meta[name="description"]', "name", description, "meta");
    setMeta('meta[property="og:type"]', "property", "website", "meta");
    setMeta('meta[property="og:site_name"]', "property", "EduConnect", "meta");
    setMeta('meta[property="og:title"]', "property", title, "meta");
    setMeta('meta[property="og:description"]', "property", description, "meta");
    setMeta('meta[property="og:url"]', "property", canonicalUrl, "meta");
    setMeta('meta[name="twitter:card"]', "name", "summary", "meta");
    setMeta('meta[name="twitter:title"]', "name", title, "meta");
    setMeta('meta[name="twitter:description"]', "name", description, "meta");

    let canonical = document.head.querySelector('link[rel="canonical"]');

    if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.append(canonical);
    }

    canonical.href = canonicalUrl;
}

export async function initOnlineEducationPage() {
    updatePageMetadata();

    const root = byId("online-education-page");

    if (!root) {
        return;
    }

    const heroVideo = root.querySelector(".oe-hero-video");

    if (heroVideo) {
        heroVideo.muted = true;
        heroVideo.defaultMuted = true;

        const startHeroVideo = () => {
            const playback = heroVideo.play();

            if (playback) {
                playback.catch(() => {});
            }
        };

        heroVideo.addEventListener("canplay", startHeroVideo, {
            once: true
        });

        startHeroVideo();
    }

    try {
        await renderOnlineEducationCustomCards();
    } catch (error) {
        console.warn(
            "Online education card changes could not be loaded.",
            error
        );
    }

    const results = byId("oe-programme-results");

    const filters = [
        "level",
        "mode",
        "country",
        "type",
        "subject",
        "difficulty",
        "budget"
    ];

    let programmes = [];
    let programmesLoaded = false;
    let pendingHeroSearchQuery = "";
    let visibleLimit = 6;

    let favourites = storage("educonnect-online-favourites", []);
    let compared = storage("educonnect-online-compare", []);
    let institutionCompared = [];

    let cardObserver = null;

    const motionEnabled =
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const subjectCarousel = root.querySelector("[data-subject-carousel]");
    const subjectTrack = root.querySelector("[data-subject-track]");

    // =====================================================
    // SUBJECT CAROUSEL
    // =====================================================

    if (subjectCarousel && subjectTrack) {
        if (!subjectTrack.dataset.loopReady) {
            const originalCards = [
                ...subjectTrack.querySelectorAll(".oe-subject-card")
            ];

            const firstCardWidth =
                originalCards[0]?.getBoundingClientRect().width || 0;

            const gap =
                parseFloat(getComputedStyle(subjectTrack).gap) || 0;

            const cardStep = firstCardWidth + gap;

            const cloneCount = cardStep > 0
                ? Math.min(
                    originalCards.length,
                    Math.ceil(subjectCarousel.clientWidth / cardStep) + 1
                )
                : 0;

            originalCards.slice(0, cloneCount).forEach((card) => {
                const clone = card.cloneNode(true);

                clone.setAttribute("aria-hidden", "true");
                clone.tabIndex = -1;
                clone.dataset.carouselClone = "true";

                subjectTrack.append(clone);
            });

            subjectTrack.dataset.loopReady = "true";
        }

        let subjectIndex = 0;
        let subjectTimer;

        const originals = () => [
            ...subjectTrack.querySelectorAll(
                ".oe-subject-card:not([data-carousel-clone])"
            )
        ];

        const moveSubject = (direction) => {
            const cards = originals();

            if (!cards.length) {
                return;
            }

            const gap =
                parseFloat(getComputedStyle(subjectTrack).gap) || 0;

            const step =
                cards[0].getBoundingClientRect().width + gap;

            const nextIndex = subjectIndex + direction;

            if (nextIndex >= cards.length) {
                subjectIndex = cards.length;

                subjectCarousel.scrollTo({
                    left: step * subjectIndex,
                    behavior: "smooth"
                });

                window.setTimeout(() => {
                    subjectIndex = 0;

                    subjectCarousel.scrollTo({
                        left: 0,
                        behavior: "auto"
                    });
                }, 720);

                return;
            }

            if (nextIndex < 0) {
                subjectIndex = Math.max(
                    0,
                    cards.length -
                        Math.ceil(subjectCarousel.clientWidth / step)
                );

                subjectCarousel.scrollTo({
                    left: step * subjectIndex,
                    behavior: "auto"
                });

                return;
            }

            subjectIndex = nextIndex;

            subjectCarousel.scrollTo({
                left: step * subjectIndex,
                behavior: "smooth"
            });
        };

        const restartSubjectAutoplay = () => {
            window.clearInterval(subjectTimer);

            if (!document.hidden && originals().length > 1) {
                subjectTimer = window.setInterval(
                    () => moveSubject(1),
                    2600
                );
            }
        };

        root.querySelector("[data-subject-prev]")?.addEventListener(
            "click",
            () => {
                moveSubject(-1);
                restartSubjectAutoplay();
            }
        );

        root.querySelector("[data-subject-next]")?.addEventListener(
            "click",
            () => {
                moveSubject(1);
                restartSubjectAutoplay();
            }
        );

        document.addEventListener(
            "visibilitychange",
            restartSubjectAutoplay
        );

        restartSubjectAutoplay();
    }

    // =====================================================
    // CARD REVEAL ANIMATIONS
    // =====================================================

    if (motionEnabled && "IntersectionObserver" in window) {
        root.classList.add("oe-motion-ready");

        cardObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        cardObserver.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.08,
                rootMargin: "0px 0px -24px 0px"
            }
        );
    }

    const observeCards = () => {
        if (!cardObserver) {
            root.querySelectorAll(".oe-reveal").forEach((card) => {
                card.classList.add("is-visible");
            });

            return;
        }

        root.querySelectorAll(".oe-reveal:not(.is-visible)").forEach(
            (card, index) => {
                card.style.setProperty(
                    "--oe-stagger",
                    `${Math.min(index % 6, 5) * 55}ms`
                );

                cardObserver.observe(card);
            }
        );
    };

    root.querySelectorAll(
        ".oe-level-card, .oe-subject-card, .oe-popular-card, " +
        ".oe-platform-card, .oe-institution-card, .oe-provider-card, " +
        ".oe-path-grid a, .oe-steps article"
    ).forEach((card) => {
        card.classList.add("oe-reveal");
    });

    observeCards();

    // =====================================================
    // POINTER SPOTLIGHT / CARD TILT
    // =====================================================

    if (
        motionEnabled &&
        window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) {
        root.addEventListener("pointermove", (event) => {
            const card = event.target.closest(
                ".oe-popular-card, .oe-platform-card, .oe-programme-card, " +
                ".oe-level-card, .oe-subject-card, .oe-provider-card, " +
                ".oe-path-grid a"
            );

            if (!card) {
                return;
            }

            const rect = card.getBoundingClientRect();

            if (!rect.width || !rect.height) {
                return;
            }

            const x = (event.clientX - rect.left) / rect.width;
            const y = (event.clientY - rect.top) / rect.height;

            card.style.setProperty("--oe-pointer-x", `${x * 100}%`);
            card.style.setProperty("--oe-pointer-y", `${y * 100}%`);

            if (
                card.matches(
                    ".oe-programme-card, .oe-popular-card, .oe-platform-card"
                )
            ) {
                card.style.setProperty(
                    "--oe-tilt-x",
                    `${(0.5 - y) * 3}deg`
                );

                card.style.setProperty(
                    "--oe-tilt-y",
                    `${(x - 0.5) * 3}deg`
                );
            }
        });

        root.addEventListener("pointerout", (event) => {
            const card = event.target.closest(
                ".oe-popular-card, .oe-platform-card, .oe-programme-card, " +
                ".oe-level-card, .oe-subject-card, .oe-provider-card, " +
                ".oe-path-grid a"
            );

            if (card && !card.contains(event.relatedTarget)) {
                card.style.removeProperty("--oe-tilt-x");
                card.style.removeProperty("--oe-tilt-y");
            }
        });
    }

    // =====================================================
    // SEARCH STATE
    // =====================================================

    const getState = () => ({
        query: byId("oe-query").value.trim().toLowerCase(),
        level: byId("oe-filter-level").value,
        mode: byId("oe-filter-mode").value,
        country: byId("oe-filter-country").value,
        type: byId("oe-filter-type").value,
        subject: byId("oe-filter-subject").value,
        difficulty: byId("oe-filter-difficulty").value,
        budget:
            byId("oe-filter-budget").value ||
            byId("oe-search-budget").value,
        searchLevel: byId("oe-search-level").value,
        searchMode: byId("oe-search-mode").value,
        searchCountry: byId("oe-search-country").value
    });

    const syncStorage = () => {
        try {
            localStorage.setItem(
                "educonnect-online-favourites",
                JSON.stringify(favourites)
            );

            localStorage.setItem(
                "educonnect-online-compare",
                JSON.stringify(compared)
            );
        } catch {
            // Browsing still works if local storage is unavailable.
        }
    };

    // =====================================================
    // PROGRAMME MATCHING
    // =====================================================

    const matches = (programme, state) => {
        const searchableText = [
            programme.title,
            programme.providerName,
            programme.subject,
            programme.educationLevel,
            programme.qualificationType,
            programme.studyMode,
            programme.country,
            programme.difficultyLevel
        ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, " ")
            .trim();

        const queryTerms = String(state.query || "")
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, " ")
            .trim()
            .split(/\s+/)
            .filter(Boolean);

        const queryOK = queryTerms.every((term) => {
            if (term === "ai") {
                return searchableText.includes("ai") ||
                    searchableText.includes("artificial intelligence");
            }

            if (term === "cs") {
                return searchableText.includes("computer science");
            }

            return searchableText.includes(term);
        });

        const subjectAlias = {
            "AI & Machine Learning": "Artificial Intelligence",
            "Computer Science": "Computer Science & IT",
            "Business": "Business & Management",
            "Engineering": "Engineering & Technology",
            "Healthcare": "Medicine & Healthcare",
            "Finance": "Finance & Accounting",
            "Digital Marketing": "Marketing",
            "Design": "Design & Media",
            "Education": "Education"
        };

        const levelOK =
            !state.level ||
            programme.educationLevel === state.level ||
            (
                state.level === "Undergraduate" &&
                programme.educationLevel === "Bachelor's"
            ) ||
            (
                state.level === "Postgraduate" &&
                ["Master's", "MBA", "PhD / Doctorate"].includes(
                    programme.educationLevel
                )
            );

        const budgetOK =
            !state.budget ||
            (
                programme.tuitionAmount !== null &&
                (
                    state.budget === "free"
                        ? programme.tuitionAmount === 0
                        : state.budget === "10000"
                            ? programme.tuitionAmount < 10000
                            : state.budget === "50000"
                                ? programme.tuitionAmount >= 10000 &&
                                  programme.tuitionAmount <= 50000
                                : state.budget === "100000"
                                    ? programme.tuitionAmount > 50000 &&
                                      programme.tuitionAmount <= 100000
                                    : state.budget === "500000"
                                        ? programme.tuitionAmount > 100000 &&
                                          programme.tuitionAmount <= 500000
                                        : programme.tuitionAmount > 500000
                )
            );

        return (
            queryOK &&
            levelOK &&
            (
                !state.searchLevel ||
                programme.educationLevel === state.searchLevel
            ) &&
            (
                !state.mode ||
                String(programme.studyMode || "")
                    .toLowerCase()
                    .includes(state.mode.toLowerCase())
            ) &&
            (
                !state.searchMode ||
                String(programme.studyMode || "")
                    .toLowerCase()
                    .includes(state.searchMode.toLowerCase())
            ) &&
            (!state.country || programme.country === state.country) &&
            (!state.searchCountry || programme.country === state.searchCountry) &&
            (!state.type || programme.providerType === state.type) &&
            (
                !state.subject ||
                programme.subject === state.subject ||
                programme.subject === subjectAlias[state.subject] ||
                String(programme.subject || "")
                    .toLowerCase()
                    .includes(state.subject.toLowerCase())
            ) &&
            (
                !state.difficulty ||
                programme.difficultyLevel === state.difficulty
            ) &&
            budgetOK
        );
    };

    // =====================================================
    // RENDER COURSE RESULTS
    // =====================================================

    const render = () => {
        const state = getState();
        const sort = byId("oe-sort").value;

        let filtered = programmes.filter(
            (programme) => matches(programme, state)
        );

        if (sort === "name") {
            filtered.sort((a, b) => a.title.localeCompare(b.title));
        }

        if (sort === "lowest") {
            filtered.sort(
                (a, b) =>
                    (a.tuitionAmount ?? Infinity) -
                    (b.tuitionAmount ?? Infinity)
            );
        }

        if (sort === "highest") {
            filtered.sort(
                (a, b) =>
                    (b.tuitionAmount ?? -Infinity) -
                    (a.tuitionAmount ?? -Infinity)
            );
        }

        if (sort === "shortest" || sort === "longest") {
            filtered.sort((a, b) => {
                const durationA =
                    Number.parseFloat(a.duration) || Infinity;

                const durationB =
                    Number.parseFloat(b.duration) || Infinity;

                return sort === "shortest"
                    ? durationA - durationB
                    : durationB - durationA;
            });
        }

        byId("oe-result-count").textContent =
            `${filtered.length} ${
                filtered.length === 1
                    ? "discovery option"
                    : "discovery options"
            } · illustrative sample`;

        byId("oe-empty").hidden = filtered.length !== 0;

        results.innerHTML = filtered
            .slice(0, visibleLimit)
            .map((programme) => `
                <article class="oe-programme-card oe-reveal">
                    ${
                        programme.image
                            ? `<img class="oe-programme-image" src="${escapeHTML(programme.image)}" alt="">`
                            : ""
                    }

                    <div class="oe-programme-top">
                        <span class="oe-provider-mark" aria-hidden="true">
                            ${escapeHTML(
                                String(programme.providerName || "")
                                    .split(" ")
                                    .slice(0, 2)
                                    .map((word) => word[0] || "")
                                    .join("")
                            )}
                        </span>

                        <span class="oe-sample-badge">
                            Illustrative sample
                        </span>
                    </div>

                    <p class="oe-programme-subject">
                        ${escapeHTML(programme.subject)}
                    </p>

                    <h3>${escapeHTML(programme.title)}</h3>

                    <p class="oe-provider-name">
                        ${escapeHTML(programme.providerName)}
                    </p>

                    <div class="oe-programme-tags">
                        <span>${escapeHTML(programme.educationLevel)}</span>
                        <span>${escapeHTML(programme.studyMode)}</span>
                    </div>

                    <dl class="oe-programme-meta">
                        <div>
                            <dt>Location</dt>
                            <dd>${escapeHTML(programme.country)}</dd>
                        </div>

                        <div>
                            <dt>Duration</dt>
                            <dd>${escapeHTML(programme.duration)}</dd>
                        </div>

                        <div>
                            <dt>Tuition</dt>
                            <dd>
                                ${
                                    programme.tuitionAmount === null
                                        ? "Check provider website"
                                        : `${escapeHTML(programme.currency)} ${escapeHTML(programme.tuitionAmount)}${
                                            programme.feePeriod
                                                ? ` · ${escapeHTML(programme.feePeriod)}`
                                                : ""
                                        }`
                                }
                            </dd>
                        </div>

                        <div>
                            <dt>Award</dt>
                            <dd>${escapeHTML(programme.qualificationType)}</dd>
                        </div>
                    </dl>

                    <p class="oe-card-footnote">
                        Sample discovery link · verify all details with the provider.
                    </p>

                    <div class="oe-programme-actions">
                        <a
                            class="oe-button oe-primary"
                            href="${escapeHTML(programme.officialProgramUrl)}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Visit provider ↗
                        </a>

                        <button
                            type="button"
                            class="oe-icon-button ${
                                favourites.includes(programme.id) ? "is-saved" : ""
                            }"
                            data-favourite="${programme.id}"
                            aria-label="${
                                favourites.includes(programme.id)
                                    ? "Remove saved programme"
                                    : "Save programme"
                            }"
                            aria-pressed="${favourites.includes(programme.id)}"
                        >${favourites.includes(programme.id) ? "♥" : "♡"}</button>

                        <label class="oe-compare-check">
                            <input
                                type="checkbox"
                                data-compare="${programme.id}"
                                ${compared.includes(programme.id) ? "checked" : ""}
                                ${
                                    !compared.includes(programme.id) &&
                                    compared.length >= 4
                                        ? "disabled"
                                        : ""
                                }
                            >
                            Compare
                        </label>
                    </div>
                </article>
            `)
            .join("");

        observeCards();

        byId("oe-load-more").hidden = filtered.length <= visibleLimit;

        const chips = [];

        for (const key of filters) {
            const value = state[key];

            if (value) {
                chips.push(`
                    <button type="button" data-clear-filter="${key}">
                        ${escapeHTML(value === "10000" ? "Under ₹10,000" : value)}
                        <span aria-hidden="true">×</span>
                    </button>
                `);
            }
        }

        for (const [key, value] of [
            ["level", state.searchLevel],
            ["mode", state.searchMode],
            ["country", state.searchCountry]
        ]) {
            if (
                value &&
                !(key === "level" && state.level === value) &&
                !(key === "mode" && state.mode === value) &&
                !(key === "country" && state.country === value)
            ) {
                chips.push(`
                    <button type="button" data-clear-search="${key}">
                        ${escapeHTML(value)} <span aria-hidden="true">×</span>
                    </button>
                `);
            }
        }

        if (
            byId("oe-search-budget").value &&
            !byId("oe-filter-budget").value
        ) {
            chips.push(`
                <button type="button" data-clear-search="budget">
                    Budget preference <span aria-hidden="true">×</span>
                </button>
            `);
        }

        byId("oe-active-filters").innerHTML = chips.join("");

        updateCompareBar();
    };

    // =====================================================
    // PROGRAMME COMPARE BAR
    // =====================================================

    const updateCompareBar = () => {
        let bar = byId("oe-compare-bar");

        if (!bar) {
            bar = document.createElement("div");
            bar.id = "oe-compare-bar";
            bar.className = "oe-compare-bar";
            bar.setAttribute("aria-live", "polite");
            root.append(bar);
        }

        const names = compared
            .map((id) => programmes.find((programme) => programme.id === id))
            .filter(Boolean)
            .map((programme) => programme.title);

        bar.hidden = compared.length === 0;

        bar.innerHTML = `
            <span>
                <b>${compared.length} of 4</b> selected to compare
                ${
                    names.length
                        ? `: ${names.map(escapeHTML).join(", ")}`
                        : ""
                }
            </span>

            <div>
                <button type="button" class="oe-button oe-outline" id="oe-clear-compare">
                    Clear comparison
                </button>

                <button
                    type="button"
                    class="oe-button oe-primary"
                    id="oe-show-compare"
                    ${compared.length < 2 ? "disabled" : ""}
                >
                    Compare selected
                </button>
            </div>
        `;
    };

    const clearAll = () => {
        for (const key of filters) {
            byId(`oe-filter-${key}`).value = "";
        }

        byId("oe-query").value = "";
        byId("oe-search-level").value = "";
        byId("oe-search-mode").value = "";
        byId("oe-search-country").value = "";
        byId("oe-search-budget").value = "";

        if (byId("oe-hero-query")) {
            byId("oe-hero-query").value = "";
        }

        visibleLimit = 6;
        render();
    };

    // =====================================================
    // PROGRAMME COMPARISON DIALOG
    // =====================================================

    const compareView = () => {
        const selected = compared
            .map((id) => programmes.find((programme) => programme.id === id))
            .filter(Boolean);

        let dialog = byId("oe-compare-dialog");

        if (!dialog) {
            dialog = document.createElement("dialog");
            dialog.id = "oe-compare-dialog";
            dialog.className = "oe-compare-dialog";
            root.append(dialog);
        }

        dialog.innerHTML = `
            <div class="oe-dialog-head">
                <div>
                    <p class="oe-eyebrow">YOUR SHORTLIST</p>
                    <h2>Compare programmes</h2>
                </div>

                <button
                    type="button"
                    class="oe-icon-button"
                    data-close-dialog
                    aria-label="Close comparison"
                >×</button>
            </div>

            <div class="oe-table-wrap">
                <table class="oe-compare-table">
                    <thead>
                        <tr>
                            <th scope="col">Programme detail</th>

                            ${selected.map((programme) => `
                                <th scope="col">
                                    ${escapeHTML(programme.title)}
                                    <button
                                        type="button"
                                        class="oe-remove-compare"
                                        data-remove-compare="${programme.id}"
                                    >Remove</button>
                                </th>
                            `).join("")}
                        </tr>
                    </thead>

                    <tbody>
                        ${[
                            ["Provider", (p) => p.providerName],
                            ["Country", (p) => p.country],
                            ["Qualification", (p) => p.qualificationType],
                            ["Subject", (p) => p.subject],
                            ["Study mode", (p) => p.studyMode],
                            ["Duration", (p) => p.duration],
                            [
                                "Tuition",
                                (p) => p.tuitionAmount === null
                                    ? "Check provider website"
                                    : `${p.currency} ${p.tuitionAmount} · ${p.feePeriod || "period not specified"}`
                            ],
                            ["Entry requirements", () => "Check provider website"],
                            ["Recognition", () => "Verify with official regulator"],
                            [
                                "Official programme page",
                                (p) => `<a href="${escapeHTML(p.officialProgramUrl)}" target="_blank" rel="noopener noreferrer">Visit provider ↗</a>`
                            ]
                        ].map(([label, get]) => `
                            <tr>
                                <th scope="row">${label}</th>

                                ${selected.map((programme) => `
                                    <td>
                                        ${
                                            label === "Official programme page"
                                                ? get(programme)
                                                : escapeHTML(get(programme))
                                        }
                                    </td>
                                `).join("")}
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>

            <p class="oe-dialog-note">
                Illustrative sample data. Visit providers to verify details,
                fees and recognition.
            </p>

            <div class="oe-dialog-actions">
                <button type="button" class="oe-button oe-outline" id="oe-dialog-clear">
                    Clear comparison
                </button>
                <button type="button" class="oe-button oe-primary" data-close-dialog>
                    Done
                </button>
            </div>
        `;

        if (!dialog.open) {
            dialog.showModal();
        }
    };

    // =====================================================
    // HERO SEARCH SUGGESTIONS
    // =====================================================

    const heroSearchForm = byId("oe-hero-search-form");
    const heroSearchInput = byId("oe-hero-query");

    if (
        heroSearchForm &&
        heroSearchInput &&
        heroSearchForm.dataset.searchReady !== "true"
    ) {
        heroSearchForm.dataset.searchReady = "true";

        const heroSearchControl = heroSearchForm.querySelector(
            ".oe-hero-search-control"
        );

        const suggestionPanel = document.createElement("div");

        suggestionPanel.id = "oe-hero-suggestions";
        suggestionPanel.className = "oe-course-suggestions";
        suggestionPanel.setAttribute("role", "listbox");
        suggestionPanel.setAttribute(
            "aria-label",
            "Course suggestions"
        );
        suggestionPanel.hidden = true;

        if (heroSearchControl) {
            heroSearchControl.insertAdjacentElement(
                "afterend",
                suggestionPanel
            );
        } else {
            heroSearchForm.append(suggestionPanel);
        }

        heroSearchInput.setAttribute("aria-autocomplete", "list");
        heroSearchInput.setAttribute("aria-controls", suggestionPanel.id);
        heroSearchInput.setAttribute("aria-expanded", "false");

        const normalizeSuggestion = (value) =>
            String(value ?? "")
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, " ")
                .trim();

        const closeHeroSuggestions = () => {
            suggestionPanel.hidden = true;
            heroSearchInput.setAttribute("aria-expanded", "false");
        };

        const getHeroSuggestions = (query) => {
            const normalizedQuery = normalizeSuggestion(query);
            const terms = normalizedQuery.split(/\s+/).filter(Boolean);
            const candidates = [];
            const seen = new Set();

            const add = (label, value, kind, detail = "") => {
                label = String(label ?? "").trim();
                value = String(value ?? "").trim();
                detail = String(detail ?? "").trim();

                if (!label || !value) {
                    return;
                }

                const uniqueKey =
                    `${normalizeSuggestion(label)}|${normalizeSuggestion(value)}`;

                if (seen.has(uniqueKey)) {
                    return;
                }

                const searchable = normalizeSuggestion(
                    `${label} ${value} ${detail}`
                );

                if (!terms.every((term) => searchable.includes(term))) {
                    return;
                }

                seen.add(uniqueKey);

                const normalizedLabel = normalizeSuggestion(label);

                const score =
                    normalizedLabel === normalizedQuery
                        ? 1000
                        : normalizedLabel.startsWith(normalizedQuery)
                            ? 700
                            : normalizedLabel.includes(normalizedQuery)
                                ? 500
                                : kind === "Course"
                                    ? 300
                                    : 100;

                candidates.push({
                    label,
                    value,
                    kind,
                    detail,
                    score
                });
            };

            // Programme catalogue, including active cards added through admin.
            programmes.forEach((programme) => {
                const detail = [
                    programme.subject,
                    programme.educationLevel
                ].filter(Boolean).join(" · ");

                add(programme.title, programme.title, "Course", detail);
                add(programme.subject, programme.subject, "Subject", "Find related programmes");
                add(programme.providerName, programme.providerName, "Provider", programme.title);
                add(programme.educationLevel, programme.educationLevel, "Education level", programme.title);
            });

            // Popular topics.
            root.querySelectorAll(".oe-quick button[data-query]").forEach(
                (button) => {
                    const value =
                        button.dataset.query || button.textContent.trim();

                    add(
                        button.textContent.trim(),
                        value,
                        "Popular topic",
                        "Explore matching programmes"
                    );
                }
            );

            // Static topic cards.
            root.querySelectorAll(".oe-popular-card").forEach((card) => {
                const title = card.querySelector("h3")?.textContent.trim();
                const subject = card.querySelector(
                    ".oe-programme-subject"
                )?.textContent.trim();

                const topicButton = card.querySelector("[data-query]");

                add(
                    title,
                    topicButton?.dataset.query || subject || title,
                    "Course topic",
                    subject || "Browse provider topics"
                );
            });

            // Subjects.
            root.querySelectorAll(".oe-subject-card[data-subject]").forEach(
                (card) => {
                    const label =
                        card.querySelector("b")?.textContent.trim() ||
                        card.dataset.subject;

                    add(
                        label,
                        card.dataset.subject,
                        "Subject",
                        "Explore programmes in this subject"
                    );
                }
            );

            // Education levels.
            root.querySelectorAll(".oe-level-card[data-level]").forEach(
                (card) => {
                    const label =
                        card.querySelector("h3")?.textContent.trim() ||
                        card.dataset.level;

                    add(
                        label,
                        card.dataset.level,
                        "Education level",
                        "Browse matching programmes"
                    );
                }
            );

            candidates.sort(
                (a, b) => b.score - a.score || a.label.localeCompare(b.label)
            );

            if (!candidates.length) {
                return [{
                    label: `Search for "${query.trim()}"`,
                    value: query.trim(),
                    kind: "Search",
                    detail: "Show matching results",
                    score: 0
                }];
            }

            return candidates.slice(0, 8);
        };

        const renderHeroSuggestions = (query) => {
            if (query.trim().length < 2) {
                suggestionPanel.replaceChildren();
                closeHeroSuggestions();
                return;
            }

            suggestionPanel.innerHTML = getHeroSuggestions(query)
                .map((option) => `
                    <button
                        type="button"
                        class="oe-course-suggestion"
                        role="option"
                        aria-selected="false"
                        data-course-suggestion
                        data-suggestion-value="${escapeHTML(option.value)}"
                    >
                        <span class="oe-course-suggestion-main">
                            <strong>${escapeHTML(option.label)}</strong>
                            <small>
                                ${escapeHTML(option.kind)}${
                                    option.detail
                                        ? ` · ${escapeHTML(option.detail)}`
                                        : ""
                                }
                            </small>
                        </span>

                        <span class="oe-course-suggestion-arrow" aria-hidden="true">↗</span>
                    </button>
                `)
                .join("");

            suggestionPanel.hidden = false;
            heroSearchInput.setAttribute("aria-expanded", "true");
        };

        const submitHeroSearch = (query) => {
            const cleanQuery = String(query ?? "").trim();

            if (!cleanQuery) {
                heroSearchInput.focus();
                closeHeroSuggestions();
                return;
            }

            closeHeroSuggestions();

            // Clear previous filters so they do not hide matches.
            for (const key of filters) {
                byId(`oe-filter-${key}`).value = "";
            }

            [
                "oe-search-level",
                "oe-search-mode",
                "oe-search-country",
                "oe-search-budget"
            ].forEach((id) => {
                byId(id).value = "";
            });

            byId("oe-query").value = cleanQuery;
            visibleLimit = 6;

            if (!programmesLoaded) {
                pendingHeroSearchQuery = cleanQuery;
                byId("oe-result-count").textContent = "Loading programme options…";
                byId("oe-programmes").scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
                return;
            }

            render();

            byId("oe-programmes").scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        };

        heroSearchInput.addEventListener("input", () => {
            renderHeroSuggestions(heroSearchInput.value);
        });

        heroSearchInput.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                closeHeroSuggestions();
            }
        });

        suggestionPanel.addEventListener("click", (event) => {
            const option = event.target.closest("[data-course-suggestion]");

            if (!option) {
                return;
            }

            const value = option.dataset.suggestionValue || "";

            heroSearchInput.value = value;
            submitHeroSearch(value);
        });

        heroSearchForm.addEventListener("submit", (event) => {
            event.preventDefault();
            submitHeroSearch(heroSearchInput.value);
        });

        document.addEventListener("click", (event) => {
            if (!heroSearchForm.contains(event.target)) {
                closeHeroSuggestions();
            }
        });
    }

    // =====================================================
    // CLICK INTERACTIONS
    // =====================================================

    root.addEventListener("click", (event) => {
        const menu = event.target.closest(".oe-menu-toggle");

        if (menu) {
            const expanded = menu.getAttribute("aria-expanded") === "true";

            menu.setAttribute("aria-expanded", String(!expanded));

            byId("oe-nav-links").classList.toggle("is-open", !expanded);
        }

        const filterToggle = event.target.closest(".oe-filter-toggle");

        if (filterToggle) {
            const expanded =
                filterToggle.getAttribute("aria-expanded") === "true";

            filterToggle.setAttribute("aria-expanded", String(!expanded));

            byId("oe-filters").classList.toggle("is-open", !expanded);
        }

        const subject = event.target.closest("[data-subject]");

        if (subject) {
            const aliases = {
                "Computer Science": "Computer Science & IT",
                "AI & Machine Learning": "Artificial Intelligence",
                "Data Science": "Data Science",
                "Business": "Business & Management",
                "Engineering": "Engineering & Technology",
                "Healthcare": "Medicine & Healthcare",
                "Finance": "Finance & Accounting",
                "Digital Marketing": "Marketing",
                "Cybersecurity": "Cybersecurity",
                "Design": "Design & Media",
                "Psychology": "Psychology",
                "Education": "Education"
            };

            byId("oe-filter-subject").value =
                aliases[subject.dataset.subject] || subject.dataset.subject;

            visibleLimit = 6;
            render();

            byId("oe-programmes").scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

        const level = event.target.closest("[data-level]");

        if (level) {
            byId("oe-filter-level").value = level.dataset.level;
            visibleLimit = 6;
            render();

            byId("oe-programmes").scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

        const queryLink = event.target.closest("[data-query]");

        if (queryLink) {
            byId("oe-query").value = queryLink.dataset.query;
            visibleLimit = 6;
            render();

            byId("oe-programmes").scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

        const favouriteButton = event.target.closest("[data-favourite]");

        if (favouriteButton) {
            const id = favouriteButton.dataset.favourite;

            favourites = favourites.includes(id)
                ? favourites.filter((item) => item !== id)
                : [...favourites, id];

            syncStorage();
            render();
        }

        const clearChip = event.target.closest("[data-clear-filter]");

        if (clearChip) {
            byId(`oe-filter-${clearChip.dataset.clearFilter}`).value = "";
            visibleLimit = 6;
            render();
        }

        const clearSearch = event.target.closest("[data-clear-search]");

        if (clearSearch) {
            const map = {
                level: "oe-search-level",
                mode: "oe-search-mode",
                country: "oe-search-country",
                budget: "oe-search-budget"
            };

            byId(map[clearSearch.dataset.clearSearch]).value = "";
            visibleLimit = 6;
            render();
        }

        if (
            event.target.closest(
                "#oe-clear, #oe-clear-mobile, #oe-empty-reset"
            )
        ) {
            clearAll();
        }

        if (event.target.closest("#oe-load-more")) {
            visibleLimit += 6;
            render();
        }

        if (event.target.closest("#oe-show-compare")) {
            compareView();
        }

        if (event.target.closest("#oe-clear-compare, #oe-dialog-clear")) {
            compared = [];
            syncStorage();
            render();

            const dialog = byId("oe-compare-dialog");

            if (dialog?.open) {
                dialog.close();
            }
        }

        const removeCompare = event.target.closest("[data-remove-compare]");

        if (removeCompare) {
            compared = compared.filter(
                (id) => id !== removeCompare.dataset.removeCompare
            );

            syncStorage();
            render();

            if (compared.length < 2) {
                byId("oe-compare-dialog")?.close();
            } else {
                compareView();
            }
        }

        if (event.target.closest("[data-close-dialog]")) {
            byId("oe-compare-dialog")?.close();
        }

        if (event.target.closest("#oe-inst-compare-clear")) {
            institutionCompared = [];

            root.querySelectorAll("[data-institution-compare]").forEach(
                (input) => {
                    input.checked = false;
                }
            );

            updateInstitutionCompare();
        }

        if (event.target.closest("#oe-inst-compare-show")) {
            const selected = institutionCompared
                .map((id) =>
                    onlineEducationInstitutions.find((item) => item.id === id)
                )
                .filter(Boolean);

            let dialog = byId("oe-institution-dialog");

            if (!dialog) {
                dialog = document.createElement("dialog");
                dialog.id = "oe-institution-dialog";
                dialog.className = "oe-compare-dialog";
                root.append(dialog);
            }

            dialog.innerHTML = `
                <div class="oe-dialog-head">
                    <div>
                        <p class="oe-eyebrow">INSTITUTION SHORTLIST</p>
                        <h2>Compare institutions</h2>
                    </div>

                    <button
                        type="button"
                        class="oe-icon-button"
                        data-close-institution-dialog
                        aria-label="Close comparison"
                    >×</button>
                </div>

                <div class="oe-table-wrap">
                    <table class="oe-compare-table">
                        <thead>
                            <tr>
                                <th scope="col">Institution detail</th>
                                ${selected.map((item) => `
                                    <th scope="col">${escapeHTML(item.name)}</th>
                                `).join("")}
                            </tr>
                        </thead>

                        <tbody>
                            ${[
                                ["Country / city", (item) => `${item.city}, ${item.country}`],
                                ["Institution type", (item) => item.type],
                                ["Programme levels listed", (item) => item.levels.join(", ")],
                                ["Subjects shown", (item) => item.subjects.join(", ")],
                                ["Delivery modes", (item) => item.modes.join(", ")],
                                ["Online programme information", (item) => item.programmeNote],
                                [
                                    "Official institution page",
                                    (item) => `<a href="${escapeHTML(item.url)}" target="_blank" rel="noopener noreferrer">Visit official site ↗</a>`
                                ],
                                ["Source checked", (item) => item.lastVerifiedAt]
                            ].map(([label, get]) => `
                                <tr>
                                    <th scope="row">${label}</th>
                                    ${selected.map((item) => `
                                        <td>
                                            ${
                                                label === "Official institution page"
                                                    ? get(item)
                                                    : escapeHTML(get(item))
                                            }
                                        </td>
                                    `).join("")}
                                </tr>
                            `).join("")}
                        </tbody>
                    </table>
                </div>

                <p class="oe-dialog-note">
                    Programme details, admissions, delivery, fees and recognition
                    are subject to change; confirm them with the institution.
                </p>

                <div class="oe-dialog-actions">
                    <button
                        type="button"
                        class="oe-button oe-outline"
                        id="oe-inst-dialog-clear"
                    >Clear comparison</button>

                    <button
                        type="button"
                        class="oe-button oe-primary"
                        data-close-institution-dialog
                    >Done</button>
                </div>
            `;

            dialog.showModal();
        }

        if (event.target.closest("#oe-inst-dialog-clear")) {
            institutionCompared = [];

            root.querySelectorAll("[data-institution-compare]").forEach(
                (input) => {
                    input.checked = false;
                }
            );

            updateInstitutionCompare();
            byId("oe-institution-dialog")?.close();
        }

        if (event.target.closest("[data-close-institution-dialog]")) {
            byId("oe-institution-dialog")?.close();
        }

        if (event.target.closest(".oe-nav-links a")) {
            byId("oe-nav-links").classList.remove("is-open");
            byId("oe-menu-toggle")?.setAttribute("aria-expanded", "false");
        }
    });

    // =====================================================
    // PROGRAMME COMPARISON CHECKBOXES
    // =====================================================

    results.addEventListener("change", (event) => {
        const checkbox = event.target.closest("[data-compare]");

        if (!checkbox) {
            return;
        }

        const id = checkbox.dataset.compare;

        if (checkbox.checked && compared.length >= 4) {
            checkbox.checked = false;
            return;
        }

        compared = checkbox.checked
            ? [...compared, id]
            : compared.filter((item) => item !== id);

        syncStorage();
        render();
    });

    // =====================================================
    // EXISTING SEARCH AND FILTER CONTROLS
    // =====================================================

    for (const key of filters) {
        byId(`oe-filter-${key}`).addEventListener("change", () => {
            visibleLimit = 6;
            render();
        });
    }

    [
        "oe-query",
        "oe-search-level",
        "oe-search-mode",
        "oe-search-country",
        "oe-search-budget"
    ].forEach((id) => {
        byId(id).addEventListener(
            id === "oe-query" ? "input" : "change",
            () => {
                visibleLimit = 6;
                render();
            }
        );
    });

    byId("oe-search-form").addEventListener("submit", (event) => {
        event.preventDefault();

        visibleLimit = 6;
        render();

        byId("oe-programmes").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

    byId("oe-sort").addEventListener("change", () => {
        visibleLimit = 6;
        render();
    });

    // =====================================================
    // INSTITUTION FILTERING AND COMPARISON
    // =====================================================

    const updateInstitutionCompare = () => {
        const bar = byId("oe-institution-compare-bar");

        bar.hidden = institutionCompared.length === 0;

        byId("oe-institution-compare-count").textContent =
            `${institutionCompared.length} selected`;

        byId("oe-inst-compare-show").disabled =
            institutionCompared.length < 2;
    };

    const filterInstitutions = () => {
        const country = byId("oe-inst-country").value;
        const level = byId("oe-inst-level").value;
        const subject = byId("oe-inst-subject").value;
        const mode = byId("oe-inst-mode").value;

        let visible = 0;

        root.querySelectorAll(".oe-institution-card").forEach((card) => {
            const show =
                (!country || card.dataset.country === country) &&
                (!level || card.dataset.levels.split("|").includes(level)) &&
                (!subject || card.dataset.subjects.split("|").includes(subject)) &&
                (!mode || card.dataset.modes.split("|").includes(mode));

            card.hidden = !show;

            if (show) {
                visible += 1;
            }
        });

        byId("oe-institution-empty").hidden = visible !== 0;
    };

    [
        "oe-inst-country",
        "oe-inst-level",
        "oe-inst-subject",
        "oe-inst-mode"
    ].forEach((id) => {
        byId(id).addEventListener("change", filterInstitutions);
    });

    byId("oe-inst-clear").addEventListener("click", () => {
        [
            "oe-inst-country",
            "oe-inst-level",
            "oe-inst-subject",
            "oe-inst-mode"
        ].forEach((id) => {
            byId(id).value = "";
        });

        filterInstitutions();
    });

    root.addEventListener("change", (event) => {
        const checkbox = event.target.closest("[data-institution-compare]");

        if (!checkbox) {
            return;
        }

        const id = checkbox.dataset.institutionCompare;

        if (checkbox.checked && institutionCompared.length >= 3) {
            checkbox.checked = false;
            return;
        }

        institutionCompared = checkbox.checked
            ? [...institutionCompared, id]
            : institutionCompared.filter((item) => item !== id);

        updateInstitutionCompare();
    });

    // =====================================================
    // LOAD PROGRAMMES
    // =====================================================

    try {
        programmes = await getOnlineEducationProgrammes();
        programmesLoaded = true;

        if (pendingHeroSearchQuery) {
            byId("oe-query").value = pendingHeroSearchQuery;
            pendingHeroSearchQuery = "";
        }

        render();

        if (byId("oe-query").value.trim()) {
            byId("oe-programmes").scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    } catch (error) {
        console.error(
            "Unable to load Online Education programmes.",
            error
        );

        byId("oe-result-count").textContent =
            "The discovery sample could not be loaded.";

        results.innerHTML = `
            <p class="oe-load-error">
                Please refresh the page to try again.
            </p>
        `;
    }
}