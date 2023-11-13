const { error } = require("console");
const fs = require("fs");
const path = require("path");

const stream = fs.createReadStream(path.resolve(__dirname, "count.txt"), {encoding: "utf-8"});

stream.on("data", (chunk) => {
  console.log(chunk);
});
stream.on("open", () => {
  console.log("Start.. ");
});
stream.on("close", () => {
    console.log("End..");
});
stream.on("error", () => {
    console.log(error);
});
