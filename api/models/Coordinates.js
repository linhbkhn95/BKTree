/**
 * Coordinates.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    tree_id:{
      type:'integer'
    },
    data:{
      type:'json'
    },
    X:{
      type:'string'
    },
    Y:{
      type:'string'
    }
  }
};

