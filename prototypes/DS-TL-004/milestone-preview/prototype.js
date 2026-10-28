const timeline = document.querySelector("#milestones");
const preview = document.querySelector("#milestone-preview");
const previewTitle = document.querySelector("#preview-title");
const previewChapter = document.querySelector("#preview-chapter");
const previewDate = document.querySelector("#preview-date");
const previewSummary = document.querySelector("#preview-summary");
const storyLink = document.querySelector("#story-link");
const closeButton = document.querySelector(".close-button");
const storyReturnKey = "milestone-preview-return";
let lastTrigger;
let milestonesById = new Map();
let milestonesLoaded = false;

function createMilestone(milestone) {
  const item = document.createElement("li");
  item.className = "timeline-item";

  const button = document.createElement("button");
  button.className = "milestone-button";
  button.type = "button";
  button.dataset.milestoneId = milestone.id;
  button.setAttribute("aria-label", `Preview ${milestone.title}, ${milestone.date}`);

  const chapter = document.createElement("span");
  chapter.className = "milestone-chapter";
  chapter.textContent = milestone.chapter;

  const title = document.createElement("span");
  title.className = "milestone-title";
  title.textContent = milestone.title;

  const date = document.createElement("time");
  date.className = "milestone-date";
  date.textContent = milestone.date;

  const affordance = document.createElement("span");
  affordance.className = "milestone-affordance";
  affordance.setAttribute("aria-hidden", "true");
  affordance.textContent = "Preview";

  button.append(chapter, title, date, affordance);
  item.append(button);
  return item;
}

function openPreview(button, milestone) {
  lastTrigger = button;
  previewChapter.textContent = milestone.chapter;
  previewTitle.textContent = milestone.title;
  previewDate.textContent = milestone.date;
  previewSummary.textContent = milestone.summary;
  storyLink.hidden = milestone.id !== "deloitte-role";
  preview.showModal();
  previewTitle.focus();
}

timeline.addEventListener("click", (event) => {
  const button = event.target.closest("[data-milestone-id]");
  if (!button) return;

  const selected = milestonesById.get(button.dataset.milestoneId);
  if (!selected) throw new Error(`Unknown milestone: ${button.dataset.milestoneId}`);
  openPreview(button, selected);
});

closeButton.addEventListener("click", () => preview.close());
preview.addEventListener("keydown", (event) => {
  if (event.key !== "Tab") return;

  const focusable = storyLink.hidden ? [closeButton] : [storyLink, closeButton];
  const currentIndex = focusable.indexOf(document.activeElement);
  const nextIndex = currentIndex === -1
    ? (event.shiftKey ? focusable.length - 1 : 0)
    : (currentIndex + (event.shiftKey ? -1 : 1) + focusable.length) % focusable.length;

  event.preventDefault();
  focusable[nextIndex].focus();
});
preview.addEventListener("close", () => {
  if (lastTrigger?.isConnected) lastTrigger.focus();
});

storyLink.addEventListener("click", () => {
  sessionStorage.setItem(storyReturnKey, JSON.stringify({
    milestoneId: lastTrigger?.dataset.milestoneId,
    scrollY: window.scrollY
  }));
});

function restoreFromStory() {
  if (!milestonesLoaded) return;
  const saved = sessionStorage.getItem(storyReturnKey);
  if (!saved) return;

  sessionStorage.removeItem(storyReturnKey);
  const state = JSON.parse(saved);
  window.scrollTo(0, state.scrollY);
  const button = Array.from(timeline.querySelectorAll("[data-milestone-id]"))
    .find((candidate) => candidate.dataset.milestoneId === state.milestoneId);
  if (button) requestAnimationFrame(() => button.focus({ preventScroll: true }));
}

window.addEventListener("pageshow", restoreFromStory);

async function initialize() {
  const response = await fetch("../../shared/milestones.json");
  if (!response.ok) {
    throw new Error(`Could not load shared milestones (${response.status})`);
  }
  const data = await response.json();
  if (!Array.isArray(data.milestones)) {
    throw new Error("Shared milestone data must include a milestones array");
  }
  milestonesById = new Map(data.milestones.map((milestone) => [milestone.id, milestone]));
  const fragment = document.createDocumentFragment();
  data.milestones.forEach((milestone) => fragment.append(createMilestone(milestone)));
  timeline.replaceChildren(fragment);
  milestonesLoaded = true;
  restoreFromStory();
}

initialize().catch((error) => {
  timeline.replaceChildren();
  const item = document.createElement("li");
  item.className = "loading error";
  item.textContent = "The milestone list could not be loaded. Serve the repository over HTTP and reload.";
  timeline.append(item);
  console.error(error);
});
