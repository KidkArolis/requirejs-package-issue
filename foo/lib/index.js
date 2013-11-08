define(function (require) {
  // I expected this relative require to be relative to the file
  // not relative to the package
  return "index contents + " + require("./bar");
});