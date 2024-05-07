const { issue_repository_obj } = require("../repositories/issue_repository");

exports.addNewIssue = async (payload) => {
    console.log('payload: ', payload);
    
    const response = await issue_repository_obj.create_issue(payload);
    // console.log('response: ', response);
    return response;
};
exports.get_all_issue = async (payload) => {
    console.log('payload: ', payload);
    
    const response = await issue_repository_obj.get_all_issue(payload);
    // console.log('response: ', response);
    return response;
};

exports.getIssueById = async (payload) => {
    console.log('payload: ', payload);
    
    const response = await issue_repository_obj.get_issue_by_id(payload);
    // console.log('response: ', response);
    return response;
};