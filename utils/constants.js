import Crypto from "crypto";

export let tasks = [
  {
    id: Crypto.randomUUID().split("-")[0],
    title: "Learn Node.js",
    completed: false,
    description: "Learn Node.js and become a master of it",
  },
  {
    id: Crypto.randomUUID().split("-")[0],
    title: "Learn React.js",
    completed: true,
    description: "Learn React.js and become a master of it",
  },
  {
    id: Crypto.randomUUID().split("-")[0],
    title: "Learn Angular.js",
    completed: false,
    description: "Learn Angular.js and become a master of it",
  },
];