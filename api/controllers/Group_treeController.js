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
            Promise.all(list.map((item) => {
                return new Promise(async (resolve, reject) => {
                    // let coordinate = await self.getCoodinate(item.id)
                    let count_listtree = await Tree.count({grouptree_id:item.id});
                    let count_listtree_needwater = await Tree.count({grouptree_id:item.id,status:"kém"});

                    var newitem = { ...item,count_listtree,count_listtree_needwater  }

                    resolve(newitem)
                })
            })).then((data_response)=>{
                res.send(OutputInterface.success(data_response))
            })
     
        })
    }
};

