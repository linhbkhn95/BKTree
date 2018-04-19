/**
 * StatisticalController
 *
 * @description :: Server-side logic for managing statisticals
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    statistic_historytree_by_sumwater:function(req,res){
        let tree_id = req.body.tree_id
        if(tree_id){
            StoredProcedure.query("call tree_bk.statistic_historytree_by_sumwater(?)", [tree_id], function (err, [data, server_status]) {
                if (err) {
                    return res.send(OutputInterface.errServer('Lỗi hệ thống'))
                }
                // console.log('data menu',data,server_status)

                return res.send(OutputInterface.success(data))
                
            });
        }
    },

    //thong ke so lan tuoi ctv
    thongke_user_theo_so_lan_tuoi:function(req,res){
            StoredProcedure.query("call tree_bk.thongke_user_theo_so_lan_tuoi()", [], function (err, [data, server_status]) {
                if (err) {
                    return res.send(OutputInterface.errServer('Lỗi hệ thống'))
                }
                // console.log('data menu',data,server_status)

                return res.send(OutputInterface.success(data))
                
            });
        
    },
    statistic_role:function(req,res){
        StoredProcedure.query("call tree_bk.statistic_role()", [], function (err, [data, server_status]) {
            if (err) {
                return res.send(OutputInterface.errServer('Lỗi hệ thống'))
            }
            // console.log('data menu',data,server_status)

            return res.send(OutputInterface.success(data))
            
        });
    },
    statistic_tree:function(req,res){
        StoredProcedure.query("call tree_bk.statistic_user()", [], function (err, [data, server_status]) {
            if (err) {
                return res.send(OutputInterface.errServer('Lỗi hệ thống'))
            }
            // console.log('data menu',data,server_status)

            return res.send(OutputInterface.success(data))
            
        });
    },
    statistic_historytree_by_turns :function(req,res){
        let tree_id = req.body.tree_id

        StoredProcedure.query("call tree_bk.statistic_historytree_by_turns(?)", [tree_id], function (err, [data, server_status]) {
            if (err) {
                return res.send(OutputInterface.errServer('Lỗi hệ thống'))
            }
            // console.log('data menu',data,server_status)

            return res.send(OutputInterface.success(data))
            
        });
    },
    statis_status_tree :function(req,res){
        console.log('statis_status_tree')
        StoredProcedure.query("call tree_bk.statis_status_tree()", [], function (err, [data, server_status]) {
            if (err) {
                return res.send(OutputInterface.errServer('Lỗi hệ thống'))
            }
            // console.log('data menu',data,server_status)

            return res.send(OutputInterface.success(data))
            
        });
    },
    thongke_tree_theo_lich_su_tuoi:function(req,res){
        StoredProcedure.query("call tree_bk.thongke_tree_theo_lich_su_tuoi()", [], function (err, [data, server_status]) {
            if (err) {
                return res.send(OutputInterface.errServer('Lỗi hệ thống'))
            }
            // console.log('data menu',data,server_status)

            return res.send(OutputInterface.success(data))
            
        });
    },
    statistic_user_watermax_for_a_tree:function(req,res){
        let tree_id = req.body.tree_id

        StoredProcedure.query("call tree_bk.statistic_user_watermax_for_a_tree(?)", [tree_id], function (err, [data, server_status]) {
            if (err) {
                return res.send(OutputInterface.errServer('Lỗi hệ thống'))
            }
            // console.log('data menu',data,server_status)

            return res.send(OutputInterface.success(data))
            
        });
    },
    thongke_tree_theo_ten:function(req,res){
        StoredProcedure.query("call tree_bk.thongke_tree_theo_ten()", [], function (err, [data, server_status]) {
            if (err) {
                return res.send(OutputInterface.errServer('Lỗi hệ thống'))
            }
            // console.log('data menu',data,server_status)

            return res.send(OutputInterface.success(data))
            
        });
    }

};

