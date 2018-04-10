/**
 * Userinfo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      username:{
        type:'string'
      },
      fullname:{
        type:'string'
      },
      birthday:{
        type:'string'
      },
      url_avatar:{
        type:'string'
      },
      address:{
        type:'string'
      },
      country:{
        type:'string'
      },
      
  }
};

