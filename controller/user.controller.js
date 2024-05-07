
const { errorHandler } = require('../lib/utils.js')
const { user_service } = require('../services/index.js');

// exports.registerController = async (req, res) => {
//   try {
//     const response = await user_service.create_user(req.body);
//     return res.status(201).send({
//       success: true,
//       message: 'User Register Successfully',
//       user: response.user
//     });
//   } catch (error) {
//     errorHandler(res, error);
//   }
// }

// // POST LOGIN
// exports.loginController = async (req, res) => {
//   try {
//     console.log('user')

//     const response = await user_service.login_user(req);

//     console.log('user', response.user)
//     return res.status(200).send({
//       success: true,
//       message: "login successfully",
//       user: response.user,
//       token: response.token,
//     });
//   } catch (error) {
//     console.log(error)
//     errorHandler(res, error);
//   }
// }

// export default {
//   loginController,
//   registerController,

// }



class UserController {
  static async register(req, res) {
    try {
      const response = await user_service.create_user(req.body);
      return res.status(201).send({
        success: true,
        message: 'User Register Successfully',
        user: response.user
      });
    } catch (error) {
      UserController.handleError(res, error);
    }
  }

  static async login(req, res) {
    try {
      const response = await user_service.login_user(req);
      return res.status(200).send({
        success: true,
        message: "login successfully",
        user: response.user,
        token: response.token,
      });
    } catch (error) {
      UserController.handleError(res, error);
    }
  }

  static handleError(res, error) {
    console.error(error);
    return errorHandler(res, error);
  }
}

module.exports = UserController;