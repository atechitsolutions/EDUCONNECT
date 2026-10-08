function escapeHtml(value) {

    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


function createModalMarkup(institution) {

    const locationParts = [
        institution.city,
        institution.state,
        institution.country
    ].filter(Boolean);

    const location =
        locationParts.join(", ");

    const image =
        institution.coverImageUrl || "";

    const website =
        institution.website || "";

    const email =
        institution.email || "";

    const phone =
        institution.phone || "";

    const address =
        institution.address || "";

    return `
        <div
            class="study-abroad-details-overlay"
            data-study-abroad-details-overlay
            aria-hidden="false"
        >
            <div
                class="study-abroad-details-backdrop"
                data-study-abroad-details-close
            ></div>

            <article
                class="study-abroad-details-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="study-abroad-details-title"
            >
                <button
                    type="button"
                    class="study-abroad-details-close"
                    data-study-abroad-details-close
                    aria-label="Close institution details"
                >
                    ×
                </button>

                ${
                    image
                        ? `
                            <div class="study-abroad-details-image">
                                <img
                                    src="${escapeHtml(image)}"
                                    alt="${escapeHtml(institution.name)}"
                                    loading="lazy"
                                >
                            </div>
                        `
                        : ""
                }

                <div class="study-abroad-details-body">

                    <span class="study-abroad-details-type">
                        ${escapeHtml(institution.type || "Institution")}
                    </span>

                    <h2 id="study-abroad-details-title">
                        ${escapeHtml(institution.name)}
                    </h2>

                    ${
                        location
                            ? `
                                <p class="study-abroad-details-location">
                                    📍 ${escapeHtml(location)}
                                </p>
                            `
                            : ""
                    }

                    ${
                        institution.description
                            ? `
                                <p class="study-abroad-details-description">
                                    ${escapeHtml(institution.description)}
                                </p>
                            `
                            : ""
                    }

                    <div class="study-abroad-details-grid">

                        ${
                            address
                                ? `
                                    <div>
                                        <strong>Address</strong>
                                        <span>${escapeHtml(address)}</span>
                                    </div>
                                `
                                : ""
                        }

                        ${
                            email
                                ? `
                                    <div>
                                        <strong>Email</strong>
                                        <a href="mailto:${escapeHtml(email)}">
                                            ${escapeHtml(email)}
                                        </a>
                                    </div>
                                `
                                : ""
                        }

                        ${
                            phone
                                ? `
                                    <div>
                                        <strong>Phone</strong>
                                        <a href="tel:${escapeHtml(phone)}">
                                            ${escapeHtml(phone)}
                                        </a>
                                    </div>
                                `
                                : ""
                        }

                        ${
                            institution.verified
                                ? `
                                    <div>
                                        <strong>Verification</strong>
                                        <span>Verified by EduConnect</span>
                                    </div>
                                `
                                : ""
                        }
                    </div>

                    <div class="study-abroad-details-actions">

                        ${
                            website
                                ? `
                                    <a
                                        class="study-abroad-details-button"
                                        href="${escapeHtml(website)}"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Visit Website
                                        <span>↗</span>
                                    </a>
                                `
                                : ""
                        }

                        <button
                            type="button"
                            class="study-abroad-details-button secondary"
                            data-study-abroad-details-close
                        >
                            Close
                        </button>

                    </div>

                </div>
            </article>
        </div>
    `;
}


export function openInstitutionDetails(institution) {

    closeInstitutionDetails();

    document.body.insertAdjacentHTML(
        "beforeend",
        createModalMarkup(institution)
    );

    const overlay =
        document.querySelector(
            "[data-study-abroad-details-overlay]"
        );

    if (!overlay) {
        return;
    }

    overlay
        .querySelectorAll(
            "[data-study-abroad-details-close]"
        )
        .forEach((element) => {
            element.addEventListener(
                "click",
                closeInstitutionDetails
            );
        });

    document.body.classList.add(
        "study-abroad-details-open"
    );
}


export function closeInstitutionDetails() {

    const overlay =
        document.querySelector(
            "[data-study-abroad-details-overlay]"
        );

    if (overlay) {
        overlay.remove();
    }

    document.body.classList.remove(
        "study-abroad-details-open"
    );
}


export function bindInstitutionDetailButtons(
    container,
    institutionMap
) {

    if (!container || container.dataset.detailsBound === "true") {
        return;
    }

    container.dataset.detailsBound = "true";

    container.addEventListener(
        "click",
        (event) => {

            const button =
                event.target.closest(
                    ".institution-card-action[data-action='details']"
                );

            if (!button || !container.contains(button)) {
                return;
            }

            const card =
                button.closest(".institution-card");

            const id =
                card?.dataset.institutionId;

            if (!id) {
                return;
            }

            const institution =
                institutionMap.get(String(id));

            if (!institution) {
                return;
            }

            event.preventDefault();
            openInstitutionDetails(institution);
        }
    );

    document.addEventListener(
        "keydown",
        (event) => {
            if (event.key === "Escape") {
                closeInstitutionDetails();
            }
        }
    );
}
