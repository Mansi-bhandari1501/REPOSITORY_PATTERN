const express = require('express');
const router = express.Router();

const { UserController } = require('../controller/index.js');


// router.post("/register", UserController.register);
// router.post("/login", UserController.login);



// module.exports = router
// const BaseRoutes = require('./base.routes.js');
// // const UserController = require('../controller/UserController');

// class UserRoutes extends BaseRoutes {
//   constructor() {
//     super({ controller: UserController });
//   }
// }

// module.exports = UserRoutes;

//  class UserRouter {
//     constructor({ controller }) {
//         // this.router = express.Router();
//         this.controller = controller;
//       }   
//        // Open to all users
//        async register() {
//         router.post('/register', UserController.register);
//     }
//       async login() {
//         router.post('/login', UserController.login);
//     }
  
// }
// // exports const userRoute = new UserRouter({  controller : UserController});
// // module.exports = userRoute;
// // const userRoute = new UserRouter({  controller : UserController}),

// module.exports = router


class UserRoutes {
  constructor() {
    this.router = express.Router();
    this.setupRoutes();
  }

  setupRoutes() {
    this.router.post("/register", UserController.register);
    this.router.post("/login", UserController.login);
  }

  getRouter() {
    return this.router;
  }
}

// module.exports = UserRoutes;
const userRoutes = new UserRoutes();
module.exports = userRoutes.getRouter();