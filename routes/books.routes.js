const express = require('express');
// const {requireSignIn} = require('../middleware/authMiddleware.js')

const router = express.Router();

const { BookController } = require('../controller/index.js');


// router.post("/", BookController.addBook);
// router.get("/", BookController.getBooks);
// router.get("/:id", BookController.getBook);
// router.put("/:id", BookController.editBook);
// router.delete("/:id", BookController.deleteBook);



// module.exports = router
class BookRoutes {
    constructor() {
        this.router = express.Router();
        this.setupRoutes();
    }

    setupRoutes() {
      
        this.router.post("/", BookController.addBook);
        this.router.get("/", BookController.getBooks);
        this.router.get("/:id", BookController.getBook);
        this.router.put("/:id", BookController.editBook);
        this.router.delete("/:id", BookController.deleteBook);
    }

    getRouter() {
        return this.router;
    }
}

// module.exports = UserRoutes;
const bookRoute = new BookRoutes();
module.exports = bookRoute.getRouter();