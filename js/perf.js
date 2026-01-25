if (performance) {
  window.addEventListener("load", () => {
    console.log("Load time:", performance.now().toFixed(1), "ms");
  });
}
