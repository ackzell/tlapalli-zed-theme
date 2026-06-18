const fs = require("fs");
const path = require("path");

const EXTENSION_TOML = path.join(__dirname, "..", "extension", "extension.toml");

module.exports.readVersion = function () {
  return fs.readFileSync(EXTENSION_TOML, "utf8").match(/version = "(.+)"/)[1];
};

module.exports.writeVersion = function (_contents, version) {
  const contents = fs.readFileSync(EXTENSION_TOML, "utf8");
  fs.writeFileSync(
    EXTENSION_TOML,
    contents.replace(/version = ".+"/, `version = "${version}"`),
  );
  return fs.readFileSync(EXTENSION_TOML, "utf8");
};
