require.config({
  packages: [{
    name: "foo",
    main: "lib/index",
    location: "foo"
  }]
});

define(function (require) {
  // these work fine
  log(require("foo/baz"));
  log(require("foo/lib/bar"));
  // this doesn't work though, because
  // require("./bar") in foo/lib/index is
  // being loaded from the wrong location
  require(["foo"], function (foo) {
    log(foo);
  });
});

function log(msg) {
  var t = document.createElement("div");
  t.innerHTML = msg;
  document.body.appendChild(t);
}