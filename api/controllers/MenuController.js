/**
 * MenuController
 *
 * @description :: Server-side logic for managing menus
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getmenu_by_role:function(req,res){
        let user = req.session.user
        if(user){
            if(user.rolecode){
                StoredProcedure.query("call tree_bk.getlist_menu_by_role(?)", [user.rolecode], function (err, [data, server_status]) {
                    if (err) {
                        return res.send(OutputInterface.errServer('Lỗi hệ thống'))
                    }
                    console.log('data menu',data,server_status)
                    return res.send(OutputInterface.success(data))
                      
                });
            }
        }
        else{
            return res.send(OutputInterface.errServer('Chưa đăng nhập')) 
        }
    }
};

