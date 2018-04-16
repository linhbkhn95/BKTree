/**
 * RoleController
 *
 * @description :: Server-side logic for managing roles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
        getall:function(req,res){
            Role.find().exec((err,listrole)=>{
                if(err){
                    res.send([])
                }
                res.send(listrole)
            }) 
        }
};

