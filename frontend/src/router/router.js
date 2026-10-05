import MainLayout from "../layouts/MainLayout.js";
import StudyAbroadLayout from "../layouts/StudyAbroadLayout.js";
import AuthModal from "../components/AuthModal.js";

export function Router() {

    const path = window.location.pathname.replace(/\/+$/, "") || "/";

    let pageContent = "";
    let pageStatus = 200;

    switch (path) {

        // =====================================================
        // HOME
        // =====================================================

        case "/":
        case "/index.html":
            pageContent = MainLayout();
            break;


        // =====================================================
        // STUDY ABROAD
        // =====================================================

        case "/study-abroad":
            pageContent = StudyAbroadLayout();
            break;


        // =====================================================
        // UNKNOWN ROUTE
        // Do not silently render the homepage.
        // No new page is created.
        // =====================================================

        default:
            pageStatus = 404;

            pageContent = `
                <main
                    class="route-not-found"
                    aria-labelledby="route-not-found-title"
                >
                    <section class="route-not-found-content">

                        <p class="route-not-found-code">
                            404
                        </p>

                        <h1 id="route-not-found-title">
                            Page Not Found
                        </h1>

                        <p>
                            The page you are looking for could not be found.
                        </p>

                        <a href="/">
                            Go to EduConnect Home
                        </a>

                    </section>
                </main>
            `;

            break;
    }

    /*
     * Store the current route status so main.js can update
     * SEO/indexability information after rendering.
     */
    document.documentElement.dataset.routeStatus = String(pageStatus);

    return `
        ${pageContent}
        ${AuthModal()}
    `;
}

export default Router;