/**
 * HistorytreeController
 *
 * @description :: Server-side logic for managing historytrees
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	gitlist_bytree:function(req,res){
        let tree_id = req.body.tree_id||null
        if(tree_id){
            Historytree.find({tree_id}).exec((err,list)=>{
                if(err){
                    res.send(OutputInterface.errServer(err))
                }
                
                res.send(OutputInterface.success(list))
            })
        }
    }
};

