/**
 * Notifi_tree.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
      type:{
        type:'string'
      },
      data:{
        type:'json'
      },
      time:{
        type:'string'
      },
      room_id:{
        type:'string'
      },
      url_ref:{
        type:'string'
      }

  }
};

