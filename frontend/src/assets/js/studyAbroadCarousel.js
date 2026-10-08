/* =========================================================
   EDUCONNECT — STUDY ABROAD INFINITE CAROUSEL
========================================================= */

export function initStudyAbroadCarousel() {

    const carousel =
        document.querySelector(
            ".study-abroad-carousel"
        );

    if (!carousel) {
        return;
    }

    const viewport =
        carousel.querySelector(
            ".study-abroad-viewport"
        );

    const track =
        carousel.querySelector(
            ".study-abroad-track"
        );

    const nextButton =
        carousel.querySelector(
            ".study-abroad-next"
        );

    if (!viewport || !track || !nextButton) {
        return;
    }

    if (track.dataset.carouselInitialized === "true") {
        return;
    }

    function initializeCarousel() {

        if (track.dataset.carouselInitialized === "true") {
            return true;
        }

        const originalCards =
            Array.from(
                track.querySelectorAll(
                    ".institution-card"
                )
            );

        if (!originalCards.length) {
            return false;
        }

        track.dataset.carouselInitialized = "true";

        const originalCount =
            originalCards.length;

        originalCards.forEach((card) => {

            const clone =
                card.cloneNode(true);

            clone.dataset.carouselClone = "true";

            track.appendChild(clone);
        });

        const allCards =
            Array.from(
                track.querySelectorAll(
                    ".institution-card"
                )
            );

        let currentIndex = 0;
        let isAnimating = false;

        function getStep() {

            if (allCards.length < 2) {
                return allCards[0]
                    .getBoundingClientRect()
                    .width;
            }

            const first =
                allCards[0].getBoundingClientRect();

            const second =
                allCards[1].getBoundingClientRect();

            return second.left - first.left;
        }

        function moveTrack(animate = true) {

            const step = getStep();

            track.style.transition =
                animate
                    ? "transform 0.45s cubic-bezier(.2,.8,.2,1)"
                    : "none";

            track.style.transform =
                `translate3d(-${currentIndex * step}px,0,0)`;
        }

        if (allCards.length <= 1) {
            nextButton.disabled = true;
        }

        nextButton.addEventListener(
            "click",
            () => {

                if (
                    isAnimating ||
                    allCards.length <= 1
                ) {
                    return;
                }

                isAnimating = true;
                currentIndex += 1;
                moveTrack(true);
            }
        );

        track.addEventListener(
            "transitionend",
            (event) => {

                if (event.propertyName !== "transform") {
                    return;
                }

                if (currentIndex >= originalCount) {

                    currentIndex -= originalCount;

                    moveTrack(false);
                }

                requestAnimationFrame(() => {
                    isAnimating = false;
                });
            }
        );

        window.addEventListener(
            "resize",
            () => moveTrack(false)
        );

        moveTrack(false);
        return true;
    }


    if (initializeCarousel()) {
        return;
    }

    const observer =
        new MutationObserver(() => {

            if (initializeCarousel()) {
                observer.disconnect();
            }
        });

    observer.observe(track, {
        childList: true
    });
}

export default initStudyAbroadCarousel;
