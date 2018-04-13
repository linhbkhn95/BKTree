

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

                })
            })
    },
    getDetail:function(req,res){
        let tree_id  = req.body.tree_id||null
        if(tree_id){

            Tree.findOne({id:tree_id}).exec(async (err,tree)=>{
                if(err){
                    res.send(OutputInterface.errServer(err))
                }
                if(tree){
                    let grouptree = await Group_tree.findOne({id:tree.grouptree_id});
                    tree.groupname = grouptree.groupname;
                    tree.url_image = grouptree.url_image;

                    res.send(OutputInterface.success(tree))
                }
             
                res.send(OutputInterface.errServer('không tìm thấy cây'))
            })
        }
    },
    use_tree:function(req,res){
        let username = req.session.user.username;
        let wateruse = req.body.wateruse||0;
        let tree_id = req.body.tree_id || null
        if(tree_id){
            Tree.findOne({id:tree_id}).exec(async(err,tree)=>{
                if(err){
                    res.send(OutputInterface.errServer(err))
                }
                if(tree){
                    let dataHistorytree = {};
                    dataHistorytree.username = username ;
                    dataHistorytree.water_use = wateruse;
                    dataHistorytree.waterneed = tree.waterneed;
                    dataHistorytree.tree_id = tree_id;
                    dataHistorytree.time_use = Date.now()
                    tree.waternow += parseInt(wateruse)

                    let result  = await Historytree.create(dataHistorytree);
                    tree.save(()=>{
                        console.log('update thành công')
                        res.send(OutputInterface.success(tree))
                    })
                }
            })
        }
    },
    //set user cham soc cay
    set_user_user:function(req,res){
        let username = req.body.username ;
        let tree_id = req.body.tree_id;
        let time_user_use = Date.now()
         Tree.findOne({id:tree_id}).exec(async (err,tree)=>{
             if(err){

             }
             if(tree){
                 let time_use  = tree.time_user_use
                 if(!tree.username_use){
                    if(user){
                        res.send(OutputInterface.errServer(user))

                    }
                     await Tree.update({id:tree_id},{username_use:username_use,time_user_use:time_user_use});

                 }
                 else{
                    if(time_use&&CaculateTime.compareNow(time_use)<60){
                       Tree.update({id:tree_id},{username_use:username_use,time_user_use:time_user_use}).exec((err,treeUpdate)=>{
                           if(err){
                            return res.send(OutputInterface.errServer(err)) 
                           }
                           return res.send(OutputInterface.errServer(treeUpdate))

                       });
                        

                    }
                    let user = await User.findOne({username:tree.username});
                    if(user)

                        return res.send(OutputInterface.errServer('Cây đang dc chăm sóc bởi' +user.fullname))
                    return res.send(OutputInterface.success(tree))


                 }
             }
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

