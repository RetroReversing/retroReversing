const baseUrl = process.env.BACKSTOP_BASE_URL || "http://localhost:4000";

const commonScenarioOptions = {
  delay: 1000,
  hideSelectors: [
    "iframe[src*='youtube.com']",
    "iframe[src*='youtu.be']",
    "iframe[src*='player.twitch.tv']",
    "#disqus_thread"
  ],
  removeSelectors: [
    ".adsbygoogle"
  ],
  misMatchThreshold: 0.2,
  requireSameDimensions: true
};

const scenario = (label, path, options = {}) => ({
  label,
  url: `${baseUrl}${path}`,
  selectors: ["viewport"],
  ...commonScenarioOptions,
  ...options
});

module.exports = {
  id: "retroreversing",
  viewports: [
    {
      label: "desktop",
      width: 1440,
      height: 1000
    },
    {
      label: "tablet",
      width: 768,
      height: 1000
    },
    {
      label: "mobile",
      width: 390,
      height: 900
    }
  ],
  scenarios: [
    scenario("Home", "/"),
    scenario("Introduction article", "/introduction"),
    scenario("Game Boy category", "/gameboy"),
    scenario("Games category with embeds", "/games"),
    scenario("File formats category", "/games/fileformats"),
    scenario("Debug symbols category", "/symbols"),
    scenario("Tools category", "/tools"),
    scenario("3D Studio Max tool page", "/3d-studio-max")
  ],
  paths: {
    bitmaps_reference: "test/backstop/reference",
    bitmaps_test: "test/backstop/test",
    engine_scripts: "test/backstop/scripts",
    html_report: "test/backstop/report",
    ci_report: "test/backstop/ci"
  },
  report: ["browser", "CI"],
  engine: "playwright",
  engineOptions: {
    args: ["--no-sandbox"]
  },
  asyncCaptureLimit: 3,
  asyncCompareLimit: 20,
  debug: false,
  debugWindow: false
};
