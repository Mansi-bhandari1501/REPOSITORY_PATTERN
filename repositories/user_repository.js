const {User} = require('../models');
const {base_repository} = require('./base_repository');
const JWT = require('jsonwebtoken')

// eslint-disable-next-line snakecasejs/snakecasejs
class user_repository extends base_repository {
  constructor (payload) {
    super(payload);
  }

  async create_user(payload = {}, trx = null) {
      console.log('payload 1: ', payload);
    return await this.create(payload);
  }

  async get_all_user(payload){
    const get_all_data = await this.get_all();
    return { data : get_all_data, total : get_all_data.length };
  }

  async get_user( user_id ){
    // eslint-disable-next-line snakecasejs/snakecasejs
    const result =  await  this.model.findOne({  where: { id: informant_profile_id } });
    return result?.toJSON();
  }
  async login_user( payload ){
    console.log('payload: ', payload.body);
    const result =  await  this.model.findOne({  where: { email: payload.body.email , password: payload.body.password } });
    console.log('result: ', result);
    console.log('result.dataValues.User.id: ', result.dataValues.id);
    const token = JWT.sign({ id: result.dataValues.id, }, process.env.JWT_SECRET, {
        expiresIn: "2d",
    });

    return {token,result}
  }
  async delete_user(user_id) {
    const criteria = { uuid: message_id, deleted_at: null };
    const response = await this.soft_delete(criteria);
    return response;
  }

//   async get_informant_profile_by_abbr( abbr ){
//     // eslint-disable-next-line snakecasejs/snakecasejs
//     const result =  await  this.model.findOne({  where: { abbr } });
//     return result?.toJSON();
//   }
  
}


module.exports = {
  user_repository_obj : new user_repository({  model : User})
};
