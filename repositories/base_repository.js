// const { sequelize } = require('../config/db_connection');

exports.base_repository = class base_repository {
    constructor({ model }) {
      this.model = model;
    }
  
    async create(payload, options={}) {
      console.log('payload2: ', payload);
      const instance = await this.model.create(payload, options);
      return instance && instance.toJSON();
    }

    async count ( payload) {
      return await this.model.count( payload);
    }
    async get_all(options) {
      return await this.model.findAll(options);
    }
  
    find_by_id(id) {
      return this.items.find(item => item.id === id);
    }

    async find_one(criteria, include = [],attributes={}) {
      return await this.model.findOne({
        where: criteria,
        include,
        attributes
      });
    }

    async find_all({criteria,include = [],order,attributes={},offset=0,paranoid=true}) {
      return await this.model.findAll({
        where: criteria,
        include,
        attributes,
        offset,
        order,
        paranoid
      });
    }

    async find_and_count_all({criteria, include = [],order,attributes={},offset=0,limit=10}) {
      return await this.model.findAndCountAll({
        where: criteria,
        include,
        attributes,
        offset,
        order,
        limit 
      });
    }
  

   
    // Other common repository methods can go here.
};

  