/**
 * Historytree.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      tree_id:{
        type:'integer'

      },
      username:{
        type:'string'
      },
      water_use:{
        type:'integer'
      },
      waterneed:{
        type:'integer'

      },
      time_use:{
        type:'string'
      }
  }
};

