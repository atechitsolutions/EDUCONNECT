import MainLayout from "../layouts/MainLayout.js";
import StudyAbroadLayout from "../layouts/StudyAbroadLayout.js";
import AuthModal from "../components/AuthModal.js";
import AdminDashboardPage from "../pages/AdminDashboard.js";
import AdminNewsPage from "../pages/AdminNewsPage.js";
import AdminCurrentAffairsPage from "../pages/AdminCurrentAffairsPage.js";
import AdminStudyAbroadPage from "../pages/AdminStudyAbroadPage.js";
import LatestNewsPage from "../components/latestNews.js";

export function Router() {
    const path = window.location.pathname.replace(/\/+$/, "") || "/";

    let pageContent = "";
    let pageStatus = 200;

    switch (true) {
        case path === "/":
        case path === "/index.html":
            pageContent = MainLayout();
            break;

        case path === "/study-abroad":
            pageContent = StudyAbroadLayout();
            break;

        case path === "/admin":
            pageContent = AdminDashboardPage();
            break;

        case path === "/admin/news":
            pageContent = AdminNewsPage();
            break;

        case path === "/admin/current-affairs":
            pageContent = AdminCurrentAffairsPage();
            break;

        case path === "/admin/study-abroad":
            pageContent = AdminStudyAbroadPage();
            break;

        case path === "/latest-news":
            pageContent = LatestNewsPage();
            break;

        case path.startsWith("/latest-news/"):
            pageContent = LatestNewsPage(
                decodeURIComponent(path.substring("/latest-news/".length))
            );
            break;

        default:
            pageStatus = 404;
            pageContent = `
                <main class="route-not-found" aria-labelledby="route-not-found-title">
                    <section class="route-not-found-content">
                        <p class="route-not-found-code">404</p>
                        <h1 id="route-not-found-title">Page Not Found</h1>
                        <p>The page you are looking for could not be found.</p>
                        <a href="/">Go to EduConnect Home</a>
                    </section>
                </main>
            `;
            break;
    }

    document.documentElement.dataset.routeStatus = String(pageStatus);

    return `${pageContent}${AuthModal()}`;
}

export default Router;
