const { getFile } = require("../server/utils");
const Footer = require("./footer");
const Head = require("./head");
const Main = require("./main");
const Navigation = require("./navigation");

const Layout = async (config) => {
  let injectBody = await getFile("inject_body.txt");
  return `<!DOCTYPE html>
<html>
<head>
<meta name="google-site-verification" content="Ppu_vxPxV1RrCckwXbRjhf4XUnGfL5aYGtNh7wI1TEI" />
<meta name="yandex-verification" content="4de0820e0f25fb2a" />
${await Head(config)}
</head>
<body>
${Navigation(config)}
${await Main(config)}
${Footer(config)}
${injectBody}
</body>
</html>`;
};

module.exports = Layout;
