/**
 * Group_treeController
 *
 * @description :: Server-side logic for managing group_trees
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    // insert:function(req,res){
    //     let data = req.body;
    //     Group_tree.create(data).exec((err,gt)=>{
    //         if(err){
    //             res.send(OutputInterface.errServer(err))
    //         }
    //         res.send(OutputInterface.success(gt))
    //     })
    // },
    insert: function (req, res) {
        // upload.single('file')
        // console.log()
        // sails.log.info('req.headers', req);
        let file = req.file('file');
        // let filename = req.file.
        // console.log(file)
    
    
        // fileReader.setNodeChunkedEncoding(true || false);
        // fileReader.readAsBinaryString(new File(file));
        // fileReader.on('data', function (data) {
        //     console.log("chunkSize:", data.length);
        //   });
        let data =req.body
        console.log('aa',req.groupname)
        //  data.groupname = req.headers.groupname;
        //  data.country = req.headers.country;
        //  data.description = req.headers.description
    
        req.file('file').upload({
          // don't allow the total upload size to exceed ~100MB
          maxBytes: 100000000,
          // set the directory
          dirname: '../../assets/images/tree'
        }, async function (err, uploadedFile) {
          // if error negotiate
          data.url_image = ""
          if (err)  data.url_image="";

            if(uploadedFile&&uploadedFile[0]&&uploadedFile.fd&&uploadedFile.fb.length>0){
                data.url_image_gobal = uploadedFile[0].fd
                var img = uploadedFile[0].fd.split("/");
                
                data.url_image = '/images/tree/'+img[img.length-1]
            }
          Group_tree.create(data).exec((err,gt)=>{
            if(err){
                res.send(OutputInterface.errServer(err))
            }
            res.send(OutputInterface.success(gt))
          })
          // logging the filename
          // console.log('filename',uploadedFile[0].filename);
          // console.log('url',uploadedFile[0].fd);
          // send ok response
         
        
    
        });
      
      },
      update:async  function (req, res) {
        // upload.single('file')
        // console.log()
        sails.log.info('req.headers', req.headers);
        let file = req.file('file');
        // let filename = req.file.
        // console.log(file)
    
    
        // fileReader.setNodeChunkedEncoding(true || false);
        // fileReader.readAsBinaryString(new File(file));
        // fileReader.on('data', function (data) {
        //     console.log("chunkSize:", data.length);
        //   });
        let data ={}
         data.groupname = req.headers.groupname;
         data.country = req.headers.country;
         data.description = req.headers.description
         let grouptree_id = req.headers.grouptree_id
        
        req.file('file').upload({
          // don't allow the total upload size to exceed ~100MB
          maxBytes: 100000000,
          // set the directory
          dirname: '../../assets/images/tree'
        }, async function (err, uploadedFile) {
          // if error negotiate
          if (err) return res.negotiate(err);
             console.log('filename',uploadedFile[0]);
             data.url_image_gobal = uploadedFile[0].fd
           var img = uploadedFile[0].fd.split("/");
           
           data.url_image = '/images/tree/'+img[img.length-1]
          Group_tree.create(data).exec((err,gt)=>{
            if(err){
                res.send(OutputInterface.errServer(err))
            }
            res.send(OutputInterface.success(gt))
          })
          // logging the filename
          // console.log('filename',uploadedFile[0].filename);
          // console.log('url',uploadedFile[0].fd);
          // send ok response
         
        
    
        });
      
      },
    delete:async function(req,res){
        let idDelete = req.body.idDelete
        console.log('idle',idDelete)
        let count_listtree = await Tree.find({grouptree_id:idDelete});
        if(count_listtree.length>0)
            res.send(OutputInterface.errServer('Bạn phải xóa hết các cây trong nhóm cây trước'))

        
        Group_tree.destroy({id:idDelete}).exec((err,gt)=>{
            if(err){
                res.send(OutputInterface.errServer(err))
            }
            res.send(OutputInterface.success(gt))
        })
    },
    getlist_options:function(req,res){
        Group_tree.find().exec((err,list)=>{
            if(err){
                res.send([])
            }
            
            res.send(list)
        })
    },
    getoptions_reactselect:function(req,res){
        Group_tree.find().exec((err,list)=>{
            if(err){
                res.send([])
            }
            var result = list.map((item)=>{
                return{
                    label:item.groupname,
                    value:item.id
                }
            })
            res.send(result);
        })
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
        let length = await Group_tree.count(keySearch)
        let { pagesize, page } = req.body;
        pagesize = parseInt(pagesize);
        let numOfPages = Math.ceil(length / pagesize);
        let response = await Group_tree.find(keySearch).paginate({ limit: pagesize, page: req.body.page })
        var DT = { data: response, numOfPages: numOfPages }
        return res.send(OutputInterface.success(DT));
        // if (response.length > 0) {
        //     var custtypes = await Allcode.find({ CDTYPE: 'CF', CDNAME: 'CUSTTYPE' });
        //     var statusdescs = await Allcode.find({ CDTYPE: 'CF', CDNAME: 'CFSTATUS' });
        //     Promise.all(response.map((item) => {
        //         return new Promise(async (resolve, reject) => {
        //             let CUSTTYPE_DESC = ''
        //             let STATUS_DESC = ''
        //             let rs = custtypes.filter(custtype => custtype.CDVAL == item.CUSTTYPE)
        //             if (rs.length > 0) {
        //                 CUSTTYPE_DESC = rs[0].CDCONTENT;
        //             }
        //             rs = statusdescs.filter(statusdesc => statusdesc.CDVAL == item.STATUS)

        //             if (rs.length > 0) {
        //                 STATUS_DESC = rs[0].CDCONTENT;
        //             }
        //             var newitem = { ...item, STATUS_DESC, CUSTTYPE_DESC }

        //             resolve(newitem)

        //         })
        //     }))
        //         .then((data_response) => {
        //             var DT = { data: data_response, numOfPages: numOfPages }
        //             return res.send(Ioutput.success(DT));
        //             resolve(data_response)
        //         })
       // }


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

