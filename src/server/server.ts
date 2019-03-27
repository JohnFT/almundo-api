import express = require("express");
import routes from "../routes";
import * as swaggerUi from "swagger-ui-express";
import cors from "cors";
import bodyParser = require("body-parser");

// create server express
export default class Server {
  // propierties
  public app: any;

  // builder
  constructor(private port: number) {
    this.app = express();

    // coors
    this.app.use(cors());

    //Body parse
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());

    // use routes 
    routes(this.app);

    // intance swagger
    try {
      const swaggerDocumnet = require("../../swagger.json");
      this.app.use(
        "/api/v1/docs",
        swaggerUi.serve,
        swaggerUi.setup(swaggerDocumnet)
      );
    } catch (err) {
      console.log(err);
    }
  }

  // init server
  static init(port: number): Server {
    return new Server(port);
  }

  // start server on port
  start(callback: Function) {
    this.app.listen(process.env.PORT || this.port, callback());
  }
}
