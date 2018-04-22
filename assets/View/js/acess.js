            // $(document).mouseup(function(e) 
            // {
            //     var container = $("#sidebar-wrapper");

            //     // if the target of the click isn't the container nor a descendant of the container
            //     if (!container.is(e.target) && container.has(e.target).length === 0) 
            //     {
            //         container.hide();
            //     }
            // }); 
                        


           $('#listgrouptree').on('change', function() {
                let grouptree_id = $(this).find(":selected").val()
                getlistTree(grouptree_id)
            });
            function refreshData(){
                getSession(function(user){
                    // GetData_Map();
                    getlistGroupTree()
                    // getall_coordinates()
                });
             

            }
            function getPopupContent(data){
                var popupContent = "<div>";
					       
                if(data.url_image)
                        popupContent += "<div><img class='img-tree' style='width:100%' src='../"+data.url_image+"'></div>";
                        popupContent += "</div>";

                if (data&& data.name) {

                    popupContent += "<div class='line-info'><strong>Nhóm cây</strong>: "+ data.name +"</div>";
                    popupContent += "</div>";


                }
                if (data && data.note) {
                    popupContent += "<div>";
                    popupContent += "<div class='line-info'><strong>Mã cây</strong>: "+ data.note +"</div>"
                    popupContent += "</div>";
                }
                if (data && data.status) {
                    popupContent += "<div>";
                    popupContent += "<div class='line-info'><strong>Trạng thái</strong>: "+ data.status +"</div>"
                    popupContent += "</div>";
                }   
                if (data && data.short) {
                    popupContent += "<div>";
                    popupContent += "<div class='line-info'><strong>Lượng nước cần tưới</strong>: "+ data.short +" ml</div>"
                    popupContent += "</div>";
                }   
                   if(!data.datanew&&user.rolecode=="PM"){
                    popupContent += "<div id='btn-remove-tree' class='btn-remove'>";
                    popupContent+=  "<button onclick='return user_tree("+data.tree_id+")' class='btn btn-primary'>"+'<i class="glyphicon glyphicon-tint"></i> Tưới cây </button>'
                    popupContent+=  "<button style='margin-left:3px' onclick='return removeCood("+data.tree_id+")' class='btn btn-danger'>"+'<i class="glyphicon glyphicon-remove"></i> Xóa </button>'
                    popupContent += "</div>";
                   }
                   else{
                    popupContent += "<div id='btn-remove-tree' class='btn-remove'>";
                    popupContent+=  "<button onclick='return user_tree("+data.tree_id+")' class='btn btn-primary'>"+'<i class="glyphicon glyphicon-tint"></i> Tưới cây </button>'
                    // popupContent+=  "<button style='margin-left:3px' onclick='return removeCood("+data.tree_id+")' class='btn btn-danger'>"+'<i class="glyphicon glyphicon-remove"></i> Xóa </button>'
                    popupContent += "</div>";
                   }

                    return popupContent
            }
            function logout(){

            }
            
            function getall_coordinates() {

                $.ajax({

                    url: sUrl_OSM_Server + "coordinates/getall",
                    //   data: '{toado:"' + JSON.stringify(drawnItems.toGeoJSON()) + '",name:"' + name + '",note:"' + name + '"}',
                    // contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                       
                      
                         if(data.EC==0){
                            L.geoJson(data.DT, {
                                onEachFeature: onEachFeatureTree,
                                
                                pointToLayer: function(feature, latlng) {
                                        // var smallIcon = new L.Icon({
                                        //         iconSize: [27, 27],
                                        //         iconAnchor: [13, 27],
                                        //         popupAnchor:  [1, -24],
                                        //         iconUrl:feature.properties
                                            
                                        // });
                                    let icon
                                    if(feature.properties.status)
                                         icon= feature.properties.status.trim()=="tốt"?greenIcon:feature.properties.status.trim()=="kém"?redIcon:orangeIcon
                                    else
                                        icon  = greenIcon 
                                        return L.marker(latlng, {icon});
                                    },
                           
                        }).addTo(map);


                        //add từng điểm trên bản đồ nhưng k edit dc điểm trên bản đồ

                            // data.DT.features.forEach(element => {
                            //     let Y  = parseFloat(element.geometry.coordinates[0]);
                            //     let X = parseFloat(element.geometry.coordinates[1])
                            //     let cood = [];
                            //     cood[0]=X, cood[1] = Y
                            //     console.log('status',element.properties.status.trim()=="tốt")
                            //     let icon
                            //         if(element.properties.status)
                            //              icon= element.properties.status.trim()=="tốt"?greenIcon:element.properties.status.trim()=="kém"?redIcon:orangeIcon
                            //         else
                            //             icon  = greenIcon
                            //         L.marker(cood,{icon}).bindPopup(getPopupContent(element.properties),customOptions).addTo(map);

                            // });
                            
                        }
                        else{

                        }
                    

                   
                                                //getGeoJSON_FeatureGroup();

                    }
                })

               
            }
              //sự kiện khi click vào layer
        function onEachFeatureTree(feature, layer) {
           
       
            layer.bindPopup(getPopupContent(feature.properties));
            drawnItems.addLayer(layer);

        }
            //xóa diểm trên bản đò"
            function removeFromListCoordinates(tree_id){
                $.each(listcoordinates, function(i){
                    if(listcoordinates[i].name === 'Kristian') {
                        listtree.splice(i,1);
                        return false;
                    }
                });
            }
            function removeCood(tree_id){
                console.log('remove',tree_id)
                var result = confirm("Bạn có chắc chắn không?");
                if (result) {
                    $.ajax({

                        type: "POST",
                        url: sUrl_OSM_Server + "coordinates/delete",
                        //   data: '{toado:"' + JSON.stringify(drawnItems.toGeoJSON()) + '",name:"' + name + '",note:"' + name + '"}',
                          data: {tree_id},
                        // contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function (data) {
                            if(data.EC==0){
                                alert('Xóa thành công')
                            }
                            else{
                                alert('Xóa không thành công')
                            }
                            // $('#tree')
                            //     .find('option')
                            //     .remove()
                            //     .end()
                            
                            // if(data.EC==0){
                               
                            //     listtree = data.DT
                            //     console.log('listtree',listtree)
                            //     for(var a = 0; a < data.DT.length; a++){
                            //         $('#tree').append($('<option></option>').val(data.DT[a].id).html(data.DT[a].code));
                            //     };
                                
                            // }
                            // else{
    
                            // }
                        
    
                       
                                                    //getGeoJSON_FeatureGroup();
    
                        }
                    })
                }
               
            }
            function getSession(cb) {

                $.ajax({

                    url: sUrl_OSM_Server + "auth/get_session",
                    //   data: '{toado:"' + JSON.stringify(drawnItems.toGeoJSON()) + '",name:"' + name + '",note:"' + name + '"}',
                    // contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                       
                         if(data.EC==0){
                            user = data.DT.user
                            if(data.DT.user.rolecode=="PM"){
                              
                                // $('#update-map').css({
                                //     'display' : 'block',
                                 
                                // });
                                $('#update-map').append
                                (   '<div style="text-align:center" class="col-md-12"><button class="btn btn-info btn-update"  type="button" onclick="return updateMap()">Cập nhật bản đồ</button></div>')
                             
                                cb(user)
                            }
                            else{
                                cb(null)
                            }
                         }
                       
                                                //getGeoJSON_FeatureGroup();

                    }

             });
            }
            function getlistTree(id) {

                $.ajax({

                    type: "POST",
                    url: sUrl_OSM_Server + "tree/gitlist_grouptree",
                    //   data: '{toado:"' + JSON.stringify(drawnItems.toGeoJSON()) + '",name:"' + name + '",note:"' + name + '"}',
                      data: {grouptree_id:id},
                    // contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                       
                        $('#tree')
                            .find('option')
                            .remove()
                            .end()
                        
                        if(data.EC==0){
                           
                            listtree = data.DT
                            console.log('listtree',listtree)
                            for(var a = 0; a < data.DT.length; a++){
                                $('#tree').append($('<option></option>').val(data.DT[a].id).html(data.DT[a].code));
                            };
                        }
                        else{

                        }
                    

                   
                                                //getGeoJSON_FeatureGroup();

                    }

                });
    
    // vào từng thành phần nhỏ để lấy
    //item là chỉ số của layer
 
}
         function getlistGroupTree() {

                $.ajax({
    
                    type: "POST",
                    url: sUrl_OSM_Server + "group_tree/getlist_options",
                    //   data: '{toado:"' + JSON.stringify(drawnItems.toGeoJSON()) + '",name:"' + name + '",note:"' + name + '"}',
                    //  data: "{'toado':'" + data + "','name':'" + name + "','note':'" + name + "'}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {
    
                        console.log(data);
                        
                        getlistTree(data[0].id)

                       listgrouptree = data
                       for(var a = 0; a < data.length; a++){
                            $('#listgrouptree').append($('<option></option>').val(data[a].id).html(data[a].groupname));
                        };
                        
                                                //getGeoJSON_FeatureGroup();
    
                    }
    
                });
                
                // vào từng thành phần nhỏ để lấy
                //item là chỉ số của layer
             
            }
    
