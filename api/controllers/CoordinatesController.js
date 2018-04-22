
/**
 * CoordinatesController
 *
 * @description :: Server-side logic for managing coordinates
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
        add:function(req,res){
            let data = req.body;
            let listcoordinater = JSON.parse(data.data);
            console.log(
             'list',listcoordinater   
            )
            if(listcoordinater.length>0)
                    Promise.all(listcoordinater.map((item)=>{
                        return new Promise((resolve,reject)=>{
                                let datacoordinater = {}
                                datacoordinater.data = item; 
                                datacoordinater.tree_id = item.properties.tree_id;
                                datacoordinater.X = item.geometry['coordinates'][0];
                                datacoordinater.Y = item.geometry['coordinates'][1];
                                Coordinates.create(datacoordinater).exec((err,coordinates)=>{
                                    if(err){
                                        resolve(null)
                                    }
                                resolve(coordinates)
                                })
                            })
                        })).then((respone)=>{
                            res.send(OutputInterface.success(respone))
                        })
                else{
                    let datacoordinater = {}
                    datacoordinater.data = listcoordinater; 
                    datacoordinater.tree_id = listcoordinater.properties.tree_id;
                    datacoordinater.X = listcoordinater.geometry['coordinates'][0];
                    datacoordinater.Y = listcoordinater.geometry['coordinates'][1];
                    Coordinates.create(datacoordinater).exec((err,coordinates)=>{
                        if(err){
                            res.send(OutputInterface.errServer(err))                        }
                        res.send(OutputInterface.success(coordinates))
                    })
                }
                
         },
         delete:function(req,res){
                let tree_id = req.body.tree_id
                console.log(req.body);
                Coordinates.destroy({tree_id}).exec((err,coordinates)=>{
                    if(err){
                        res.send(OutputInterface.errServer(err))                        }
                    res.send(OutputInterface.success(coordinates))
                })
            
         },
         getlist_grouptree:function(req,res){


         },
         
         getall:function(req,res){
             let data = {}
             if(req.body)
                   data  = req.body;
            let grouptree_id = data.grouptree_id||0
            StoredProcedure.query("call tree_bk.getall_coordinates(?)", [grouptree_id], function (err, [data, server_status]) {
                if (err) {
                    return res.send(OutputInterface.errServer('Lỗi hệ thống'))
                }
                // console.log('data menu',data,server_status)
                // { "type": "FeatureCollection", "features": [{ "type": "Feature", "properties": { "name": "diem1" }, "geometry": { "type": "Point", "coordinates": [105.81516265869139, 21.037723438590533]} }, { "type": "Feature", "properties": { "name": "diem2" }, "geometry": { "type": "Point", "coordinates": [105.81087112426758, 21.031154308064544]} }, { "type": "Feature", "properties": { "name": "diem3" }, "geometry": { "type": "Point", "coordinates": [105.8287239074707, 21.036922340619142]}}] }
              
                let result ={
                    type:"FeatureCollection",

                }
               
                let features = data.map((item)=>{
                    console.log('item',item)
                     return{
                         type:"Feature",
                         properties:{
                             name:item.groupname,
                             note:item.code,
                             status:item.status,
                             url_image:item.url_image,
                             tree_id:item.tree_id,
                             short:item.waterneed-item.waternow
                         },
                         geometry:{
                            type:"Point",
                            coordinates:[item.X,item.Y]
                         }
                     }
                })
                result.features =features
                return res.send(OutputInterface.success(result))
                
            });
         },
         getlist:function(req,res){
           let {listgrouptree_id} = req.body
           console.log('list',req.body.listgrouptree_id)
           
           let list =listgrouptree_id.map((item)=>{
               return item.value
           })
           if(list.length){
          
            console.log('listxxxx',list.toString())

                StoredProcedure.query("call tree_bk.getlist_coordinates(?)", [list.toString()], function (err, [data, server_status]) {
                    if (err) {
                        return res.send(OutputInterface.errServer('Lỗi hệ thống'))
                    }
                    // console.log('data menu',data,server_status)
                    // { "type": "FeatureCollection", "features": [{ "type": "Feature", "properties": { "name": "diem1" }, "geometry": { "type": "Point", "coordinates": [105.81516265869139, 21.037723438590533]} }, { "type": "Feature", "properties": { "name": "diem2" }, "geometry": { "type": "Point", "coordinates": [105.81087112426758, 21.031154308064544]} }, { "type": "Feature", "properties": { "name": "diem3" }, "geometry": { "type": "Point", "coordinates": [105.8287239074707, 21.036922340619142]}}] }
                    
                    let result ={
                        type:"FeatureCollection",

                    }
                    
                    let features = data.map((item)=>{
                        console.log('item',item)
                            return{
                                type:"Feature",
                                properties:{
                                    name:item.groupname,
                                    note:item.code,
                                    status:item.status,
                                    url_image:item.url_image,
                                    tree_id:item.tree_id,
                                    short:item.waterneed-item.waternow
                                },
                                geometry:{
                                type:"Point",
                                coordinates:[item.X,item.Y]
                                }
                            }
                    })
                    result.features =features
                    return res.send(OutputInterface.success(result))
                    
                });
            }
           else
                
               return res.send(OutputInterface.errServer(''))

        }
};

