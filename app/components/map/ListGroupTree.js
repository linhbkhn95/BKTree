import React from 'react';
import Select from 'react-select';
import { NavigationFullscreen } from 'material-ui';
import axios from 'axios'
import Switch from 'react-toggle-switch'
require("babel-core/register");
require("babel-polyfill");
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

var green = new LeafIcon({iconUrl: '../View/leaf-green.png'}),
   blue = new LeafIcon({iconUrl: '../View/leaf-blue.png'}),
  red = new LeafIcon({iconUrl: '../View/leaf-red.png'}),
  orange = new LeafIcon({iconUrl: '../View/leaf-orange.png'});


class App extends React.Component {
  state = {
    listGroupTree:[],
    selectedOption: '',
    grouptree:null,
    tree:null,
    switched:false
  }
  toggleSwitch = () => {
    let self = this;
    map.removeLayer(layerTree);

    if(!this.state.switched)
      this.getallCood()
    this.setState(prevState => {
      return {
        switched: !prevState.switched
      };
    });
  };
  componentWillMount(){
      let self = this
      axios.get('/group_tree/getoptions_reactselect')
      .then((res)=>{
          self.setState({listGroupTree:res.data})
      })
  }
  
  componentDidMount(){
        this.getallCood()

        
  }
  getallCood(){
    let self = this
           axios.get('/coordinates/getall')
           .then((res)=>{
               // self.setState({listGroupTree:res.data})
               if(res.data.EC==0){
                 self.setState({listTree:res.data.DT.listTree})
                 layerTree =  L.geoJson(res.data.DT.geoJson, {
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
                            icon= feature.properties.status.trim()=="tốt"?green:feature.properties.status.trim()=="kém"?red:orange
                       else
                           icon  = green
                           return L.marker(latlng, {icon});
                       },
              
                        }).addTo(map);
               }
           })
     }
  getCood(listgrouptree_id){
    map.removeLayer(layerTree);
    let self =this
    axios.post('/coordinates/getlist',{listgrouptree_id})
        .then((res)=>{
            // self.setState({listGroupTree:res.data})
            if(res.data.EC==0){
              self.setState({listTree:res.data.DT.listTree})
              layerTree =  L.geoJson(res.data.DT.geoJson, {
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
            }
            else{

            }
        })
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  }
  async getOptionsSYMBOL(input) {
    return { options: this.state.listGroupTree }
  }
  async getOptionsTree(input) {
    return { options: this.state.listTree }
  }
  onChangeSYMBOL(e) {
    var that = this;
    if(e){
      console.log('e',e)
      this.getCood(e)
    }
    this.setState({ grouptree: e,tree:null });
  }
  onChangeTree(e) {
    var that = this;
    if(e){
      console.log('tree',e)
      var LatLng = e._latlng;
      let ly = map.panTo(LatLng,{animate: true});
      var popup=L.popup()
      .setLatLng(LatLng)
      .setContent(getPopupContent(e.properties))
      .openOn(map);
      // this.getCood(e)
    }
    this.setState({ tree: e });
  }
	getContributors (input, callback) {
		input = input.toLowerCase();
		var options = CONTRIBUTORS.filter(i => {
			return i.github.substr(0, input.length) === input;
		});
		var data = {
			options: options.slice(0, MAX_CONTRIBUTORS),
			complete: options.length <= MAX_CONTRIBUTORS,
		};
		setTimeout(function() {
			callback(null, data);
		}, ASYNC_DELAY);
	}
  render() {
  	const { selectedOption } = this.state;

    return (
       <div className="">
         
         <div className="title-menu-right"> <i style={{marginRight:"5px",fontSize:"18px"}} className="fa fa-eye" aria-hidden="true"></i>
Chế độ hiển thị cây trên bản đồ </div>
        <div className="col-md-12">
            <h5 className="col-xs-5">Toàn bộ cây</h5> 

             <div className="col-xs-7 "> <Switch onClick={this.toggleSwitch} on={this.state.switched}/></div>

        </div>
        <div className="col-xs-12">
              <h5 className="col-xs-5">Nhóm cây</h5>
              <div className="col-xs-7 ">
                {/* <InputComponent placeholder="VFMVF1" validate={this.state.SYMBOL.validate} type="text" name="SYMBOL"
                        tooltip={this.state.SYMBOL.tooltip} onChange={this.handleChange.bind(this)} /> */}
                {/* <SelectFactory isAutoUppercase={true} type="SYMBOL" CDTYPE="SA" CDNAME="FUND" onChange={this.onChangeAllcode.bind(this)}  placeholder="Nhập MCCQ" /> */}
                <Select.Async
                  multi={true}
                  name="form-field-name"
                  disabled={this.state.switched}
                  placeholder="Nhập tên nhóm cây"
                  loadOptions={this.getOptionsSYMBOL.bind(this)}
                  value={this.state.grouptree}
                
                  options={this.state.listGroupTree}
                  onChange={this.onChangeSYMBOL.bind(this)}
                  cache={false}
                />
              </div>
      
            </div>
            <div style={{marginTop:"5px"}} className="col-xs-12">
              <h5 className="col-xs-5">Đi đến cây</h5>
              <div className="col-xs-7 ">
                {/* <InputComponent placeholder="VFMVF1" validate={this.state.SYMBOL.validate} type="text" name="SYMBOL"
                        tooltip={this.state.SYMBOL.tooltip} onChange={this.handleChange.bind(this)} /> */}
                {/* <SelectFactory isAutoUppercase={true} type="SYMBOL" CDTYPE="SA" CDNAME="FUND" onChange={this.onChangeAllcode.bind(this)}  placeholder="Nhập MCCQ" /> */}
                <Select.Async
                 
                  name="form-field-name"
                  placeholder="Nhập mã cây"
                  loadOptions={this.getOptionsTree.bind(this)}
                  value={this.state.tree}
                
                  options={this.state.listTree}
                  onChange={this.onChangeTree.bind(this)}
                  cache={false}
                />
              </div>
      
            </div>
        </div>
    );
  }
}
module.exports  = App;