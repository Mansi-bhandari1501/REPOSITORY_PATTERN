const express = require('express');


const router = express.Router();

const { IssueController } = require('../controller/index.js');


// router.post("/", IssueController.IssueBook);
// router.get("/", IssueController.getIssues);
// router.get("/:id", IssueController.getSingleIssue);
// router.put("/:id", IssueController.editIssue);
// router.put("/accept/:id", IssueController.acceptIssue);
// router.delete("/:id", IssueController.deleteIssue);



// module.exports = router

class IssueRoutes {
    constructor() {
        this.router = express.Router();
        this.setupRoutes();
    }

    setupRoutes() {
        
        this.router.post("/", IssueController.IssueBook);
        this.router.get("/", IssueController.getIssues);
        this.router.get("/:id", IssueController.getSingleIssue);
        this.router.put("/:id", IssueController.editIssue);
        this.router.put("/accept/:id", IssueController.acceptIssue);
        this.router.delete("/:id", IssueController.deleteIssue);
    }

    getRouter() {
        return this.router;
    }
}

// module.exports = UserRoutes;
const issueRoute = new IssueRoutes();
module.exports = issueRoute.getRouter();