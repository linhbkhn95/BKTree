/**
 * MaptreeController
 *
 * @description :: Server-side logic for managing maptrees
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
        createMap:function(req,res){
             let data = req.body;
            //  console.log(req)
             console.log('datamap',data)
            //  console.log('datamap',JSON.parse(data))
             Maptree.create(data).exec((err,map)=>{
                 if(err){
                    console.log('err',err)
                    res.send(err)
                 }
                 console.log('map',map)
                 res.send(map)
             })
            
        },
        
        getMap:function(req,res){
            console.log('getmap')
            Maptree.find().exec((err,list)=>{
                if(err){
                    res.send([])
                }
                console.log('getmap',list)

                return res.json(list)
            })
        }
};

