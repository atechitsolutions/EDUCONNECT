import { onlineEducationProgrammes } from "../data/onlineEducationProgrammes.js";
import { onlineEducationDefaultCards } from "../data/onlineEducationDefaultCards.js";

const API_URL = "http://localhost:8080/api/online-education/cards";
const TOKEN_KEY = "educonnect_token";

function authHeaders(json = false) {
    const token = localStorage.getItem(TOKEN_KEY);
    return {
        ...(json ? { "Content-Type": "application/json" } : {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {})
    };
}

async function request(path = "", options = {}) {
    let response;
    try {
        response = await fetch(`${API_URL}${path}`, {
            ...options,
            headers: { ...authHeaders(Boolean(options.body)), ...options.headers }
        });
    } catch {
        throw new Error("Could not reach the EduConnect server. Start the backend and try again.");
    }

    if (!response.ok) {
        const message = response.status === 401 || response.status === 403
            ? "Admin sign-in is required to manage online education cards."
            : `The server could not complete this request (${response.status}).`;
        throw new Error(message);
    }

    if (response.status === 204) return null;
    return response.json();
}

export async function getOnlineEducationCards() {
    return request();
}

export async function getOnlineEducationCardOverrides() {
    const [cards, removed] = await Promise.all([
        getOnlineEducationCards(),
        request("/removed")
    ]);
    return { cards, removedIds: new Set(removed.ids || []) };
}

export async function getOnlineEducationAdminCards() {
    const savedCards = await request("/admin");
    const activeById = new Map(savedCards.filter((card) => card.active).map((card) => [card.id, card]));
    const savedById = new Map(savedCards.map((card) => [card.id, card]));
    const defaults = onlineEducationDefaultCards
        .map((card) => ({ ...card, ...(savedById.get(card.id) || {}), isDefault: true }))
        .filter((card) => card.active !== false);
    const additions = savedCards.filter((card) => card.active && !onlineEducationDefaultCards.some((base) => base.id === card.id));
    return [...defaults, ...additions];
}

export async function saveOnlineEducationCard(card) {
    const defaultCard = onlineEducationDefaultCards.find((item) => item.id === card.id);
    const records = await request("/admin");
    const exists = records.some((item) => item.id === card.id);
    const payload = {
        ...card,
        section: card.section || defaultCard?.section,
        active: true
    };
    return request(exists ? `/admin/${encodeURIComponent(card.id)}` : "/admin", {
        method: exists ? "PUT" : "POST",
        body: JSON.stringify(payload)
    });
}

export async function deleteOnlineEducationCard(id) {
    const records = await request("/admin");
    const exists = records.some((item) => item.id === id);
    if (!exists) {
        const defaultCard = onlineEducationDefaultCards.find((item) => item.id === id);
        if (!defaultCard) throw new Error("This card is no longer available.");
        return request("/admin", {
            method: "POST",
            body: JSON.stringify({ ...defaultCard, active: false })
        });
    }
    return request(`/admin/${encodeURIComponent(id)}`, { method: "DELETE" });
}

export async function getOnlineEducationProgrammes() {
    const [savedCards, removed] = await Promise.all([request(), request("/removed")]);
    const removedIds = new Set(removed.ids || []);
    const programmeRecords = savedCards.filter((card) => card.section === "programmes");
    const savedById = new Map(programmeRecords.map((card) => [card.id, card]));
    const programmes = onlineEducationProgrammes.filter((programme) => !removedIds.has(programme.id)).map((programme) => {
        const override = savedById.get(programme.id);
        if (!override) return { ...programme };
        return {
            ...programme,
            title: override.title || programme.title,
            providerName: override.provider || programme.providerName,
            subject: override.subject || programme.subject,
            educationLevel: override.level || programme.educationLevel,
            qualificationType: override.qualification || programme.qualificationType,
            studyMode: override.mode || programme.studyMode,
            country: override.country || programme.country,
            duration: override.duration || programme.duration,
            officialProgramUrl: override.link || programme.officialProgramUrl,
            description: override.description || "",
            image: override.image || ""
        };
    });
    const addedProgrammes = programmeRecords
        .filter((card) => !onlineEducationProgrammes.some((programme) => programme.id === card.id))
        .map((card) => ({
            id: card.id,
            title: card.title,
            providerName: card.provider || "EduConnect listing",
            providerType: "Online learning platform",
            subject: card.subject || "Other",
            educationLevel: card.level || "Online Degree",
            qualificationType: card.qualification || card.level || "Course",
            studyMode: card.mode || "Fully online",
            country: card.country || "Global",
            duration: card.duration || "Check provider website",
            tuitionAmount: null,
            currency: null,
            feePeriod: null,
            difficultyLevel: "Check provider website",
            certificateAvailable: null,
            officialProgramUrl: card.link || "#",
            sourceUrl: card.link || "#",
            image: card.image || "",
            isIllustrative: true
        }));
    return [...programmes, ...addedProgrammes];
}
