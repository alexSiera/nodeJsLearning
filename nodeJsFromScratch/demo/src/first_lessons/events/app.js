const EventEmmiter = require("events");

const myEmitter = new EventEmmiter();

const logDbConnection = () => {
  console.log("DB connected");
};

myEmitter.addListener("connected", logDbConnection);
myEmitter.emit("connected");
myEmitter.removeListener("connected", logDbConnection);
// myEmitter.off("connected", logDbConnection);
// myEmitter.removeAllListeners();
myEmitter.emit("connected");
myEmitter.on("msg", (data) => {
  console.log(`Receive ${data}`);
});
myEmitter.emit("msg", "Hello! Get my message");
