## Unexpected behaviour with relative requires in package's main.

If package's main file is nested, e.g. `lib/index.js`, and contains a relative require, e.g. `require("./bar")`, I would have expected the bar to be loaded from `lib/bar`, but it's being loaded from `foo/bar`.

Is this an incompatibility with CJS, or just node?

## To see this in action

clone + open index.html