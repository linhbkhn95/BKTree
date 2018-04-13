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
            try {
                Historytree.find({tree_id},).sort('createdAt DESC').exec((err,list)=>{
                    if(err){
                        
                        res.send(OutputInterface.errServer(err))
                    }
                    Promise.all(list.map((item) => {
                       
        
                        return new Promise(async (resolve, reject) => {
                            let user = await User.findOne({username:item.username});
                            user?user:{}
                            let data = {...item,fullname_user:user.fullname,url_avatar:user.url_avatar}
                            resolve(data)
    
    
                        })
                    })).then((data_response)=>{
                        return res.send(OutputInterface.success(data_response))
                    })
                })
            } catch (error) {
                res.send(OutputInterface.errServer(error))
            }
          
        }
    }
};

