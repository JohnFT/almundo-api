import Server from "./server/server";
import "./controllers/hotels/routes";

// instance server
const server = Server.init(3000);

// run server
server.start(() => console.log("Server started"));
