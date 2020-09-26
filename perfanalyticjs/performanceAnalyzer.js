function PerformanceAnalyzer() {
  startPrepareUnits();
}

function startPrepareUnits() {
  window.addEventListener(
    "load",
    () => {
      const performance = window.performance;
      const navigationEntry = performance.getEntriesByType("navigation")[0];
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      const fcp = performance.getEntriesByType("paint")[0].startTime || 0;
      const domLoadTime = navigationEntry.domComplete;
      const windowLoadTime =
        navigationEntry.loadEventStart - navigationEntry.loadEventEnd;
      const resourceInfoes = getResourceRootTimeInfo(performance);
      const payload = {
        ttfb_data: ttfb,
        fcp_data: fcp,
        domLoad: domLoadTime,
        windowLoad: windowLoadTime,
        resource_data: resourceInfoes,
      };
      saveAnalysisResult(payload);
      saveSiteUrl();
    },
    false
  );
}
function getResourceRootTimeInfo(performance) {
  const resourceListEntries = performance.getEntriesByType("resource");
  const resources = [];
  resourceListEntries.forEach((resource) => {
    resources.push({
      url: resource.name,
      type: resource.initiatorType,
      duration: resource.duration,
      transferSize: resource.transferSize,
    });
  });
  return resources;
}
function saveAnalysisResult(payload) {
  fetch(`https://performanceanalytics.herokuapp.com/api/analyzes/save`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      targetURL: window.location.href,
      payload,
    }),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log("analysis save fail", error);
    });
}
function saveSiteUrl() {
  fetch(`https://performanceanalytics.herokuapp.com/api/sites/save`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      siteUrl: window.location.href,
    }),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log("Site save fail", error);
    });
}
PerformanceAnalyzer();
