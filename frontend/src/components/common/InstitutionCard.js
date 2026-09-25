export default function InstitutionCard({
    item,
    type = "college"
}) {

    const {
        rank = "",
        name = "Institution",
        location = "",
        image = "",
        logo = "",
        score = "",
        rating = "",
        reviews = "",
        program = "",
        fees = "",
        ranking = "",
        highlight = "",
        category = "",
        actionLabel = "View Details"
    } = item;


    return `
        <article
            class="institution-card"
            data-type="${type}"
        >

            <!-- =================================================
                 VISUAL HEADER
            ================================================== -->

            <div class="institution-card-visual">

                ${
                    image
                        ? `
                            <img
                                src="${image}"
                                alt="${name}"
                                loading="lazy"
                            >
                        `
                        : ""
                }


                <div class="institution-card-overlay"></div>


                ${
                    logo
                        ? `
                            <div class="institution-card-logo">
                                <img
                                    src="${logo}"
                                    alt=""
                                    loading="lazy"
                                >
                            </div>
                        `
                        : ""
                }


                ${
                    score
                        ? `
                            <span class="institution-card-score">
                                ${score}/10
                            </span>
                        `
                        : ""
                }


                ${
                    rank
                        ? `
                            <span class="institution-card-rank">
                                #${rank}
                            </span>
                        `
                        : ""
                }


                <div class="institution-card-title">

                    <h3>
                        ${name}
                    </h3>

                    ${
                        location
                            ? `
                                <p>
                                    📍 ${location}
                                </p>
                            `
                            : ""
                    }

                </div>

            </div>


            <!-- =================================================
                 MAIN INFORMATION
            ================================================== -->

            <div class="institution-card-body">

                ${
                    category
                        ? `
                            <span class="institution-card-category">
                                ${category}
                            </span>
                        `
                        : ""
                }


                ${
                    program
                        ? `
                            <h4 class="institution-card-program">
                                ${program}
                            </h4>
                        `
                        : ""
                }


                <div class="institution-card-rating-row">

                    ${
                        rating
                            ? `
                                <span class="institution-card-rating">
                                    ★ ${rating}/5
                                </span>
                            `
                            : ""
                    }

                    ${
                        reviews
                            ? `
                                <span class="institution-card-reviews">
                                    ${reviews} reviews
                                </span>
                            `
                            : ""
                    }

                </div>


                ${
                    fees
                        ? `
                            <div class="institution-card-fees">

                                <strong>
                                    ${fees}
                                </strong>

                                <span>
                                    Total Fees
                                </span>

                            </div>
                        `
                        : ""
                }


                ${
                    ranking
                        ? `
                            <div class="institution-card-ranking">

                                ${ranking}

                            </div>
                        `
                        : ""
                }


                ${
                    highlight
                        ? `
                            <div class="institution-card-highlight">
                                ${highlight}
                            </div>
                        `
                        : ""
                }


                <!-- =================================================
                     ACTIONS
                ================================================== -->

                <div class="institution-card-actions">

                    <button
                        type="button"
                        class="institution-card-action"
                        data-action="details"
                    >
                        ${actionLabel}
                        <span>›</span>
                    </button>


                    ${
                        fees
                            ? `
                                <button
                                    type="button"
                                    class="institution-card-action"
                                    data-action="fees"
                                >
                                    Courses & Fees
                                    <span>›</span>
                                </button>
                            `
                            : ""
                    }


                    <button
                        type="button"
                        class="institution-card-action"
                        data-action="compare"
                    >
                        Compare
                        <span>›</span>
                    </button>

                </div>

            </div>

        </article>
    `;
}