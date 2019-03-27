import Server from "./server/server";


// instance server
const server = Server.init(3000);

// run server
server.start(() => console.log("Server started"));
