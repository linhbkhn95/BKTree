/**
 * MapController
 *
 * @description :: Server-side logic for managing Maps
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    map:function(req,res){
        res.view('map/test',{user:req.session.user}, { layout: null } );

    },
};

