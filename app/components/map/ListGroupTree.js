import React from 'react';
import Select from 'react-select';
import { NavigationFullscreen } from 'material-ui';
import axios from 'axios'
import Switch from 'react-toggle-switch'

class App extends React.Component {
  state = {
    listGroupTree:[],
    selectedOption: '',
    grouptree:null,
    switched:false
  }
  toggleSwitch = () => {
    
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
        axios.get('/coordinates/getall')
        .then((res)=>{
            // self.setState({listGroupTree:res.data})
            if(res.data.EC==0){
              layerTree =  L.geoJson(res.data.DT, {
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
        })
  }
  getCood(listgrouptree_id){
    map.removeLayer(layerTree);

    axios.post('/coordinates/getlist',{listgrouptree_id})
        .then((res)=>{
            // self.setState({listGroupTree:res.data})
            if(res.data.EC==0){
              layerTree =  L.geoJson(res.data.DT, {
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
  onChangeSYMBOL(e) {
    var that = this;
    if(e){
      console.log('e',e)
      this.getCood(e)
    }
    this.setState({ grouptree: e });
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
                  placeholder="Nhậ tên nhóm cây"
                  loadOptions={this.getOptionsSYMBOL.bind(this)}
                  value={this.state.grouptree}
                
                  options={this.state.listGroupTree}
                  onChange={this.onChangeSYMBOL.bind(this)}
                  cache={false}
                />
              </div>
      
            </div>
        </div>
    );
  }
}
module.exports  = App;