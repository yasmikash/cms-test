const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");

// Custom middlewares
const errorMiddleware = require("./middlewares/error.middleware");

module.exports = class App {
  constructor(env, port, routes) {
    this.app = express();
    this.env = env;
    this.port = port;
    this.routes = routes;
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeErrorMiddleware();
  }

  async listen() {
    await this.initializeDatabase();
    this.app.listen(this.port, () => {
      console.log(
        `APP LISTENING ON PORT ${
          this.port
        } IN ${this.env.toUpperCase()} ENVIRONMENT`
      );
    });
  }

  initializeMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(fileUpload());
  }

  initializeRoutes() {
    this.routes.forEach((route) => {
      this.app.use(route.router);
    });
  }

  async initializeDatabase() {
    try {
      await mongoose.connect(process.env.MONGO_CONNECT_STRING, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
    } catch (error) {
      throw error;
    }
  }

  async initializeErrorMiddleware() {
    this.app.use(errorMiddleware);
  }
};
