var googleStreets = 'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}';

        //kiểu đồ  Hybrid:

        var googleHybrid = 'http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}';

        //kiểu bản đồ Satellite:

        var googleSat = 'http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}';

        // kiểu bản đồ  Terrain

        var googleTerrain = 'http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}';

        var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw';
        //chứa các layer group  

       

        var cities = new L.LayerGroup();
        var ass = new L.LayerGroup();
        //    
        //        L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.').addTo(cities),
        //		L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.').addTo(cities),
        //		L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.').addTo(cities),
        //		L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.').addTo(cities);

//            var data = [{ "type": "FeatureCollection", "features": [{ "type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [105.88485717773438, 21.067841594889025]} }, { "type": "Feature", "properties": {}, "geometry": { "type": "Polygon", "coordinates": [[[105.8199691772461, 21.077772841655573], [105.8199691772461, 21.093148947008647], [105.83404541015625, 21.093148947008647], [105.83404541015625, 21.077772841655573], [105.8199691772461, 21.077772841655573]]]}}] }];
//            L.geoJson(data, {
//                onEachFeature: onEachFeature

//            }).addTo(cities);


        //sự kiện onload 
        $(document).ready(function () {
            // GetData_Map();
            // getlistGroupTree()
            // getall_coordinates()
            refreshData();
            // setInterval(function(){refreshData();},60000);
            //   getGeoJSON_FeatureGroup();
            //  setInterval(function () { getList_ECustoms(); }, 30000);
        });

      var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    //    var osmUrl = 'file:///D:/TTHQ_Map/offline/{s}/{z}/{x}/{y}.png',
        // var osmUrl = sUrl_OSM_Server+'WebService_Map.asmx/Get_Data?s={s}&z={z}&x={x}&y={y}',
        osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">trịnh đức bảo linh</a> contributors';
        //			normalView = L.tileLayer(osmUrl, { maxZoom: 18, attribution: osmAttrib }),
        //			map = new L.Map('map', { layers: [normalView, markersLayer], center: new L.LatLng(21.0350, 105.8447), zoom: 13 });


        //do googlemap chặn nên ko dùng dc

        //           var 
        //               streets = L.tileLayer(googleStreets, { maxZoom: 18, attribution: osmAttrib }),
        //               hybrid = L.tileLayer(googleHybrid, { maxZoom: 18, attribution: osmAttrib }),
        //               sat = L.tileLayer(googleSat, { maxZoom: 18, attribution: osmAttrib }),
        //               terrain = L.tileLayer(googleTerrain, { maxZoom: 18, attribution: osmAttrib });



        var mapbox_satellite = L.tileLayer(mbUrl, { id: 'mapbox.streets-satellite', attribution: osmAttrib }),
        mapbox_streets = L.tileLayer(mbUrl, { id: 'mapbox.streets', attribution: osmAttrib }),
        mapbox_light = L.tileLayer(mbUrl, { id: 'mapbox.light', attribution: osmAttrib }),
        mapbox_terrain = L.tileLayer(mbUrl, { id: 'mapbox.mapbox-terrain-v2', attribution: osmAttrib }),
        normalView = L.tileLayer(osmUrl, { maxZoom: 18, attribution: osmAttrib });


        var map = L.map('map', {
            center: [21.0061946, 105.8431751],
            zoom: 18,
            layers: [normalView, cities]
        });
        //các loại bản đồ cơ bản thông qua mapbox
        var baseMaps = {
            "cơ bản": normalView,
            //             "Streets": streets,
            //             "Hybrid": hybrid,
            //             "Sat": sat,
            "đường phố": mapbox_streets,
            "vệ tinh": mapbox_satellite,
            "ánh sáng": mapbox_light,
            "địa hình": mapbox_terrain
        };

        var c = "Cities";
        var overlayMaps = {
            "Cities": cities,
            a: ass
        };

        
        var over = {
            a: ass
        }

        var LeafIcon = L.Icon.extend({
            options: {
                shadowUrl: 'leaf-shadow.png',
                iconSize:     [38, 95],
                shadowSize:   [50, 64],
                iconAnchor:   [22, 94],
                shadowAnchor: [4, 62],
                popupAnchor:  [-3, -76]
            }
        });

          var greenIcon = new LeafIcon({iconUrl: '../View/leaf-green.png'}),
             blueIcon = new LeafIcon({iconUrl: '../View/leaf-blue.png'}),
            redIcon = new LeafIcon({iconUrl: '../View/leaf-red.png'}),
            orangeIcon = new LeafIcon({iconUrl: '../View/leaf-orange.png'});
            newIcon = new LeafIcon({iconUrl: '../View/pagelines.svg'});

        

        L.control.layers(baseMaps).addTo(map);
        //        var options = {
        //                    position: 'top right',
        //                    key: 'search-6tYEMo2',
        //                    limit: 5
        //                };

        //control tìm kiếm 1 vị trí cố định
        //cần phải có key API,lấy trên gubhud
        //         var options = {
        //                    bounds: true,
        //                    position: 'topright',
        //                    expanded: true
        //         };

        //         L.control.geocoder('search-6tYEMo2', options).addTo(map);

        // add control tìm kiếm 1 điểm cố định
        var osmGeocoder = new L.Control.Geocoder({ collapsed: true, position: 'topleft', placeholder: 'Tìm kiếm...', errorMessage: 'Không tìm thấy.', showResultIcons: true, geocoder: new L.Control.Geocoder.nominatim() });
        map.addControl(osmGeocoder);
        //         

        //add control chỉ đường
        var osmRouting = new L.Routing.control({ language: 'vie', collapsible: true, show: false, position: 'topleft', routeWhileDragging: true, geocoder: L.Control.Geocoder.nominatim() }).addTo(map);
        
        //add control lấy vị trí hiện tại của mình theo đinh vi gps
        var lc = L.control.locate({ position: 'topleft' }).addTo(map);


//            var results = L.layerGroup().addTo(map);

//            osmGeocoder.on(function (data) {
//                //                results.clearLayers();
//                //                for (var i = data.results.length - 1; i >= 0; i--) {
//                //                    results.addLayer(L.marker(data.results[i].latlng));
//                //                }
//                console.log(data);
//            });


        //tạo ra 1 gruop để lưu tạm thời các layer có trên map 
        var drawnItems = new L.FeatureGroup();
        // var drawnItems = new L.geoJson();
        map.addLayer(drawnItems);
        //        map.addControl(new L.Control.Compass());

        var drawControl = new L.Control.Draw({
            draw: {
                position: 'top',
                polygon: {
                    title: 'Draw a sexy polygon!',
                    allowIntersection: false,
                    drawError: {
                        color: '#b00b00',
                        timeout: 1000
                    },
                    shapeOptions: {
                        color: '#bada55'
                    },
                    showArea: true
                },
                polyline: {
                    metric: false
                },
                circle: {
                    title: 'vẽ hình tròn',
                    shapeOptions: {
                        color: '#662d91'

                    }
                }
            },
            edit: {
                featureGroup: drawnItems
            }
        });

        //add control vẽ vào map
        // map.addControl(drawControl);

        var layer_;
        //    dialog.dialog("close");
        map.on('draw:created', function (e) {
            $('#lbmsg').text("");
            var coords = e.layer._latlng;
            var layer = e.layer, type = e.layerType;
            var geoJSON = layer.toGeoJSON();
            var lagln = e.latLng;
            dialog.dialog("open");



            //                var name = "a";
            //                var description = "a";

            //thêm thuộc tính trong propety
            // layer.properties = { "name": name };
            //     layer.feature.properties.note = description;
            if (type === "circle") {


                //                    var holderLayer = L.geoJson(e.layer.toGeoJSON());
                //                    var actualLayer = holderLayer._layers[Object.keys(holderLayer._layers)[0]];

                //                    actualLayer.feature.properties["radius"] = e.layer.getRadius();
                //                    drawnItems.addLayer(actualLayer);
                //                    drawnItems.addLayer(layer);
                console.log("vẽ hình tròn");

                //gán gia trị radius cho cricle
                var radius = layer.getRadius();
                console.log(radius);
                //                geoJSON.properties.radius = radius;              
                //           

                //                layer.geojson = geoJSON;
                layer.properties = { "radius": radius };

                console.log(layer);
                //                layer.properties.radius = radius;
                //     console.log(JSON.stringify(layer.geojson));
                //   console.log(JSON.stringify(layer.toGeoJSON()));





                //            if (type === "marker") {
                //                console.log('point');


                //                // sự kiện click vào maker thì show ra popup 
                //                layer.on('click', function (event) {

                //                    var content = '<span><b>Shape Name</b></span><br/><input id="shapeName" type="text"/><br/><br/><span><b>Shape Description<b/></span><br/><textarea id="shapeDesc" cols="25" rows="5"></textarea><br/><br/><input type="button" id="okBtn" value="Save" onclick="return okBtn_onclick()"/>';
                //                    popup
                //                    .setLatLng(event.latlng)
                //                    .setContent(content)
                //                    .openOn(map);
                //                    document.getElementById("shapeName").value = "AADASDA";

                //                });
                           if (type === "marker") {
                               console.log('point');


                               // sự kiện click vào maker thì show ra popup 
                               layer.on('click', function (event) {

                                   var content = '<span><b>Shape Name</b></span><br/><input id="shapeName" type="text"/><br/><br/><span><b>Shape Description<b/></span><br/><textarea id="shapeDesc" cols="25" rows="5"></textarea><br/><br/><input type="button" id="okBtn" value="Save" onclick="return okBtn_onclick()"/>';
                                   popup
                                   .setLatLng(event.latlng)
                                   .setContent(content)
                                   .openOn(map);
                                   document.getElementById("shapeName").value = "AADASDA";


                                   });
                                }

            }

            //   console.log(layer);
            //            var tempMarker = 
            // drawnItems.addLayer(layer);



            //    console.log(drawnItems);
            //  console.log(layer.properties.name.toString());

            //  console.log(JSON.stringify(drawnItems.toGeoJSON()));

            layer_ = layer;
         //   console.log("đã qua");






        });

        //set vị trí và hiển thị dialog
        var dialog = $("#dialog").dialog({
            autoOpen: false, //luôn đóng
            height: 300,
            width: 350,
            modal: true,
            className: 'modal fade',
            position: { //vị trí hiển thị
                my: "center center",
                at: "center center",
                of: "#map"
            },
            buttons: { //sau khi ấn vào button add to db sẽ thực hiện hàm 
                "Tạo": setData,
                "Hủy": function () {
                    dialog.dialog("close");
                    //refreshLayer();
                }
            },
            close: function () { //reset dialog
                //    form[0].reset();
                //  refreshLayer();
                console.log("Dialog closed");
            }
        });


        function clear_Dialog() {
            $("#listgrouptree").val("");
            $("#tree").val("");
            listgrouptree:[]
            listtree:[]
        }

        //        function setData() {
        //            console.log("save");
        //        }

     


//            function onMapClick(e) {
//                popup
//                .setLatLng(e.latlng)
//                .setContent("You clicked the map at " + e.latlng.toString())
//                .openOn(map);
//            }

//            //sự kiện click vào map 
//           map.on('click', onMapClick);
        


        
        /************************************************************************************/
//            var markers = new Array();
//            map.on('click', onMapClick);

//            function onMarkerClick(e) {
//                $('div').removeClass('active');
//                $('div #' + e.target._leaflet_id).addClass('active');
//                map.panTo(e.target.getLatLng());
//            }

//            function onMapClick(e) {

//                var marker = new L.Marker(e.latlng);

//                marker.on('click', onMarkerClick);
//                map.addLayer(marker);
//                markers[marker._leaflet_id] = marker;

//                //hàm này để thêm 1 thẻ div vào 
//                $('#overlay').append(
//                 '<div class="item" id="' + marker._leaflet_id + '">Marker ' + marker._leaflet_id + ' - <a href="#" class="remove" id="' + marker._leaflet_id + '">remove</a></div>');

//                // Remove a marker
//                $('.remove').on("click", function () {
//                    // Remove the marker
//                    map.removeLayer(markers[$(this).attr('id')]);

//                    // Remove the link
//                    $(this).parent('div').remove();
//                });

//                $('.item').on("mouseover", function () {
//                    $('div').removeClass('active');
//                    $(this).addClass('active');
//                    var mid = $(this).attr('id');
//                    var LatLng = markers[mid].getLatLng();
//                    map.panTo(LatLng);
//                });
//            }

        // map.on('draw:edited', function (e) {
        //     var layers = e.layers;
        //     console.log('edit',layers)
        //     layers.eachLayer(function (layer) {
        //         console.log('layers',layer)

        //         layer.on('click', function (event) {
        //             var content = 'HIHI';
        //             popup
        //         .setLatLng(event.latlng)
        //         .setContent(content)
        //         .openOn(map);

        //         });

        //         //do whatever you want, most likely save back to db
        //     });
        // });
        map.on('draw:deleted', function (e) {
            var layers = e.layers;
            layers.eachLayer(function (layer) {
                deleteCood(layer)
                //do whatever you want, most likely save back to db
            });
        });


         map.on('draw:edited', function (e) {
            var layers = e.layers;
            layers.eachLayer(function (layer) {
                console.log('layers',layer)
                updateCood(layer)
                // layer.on('click', function (event) {
                //     var content = 'HIHI';
                //     popup
                // .setLatLng(event.latlng)
                // .setContent(content)
                // .openOn(map);

                // });

                //do whatever you want, most likely save back to db
            });
        });






//            L.marker([21.02876, 105.85239]).addTo(map)
//			    .bindPopup("đây là Hồ Gươm").openPopup();

        // map.addControl(new L.Control.Search({ layer: searchLayer }));

        //tạo control fullscreen
        var fsControl = new L.Control.FullScreen();
        //add control vào map
        map.addControl(fsControl);
        //xử lý sự kiện
        //nếu đang full thì nhấp vào control sẽ thu nhỏ
        map.on('enterFullscreen', function () {
            if (window.console) window.console.log('enterFullscreen');
        });
        //ngược lại
        map.on('exitFullscreen', function () {
            if (window.console) window.console.log('exitFullscreen');
        });



        //sự kiện click chuột phải vào map
        map.on('contextmenu', function (e) {
            alert(e.latlng);
        });
       
      





//         sụ kiện click chuột phải vào các lớp vẽ khác layers
        var layers_and_features = map._layers;
        for (var lay in layers_and_features) {
            //Hacky way to get geojson type layer (can work for other vector layer, see Leaflet API, searching keyword contextmenu)
            if (layers_and_features[lay].addData) {
                layers_and_features[lay].on('contextmenu', function (e) {
                    alert(e.latlng);
                });
            }
        }








    //    var data = [{ "type": "Feature", "properties": { "name": "s", "note": "d" }, "geometry": { "type": "Point", "coordinates": [105.8203125, 21.035480353414883]} }, { "type": "Feature", "properties": { "name": "sa", "note": "ds" }, "geometry": { "type": "Point", "coordinates": [105.81859588623047, 21.026347443712655]} }, { "type": "Feature", "properties": { "name": "sas", "note": "dss" }, "geometry": { "type": "Point", "coordinates": [105.88691711425781, 21.043010577150227]}}]

    //            var data = { "type": "FeatureCollection", "features": [{ "type": "Feature", "properties": { "name": "diem1" }, "geometry": { "type": "Point", "coordinates": [105.81516265869139, 21.037723438590533]} }, { "type": "Feature", "properties": { "name": "diem2" }, "geometry": { "type": "Point", "coordinates": [105.81087112426758, 21.031154308064544]} }, { "type": "Feature", "properties": { "name": "diem3" }, "geometry": { "type": "Point", "coordinates": [105.8287239074707, 21.036922340619142]}}] }
    //               L.geoJson(data, {
    //                        onEachFeature: onEachFeature
                      
    //                }).addTo(map);



        //sự kiện khi click vào layer
        function onEachFeature(feature, layer) {
            var popupContent = "<div>";
                       

            if (feature.properties && feature.properties.name) {
                popupContent += "<div>Nhóm cây: "+ feature.properties.name +"</div>";
                popupContent += "</div>";


            }
            if (feature.properties && feature.properties.note) {
                popupContent += "<br /><div>";
                popupContent += "<div>Nhóm cây: "+ feature.properties.note +"</div>"
                popupContent += "</div>";
            }
                popupContent += "<br /><div>";
                popupContent+=  "<btn onclick='return removeCood()' class='btn btn-danger'>Xóa điểm </div>"
                popupContent += "</div>";
            //popupContent += "<br /><div> <input type='button' value='Delete this marker' class='marker-delete-button'/></div>"; 

            layer.bindPopup(popupContent);
            drawnItems.addLayer(layer);

        }
        
        var markers = new Array();
        // map.on('click', onMarkerClick);

        function onMarkerClick(e) {
           
            $('div').removeClass('active');
            $('div #' + e.target._leaflet_id).addClass('active');
            map.panTo(e.target.getLatLng());
        }

        function setData() {
            // var name = username.value;
            // var note = description.value;
            var tree_id = $('#tree').val();
            var grouptree_id = $('#listgrouptree').val();
            let tree =   listtree.filter(function(tree) {return tree.id == tree_id});
            let grouptree =  listgrouptree.filter(function(group) {return group.id == grouptree_id});
            console.log(tree_id,grouptree_id,tree,grouptree)
            layer_.properties = { "name": grouptree[0].groupname,"tree_id":tree_id, "note": tree[0].code };

            createCood(layer_,function(data){
                if(data.EC==0){
                    drawnItems.addLayer(layer_);
                    dialog.dialog("open");
                    let dataBind  = {
                        name:grouptree[0].groupname,
                        note:tree[0].code,
                        status:tree[0].status,
                        tree_id,
                        url_image:grouptree[0].url_image
                
                      }   
                      
                          let icon = greenIcon ;
                            if(dataBind.status)
                                 icon = dataBind.status.trim()=="tốt"?greenIcon:dataBind.status.trim()=="kém"?redIcon:orangeIcon 
                            
                            if(!isCreateMap)
                                layer_.setIcon(icon).bindPopup(getPopupContent(dataBind));
                            else
                                layer_.bindPopup(getPopupContent(dataBind));
                            
                        
                            dialog.dialog("close");
                            clear_Dialog();
                    }
                    else{
                        $('#lbmsg').text( data.DT);
                    }
              })
            
            //sự kiện click vào layer_

            // layer_.on('click', onMarkerClick);
            markers[layer_._leaflet_id] = layer_;
            console.log(layer_);
            console.log(layer_._leaflet_id);
            //hàm này để thêm 1 thẻ div vào 
            $('#overlay').append(
             '<div class="item" id="' + layer_._leaflet_id + '">-<a href="#" class="name" id="'+ + layer_._leaflet_id+'">Tên: ' + grouptree.groupname+tree.code +'</a>'+ ' - <a href="#" class="remove" id="' + layer_._leaflet_id + '">xóa</a>   <a href="#" class="edit" id="' + layer_._leaflet_id + '">thay đổi</a></div>');

            // Remove a marker
            $('.remove').on("click", function () {
                // Remove the marker
              
                drawnItems.removeLayer(markers[$(this).attr('id')]);

                // Remove the link
                $(this).parent('div').remove();
            });

            $('.edit').on("click", function () {
                // Remove the marker

                //hiển thị lên popup cho ng dùng nhập tên vs ghi chú
                //có nút save và nút cancle
                 dialog.dialog("open");
                console.log(markers[$(this).attr('id')].properties.name);

                username.value = markers[$(this).attr('id')].properties.name;
                description.value = markers[$(this).attr('id')].properties.note;
                //sự kiện save

                //sửa lại hiển thị popup

                //sửa lại property trong layer_



                //sự kiện cancel

                //ẩn popup

                // Remove the link
                //   $(this).parent('div').remove();
            });


            //sự kiện di chuyển chuột vào các item trên thẻ div
          $('.item').on("mouseover", function () {
               $('div').removeClass('active');
               $(this).addClass('active');
//                   var mid = $(this).attr('id');
//                   var LatLng = markers[mid].getLatLng();
//                    map.panTo(LatLng);
           });
//               $('.item').on("click", function () {
//                   $('div').removeClass('active');
//                   $(this).addClass('active');
//                   var mid = $(this).attr('id');
//                   var LatLng = markers[mid].getLatLng();
//                   map.panTo(LatLng);
//               });
            $('.name').on("click", function () {
                $('div').removeClass('active');
                $(this).addClass('active');
                var mid = $(this).attr('id');

                var LatLng = markers[mid].getLatLng();
                console.log(LatLng);
                //đưa màn hình về vị trí latlng
                map.panTo(LatLng);
            });
            // <div><img/></div>

            //thêm popup hiển thị
            // let dataBind  = {
            //     name:grouptree[0].groupname,
            //     note:tree[0].code,
            //     status:tree[0].status,
            //     datanew:true,
            //     tree_id,
            //     url_image:grouptree[0].url_image
                
            // }
            // let icon = newIcon
            
            // if(!isCreateMap)
            //     layer_.setIcon(icon).bindPopup(getPopupContent(dataBind));
            // else{
              
            //     layer_.bindPopup(getPopupContent(dataBind));
            // }
            // console.log(layer_);


            // console.log("save");
            // dialog.dialog("close");
            // clear_Dialog();
        }



       /////////////////////////////////////////////////////////////////////////
        /*********************************************************************/
        //////////////////////////////////////////////////////////////////////



        //các hàm thực hiện với database .......

  
        //hàm lấy các map đã lưu và add vào layergruop

        function GetData_Map() {

            var overs = {};

            $.ajax({

                // type: "GET",
                url: sUrl_OSM_Server+ "maptree/getmap",
                //   data: '{toado:"' + JSON.stringify(drawnItems.toGeoJSON()) + '",name:"' + name + '",note:"' + name + '"}',
                //  data: "{'toado':'" + data + "','name':'" + name + "','note':'" + name + "'}",
                // contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {

                    console.log(data);
                    var len = data.length;
                    //   var layergr
                    console.log(data.length);
                    console.log("thành công");
                    for (var i = 0; i < len; i++) {

                        console.log("vào for");

                        var name = data[i].name;
                        var data_map = data[i].data;
                        console.log(data_map);
                        var layergruop = new L.LayerGroup();
                        L.geoJson(data_map, {
                            onEachFeature: onEachFeature

                        }).addTo(layergruop);

                        overs[name] = layergruop;

                        console.log(overs.name);
                    }

                    console.log(overs);

                    // var overss = { "Các bản đồ": overs };
                    L.control.layers(null, overs).addTo(map);
                    //  L.control.groupedLayers(overss).addTo(map);
                }



            });
        }




        //chuyển dữ liệu lưu trong drawitems sang dạng json để lưu trong db,vì có nhiều thêm các thuộc tính ms nên hàm TogeoJson ko đáp ứng đc

        function toGeoJson() {

            console.log('data aaa',drawnItems);
            
            var i = 0, data = "";
            // vào từng thành phần nhỏ để lấy
            //item là chỉ số của layer
            for (var item in drawnItems._layers) {
                var name = drawnItems._layers[item].properties.name.toString();
                var note = drawnItems._layers[item].properties.note.toString();
                var tree_id = drawnItems._layers[item].properties.tree_id.toString();
                // console.log(drawnItems._layers[item].properties.name.toString());
                var geojson = drawnItems._layers[item].toGeoJSON();

                //dem so layer co trong drawitems 
                i++;
                //tạo ra thuộc tính cho json và gán giá trị cho nó
                geojson.properties.name = name;
                geojson.properties.note = note;
                geojson.properties.tree_id = tree_id;
                if (drawnItems._layers[item]._mRadius)
                    geojson.properties.radius = drawnItems._layers[item]._mRadius;

                
                data += JSON.stringify(geojson);
                data += ",";
                console.log(JSON.stringify(geojson));
                //       
                //                var item = drawnItems[i];
                //                console.log(item.properties.name.toString());
            }
            data = data.substring(0, data.length - 1);

            //nếu có nhiều hơn 1 layer trong drawitems thì cần thêm ngoặc để bao trọn toàn bộ
            if (i > 1) {

                data = "[" + data + "]";
            }
            console.log(data);
            // alert(JSON.stringify(data));
            return data;
        }


        //hàm thực hiện lưu map vào database
        function updateMap() {
            // var data = drawnItems.toGeoJSON();
            // $('#lbMessage').html("");
            var data = toGeoJson();
            // var name = txtName.value;
            // var dis = txtNote.value;

            if (drawnItems.toGeoJSON().features.length <= 0) {
                alert('Bản đồ chưa có gì thay đổi')
                // $('#lbMessage').html("Bạn chưa vẽ bản đồ nào");
                // $('#lbMessage').css("color", "red");
                return;
            }

            // if (name.trim() == "") {
            //     $('#lbMessage').html("Bạn chưa nhập tên bản đồ");
            //     $('#lbMessage').css("color", "red");
            //     //   alert("Bạn chưa nhập tên bản đồ");
            //     //    txtsFeatureGroup.focus();
            //     return;
            // }

            // alert(JSON.stringify(data));
            console.log(data);


            let dataMap = {
                data:data,
                // name:name,
                // note:dis
            }
           
            $.ajax({
                type: "POST",
                url: sUrl_OSM_Server+ "Coordinates/add",
                //   data: '{toado:"' + JSON.stringify(drawnItems.toGeoJSON()) + '",name:"' + name + '",note:"' + name + '"}',
                // data: "{'data':'" + data + "','name':'" + name + "','note':'" + dis + "'}",
                data: dataMap,
                // contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {

                    console.log(data);
                    // $('#lbMessage').html("Thêm thành công!");
                    // $('#lbMessage').css("color", "green");
                     alert("Cập nhật thành công");
                    //  console.log("thành công");


                    //getGeoJSON_FeatureGroup();
                }

            });
        }


        //hàm xóa map theo tên map
        function btnDeleteMap_onclick() {

            var name = txtNamDelete.value;


            $.ajax({
                type: "POST",
                url: sUrl_OSM_Server + "WebService_Map.asmx/Delete_Map",
                //   data: '{toado:"' + JSON.stringify(drawnItems.toGeoJSON()) + '",name:"' + name + '",note:"' + name + '"}',
                data: "{'name':'" + name + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {

                    console.log(data);
                    if (data.d > 0) {
                        alert("xóa thành công");
                    }
                    else {
                        alert("xóa không thành công");
                    }
                    // alert("lưu thành công");
                    //  console.log("thành công");


                    //getGeoJSON_FeatureGroup();
                }

            });

        }

        //su kien double click popup


        function myFunction() {
            //alert("đã dbclick");
            dialog.dialog("open");
        }
