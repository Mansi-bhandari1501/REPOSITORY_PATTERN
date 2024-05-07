const express = require('express');
const userRoute = require('./user.routes.js');
const bookRoute = require('./books.routes.js');
const issueRoute = require('./issue.routes.js');

// import examRoute from "./exam.routes.js"
// import questionRoute from "./question.routes.js"
const router = express.Router();

router.get("/", (req, res) => {
  res.send("welcome");
});

router.use("/users", userRoute);
router.use("/books", bookRoute);
router.use("/issue", issueRoute);


module.exports = router
// const express = require('express');
// const router = express.Router();

// const UserRoutes = require('./user.routes');

// const userRoutes = new UserRoutes();
// router.use('/user', userRoutes.registerRoutes());

// module.exports = router;