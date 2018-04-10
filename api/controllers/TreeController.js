

/**
 * TreeController
 *
 * @description :: Server-side logic for managing trees
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	gitlist_grouptree:function(req,res){
        let grouptree_id = req.body.grouptree_id
        let self = this 
        Tree.find({grouptree_id:grouptree_id}).exec((err,listtree)=>{
            if(err){
                res.send(OutputInterface.errServer(err))
            }
            Promise.all(listtree.map((item) => {
                return new Promise(async (resolve, reject) => {
                    let coordinate = await self.getCoodinate(item.id)
                    var newitem = { ...item, coordinate  }

                    resolve(newitem)
                })
            }))
                .then((data_response) => {

                   
                    res.send(OutputInterface.success(data_response))

                    resolve(data_response)
                })
            })
    },
    getCoodinate:function(tree_id){
        return new Promise((resolve,reject)=>{
            Coordinates.findOne({tree_id:tree_id}).exec((err,coordinate)=>{
                if(err){
                    console.log('loi err')
                    resolve({})
                }
                if(coordinate){
                    resolve(coordinate)
                }
                console.log('ssss err')
                resolve({})
            })
        })
    }
};

