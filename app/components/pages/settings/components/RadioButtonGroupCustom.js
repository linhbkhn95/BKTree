import React from 'react';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
const styles = {
    block: {
      maxWidth: 250,
    },
    radioButton: {
      marginBottom: 16,
    },
  };
  
class RadioButtonExampleSimple extends React.Component{
    _onChange(event,value) {
      var updated = {};
      
      updated[event.target.name] = value;
      console.log(updated);
      this.props.onChange(value);
      // this.setState(updated);
    }
    render(){
      return(
        <div >
          <RadioButtonGroup name="shipSpeed" onChange={this._onChange.bind(this)} defaultSelected="not_light">
            <RadioButton
              value="black"
              label="Black"
              style={styles.radioButton}
            />
            <RadioButton
              value="green"
              label="Grenn light"
              style={styles.radioButton}
            />
            <RadioButton
              value="yellow"
              label="Yellow"
              checkedIcon={<ActionFavorite style={{color: '#F44336'}} />}
              uncheckedIcon={<ActionFavoriteBorder />}
              style={styles.radioButton}
            />
          </RadioButtonGroup>
      
      </div>
      )
    }
  }
   
  module.exports = RadioButtonExampleSimple;