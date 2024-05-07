
const {Issue} = require('../models');
const {User} = require('../models/user');
const {base_repository} = require('./base_repository');

// eslint-disable-next-line snakecasejs/snakecasejs
class issue_repository extends base_repository {
  constructor (payload) {
    super(payload);
  }

  async create_issue(payload = {}, trx = null) {
    return await this.create(payload);
  }

  async get_all_issue(payload){
    const get_all_data = await this.get_all({
    include: [
      {
        association: Issue.userIssueAssociation
        // model: User,
        // foreignKey:"userId"
        // as:"users"
      },{
        association: Issue.issueBookAssociation
      }
    ]});
    console.log('get_all_data: ', get_all_data);
    return { data : get_all_data, total : get_all_data.length };
  }

  async get_issue_by_id( payload ){
    console.log('payload121: ', payload);
    // eslint-disable-next-line snakecasejs/snakecasejs
    const result =  await  this.model.findOne( {where: {
      id: payload.id
    },
    include: [
      {
        association: Issue.userIssueAssociation
       
      },
      {
        association: Issue.issueBookAssociation
      }
    ]},
  );
    return result?.toJSON();
  }
  async delete_issue(issue_id) {
    const criteria = { uuid: issue_id, deleted_at: null };
    const response = await this.soft_delete(criteria);
    return response;
  }
  
}


module.exports = {
    issue_repository_obj : new issue_repository({  model : Issue})
};
