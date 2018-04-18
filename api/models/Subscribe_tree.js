/**
 * Subscribe_tree.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
      room_id:{
        type:'string'
      },
      username:{
        type:'string'
      },
      time:{
        type:'string'
      }
  }
};

