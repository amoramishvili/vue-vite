const path = require("path");
const express = require("express");

const asyncHandler = (fn) =>
  function asyncUtilWrap(...args) {
    const fnReturn = fn(...args);
    const next = args[args.length - 1];
    return Promise.resolve(fnReturn).catch(next);
  };

const app = express();
const PATH = __dirname;
app.use("/", express.static("dist"));
app.get(
  "*",
  asyncHandler(async (req, res, next) => {
    res.sendFile(path.join(PATH, "dist/index.html"));
  })
);
app.listen(3000, () => console.log(`Listening on port ${3000}`));
