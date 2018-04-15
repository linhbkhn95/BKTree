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
      }
};

