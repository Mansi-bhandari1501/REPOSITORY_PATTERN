const { user_repository_obj } = require("../repositories/user_repository");

exports.create_user = async (payload) => {
    console.log('payload: ', payload);
    
    const response = await user_repository_obj.create_user(payload);
    // console.log('response: ', response);
    return response;
};
exports.login_user = async (payload) => {
    console.log('payload: ', payload);
    
    const response = await user_repository_obj.login_user(payload);
    // console.log('response: ', response);
    return response;
};