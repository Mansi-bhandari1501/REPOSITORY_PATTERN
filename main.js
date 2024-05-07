// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const { sequelize } = require('./models');
// const routes = require('./routes')
// const app = express();

// dotenv.config()


// app.use(express.json())
// app.use(express.urlencoded())
// app.use(cors())
// app.use("/", routes);

// // Handle 404 - Route not found
// app.use((req, res, next) => {
//     res.status(404).json({ error: "Route not found" });
//   });

// process.on('uncaughtException',(err) => {
//     console.log('uncaught exception', err );
//   });

// const port  = process.env.PORT
// app.listen({ port }, async () => {
//     console.log("server running on port",port)
//     // await sequelize.sync()
//     console.log("Database connected!")
// })


const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { sequelize } = require('./models');
const routes = require('./routes');

class Server {
  constructor() {
    this.app = express();
    dotenv.config();
    this.setupMiddleware();
    this.setupRoutes();
    this.setupErrorHandling();
    this.setupServer();
  }

  setupMiddleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded());
    this.app.use(cors());
  }

  setupRoutes() {
    this.app.use("/", routes);
  }

  setupErrorHandling() {
    // Handle 404 - Route not found
    this.app.use((req, res, next) => {
      res.status(404).json({ error: "Route not found" });
    });

    // Handle uncaught exceptions
    process.on('uncaughtException', (err) => {
      console.log('Uncaught exception:', err);
    });
  }

  async setupServer() {
    const port = process.env.PORT || 3000; // Default port is 3000
    // await sequelize.sync(); // Uncomment if you need database synchronization
    this.app.listen(port, () => {
      console.log("Server running on port", port);
      console.log("Database connected!");
    });
  }
}

// module.exports = Server;
const server = new Server();