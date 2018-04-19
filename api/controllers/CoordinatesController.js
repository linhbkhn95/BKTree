
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
         getall:function(req,res){
            StoredProcedure.query("call tree_bk.getall_coordinates()", [], function (err, [data, server_status]) {
                if (err) {
                    return res.send(OutputInterface.errServer('Lỗi hệ thống'))
                }
                // console.log('data menu',data,server_status)
                // { "type": "FeatureCollection", "features": [{ "type": "Feature", "properties": { "name": "diem1" }, "geometry": { "type": "Point", "coordinates": [105.81516265869139, 21.037723438590533]} }, { "type": "Feature", "properties": { "name": "diem2" }, "geometry": { "type": "Point", "coordinates": [105.81087112426758, 21.031154308064544]} }, { "type": "Feature", "properties": { "name": "diem3" }, "geometry": { "type": "Point", "coordinates": [105.8287239074707, 21.036922340619142]}}] }
              
                let result ={
                    type:"FeatureCollection",

                }
                let features = data.map((item)=>{
                     return{
                         type:"Feature",
                         properties:{
                             name:item.groupname,
                             note:item.code,
                             status:item.status,
                             url_image:item.url_image,

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
};

