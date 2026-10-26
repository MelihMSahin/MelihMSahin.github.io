const app = document.querySelector("#app");
const variant = document.body.dataset.variant;
let prototypeMilestones = [];

const chapters = [
  { id: "early-foundations", name: "Early Foundations", color: "var(--early)", marker: "01" },
  { id: "university", name: "University", color: "var(--university)", marker: "02" },
  { id: "professional-work", name: "Professional Work", color: "var(--professional)", marker: "03" }
];

const prototypeNames = {
  spatial: "A · Spatial overworld",
  illustrated: "B · Illustrated chapter index",
  simple: "C · Chapter-based timeline"
};

function chapterFor(id) {
  return chapters.find((chapter) => chapter.id === id);
}

function milestoneButton(milestone, options = {}) {
  const chapterLabel = options.showChapter
    ? `<span class="milestone-chapter">${milestone.chapter}</span>`
    : "";

  return `
    <li class="milestone-row">
      <button class="milestone-select" type="button" data-milestone-id="${milestone.id}"
        aria-label="Preview ${milestone.title}, ${milestone.date}">
        <strong>${milestone.title}</strong>
        <time>${milestone.date}</time>
        ${chapterLabel}
      </button>
    </li>`;
}

function chapterMilestones(chapter) {
  return prototypeMilestones.filter((milestone) => milestone.chapter === chapter.name);
}

function chapterLink(chapter, className = "chapter-card") {
  return `
    <a class="${className}" href="#chapter-${chapter.id}"
      style="--chapter-color:${chapter.color}"
      aria-label="Open ${chapter.name} chapter">
      <span class="chapter-art" aria-hidden="true">${chapter.marker}</span>
      <span class="chapter-copy">
        <span class="chapter-title">${chapter.name}</span>
        <span class="chapter-summary">${chapterMilestones(chapter).length} timeline milestones</span>
        ${className === "chapter-card" ? '<span class="chapter-arrow">Open chapter →</span>' : ""}
      </span>
    </a>`;
}

function timelineMarkup(milestones, options = {}) {
  return `<ul class="timeline-list">${milestones
    .map((milestone) => milestoneButton(milestone, options))
    .join("")}</ul>`;
}

function overviewMarkup(milestones) {
  return `
    <section id="milestones" aria-labelledby="overview-heading">
      <p class="prototype-note">Experimental prototype · ${prototypeNames[variant]}. This comparison is not an approved design.</p>
      <h1 class="view-heading" id="overview-heading" tabindex="-1">Timeline milestones</h1>
      <p class="view-intro">The seven milestones are listed here together. Open any milestone for its short description, or explore the life chapters for another way to browse.</p>
      <div class="section-top">
        <h2>All seven milestones</h2>
      </div>
      ${timelineMarkup(milestones, { showChapter: true })}
      <div class="chapter-explore">
        <a class="chapter-link" href="#chapters">Explore life chapters <span aria-hidden="true">→</span></a>
      </div>
    </section>`;
}

function spatialMarkup(milestones) {
  const directItems = milestones
    .map((milestone) => milestoneButton(milestone, { showChapter: true }))
    .join("");

  return `
    <section id="chapters" aria-labelledby="chapters-heading" hidden>
      <h1 class="view-heading" id="chapters-heading" tabindex="-1">Explore life chapters</h1>
      <nav class="view-nav" aria-label="Timeline navigation">
        <a class="back-link" href="#milestones">← Back to milestones</a>
      </nav>
      <p class="view-intro">Choose a chapter on the illustrated map, or use the separate milestone list to open a milestone directly.</p>
      <div class="map-and-list">
        <section class="map-panel" aria-labelledby="map-heading">
          <h2 id="map-heading">Illustrated chapter map</h2>
          <div class="world-map">
            <svg class="map-trail" viewBox="0 0 600 420" preserveAspectRatio="none" aria-hidden="true">
              <path d="M110 95 C190 140 245 155 305 205 S430 270 510 325" />
            </svg>
            ${chapterLink(chapters[0], "map-region early")}
            ${chapterLink(chapters[1], "map-region university")}
            ${chapterLink(chapters[2], "map-region professional")}
          </div>
        </section>
        <section class="direct-list" aria-labelledby="direct-heading">
          <h2 id="direct-heading">Select a milestone directly</h2>
          <p>This keyboard-accessible list works without selecting a map region.</p>
          <ul>${directItems}</ul>
        </section>
      </div>
    </section>`;
}

function illustratedMarkup() {
  return `
    <section id="chapters" aria-labelledby="chapters-heading" hidden>
      <h1 class="view-heading" id="chapters-heading" tabindex="-1">Explore life chapters</h1>
      <nav class="view-nav" aria-label="Timeline navigation">
        <a class="back-link" href="#milestones">← Back to milestones</a>
      </nav>
      <p class="view-intro">Choose an illustrated chapter to browse the milestones grouped there.</p>
      <div class="chapter-grid">${chapters.map((chapter) => chapterLink(chapter)).join("")}</div>
    </section>`;
}

function simpleMarkup() {
  const chapterSections = chapters.map((chapter) => `
    <section class="simple-chapter" aria-labelledby="simple-${chapter.id}">
      <h2 id="simple-${chapter.id}">${chapter.name}</h2>
      ${timelineMarkup(chapterMilestones(chapter))}
    </section>`).join("");

  return `
    <section id="chapters" aria-labelledby="chapters-heading" hidden>
      <h1 class="view-heading" id="chapters-heading" tabindex="-1">Explore life chapters</h1>
      <nav class="view-nav" aria-label="Timeline navigation">
        <a class="back-link" href="#milestones">← Back to milestones</a>
      </nav>
      <p class="view-intro">The milestones are grouped in a straightforward chronological timeline by life chapter.</p>
      <div class="chapter-detail">${chapterSections}</div>
    </section>`;
}

function detailMarkup() {
  return `
    <section id="chapter-detail" aria-labelledby="chapter-detail-heading" hidden>
      <h1 class="view-heading" id="chapter-detail-heading" tabindex="-1"></h1>
      <nav class="view-nav" aria-label="Timeline navigation">
        <a class="back-link" href="#chapters">← Back to life chapters</a>
        <a class="back-link" href="#milestones">Back to milestones</a>
      </nav>
      <p class="view-intro">Milestones in this life chapter.</p>
      <div class="chapter-detail"></div>
    </section>`;
}

function dialogMarkup() {
  return `
    <dialog id="milestone-preview" aria-labelledby="preview-heading">
      <div class="dialog-content">
        <button class="dialog-close" type="button" aria-label="Close milestone preview">×</button>
        <span class="dialog-chapter"></span>
        <h2 id="preview-heading" tabindex="-1"></h2>
        <p class="dialog-date"></p>
        <p class="dialog-summary"></p>
      </div>
    </dialog>`;
}

function render(milestones) {
  prototypeMilestones = milestones;
  let chapterView = "";

  if (variant === "spatial") chapterView = spatialMarkup(milestones);
  else if (variant === "illustrated") chapterView = illustratedMarkup();
  else if (variant === "simple") chapterView = simpleMarkup();
  else throw new Error(`Unknown prototype variant: ${variant}`);

  app.innerHTML = `
    <div class="page-shell">
      <div class="masthead"><span class="masthead-mark" aria-hidden="true">MS</span><span>Life and work timeline · prototype comparison</span></div>
      <main id="main-content">
        ${overviewMarkup(milestones)}
        ${chapterView}
        ${detailMarkup()}
      </main>
      <footer class="page-footer">Prototype content uses the shared milestone inventory.</footer>
      ${dialogMarkup()}
    </div>`;

  const preview = document.querySelector("#milestone-preview");
  const previewHeading = document.querySelector("#preview-heading");
  let lastOpener;
  document.querySelector(".dialog-close").addEventListener("click", () => preview.close());

  app.addEventListener("click", (event) => {
    const button = event.target.closest("[data-milestone-id]");
    if (!button) return;

    const milestone = milestones.find((item) => item.id === button.dataset.milestoneId);
    if (!milestone) throw new Error(`Unknown milestone: ${button.dataset.milestoneId}`);

    lastOpener = button;
    document.querySelector(".dialog-chapter").textContent = milestone.chapter;
    previewHeading.textContent = milestone.title;
    document.querySelector(".dialog-date").textContent = milestone.date;
    document.querySelector(".dialog-summary").textContent = milestone.summary;
    preview.showModal();
    previewHeading.focus();
  });

  preview.addEventListener("close", () => {
    if (lastOpener?.isConnected) lastOpener.focus();
  });

  const routeHeading = () => document.querySelector(
    !document.querySelector("#milestones").hidden
      ? "#overview-heading"
      : !document.querySelector("#chapters").hidden
        ? "#chapters-heading"
        : "#chapter-detail-heading"
  );

  function syncRoute(moveFocus) {
    const route = window.location.hash.slice(1);
    const chapterMatch = route.match(/^chapter-(early-foundations|university|professional-work)$/);
    const isDetail = Boolean(chapterMatch);
    const isChapterIndex = route === "chapters";
    const overview = document.querySelector("#milestones");
    const chapterIndex = document.querySelector("#chapters");
    const detail = document.querySelector("#chapter-detail");

    overview.hidden = isChapterIndex || isDetail;
    chapterIndex.hidden = !(isChapterIndex && variant !== "simple");
    detail.hidden = !isDetail;

    if (isDetail) {
      const chapter = chapterFor(chapterMatch[1]);
      document.querySelector("#chapter-detail-heading").textContent = chapter.name;
      document.querySelector("#chapter-detail .chapter-detail").innerHTML =
        timelineMarkup(chapterMilestones(chapter));
    } else if (isChapterIndex && variant === "simple") {
      chapterIndex.hidden = false;
    }

    if (moveFocus) {
      window.scrollTo(0, 0);
      routeHeading()?.focus();
    }
  }

  window.addEventListener("hashchange", () => syncRoute(true));
  syncRoute(false);

  document.querySelector("#main-content").addEventListener("click", (event) => {
    const routeLink = event.target.closest('a[href^="#"]');
    if (!routeLink) return;
    window.setTimeout(() => {
      if (!preview.open) syncRoute(true);
    }, 0);
  });
}

async function loadMilestones() {
  const response = await fetch(new URL("./milestones.json", import.meta.url));
  if (!response.ok) throw new Error(`Could not load shared milestones (${response.status})`);
  const milestones = await response.json();
  render(milestones.milestones);
}

loadMilestones().catch((error) => {
  app.textContent = "The prototype could not load its shared milestone content. Serve this folder over HTTP and reload.";
  console.error(error);
});
