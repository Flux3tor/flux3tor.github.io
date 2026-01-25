const projects = [
  {
    name: "FluxPad",
    tags: ["Arduino", "Hardware", "Web"],
    desc: "A custom macropad bridging physical input with software workflows.",
    why: "Explores how physical interfaces improve speed, ergonomics, and creative flow.",
    github: "https://github.com/Flux3tor/FluxPad",
    live: null
  },
  {
    name: "Flux Browser",
    tags: ["HTML", "CSS", "JavaScript"],
    desc: "An experimental browser wrapper focused on UI, performance, and system behavior.",
    why: "Explores how interface decisions affect usability and performance.",
    github: "https://github.com/Flux3tor/flux-browser",
    live: "https://tush.is-a.dev/flux-browser"
  },
  {
    name: "Explain My Code",
    tags: ["JavaScript", "UX", "Web"],
    desc: "A tool that explains unfamiliar code in a clear, readable way.",
    why: "Reduces friction when reading and understanding complex logic.",
    github: "https://github.com/Flux3tor/Explain-My-Code",
    live: "https://explainmycode.pages.dev"
  },
  {
    name: "gl1tchbound",
    tags: ["Java", "Minecraft", "Modding"],
    desc: "A Minecraft mod exploring new mechanics and gameplay systems.",
    why: "Studies game systems design and player interaction.",
    github: null,
    live: null
  },
  {
    name: "AlmostWorks",
    tags: ["JavaScript", "Web", "Experiments"],
    desc: "A collection of small web experiments and rapid prototypes.",
    why: "A sandbox for testing ideas and shipping without overengineering.",
    github: "https://github.com/Flux3tor/almostworks",
    live: "https://tush.is-a.dev/almostworks"
  }
];

const container = document.getElementById("project-list");

projects.forEach(p => {
  const div = document.createElement("div");
  div.className = "project-card";
  div.innerHTML = `
    <h3>${p.name}</h3>
    <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
    <p>${p.desc}</p>
    <p class="meta">${p.why}</p>
    <div class="project-links">
      ${p.github ? `<a href="${p.github}" target="_blank">GitHub</a>` : ""}
      ${p.live ? `<a href="${p.live}" target="_blank">Live</a>` : ""}
    </div>
  `;
  container.appendChild(div);
});
