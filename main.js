const copy = {
  define: "Positioning, audience, and the product bet — defined before pixels.",
  design: "Branding\nMobile & Web App Design\nfor Startups and Giants",
  development: "Production front-ends, design systems, and launches that stay fast."
};

const tabs = document.querySelectorAll(".process [role='tab']");
const blurb = document.querySelector("#hero-blurb");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.setAttribute("aria-selected", "false"));
    tab.setAttribute("aria-selected", "true");
    const next = copy[tab.dataset.tab];
    if (!blurb || blurb.textContent === next) return;
    blurb.classList.add("is-fading");
    window.setTimeout(() => {
      blurb.textContent = next;
      blurb.classList.remove("is-fading");
    }, 160);
  });
});

const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.querySelector(".sr-only").textContent = open ? "Close menu" : "Open menu";
  });

  links.addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    links.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.querySelector(".sr-only").textContent = "Open menu";
  });
}

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-interest]");
  const topic = document.querySelector("#topic");
  if (!trigger || !topic) return;
  topic.value = trigger.dataset.interest;
});

const form = document.querySelector("#contact-form");
const success = document.querySelector("#form-success");
const reset = document.querySelector("#form-reset");

if (form && success) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    form.hidden = true;
    success.hidden = false;
  });
}

if (reset && form && success) {
  reset.addEventListener("click", () => {
    form.reset();
    const topic = document.querySelector("#topic");
    if (topic) topic.value = "A new project";
    success.hidden = true;
    form.hidden = false;
  });
}

const dialog = document.querySelector("#reel");
const play = document.querySelector(".play");
const closeReel = document.querySelector(".reel-close");

if (dialog && play) {
  play.addEventListener("click", () => dialog.showModal());
}

if (dialog && closeReel) {
  closeReel.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.querySelector("[data-interest]")?.addEventListener("click", () => dialog.close());
}
