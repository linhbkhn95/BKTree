/**
 * Group_treeController
 *
 * @description :: Server-side logic for managing group_trees
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    insert:function(req,res){
        let data = req.body;
        Group_tree.create(data).exec((err,gt)=>{
            if(err){
                res.send(OutputInterface.errServer(err))
            }
            res.send(OutputInterface.success(gt))
        })
    },
    delete:function(req,res){
        let idDelete = req.body.idDelete
        Group_tree.destroy({id:idDelete}).exec((err,gt)=>{
            if(err){
                res.send(OutputInterface.errServer(err))
            }
            res.send(OutputInterface.success(gt))
        })
    },
    update:function(req,res){
        let data = req.body;
        Group_tree.update({id:data.id},data).exec((err,gt)=>{
            if(err){
                res.send(OutputInterface.errServer(err))
            }
            res.send(OutputInterface.success(gt))
        })
    },
	'get_all':function(req,res){
        console.log('vao')
        Group_tree.find().exec((err,list)=>{
            if(err){
                res.send(OutputInterface.errServer(err))
            }
            res.send(OutputInterface.success(list))
        })
    }
};

