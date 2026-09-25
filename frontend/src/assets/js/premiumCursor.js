export function initPremiumCursor() {

    /* =====================================================
       DISABLE ON TOUCH DEVICES
    ====================================================== */

    if (
        window.matchMedia(
            "(hover: none), (pointer: coarse)"
        ).matches
    ) {
        return;
    }


    /* =====================================================
       PREVENT DUPLICATE CURSOR
    ====================================================== */

    if (
        document.querySelector(
            ".premium-cursor"
        )
    ) {
        return;
    }


    /* =====================================================
       CREATE CUSTOM CURSOR
    ====================================================== */

    const cursor =
        document.createElement(
            "div"
        );

    cursor.className =
        "premium-cursor";


    cursor.innerHTML = `
        <div class="paper-plane-cursor">
            <div class="plane-wing"></div>
            <div class="plane-fold"></div>
        </div>
    `;


    document.body.appendChild(
        cursor
    );


    /* =====================================================
       MOUSE STATE
    ====================================================== */

    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;


    /* =====================================================
       MOUSE POSITION
    ====================================================== */

    document.addEventListener(
        "mousemove",
        (event) => {

            mouseX =
                event.clientX;

            mouseY =
                event.clientY;

        }
    );


    /* =====================================================
       SMOOTH MOVEMENT
    ====================================================== */

    function animateCursor() {

        currentX +=
            (mouseX - currentX) * 0.22;

        currentY +=
            (mouseY - currentY) * 0.22;


        cursor.style.transform = `
            translate3d(
                ${currentX}px,
                ${currentY}px,
                0
            )
        `;


        requestAnimationFrame(
            animateCursor
        );

    }


    animateCursor();


    /* =====================================================
       INTERACTIVE ELEMENTS
    ====================================================== */

    const interactiveSelector = `
        button,
        a,
        .premium-card,
        .premium-category-card,
        .video-review-card,
        .news-card,
        .small-card,
        .hero-search,
        .hero-search-btn,
        .hero-primary-btn,
        .hero-secondary-btn,
        .category-arrow,
        .premium-card-link,
        .video-review-link,
        [role="button"]
    `;


    /* =====================================================
       HOVER START
    ====================================================== */

    document.addEventListener(
        "mouseover",
        (event) => {

            const target =
                event.target.closest(
                    interactiveSelector
                );


            if (!target) {
                return;
            }


            cursor.classList.add(
                "plane-active"
            );


            document.body.classList.add(
                "plane-cursor-active"
            );

        }
    );


    /* =====================================================
       HOVER END
    ====================================================== */

    document.addEventListener(
        "mouseout",
        (event) => {

            const target =
                event.target.closest(
                    interactiveSelector
                );


            if (!target) {
                return;
            }


            /*
                Ignore movement between
                children of the same target.
            */

            const relatedTarget =
                event.relatedTarget;


            if (
                relatedTarget &&
                target.contains(
                    relatedTarget
                )
            ) {
                return;
            }


            cursor.classList.remove(
                "plane-active"
            );


            document.body.classList.remove(
                "plane-cursor-active"
            );

        }
    );


    /* =====================================================
       INPUTS
    ====================================================== */

    document.addEventListener(
        "focusin",
        (event) => {

            if (
                event.target.matches(
                    "input, textarea, select"
                )
            ) {

                cursor.classList.remove(
                    "plane-active"
                );


                document.body.classList.remove(
                    "plane-cursor-active"
                );

            }

        }
    );


    /* =====================================================
       MOUSE LEAVE WINDOW
    ====================================================== */

    document.addEventListener(
        "mouseleave",
        () => {

            cursor.classList.remove(
                "plane-active"
            );


            document.body.classList.remove(
                "plane-cursor-active"
            );

        }
    );

}


export default initPremiumCursor;