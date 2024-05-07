// import userController from "./user.controller.js";
// import examController from "./exam.controller.js";
// import questionController from "./question.controller.js";
// export {
//     userController,
//     examController,
//     questionController,
// }

module.exports = {
    UserController : require("./user.controller.js"),
    BookController: require("./books.controller.js"),
    IssueController: require("./issue.controller.js")
}