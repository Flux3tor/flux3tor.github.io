const params = new URLSearchParams(window.location.search);
if (params.has("minimal")) document.body.classList.add("minimal");
