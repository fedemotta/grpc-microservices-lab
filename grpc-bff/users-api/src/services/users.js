const config = require('config');
const database = require('../database/index.js');

module.exports = {
  getUsers: async (call, callback) => {
    console.info('Get users by gRPC');
    const users = await database.models.users.findAndCountAll({
      offset: call.request.offset,
      limit: call.request.limit === 0 ? config.defaultLimit : call.request.limit,
      raw: true,
    });
    callback(null, {
      numItems: users.rows.length,
      objects: users.rows,
      totalNumItems: users.count,
    });
  },
};
