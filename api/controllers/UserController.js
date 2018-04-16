/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: async function (req, res) {
     
        console.log('req',req.body)
        try {
          var userexits= await User.findOne({username:req.body.username});
          if(userexits){
            res.send(OutputInterface.errServer('Tên đăng nhập đã tồn tại'))
          }
          User.create(req.body).exec(function (err, user) {
            if (err) {
              return  res.send(OutputInterface.errServer(err))
  
            }
            // If user created successfuly we return user and token as response
            if (user) {
              // NOTE: payload is { id: user.id}
                 return res.send(OutputInterface.success(user))
  
              // res.json(200, {user: user, token: jwToken.issue({id: user.id})});
            }
            return  res.send(OutputInterface.errServer('Lỗi hệ thống'))
  
          });
        } catch (error) {
          return res.send(OutputInterface.errServer(error.toString()))
        }
     
      },
      updateProfile:function(req,res){
          let username = req.session.user.username;
          console.log('body',req.body)
          if(username){
               User.update({username},req.body).exec((err,userUpdate)=>{
                if(err){
                  res.send(OutputInterface.errServer(err))
                }
                if(userUpdate&&userUpdate[0]){
                  let data = {}
                  data = {...req.session.user,...userUpdate[0]}
                  console.log('data',data)
                   req.session.user = data ;
                  return res.send(OutputInterface.success(data))
                }
                res.send(OutputInterface.errServer('Lỗi hệ thống'))
              })
          }
      },
      change_pass:function(req,res){
          let {password,newpassword} = req.body
          let username = req.session.user.username
         try {
          User.findOne({username:username}).exec((err,user)=>{
            if(err){
              return res.send(OutputInterface.errServer('Lỗi hệ thống'))
            }

            if(user){
                User.comparePassword(password, user, async function (err, valid) {
                  if (err) {
                    return res.send(OutputInterface.errServer('Lỗi hệ thống'))
                  }

                 if(valid){
                    // await User.update({username:username},{password:newpassword});
                    // bcrypt.hash(values.password, salt, function (err, hash) {
                    //   if(err) return next(err);
                    //   console.log('passs',hash)
                    //   values.encryptedPassword = hash;
                    //   next();
                    // })
                    User.updatePassword(username,password,function(err,userUpdate){
                        if(err){
                          return res.send(OutputInterface.errServer('Lỗi hệ thống'))

                        }
                        console.log('usserdadad',userUpdate,err)
                        if(userUpdate){
                          return res.send(OutputInterface.success('Cập nhật thành công'))
                        }
                        else
                         return res.send(OutputInterface.errServer('Lỗi hệ thống'))

                    })
                   
                  }
                else
                 return res.send(OutputInterface.errServer('Mật khẩu không chính xác'))
                })
            }
            else{
             return res.send(OutputInterface.errServer('Không tìm thấy user'))
            }
          
        })
         } catch (error) {
            return res.send(OutputInterface.errServer(error.toString()))
          
         }
        
       },
      get_detail:function(req,res){
          let username = req.body.username;
          if(username){
            console.log('usename',username)
            try {
              User.findOne({username:username}).exec(async(err,userinfo)=>{
                if(err){
 
                }
             
                if(userinfo){
                  userinfo.rolename = "Cộng tác viên"
                  let role = await Role.findOne({rolecode:userinfo.rolecode});
                  console.log('role',role)
                  if(role&&role.rolename){
                     userinfo.rolename = role.rolename
                  }
                  return res.send(OutputInterface.success(userinfo))
                }
                res.send(OutputInterface.errServer('Không tìm thấy user'))
              })
            } catch (error) {
              return res.send(OutputInterface.errServer(error.toString()))
            }
             
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
        //     Group_user.watch(req);
        // }
        let username = req.session.user.username;
        let self = this;

        // let listGroup_usermanage = await Group_usermanage.find({ TLID: TLID, select: ['CUSTID'] })

        // let result = await Promise.all(listGroup_usermanage.map((item) => {
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
        let length = await User.count(keySearch)
        let { pagesize, page } = req.body;
        pagesize = parseInt(pagesize);
        let numOfPages = Math.ceil(length / pagesize);
        let response = await User.find(keySearch).paginate({ limit: pagesize, page: req.body.page })
        // var DT = { data: response, numOfPages: numOfPages }
        // return res.send(OutputInterface.success(DT));
            var listRole = await Role.find();
            Promise.all(response.map((item) => {
                delete item['encryptedPassword']
                return new Promise(async (resolve, reject) => {
                    let rolename = ''
                    let rs = listRole.filter(role => role.rolecode == item.rolecode)
                    if (rs.length > 0) {
                        rolename = rs[0].rolename;
                    }
                   
                    var newitem = { ...item, rolename }

                    resolve(newitem)

                })
            }))
                .then((data_response) => {
                    var DT = { data: data_response, numOfPages: numOfPages }
                    return res.send(OutputInterface.success(DT));
                })
        
       

    },
    insert:async function(req,res){
      let data = req.body
      data.password="1";
      try {
          let user = await User.findOne({username:data.username});
          if(!user)
            User.create(data).exec((err,user)=>{
                if(err){
                  res.send(OutputInterface.errServer(err))
                }
                return res.send(OutputInterface.success(user))
    
            })
            else{
              res.send(OutputInterface.errServer('Tên đăng nhập đã tồn tại'))
            }
      } catch (error) {
          return res.send(OutputInterface.errServer(error))
      }
     
  },
  update:function(req,res){
      let data = req.body
      User.update({username:data.username},data).exec((err,user)=>{
          if(err){
              res.send(OutputInterface.errServer(err))
          }
          res.send(OutputInterface.success(user))

      })
  },
  delete:async function(req,res){
      let data = req.body
      let user = await User.findOne({username:data.username});
      if(user&&user.status!='Hoạt động')
       User.destroy({username:data.username}).exec((err,user)=>{
          if(err){
              res.send(OutputInterface.errServer(err))
          }
          res.send(OutputInterface.success(user))

       })
       else{
          res.send(OutputInterface.errServer('Không được xóa user đang hoạt động'))
       }
  },  
};

