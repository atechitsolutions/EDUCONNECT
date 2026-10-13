import { renderOnlineEducationCardPreview } from "../assets/js/onlineEducationCustomCards.js";
import { onlineEducationDefaultCards } from "../data/onlineEducationDefaultCards.js";
import { saveOnlineEducationCard } from "../services/onlineEducationService.js";

const sections = [
    { value: "levels", label: "Explore by education level", image: "required", fields: ["title", "description", "level", "image"] },
    { value: "subjects", label: "Explore by subject", image: "optional", fields: ["title", "subtitle", "description", "subject", "image"] },
    { value: "popular", label: "Popular online course topics", image: "optional", linkRequired: true, fields: ["title", "subtitle", "description", "subject", "provider", "link", "image"] },
    { value: "platforms", label: "Choose a platform for your learning goal", image: "required", linkRequired: true, fields: ["title", "subtitle", "description", "provider", "link", "image"] },
    { value: "pathways", label: "Learning pathways", image: "optional", fields: ["title", "subtitle", "description", "subject", "level", "image"] },
    { value: "institutions", label: "Universities and providers", image: "optional", linkRequired: true, fields: ["title", "provider", "description", "link", "country", "level", "subject", "mode", "image"] },
    { value: "programmes", label: "Find online courses and degree programmes", image: "optional", linkRequired: true, fields: ["title", "description", "subject", "provider", "level", "qualification", "mode", "country", "duration", "link", "image"] }
];

const escapeHTML = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
})[char]);

function resizeImage(file) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        const source = URL.createObjectURL(file);

        image.onload = () => {
            const scale = Math.min(1, 1600 / Math.max(image.width, image.height));
            const canvas = document.createElement("canvas");
            canvas.width = Math.round(image.width * scale);
            canvas.height = Math.round(image.height * scale);
            canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height);
            URL.revokeObjectURL(source);
            resolve(canvas.toDataURL("image/jpeg", 0.84));
        };

        image.onerror = () => {
            URL.revokeObjectURL(source);
            reject(new Error("That image could not be opened. Try a JPG, PNG or WebP file."));
        };

        image.src = source;
    });
}

export function initOnlineEducationAdminPage() {
    const page = document.querySelector(".oe-admin-page");
    if (!page) return;

    const form = document.getElementById("oe-admin-form");
    const sectionSelect = document.getElementById("oe-admin-section");
    const fileInput = document.getElementById("oe-admin-image");
    const preview = document.querySelector("[data-card-preview]");
    const fieldLabels = new Map([...form.querySelectorAll("[data-card-field]")]
        .map((label) => [label.dataset.cardField, label]));
    const dropArea = document.querySelector("[data-image-drop]");
    const message = document.querySelector("[data-admin-message]");
    let imageData = "";
    let editingId = "";

    function showMessage(text, isError = false) {
        message.textContent = text;
        message.classList.toggle("is-error", isError);
    }

    function currentCard() {
        const fields = new FormData(form);
        return {
            id: editingId || "preview-card",
            section: sectionSelect.value,
            title: String(fields.get("title") || "Your card title").trim(),
            subtitle: String(fields.get("subtitle") || "").trim(),
            description: String(fields.get("description") || "Add a short description to preview it here.").trim(),
            link: String(fields.get("link") || "").trim(),
            provider: String(fields.get("provider") || "").trim(),
            subject: String(fields.get("subject") || "").trim(),
            level: String(fields.get("level") || "").trim(),
            qualification: String(fields.get("qualification") || "").trim(),
            mode: String(fields.get("mode") || "").trim(),
            country: String(fields.get("country") || "").trim(),
            duration: String(fields.get("duration") || "").trim(),
            image: imageData
        };
    }

    function updateLivePreview() {
        const card = currentCard();
        const section = sections.find((item) => item.value === card.section);
        for (const [field, label] of fieldLabels) {
            label.hidden = field !== "section" && !section?.fields.includes(field);
        }
        const imageRequired = section?.image === "required";
        const imageInput = document.getElementById("oe-admin-image");
        if (imageInput) imageInput.required = imageRequired && !imageData;
        const linkInput = form.elements.namedItem("link");
        if (linkInput) linkInput.required = Boolean(section?.linkRequired);
        document.querySelector("[data-image-required]").textContent = imageRequired
            ? "Required for this card layout. The preview uses the same crop as the public page."
            : section?.image === "optional"
                ? "Optional. The public card uses its section-specific image crop."
                : "This section does not use a card photo.";
        document.querySelector("[data-image-drop]").hidden = section?.image === "none";
        document.querySelector("[data-image-preview]").hidden = section?.image === "none";
        const sectionClass = {
            levels: "oe-level-section", subjects: "oe-subject-section", popular: "oe-popular",
            platforms: "oe-platform-guide", pathways: "oe-pathways", institutions: "oe-universities",
            programmes: "oe-explorer"
        }[card.section];
        const gridClass = {
            levels: "oe-level-grid", subjects: "oe-subject-grid", popular: "oe-popular-grid",
            platforms: "oe-platform-grid", pathways: "oe-path-grid", institutions: "oe-provider-grid",
            programmes: "oe-programme-grid"
        }[card.section];
        const sectionDefaults = onlineEducationDefaultCards.filter((item) => item.section === card.section);
        const cardPosition = sectionDefaults.findIndex((item) => item.id === card.id);
        const previewIndex = cardPosition >= 0 ? cardPosition : 0;
        preview.innerHTML = `<div class="oe-page oe-live-card-page"><section class="oe-section ${sectionClass}"><div class="oe-container"><div class="${gridClass}">${renderOnlineEducationCardPreview(card, previewIndex)}</div></div></section></div>`;
    }

    function resetEditor() {
        form.reset();
        editingId = "";
        imageData = "";
        document.querySelector("[data-image-preview]").replaceChildren();
        document.getElementById("oe-admin-save").textContent = "Add card";
        showMessage("");
        updateLivePreview();
    }

    async function useImage(file) {
        if (!file) return;
        if (!file.type.startsWith("image/")) {
            showMessage("Choose an image file (JPG, PNG or WebP).", true);
            return;
        }
        if (file.size > 12 * 1024 * 1024) {
            showMessage("Choose an image smaller than 12 MB.", true);
            return;
        }

        try {
            imageData = await resizeImage(file);
            document.querySelector("[data-image-preview]").innerHTML = `<img src="${imageData}" alt="Selected image preview">`;
            updateLivePreview();
            showMessage("Photo added to the live card preview.");
        } catch (error) {
            showMessage(error.message, true);
        }
    }

    sectionSelect.addEventListener("change", updateLivePreview);
    form.addEventListener("input", updateLivePreview);
    form.addEventListener("change", updateLivePreview);

    fileInput.addEventListener("change", () => useImage(fileInput.files[0]));
    ["dragenter", "dragover"].forEach((eventName) => dropArea.addEventListener(eventName, (event) => {
        event.preventDefault();
        dropArea.classList.add("is-dragging");
    }));
    ["dragleave", "drop"].forEach((eventName) => dropArea.addEventListener(eventName, (event) => {
        event.preventDefault();
        dropArea.classList.remove("is-dragging");
    }));
    dropArea.addEventListener("drop", (event) => useImage(event.dataTransfer.files[0]));

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const section = sectionSelect.value;
        const fields = new FormData(form);
        const card = {
            id: editingId || `oe-card-${Date.now()}`,
            section,
            title: String(fields.get("title") || "").trim(),
            subtitle: String(fields.get("subtitle") || "").trim(),
            description: String(fields.get("description") || "").trim(),
            link: String(fields.get("link") || "").trim(),
            provider: String(fields.get("provider") || "").trim(),
            subject: String(fields.get("subject") || "").trim(),
            level: String(fields.get("level") || "").trim(),
            qualification: String(fields.get("qualification") || "").trim(),
            mode: String(fields.get("mode") || "").trim(),
            country: String(fields.get("country") || "").trim(),
            duration: String(fields.get("duration") || "").trim(),
            image: imageData
        };

        const sectionConfig = sections.find((item) => item.value === section);
        if (sectionConfig?.image === "required" && !card.image) {
            showMessage("Add a photo for this section before saving.", true);
            return;
        }
        if (sectionConfig?.linkRequired && !card.link) {
            showMessage("Add the official link for this section before saving.", true);
            return;
        }
        if (card.link && !/^https?:\/\//i.test(card.link)) {
            showMessage("Links must start with http:// or https://.", true);
            return;
        }

        try {
            await saveOnlineEducationCard(card);
            resetEditor();
            showMessage("Card saved to the server. Refresh the Online Education page to see it.");
        } catch (error) {
            showMessage(error.message || "The server could not save this card.", true);
        }
    });

    document.getElementById("oe-admin-reset").addEventListener("click", resetEditor);
    updateLivePreview();
}

export default function OnlineEducationAdminPage() {
    return `
        <main class="oe-admin-page">
            <div class="oe-admin-container">
                <header class="oe-admin-header">
                    <div>
                        <p class="oe-eyebrow">EDUCONNECT CONTENT</p>
                        <h1>Online Education cards</h1>
                        <p>Add cards to the public Online Education page. The existing section layout controls their display size and image crop.</p>
                    </div>
                    <a href="/online-education" class="oe-button oe-outline">View public page ↗</a>
                </header>

                <section class="oe-admin-panel">
                    <h2>Card details</h2>
                    <p class="oe-admin-help">Choose a section, enter its content and add a photo if that card style uses one.</p>
                    <form id="oe-admin-form">
                        <div class="oe-admin-fields">
                            <label data-card-field="section"><span>Page section</span><select name="section" id="oe-admin-section" required>
                                ${sections.map((section) => `<option value="${section.value}">${section.label}</option>`).join("")}
                            </select></label>
                            <label data-card-field="title"><span>Card title</span><input name="title" maxlength="90" required placeholder="For example, School learning"></label>
                            <label data-card-field="subtitle"><span>Short label / badge</span><input name="subtitle" maxlength="70" placeholder="Optional category or label"></label>
                            <label data-card-field="provider"><span>Provider or institution</span><input name="provider" maxlength="80" placeholder="Provider name"></label>
                            <label class="oe-admin-wide" data-card-field="description"><span>Description</span><textarea name="description" rows="3" maxlength="280" placeholder="A short description for the card"></textarea></label>
                            <label data-card-field="link"><span>Official link</span><input name="link" type="url" placeholder="https://example.com"></label>
                            <label data-card-field="subject"><span>Subject / stream</span><input name="subject" maxlength="1000" placeholder="Use | between multiple values"></label>
                            <label data-card-field="level"><span>Education level</span><input name="level" maxlength="1000" placeholder="Use | between multiple values"></label>
                            <label data-card-field="qualification"><span>Qualification / award</span><input name="qualification" maxlength="70" placeholder="Degree or certificate"></label>
                            <label data-card-field="mode"><span>Study mode</span><input name="mode" maxlength="1000" placeholder="Use | between multiple values"></label>
                            <label data-card-field="country"><span>Country / location</span><input name="country" maxlength="50" placeholder="For example, Global"></label>
                            <label data-card-field="duration"><span>Duration</span><input name="duration" maxlength="50" placeholder="For example, 12 months"></label>
                        </div>

                        <div class="oe-admin-editor-preview">
                            <div class="oe-admin-preview-heading"><div><h3>Live page preview</h3><p>Updates as you edit and uses the selected section’s real card layout.</p></div><span>PUBLIC CARD</span></div>
                            <div class="oe-admin-preview-stage" data-card-preview aria-live="polite"></div>
                            <div class="oe-admin-upload-row">
                                <div><h3>Card photo</h3><p data-image-required></p><div class="oe-admin-preview" data-image-preview></div></div>
                                <label class="oe-admin-drop" data-image-drop>
                                    <input id="oe-admin-image" type="file" accept="image/png,image/jpeg,image/webp">
                                    <span class="oe-admin-upload-icon">↑</span><b>Drop a photo here</b>
                                    <small>or choose an image · up to 12 MB</small><span class="oe-admin-choose">Choose photo</span>
                                </label>
                            </div>
                        </div>
                        <p class="oe-admin-message" data-admin-message aria-live="polite"></p>
                        <div class="oe-admin-actions">
                            <button class="oe-button oe-primary" id="oe-admin-save" type="submit">Add card</button>
                            <button class="oe-button oe-outline" id="oe-admin-reset" type="button">Clear form</button>
                        </div>
                    </form>
                </section>


            </div>
        </main>
    `;
}
