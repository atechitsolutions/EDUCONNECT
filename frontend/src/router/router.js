import MainLayout from "../layouts/MainLayout.js";
import StudyAbroadLayout from "../layouts/StudyAbroadLayout.js";
import AuthModal from "../components/AuthModal.js";

export function Router() {

    const path = window.location.pathname;

    let pageContent = "";

    switch (path) {

        case "/":
        case "/index.html":
            pageContent = MainLayout();
            break;

        case "/study-abroad":
        case "/study-abroad/":
            pageContent = StudyAbroadLayout();
            break;

        default:
            pageContent = MainLayout();
            break;
    }

    return `
        ${pageContent}
        ${AuthModal()}
    `;
}

export default Router;