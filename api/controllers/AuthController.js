/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    login: function (req, res) {
        let {username,password} = req.body

       try {
        User.findOne({username:username.trim()}).exec(  (err, user)=> {
          if(err){
             return  res.send(OutputInterface.errServer(err))
          }
          if (!user) {
         
            return res.send(OutputInterface.errServer('Tên đăng nhập không chính xác'))
  
          }
          User.comparePassword(password, user, async function (err, valid) {
            if (err) {
              return res.send(OutputInterface.errServer('Lỗi hệ thống'))
            }

            if (valid) 
             console.log(req.session)
              let role = await Role.findOne({rolecode:user.rolecode});
              if(role){
                  user.rolename= role.rolename;
                  user.rolecode = role.rolecode
              }
              else{
                user.rolecode = 'CTV'
                user.rolename = 'Cộng tác viên'
              }

              console.log('role',role)
               req.session.user = user;
               console.log(req.session)

              // res.json({
              //   user: user,
              //   token: jwToken.issue({id : user.id,username:user.email })
              // });
              return res.send(OutputInterface.success({
                user: user,
                token: jwToken.issue({id : user.id,username:user.username,rolecode:user.rolecode,rolename:user.rolename,fullname:user.fullname,url_avatar:user.url_avatar })
              }))
            
            return res.send(OutputInterface.errServer('Mật khẩu không chính xác'))
          });
        })
       } catch (error) {
          return res.send(OutputInterface.errServer('Lỗi hệ thống'))

       }
      },
      logOut:function(req,res){
        console.log('logout',req.session)
          if(req.session.user){
            delete req.session.user
             res.send(OutputInterface.success('Đăng xuất thành công'))
          }
          else{
            return res.send(OutputInterface.errServer('Chưa login'))
          }
      },
       get_session :function(req,res){
         console.log('session',req.session)
          if(req.session.user){
            let user = req.session.user
            return res.send(OutputInterface.success({
              user: user,
              token: jwToken.issue({id : user.id,username:user.username,rolecode:user.rolecode,rolename:user.rolename,fullname:user.fullname,url_avatar:user.url_avatar })
            }))
          }
          else{
           return  res.send(OutputInterface.errServer('Chưa login'))
          }
        
      }
};

