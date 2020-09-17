let ttfb, fcp, domLoad, windowLoad;
function measurePerformance() {
  window.addEventListener("load", setWindowLoadPerf);
}

function setWindowLoadPerf() {
  windowLoad =
    window.performance ||
    window.webkitPerformance ||
    window.mozPerformance ||
    window.msPerformance;
  if (windowLoad) {
  }
}
