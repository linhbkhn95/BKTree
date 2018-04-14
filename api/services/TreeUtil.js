module.exports ={
    set_status_tree:function(req,res){
           Tree.find().exec((err,listtree)=>{
            Promise.all(listtree.map((item) => {
                return new Promise(async (resolve, reject) => {
                    let coordinate = await self.getCoodinate(item.id)

                    var newitem = { ...item, coordinate  }

                    resolve(newitem)
                })
            }))
                .then((data_response) => {

                   
                    res.send(OutputInterface.success(data_response))

                })
            })
        
    }
}