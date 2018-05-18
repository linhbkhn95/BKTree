function showModalUseWater(tree_id,groupname,code){

    $('#myModal').modal('show');
         console.log('data',tree_id,groupname,code)
        $('#usertree_groupname').val(groupname);
        $('#usertree_code').val(code)
  
        $('#usertree_tree_id').val(tree_id)

}
function showModalDetail(tree_id){
    $('#modalDetail').modal('show');
    $('#detail_imamge').attr('src','');

    $.ajax({

                type: "POST",
                url: sUrl_OSM_Server + "tree/getDetail",
                  data: {tree_id},
                // contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    if(data.EC==0){
                        console.log(data)
                        $('#detail_image').attr('src',"/"+data.DT.url_image);
                        $('#detail_groupname').val(data.DT.groupname);
                        $('#detail_code').val(data.DT.code)
                  
                        $('#detail_waterneed').val(data.DT.waterneed)
                        $('#detail_waternow').val(data.DT.waternow);
                        $('#detail_begindate').val(data.DT.begindate)
                  
                    }
                    else{

                    }

                }
            })
}
function usetree(){
    let tree_id = $('#usertree_tree_id').val()
    let wateruse = $('#usertree_water').val()
    console.log('usetree',tree_id,wateruse)
    if(wateruse&&wateruse>0){
      
        $(function () {
                 
        
            io.socket.post('/tree/use_tree',{wateruse,tree_id},(res,status)=>{
                console.log(res)
                if(res.EC==0){
                    alert('Tưới thành công')
                //    self.state.infoTree.waternow = res.DT.waternow;
                   
                //    self.setState({infoTree:self.state.infoTree})
                //    toast.success('Tưới nước thành công', {
                //     position: toast.POSITION.TOP_CENTER
                //     });
                }
                else{

                }
            })
            $('#myModal').modal('toggle');
         });
    }
    else
        alert('Bạn chưa tưới nước !')
}