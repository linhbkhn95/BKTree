           
           $('#listgrouptree').on('change', function() {
                let grouptree_id = $(this).find(":selected").val()
                getlistTree(grouptree_id)
            });

            function getPopupContent(data){
                var popupContent = "<div>";
					       
                if(data.url_image)
                        popupContent += "<div><img class='img-tree' style='width:100%' src='../../assets/"+data.url_image+"'></div>";
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
                    popupContent += "<div class='btn-remove'>";
                    popupContent+=  "<button onclick='return removeCood()' class='btn btn-danger'>"+'<i class="glyphicon glyphicon-remove"></i> Xóa </button>'
                    popupContent += "</div>";

                    return popupContent
            }
            function getall_coordinates() {

                $.ajax({

                    url: sUrl_OSM_Server + "coordinates/getall",
                    //   data: '{toado:"' + JSON.stringify(drawnItems.toGeoJSON()) + '",name:"' + name + '",note:"' + name + '"}',
                    // contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (data) {
                       
                      
                         if(data.EC==0){
                        //     L.geoJson(data.DT, {
                        //         onEachFeature: onEachFeature
                           
                        // }).addTo(map);

	//  L.marker(data.DT.features[0].geometry.coordinates, {icon: greenIcon}).bindPopup("I am a green leaf.11111").addTo(map);
	// L.marker([21.00623203956375,105.84283232688904], {icon: redIcon}).bindPopup("I am a red leaf.").addTo(map);
	// L.marker([105.84283232688904, -21.00623203956375], {icon: orangeIcon}).bindPopup("I am an orange leaf.").addTo(map);
                            data.DT.features.forEach(element => {
                                let Y  = parseFloat(element.geometry.coordinates[0]);
                                let X = parseFloat(element.geometry.coordinates[1])
                                let cood = [];
                                cood[0]=X, cood[1] = Y
                                console.log('status',element.properties.status)
                                let icon = element.properties.status=="tốt"?greenIcon:element.properties.status=="kém"?redIcon:orangeIcon
                                L.marker(cood,{icon}).bindPopup(getPopupContent(element.properties),customOptions).addTo(map);

                            });
                            
                        }
                        else{

                        }
                    

                   
                                                //getGeoJSON_FeatureGroup();

                    }
                })

               
            }
            function removeCood(){
                console.log('remove')
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
    
