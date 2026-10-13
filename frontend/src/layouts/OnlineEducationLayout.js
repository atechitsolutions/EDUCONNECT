import Header from "./header.js";
import FooterSection from "../components/home/footerSection.js";
import OnlineEducationPage from "../pages/OnlineEducationPage.js";

export default function OnlineEducationLayout() {
    return `${Header()}${OnlineEducationPage()}${FooterSection()}`;
}
