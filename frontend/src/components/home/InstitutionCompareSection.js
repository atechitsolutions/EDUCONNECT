const categories = {
    university: [
        { name: "University of Delhi", type: "Central University", place: "New Delhi", programs: "B.Com • UG • PG • Research", fees: "₹1.25 Lacs", rating: "4.8 / 5", score: "9.2 / 10" },
        { name: "Indian Institute of Science", type: "Research University", place: "Bengaluru", programs: "Science • Research", fees: "₹1.10 Lacs", rating: "4.9 / 5", score: "9.6 / 10" },
        { name: "Jawaharlal Nehru University", type: "Central University", place: "New Delhi", programs: "Arts • Humanities • Social Sciences", fees: "₹1.05 Lacs", rating: "4.7 / 5", score: "9.0 / 10" },
        { name: "Banaras Hindu University", type: "Central University", place: "Varanasi", programs: "Multidisciplinary • UG • PG", fees: "₹1.15 Lacs", rating: "4.7 / 5", score: "8.9 / 10" }
    ],
    college: [
        { name: "Christ University", type: "Private University", place: "Bengaluru", programs: "BBA • BCA • B.Com • BA", fees: "₹3.25 Lacs", rating: "4.6 / 5", score: "8.8 / 10" },
        { name: "IIM Ahmedabad", type: "Management Institute", place: "Ahmedabad", programs: "MBA", fees: "₹12.50 Lacs", rating: "4.9 / 5", score: "9.8 / 10" },
        { name: "IIM Bangalore", type: "Management Institute", place: "Bengaluru", programs: "MBA", fees: "₹12.75 Lacs", rating: "4.9 / 5", score: "9.7 / 10" },
        { name: "University of Mumbai", type: "Public University", place: "Mumbai", programs: "B.Com • UG • PG", fees: "₹1.35 Lacs", rating: "4.6 / 5", score: "8.7 / 10" }
    ],
    school: [
        { name: "Delhi Public School, R.K. Puram", type: "CBSE School", place: "New Delhi", programs: "Nursery • Primary • Secondary • Senior Secondary", fees: "Not listed", rating: "4.8 / 5", score: "9.2 / 10" },
        { name: "The Doon School", type: "ICSE School", place: "Dehradun, Uttarakhand", programs: "Middle • Secondary • Senior Secondary", fees: "Not listed", rating: "4.8 / 5", score: "9.4 / 10" },
        { name: "Modern School", type: "CBSE School", place: "New Delhi", programs: "Middle • Secondary • Senior Secondary", fees: "Not listed", rating: "4.7 / 5", score: "9.0 / 10" },
        { name: "Ryan International School", type: "CBSE School", place: "Mumbai", programs: "Nursery • Primary • Secondary • Senior Secondary", fees: "Not listed", rating: "4.6 / 5", score: "8.7 / 10" }
    ],
    boarding: [
        { name: "The Doon School", type: "Boys Boarding School", place: "Dehradun, Uttarakhand", programs: "Boarding • Residential • K–12", fees: "Not listed", rating: "4.8 / 5", score: "9.4 / 10" },
        { name: "Mayo College", type: "Boys Boarding School", place: "Ajmer, Rajasthan", programs: "Boarding • Residential • K–12", fees: "Not listed", rating: "4.7 / 5", score: "9.2 / 10" },
        { name: "The Lawrence School", type: "Co-educational Boarding", place: "Sanawar, Himachal Pradesh", programs: "Boarding • Residential • K–12", fees: "Not listed", rating: "4.7 / 5", score: "9.0 / 10" },
        { name: "Welham Girls' School", type: "Girls Boarding School", place: "Dehradun, Uttarakhand", programs: "Boarding • Residential • K–12", fees: "Not listed", rating: "4.7 / 5", score: "9.1 / 10" }
    ]
};

const labels = { type: "Institution type", place: "Location", programs: "Programs / grades", fees: "Fees shown", rating: "Listing rating", score: "Atech review score" };
const choices = [["university", "Universities"], ["college", "Colleges"], ["school", "Schools"], ["boarding", "Boarding schools"]];

function options(items, selected) {
    return items.map((item, i) => `<option value="${i}" ${i === selected ? "selected" : ""}>${item.name}</option>`).join("");
}

function rows(left, right) {
    return Object.entries(labels).map(([key, label]) => {
        const a = left[key] || "Not listed";
        const b = right[key] || "Not listed";
        return `<div class="institution-compare-row ${a === b ? "is-same" : "is-different"}"><div><span>${label}</span><strong>${a}</strong></div><div><span>${label}</span><strong>${b}</strong></div></div>`;
    }).join("");
}

export function InstitutionCompareSection() {
    const list = categories.university;
    return `<section class="institution-compare-section" aria-labelledby="institution-compare-title">
        <header class="institution-compare-heading"><span>SIDE-BY-SIDE COMPARISON</span><h2 id="institution-compare-title">Compare universities, colleges &amp; schools</h2><p>Pick a category and two institutions to see their listed details and differences side by side.</p></header>
        <div class="institution-compare-controls">
            <label>Category<select class="institution-compare-category" aria-label="Choose category">${choices.map(([v, t]) => `<option value="${v}">${t}</option>`).join("")}</select></label>
            <label>Institution 1<select class="institution-compare-left" aria-label="Choose first institution">${options(list, 0)}</select></label>
            <span class="institution-compare-vs" aria-hidden="true">VS</span>
            <label>Institution 2<select class="institution-compare-right" aria-label="Choose second institution">${options(list, 1)}</select></label>
            <button type="button" class="institution-compare-submit">Compare institutions <span>→</span></button>
        </div>
        <div class="institution-compare-result" aria-live="polite"><div class="institution-compare-result-heading"><span>COMPARISON</span><p class="institution-compare-summary"></p></div>
            <div class="institution-compare-column-head"><strong class="institution-compare-left-name">${list[0].name}</strong><strong class="institution-compare-right-name">${list[1].name}</strong></div>
            <div class="institution-compare-rows">${rows(list[0], list[1])}</div>
            <small>Values come from the details currently listed on this site. “Not listed” means a detail is not currently shown.</small>
        </div>
    </section>`;
}

export function initInstitutionCompareSection(root = document) {
    const section = root.querySelector(".institution-compare-section");
    if (!section || section.dataset.ready) return;
    section.dataset.ready = "true";
    const category = section.querySelector(".institution-compare-category");
    const leftSelect = section.querySelector(".institution-compare-left");
    const rightSelect = section.querySelector(".institution-compare-right");
    const leftTitle = section.querySelector(".institution-compare-left-name");
    const rightTitle = section.querySelector(".institution-compare-right-name");
    const rowsNode = section.querySelector(".institution-compare-rows");
    const summary = section.querySelector(".institution-compare-summary");
    const update = () => {
        const items = categories[category.value];
        let li = Number(leftSelect.value), ri = Number(rightSelect.value);
        if (li === ri && items.length > 1) { ri = (li + 1) % items.length; rightSelect.value = String(ri); }
        const left = items[li], right = items[ri];
        leftTitle.textContent = left.name;
        rightTitle.textContent = right.name;
        rowsNode.innerHTML = rows(left, right);
        const count = Object.keys(labels).filter((key) => (left[key] || "Not listed") !== (right[key] || "Not listed")).length;
        summary.textContent = `${count} listed ${count === 1 ? "difference" : "differences"} highlighted`;
    };
    const updateCategory = () => {
        const items = categories[category.value];
        leftSelect.innerHTML = options(items, 0);
        rightSelect.innerHTML = options(items, 1);
        update();
    };
    category.addEventListener("change", updateCategory);
    leftSelect.addEventListener("change", update);
    rightSelect.addEventListener("change", update);
    section.querySelector(".institution-compare-submit").addEventListener("click", update);
    update();
}

export default InstitutionCompareSection;
