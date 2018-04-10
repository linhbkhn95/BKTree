/**
 * Tree.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      grouptree_id:{
        type:'string'
      },
      code:{
        type:'string'
      },
      status:{
        type:'string'
      },
      waternow:{
        type:'integer'
      },
      waterneed:{
        type:'integer'
      },
      url_image:{
        type:'string'
      },
      description:{
        type:'string'
      },
      begindate:{
        type:'string'
      }
  }
};

