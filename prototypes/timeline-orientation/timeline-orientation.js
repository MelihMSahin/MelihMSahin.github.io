const timeline = document.querySelector("#timeline");
const supportingGroups = document.querySelector("#supporting-groups");
const description = document.querySelector("#variant-description");
const params = new URLSearchParams(window.location.search);
const orientation = params.get("orientation") === "adaptive" ? "adaptive" : "vertical";
const requestedOrder = params.get("order") === "recent" ? "recent" : "older";
const variant = `${orientation}-${requestedOrder}`;
const desktopQuery = window.matchMedia("(min-width: 64rem)");
let activeOpener;

const chapterNames = {
  "Early Foundations": "early",
  University: "university",
  "Professional Work": "professional"
};

const supportingEntries = {
  "Early Foundations": [
    { title: "Dummy supporting entry · foundations", date: "Test date: 2020", dummy: true }
  ],
  University: [
    { title: "GMTK game development competitions", date: "2022 and 2023" },
    { title: "Course representative, lab demonstrator and Mathematics Society events organiser", date: "2023-2025" },
    { title: "PetMinder: Team Software Engineering Project", date: "January-April 2024" },
    { title: "Big Data Analysis with Apache Spark", date: "October-December 2024" },
    { title: "Dummy supporting entry · university", date: "Test date: 2025", dummy: true },
    { title: "Dummy supporting entry · university", date: "Test date: 2025", dummy: true }
  ],
  "Professional Work": [
    { title: "Student Ambassador and Onsite Manager at Balans International Ltd", date: "2025" },
    { title: "Firebrand: CompanyLens MVP training project", date: "28 September-2 October 2026" },
    { title: "Dummy supporting entry · professional work", date: "Test date: 2026", dummy: true }
  ]
};

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function renderMilestone(milestone) {
  const title = escapeHtml(milestone.title);
  const date = escapeHtml(milestone.date);
  const chapter = escapeHtml(milestone.chapter);
  return `
    <li class="timeline-item chapter-${chapterNames[milestone.chapter]}">
      <button class="milestone-card" type="button" data-milestone-id="${escapeHtml(milestone.id)}"
        aria-label="Preview ${title}, ${date}, ${chapter}">
        <span class="chapter-label">${chapter}</span>
        <strong>${title}</strong>
        <time>${date}</time>
      </button>
    </li>`;
}

function renderSupportingGroups() {
  return Object.entries(supportingEntries).map(([chapter, entries]) => `
    <details class="supporting-group">
      <summary>${escapeHtml(chapter)} · ${entries.length} supporting entries</summary>
      <ul>
        ${entries.map((entry) => `
          <li>
            <strong>${escapeHtml(entry.title)}</strong>
            <span>${escapeHtml(entry.date)}</span>
            ${entry.dummy ? '<span class="dummy-label">Dummy test content · not a portfolio fact</span>' : ""}
          </li>`).join("")}
      </ul>
    </details>`).join("");
}

function isHorizontalDesktop() {
  return orientation === "adaptive" && desktopQuery.matches;
}

function renderMilestones(milestones) {
  const focusedMilestoneId = timeline.contains(document.activeElement)
    ? document.activeElement.dataset.milestoneId
    : undefined;
  const openerId = activeOpener?.dataset.milestoneId;
  const horizontal = isHorizontalDesktop();
  const chronological = [...milestones];
  if (!horizontal && requestedOrder === "recent") chronological.reverse();

  timeline.dataset.flow = horizontal ? "horizontal" : "vertical";
  timeline.setAttribute(
    "aria-label",
    horizontal
      ? "Required milestones ordered from older to newer, left to right"
      : `Required milestones ordered ${requestedOrder === "recent" ? "newer to older" : "older to newer"}`
  );
  timeline.innerHTML = chronological.map(renderMilestone).join("");

  const replacements = [...timeline.querySelectorAll("[data-milestone-id]")];
  if (openerId) {
    activeOpener = replacements.find((button) => button.dataset.milestoneId === openerId);
  }
  if (focusedMilestoneId) {
    replacements.find((button) => button.dataset.milestoneId === focusedMilestoneId)?.focus();
  }
}

function render(milestones) {
  document.body.dataset.orientation = orientation;
  document.body.dataset.order = requestedOrder;

  const currentVariantLink = document.querySelector(`[data-variant="${variant}"]`);
  currentVariantLink?.setAttribute("aria-current", "page");

  const orderLabel = requestedOrder === "recent" ? "recent-first on phones" : "older-first";
  description.textContent = orientation === "adaptive"
    ? `This candidate is vertical on phones and horizontal on desktop. Horizontal chronology stays older to newer, left to right; the ${orderLabel} comparison applies to vertical layouts.`
    : `This candidate stays vertical at phone and desktop sizes, with milestones ordered ${requestedOrder === "recent" ? "newer to older" : "older to newer"}.`;

  renderMilestones(milestones);
  supportingGroups.innerHTML = renderSupportingGroups();
  desktopQuery.addEventListener("change", () => renderMilestones(milestones));

  const preview = document.querySelector("#milestone-preview");
  const previewTitle = document.querySelector("#preview-title");

  timeline.addEventListener("click", (event) => {
    const button = event.target.closest("[data-milestone-id]");
    if (!button) return;

    const milestone = milestones.find((item) => item.id === button.dataset.milestoneId);
    if (!milestone) throw new Error(`Unknown milestone: ${button.dataset.milestoneId}`);

    activeOpener = button;
    document.querySelector("#preview-chapter").textContent = milestone.chapter;
    previewTitle.textContent = milestone.title;
    document.querySelector("#preview-date").textContent = milestone.date;
    document.querySelector("#preview-summary").textContent = milestone.summary;
    preview.showModal();
    previewTitle.focus();
  });

  document.querySelector(".dialog-close").addEventListener("click", () => preview.close());
  preview.addEventListener("close", () => {
    if (activeOpener?.isConnected) activeOpener.focus();
  });
}

async function loadMilestones() {
  const response = await fetch(new URL("../shared/milestones.json", import.meta.url));
  if (!response.ok) throw new Error(`Could not load shared milestones (${response.status})`);
  const inventory = await response.json();
  render(inventory.milestones);
}

loadMilestones().catch((error) => {
  document.querySelector("main").innerHTML =
    '<p role="alert">The shared milestone content could not be loaded. Serve the repository over HTTP and reload this prototype.</p>';
  console.error(error);
});
