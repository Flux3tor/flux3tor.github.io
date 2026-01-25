console.log("Terminal Mode: type help()");

window.help = () => {
  console.log("Commands: projects(), contact()");
};

window.projects = () => {
  projects.forEach(p => console.log(p.name));
};

window.contact = () => {
  console.log("Email: tusharsinha199@gmail.com");
};
