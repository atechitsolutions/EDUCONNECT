import { getToken } from "./authService.js";

const API_BASE_URL = "http://localhost:8080/api";

function buildHeaders(includeJson = false) {
    const headers = {};

    if (includeJson) {
        headers["Content-Type"] = "application/json";
    }

    const token = getToken();
    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }

    return headers;
}

async function parseResponse(response) {
    const text = await response.text();
    let data = null;

    if (text) {
        try {
            data = JSON.parse(text);
        } catch {
            data = { message: text };
        }
    }

    if (!response.ok) {
        throw new Error(
            data?.message || `Request failed with status ${response.status}`
        );
    }

    return data;
}

export async function getPublishedNews() {
    const response = await fetch(`${API_BASE_URL}/home/news`);
    return parseResponse(response);
}

export async function getPublishedNewsById(id) {
    const response = await fetch(
        `${API_BASE_URL}/home/news/${encodeURIComponent(id)}`
    );
    return parseResponse(response);
}

export async function getAdminNews() {
    const response = await fetch(
        `${API_BASE_URL}/home/news/admin`,
        { headers: buildHeaders() }
    );
    return parseResponse(response);
}

export async function createNews(data) {
    const response = await fetch(
        `${API_BASE_URL}/home/news/admin`,
        {
            method: "POST",
            headers: buildHeaders(true),
            body: JSON.stringify(data)
        }
    );
    return parseResponse(response);
}

export async function updateNews(id, data) {
    const response = await fetch(
        `${API_BASE_URL}/home/news/admin/${encodeURIComponent(id)}`,
        {
            method: "PUT",
            headers: buildHeaders(true),
            body: JSON.stringify(data)
        }
    );
    return parseResponse(response);
}

export async function deleteNews(id) {
    const response = await fetch(
        `${API_BASE_URL}/home/news/admin/${encodeURIComponent(id)}`,
        {
            method: "DELETE",
            headers: buildHeaders()
        }
    );
    return parseResponse(response);
}

export async function getCurrentAffairs() {
    const response = await fetch(`${API_BASE_URL}/home/updates/current-affairs`);
    return parseResponse(response);
}

export async function getAdminUpdates() {
    const response = await fetch(
        `${API_BASE_URL}/home/updates/admin`,
        { headers: buildHeaders() }
    );
    return parseResponse(response);
}

export async function createCurrentAffair(data) {
    const response = await fetch(
        `${API_BASE_URL}/home/updates/admin`,
        {
            method: "POST",
            headers: buildHeaders(true),
            body: JSON.stringify({ ...data, type: "CURRENT_AFFAIRS" })
        }
    );
    return parseResponse(response);
}

export async function updateCurrentAffair(id, data) {
    const response = await fetch(
        `${API_BASE_URL}/home/updates/admin/${encodeURIComponent(id)}`,
        {
            method: "PUT",
            headers: buildHeaders(true),
            body: JSON.stringify({ ...data, type: "CURRENT_AFFAIRS" })
        }
    );
    return parseResponse(response);
}

export async function deleteCurrentAffair(id) {
    const response = await fetch(
        `${API_BASE_URL}/home/updates/admin/${encodeURIComponent(id)}`,
        {
            method: "DELETE",
            headers: buildHeaders()
        }
    );
    return parseResponse(response);
}
