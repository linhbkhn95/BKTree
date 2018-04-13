/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    create: function (req, res) {
     
        console.log('req',req.body)
        try {
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
            return  res.send(OutputInterface.errServer('not user'))
  
          });
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

