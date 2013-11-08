define(function (require) {
  // this works correctly
  return "bar contents + " + require("./relative");
});