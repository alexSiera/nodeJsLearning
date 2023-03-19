// import { characters, greet } from "./chracters.mjs";

// for (const c of characters) {
//   greet(c.name);
// }

// import * as char from "./chracters.mjs";

// for (const c of char.characters) {
//   char.greet(c.name);
// }

// import charDef from "./chracters.mjs";

// charDef();

// import log, { characters, greet } from "./chracters.mjs";

// log();

// import log, * as char from "./chracters.mjs";

// log();
// console.log(char.characters);

// import log, { characters, greet as hello } from "./chracters.mjs";

// for (const c of characters) {
//   hello(c.name);
// }

// const a = 0;
// if (a > 0) {
//   const log = require("./chracters.js");
//   log();
// } else {
//   console.log("Меньше нуля");
// }

async function main() {
  try {
    const { characters, greet } = await import("./chracters.mjs");
    for (const c of characters) {
      greet(c);
    }
  } catch (error) {
    console.log("Error");
  }
}
main();
