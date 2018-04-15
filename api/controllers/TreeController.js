

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
        Tree.find({grouptree_id:grouptree_id}).exec(async(err,listtree)=>{
            if(err){
                res.send(OutputInterface.errServer(err))
            }
            let grouptree = Group_tree.findOne({id:grouptree_id});
            let groupname = grouptree.groupname;
            
            if(grouptree){
                Promise.all(listtree.map((item) => {
                    return new Promise(async (resolve, reject) => {
                        let coordinate = await self.getCoodinate(item.id)
                        let status_tree =""
                        
                        let result  = await self.get_tree_status(item);
                        let status_code = result.EC 
                        if(result.EC==0){
                            status_tree = "Chưa có ai chăm sóc"
                        }
                        if(result.EC==1){
                            status_tree = result.DT.fullname +" đang chăm sóc"
                        }
    
                        var newitem = { ...item, coordinate ,status_tree,groupname }
    
                        resolve(newitem)
                    })
                }))
                    .then((data_response) => {
    
                       
                        res.send(OutputInterface.success(data_response))
    
                    })
            }
            else{
                res.send(OutputInterface.errServer('Không tìm thấy nhóm cây'))
            }
           
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
    getlist: async function (req, res) {
        // if (!req.isSocket) {
        //     sails.log.debug('no socket');
        //     return res.badRequest();
        // }
        // if (req.isSocket) {
        //     // If this code is running, it's made it past the `isAdmin` policy, so we can safely
        //     // watch for `.publishCreate()` calls about this model and inform this socket, since we're
        //     // confident it belongs to a logged-in administrator.
        //     sails.log.debug('is socket');
        //     //để  đăng kí sự kiện lăng nghe model Command thay đổi kích hoạt sự kiện on('command') bên phía client
        //     Group_tree.watch(req);
        // }
        let username = req.session.user.username;
        let self = this;

        // let listGroup_treemanage = await Group_treemanage.find({ TLID: TLID, select: ['CUSTID'] })

        // let result = await Promise.all(listGroup_treemanage.map((item) => {
        //     return new Promise((resolve, reject) => {
        //         resolve(item.CUSTID)
        //     })
        // }))
      
        var keySearch = Paging.generate_keySearch(req.body)
        let dataCount = { ...keySearch }
        console.log('keysearch',keySearch)
        // chèn thêm điều kiện find dữ liệu theo trường Custid
        // dataCount.where.CUSTID = result
        // tính số  bản ghi để  phân trang
        let length = await Tree.count(keySearch)
        let { pagesize, page } = req.body;
        pagesize = parseInt(pagesize);
        let numOfPages = Math.ceil(length / pagesize);
        let response = await Tree.find(keySearch).paginate({ limit: pagesize, page: req.body.page })
        // var DT = { data: response, numOfPages: numOfPages }
        // return res.send(OutputInterface.success(DT));
        if (response.length > 0) {
            var listgrouptree = await Group_tree.find();
            Promise.all(response.map((item) => {
                return new Promise(async (resolve, reject) => {
                    let groupname = ''
                    let rs = listgrouptree.filter(grouptree => grouptree.id == item.grouptree_id)
                    if (rs.length > 0) {
                        groupname = rs[0].groupname;
                    }
                   
                    var newitem = { ...item, groupname }

                    resolve(newitem)

                })
            }))
                .then((data_response) => {
                    var DT = { data: data_response, numOfPages: numOfPages }
                    return res.send(OutputInterface.success(DT));
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
    get_tree_status :function(tree){
        // let tree ={time_use:null,username_use:'linhtd',tree_id:'1'}
        return new Promise(async(resolve,reject)=>{
            try {
                
                if(tree){
                    let time_use  = tree.time_user_use
                      
                    if(!tree.username_use){ //không có ai đang chăm sóc cây
                      resolve({EC:"0",DT:"Cây chưa có ai chăm sóc"})
                       // await Tree.update({id:tree_id},{username_use:username_use,time_user_use:time_user_use});
        
                    }
                    else{
                      
                       if(time_use&&CaculateTime.compareNow(time_use)<60){ //Nếu đang có ng chăm sóc cây, thời gian chăm sóc nhỏ hơn 1 phút
                        let user = await User.findOne({username:tree.username_use});
                         if(user){
                            resolve({EC:"1",DT:user})
                         }
                        resolve( {EC:"0",DT:"Không tìm thấy user"})
                       
               
        
                       }
                       else{
                          await Tree.update({id:tree.tree_id},{username_use:null,time_user_use:null})
                          resolve({EC:"0",DT:"Người người tưới cây quá lâu"})
                       }
                    }
                
        
        
                    
                }
            } catch (error) {
               resolve({EC:"-1",DT:error})
            }
           
        })
      
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

