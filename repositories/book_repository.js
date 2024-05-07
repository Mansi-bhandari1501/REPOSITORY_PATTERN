
const {Books} = require('../models');
const {base_repository} = require('./base_repository');

// eslint-disable-next-line snakecasejs/snakecasejs
class book_repository extends base_repository {
  constructor (payload) {
    super(payload);
  }

  async create_book(payload = {}, trx = null) {
    console.log('payload: ', payload);
    return await this.create(payload);
  }

  async get_all_book(payload){
    const get_all_data = await this.get_all();
    return { data : get_all_data, total : get_all_data.length };
  }

  async get_book_by_id( book_id ){
    // eslint-disable-next-line snakecasejs/snakecasejs
    const result =  await  this.model.findOne({  where: { id: book_id } });
    return result?.toJSON();
  }
  async delete_book(book_id) {
    const criteria = { uuid: book_id, deleted_at: null };
    const response = await this.soft_delete(criteria);
    return response;
  }
  
}


module.exports = {
    book_repository_obj : new book_repository({  model : Books})
};
